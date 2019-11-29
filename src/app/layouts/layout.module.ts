import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterLayout } from './master/master.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../modules/shared.module';

@NgModule({
  declarations: [MasterLayout],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    MasterLayout
  ]
})
export class LayoutModule { }
