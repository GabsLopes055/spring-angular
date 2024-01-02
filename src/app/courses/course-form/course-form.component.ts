import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../services/course.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {


  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CourseService,
    private dialog: MatDialog,
    private message: MatSnackBar,
    private location: Location) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required]
    })
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(data => {
      this.onSuccess();

    }, error => {
      this.onError("Erro ao cadastrar curso ! Entre em contato com o administrador.")
    })
  }

  onSuccess() {
    this.message.open('Curso salvo com sucesso !', '',
      {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      })
    this.onCancel();
  }

  onCancel() {
    this.location.back();
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: errorMessage
    })
  }




}
