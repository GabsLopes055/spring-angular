import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
exports: [
  MatTableModule,
  MatCardModule,
  MatToolbarModule,
  MatProgressBarModule
]
})
export class AppMaterialModule { }
