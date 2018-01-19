import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importing Routes Module - For routing to different pages
import {routes} from './app.router';

// Importing all the components here
import { AppComponent } from './app.component';
import { AboutComponent } from './navbar/about/about.component';
import { HomeComponent } from './navbar/home/home.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { TeamComponent } from './navbar/team/team.component';
import { SidemenuComponent } from './brainhome/sidemenu/sidemenu.component';
import { BraincanvasComponent } from './brainhome/braincanvas/braincanvas.component';
import { SlicingComponent } from './brainhome/sidemenu-components/slicing/slicing.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'; //
import { BrainDataService } from './services/brain-data.service';


// Adding / Declaring all the imported components in declarations
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    TeamComponent,
    SidemenuComponent,
    BraincanvasComponent,
    SlicingComponent
  ],
  imports: [
    BrowserModule, routes, HttpClientModule, HttpModule
  ],
  providers: [BrainDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
