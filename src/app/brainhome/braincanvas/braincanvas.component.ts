import {Component, AfterViewInit, ElementRef, ViewChild, HostListener, OnInit} from '@angular/core';
import './js/EnableThreeExamples';
import * as THREE from 'three';


import 'three/examples/js/controls/OrbitControls';
import 'three/examples/js/loaders/ColladaLoader';
import { BrainDataService } from './../../services/brain-data.service';
import { BrainData } from './../../models/brain-data';

// Test express connection
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { error } from 'three';

@Component({
  selector: 'app-braincanvas',
  templateUrl: './braincanvas.component.html',
  styleUrls: ['./braincanvas.component.css']
})
export class BraincanvasComponent implements OnInit, AfterViewInit {
  public renderer: THREE.WebGLRenderer;
  public camera: THREE.PerspectiveCamera;
  public scene: THREE.Scene;
  public controls: THREE.OrbitControls;
  public stats;
  public material;
  public particles;
  public texture;
  public geometry = new THREE.Geometry();
  public brainData: BrainData[] = [];

  @ViewChild('canvas1') canvas1;
  public group = new THREE.Group();

  constructor(private brainServ: BrainDataService) {}

  /* LIFECYCLE */
  ngOnInit() {
    this.render = this.render.bind(this);
    //this.loadMockBrainData();
  }
  ngAfterViewInit() {
    this.createScene();
    this.createCamera();
    this.initBrainData();
    this.addControls();
  }
  public loadMockBrainData() {
    this.brainData = this.brainServ.getBrainDataMock();
    console.log('Mock brain data:');
    console.log(this.brainData);
  }

  public initBrainData() {
   // Get all lists from server and update the lists property
    //this.brainServ.getCatagorySlice(49)
    this.brainServ.getAll()
      .subscribe(
        response => {this.brainData = response;
                     this.startRendering(this.brainData);
        }
      );
  }
  public get canvas(): HTMLCanvasElement {
    return this.canvas1.nativeElement;
  }
  public createScene() {
    this.scene = new THREE.Scene();
   // this.scene.fog = new THREE.FogExp2( 0x000000, 0.001 );
    this.scene.background = new THREE.Color( 0xf0f0f0 );
   // const gridHelper = new THREE.GridHelper( 1000, 10 ); // Grid
   // this.scene.add( gridHelper );
  }
  private createCamera() {
    this.camera = new THREE.PerspectiveCamera( 45, this.canvas1.clientWidth / this.canvas1.clientHeight, 2, 10000 );
    this.camera.position.z = 2000;
    this.scene.add(this.camera);
  }
  public animate() {
    requestAnimationFrame(this.animate);
    this.render();
   // this.stats.update();
  }
  public render() {
      this.renderer.render( this.scene, this.camera );
  }
   getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  public startRendering(jsonArray: any) {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setClearColor(0xffffff, 1);
    this.renderer.autoClear = true;

    // Get all lists from server and update the lists property
    // console.log('brain data length checked by yogesh: ');
    for (let i = 0; i < jsonArray.length; i++) {
      const particle = jsonArray[i];
      this.geometry.vertices.push(new THREE.Vector3(particle.x, particle.y , particle.z));
    }
    this.texture = new THREE.TextureLoader().load( 'assets/disc.png' );
    this.material = new THREE.PointsMaterial({size: 12, sizeAttenuation: true, map: this.texture, alphaTest: 0.5, transparent: false});
    this.material.color.setHSL(1.0, 0.6 , 0.4 );
    this.particles = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.particles);
    const component: BraincanvasComponent = this;
    (function render() {
      component.render();
    }());
  }
  public addControls() {
   // this.controls = new THREE.FirstPersonControls( this.camera, this.can );
    this.controls = new THREE.OrbitControls(this.camera, this.canvas);
    this.controls.rotateSpeed = 1;
    this.controls.zoomSpeed = 1;
    this.controls.addEventListener('change', this.render);
  }
  /* EVENTS */
  public onMouseDown(event: MouseEvent) {
    console.log('onMouseDown');
   // event.preventDefault();
    // Example of mesh selection/pick:
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1 ;
    mouse.y = - (event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, this.camera);
    const obj: THREE.Object3D[] = [];
   // this.findAllObjects(obj, this.scene);
    const intersects = raycaster.intersectObjects(obj);
    console.log('Scene has ' + obj.length + ' objects');
    console.log(intersects.length + ' intersected objects found');
    intersects.forEach((i) => {
      console.log(i.object); // do what you want to do with object
    });
  }
  private findAllObjects(pred: THREE.Object3D[], parent: THREE.Object3D) {
    // NOTE: Better to keep separate array of selected objects
    if (parent.children.length > 0) {
      parent.children.forEach((i) => {
        pred.push(i);
        this.findAllObjects(pred, i);
      });
    }
  }
  public onMouseUp(event: MouseEvent) {
  //  console.log('onMouseUp');
    this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( this.canvas.clientWidth, this.canvas.clientHeight);
    this.render();
  }
  private getAspectRatio(): number {
    const height = this.canvas.clientHeight;
    if (height === 0) {
      return 0;
    }
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }
  @HostListener('window:resize', ['$event'])
  public onResize(event: Event) {
   this.canvas.style.width = '100%';
   this.canvas.style.height = '100%';
   console.log('onResize: ' + this.canvas.clientWidth + ', ' + this.canvas.clientHeight);
   this.camera.aspect = this.getAspectRatio();
   this.camera.updateProjectionMatrix();
   this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
   this.render();
  }
  @HostListener('document:keypress', ['$event'])
  public onKeyPress(event: KeyboardEvent) {
    console.log('onKeyPress: ' + event.key);
  }
}
