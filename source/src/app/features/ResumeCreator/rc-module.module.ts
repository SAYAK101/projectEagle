import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ReactiveFormsComponent } from './component/reactive-forms/reactive-forms.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../Shared/material/material.module';
import { ComponentPageHeaderComponent } from './component/component-page-header/component-page-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkExperienceComponent } from './component/reactive-forms/professionInfo/work-experience/work-experience.component';
import { ViewTableComponent } from './component/reactive-forms/professionInfo/view-table/view-table.component';


let routing = RouterModule.forChild([
  {path : "dashboard", component: DashboardComponent,
  children:[
    {path:"form2", component: ReactiveFormsComponent}]},
  {path: "**", redirectTo: "dashboard"}]);

@NgModule({
  imports: [
    CommonModule, routing, MaterialModule, ReactiveFormsModule
  ],
  declarations: [DashboardComponent, ReactiveFormsComponent, ComponentPageHeaderComponent, WorkExperienceComponent, ViewTableComponent],
  entryComponents: [ComponentPageHeaderComponent, ViewTableComponent]
})
export class RcModuleModule { }
