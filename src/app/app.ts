import { Component } from '@angular/core';
import { PersonComponent } from './person/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  person = {
    id: 1,
    firstName: 'Allan',
    lastName: 'Levsen',
    address: '123 Anderson Avenue',
    city: 'Edmonton',
    province: 'Alberta',
    phone: '780.123.1234',
    lastUpdated: new Date('February 4, 2016 10:13:00')
  };
}
