import { Component, OnInit } from '@angular/core';
import {ToastrModule} from "ngx-toastr";
import {CustomerService} from "../customer.service";
import {Customer} from "../customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers : Customer[];
  constructor(private toastr: ToastrModule,
              private customerService: CustomerService) {
    this.getCustomerList()
  }

  ngOnInit(): void {

  }

  getCustomerList(){
    this.customerService.getAll().subscribe(value => {
      this.customers = value;
    }, error => {
      console.log(error)
    })
  }
}
