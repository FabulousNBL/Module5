import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Ticket} from "./ticket";
import {Company} from "./company";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private API = 'http://localhost:8080/ticket';
  private COM = 'http://localhost:8080/ticket/company';

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(this.API + '?page=' + page)
  }

  getCompanyList(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.COM)
  }

  saveTicket(ticket: Ticket): Observable<void> {
    return this.httpClient.post<void>(this.API, ticket)
  }

  bookTicket(): Observable<void> {
    return this.httpClient.get<void>(this.API)
  }

  findById(id: number): Observable<Ticket> {
    return this.httpClient.get<Ticket>(this.API + '/' + id)
  }

  updateTicket(id: number, ticket: Ticket): Observable<void> {
    return this.httpClient.put<void>(this.API + '/' + id, ticket)
  }

  searchFrom(from: string, end : string): Observable<Ticket[]> {
    if (from === ''){
      from = '%20'
    }
    if (end === ''){
      end = '%20'
    }
    return this.httpClient.get<Ticket[]>(this.API + '/search/' + from + '/' + end)
  }

  deleteTicket(id: number): Observable<void> {
    console.log("WEB")
    return this.httpClient.delete<void>(this.API + '/delete/' + id)
  }

  deleteChecked(ids: number[]){
    if (confirm("Are you sure to delete these items?")){
      const  data= {'ids': ids};
      const url = this.API + '/deleteProducts';
      const resp = this.httpClient.post<any>(url, data);
      return resp;
    }
    return of({})
  }
}
