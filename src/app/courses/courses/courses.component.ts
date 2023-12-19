import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Course } from './models/course';
import { CourseService } from '../services/course.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']

})

export class CoursesComponent {

  courses$: Observable<Course[]>;

  progressBar: boolean = true

  displayedColumns: string[] = ['_id', 'name', 'category'];

  constructor(
    private service: CourseService
  ) {
    this.progressBar = false
    this.courses$ = this.service.list();
    // service.list().subscribe(courses => this.courses$ = courses);
  }

}
