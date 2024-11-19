import { Component } from '@angular/core';
import { ButtonEventComponent } from "../button-event/button-event.component";

@Component({
  selector: 'app-increment',
  standalone: true,
  imports: [ButtonEventComponent],
  templateUrl: './increment.component.html',
  styleUrl: './increment.component.scss'
})
export class IncrementComponent {

  counter:number=0;

  increment()
  {
   this.counter++;
  }
}
