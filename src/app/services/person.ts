import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url = 'data/persons.json';

  constructor(private http: HttpClient) { }

  gerPersonList(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }
}