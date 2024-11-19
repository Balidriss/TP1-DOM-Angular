import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardComponent} from './card/card.component';
import {TableComponent} from './table/table.component';
import {IncrementComponent} from './increment/increment.component';
import {AnimalCardComponent} from './animal-card/animal-card.component';
import {CarsComponent} from './cars/cars.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, TableComponent, IncrementComponent, AnimalCardComponent, CarsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TP1-DOM';
}
