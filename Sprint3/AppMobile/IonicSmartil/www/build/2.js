webpackJsonp([2],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab1__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab1PageModule = (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab1__["a" /* Tab1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab1__["a" /* Tab1Page */]),
            ],
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());

//# sourceMappingURL=tab1.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_share_share__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(198);
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
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab1Page = (function () {
    function Tab1Page(navCtrl, navParams, shareService, httpClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shareService = shareService;
        this.httpClient = httpClient;
        this.myID = this.shareService.getID();
        this.balList = JSON.parse(this.shareService.getbal());
        this.bal = {};
        console.log(this.myID);
        console.log(this.balList);
    }
    Tab1Page.prototype.parseCalendar = function (str) {
        var res = "";
        res = res + str.slice(8, 10);
        if (str.slice(5, 7) == "01") {
            res = res + " Janvier ";
        }
        else if (str.slice(5, 7) == "02") {
            res = res + " Février ";
        }
        else if (str.slice(5, 7) == "03") {
            res = res + " Mars ";
        }
        else if (str.slice(5, 7) == "04") {
            res = res + " Avril ";
        }
        else if (str.slice(5, 7) == "05") {
            res = res + " Mai ";
        }
        else if (str.slice(5, 7) == "06") {
            res = res + " Juin ";
        }
        else if (str.slice(5, 7) == "07") {
            res = res + " Juillet ";
        }
        else if (str.slice(5, 7) == "08") {
            res = res + " Août ";
        }
        else if (str.slice(5, 7) == "09") {
            res = res + " Septembre ";
        }
        else if (str.slice(5, 7) == "10") {
            res = res + " Octobre ";
        }
        else if (str.slice(5, 7) == "11") {
            res = res + " Novembre ";
        }
        else if (str.slice(5, 7) == "12") {
            res = res + " Décembre ";
        }
        res = res + str.slice(0, 4);
        res = res + " à ";
        res = res + str.slice(11, 16);
        return res;
    };
    Tab1Page.prototype.test = function (numBoite) {
        var boitetag = -1;
        var myString = "";
        for (var i = 0; i < this.balList.length; i++) {
            if (this.balList[i].uuid == numBoite) {
                boitetag = i;
            }
        }
        myString += "Courriers reçus :\n";
        for (var i = 0; i < this.balList[boitetag].listCourrier.length; i++) {
            myString += this.parseCalendar(this.balList[boitetag].listCourrier[i].dateHeure);
            myString += "\n";
        }
        alert(myString);
    };
    Tab1Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.httpClient.get(this.shareService.getIP() + '/particulier/' + this.shareService.getID() + '/boites').subscribe(function (data) { _this.shareService.setbal(JSON.stringify(data)); });
        this.balList = JSON.parse(this.shareService.getbal());
    };
    Tab1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab1',template:/*ion-inline-start:"C:\Users\Jonathan\Desktop\Smartil\src\pages\tab1\tab1.html"*/'<ion-header>\n\n  <ion-navbar>\n  	<ion-buttons start>\n  		<button ion-button menuToggle>\n  		<ion-icon name="menu"></ion-icon>\n  	</button>\n  	</ion-buttons>\n    <ion-title>Mes Boites</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n    <ion-item *ngFor="let i of balList">\n    	<button ion-button full color="light" (click)="test(i.uuid)">{{i.nom}}</button>\n    </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jonathan\Desktop\Smartil\src\pages\tab1\tab1.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_share_share__["a" /* ShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_share_share__["a" /* ShareService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object])
    ], Tab1Page);
    return Tab1Page;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=tab1.js.map

/***/ })

});
//# sourceMappingURL=2.js.map