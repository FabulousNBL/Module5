import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private CATEGORY = 'http://localhost:3000/category';
  private API = 'http://localhost:3000/productList'

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API );
  }

  saveProduct(product): Observable<Product> {
    return this.http.post<Product>(this.API , product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(this.API + '/' + id);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(this.API + '/' + id, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.API + '/' + id);
  }

  getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(this.CATEGORY)
  }
}
