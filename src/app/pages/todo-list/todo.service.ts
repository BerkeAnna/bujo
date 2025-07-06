// todo.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Todo {
  id?: string;
  text: string;
  done: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private afs: AngularFirestore) {}

  getTodos(): Observable<Todo[]> {
  return this.afs.collection<Todo>('todos').snapshotChanges().pipe(
    map(actions =>
      actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data } as Todo;
      })
    )
  );
}

  addTodo(todo: Todo): Promise<any> {
    return this.afs.collection('todos').add(todo);
  }

  updateTodo(id: string, data: Partial<Todo>): Promise<void> {
    return this.afs.collection('todos').doc(id).update(data);
  }

    deleteTodo(id: string): Promise<void> {
        return this.afs.collection('todos').doc(id).delete();
    }

}
