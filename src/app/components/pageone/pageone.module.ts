import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageoneComponent } from './pageone.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../modules/shared.module';

const routes: Routes = [
  { path: '', component: PageoneComponent },
];

@NgModule({
  declarations: [PageoneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PageoneModule { }
