import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  imports: [CommonModule, MatCardModule, MatButtonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  todos = [
    { id: 1, text: 'first todo', done: false },
    { id: 2, text: 'second todo', done: false },
    { id: 3, text: 'third todo', done: false },
    { id: 4, text: 'fourth todo', done: false }
  ];

  newTodoText = '';

  toggleDone(index: number): void{
    this.todos[index].done = !this.todos[index].done;
  }

  addTodo(): void {
    const text = this.newTodoText.trim();
    if(text){
      const nextId = this.todos.length > 0 ? Math.max(...this.todos.map(t => t.id)) + 1 : 1;

      this.todos.unshift({
        id: nextId,
        text,
        done: false
      });

      this.newTodoText = '';
    }
  }
}
