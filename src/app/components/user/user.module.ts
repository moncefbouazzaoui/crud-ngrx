import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../modules/shared.module';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  { path: '', component: UserComponent },
];

@NgModule({
  entryComponents: [UserUpdateComponent],
  declarations: [UserComponent, UserUpdateComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
