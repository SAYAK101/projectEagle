import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MaterialModule } from '../Shared/material/material.module';

let routing = RouterModule.forChild([
  {path : "", component: HomeComponent,
  children:[
    {path:"rc", loadChildren: ()=> import('../ResumeCreator/rc-module/rc-module.module').then(m=>m.RcModuleModule)}]}
]);

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    routing, MaterialModule
  ]
})
export class FeatureModuleModule { }
