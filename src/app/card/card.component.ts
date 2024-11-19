import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required :true})title:string = 'titre';
  @Input({required :true})subtitle:string = 'titre';
  @Input({required :true})description:string = 'titre';
  @Input({required :true})link:string = 'titre';
}
