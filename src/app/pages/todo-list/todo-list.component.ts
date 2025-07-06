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
  editingIndex: number | null = null;
  editingText = '';

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

  deleteTodo(index: number): void {
    const todo = this.todos[index];
    if (todo.id) {
      this.todoService.deleteTodo(todo.id).then(() => {
        // frontendről is eltávolítjuk, hogy azonnal eltűnjön
        this.ngZone.run(() => {
          this.todos.splice(index, 1);
        });
      });
    }
  }

  editTodo(index: number): void {
    this.editingIndex = index;
    this.editingText = this.todos[index].text;
  }

  saveTodo(index: number): void {
    const todo = this.todos[index];
    const newText = this.editingText.trim();
    if (todo.id && newText && newText !== todo.text) {
      this.todoService.updateTodo(todo.id, { text: newText }).then(() => {
        this.ngZone.run(() => {
          this.todos[index].text = newText;
          this.editingIndex = null;
        });
      });
    } else {
      this.editingIndex = null;
    }
  }

  cancelEdit(): void {
    this.editingIndex = null;
    this.editingText = '';
  }

}
