import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService, Todo } from './todo.service';
import { NgZone } from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  imports: [CommonModule, MatCardModule, MatButtonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodoText = '';

constructor(private todoService: TodoService, private ngZone: NgZone) {}


ngOnInit(): void {
  this.todoService.getTodos().subscribe(todos => {
    console.log('TODOS:', todos);
    this.todos = todos;
  });
}


  toggleDone(index: number): void {
    const todo = this.todos[index];
    this.todoService.updateTodo(todo.id!, { done: !todo.done });
  }


  addTodo(): void {
  const text = this.newTodoText.trim();
  if (text) {
    const newTodo: Todo = { text, done: false };
    this.todoService.addTodo(newTodo).then(() => {
      this.ngZone.run(() => {
        this.newTodoText = '';
      });
    });
  }
}

}
