import {Component, Input} from '@angular/core';

@Component({
  selector: '[app-table-row]',
  standalone: true,
  imports: [],
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.scss'
})
export class TableRowComponent {


  @Input({required :true})id!:number;
  @Input({required :true})username!:string
  @Input({required :true})address!:string;
  @Input({required :true})mail!:string;


}

