import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

let routing = RouterModule.forChild([
  {path : "", component: HomeComponent,
  children:[
    {path:"RC", loadChildren: ()=> import('../ResumeCreator/rc-module/rc-module.module').then(m=>m.RcModuleModule)}]}
]);

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    routing
  ]
})
export class FeatureModuleModule { }
