webpackJsonp([1],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab2__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab2PageModule = (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab2__["a" /* Tab2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab2__["a" /* Tab2Page */]),
            ],
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());

//# sourceMappingURL=tab2.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_share_share__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab2Page = (function () {
    function Tab2Page(navCtrl, navParams, httpClient, shareService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.shareService = shareService;
    }
    Tab2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab2Page');
    };
    Tab2Page.prototype.addBal = function () {
        console.log(this.nomb);
        console.log(this.numrue);
        console.log(this.nomrue);
        console.log(this.cp);
        console.log(this.ville);
        console.log(this.pays);
        console.log(this.uuid);
        this.uri = "";
        this.uri += this.shareService.getIP();
        this.uri += '/particulier/';
        this.uri += this.shareService.getID();
        this.uri += '/';
        this.uri += this.nomb;
        this.uri += '/';
        this.uri += this.numrue;
        this.uri += '/';
        this.uri += this.nomrue;
        this.uri += '/';
        this.uri += this.cp;
        this.uri += '/';
        this.uri += this.ville;
        this.uri += '/';
        this.uri += this.pays;
        this.uri += '/';
        this.uri += this.uuid;
        this.httpClient.post(this.uri, null).subscribe(function (data) { });
    };
    Tab2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab2',template:/*ion-inline-start:"C:\Users\Jonathan\Desktop\Smartil\src\pages\tab2\tab2.html"*/'<ion-header>\n\n  <ion-navbar>\n  	<ion-buttons start>\n  		<button ion-button menuToggle>\n  		<ion-icon name="menu"></ion-icon>\n  	</button>\n  	</ion-buttons>\n    <ion-title>Ajouter une boite</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n		<ion-item>\n			<ion-label color="primary" floating>Nom pour votre boite</ion-label>\n			<ion-input [(ngModel)]="nomb"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" floating>Numero rue</ion-label>\n			<ion-input [(ngModel)]="numrue"></ion-input>\n		</ion-item>\n		<ion-item>\n		  	<ion-label color="primary" floating>Rue</ion-label>\n			<ion-input [(ngModel)]="nomrue"></ion-input>\n	  	</ion-item>\n	  	<ion-item>\n		  	<ion-label color="primary" floating>Code Postal</ion-label>\n			<ion-input [(ngModel)]="cp"></ion-input>\n		</ion-item>\n		<ion-item>\n		  	<ion-label color="primary" floating>Ville</ion-label>\n			<ion-input [(ngModel)]="ville"></ion-input>\n	  	</ion-item>\n	  	<ion-item>\n		  	<ion-label color="primary" floating>Pays</ion-label>\n			<ion-input [(ngModel)]="pays"></ion-input>\n		</ion-item>\n		<ion-item>\n		  	<ion-label color="primary" floating>UUID</ion-label>\n			<ion-input [(ngModel)]="uuid"></ion-input>\n		</ion-item>\n	  	<button ion-button full >Scanner le QRCode</button>\n	  	<button ion-button full (click)="addBal()">Ajouter la boite</button>\n</ion-content>'/*ion-inline-end:"C:\Users\Jonathan\Desktop\Smartil\src\pages\tab2\tab2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_share_share__["a" /* ShareService */]])
    ], Tab2Page);
    return Tab2Page;
}());

//# sourceMappingURL=tab2.js.map

/***/ })

});
//# sourceMappingURL=1.js.map