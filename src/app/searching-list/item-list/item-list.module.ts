import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list.component';
import { MaterialModule } from '../../material/material.module';



@NgModule({
  declarations: [ItemListComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class ItemListModule { }
