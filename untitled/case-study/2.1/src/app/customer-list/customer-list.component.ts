import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] =[
    {id: 1, idCard:123456789, name:'Nguyễn Bảo Long', phone:'0373959515', type: 1},
    {id: 2, idCard:123456781, name:'Nguyễn Thị Xuân Hương', phone:'0373959511', type: 2},
    {id: 3, idCard:123456782, name:'Lê Huy Hoàng', phone:'0373959512', type: 3},
    {id: 4, idCard:123456783, name:'Nguyễn Duy Hưng', phone:'0373959513', type: 1}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
