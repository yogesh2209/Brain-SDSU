import {Component, AfterViewInit, ElementRef, ViewChild, HostListener, OnInit} from '@angular/core';
import './js/EnableThreeExamples';
import * as THREE from 'three';
import {Http} from '@angular/http';
import 'three/examples/js/controls/OrbitControls';
import 'three/examples/js/loaders/ColladaLoader';

@Component({
  selector: 'app-braincanvas',
  templateUrl: './braincanvas.component.html',
  styleUrls: ['./braincanvas.component.css']
})
export class BraincanvasComponent implements AfterViewInit {
  public renderer: THREE.WebGLRenderer;
  public camera: THREE.PerspectiveCamera;
  public scene: THREE.Scene;
  public controls: THREE.OrbitControls;
  public stats;
  public material;
  public particles;
  public texture;
  public geometry = new THREE.Geometry();

  @ViewChild('canvas1') canvas1;
  public group = new THREE.Group();
  constructor() {
    this.render = this.render.bind(this);
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
  public startRendering() {
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
    for (let i = 0; i < 900; i++) {
      this.geometry.vertices.push(new THREE.Vector3(this.getRandomInt(85), this.getRandomInt(100) , this.getRandomInt(200)));
    }
    this.texture = new THREE.TextureLoader().load( 'assets/disc.png' );
    this.material = new THREE.PointsMaterial({size: 24, sizeAttenuation: true, map: this.texture, alphaTest: 0.5, transparent: false});
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
    console.log(intersects.length + ' intersected objects found')
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
  //  this.canvas.style.width = '100%';
  //  this.canvas.style.height = '100%';
  //  console.log('onResize: ' + this.canvas.clientWidth + ', ' + this.canvas.clientHeight);
   // this.camera.aspect = this.getAspectRatio();
  //  this.camera.updateProjectionMatrix();
 //   this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
 //   this.render();
  }
  @HostListener('document:keypress', ['$event'])
  public onKeyPress(event: KeyboardEvent) {
    console.log('onKeyPress: ' + event.key);
  }
  /* LIFECYCLE */
  ngAfterViewInit() {
     this.createScene();
     this.createCamera();
     this.startRendering();
     this.addControls();
  }
}
