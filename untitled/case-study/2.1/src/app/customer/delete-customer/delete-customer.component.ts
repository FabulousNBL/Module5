import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {


  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }
  deleteForm : FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    idCard: new FormControl(),
    phone: new FormControl(),
    type: new FormControl()
  })
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.deleteForm.patchValue(this.customerService.findById(id));
  }

  delete(){
    this.customerService.delete(this.deleteForm.value);
    this.router.navigateByUrl('')
    alert('Success')
  }
}
