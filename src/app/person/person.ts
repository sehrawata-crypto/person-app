import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../models/person';
import { PersonService } from '../services/person';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.html',
  styleUrls: ['./person.css']
})
export class PersonComponent implements OnInit {

  persons: Person[] = [];

  constructor(
    private personService: PersonService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.personService.gerPersonList().subscribe({
      next: (data: Person[]) => {
        this.persons = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching person list:', err);
      }
    });
  }
}