import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  todos = [
    { id: 1, text: 'first todo', done: false },
    { id: 2, text: 'second todo', done: false },
    { id: 3, text: 'third todo', done: false },
    { id: 4, text: 'fourth todo', done: false }
  ];

  toggleDone(index: number): void{
    this.todos[index].done = !this.todos[index].done;
  }
}
