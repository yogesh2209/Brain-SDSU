import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './navbar/about/about.component';
import { HomeComponent } from './navbar/home/home.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { TeamComponent } from './navbar/team/team.component';
import {routes} from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule, routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
