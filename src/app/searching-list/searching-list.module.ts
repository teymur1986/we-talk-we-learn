import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchingListComponent } from './searching-list.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ViewerComponent } from './viewer/viewer.component';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [SearchingListComponent, ViewerComponent, ItemListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
  ]
})
export class SearchingListModule { }
