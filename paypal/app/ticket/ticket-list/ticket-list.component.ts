import { Component, OnInit } from '@angular/core';
import {Ticket} from "../ticket";
import {TicketService} from "../ticket.service";
import {ToastrService} from "ngx-toastr";
import {render} from "creditcardpayments/creditCardPayments";


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: Array<any>;
  page : number = 0;
  pages: Array<number>
  mess: string;
  clss: string;

  totalElements: any;
  fromSearch: string = '';
  toSearch: string = '';
  deleteIds: number[];
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

  }


  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.ticketService.getAll(this.page).subscribe((value: any) => {
      this.tickets= value.content;
      this.totalElements = value.totalElements;
      this.pages = new Array<number>(value['totalPages']);
      console.log(value)
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

  searchFrom() {
    this.ticketService.searchFrom(this.fromSearch, this.toSearch).subscribe((value: any) => {
      this.tickets = value.content;
      this.pages = new Array<number>(value['totalPages']);
    })
  }

  isAllCheckBoxChecked() {
    return this.tickets.every(p => p.checked);
  }

  checkAllCheckBox(ev) {
    this.tickets.forEach(x => x.checked = ev.target.checked)
  }

  deleteProducts(): void {
    const selectedTicket = this.tickets.filter(product => product.checked).map(p => p.id);
    //console.log (selectedProducts);

    if(selectedTicket && selectedTicket.length > 0) {
      this.ticketService.deleteChecked(selectedTicket)
        .subscribe(res => {
            this.clss = 'grn';
            this.mess = 'Products successfully deleted';
          }, err => {
            this.clss = 'rd';
            this.mess = 'Something went wrong during deleting products';
          }
        );
    } else {
      this.clss = 'rd';
      this.mess = 'You must select at least one product';
    }
  }

  getPage(event: number) {
    this.page = event - 1;
    this.ngOnInit()
  }

  pay(){
    let check = false;
    render({
      id: "#myPaypal",
      value: "100",
      currency: "USD",
      onApprove(detail) {
        alert("thanh cong");
        console.log(detail);
        check = true;
      }
    });
    if (check) {
      console.log("-------------------------------------");
      this.toastr.success('Đã thanh toan thanh cong', 'Thanh toan');
    }
  }
}
