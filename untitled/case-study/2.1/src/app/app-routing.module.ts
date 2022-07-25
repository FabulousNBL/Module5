import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {ServiceListComponent} from "./service/service-list/service-list.component";
import {ContractListComponent} from "./contract/contract-list/contract-list.component";
import {EditCustomerComponent} from "./customer/edit-customer/edit-customer.component";
import {DeleteCustomerComponent} from "./customer/delete-customer/delete-customer.component";


const router: Routes = [
  {path: '', component: CustomerListComponent},
  {path: 'service', component: ServiceListComponent},
  {path: 'customer', component: CustomerListComponent},
  {path: 'contract', component: ContractListComponent},
  {path: 'customer/edit/:id', component: EditCustomerComponent},
  {path: 'customer/delete/:id', component: DeleteCustomerComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
