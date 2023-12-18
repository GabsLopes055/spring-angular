import { Component } from '@angular/core';
import { Course } from './models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']

})

export class CoursesComponent {

  courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'Front-End'},
    {_id: '2', name: 'React', category: 'Front-End'},
    {_id: '3', name: 'HTML', category: 'Front-End'},
    {_id: '4', name: 'CSS', category: 'Front-End'},

  ];

  displayedColumns: string[] = ['_id','name', 'category']

  ngOnInit(): void {
  }

}
