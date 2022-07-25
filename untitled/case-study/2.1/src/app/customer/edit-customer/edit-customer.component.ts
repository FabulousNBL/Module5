import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../customer-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customer: Customer;
  updateForm : FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    idCard: new FormControl(),
    phone: new FormControl(),
    type: new FormControl()
  })
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.updateForm.patchValue(this.customerService.findById(id));
  }

  update(){
    this.customerService.updateCustomer(this.updateForm.value);
    this.router.navigateByUrl('')
    alert('Success')
  }
}
