import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchingListComponent } from './searching-list/searching-list.component';


const routes: Routes = [
  { path: '**', component: SearchingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
