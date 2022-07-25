import { Injectable } from '@angular/core';
import {Customer} from "./customer";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] =[
    {id: 1, idCard:123456789, name:'Nguyễn Bảo Long', phone:'0373959515', type: 1},
    {id: 2, idCard:123456781, name:'Nguyễn Thị Xuân Hương', phone:'0373959511', type: 2},
    {id: 3, idCard:123456782, name:'Lê Huy Hoàng', phone:'0373959512', type: 3},
    {id: 4, idCard:123456783, name:'Nguyễn Duy Hưng', phone:'0373959513', type: 1}
  ]
  constructor() { }

  getAll(){
    return this.customers;
  }

  saveCustomer(customer: Customer){
    this.customers.push(customer)
  }

  updateCustomer(customer: Customer){
    const index = this.customers.findIndex(c => c.id === customer.id);
    this.customers[index] = customer
  }

  findById(id: number): Customer{
    console.log(id)
    return this.customers.find(c => c.id == id)
  }

  delete(customer : Customer){
    const index= this.customers.findIndex(c => c.id === customer.id);
    this.customers.splice(index,1);
  }
}
