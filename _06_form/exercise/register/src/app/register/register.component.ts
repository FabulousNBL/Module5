import {Component, OnInit} from '@angular/core';
import {AbstractControl, NgForm} from "@angular/forms";
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {CustomValidator} from "./customer-validator";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  countries = ['Việt Nam', 'Korea', 'Japan', 'USA'];


  contactForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', Validators.required),
      country: new FormControl('',Validators.required),
      age: new FormControl('',this.checkAge18),
      gender: new FormControl('',Validators.requiredTrue),
      phone: new FormControl('',Validators.pattern('^\\+84\\d{9,10}$'))
    },
    CustomValidator.mustMatch('password', 'passwordConfirm')
  )


  constructor() {
  }

  get f() {
    return this.contactForm.controls;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm)
  }

  checkAge18(abstractControl: AbstractControl): any{
    const rYear = abstractControl.value.substr(0,4);
    const curYear = new Date().getFullYear();
    return curYear - rYear >=18 ? null : {not18: true}
  }
}
