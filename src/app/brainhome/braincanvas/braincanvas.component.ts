import { Component, OnInit, NgModule } from '@angular/core';
import * as THREE from 'three';
import * as _ from 'three';
declare module 'three';
import {  HttpModule } from '@angular/http';
import { BrowserModule  } from '@angular/platform-browser';

@Component({
  selector: 'app-braincanvas',
  templateUrl: './braincanvas.component.html',
  styleUrls: ['./braincanvas.component.css']
})
export class BraincanvasComponent implements OnInit {
 // name: string;
  constructor() {
    console.log('hello helloooo');
  }
  ngOnInit() {
  }

}
