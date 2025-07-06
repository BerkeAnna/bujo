import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss', // fontos: styleUrl → styleUrls
    imports: [MatCardModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeComponent {

  @Output() selectedPage: EventEmitter<string> = new EventEmitter();

  selectPage(page: string){
    this.selectedPage.emit(page);
  }
}
