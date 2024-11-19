import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Car } from '../../Car';

@Component({
  selector: '[app-car]',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss'
})
export class CarComponent {
  
  @Output() showDetail: EventEmitter<Car> = new EventEmitter<Car>()
  @Input({required :true}) car!:Car;

  onClickDetail()
  {
    this.showDetail.emit(this.car)
  }
}
