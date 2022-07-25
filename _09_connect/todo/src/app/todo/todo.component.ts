import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Todo} from "../todo";
import {TodoService} from "../todo.service";

let _id = 1;
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  todoForm: FormGroup;
  todo: string;
  todoo: Todo

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = new Array();
    this.todoService.findAll().subscribe(value => {
      this.todos = value;
    },error => {
      alert("error");
    },() => {
      console.log("complete");
    });

    this.todoForm = new FormGroup({
      content: new FormControl()
    })
  }

  // toggleTodo(i: number) {
  //   this.todos[i].complete = !this.todos[i].complete;
  // }
  //
  // change() {
  //   const value = this.content.value;
  //   if (value) {
  //     const todo: Todo = {
  //       id: _id++,
  //       content: value,
  //       complete: false
  //     };
  //     this.todos.push(todo);
  //     this.content.reset();
  //   }
  // }
  create(): void {
    const todo = this.todoForm.value;
    this.todoService.save(todo).subscribe(
      value => {},
      error => {},
      () => this.ngOnInit()
    );
  }

  delete(id: number): void {
    this.todoService.delete(id).subscribe(
      value => {},
      error => {},
      () => {this.ngOnInit()}
    );
  }

  editDisplay(id: number): void {
    this.todoService.findById(id).subscribe(
      value => {this.todoo = value},
      error => {},
      () => this.todo = this.todoo.content
    )
  }
}
