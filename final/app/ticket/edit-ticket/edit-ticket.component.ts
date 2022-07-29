import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TicketService} from "../ticket.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Company} from "../company";
import {ToastrService} from "ngx-toastr";
import {Ticket} from "../ticket";

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {
  companies: Company[] = [];
  editForm : FormGroup = new FormGroup({
    id: new FormControl(),
    price: new FormControl(),
    fromPlace: new FormControl(),
    toPlace: new FormControl(),
    atTime: new FormControl(),
    day: new FormControl(),
    company: new FormControl(),
    count: new FormControl()
  })
  constructor(private ticketService: TicketService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCompany();
    const id = this.activatedRoute.snapshot.params.id;
    this.ticketService.findById(id).subscribe(value => {
      this.editForm.patchValue(value)
    })

  }

  getCompany(){
    this.ticketService.getCompanyList().subscribe((value: any) => {
      console.log(value)
      this.companies = value.content
    })
  }

  compareByID(itemOne, itemTwo) {
    // tslint:disable-next-line:triple-equals
    return itemOne && itemTwo && itemOne.id === itemTwo.id;
  }

  update() {
    const ticketEdit = this.editForm.value;
    const idEdit = ticketEdit.id;
    this.ticketService.updateTicket(idEdit,ticketEdit).subscribe(value => {
      console.log(value)
      this.toastr.success('Update successful', 'Update');
      this.router.navigateByUrl('/')
    })
  }
}
