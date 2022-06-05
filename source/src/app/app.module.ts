import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'project', loadChildren: ()=> import('./features/feature-module/feature-module.module')}
    ]),
    FormsModule,
    BrowserModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
