import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.html',
  styleUrl: './person.css'
})
export class PersonComponent {
  @Input() person: any;
}