import { Component, OnInit } from '@angular/core';
import {Ticket} from "../ticket";
import {TicketService} from "../ticket.service";
import {Company} from "../company";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[];
  page = 1;
  totalLength: number;
  ticket : Ticket;

  fromSearch: string;
  toSearch: string;
  daySearch: string;
  ticketDelete: Ticket = {
    price: 0,
    fromPlace: '',
    toPlace: '',
    atTime: '',
    day: '',
    company:{
      id: 0,
      name: ''
    },
    count: 0
  }
  bookedTicket: Ticket = {
    price: 0,
    fromPlace: '',
    toPlace: '',
    atTime: '',
    day: '',
    company:{
      id: 0,
      name: ''
    },
    count: 0
  }

  constructor(private ticketService: TicketService,
              private toastr: ToastrService) {
    this.getAll()
  }

  ngOnInit(): void {
  }

  getAll(){
    this.ticketService.getAll().subscribe((value: any) => {
      this.tickets= value.content;
      this.totalLength= value.length;
    })
  }

  bookTicket(ticket: Ticket) {
    if(this.bookedTicket.count === 0){
      this.toastr.error('Đã bán hết vé')
    }else {
      this.bookedTicket.count -=1;
      this.ticketService.updateTicket(this.bookedTicket.id,ticket).subscribe(value => {
        this.getAll()
        this.toastr.success('Đã mua thành công', 'Đặt vé')
      },error => {
        console.log(error)
      })
    }
  }

  getTicket(ticket: Ticket){
    this.bookedTicket = ticket;
  }

  getFrom(value: string) {
    this.ticketService.getAll().subscribe(data => {
      this.tickets = data;
      this.fromSearch = value.toLocaleLowerCase();
      let arr : Ticket[] = [];
      this.tickets.forEach(temp => {
        if (temp.fromPlace.toLocaleLowerCase().includes(this.fromSearch)){
          arr.push(temp);
          this.page =1;
        }
      })
      this.tickets = arr
    })
  }

  getTo(value: string) {
    this.ticketService.getAll().subscribe(data => {
      this.tickets = data;
      this.toSearch = value.toLocaleLowerCase();
      let arr : Ticket[] = [];
      this.tickets.forEach(temp => {
        if (temp.toPlace.toLocaleLowerCase().includes(this.toSearch)){
          arr.push(temp);
          this.page =1;
        }
      })
      this.tickets = arr
    })
  }

  getDay(value: string) {
    this.ticketService.getAll().subscribe(data => {
      this.tickets = data;
      this.daySearch = value.toLocaleLowerCase();
      let arr : Ticket[] = [];
      this.tickets.forEach(temp => {
        if (temp.day.toLocaleLowerCase().includes(this.daySearch)){
          arr.push(temp);
          this.page =1;
        }
      })
      this.tickets = arr
    })
  }

  getTicketDelete(ticket: Ticket) {
    this.ticketDelete = ticket
  }

  deleteTicket() {
    this.ticketService.deleteTicket(this.ticketDelete.id).subscribe(value => {
      console.log('123')
      this.toastr.success('Xóa vé thành công', 'Xóa vé xe')
      this.getAll()
    }, error => {
      alert("HHH")
    })
  }
}
