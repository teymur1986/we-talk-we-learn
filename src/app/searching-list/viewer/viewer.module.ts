import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from './viewer.component';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [ViewerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ViewerModule { }
