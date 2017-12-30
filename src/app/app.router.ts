import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from './navbar/about/about.component';
import {HomeComponent} from './navbar/home/home.component';
import {ContactComponent} from './navbar/contact/contact.component';
import {TeamComponent} from './navbar/team/team.component';


export const router: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'team', component: TeamComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
