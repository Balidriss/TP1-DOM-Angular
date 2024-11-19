import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-animal',
  standalone: true,
  imports: [],
  templateUrl: './card-animal.component.html',
  styleUrl: './card-animal.component.scss'
})
export class CardAnimalComponent {

  @Input({required :true})name!:string;
  @Input({required :true})imgSrc!:string;
  @Input({required :true})noise!:string;

  alert() {
    alert(this.noise);
  }
}
