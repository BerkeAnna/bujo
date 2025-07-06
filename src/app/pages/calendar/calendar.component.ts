import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'], // fontos: styleUrl → styleUrls
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CalendarComponent { }


