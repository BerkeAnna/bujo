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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    HabitTrackerComponent,
    NoteComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarComponent,
    HomeComponent,
    TodoListComponent,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
