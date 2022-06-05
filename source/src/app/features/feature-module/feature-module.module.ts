import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../ResumeCreator/component/dashboard/dashboard.component';
import { HomeComponent } from '../ResumeCreator/component/home/home.component';
import { RouterModule } from '@angular/router';

let routing = RouterModule.forChild([
  {path : "home", component: HomeComponent},
])

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureModuleModule { }
