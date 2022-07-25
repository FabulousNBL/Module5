import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../customer-service.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup= new FormGroup({
    id: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    idCard: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.pattern('^\\+84\\d{9,10}$')),
    type: new FormControl('',Validators.required)
  })
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const customer = this.createForm.value;
    this.customerService.saveCustomer(customer);

    this.createForm.reset();
  }
}
