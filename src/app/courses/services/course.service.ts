import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../courses/models/course';
import { Observable, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly API = '/assets/acourses.json';

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Course[]> {
    return this.http.get<Course[]>(this.API).pipe(
      delay(1500)
    );
  }

}
