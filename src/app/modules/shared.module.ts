import { NgModule } from '@angular/core';
import { HeaderComponent } from '../components/shared/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule, MatRippleModule} from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NullPipe} from '../pipes/null.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,

    // Pipes
    NullPipe,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRippleModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ],
  exports: [
    // Components
    HeaderComponent,

    // Pipes
    NullPipe,

    // Modules
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRippleModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ]
})
export class SharedModule { }
