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
  title = 'person-app';
}