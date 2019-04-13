import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  policies = [
    {id: 0, name: 'p1'},
    {id: 2, name: 'p2'},
  ];
  title = 'ng-for';
}

// export interface Policies {
//   id: number;
//   name: string;
// }
