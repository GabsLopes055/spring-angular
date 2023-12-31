import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../courses/models/course';
import { Observable, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly API = 'api/courses';

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Course[]> {
    return this.http.get<Course[]>(this.API).pipe(
      delay(500)
    );
  }

  save(record: Course): Observable<Course> {
    return this.http.post<Course>(this.API, record);
  }

}
