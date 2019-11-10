import { Component, OnInit, Input } from '@angular/core';
import { ISearchListItem } from '../../store/searching-list/searching-list.reducer';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {

  @Input() viewData: ISearchListItem;

  constructor() {}
}
