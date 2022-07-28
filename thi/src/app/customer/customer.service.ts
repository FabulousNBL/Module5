import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "./customer";
import {CustomerType} from "./customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API = 'http://localhost:3000/customerList';
  private TYPE_URL = 'http://localhost:3000/typeList'

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API);
  }

  saveCustomer(customer: Customer): Observable<void> {
    return this.httpClient.post<void>(this.API, customer);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API + '/' + id)
  }

  updateCustomer(id: number, customer: Customer): Observable<void>{
    return this.httpClient.patch<void>(this.API + '/' + id, customer)
  }

  deleteCustomer(id : number): Observable<void>{
    return this.httpClient.delete<void>(this.API + '/' + id)
  }

  customerTypeList(): Observable<CustomerType[]>{
    return this.httpClient.get<CustomerType[]>(this.TYPE_URL)
  }
}
