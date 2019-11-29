import { NgModule } from '@angular/core';
import { HeaderComponent } from '../components/shared/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule, MatRippleModule} from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {NullPipe} from '../pipes/null.pipe';

@NgModule({
  declarations: [
    HeaderComponent,

    // Pipes
    NullPipe,
  ],
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRippleModule,
    RouterModule,
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
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRippleModule,
    RouterModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ]
})
export class SharedModule { }
