import { Observable, catchError, of } from 'rxjs';
import { Component } from '@angular/core';
import { Course } from './models/course';
import { CourseService } from '../services/course.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

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
    private service: CourseService,
    public dialog: MatDialog
  ) {
    this.progressBar = false
    this.courses$ = this.service.list().pipe(
      catchError(error => {
        this.onError("Erro ao carregar os cursos")
        return of([])
      })
    );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: errorMessage
    })
  }

}
