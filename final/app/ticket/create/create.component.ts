import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Company} from "../company";
import {TicketService} from "../ticket.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  @Output()
  eventEmitter = new EventEmitter();
  company: Company[];
  constructor(private ticketService: TicketService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCompany();
    this.createForm = new FormGroup({
      price: new FormControl('',[Validators.required, Validators.min(0)]),
      fromPlace: new FormControl('',Validators.required),
      toPlace: new FormControl('',Validators.required),
      day: new FormControl('',Validators.required),
      atTime: new FormControl('',Validators.required),
      company: new FormControl('',Validators.required),
      count: new FormControl('',[Validators.required,Validators.min(0)])
    })
  }

  getCompany(){
    this.ticketService.getCompanyList().subscribe((value: any) => {
      this.company= value.content;
    })
  }

  onSubmit() {
    const ticket = this.createForm.value;
    this.ticketService.saveTicket(ticket).subscribe(value => {
      this.eventEmitter.emit();
      this.toastr.success('Create successful','Add new ticket')
    }, error => {
      console.log(error)
    })
  }
}
