import { Component } from '@angular/core';
import {TableRowComponent} from './table-row/table-row.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    TableRowComponent
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  users: User[] = [
    {
      id: 1,
      username: 'johnsmith',
      address: '123 Main St, Anytown USA',
      mail: 'john.smith@example.com'
    },
    {
      id: 2,
      username: 'janedoe',
      address: '456 Oak Rd, Somewhere City',
      mail: 'jane.doe@example.com'
    },
    {
      id: 3,
      username: 'bobbuilder',
      address: '789 Elm Ln, Otherplace',
      mail: 'bob.builder@example.com'
    },
    {
      id: 4,
      username: 'alicewonder',
      address: '321 Maple Ave, Somewhere Else',
      mail: 'alice.wonder@example.com'
    },
    {
      id: 5,
      username: 'xavierz',
      address: '159 Oak St, Anyplace',
      mail: 'xavier.z@example.com'
    }
  ];
}


interface User{
  id:number;
  username:string
  address:string;
  mail:string;
}
