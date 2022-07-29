import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TicketListComponent} from "./ticket/ticket-list/ticket-list.component";
import {EditTicketComponent} from "./ticket/edit-ticket/edit-ticket.component";


const routes: Routes = [
  {
    path: '',
    component: TicketListComponent
  },
  {
    path: 'edit/:id',
    component: EditTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
