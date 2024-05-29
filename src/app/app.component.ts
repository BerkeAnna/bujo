import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bullet-journal';
  page='home';
  

  changePage(selectedPage: string){
    this.page = selectedPage;
  }
}
