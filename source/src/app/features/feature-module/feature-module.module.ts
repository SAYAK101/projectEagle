import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../ResumeCreator/component/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

let routing = RouterModule.forChild([
  {path : "home", component: HomeComponent},
  {path: "**", redirectTo: "/home"}
])

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    routing
  ]
})
export class FeatureModuleModule { }
