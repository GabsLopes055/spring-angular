import { Component, Input } from '@angular/core';
import { Course } from '../courses/models/course';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {

  @Input() courses: Course[] = [];

  readonly displayedColumns: string[] = ['_id', 'name', 'category', 'actions'];

  constructor(
    public router: Router,
    public route: ActivatedRoute
  ){}


  OnAdd() {
    this.router.navigate(['new'], {relativeTo: this.route })
  }

}
