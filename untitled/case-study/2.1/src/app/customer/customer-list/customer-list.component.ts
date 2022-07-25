import { Component, OnInit } from '@angular/core';

import {CustomerService} from "../customer-service.service";
import {Customer} from "../customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  id: number;

  customers: Customer[];
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAll();
  }



  getAll(){
    this.customers = this.customerService.getAll();
  }

  getId(id: number) {
    this.id = id;
    console.log(this.id)
  }
}
