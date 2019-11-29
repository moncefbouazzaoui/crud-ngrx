import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MasterLayout} from './layouts/master/master.component';


const routes: Routes = [
  { path: '', redirectTo: 'pageone',  pathMatch: 'full'},
  { path: 'pageone' , loadChildren: './components/pageone/pageone.module#PageoneModule', component: MasterLayout },
  { path: 'pagetwo' , loadChildren: './components/pagetwo/pagetwo.module#PagetwoModule', component: MasterLayout },
  { path: 'user' , loadChildren: './components/user/user.module#UserModule', component: MasterLayout },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
