import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { EventComponent } from './pages/event/event.component';
import { HabitTrackerComponent } from './pages/habit-tracker/habit-tracker.component';
import { NoteComponent } from './pages/note/note.component';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoListComponent,
    CalendarComponent,
    EventComponent,
    HabitTrackerComponent,
    NoteComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
