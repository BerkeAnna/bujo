import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { EventComponent } from './pages/event/event.component';
import { NoteComponent } from './pages/note/note.component';
import { HabitTrackerComponent } from './pages/habit-tracker/habit-tracker.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'todos', component: TodoListComponent},
  { path: 'calendar', component: CalendarComponent },
  { path: 'events', component: EventComponent },
  { path: 'notes', component: NoteComponent },
  { path: 'habit-tracker', component: HabitTrackerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
