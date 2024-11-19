import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-event',
  standalone: true,
  imports: [],
  templateUrl: './button-event.component.html',
  styleUrl: './button-event.component.scss'
})
export class ButtonEventComponent {
  @Output() buttonEvent: EventEmitter<void> = new EventEmitter<void>()

  onClick():void {
    this.buttonEvent.emit();
  }
}
