import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearchListItem, ISearchListState } from '../../store/searching-list/searching-list.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Output() onUpdateViewId = new EventEmitter<number>();
  storage: Observable<{ storage: ISearchListItem[] }>;


  constructor(
    private store: Store<{ searchingList: ISearchListState }>,
  ) {/** NOP */}

  ngOnInit() {
    this.storage = this.store.select('searchingList');
  }

  onViewClicked(i: number) {
    this.onUpdateViewId.emit(i);
  }

}
