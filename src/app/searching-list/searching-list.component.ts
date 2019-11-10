import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ISearchListState, ISearchListItem } from '../store/searching-list/searching-list.reducer';
import { HttpService } from '../services/http.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import * as actions from '../store/searching-list/searching-list.actions';

@Component({
  selector: 'app-searching-list',
  templateUrl: './searching-list.component.html',
  styleUrls: ['./searching-list.component.scss']
})
export class SearchingListComponent {

  storage: Observable<{ storage: ISearchListItem[] }>;
  viewData: ISearchListItem;

  constructor(
    private store: Store<{ searchingList: ISearchListState }>,
    private httpService: HttpService,
  ) { }

  onViewClicked(answerIndex: number) {
    this.store.select('searchingList').subscribe(res => {
      this.viewData = res.storage[answerIndex];
    });
  }

  async onSubmit(form: NgForm) {
    if (form.status === 'VALID') {
      const { searchBar } = form.value;
      this.httpService.fetchAnswersByTag(searchBar)
          .subscribe(result => {
            const { items = [] } = result;
            if (items.length) {
              const payload = items.map(i => ({
                title: i.title,
                score: i.score,
                count: i.view_count,
                link: i.link,
              }));
              this.store.dispatch(new actions.addStorageSuccess(payload));
            } else {
              this.store.dispatch(new actions.addStorageSuccess([]));
            }
          });
    }
  }

}
