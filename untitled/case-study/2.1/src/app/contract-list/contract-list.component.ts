import { Component, OnInit } from '@angular/core';
import {Contract} from "../contract";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contracts: Contract[]= [
    {id: 1,startDay: '2022-06-10', endDay: '2022-06-12',customerId: 1,employeeId: 1, deposit: 500,total: 1500, service: 1},
    {id: 2,startDay: '2022-06-10', endDay: '2022-06-12',customerId: 2,employeeId: 2, deposit: 500,total: 1500, service: 2},
    {id: 3,startDay: '2022-06-10', endDay: '2022-06-12',customerId: 3,employeeId: 3, deposit: 500,total: 1500, service: 3},
    {id: 4,startDay: '2022-06-10', endDay: '2022-06-12',customerId: 4,employeeId: 4, deposit: 500,total: 1500, service: 4}
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
