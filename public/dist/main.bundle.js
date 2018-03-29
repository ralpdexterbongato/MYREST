webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\n@import url('https://fonts.googleapis.com/css?family=Montserrat|Monoton|Roboto|Comfortaa|Yantramanav:700');\r\n.main-container\r\n{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n@media (max-width:950px)\r\n{\r\n  .main-container\r\n  {\r\n    -webkit-box-orient:vertical;\r\n    -webkit-box-direction:reverse;\r\n        -ms-flex-direction:column-reverse;\r\n            flex-direction:column-reverse;\r\n  }\r\n}\r\n.static-burger\r\n{\r\n  position: fixed;\r\n  top: 17px;\r\n  right: 15px;\r\n  z-index: 30;\r\n  padding:10px;\r\n}\r\n@media (max-width:400px)\r\n{\r\n  .static-burger\r\n  {\r\n    right:5px;\r\n  }\r\n}\r\n.burger-layer\r\n{\r\n  height: 4px;\r\n  width: 26px;\r\n  background: #272727;\r\n  margin-bottom: 5px;\r\n}\r\n.layer1.active\r\n{\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n  margin-bottom: -4px;\r\n  margin-top: 10px;\r\n}\r\n.layer2.active\r\n{\r\n  display: none;\r\n}\r\n.layer3.active\r\n{\r\n  -webkit-transform:rotate(-45deg);\r\n          transform:rotate(-45deg);\r\n}\r\n.layer1,.layer2,.layer3\r\n{\r\n  -webkit-transition: -webkit-transform .5s;\r\n  transition: -webkit-transform .5s;\r\n  transition: transform .5s;\r\n  transition: transform .5s, -webkit-transform .5s;\r\n}\r\n.static-logo svg\r\n{\r\n  max-width: 50px;\r\n}\r\n.static-side-bar-container\r\n{\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n@media (max-width:950px)\r\n{\r\n  .static-side-bar-container\r\n  {\r\n    position: relative;\r\n  }\r\n  .static-logo\r\n  {\r\n    display: none;\r\n  }\r\n}\r\n.static-side-wrap\r\n{\r\n  min-width: 386px;\r\n}\r\n.side-content\r\n{\r\n  min-height: 100vh;\r\n  min-width: 385px;\r\n  background:#4B21FF;\r\n  padding:25px 25px 25px 25px;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient:vertical;\r\n  -webkit-box-direction:normal;\r\n      -ms-flex-direction:column;\r\n          flex-direction:column;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n@media (max-width:950px)\r\n{\r\n  .side-content\r\n  {\r\n    min-height: 50vh;\r\n  }\r\n}\r\n@media (max-width:500px)\r\n{\r\n  .static-side-wrap\r\n  {\r\n    min-width: 0px!important;\r\n  }\r\n  .side-content\r\n  {\r\n    min-width: 0px!important;\r\n  }\r\n}\r\n.content-container\r\n{\r\n  -webkit-box-flex:1;\r\n      -ms-flex:1;\r\n          flex:1;\r\n}\r\n.info-list li\r\n{\r\n  color: #f9f9f9;\r\n  margin-bottom: 25px;\r\n  font-size: 13px;\r\n  letter-spacing:1px;\r\n}\r\n@media (max-width:500px)\n{\n  .info-list\n  {\n    text-align: center;\n  }\n}\r\n.info-list li label\r\n{\r\n  font-weight:600;\r\n  font-family: 'Montserrat',sans-serif;\r\n}\r\n.info-list li img\r\n{\r\n  width: 100%;\r\n}\r\n.info-list li p\r\n{\r\n  margin-top: 14px;\r\n  font-family: 'Comfortaa', cursive;\r\n}\r\n.info-list li p i\r\n{\r\n  margin-right: 20px;\r\n  width: 22px;\r\n}\r\n/*drawer navs*/\r\n.modal-background.active\r\n{\r\n  height: 100vh;\r\n  width: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background: rgba(21, 9, 76, 0.6);\r\n}\r\n.drawer-nav\r\n{\r\n  z-index: 20;\r\n  border:1px solid #e0e0e0;\r\n  position: fixed;\r\n  top:0px;\r\n  right: -5000px;\r\n  width: 240px;\r\n  height: 100vh;\r\n  background:#FDFDFD;\r\n  -webkit-transition: right .5s;\r\n  transition: right .5s;\r\n}\r\n.drawer-nav.active\r\n{\r\n  right:0px;\r\n}\r\n.sm-logo\r\n{\r\n  padding-left: 20px;\r\n  padding-top: 55px;\r\n  padding-bottom: 10px;\r\n  background:#fff;\r\n  border-bottom: 1px solid #e0e0e0;\r\n}\r\n.sm-logo img\r\n{\r\n  width: 40px\r\n}\r\n.drawer-nav ul\r\n{\r\n  height: 80vh;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n.drawer-nav ul li:hover\r\n{\r\n  color: #2d2d2d;\r\n}\r\n.is-active\r\n{\r\n  color: #2d2d2d!important;\r\n}\r\n.drawer-nav ul li\r\n{\r\n  cursor: pointer;\r\n  outline-style: none;\r\n  padding:30px 20px;\r\n  font-size: 17px;\r\n  font-weight: 600;\r\n  color: #5A5A5A;\r\n}\r\n.drawer-nav ul li i\r\n{\r\n  vertical-align:middle;\r\n  margin-bottom: 5px;\r\n  font-size: 40px;\r\n  margin-right: 25px;\r\n}\r\n@media (max-width:580px)\r\n{\r\n  .drawer-nav ul li\r\n  {\r\n    padding:15px;\r\n    font-size: 14px;\r\n  }\r\n  .drawer-nav ul li i\r\n  {\r\n    font-size: 24px;\r\n  }\r\n}\r\n#centerpath\r\n{\r\n  fill:none;\r\n  stroke:#fff;\r\n  stroke-width:13;\r\n  stroke-linejoin:round;\r\n  stroke-miterlimit:10;\r\n  pointer-events:none;\r\n}\r\n#logo:hover #centerpath\r\n{\r\n  fill:#fff;\r\n}\r\n#centerpath\r\n{\r\n  stroke-dasharray:1000;\r\n  stroke-dashoffset:0;\r\n  -webkit-animation:dash 2s linear forwards;\r\n  animation:dash 2s linear forwards;\r\n}\r\n@-webkit-keyframes dash\r\n{\r\n  from\r\n  {\r\n    stroke-dashoffset:1000;\r\n  }\r\n  to\r\n  {\r\n    stroke-dashoffset:0;\r\n  }\r\n}\r\n@media (max-width:580px)\r\n{\r\n  #centerpath\r\n  {\r\n    stroke:#4B21FF!important;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-container\" [ngClass]=\"{'noscroll':drawerIsActive==true}\">\n  <div class=\"static-side-wrap\">\n    <div class=\"static-side-bar-container\">\n      <div class=\"side-content\">\n        <div class=\"static-logo\">\n          <div class=\"logo-wrap\">\n            <svg version=\"1.1\" id=\"logo\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 222 305\">\n            <path id=\"centerpath\" d=\"M134.4,150.3h-21.1l-43.5-61C79,85.5,86.2,80,91.3,72.8S99,57.5,99,48.3c0-11.7-3.7-20.5-11.1-26.7\n              c-7.4-6.1-18-9.2-31.9-9.2H12.3V157h20.3V95.9h19.1L92.9,157l-0.9,2v133.3l40.8-2c23,0,41.3-6.6,55-19.7s20.6-30.5,20.6-52.1\n              C208.4,173,183.7,150.3,134.4,150.3z\"/>\n            </svg>\n          </div>\n        </div>\n        <ul class=\"info-list\">\n          <li>\n            <label>Email</label>\n            <p>rdc2898@gmail.com</p>\n          </li>\n          <li>\n            <label>Phone</label>\n            <p>+63 927 585 0184</p>\n          </li>\n          <li>\n            <label>Find Me On</label>\n            <p>\n              <a href=\"https://www.facebook.com/rdb2898\" target=\"_blank\"><i class=\"material-icons\"><img src=\"dist/assets/images/facebook.svg\" alt=\"icon\"></i></a>\n              <a href=\"https://github.com/ralpdexterbongato\" target=\"_blank\"><i class=\"material-icons\" ><img src=\"dist/assets/images/github.svg\"  alt=\"icon\"></i></a>\n              <a href=\"https://twitter.com/rdb2898\" target=\"_blank\"><i class=\"material-icons\"><img src=\"dist/assets/images/twitter.svg\"  alt=\"icon\"></i></a>\n            </p>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"content-container\">\n    <div>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n<div class=\"static-burger\" (click)=\"toggleDrawer()\">\n  <div class=\"burger-layer layer1\" [ngClass]=\"{'active': drawerIsActive==true}\">\n  </div>\n  <div class=\"burger-layer layer2\" [ngClass]=\"{'active': drawerIsActive==true}\">\n  </div>\n  <div class=\"burger-layer layer3\" [ngClass]=\"{'active': drawerIsActive==true}\">\n  </div>\n</div>\n<div class=\"drawer-nav\" [ngClass]=\"{'active': drawerIsActive==true}\">\n  <div class=\"sm-logo\">\n  </div>\n  <ul>\n    <li (click)=\"toggleDrawer()\" routerLink=\"/\" [routerLinkActive]=\"'is-active'\"><i class=\"material-icons\">info_outline</i> About</li>\n    <li (click)=\"toggleDrawer()\" routerLink=\"/projects\" [routerLinkActive]=\"'is-active'\"><i class=\"material-icons\">developer_mode</i> Project</li>\n    <li (click)=\"toggleDrawer()\" routerLink=\"/skills\" [routerLinkActive]=\"'is-active'\"><i class=\"material-icons\">code</i> Skills</li>\n    <li (click)=\"toggleDrawer()\" routerLink=\"/contact\" [routerLinkActive]=\"'is-active'\"><i class=\"material-icons\">phone</i> Contact</li>\n  </ul>\n</div>\n<div (click)=\"toggleDrawer()\" class=\"modal-background\" [ngClass]=\"{'active': drawerIsActive==true}\">\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.drawerIsActive = false;
    }
    AppComponent.prototype.toggleDrawer = function () {
        if (this.drawerIsActive == false) {
            this.drawerIsActive = true;
        }
        else {
            this.drawerIsActive = false;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__landing_page_landing_page_component__ = __webpack_require__("./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__latest_works_latest_works_component__ = __webpack_require__("./src/app/latest-works/latest-works.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__skills_skills_component__ = __webpack_require__("./src/app/skills/skills.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    {
        path: 'skills',
        component: __WEBPACK_IMPORTED_MODULE_9__skills_skills_component__["a" /* SkillsComponent */],
        data: { title: 'Skills' }
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */],
        data: { title: 'Contact me' }
    },
    {
        path: 'projects',
        component: __WEBPACK_IMPORTED_MODULE_7__latest_works_latest_works_component__["a" /* LatestWorksComponent */],
        data: { title: 'Projects' }
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__landing_page_landing_page_component__["a" /* LandingPageComponent */],
        data: { title: 'Home' }
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__landing_page_landing_page_component__["a" /* LandingPageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__latest_works_latest_works_component__["a" /* LatestWorksComponent */],
                __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_9__skills_skills_component__["a" /* SkillsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ".contact-content-container\r\n{\r\n  min-height: 50vh;\r\n  position: relative;\r\n  padding:25px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n@media (max-width:400px)\r\n{\r\n  .contact-content-container\r\n  {\r\n    padding:25px 10px;\r\n  }\r\n}\r\n.floating-message-form\r\n{\r\n  position:absolute;\r\n  border-radius: 2px;\r\n  width:350px;\r\n  background: #2e2e2e;\r\n  left: -150px;\r\n  top: 25px;\r\n  color: #f9f9f9;\r\n  padding:60px 30px 30px 30px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  -webkit-filter: drop-shadow(8px 10px 18px rgba(50,50,50,0.5));\r\n          filter: drop-shadow(8px 10px 18px rgba(50,50,50,0.5));\r\n}\r\n@media (max-width:950px)\r\n{\r\n  .floating-message-form\r\n  {\r\n    position:relative;\r\n    margin:0 auto;\r\n    -webkit-filter:none;\r\n            filter:none;\r\n    left: auto;\r\n    top: auto;\r\n  }\r\n  .contact-wrap\r\n  {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: reverse;\r\n        -ms-flex-direction: row-reverse;\r\n            flex-direction: row-reverse;\r\n    width: 100%;\r\n  }\r\n  .contact-box\r\n  {\r\n    margin-left: 15px;\r\n  }\r\n}\r\n@media (max-width:587px)\r\n{\r\n  .contact-wrap\r\n  {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n  .floating-message-form\r\n  {\r\n    width: auto;\r\n    margin-right: 0px;\r\n  }\r\n  .contact-box\r\n  {\r\n    margin-left: 0px;\r\n  }\r\n}\r\n.message-form-title\r\n{\r\n  font-family: 'Yantramanav',sans-serif;\r\n}\r\n.inputs-container\r\n{\r\n  margin-top: 25px;\r\n}\r\n.inputs-container input::-webkit-input-placeholder,.inputs-container textarea::-webkit-input-placeholder\r\n{\r\n  color: #989898;\r\n  font-size: 12px;\r\n}\r\n.inputs-container input:-ms-input-placeholder,.inputs-container textarea:-ms-input-placeholder\r\n{\r\n  color: #989898;\r\n  font-size: 12px;\r\n}\r\n.inputs-container input::-ms-input-placeholder,.inputs-container textarea::-ms-input-placeholder\r\n{\r\n  color: #989898;\r\n  font-size: 12px;\r\n}\r\n.inputs-container input::placeholder,.inputs-container textarea::placeholder\r\n{\r\n  color: #989898;\r\n  font-size: 12px;\r\n}\r\n.inputs-container textarea\r\n{\r\n  outline-style: none;\r\n  font-family: 'Comfortaa',sans-serif;\r\n  border-style: none;\r\n  border-bottom: 2px solid #989898;\r\n  color: #f5f5f5;\r\n  background: transparent;\r\n  width: 100%;\r\n  height: 180px;\r\n  resize: none;\r\n  padding:none;\r\n    font-size: 12px;\r\n  font-weight: 100;\r\n}\r\n.inputs-container input\r\n{\r\n  outline-style: none;\r\n  font-family: 'Comfortaa',sans-serif;\r\n  margin-bottom: 30px;\r\n  border-style: none;\r\n  border-bottom: 2px solid #989898;\r\n  color: #f5f5f5;\r\n  background: transparent;\r\n  width: 100%;\r\n  font-weight: 100;\r\n  font-size: 12px;\r\n  padding-bottom: 10px;\r\n}\r\n.inputs-container button\r\n{\r\n  padding: 11px 30px;\r\n  letter-spacing: 2px;\r\n  outline-style: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  margin-top: 40px;\r\n  margin-bottom: 20px;\r\n  border-style: none;\r\n  border-radius: 20px;\r\n  font-size: 14px;\r\n  color: #fff;\r\n  background: #4B21FF;\r\n  font-family:lato;\r\n}\r\n/*content part*/\r\n.big-top-title\r\n{\r\n  font-size: 25px;\r\n  font-weight: 600;\r\n  margin-bottom: 50px;\r\n  letter-spacing: 1px;\r\n  font-family: 'Yantramanav',sans-serif;\r\n}\r\n@media (max-width:500px)\r\n{\r\n  .big-top-title\r\n  {\r\n    font-size: 20px;\r\n  }\r\n}\r\n.content-box-container\r\n{\r\n  padding-left: 240px;\r\n}\r\n.contact-boxes-container\r\n{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n@media(max-width:950px) {\r\n  .content-box-container\r\n  {\r\n    padding-left: 0px;\r\n  }\r\n}\r\n.contact-box:hover\r\n{\r\n  -webkit-filter: drop-shadow(5px 5px 8px rgba(100, 100, 100, 0.2));\r\n          filter: drop-shadow(5px 5px 8px rgba(100, 100, 100, 0.2));\r\n}\r\n.contact-box:first-child\r\n{\r\n    -webkit-filter: drop-shadow(5px 5px 8px rgba(100, 100, 100, 0.2));\r\n            filter: drop-shadow(5px 5px 8px rgba(100, 100, 100, 0.2));\r\n}\r\n.contact-box\r\n{\r\n  -webkit-transition: -webkit-filter .5s;\r\n  transition: -webkit-filter .5s;\r\n  transition: filter .5s;\r\n  transition: filter .5s, -webkit-filter .5s;\r\n  margin-bottom: 20px;\r\n  color: #454545;\r\n  padding: 25px;\r\n  background: #fff;\r\n  border-radius: 2px;\r\n}\r\n.contact-box h3\r\n{\r\n  margin-bottom: 20px;\r\n  font-size: 15px;\r\n  font-family: 'Yantramanav',sans-serif;\r\n}\r\n.contact-box p\r\n{\r\n  margin-bottom: 10px;\r\n  font-size: 13px;\r\n  font-family: 'comfortaa',sans-serif;\r\n}\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-content-container\">\n  <div class=\"content-box-container\">\n    <h3 class=\"big-top-title\">LET ME KNOW</h3>\n    <div class=\"contact-wrap\">\n      <div class=\"contact-boxes-container\">\n        <div class=\"contact-box\">\n          <h3>Phone</h3>\n          <p>(+63) 927 585 0184</p>\n          {{myToken}}\n          <p>0927 585 0184</p>\n        </div>\n        <div class=\"contact-box\">\n          <h3>Email</h3>\n          <p>rdc2898@gmail.com</p>\n          <p>ralpdexterbongato@gmail.com</p>\n        </div>\n        <div class=\"contact-box\">\n          <h3>Address</h3>\n          <p>Brgy. Lajog, Calumbangan St., Clarin</p>\n          <p>Bohol, Philippines</p>\n        </div>\n      </div>\n      <div class=\"floating-message-form\">\n        <h3 class=\"message-form-title\">Send A Message</h3>\n        <div class=\"inputs-container\">\n          <input type=\"text\" [(ngModel)]=\"cfullname\" placeholder=\"Your Name\" autocomplete=\"false\"  >\n          <input type=\"email\" [(ngModel)]=\"cemail\" placeholder=\"Your Email\"  autocomplete=\"false\" >\n          <input type=\"text\" [(ngModel)]=\"cbudget\" placeholder=\"Your Budget Range\"  autocomplete=\"false\" >\n          <textarea placeholder=\"Your Message\" [(ngModel)]=\"cmessage\"></textarea>\n          <button type=\"button\" (click)=\"submitMessage()\" name=\"button\">SEND MESSAGE</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(httpClient) {
        this.httpClient = httpClient;
        this.cfullname = '';
        this.cemail = '';
        this.cbudget = '';
        this.cmessage = '';
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.submitMessage = function () {
        this.httpClient.post("/api/message", {
            cfullname: this.cfullname,
            cemail: this.cemail,
            cbudget: this.cbudget,
            cmessage: this.cmessage,
        })
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/***/ (function(module, exports) {

module.exports = ".landing-page-container\r\n{\r\n  position: relative;\r\n  min-height: 100vh;\r\n  padding:25px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n@media (max-width:400px)\r\n{\r\n  .landing-page-container\r\n  {\r\n    padding:25px 10px;\r\n  }\r\n}\r\n.image-content-container\r\n{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.landing-page-image\r\n{\r\n  position: relative;\r\n  background-position: center!important;\r\n  background-size: cover!important;\r\n  background-repeat: no-repeat!important;\r\n  width:28vw;\r\n  height: 90vh;\r\n  position: absolute;\r\n  top: 25px;\r\n  left: -10vw;\r\n  border-radius: 2px;\r\n  -webkit-filter: drop-shadow(8px 10px 18px rgba(50,50,50,0.5));\r\n          filter: drop-shadow(8px 10px 18px rgba(50,50,50,0.5));\r\n}\r\n.landing-page-image img\r\n{\r\n  width: 100%;\r\n}\r\n@media (max-width:1106px)\r\n{\r\n  .landing-page-image\r\n  {\r\n    left: -14vw;\r\n  }\r\n}\r\n@media (max-width:950px)\r\n{\r\n  .landing-page-image\r\n  {\r\n    position: relative;\r\n    left: auto;\r\n    top: auto;\r\n    height: auto;\r\n  }\r\n  .landing-page-container\r\n  {\r\n    min-height: 50vh;\r\n  }\r\n}\r\n@media (max-width:600px)\r\n{\r\n  .landing-page-image\r\n  {\r\n    display: none;\r\n  }\r\n  .landing-page-content\r\n  {\r\n    padding-left: 0px;\r\n  }\r\n}\r\n.sololine\r\n{\r\n  height:4px;\r\n  width: 9vw;\r\n  background: #4B21FE;\r\n  position: absolute;\r\n  top: 37vh;\r\n  right: -4vw;\r\n}\r\n@media (max-width:1106px)\r\n{\r\n  .sololine\r\n  {\r\n    width: 6vw;\r\n    right: -2vw;\r\n  }\r\n}\r\n.landing-page-content\r\n{\r\n  padding-top: 28vh;\r\n  padding-left:20vw;\r\n}\r\n@media (max-width:1106px)\n{\n  .landing-page-content\n  {\n    padding-left:15vw;\n  }\n}\r\n@media (max-width:950px)\r\n{\n  .landing-page-content\n  {\n    padding-left:5vw;\n  }\n}\r\n@media (max-width:600px)\r\n{\r\n  .landing-page-content\r\n  {\r\n    padding-left: 0px;\r\n    padding-top: 0px;\r\n  }\r\n}\r\n.large-text-name\r\n{\r\n  font-size:35px;\r\n  color: #2D2D2D;\r\n  font-family: 'Yantramanav',sans-serif;\r\n  letter-spacing: 1px;\r\n  line-height: 36px;\r\n}\r\n@media (max-width:600px)\r\n{\r\n  .large-text-name\r\n  {\r\n    font-size: 20vw;\r\n    line-height:16vw;\r\n  }\r\n}\r\n.highlight\r\n{\r\n  color: #4B21FE;\r\n}\r\n.medium-home-text\r\n{\r\n  margin-top: 20px;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  letter-spacing:.5px;\r\n  font-family: 'Comfortaa',sans-serif;\r\n  color: #2d2d2d;\r\n}\r\n.landing-box\r\n{\r\n  max-width: 400px;\r\n}\r\n.landing-box-container\r\n{\r\n  -webkit-box-flex:2;\r\n      -ms-flex:2;\r\n          flex:2;\r\n}\r\n.home-parag\r\n{\r\n  font-family: 'Comfortaa',sans-serif;\r\n  font-size: 14px;\r\n  margin-top: 20px;\r\n  line-height: 20px;\r\n  color:#9A9A9A;\r\n\r\n}\r\n.big-buttons-container\r\n{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin-top: 25px;\r\n}\r\n@media (max-width:410px)\r\n{\r\n  .big-buttons-container\r\n  {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n  .big-buttons-container button\r\n  {\r\n    margin:10px auto;\r\n    width: 100%;\r\n  }\r\n}\r\n.big-buttons-container button:hover\r\n{\r\n-webkit-filter: drop-shadow(3px 10px 9px rgba(100,100,100,0.5));\r\n        filter: drop-shadow(3px 10px 9px rgba(100,100,100,0.5));\r\n}\r\n.big-buttons-container button\r\n{\r\n  -webkit-transition: all .5s;\r\n  transition: all .5s;\r\n  padding:16px 35px;\r\n  font-size: 14px;\r\n  letter-spacing: 3px;\r\n  color: #2d2d2d;\r\n  font-weight: 600;\r\n  margin-right: 20px;\r\n  border-radius: 30px;\r\n  border-style: none;\r\n  outline-style: none;\r\n  cursor: pointer;\r\n}\r\n@media (max-width:580px)\r\n{\r\n  .big-buttons-container button\r\n  {\r\n    padding:10px 25px;\r\n  }\r\n}\r\n.big-buttons-container button:nth-child(odd)\r\n{\r\n  color: #fff;\r\n  background: #4B21FF;\r\n}\r\n.big-buttons-container button:nth-child(even)\r\n{\r\n  border:3px solid #2d2d2d;\r\n  background: #fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"landing-page-container\">\n  <div class=\"image-content-container\">\n    <div class=\"landing-page-image\">\n      <img src=\"dist/assets/images/me.svg\" alt=\"mypic\">\n      <div class=\"sololine\">\n      </div>\n    </div>\n    <div class=\"landing-page-content\">\n      <div class=\"landing-box-container\">\n        <div class=\"landing-box\">\n          <div class=\"large-text-name\">\n            <span class=\"highlight\">RD</span> <br>\n            RALP DEXTER\n          </div>\n          <p class=\"medium-home-text\">Full Stack - Web Developer</p>\n          <p class=\"home-parag\">I am Ralp Dexter Bongato, a passionate web developer.\n            20-year-old living in a small, but damn beautiful country called Philippines.\n          </p>\n          <div class=\"big-buttons-container\">\n            <button routerLink=\"/projects\" type=\"button\" name=\"button\">PORTFOLIO</button>\n            <button routerLink=\"/skills\" type=\"button\" name=\"button\">SKILLS</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing-page',
            template: __webpack_require__("./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__("./src/app/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/latest-works/latest-works.component.css":
/***/ (function(module, exports) {

module.exports = ".latest-works-container\r\n{\r\n  padding:25px;\r\n  overflow-x: hidden;\r\n}\r\n@media (max-width:400px)\r\n{\r\n  .latest-works-container\r\n  {\r\n    padding:25px 10px;\r\n  }\r\n}\r\n.big-top-title\r\n{\r\n  font-size: 25px;\r\n  font-family: 'Yantramanav',sans-serif;\r\n  font-weight: 600;\r\n  margin-bottom: 25px;\r\n}\r\n@media (max-width:500px)\r\n{\r\n  .big-top-title\r\n  {\r\n    font-size: 20px;\r\n  }\r\n}\r\n.container1\r\n{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n.container2\r\n{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap-reverse;\r\n      flex-wrap: wrap-reverse;\r\n}\r\n.images-box\r\n{\r\n  -webkit-box-flex:1;\r\n      -ms-flex:1;\r\n          flex:1;\r\n  min-height: 337px;\r\n  min-width: 400px;\r\n}\r\n@media (max-width:500px)\r\n{\r\n  .images-box\r\n  {\r\n    min-width: 250px;\r\n    padding:20px 0px;\r\n  }\r\n}\r\n.box1,.box4\r\n{\r\n  background: #f5f5f5;\r\n}\r\n.box2,.box3\r\n{\r\n  background: #e9e9e9;\r\n}\r\n.box2\r\n{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.box4\r\n{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-ordinal-group: 4;\r\n      -ms-flex-order: 3;\r\n          order: 3;\r\n}\r\n.box3\r\n{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.box1\r\n{\n  -webkit-filter: drop-shadow(3px 6px 9px rgba(100,100,100,0.3));\n          filter: drop-shadow(3px 6px 9px rgba(100,100,100,0.3));\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n.text-data\r\n{\r\n  margin:40px;\r\n}\r\n.other-detail p\r\n{\r\n  display: inline-block;\r\n  font-size: 14px;\r\n  margin-right: 6px;\r\n}\r\n.project-title\r\n{\r\n  max-width:280px;\r\n  margin-top:10px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  font-family:sans-serif;\r\n}\r\n/*laptop draw css*/\r\n.laptop-side:hover\r\n{\r\n  -webkit-animation: laptop-side 1s normal forwards ease-in-out;\r\n          animation: laptop-side 1s normal forwards ease-in-out;\r\n  -webkit-transform-origin: 50% 0%;\r\n          transform-origin: 50% 0%;\r\n}\r\n.laptop-side\r\n{\r\n  padding:10px;\r\n  background: #454545;\r\n  height: 150px;\r\n  width: 300px;\r\n  border-radius: 4px;\r\n  margin:0 auto;\r\n}\r\n.laptop-screen\r\n{\r\n  height: 100%;\r\n  width: 100%;\r\n  color: #fff;\r\n}\r\n.laptop-screen img\r\n{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.laptop-btm\r\n{\r\n  height: 12px;\r\n  width: 380px;\r\n  background:#454545;\r\n  margin:0 auto;\r\n  margin-top:1px;\r\n  border-bottom-left-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  z-index: 17;\r\n  border-bottom: 3px solid #A2A2A2;\r\n}\r\n@media (max-width:500px)\r\n{\r\n  .laptop-btm\r\n  {\r\n    height: 5px;\r\n    width: 250px;\r\n  }\r\n  .laptop-side\r\n  {\r\n    height: 100px;\r\n    width: 200px;\r\n    padding:7px;\r\n  }\r\n}\r\n.laptop-container\r\n{\r\n  position: relative;\r\n  margin:auto;\r\n}\r\n/*mobile*/\r\n.mobile-side\r\n{\r\n  padding:20px 10px 30px 10px;\r\n  background: #2e2e2e;\r\n  width: 170px;\r\n  margin:auto;\r\n  height: 300px;\r\n  border-radius: 20px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  border-bottom: 10px solid #A2A2A2;\r\n}\r\n.mobile-screen img\r\n{\r\n  width: 100%;\r\n}\r\n.mobile-screen::-webkit-scrollbar {\r\n    width:5px;\r\n}\r\n.mobile-screen::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(255,255,255,1);\r\n    background: #fff;\r\n}\r\n.mobile-screen::-webkit-scrollbar-thumb {\r\n  background-color: darkgrey;\r\n  outline: 1px solid slategrey;\r\n}\r\n.mobile-screen\r\n{\r\n  height: 100%;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n  background: #2E5CC0;\r\n}\r\n.mobile-button\r\n{\r\n  background: #fff;\r\n  margin:0 auto;\r\n  height: 10px;\r\n  width: 40px;\r\n  margin-top: 10px;\r\n  border-radius: 5px;\r\n}\r\n.project-logo img\r\n{\r\n  width: 100%;\r\n}\r\n.project-logo\r\n{\r\n  width: 200px;\r\n  margin:auto;\r\n}\r\n.tool-logo\r\n{\r\n  margin:auto;\r\n  font-size: 40px;\r\n  font-family: 'Monoton',cursive;\r\n  text-align: justify;\r\n  color: #2e2e2e;\r\n}\r\n.text-line\r\n{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n.text-line p\r\n{\r\n  margin:10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/latest-works/latest-works.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"latest-works-container\">\n  <div class=\"latest-work-wrap\">\n    <h3 class=\"big-top-title\">LATEST PROJECT</h3>\n    <div class=\"project-images-container container1\">\n      <div class=\"images-box box1\">\n        <div class=\"project-logo\">\n          <img src=\"dist/assets/images/warehouse.svg\" alt=\"logo\">\n        </div>\n        <div class=\"text-data\">\n          <div class=\"other-detail\">\n            <p>Client: Boheco-I</p><p>Year: 2018</p>\n          </div>\n          <div class=\"project-title\">\n            WAREHOUSE INVENTORY CONTROL\n          </div>\n        </div>\n      </div>\n      <div class=\"images-box box2\">\n        <div class=\"laptop-container\">\n          <div class=\"laptop-side\">\n            <div class=\"laptop-screen\">\n              <img src=\"dist/assets/images/project1.PNG\" alt=\"project\">\n            </div>\n          </div>\n          <div class=\"laptop-btm\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"project-images-container container2\">\n      <div class=\"images-box box3\">\n        <div class=\"mobile-side\">\n          <div class=\"mobile-screen\">\n            <img src=\"dist/assets/images/projectmobile.png\" alt=\"project\">\n          </div>\n          <div class=\"mobile-button\">\n          </div>\n        </div>\n      </div>\n      <div class=\"images-box box4\">\n        <div class=\"tool-logo\">\n          <div class=\"text-line\">\n            <p>L</p>\n            <p>A</p>\n            <p>R</p>\n          </div>\n          <div class=\"text-line\">\n            <p>A</p>\n            <p>V</p>\n            <p>E</p>\n          </div>\n          <div class=\"text-line\">\n            <p>L</p>\n            <p>V</p>\n            <p>U</p>\n          </div>\n          <div class=\"text-line\">\n            <p>E</p>\n            <p>J</p>\n            <p>S</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/latest-works/latest-works.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestWorksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LatestWorksComponent = /** @class */ (function () {
    function LatestWorksComponent() {
    }
    LatestWorksComponent.prototype.ngOnInit = function () {
    };
    LatestWorksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-latest-works',
            template: __webpack_require__("./src/app/latest-works/latest-works.component.html"),
            styles: [__webpack_require__("./src/app/latest-works/latest-works.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LatestWorksComponent);
    return LatestWorksComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/***/ (function(module, exports) {

module.exports = ".skills-container\r\n{\r\n  padding:25px;\r\n}\r\n@media (max-width:400px)\r\n{\r\n  .skills-container\r\n  {\r\n    padding:25px 10px;\r\n  }\r\n}\r\n.big-top-title\r\n{\r\n  font-size: 25px;\r\n  margin-bottom: 25px;\r\n  font-family:'Yantramanav',sans-serif;\r\n}\r\n.boxes-container\r\n{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack:justify;\r\n      -ms-flex-pack:justify;\r\n          justify-content:space-between;\r\n  min-height: 50vh;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  margin:0 auto;\r\n}\r\n@media (max-width:500px)\r\n{\r\n  .big-top-title\r\n  {\r\n    font-size: 20px;\r\n  }\r\n  .boxes-container\r\n  {\r\n    -webkit-box-pack:center;\r\n        -ms-flex-pack:center;\r\n            justify-content:center;\r\n  }\r\n  .skill-box\r\n  {\r\n    margin:5px;\r\n  }\r\n}\r\n.skill-title\r\n{\r\n  margin-bottom: 0px;\r\n  font-size: 12px;\r\n  font-family: 'Comfortaa',sans-serif;\r\n  color: #fff;\r\n  border-bottom-right-radius: 4px;\r\n  border-bottom-left-radius: 4px;\r\n  padding-top: 5px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n}\r\n.skill-screen\r\n{\r\n  height: 100%;\r\n  width: 100%;\r\n  background: #fff;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.skill-box:hover .laravellogo  path\r\n{\r\n  fill:#F05340;\r\n}\r\n.skill-box:hover .angularlogo  path\r\n{\r\n  fill:#E13137;\r\n}\r\n.skill-box:hover .phplogo  path\r\n{\r\n  fill:#777BB3;\r\n}\r\n.skill-box:hover .sqllogo  path\r\n{\r\n  fill:#E4322B;\r\n}\r\n.skill-box:hover .htmllogo  path\r\n{\r\n  fill:#E44D26;\r\n}\r\n.skill-box:hover .csslogo  path\r\n{\r\n  fill:#2CA9E1;\r\n}\r\n.skill-box:hover .jslogo  path\r\n{\r\n  fill:#F0DB4F;\r\n}\r\n.skill-box:hover .jquerylogo  path\r\n{\r\n  fill:#1B75BB;\r\n}\r\n.skill-box:hover .vuelogo  path\r\n{\r\n  fill:#41B883;\r\n}\r\n.skill-box:hover .mysqllogo  path\r\n{\r\n  fill:#F17B2D;\r\n}\r\n.skill-box:hover .gitlogo  path\r\n{\r\n  fill:#F05134;\r\n}\r\n.skill-box:hover .atomlogo  path\r\n{\r\n  fill:#3AB57E;\r\n}\r\n.skill-box path\r\n{\r\n  -webkit-transition: fill .3s;\r\n  transition: fill .3s;\r\n}\r\n.skill-box svg\r\n{\r\n  width: 60px;\r\n  margin: auto;\r\n}\r\n.skill-box\r\n{\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding:10px;\r\n  border-radius: 2px;\r\n  width:200px;\r\n  height: 190px;\r\n  background: #454545;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  margin-bottom: 40px;\r\n}\r\n@media (max-width:686px)\r\n{\r\n  .skill-box\r\n  {\r\n    width: 110px;\r\n    height: 80px;\r\n    padding:3px;\r\n    margin-bottom: 20px;\r\n  }\r\n  .skill-title\r\n  {\r\n    font-size: 12px;\r\n    text-align: center;\r\n  }\r\n  .skill-box svg\r\n  {\r\n    width: 40px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"skills-container\">\n  <h3 class=\"big-top-title\">SKILLS</h3>\n  <div class=\"boxes-container\">\n    <div class=\"skill-box\">\n      <div class=\"skill-screen htmllogo\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path fill=\"#454545\" d=\"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z\"/></svg>\n      </div>\n      <div class=\"skill-title\">\n        HTML5\n      </div>\n    </div>\n    <div class=\"skill-box\">\n      <div class=\"skill-screen csslogo\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path fill=\"#454545\" d=\"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z\"/></svg>\n      </div>\n      <div class=\"skill-title\">\n        CSS3\n      </div>\n    </div>\n    <div class=\"skill-box\">\n      <div class=\"skill-screen jslogo\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"#454545\" d=\"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z\"/></svg>\n      </div>\n      <div class=\"skill-title\">\n        Javascript\n      </div>\n    </div>\n    <div class=\"skill-box\">\n      <div class=\"skill-screen jquerylogo\">\n        <svg viewBox=\"0 0 512 512\"xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"Layer_6\"><g><path fill=\"#454545\" d=\"M34.317,126.054c-44.877,64.496-39.286,148.409-5.01,216.945c0.816,1.644,1.67,3.259,2.513,4.88    c0.537,1.02,1.044,2.072,1.603,3.08c0.314,0.607,0.669,1.199,0.998,1.779c0.586,1.095,1.182,2.131,1.79,3.199    c1.065,1.876,2.158,3.741,3.272,5.606c0.618,1.025,1.228,2.05,1.865,3.074c1.236,1.996,2.502,3.976,3.799,5.943    c0.54,0.841,1.065,1.682,1.619,2.494c1.787,2.668,3.614,5.331,5.498,7.944c0.049,0.065,0.103,0.136,0.158,0.201    c0.298,0.423,0.629,0.835,0.93,1.253c1.629,2.25,3.313,4.468,5.01,6.669c0.626,0.798,1.261,1.6,1.89,2.402    c1.516,1.909,3.061,3.802,4.631,5.693c0.588,0.705,1.177,1.415,1.771,2.109c2.106,2.479,4.256,4.951,6.456,7.375    c0.038,0.044,0.089,0.093,0.13,0.136c0.089,0.103,0.168,0.168,0.247,0.266c2.145,2.343,4.338,4.637,6.562,6.925    c0.688,0.704,1.394,1.415,2.101,2.12c1.722,1.729,3.471,3.427,5.238,5.135c0.718,0.678,1.429,1.377,2.142,2.033    c2.361,2.224,4.745,4.403,7.177,6.529c0.043,0.043,0.073,0.076,0.114,0.092c0.412,0.369,0.84,0.722,1.247,1.063    c2.145,1.859,4.325,3.703,6.521,5.515c0.895,0.721,1.8,1.437,2.701,2.152c1.795,1.438,3.608,2.853,5.436,4.246    c0.965,0.737,1.933,1.475,2.906,2.213c2.015,1.475,4.045,2.943,6.098,4.37c0.749,0.542,1.472,1.062,2.224,1.578    c0.206,0.146,0.396,0.298,0.607,0.438c1.947,1.334,3.934,2.631,5.921,3.916c0.854,0.568,1.703,1.154,2.565,1.707    c3.05,1.926,6.144,3.834,9.272,5.684c0.852,0.482,1.708,0.96,2.562,1.442c2.299,1.328,4.612,2.63,6.96,3.904    c1.266,0.683,2.57,1.328,3.847,1.979c1.659,0.873,3.302,1.751,4.983,2.586c0.382,0.195,0.778,0.38,1.155,0.559    c0.672,0.325,1.355,0.646,2.036,0.987c2.608,1.247,5.238,2.467,7.89,3.654c0.567,0.249,1.112,0.499,1.673,0.743    c3.04,1.328,6.106,2.613,9.208,3.834c0.743,0.298,1.494,0.585,2.243,0.884c2.866,1.101,5.77,2.19,8.684,3.216    c0.371,0.13,0.727,0.249,1.092,0.373c3.202,1.123,6.434,2.158,9.69,3.173c0.775,0.228,1.556,0.478,2.337,0.705    c3.313,0.997,6.583,2.185,10.005,2.819c217.021,39.574,280.061-130.418,280.061-130.418    c-52.942,68.976-146.924,87.174-235.967,66.914c-3.376-0.759-6.646-1.811-9.938-2.787c-0.837-0.249-1.656-0.498-2.48-0.753    c-3.213-0.987-6.399-2.022-9.568-3.112c-0.434-0.152-0.873-0.314-1.315-0.473c-2.838-0.997-5.642-2.049-8.438-3.129    c-0.789-0.314-1.578-0.612-2.364-0.927c-3.063-1.209-6.108-2.473-9.11-3.79c-0.621-0.261-1.212-0.537-1.819-0.809    c-2.583-1.166-5.138-2.342-7.689-3.568c-0.732-0.357-1.47-0.704-2.218-1.067c-1.996-0.971-3.975-2.007-5.943-3.021    c-1.32-0.694-2.662-1.355-3.966-2.077c-2.408-1.29-4.772-2.63-7.123-3.996c-0.8-0.45-1.605-0.879-2.408-1.34    c-3.129-1.843-6.22-3.752-9.278-5.688c-0.843-0.536-1.67-1.111-2.502-1.664c-2.218-1.432-4.428-2.885-6.6-4.393    c-0.721-0.477-1.42-1.008-2.128-1.491c-2.102-1.48-4.178-2.987-6.242-4.511c-0.933-0.689-1.857-1.405-2.765-2.094    c-1.89-1.447-3.771-2.9-5.631-4.403c-0.838-0.667-1.681-1.339-2.511-2.012c-2.367-1.946-4.704-3.898-7.014-5.905    c-0.241-0.217-0.504-0.423-0.767-0.645c-2.495-2.196-4.951-4.447-7.372-6.708c-0.705-0.672-1.388-1.323-2.077-2.001    c-1.797-1.702-3.562-3.427-5.297-5.189c-0.694-0.694-1.394-1.383-2.077-2.071c-2.209-2.267-4.376-4.555-6.501-6.881    c-0.106-0.114-0.217-0.217-0.32-0.342c-2.248-2.457-4.444-4.967-6.594-7.505c-0.583-0.694-1.149-1.366-1.727-2.05    c-1.602-1.931-3.191-3.889-4.742-5.867c-0.586-0.705-1.168-1.438-1.744-2.164c-1.865-2.424-3.692-4.836-5.482-7.299    C47.589,251.017,29.828,158.009,69.339,81.627\"/><path fill=\"#454545\" d=\"M173.617,71.714c-32.454,46.705-30.691,109.215-5.376,158.61c4.246,8.28,9.018,16.311,14.356,23.962    c4.861,6.968,10.249,15.259,16.701,20.854c2.343,2.576,4.786,5.092,7.283,7.56c0.632,0.651,1.277,1.264,1.922,1.903    c2.421,2.343,4.888,4.658,7.437,6.903c0.105,0.087,0.198,0.189,0.304,0.26c0.027,0.032,0.054,0.044,0.07,0.076    c2.82,2.468,5.731,4.848,8.689,7.185c0.656,0.499,1.307,1.025,1.971,1.54c2.963,2.272,5.987,4.512,9.088,6.638    c0.092,0.064,0.171,0.13,0.263,0.206c1.367,0.938,2.763,1.821,4.146,2.728c0.667,0.434,1.299,0.895,1.969,1.301    c2.212,1.416,4.455,2.799,6.735,4.127c0.322,0.201,0.64,0.363,0.952,0.548c1.965,1.133,3.958,2.25,5.957,3.329    c0.697,0.396,1.407,0.737,2.118,1.106c1.38,0.722,2.76,1.453,4.167,2.158c0.203,0.098,0.423,0.195,0.626,0.282    c2.86,1.409,5.748,2.766,8.692,4.045c0.627,0.276,1.277,0.525,1.92,0.791c2.351,0.998,4.731,1.975,7.117,2.891    c1.014,0.385,2.039,0.748,3.053,1.123c2.166,0.803,4.347,1.539,6.54,2.277c0.992,0.314,1.965,0.64,2.958,0.943    c3.12,0.965,6.203,2.19,9.456,2.732c167.56,27.764,206.247-101.25,206.247-101.25c-34.875,50.212-102.405,74.186-174.468,55.478    c-3.199-0.84-6.353-1.757-9.486-2.744c-0.96-0.292-1.903-0.607-2.853-0.922c-2.229-0.721-4.444-1.49-6.64-2.287    c-1.006-0.364-2.01-0.732-2.996-1.112c-2.408-0.927-4.786-1.882-7.145-2.885c-0.643-0.276-1.296-0.521-1.925-0.813    c-2.958-1.285-5.87-2.646-8.744-4.056c-1.478-0.728-2.928-1.491-4.381-2.234c-0.841-0.439-1.687-0.873-2.53-1.307    c-1.868-1.015-3.72-2.061-5.55-3.129c-0.431-0.249-0.884-0.482-1.323-0.749c-2.271-1.328-4.506-2.694-6.719-4.099    c-0.683-0.439-1.339-0.911-2.022-1.356c-1.461-0.948-2.92-1.908-4.352-2.879c-3.088-2.125-6.095-4.359-9.056-6.626    c-0.683-0.537-1.369-1.063-2.039-1.6c-31.546-24.906-56.543-58.943-68.43-97.53c-12.458-40.029-9.776-84.95,11.808-121.411\"/><path fill=\"#454545\" d=\"M290.774,31.116c-19.131,28.154-21.01,63.119-7.735,94.217c13.998,33.007,42.684,58.9,76.168,71.171    c1.38,0.515,2.757,0.976,4.159,1.448c0.609,0.19,1.214,0.396,1.832,0.575c1.972,0.623,3.932,1.345,5.971,1.729    c92.52,17.878,117.615-47.48,124.296-57.1c-21.986,31.651-58.925,39.249-104.254,28.252c-3.582-0.879-7.519-2.169-10.968-3.395    c-4.425-1.573-8.784-3.373-13.024-5.406c-8.047-3.867-15.718-8.562-22.835-13.931c-40.558-30.778-65.759-89.488-39.291-137.305\"/></g></g></svg>\n      </div>\n      <div class=\"skill-title\">\n        Jquery\n      </div>\n    </div>\n    <div class=\"skill-box\">\n      <div class=\"skill-screen angularlogo\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 415.6 512\"><path fill=\"#454545\" d=\"M169.7 268.1h76.2l-38.1-91.6-38.1 91.6zM207.8 32L0 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7L207.8 32zM338 373.8h-48.6l-26.2-65.4H152.6l-26.2 65.4H77.7L207.8 81.5 338 373.8z\"/></svg>\n      </div>\n      <div class=\"skill-title\">\n        Angular JS\n      </div>\n    </div>\n    <div class=\"skill-box\">\n      <div class=\"skill-screen vuelogo\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"#454545\" d=\"M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z\"/></svg>\n      </div>\n      <div class=\"skill-title\">\n        Vue JS\n      </div>\n    </div>\n    <div class=\"skill-box\">\n      <div class=\"skill-screen phplogo\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\"><path fill=\"#454545\" d=\"M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z\"/></svg>\n      </div>\n      <div class=\"skill-title\">\n        PHP\n      </div>\n    </div>\n    <div class=\"skill-box\">\n      <div class=\"skill-screen laravellogo\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\"><path fill=\"#454545\"  d=\"M637.5 241.6c-4.2-4.8-62.8-78.1-73.1-90.5-10.3-12.4-15.4-10.2-21.7-9.3-6.4.9-80.5 13.4-89.1 14.8-8.6 1.5-14 4.9-8.7 12.3 4.7 6.6 53.4 75.7 64.2 90.9l-193.7 46.4L161.2 48.7c-6.1-9.1-7.4-12.3-21.4-11.6-14 .6-120.9 9.5-128.5 10.2-7.6.6-16 4-8.4 22s129 279.6 132.4 287.2c3.4 7.6 12.2 20 32.8 15 21.1-5.1 94.3-24.2 134.3-34.7 21.1 38.3 64.2 115.9 72.2 127 10.6 14.9 18 12.4 34.3 7.4 12.8-3.9 199.6-71.1 208-74.5 8.4-3.5 13.6-5.9 7.9-14.4-4.2-6.2-53.5-72.2-79.3-106.8 17.7-4.7 80.6-21.4 87.3-23.3 7.9-2 9-5.8 4.7-10.6zm-352.2 72c-2.3.5-110.8 26.5-116.6 27.8-5.8 1.3-5.8.7-6.5-1.3-.7-2-129-266.7-130.8-270-1.8-3.3-1.7-5.9 0-5.9s102.5-9 106-9.2c3.6-.2 3.2.6 4.5 2.8 0 0 142.2 245.4 144.6 249.7 2.6 4.3 1.1 5.6-1.2 6.1zm306 57.4c1.7 2.7 3.5 4.5-2 6.4-5.4 2-183.7 62.1-187.1 63.6-3.5 1.5-6.2 2-10.6-4.5s-62.4-106.8-62.4-106.8L518 280.6c4.7-1.5 6.2-2.5 9.2 2.2 2.9 4.8 62.4 85.5 64.1 88.2zm12.1-134.1c-4.2.9-73.6 18.1-73.6 18.1l-56.7-77.8c-1.6-2.3-2.9-4.5 1.1-5s68.4-12.2 71.3-12.8c2.9-.7 5.4-1.5 9 3.4 3.6 4.9 52.6 67 54.5 69.4 1.8 2.3-1.4 3.7-5.6 4.7z\"/>\n        </svg>\n      </div>\n      <div class=\"skill-title\">\n        LARAVEL\n      </div>\n    </div>\n    <div class=\"skill-box\">\n      <div class=\"skill-screen sqllogo\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"#454545\" d=\"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z\"/></svg>\n      </div>\n      <div class=\"skill-title\">\n        SQL\n      </div>\n    </div>\n    <div class=\"skill-box\">\n      <div class=\"skill-screen mysqllogo\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 512.003 512.003\">\n        \t<path fill=\"#454545\" d=\"M510.042,495.168c-8.771-12.365-22.979-22.625-38.021-33.49   c-16.198-11.677-32.833-23.688-41.167-37.646c31.615-6.604,71.615-18.573,73.542-19.146c3.438-1.031,6.135-3.729,7.156-7.167   c1.031-3.438,0.26-7.167-2.052-9.917c-2.063-2.448-50.49-59.271-128.656-87.146c-3.448-6.906-7.292-15.76-11.76-26   C337.604,202.429,272.25,52.533,99.823,32.366C86.083,23.085,50.073,0.002,32,0.002c-22.427,0-32,9.573-32,32   c0,10.917,8.885,23.677,23.375,43.604c7.083,9.74,18.938,26.042,19.292,31.063c0,17.458,20.25,73.979,40.615,98.156   c-0.583,1.24-1.167,2.458-1.74,3.667C72.521,227.502,64,245.46,64,288.002c0,56.021,26.833,85.333,53.333,85.333   c16.448,0,24.635-18.667,28.573-40.521c14.615,29.656,38.49,68.292,71.938,91.906c4.823,3.375,11.479,2.229,14.875-2.563   c3.396-4.823,2.25-11.469-2.563-14.875c-53.042-37.438-81.073-121.74-81.354-122.594c-1.625-4.979-6.729-8.063-11.813-7.219   c-5.177,0.823-8.99,5.292-8.99,10.531c0,29.292-5.583,60.5-10.667,64c-15.385,0-32-24.469-32-64   c0-37.74,6.833-52.135,15.479-70.365c1.615-3.406,3.281-6.906,4.938-10.635c1.906-4.302,0.781-9.344-2.781-12.417   C86.531,180.429,64,120.835,64,106.668c0-10.917-8.885-23.677-23.375-43.604c-7.083-9.74-18.938-26.042-19.292-31.063   c0-10.667,0-10.667,10.667-10.667c8.646,0,36.823,15.635,57.969,30.135c1.448,0.99,3.125,1.615,4.885,1.802   c162.115,17.583,222.333,155.708,254.677,229.917c5.448,12.5,10.156,23.302,14.406,31.198c1.281,2.385,3.417,4.188,5.969,5.052   c53.24,18.042,92.938,51.76,111.542,69.865c-18.167,5.094-47.177,12.844-67.198,16.177c-2.938,0.49-5.542,2.188-7.167,4.677   c-1.635,2.49-2.156,5.542-1.427,8.427c6.552,26.25,31.698,44.396,53.875,60.396c13.573,9.792,26.385,19.042,33.094,28.521   c2.083,2.938,5.375,4.5,8.719,4.5c2.135,0,4.281-0.635,6.156-1.958C512.302,506.637,513.448,499.981,510.042,495.168z\" data-original=\"#546E7A\" class=\"active-path\" data-old_color=\"#454545\" fill=\"#454545\"/>\n        \t<path fill=\"#454545\" d=\"M96,85.335c0,5.896,4.771,10.667,10.667,10.667c5.885,0,10.667,4.781,10.667,10.667   c0,5.896,4.771,10.667,10.667,10.667c5.896,0,10.667-4.771,10.667-10.667c0-17.646-14.354-32-32-32   C100.771,74.668,96,79.439,96,85.335z\" data-original=\"#454545\" class=\"active-path\" data-old_color=\"#454545\" fill=\"#454545\"/>\n        </svg>\n      </div>\n      <div class=\"skill-title\">\n        MySQL\n      </div>\n    </div>\n    <div class=\"skill-box\">\n      <div class=\"skill-screen gitlogo\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"#454545\" d=\"M140.1 348.5c12.1 0 29.5 2.1 29.5 17.9 0 15.5-13.9 18.8-27 18.8-12.3 0-30.9-2-30.9-18s15.7-18.7 28.4-18.7zm-24.7-116.6c0 14.8 6.6 24.1 22.3 24.1 15.5 0 21.2-10 21.2-24.5.1-34.4-43.5-34.8-43.5.4zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-241 93.7c-12.3 4.8-25.5 8.4-38.9 8.4-38.5-22.1-90.7.9-90.7 49.5 0 18 11.6 42.9 29.6 48.9v.7c-13.4 5.9-17.1 36.1.7 47v.7c-19.5 6.4-32.3 18.8-32.3 40.2 0 36.8 34.8 47 65.4 47 37.1 0 64.8-13.4 64.8-54.3 0-50.4-72.1-31.8-72.1-59.1 0-9.6 5.2-13.4 14.1-15.2 29.6-5.5 48.2-28.6 48.2-58.7 0-5.2-1.1-10.2-2.9-15 4.8-1.1 9.5-2.3 14.1-3.9v-36.2zm56.8 1.8h-39.6c1.3 10.6 1.1 142.6 0 155.5h39.6c-1.1-12.8-1.2-145.1 0-155.5zm4.5-53.3c0-13.4-10-26.2-24.1-26.2-14.3 0-24.6 12.5-24.6 26.2 0 13.6 10.5 25.9 24.6 25.9 13.7 0 24.1-12.5 24.1-25.9zm104.3 53.3h-36.4c0-9.8-.4-19.6 1.1-29.5h-40.5c1.3 7.3 1.1 13.6 1.1 29.5h-17.1v33.9c11.9-1.9 12.1-.7 17.1-.7v.7h-.4v62.7c0 31.1 4.5 61.2 42.7 61.2 10.7 0 23-1.8 32.5-7v-35c-5.7 3.9-13.9 5.9-20.9 5.9-13.2 0-15.5-12.9-15.5-23.4v-65.2c22.7 0 36.4.7 36.4.7v-33.8z\"/>\n        </svg>\n      </div>\n      <div class=\"skill-title\">\n        Git\n      </div>\n    </div>\n    <div class=\"skill-box\">\n      <div class=\"skill-screen atomlogo\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 512 512\">\n        \t\t<path d=\"M476.837,128.5c-24.425-42.306-74.048-61.191-119.078-48.67C346.187,33.996,304.953,0,256,0s-90.187,33.996-101.759,79.83    c-45.03-12.521-94.653,6.365-119.078,48.67c-24.435,42.324-15.96,94.767,17.432,127.5c-33.392,32.733-41.867,85.176-17.432,127.5    c24.217,41.945,73.606,61.298,119.074,48.657C165.805,477.997,207.042,512,256,512s90.194-34.002,101.762-79.842    c45.435,12.633,94.843-6.687,119.075-48.658c24.435-42.324,15.959-94.767-17.432-127.5    C492.797,223.267,501.272,170.824,476.837,128.5z M151,401.73c-33.373,11.764-71.535-1.499-89.856-33.23    c-18.32-31.731-10.725-71.413,16.15-94.433L151,316.622V401.73z M151,281.981L106,256l45-25.981V281.981z M151,195.379    l-73.706,42.554c-26.875-23.02-34.47-62.702-16.15-94.433c18.19-31.505,56.214-45.101,89.856-33.242V195.379z M256,30    c36.698,0,67.303,26.854,73.736,62.185L256,134.756l-73.736-42.571C188.697,56.854,219.302,30,256,30z M181,126.096l45,25.981    l-45,25.981V126.096z M181,385.904v-51.962l45,25.981L181,385.904z M256,482c-36.698,0-67.303-26.854-73.736-62.185L256,377.244    l73.736,42.571C323.303,455.146,292.698,482,256,482z M331,385.904l-45-25.981l45-25.981V385.904z M331,299.302l-75,43.301    l-75-43.301v-86.604l75-43.301l75,43.301V299.302z M331,178.058l-45-25.981l45-25.981V178.058z M361,110.27    c33.372-11.764,71.535,1.498,89.856,33.23c18.32,31.731,10.725,71.413-16.15,94.433L361,195.378V110.27z M361,230.019L406,256    l-45,25.981V230.019z M450.856,368.5c-18.32,31.731-56.482,44.994-89.856,33.23v-85.108l73.706-42.554    C461.581,297.087,469.176,336.769,450.856,368.5z\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#454545\" fill=\"#454545\"/>\n        \t\t<path d=\"M256,211c-24.813,0-45,20.187-45,45s20.187,45,45,45s45-20.187,45-45S280.813,211,256,211z M256,271    c-8.271,0-15-6.729-15-15s6.729-15,15-15c8.271,0,15,6.729,15,15S264.271,271,256,271z\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#454545\" fill=\"#454545\"/>\n        </svg>\n      </div>\n      <div class=\"skill-title\">\n        Atom\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("./src/app/skills/skills.component.html"),
            styles: [__webpack_require__("./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map