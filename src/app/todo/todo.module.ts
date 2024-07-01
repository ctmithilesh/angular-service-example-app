import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoTableComponent } from './todo-table/todo-table.component';



@NgModule({
  declarations: [
    TodoComponent,
    AddTodoComponent,
    TodoTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
