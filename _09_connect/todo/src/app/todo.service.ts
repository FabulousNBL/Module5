import { Injectable } from '@angular/core';
import {Todo} from "./todo";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private URL_API = "http://localhost:3000/Todo";

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.URL_API);
  }

  save(todo: Todo): Observable<Todo> {
    return this.httpClient.post(this.URL_API, todo);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URL_API + '/' + id);
  }

  findById(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(this.URL_API + '/' + id);
  }

  update(todo: Todo): Observable<void> {
    return this.httpClient.patch<void>(this.URL_API+'/'+ todo.id, todo)
  }
}
