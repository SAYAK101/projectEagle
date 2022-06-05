import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { ReactiveFormsComponent } from '../component/reactive-forms/reactive-forms.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';


let routing = RouterModule.forChild([
  {path : "dashboard", component: DashboardComponent,
  children:[
    {path:"form2", component: ReactiveFormsComponent}]},
  {path: "**", redirectTo: "/dashboard"}]);

@NgModule({
  imports: [
    CommonModule, routing, MaterialModule
  ],
  declarations: [DashboardComponent, ReactiveFormsComponent]
})
export class RcModuleModule { }
