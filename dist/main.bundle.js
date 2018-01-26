webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- Html code for navigation bar -->\n\n<div class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <div class=\"container\">\n    <a  class=\"navbar-brand\" routerLink=\"home\">SDSU Brain</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"contact\">Contact</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"team\">Team</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"about\">About</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_about_about_component__ = __webpack_require__("../../../../../src/app/navbar/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_home_home_component__ = __webpack_require__("../../../../../src/app/navbar/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_contact_contact_component__ = __webpack_require__("../../../../../src/app/navbar/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_team_team_component__ = __webpack_require__("../../../../../src/app/navbar/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__brainhome_sidemenu_sidemenu_component__ = __webpack_require__("../../../../../src/app/brainhome/sidemenu/sidemenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__brainhome_braincanvas_braincanvas_component__ = __webpack_require__("../../../../../src/app/brainhome/braincanvas/braincanvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__brainhome_sidemenu_components_slicing_slicing_component__ = __webpack_require__("../../../../../src/app/brainhome/sidemenu-components/slicing/slicing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_brain_data_service__ = __webpack_require__("../../../../../src/app/services/brain-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Importing Routes Module - For routing to different pages

// Importing all the components here









 //

// Adding / Declaring all the imported components in declarations
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_team_team_component__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_8__brainhome_sidemenu_sidemenu_component__["a" /* SidemenuComponent */],
                __WEBPACK_IMPORTED_MODULE_9__brainhome_braincanvas_braincanvas_component__["a" /* BraincanvasComponent */],
                __WEBPACK_IMPORTED_MODULE_10__brainhome_sidemenu_components_slicing_slicing_component__["a" /* SlicingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__app_router__["a" /* routes */], __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["a" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_brain_data_service__["a" /* BrainDataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_about_about_component__ = __webpack_require__("../../../../../src/app/navbar/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_home_home_component__ = __webpack_require__("../../../../../src/app/navbar/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_contact_contact_component__ = __webpack_require__("../../../../../src/app/navbar/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_team_team_component__ = __webpack_require__("../../../../../src/app/navbar/team/team.component.ts");





var router = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__navbar_home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__navbar_about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_3__navbar_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'team', component: __WEBPACK_IMPORTED_MODULE_4__navbar_team_team_component__["a" /* TeamComponent */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(router);


/***/ }),

/***/ "../../../../../src/app/brainhome/braincanvas/braincanvas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "canvas {\n  width:  100%;\n  height: 100%;\n  margin: 0px;\n  display:block;\n  position: absolute;\n  cursor: crosshair;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/brainhome/braincanvas/braincanvas.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas #canvas1 (mousedown)=\"onMouseDown($event)\" (mouseup)=\"onMouseUp($event)\">\n</canvas>\n"

/***/ }),

/***/ "../../../../../src/app/brainhome/braincanvas/braincanvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BraincanvasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_EnableThreeExamples__ = __webpack_require__("../../../../../src/app/brainhome/braincanvas/js/EnableThreeExamples.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_EnableThreeExamples___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_EnableThreeExamples__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_examples_js_controls_OrbitControls__ = __webpack_require__("../../../../three/examples/js/controls/OrbitControls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_examples_js_controls_OrbitControls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_three_examples_js_controls_OrbitControls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_examples_js_loaders_ColladaLoader__ = __webpack_require__("../../../../three/examples/js/loaders/ColladaLoader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_examples_js_loaders_ColladaLoader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_three_examples_js_loaders_ColladaLoader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_brain_data_service__ = __webpack_require__("../../../../../src/app/services/brain-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {Http} from '@angular/http';



var BraincanvasComponent = (function () {
    function BraincanvasComponent(brainServ) {
        this.brainServ = brainServ;
        this.geometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        this.brainData = [];
        this.group = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
    }
    BraincanvasComponent.prototype.ngOnInit = function () {
        this.render = this.render.bind(this);
        //this.loadBrainData();
        //this.loadMockBrainData();
    };
    BraincanvasComponent.prototype.loadMockBrainData = function () {
        this.brainData = this.brainServ.getBrainDataMock();
        console.log('Mock brain data:');
        console.log(this.brainData);
    };
    BraincanvasComponent.prototype.loadBrainData = function () {
        var _this = this;
        //Get all lists from server and update the lists property
        this.brainServ.getTen()
            .subscribe(function (response) {
            _this.brainData = response;
            console.log('brain data');
            console.log(_this.brainData);
            console.log(_this.brainData.length);
        });
    };
    Object.defineProperty(BraincanvasComponent.prototype, "canvas", {
        get: function () {
            return this.canvas1.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    BraincanvasComponent.prototype.createScene = function () {
        this.scene = new __WEBPACK_IMPORTED_MODULE_2_three__["Scene"]();
        // this.scene.fog = new THREE.FogExp2( 0x000000, 0.001 );
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_2_three__["Color"](0xf0f0f0);
        // const gridHelper = new THREE.GridHelper( 1000, 10 ); // Grid
        // this.scene.add( gridHelper );
    };
    BraincanvasComponent.prototype.createCamera = function () {
        this.camera = new __WEBPACK_IMPORTED_MODULE_2_three__["PerspectiveCamera"](45, this.canvas1.clientWidth / this.canvas1.clientHeight, 2, 10000);
        this.camera.position.z = 2000;
        this.scene.add(this.camera);
    };
    BraincanvasComponent.prototype.animate = function () {
        requestAnimationFrame(this.animate);
        this.render();
        // this.stats.update();
    };
    BraincanvasComponent.prototype.render = function () {
        this.renderer.render(this.scene, this.camera);
    };
    BraincanvasComponent.prototype.getRandomInt = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    BraincanvasComponent.prototype.startRendering = function () {
        this.renderer = new __WEBPACK_IMPORTED_MODULE_2_three__["WebGLRenderer"]({
            canvas: this.canvas,
            antialias: true
        });
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = __WEBPACK_IMPORTED_MODULE_2_three__["PCFSoftShadowMap"];
        this.renderer.setClearColor(0xffffff, 1);
        this.renderer.autoClear = true;
        //Get all lists from server and update the lists property
        this.loadBrainData();
        console.log('brain data length: ');
        console.log(this.brainData.length);
        for (var i = 0; i < this.brainData.length; i++) {
            var particle = this.brainData[i];
            this.geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](particle.x, particle.y, particle.z));
        }
        //replace me with BrainData service
        /*
        for (let i = 0; i < 900; i++) {
          this.geometry.vertices.push(new THREE.Vector3(this.getRandomInt(85), this.getRandomInt(100) , this.getRandomInt(200)));
        }
        */
        this.texture = new __WEBPACK_IMPORTED_MODULE_2_three__["TextureLoader"]().load('assets/disc.png');
        this.material = new __WEBPACK_IMPORTED_MODULE_2_three__["PointsMaterial"]({ size: 24, sizeAttenuation: true, map: this.texture, alphaTest: 0.5, transparent: false });
        this.material.color.setHSL(1.0, 0.6, 0.4);
        this.particles = new __WEBPACK_IMPORTED_MODULE_2_three__["Points"](this.geometry, this.material);
        this.scene.add(this.particles);
        var component = this;
        (function render() {
            component.render();
        }());
    };
    BraincanvasComponent.prototype.addControls = function () {
        // this.controls = new THREE.FirstPersonControls( this.camera, this.can );
        this.controls = new __WEBPACK_IMPORTED_MODULE_2_three__["OrbitControls"](this.camera, this.canvas);
        this.controls.rotateSpeed = 1;
        this.controls.zoomSpeed = 1;
        this.controls.addEventListener('change', this.render);
    };
    /* EVENTS */
    BraincanvasComponent.prototype.onMouseDown = function (event) {
        console.log('onMouseDown');
        // event.preventDefault();
        // Example of mesh selection/pick:
        var raycaster = new __WEBPACK_IMPORTED_MODULE_2_three__["Raycaster"]();
        var mouse = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector2"]();
        mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
        mouse.y = -(event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, this.camera);
        var obj = [];
        // this.findAllObjects(obj, this.scene);
        var intersects = raycaster.intersectObjects(obj);
        console.log('Scene has ' + obj.length + ' objects');
        console.log(intersects.length + ' intersected objects found');
        intersects.forEach(function (i) {
            console.log(i.object); // do what you want to do with object
        });
    };
    BraincanvasComponent.prototype.findAllObjects = function (pred, parent) {
        var _this = this;
        // NOTE: Better to keep separate array of selected objects
        if (parent.children.length > 0) {
            parent.children.forEach(function (i) {
                pred.push(i);
                _this.findAllObjects(pred, i);
            });
        }
    };
    BraincanvasComponent.prototype.onMouseUp = function (event) {
        //  console.log('onMouseUp');
        this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.render();
    };
    BraincanvasComponent.prototype.getAspectRatio = function () {
        var height = this.canvas.clientHeight;
        if (height === 0) {
            return 0;
        }
        return this.canvas.clientWidth / this.canvas.clientHeight;
    };
    BraincanvasComponent.prototype.onResize = function (event) {
        //  this.canvas.style.width = '100%';
        //  this.canvas.style.height = '100%';
        //  console.log('onResize: ' + this.canvas.clientWidth + ', ' + this.canvas.clientHeight);
        // this.camera.aspect = this.getAspectRatio();
        //  this.camera.updateProjectionMatrix();
        //   this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        //   this.render();
    };
    BraincanvasComponent.prototype.onKeyPress = function (event) {
        console.log('onKeyPress: ' + event.key);
    };
    /* LIFECYCLE */
    BraincanvasComponent.prototype.ngAfterViewInit = function () {
        this.createScene();
        this.createCamera();
        this.startRendering();
        this.addControls();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('canvas1'),
        __metadata("design:type", Object)
    ], BraincanvasComponent.prototype, "canvas1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], BraincanvasComponent.prototype, "onResize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('document:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], BraincanvasComponent.prototype, "onKeyPress", null);
    BraincanvasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-braincanvas',
            template: __webpack_require__("../../../../../src/app/brainhome/braincanvas/braincanvas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/brainhome/braincanvas/braincanvas.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_brain_data_service__["a" /* BrainDataService */]])
    ], BraincanvasComponent);
    return BraincanvasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/brainhome/braincanvas/js/EnableThreeExamples.js":
/***/ (function(module, exports, __webpack_require__) {

THREE=__webpack_require__("../../../../three/build/three.module.js");

/***/ }),

/***/ "../../../../../src/app/brainhome/sidemenu-components/slicing/slicing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slider {\n  -webkit-appearance: none;\n  width: 80%;\n  height: 15px;\n  background: #d3d3d3;\n  outline: none;\n  opacity: 0.7;\n  transition: opacity .2s;\n}\n.slider:hover {\n  opacity: 1;\n}\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 25px;\n  height: 25px;\n  background: #88C0AE;\n  cursor: pointer;\n}\n.slider::-moz-range-thumb {\n  width: 25px;\n  height: 25px;\n  background: #88C0AE;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/brainhome/sidemenu-components/slicing/slicing.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\nAdding X, Y, Z Slicing components\n-->\n\n<div>\n  <h5>Slicing</h5>\n  <div> <label>X </label>\n    <input type=\"range\" min=\"1\" max=\"100\" value=\"50\" class=\"slider\" id=\"x\">\n  </div>\n  <div>\n    <label>Y </label>\n    <input type=\"range\" min=\"1\" max=\"100\" value=\"50\" class=\"slider\" id=\"y\">\n  </div>\n  <div> <label>Z </label>\n    <input type=\"range\" min=\"1\" max=\"100\" value=\"50\" class=\"slider\" id=\"z\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/brainhome/sidemenu-components/slicing/slicing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlicingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlicingComponent = (function () {
    function SlicingComponent() {
    }
    SlicingComponent.prototype.ngOnInit = function () {
    };
    SlicingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-slicing',
            template: __webpack_require__("../../../../../src/app/brainhome/sidemenu-components/slicing/slicing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/brainhome/sidemenu-components/slicing/slicing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SlicingComponent);
    return SlicingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/brainhome/sidemenu/sidemenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidemenu {\n  width: 100%;\n  display:block;\n}\n\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/brainhome/sidemenu/sidemenu.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\nSideMenu ; which is inside left container of the home page\nAdding all the components which will be on sidemenu here\n-->\n\n<div class=\"sidemenu\">\n  <app-slicing></app-slicing>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/brainhome/sidemenu/sidemenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidemenuComponent = (function () {
    function SidemenuComponent() {
    }
    SidemenuComponent.prototype.ngOnInit = function () {
    };
    SidemenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidemenu',
            template: __webpack_require__("../../../../../src/app/brainhome/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/brainhome/sidemenu/sidemenu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about_data h1,h2{\n  text-align: center;\n  font-family: 'Oswald', sans-serif;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-bottom: 2%;\n  line-height: 1.7;\n  font-weight: bolder;\n  text-decoration: underline;\n}\n\n.about_data h3{\n  text-align: center;\n  font-family: 'Oswald', sans-serif;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-bottom: 2%;\n  line-height: 1.7;\n  font-weight: bolder;\n  text-decoration: underline;\n  color: red;\n}\n.about_data p{\n  text-align: center;\n  font-family: 'Oswald', sans-serif;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-bottom: 2%;\n  line-height: 1.7;\n  font-size: 18px;\n  color: #787878;\n}\n.about_data h5 {\n  text-align: center;\n  font-family: 'Russo One', sans-serif;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-bottom: 2%;\n  line-height: 1.7;\n  font-size: 18px;\n  font-weight: lighter;\n  color: #989898;\n}\n\n.clearing_class {\n  clear: none;\n  min-height: 50px;\n}\n\n.footer{\n  font-size:110%;\n  color:black;\n  clear:both;\n  display:block;\n  letter-spacing:6px;\n  border:2px solid black;\n  padding:5px;\n  text-decoration:none;\n  width:40%;\n  margin:auto;\n  text-align: center;\n  margin-top:50px;\n}\n.footer:hover{\n  background-color: black;\n  color: white;\n  font-size:110%;\n  clear:both;\n  display:block;\n  letter-spacing:6px;\n  border:2px solid white;\n  padding:5px;\n  text-decoration:none;\n  width:40%;\n  margin:auto;\n  text-align: center;\n  margin-top:50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Bertha's Deluxe Chocolates</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n<div>\n  <div class=\"clearing_class\"></div>\n  <div class=\"container text-center\">\n    <h1>SDSU BRAIN Project</h1>\n    <p>Let's convert caffeine to software</p>\n  </div>\n</div>\n<div class=\"about_data\">\n  <h1>ABOUT US</h1>\n  <p>This project aims to help in medical field</p>\n\n</div>\n<footer>\n  <a href=\"https://www.linkedin.com/in/yogesh-kohli-51795682/\" class=\"footer\">@YogeshKohliProfile</a>\n</footer>\n<div class=\"clearing_class\"></div>\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/navbar/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact_data h1,h2{\n  text-align: center;\n  font-family: 'Oswald', sans-serif;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-bottom: 2%;\n  line-height: 1.7;\n  font-weight: bolder;\n  text-decoration: underline;\n}\n\n.contact_data h3{\n  text-align: center;\n  font-family: 'Oswald', sans-serif;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-bottom: 2%;\n  line-height: 1.7;\n  font-weight: bolder;\n  text-decoration: underline;\n  color: red;\n}\n.contact_data p{\n  text-align: center;\n  font-family: 'Oswald', sans-serif;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-bottom: 2%;\n  line-height: 1.7;\n  font-size: 18px;\n  color: #787878;\n}\n.contact_data h5 {\n  text-align: center;\n  font-family: 'Russo One', sans-serif;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-bottom: 2%;\n  line-height: 1.7;\n  font-size: 18px;\n  font-weight: lighter;\n  color: #989898;\n}\n\n.clearing_class {\n  clear: none;\n  min-height: 50px;\n}\n\n.footer{\n  font-size:110%;\n  color:black;\n  clear:both;\n  display:block;\n  letter-spacing:6px;\n  border:2px solid black;\n  padding:5px;\n  text-decoration:none;\n  width:40%;\n  margin:auto;\n  text-align: center;\n  margin-top:50px;\n}\n.footer:hover{\n  background-color: black;\n  color: white;\n  font-size:110%;\n  clear:both;\n  display:block;\n  letter-spacing:6px;\n  border:2px solid white;\n  padding:5px;\n  text-decoration:none;\n  width:40%;\n  margin:auto;\n  text-align: center;\n  margin-top:50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Bertha's Deluxe Chocolates</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n\n<div >\n  <div class=\"clearing_class\"></div>\n  <div class=\"container text-center\">\n    <h1>SDSU BRAIN Project</h1>\n    <p>Let's convert caffeine to software</p>\n  </div>\n</div>\n<div class=\"contact_data\">\n  <h1>CONTACT US</h1>\n  <p>You can contact us anytime.</p>\n  <h3>Kindly feel free to write to us at:</h3>\n  <h5>Email: xxxxxxxx@xyz.com</h5>\n  <br />\n  <p>SAN DIEGO STATE UNIVERSITY<br />\n    5500 Campanile Dr, San Diego, CA 92182<br />\n    Phone: XXX-XXXX-XXXX<br />\n    E-mail: support@xxxxxx.com<br />\n  </p>\n</div>\n<footer>\n  <a href=\"https://www.linkedin.com/in/yogesh-kohli-51795682/\" class=\"footer\">@YogeshKohliProfile</a>\n</footer>\n<div class=\"clearing_class\"></div>\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/navbar/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Pen-specific styles */\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-size: 1.25rem;\n  font-family: sans-serif;\n  line-height: 150%;\n  text-shadow: 0 2px 2px #b6701e;\n}\n\nsection {\n  color: black;\n  text-align: center;\n}\n\ndiv {\n  height: 85%;\n}\n\narticle {\n  position: absolute;\n  top: 10%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 100%;\n  padding: 20px;\n}\n\nh1 {\n  font-size: 1.75rem;\n  margin: 0 0 0.75rem 0;\n}\n\n/* Pattern styles */\n.container {\n  display: table;\n  width: 100%;\n}\n\n.left-half {\n  background-color: #F5F5F5;\n  position: absolute;\n  left: 0px;\n  width: 25%;\n  overflow:auto;\n}\n\n.right-half {\n  position: absolute;\n  right: 0px;\n  width: 75%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--\nDividing window into 2 sections with 25% and 75%\nNow, will add component - sidemenu to left half of the container and brain canvas into right half of the container\n-->\n\n<section class=\"container\">\n  <div class=\"left-half\">\n      <app-sidemenu></app-sidemenu>\n  </div>\n  <div class=\"right-half\">\n      <app-braincanvas></app-braincanvas>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/navbar/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/team/team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  team works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team',
            template: __webpack_require__("../../../../../src/app/navbar/team/team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/brain-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrainDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BrainDataService = (function () {
    function BrainDataService(http) {
        this.http = http;
        this.serverApi = 'http://localhost:3000';
        this.BRAINDATA = [{ "catagory": 49, "color": 108, "vertexNumber": 722021, "x": 75, "y": 33, "z": 73 },
            { "catagory": 49, "color": 110, "vertexNumber": 722022, "x": 76, "y": 33, "z": 73 }];
    }
    BrainDataService.prototype.getBrainDataMock = function () {
        return this.BRAINDATA;
    };
    BrainDataService.prototype.getTenOld = function () {
        var URI = this.serverApi + "/brainSlicer/ten";
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res; });
    };
    BrainDataService.prototype.getTen = function () {
        return this.http.get('http://localhost:3000/brainSlicer/ten')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    BrainDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], BrainDataService);
    return BrainDataService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map