import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagetwoComponent } from './pagetwo.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from '../../modules/shared.module';

const routes: Routes = [
  { path: '', component: PagetwoComponent },
];

@NgModule({
  declarations: [PagetwoComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PagetwoModule { }
