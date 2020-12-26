(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-main-main-module"],{

/***/ "./src/app/core/guards/active-order.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/core/guards/active-order.guard.ts ***!
  \***************************************************/
/*! exports provided: ActiveOrderGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveOrderGuard", function() { return ActiveOrderGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/order.service */ "./src/app/core/services/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class ActiveOrderGuard {
    constructor(orderService, router) {
        this.orderService = orderService;
        this.router = router;
    }
    canActivate(next) {
        return this.orderService.isActiveOrder(next.params.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            this.router.navigate(['/']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }));
    }
}
ActiveOrderGuard.ɵfac = function ActiveOrderGuard_Factory(t) { return new (t || ActiveOrderGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ActiveOrderGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ActiveOrderGuard, factory: ActiveOrderGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActiveOrderGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _core_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/webmoney.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/webmoney.service.ts ***!
  \***************************************************/
/*! exports provided: WebmoneyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebmoneyService", function() { return WebmoneyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class WebmoneyService {
    constructor(http) {
        this.http = http;
    }
    check(order) {
        return this.http
            .post('/api/v1/serviceValidators/webmoney', order)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('result'));
    }
}
WebmoneyService.ɵfac = function WebmoneyService_Factory(t) { return new (t || WebmoneyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
WebmoneyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebmoneyService, factory: WebmoneyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebmoneyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/main/components/footer/footer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/main/components/footer/footer.component.ts ***!
  \********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 0, consts: [[1, "paragraph"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0423 \u0432\u0430\u0441 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0441\u0442\u0440\u0430\u044F \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C WebMoney \u043D\u0430 \u042F\u043D\u0434\u0435\u043A\u0441.\u0414\u0435\u043D\u044C\u0433\u0438? \u0410 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C, \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 WebMoney \u0434\u0440\u0443\u0433\u043E\u043C\u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u044B? \u0418\u043B\u0438 \u0438\u0449\u0438\u0442\u0435 \u043E\u0431\u043C\u0435\u043D\u043D\u044B\u0439 \u043F\u0443\u043D\u043A\u0442 webmoney \u0434\u043B\u044F \u0432\u044B\u0432\u043E\u0434\u0430 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043D\u0430 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0443\u044E \u043A\u0430\u0440\u0442\u0443? \u041C\u044B \u0437\u043D\u0430\u0435\u043C, \u043A\u0430\u043A \u0432\u0430\u043C \u043F\u043E\u043C\u043E\u0447\u044C! \u041F\u0440\u043E\u0441\u0442\u043E \u043D\u0430\u0431\u0435\u0440\u0438\u0442\u0435 \u0432 \u043B\u044E\u0431\u043E\u0439 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u043E\u0434\u0438\u043D \u0438\u0437 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432: \u00AB\u043E\u0431\u043C\u0435\u043D \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0432\u0430\u043B\u044E\u0442\u00BB, \u00AB\u043E\u0431\u043C\u0435\u043D \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0434\u0435\u043D\u0435\u0433\u00BB, \u00AB\u043E\u0431\u043C\u0435\u043D\u043D\u0438\u043A \u043E\u043D\u043B\u0430\u0439\u043D\u00BB, \u00ABexchange WebMoney\u00BB, \u00ABwm \u043E\u0431\u043C\u0435\u043D\u043D\u0438\u043A\u00BB \u0438\u043B\u0438 \u00AB\u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C wm\u00BB. \u041F\u043E\u0438\u0441\u043A \u0442\u0443\u0442 \u0436\u0435 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u0432\u0430\u0441 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u0433\u0434\u0435 \u0441\u043E\u0431\u0440\u0430\u043D\u044B \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0441\u0430\u043C\u044B\u0435 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0435 \u043E\u0431\u043C\u0435\u043D\u043D\u0438\u043A\u0438 (\u043E\u0431\u043C\u0435\u043D\u043D\u0438\u043A\u0438 WebMoney, \u042F\u043D\u0434\u0435\u043A\u0441 \u0414\u0435\u043D\u044C\u0433\u0438, RBKMoney \u0438 \u0434\u0440.), \u0441\u0440\u0435\u0434\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043D\u0430 \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u043F\u0435\u0440\u0432\u044B\u0445 \u043F\u043E\u0437\u0438\u0446\u0438\u0439 \u0431\u0443\u0434\u0435\u0442 Netexchange.ru, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0439 \u0412\u0430\u043C \u043E\u0431\u043C\u0435\u043D \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u0432\u0430\u043B\u044E\u0442. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0421 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435\u043C \u0441\u0438\u0441\u0442\u0435\u043C \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0438 \u043F\u043E\u044F\u0432\u0438\u043B\u0430\u0441\u044C \u043E\u0441\u0442\u0440\u0430\u044F \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u0432 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u043F\u043E\u0441\u043E\u0431\u0430\u0445 \u0440\u0430\u0441\u0447\u0435\u0442\u043E\u0432 \u0432 \u0441\u0435\u0442\u0438. \u0422\u0430\u043A \u0432 \u0441\u0435\u0442\u0438 \u043E\u0434\u043D\u0430 \u0437\u0430 \u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u0442\u0430\u043B\u0438 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C\u0441\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B. \u0410 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u0438\u0445 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u043B\u0438\u0441\u044C \u043E\u0431\u043C\u0435\u043D\u043D\u0438\u043A\u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u0432\u0430\u043B\u044E\u0442, \u0433\u0434\u0435 \u043C\u043E\u0436\u043D\u043E \u0431\u0435\u0437 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0435 \u0434\u0435\u043D\u044C\u0433\u0438 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C, \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0432\u043E\u0434 wm, \u043E\u0431\u043C\u0435\u043D webmoney, \u0432\u044B\u0432\u0435\u0441\u0442\u0438 \u042F\u043D\u0434\u0435\u043A\u0441.\u0414\u0435\u043D\u044C\u0433\u0438 \u0438\u043B\u0438 \u043A\u0443\u043F\u0438\u0442\u044C webmoney \u0441 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0437\u0430\u0442\u0440\u0430\u0442\u0430\u043C\u0438 \u043F\u043E \u0432\u044B\u0433\u043E\u0434\u043D\u044B\u043C \u043A\u0443\u0440\u0441\u0430\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u041E\u0431\u043C\u0435\u043D \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u0434\u0435\u043D\u0435\u0433 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043F\u0440\u043E\u0441\u0442\u0430\u044F, \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u0435\u0441\u043B\u0438 \u0435\u0435 \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0431\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0438\u0441. \u041E\u0431\u043C\u0435\u043D \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u0434\u0435\u043D\u0435\u0433 \u0432 Netexchange \u044D\u0442\u043E \u0435\u0449\u0435 \u0438 \u0432\u044B\u0433\u043E\u0434\u043D\u043E, \u0442.\u043A. \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043F\u043E \u043E\u0434\u043D\u0438\u043C \u0438\u0437 \u0441\u0430\u043C\u044B\u0445 \u043D\u0438\u0437\u043A\u0438\u0445 \u043A\u0443\u0440\u0441\u043E\u0432! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/main/components/header/header.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/main/components/header/header.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





class HeaderComponent {
    constructor() { }
    ngOnInit() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 14, vars: 0, consts: [[1, "header"], [1, "header__siteName"], [1, "header__text"], [1, "header__span-text"], [1, "header__language"], ["mat-raised-button", "", 1, "header__button"], [1, "header__icon"], [1, "header__button-text"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "exwm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0431\u043C\u0435\u043D \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u0432\u0430\u043B\u044E\u0442 24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0412\u0445\u043E\u0434 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.header__siteName[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.header__span-text[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 1.5rem;\n}\n.header__icon[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FBQ0g7QUFDRztFQUNHLHlCQUFBO0VBQ0EsZUFBQTtBQUNOO0FBRUc7RUFDRyxjQUFBO0VBQ0EscUJBQUE7QUFBTjtBQUdHO0VBQ0csa0JBQUE7QUFETiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICZfX3NpdGVOYW1lIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICB9XHJcblxyXG4gICAmX19zcGFuLXRleHQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICB9XHJcblxyXG4gICAmX19pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICB9XHJcbn1cclxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/main/components/main/main.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/main/components/main/main.component.ts ***!
  \****************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/modules/main/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nav/nav.component */ "./src/app/modules/main/components/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/modules/main/components/footer/footer.component.ts");






class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 7, vars: 0, consts: [[1, "header"], [1, "main"], [1, "footer"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100vh;\n}\n\n.main[_ngcontent-%COMP%], .header[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%] {\n  padding: 4rem 23rem;\n}\n\n.main[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 4rem 23rem 0 23rem;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQURIOztBQUlBOzs7RUFHRyxtQkFBQTtBQURIOztBQUlBO0VBQ0csWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7QUFESDs7QUFJQTtFQUNHLGdCQ3hCVztFRHlCWCxXQ3hCVztBRHVCZCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbjpob3N0IHtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubWFpbixcclxuLmhlYWRlcixcclxuLmZvb3RlciB7XHJcbiAgIHBhZGRpbmc6IDRyZW0gMjNyZW07XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICAgZmxleC1ncm93OiAxO1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgIHBhZGRpbmc6IDRyZW0gMjNyZW0gMCAyM3JlbTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcclxuICAgY29sb3I6ICRjb2xvci1ibGFjaztcclxufVxyXG4iLCIkY29sb3Itd2hpdGU6ICNmZmY7XHJcbiRjb2xvci1ibGFjazogIzAwMDtcclxuJGNvbG9yLWFjY2VudDogIzY5ZjBhZTtcclxuJGNvbG9yLXByaW1hcnk6ICM3MjI2OTI7XHJcbiRjb2xvci13YXJuOiAjZjQ0MzM2O1xyXG4kY29sb3ItZ3JlZW46IGdyZWVuO1xyXG4kY29sb3ItdGVhbDogdGVhbDtcclxuJGNvbG9yLWdyZXk6IGdyZXk7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/main/components/moneyback-policy/moneyback-policy.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/main/components/moneyback-policy/moneyback-policy.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MoneybackPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneybackPolicyComponent", function() { return MoneybackPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MoneybackPolicyComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r2);
} }
function MoneybackPolicyComponent_li_5_ol_2_li_1_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r8, " ");
} }
function MoneybackPolicyComponent_li_5_ol_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MoneybackPolicyComponent_li_5_ol_2_li_1_p_3_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sublist_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sublist_r6.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sublist_r6.paragraphs);
} }
function MoneybackPolicyComponent_li_5_ol_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MoneybackPolicyComponent_li_5_ol_2_li_1_Template, 4, 2, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const li_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", li_r3.sublist);
} }
function MoneybackPolicyComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MoneybackPolicyComponent_li_5_ol_2_Template, 2, 1, "ol", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const li_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", li_r3.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", li_r3.sublist);
} }
class MoneybackPolicyComponent {
    constructor() {
        this.paragraphs = [
            'Активы - любые электронные валюты, фиатные безналичные и наличные национальные валюты, криптовалюты и токены;',
            'Обменный сервис (Сервис) - программное обеспечение, размещенное в сети Интернет для обмена Активов;',
            'Обмен - перевод Активов между счетами Сервиса и Пользователя;',
            'Пользователь - любое лицо которое воспользовалось услугами Сервиса, отправило Активы на счета Сервиса намеренно для выполнения Обмена или ошибочно;',
            'Заявка - желание клиента произвести обмен Активов, оформленное в электронном виде через пользовательские интерфейсы на сайтах Сервиса;',
            'Таймаут - время, отведенное Пользователю для перечисления Активов на счета Сервиса для выполнения Обмена;',
            'Неучтенные средства - Активы, зачисленные на счета Сервиса без оформления Заявки на сайтах Сервиса или Активы, зачисленные на счета Сервиса сверх сумм, указанных в Заявке;',
            'Возврат - действия Сервиса по переводу Активов или Неучтенных средств со счетов Сервиса на счета Пользователей;',
            'Refund - действия Сервиса по отмене состоявшегося Обмена с целью Возврата.',
        ];
        this.list = [
            {
                text: 'Разработанная политика описывает действия и бездействия Сервиса по Возврату Активов Пользователям, а также комиссии, которые предусмотрены Сервисом за обработку Возвратов. Данная политика является неотъемлемой частью Правил оказания услуг Сервиса;',
            },
            {
                text: 'Возврат может быть выполнен только на сумму не превышающую сумму Актива, отправленную Пользователем на счета Сервиса для Обмена;',
            },
            {
                text: 'Возврат может быть выполнен только на счет Пользователя, указанного в Заявке или с которого Сервис принял Активы, за исключением случаев в п.#7.4 политики;',
            },
            {
                text: 'Комиссия Сервиса за выполнения Возврата удерживается из суммы возвращаемого пользователю Актива;',
            },
            {
                text: 'Обязанности Сервиса:',
                sublist: [
                    {
                        text: 'Сервис обязуется вернуть Активы, которые были отправлены Пользователем на счета Сервиса только в том случае если Обмен не состоялся. Пользователь не получил Активы от Сервиса на свои счета;',
                    },
                    {
                        text: 'Сервис обязуется вернуть Неучтенные средства Пользователю;',
                    },
                ],
            },
            {
                text: 'Сервис вправе:',
                sublist: [
                    {
                        text: 'Не возвращать Активы или Неучтенные средства до обращения Пользователя за Возвратом. Любые действия Сервиса по Возврату Активов в соответствие с текущей политикой начинаются после обращения Пользователя в поддержку. Это означает, что без обращения Пользователя Сервис бездействует в отношение Возврата;',
                    },
                    {
                        text: 'Не возмещать Пользователю комиссии платежных систем при Возврате;',
                    },
                    {
                        text: 'Отказать Пользователю в процедуре Refund за исключением случаев предусмотренных в п.п.#7.3 политики;',
                    },
                    {
                        text: 'Взимать комиссию за Возврат Неучтенных средств, указанную в п.#8',
                    },
                    {
                        text: 'Взимать комиссию за Возврат, указанную в п.#8 в случае невозможности выполнить Обмен по причинам не зависящим от Сервиса, в частности, когда Сервис не в состоянии завершить Обмен на заблокированный или лимитированный счет Пользователя;',
                    },
                    {
                        text: 'Взимать комиссию за Возврат, указанную в п.#8 для Заявок отмененных по Таймауту. Пользователь отправил Активы на счета Сервиса после отмены Заявки и требует Возврата;',
                    },
                    {
                        text: 'В соответствие с п.п.#7.2 настоящей политики не выплачивать Пользователю дополнительных комиссий;',
                    },
                ],
            },
            {
                text: 'Особые условия:',
                sublist: [
                    {
                        text: 'Сервис хранит Активы Пользователя подлежащие Возврату на безвозмездной основе;',
                    },
                    {
                        text: 'Сервис не распоряжается Активами Пользователя подлежащими Возврату в коммерческих интересах, никаким образом не извлекает инвестиционную или любую другую прибыль с таких Активов;',
                    },
                    {
                        text: 'Сервис может пойти на уступки и выполнить Refund в случае ошибки Пользователя, а именно, когда Пользователь выполнил Обмен на недоступный ему счет, например на чужой счет;',
                        paragraphs: [
                            'Для выполнения Refund Пользователь самостоятельно должен позаботиться о возврате ошибочно перечисленного Актива на счет Сервиса, договорится с владельцем счета или платежной системой о возврате.',
                            'Сервис начинает обрабатывать Возврат пользователя на условиях, описанных в текущей политике и только после получения полной суммы ошибочно перечисленного Актива.',
                            'За Возврат Активов Сервис удерживает комиссию, указанную в п.#8 политики;',
                        ],
                    },
                    {
                        text: 'Сервис может пойти на уступки и выполнить Возврат на счет Пользователя отличный от указанного в Заявке, если требуется вернуть криптовалютный Актив или токены.',
                    },
                ],
            },
            {
                text: 'Комиссии:',
                sublist: [
                    {
                        text: 'За Возвраты предусмотренные политикой Сервис удерживает комиссию в соответствии с тарифом:',
                    },
                ],
            },
        ];
    }
    ngOnInit() { }
}
MoneybackPolicyComponent.ɵfac = function MoneybackPolicyComponent_Factory(t) { return new (t || MoneybackPolicyComponent)(); };
MoneybackPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoneybackPolicyComponent, selectors: [["app-moneyback-policy"]], decls: 13, vars: 2, consts: [[1, "moneyback-policy"], [1, "title"], ["class", "paragraph", 4, "ngFor", "ngForOf"], [1, "ordered-list"], ["class", "list-item", 4, "ngFor", "ngForOf"], [2, "width", "50%"], [2, "text-align", "center"], [1, "paragraph"], [1, "list-item"], ["class", "ordered-list", 4, "ngIf"]], template: function MoneybackPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MoneybackPolicyComponent_p_3_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MoneybackPolicyComponent_li_5_Template, 3, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u041B\u044E\u0431\u044B\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0435 \u0432\u0430\u043B\u044E\u0442\u044B, \u0444\u0438\u0430\u0442\u043D\u044B\u0435 \u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0435 \u0438 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0435 \u043C\u0438\u0440\u043E\u0432\u044B\u0435 \u0432\u0430\u043B\u044E\u0442\u044B, \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u044B \u0438 \u0442\u043E\u043A\u0435\u043D\u044B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "1,5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paragraphs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n.ordered-list[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2NvbXBvbmVudHMvbW9uZXliYWNrLXBvbGljeS9tb25leWJhY2stcG9saWN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csZUFBQTtBQUNIOztBQUVBO0VBQ0csa0JBQUE7QUFDSDs7QUFDQTtFQUNHLHNCQUFBO0VBQ0EsWUFBQTtBQUVIIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2NvbXBvbmVudHMvbW9uZXliYWNrLXBvbGljeS9tb25leWJhY2stcG9saWN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgZm9udC1zaXplOiAzcmVtO1xyXG59XHJcblxyXG4ub3JkZXJlZC1saXN0IHtcclxuICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcbnRhYmxlIHtcclxuICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgcGFkZGluZzogOHB4O1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoneybackPolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-moneyback-policy',
                templateUrl: './moneyback-policy.component.html',
                styleUrls: ['./moneyback-policy.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/main/components/nav/nav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/main/components/nav/nav.component.ts ***!
  \**************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class NavComponent {
    constructor() { }
    ngOnInit() { }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 11, vars: 0, consts: [[1, "nav"], ["mat-button", "", "routerLink", "/"], ["mat-button", "", "routerLink", "/about"], ["mat-button", "", "routerLink", "/tariffs"], ["mat-button", "", "routerLink", "/terms-of-use"], ["mat-button", "", "routerLink", "/moneybackPolicy"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u0431\u043C\u0435\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041E \u0441\u0435\u0440\u0432\u0438\u0441\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0422\u0430\u0440\u0438\u0444\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".nav[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLGtCQUFBO0VBQ0EsZUFBQTtBQUNIIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYge1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIHBhZGRpbmc6IDJyZW0gMDtcclxufVxyXG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/main/components/section-about/section-about.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/main/components/section-about/section-about.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SectionAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionAboutComponent", function() { return SectionAboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SectionAboutComponent {
    constructor() { }
    ngOnInit() { }
}
SectionAboutComponent.ɵfac = function SectionAboutComponent_Factory(t) { return new (t || SectionAboutComponent)(); };
SectionAboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionAboutComponent, selectors: [["app-section-about"]], decls: 9, vars: 0, consts: [[1, "about"], [1, "about__title"], [1, "about__paragraph"]], template: function SectionAboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E \u0441\u0435\u0440\u0432\u0438\u0441\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0421 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435\u043C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0449\u0435\u0434\u0440\u044B\u0439 \u043F\u043E\u0434\u0430\u0440\u043E\u043A \u2013 \u043C\u043D\u043E\u0433\u043E\u043C\u0438\u043B\u043B\u0438\u043E\u043D\u043D\u0443\u044E \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0441 \u0440\u0430\u0434\u043E\u0441\u0442\u044C\u044E \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u043B\u0430 \u043E\u043D\u043B\u0430\u0439\u043D-\u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0432 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0439 \u043E\u0431\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u043C\u0430 \u043C\u043D\u043E\u0433\u043E\u0447\u0430\u0441\u043E\u0432\u044B\u043C \u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F\u043C \u043F\u043E \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430\u043C \u0438 \u0443\u0442\u043E\u043C\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043E\u0447\u0435\u0440\u0435\u0434\u044F\u043C. \u041D\u043E, \u043F\u043E\u043C\u0438\u043C\u043E \u043F\u043B\u044E\u0441\u043E\u0432, \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0438 \u0438\u043C\u0435\u043B\u0438 \u043E\u0434\u0438\u043D \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u043A \u2013 \u043E\u043F\u043B\u0430\u0442\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u0434\u0435\u043D\u044C\u0433\u0430\u043C\u0438 \u0438\u043B\u0438 \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u044B\u043C\u0438 \u043A\u0430\u0440\u0442\u0430\u043C\u0438 \u043E\u043A\u0430\u0437\u0430\u043B\u0430\u0441\u044C \u0432\u0435\u0441\u044C\u043C\u0430 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430\u0442\u0438\u0447\u043D\u043E\u0439 \u0434\u043B\u044F \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0430 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0412\u044B\u0445\u043E\u0434\u043E\u043C \u0438\u0437 \u0441\u043B\u043E\u0436\u0438\u0432\u0448\u0435\u0439\u0441\u044F \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438 \u0441\u0442\u0430\u043B\u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u043F\u0440\u043E\u0441\u0442\u0438\u043B\u0438 \u0432\u0437\u0430\u0438\u043C\u043E\u0440\u0430\u0441\u0447\u0435\u0442\u044B \u043C\u0435\u0436\u0434\u0443 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0430\u043C\u0438 \u0438 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044F\u043C\u0438. \u0422\u0435\u043F\u0435\u0440\u044C \u0434\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0441\u043F\u043B\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u0435\u0445\u0430\u0442\u044C \u0432 \u043E\u0444\u0438\u0441 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0438\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438 \u0441\u043E \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u0441\u0447\u0435\u0442\u0430. \u0414\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u0438\u0442\u0443\u043B\u044C\u043D\u044B\u0445 \u0437\u043D\u0430\u043A\u043E\u0432 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0438 \u0441 \u0438\u0445 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u044B \u0438\u043B\u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u043E\u043D\u043B\u0430\u0439\u043D. \u041D\u043E, \u043A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0440\u0430\u0437\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442 \u043A \u043E\u043F\u043B\u0430\u0442\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0435 \u0434\u0435\u043D\u044C\u0433\u0438 \u0440\u0430\u0437\u043D\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C. \u0410 \u043F\u043E\u0442\u043E\u043C\u0443 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0441\u0442\u0440\u0430\u044F \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u0432 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u043F\u043E\u043C\u043E\u0433\u0430\u043B\u0438 \u0431\u044B \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u0440\u0435\u0448\u0430\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441 \u0442\u0435\u043C \u0438\u043B\u0438 \u0438\u043D\u044B\u043C \u0432\u0438\u0434\u043E\u043C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u044F NetExchange \u2013 \u044D\u0442\u043E \u043E\u0431\u043C\u0435\u043D, \u0432\u0432\u043E\u0434 \u0438 \u0432\u044B\u0432\u043E\u0434 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u0432\u0430\u043B\u044E\u0442 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C \u0420\u043E\u0441\u0441\u0438\u0438 \u0438 \u0421\u041D\u0413. \u041C\u0438\u0441\u0441\u0438\u044F NetExchange \u2013 \u043E\u0431\u043B\u0435\u0433\u0447\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043B\u044E\u0431\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u043C\u0438 \u0434\u0435\u043D\u044C\u0433\u0430\u043C\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C WebMoney, Yandex.\u0414\u0435\u043D\u044C\u0433\u0438, QIWI \u0438 \u0434\u0440., \u043F\u043E\u043C\u043E\u0447\u044C \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u0432\u0437\u0430\u0438\u043C\u043E\u0440\u0430\u0441\u0447\u0435\u0442\u043E\u0432 \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F\u043C \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u043F\u043B\u0430\u0442\u044B \u0438\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u0443\u0441\u043B\u0443\u0433 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u0434\u0435\u043D\u0435\u0433. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about__title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2NvbXBvbmVudHMvc2VjdGlvbi1hYm91dC9zZWN0aW9uLWFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNHO0VBQ0csZUFBQTtBQUFOIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2NvbXBvbmVudHMvc2VjdGlvbi1hYm91dC9zZWN0aW9uLWFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0IHtcclxuICAgJl9fdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgIH1cclxufVxyXG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionAboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section-about',
                templateUrl: './section-about.component.html',
                styleUrls: ['./section-about.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/main/components/section-rules/section-rules.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/main/components/section-rules/section-rules.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SectionRulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionRulesComponent", function() { return SectionRulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SectionRulesComponent {
    constructor() { }
    ngOnInit() { }
}
SectionRulesComponent.ɵfac = function SectionRulesComponent_Factory(t) { return new (t || SectionRulesComponent)(); };
SectionRulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionRulesComponent, selectors: [["app-section-rules"]], decls: 193, vars: 0, consts: [[1, "title"], [1, "sub-title"], [1, "rules"], [1, "rules__item"], [1, "rules__title"], [1, "rules__info"], [1, "rules__sub-rules"], [1, "rules__sub-info"]], template: function SectionRulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0443\u0441\u043B\u0443\u0433 \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u043C EXWM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041E\u0431\u0449\u0438\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 (\u0434\u0430\u043B\u0435\u0435 \u043F\u043E \u0442\u0435\u043A\u0441\u0442\u0443 \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435) \u043E\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F, \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0443\u0441\u043B\u0443\u0433\u0438 \u043C\u0443\u043B\u044C\u0442\u0438\u0432\u0430\u043B\u044E\u0442\u043D\u043E\u0433\u043E \u043E\u0431\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange \u0438 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u043E \u0441\u0442\u0430\u0442\u044C\u0435\u0439 437 \u0413\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u041A\u043E\u0434\u0435\u043A\u0441\u0430 \u0420\u0424 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0439 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u043E\u0444\u0435\u0440\u0442\u043E\u0439, \u0430\u0434\u0440\u0435\u0441\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043B\u0438\u0446\u0430\u043C (\u0434\u0430\u043B\u0435\u0435 \u043F\u043E \u0442\u0435\u043A\u0441\u0442\u0443 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C), \u0437\u0430\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0443\u0441\u043B\u0443\u0433 \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u043C NetExchange \u043D\u0430 \u0438\u0437\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u043D\u0438\u0436\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u041F\u0435\u0440\u0435\u0434 \u0442\u0435\u043C \u043A\u0430\u043A \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0443\u0441\u043B\u0443\u0433\u0430\u043C\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange, \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043E\u0431\u044F\u0437\u0430\u043D \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0432 \u043F\u043E\u043B\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043C\u0435 \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u00AB\u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F \u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0443\u0441\u043B\u0443\u0433 \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u043C NetExchange\u00BB. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E, \u0435\u0441\u043B\u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0432\u0441\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0430 \u0434\u043B\u044F \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043D\u0430 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0441\u0430\u0439\u0442\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange (www.netexchange.ru). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0422\u0435\u0440\u043C\u0438\u043D\u044B \u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u0432 \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u2014 \u0442\u043E\u0440\u0433\u043E\u0432\u0430\u044F \u043C\u0430\u0440\u043A\u0430 \u0438 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0443\u0441\u043B\u0443\u0433 \u043F\u043E \u043E\u0431\u043C\u0435\u043D\u0443, \u043F\u0440\u043E\u0434\u0430\u0436\u0435 \u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u0432\u0430\u043B\u044E\u0442. \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0441\u0430\u0439\u0442 \u0421\u0435\u0440\u0432\u0438\u0441\u0430 \u2013 www.netexchange.ru. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u2014 \u043B\u044E\u0431\u043E\u0435 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u043B\u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043B\u0438\u0446\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0436\u0435\u043B\u0430\u0435\u0442 \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0443\u0441\u043B\u0443\u0433\u0430\u043C\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange \u0438 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0432\u0448\u0435\u0435 \u0430\u043A\u0446\u0435\u043F\u0442 \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0435\u0433\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438. \u041F\u043B\u0430\u0442\u0435\u0436\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u2014 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442, \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0439 \u0442\u0440\u0435\u0442\u044C\u0435\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u043E\u0439, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u0441\u043E\u0431\u043E\u0439 \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0443\u0447\u0435\u0442\u0430 \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u0445 \u0438/\u0438\u043B\u0438 \u0438\u043D\u044B\u0445 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432, \u043E\u043F\u043B\u0430\u0442\u0443 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u0443\u0441\u043B\u0443\u0433 \u0432 \u0441\u0435\u0442\u0438 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E \u0432\u0437\u0430\u0438\u043C\u043E\u0440\u0430\u0441\u0447\u0435\u0442\u043E\u0432 \u043C\u0435\u0436\u0434\u0443 \u0441\u0432\u043E\u0438\u043C\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u0432\u0430\u043B\u044E\u0442\u0430 \u2013 \u0434\u0435\u043D\u0435\u0436\u043D\u043E\u0435 \u0438/\u0438\u043B\u0438 \u0438\u043D\u043E\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043C\u0435\u0436\u0434\u0443 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C \u0434\u0430\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B \u0438 \u0435\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C, \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u043D\u043E\u0435 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u041F\u043B\u0430\u0442\u0435\u0436/\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F\u2014 \u043F\u0435\u0440\u0435\u0432\u043E\u0434 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0438/\u0438\u043B\u0438 \u0438\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B \u043E\u0442 \u043F\u043B\u0430\u0442\u0435\u043B\u044C\u0449\u0438\u043A\u0430 \u043A \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044E. \u041A\u043B\u0438\u0435\u043D\u0442 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u2013 \u043B\u0438\u0446\u043E, \u0437\u0430\u043A\u043B\u044E\u0447\u0438\u0432\u0448\u0435\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0441 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439 \u043D\u0430 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u0438\u0435 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u0430\u0432 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043A \u043D\u0435\u0439, \u0438\u0437\u043C\u0435\u0440\u044F\u0435\u043C\u044B\u0445 \u0432 \u0443\u0441\u043B\u043E\u0432\u043D\u044B\u0445 \u0435\u0434\u0438\u043D\u0438\u0446\u0430\u0445, \u043F\u0440\u0438\u043D\u044F\u0442\u044B\u0445 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u0417\u0430\u044F\u0432\u043A\u0430 \u2013 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0438\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u0443\u0441\u043B\u0443\u0433 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C\u044B\u0445 \u0421\u0435\u0440\u0432\u0438\u0441\u043E\u043C NetExchange, \u043F\u0443\u0442\u0435\u043C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u0447\u0435\u0440\u0435\u0437 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0441\u0430\u0439\u0442 \u0421\u0435\u0440\u0432\u0438\u0441\u0430, \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445, \u043E\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0445 \u0432 \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0438 \u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0432 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u0445 \u044D\u0442\u043E\u0439 \u0417\u0430\u044F\u0432\u043A\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u0418\u0441\u0445\u043E\u0434\u043D\u0430\u044F \u0432\u0430\u043B\u044E\u0442\u0430 \u2013 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u0432\u0430\u043B\u044E\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0436\u0435\u043B\u0430\u0435\u0442 \u043F\u0440\u043E\u0434\u0430\u0442\u044C \u0438\u043B\u0438 \u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C. \u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0441\u0447\u0435\u0442 \u2013 \u043D\u043E\u043C\u0435\u0440 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0430 \u0438\u043B\u0438 \u043B\u044E\u0431\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435 \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0441\u0447\u0435\u0442\u0430 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0432 \u041F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435, \u0441 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0431\u044B\u043B\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430 \u0418\u0441\u0445\u043E\u0434\u043D\u0430\u044F \u0432\u0430\u043B\u044E\u0442\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u044E\u0449\u0430\u044F \u0432\u0430\u043B\u044E\u0442\u0430 \u2013 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u0432\u0430\u043B\u044E\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u0438\u043B\u0438 \u043E\u0431\u043C\u0435\u043D\u0430 \u0418\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u0441\u0447\u0435\u0442\u2013 \u043D\u043E\u043C\u0435\u0440 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0430 \u0438\u043B\u0438 \u043B\u044E\u0431\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435 \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0441\u0447\u0435\u0442\u0430 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0432 \u041F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430 \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u044E\u0449\u0430\u044F \u0432\u0430\u043B\u044E\u0442\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u0420\u0435\u0437\u0435\u0440\u0432 \u0432\u0430\u043B\u044E\u0442\u044B - \u0438\u043C\u0435\u044E\u0449\u0438\u0439\u0441\u044F \u0432 \u0440\u0430\u0441\u043F\u043E\u0440\u044F\u0436\u0435\u043D\u0438\u0438 \u0421\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange, \u043D\u0430 \u043C\u043E\u043C\u0435\u043D\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0417\u0430\u044F\u0432\u043A\u0438, \u043E\u0431\u044A\u0435\u043C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u041E\u0431\u043C\u0435\u043D \u0432\u0430\u043B\u044E\u0442\u044B - \u043E\u0431\u043C\u0435\u043D \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u0435 \u043E\u0434\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u0432\u0430\u043B\u044E\u0442\u0443 \u0434\u0440\u0443\u0433\u043E\u0439 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u041A\u0443\u0440\u0441\u2014 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u043D\u043E\u0435 \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0434\u0432\u0443\u0445 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u0432\u0430\u043B\u044E\u0442 \u043F\u0440\u0438 \u0438\u0445 \u043E\u0431\u043C\u0435\u043D\u0435. \u00AB\u041C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0439\u00BB \u2014 \u0441\u043F\u043E\u0441\u043E\u0431 \u043E\u0431\u043C\u0435\u043D\u0430 \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B, \u043F\u0440\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u043D\u0435\u0437\u0430\u043C\u0435\u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043E\u0442 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441\u0443\u043C\u043C\u044B \u0418\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0438\u0442\u044C (\u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C) \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u0441\u0443\u043C\u043C\u0443 \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u044E\u0449\u0435\u0439 \u0432\u0430\u043B\u044E\u0442\u044B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u0425\u0430\u043A\u0435\u0440 \u2014 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u0432\u0437\u043B\u043E\u043C\u0449\u0438\u043A, \u0437\u043B\u043E\u0443\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0438\u043A, \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u044E\u0449\u0438\u0439\u0441\u044F \u043D\u0430 \u043F\u043E\u0438\u0441\u043A\u0435 \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043D\u0435\u0441\u0430\u043D\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u0432 \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0442\u0438 \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u043E\u0435 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u0438\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u0432\u044B\u0433\u043E\u0434\u044B, \u043D\u0430\u043D\u0435\u0441\u0435\u043D\u0438\u044F \u0443\u0449\u0435\u0440\u0431\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " \u041F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u043C \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u0421\u0435\u0440\u0432\u0438\u0441\u043E\u043C NetExchange \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u0443\u0441\u043B\u0443\u0433: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \u043E\u0431\u043C\u0435\u043D \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B (\u0440\u0430\u0437\u0434\u0435\u043B 6 \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \u043F\u0440\u043E\u0434\u0430\u0436\u0430 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B (\u0440\u0430\u0437\u0434\u0435\u043B 7 \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " \u043F\u043E\u043A\u0443\u043F\u043A\u0430 \u0443 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B (\u0440\u0430\u0437\u0434\u0435\u043B 8 \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433 \u0421\u0435\u0440\u0432\u0438\u0441\u043E\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " \u0417\u0430\u043A\u0430\u0437 \u0443\u0441\u043B\u0443\u0433 \u0421\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u043F\u0443\u0442\u0435\u043C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0417\u0430\u044F\u0432\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0441\u0430\u0439\u0442 \u0421\u0435\u0440\u0432\u0438\u0441\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u043C \u0441\u0434\u0435\u043B\u043A\u0438 \u0438\u043B\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0445\u043E\u0434\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0441\u0434\u0435\u043B\u043A\u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u044F\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0433\u043E \u043D\u0430 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0441\u0430\u0439\u0442\u0435 \u0421\u0435\u0440\u0432\u0438\u0441\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0417\u0430\u044F\u0432\u043E\u043A \u043D\u0430 \u0431\u0435\u0437\u043E\u0442\u0437\u044B\u0432\u043D\u043E\u0439 \u043E\u0441\u043D\u043E\u0432\u0435 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0440\u0430\u0431\u043E\u0442\u044B \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u043E\u0439 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F \u043C\u0435\u0436\u0434\u0443 \u041F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439 \u0438 \u041A\u043B\u0438\u0435\u043D\u0442\u043E\u043C \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0438 \u043D\u0438 \u0432 \u043A\u043E\u0435\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u041F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0438 \u0435\u0435 \u041A\u043B\u0438\u0435\u043D\u0442\u0430. \u041F\u0440\u0430\u0432\u0430 \u0438 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0438 \u0435\u0435 \u041A\u043B\u0438\u0435\u043D\u0442\u0430 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u041F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u044F \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C \u0441\u0440\u0435\u0434\u0441\u0442\u0432, \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u0432 \u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438, \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0434\u043D\u0438\u043C \u0438 \u0442\u0435\u043C \u0436\u0435 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0438\u043B\u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043B\u0438\u0446\u043E\u043C, \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u043E\u0439 \u0432\u043E \u0432\u0437\u0430\u0438\u043C\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F\u0445 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044F \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438\u043B\u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u043D\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442 \u043F\u0440\u0430\u0432\u043E\u043C\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0438 \u0437\u0430\u043A\u043E\u043D\u043D\u043E\u0441\u0442\u044C \u0432\u043B\u0430\u0434\u0435\u043D\u0438\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u043C\u0438 \u0432\u0430\u043B\u044E\u0442\u0430\u043C\u0438 \u0438/\u0438\u043B\u0438 \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u043C\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043C\u0438, \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C\u0438 \u0432 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0439 \u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " \u0412\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0432\u0448\u0438\u0441\u044C \u0443\u0441\u043B\u0443\u0433\u0430\u043C\u0438 \u0421\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange, \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442, \u0447\u0442\u043E \u0437\u0430\u043A\u043E\u043D\u043D\u043E \u0432\u043B\u0430\u0434\u0435\u0435\u0442 \u0438 \u0440\u0430\u0441\u043F\u043E\u0440\u044F\u0436\u0430\u0435\u0442\u0441\u044F \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u043C\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043C\u0438 \u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u043E\u0439, \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C\u0438 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u043C \u041F\u043B\u0430\u0442\u0435\u0436\u0435. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0438\u0441\u0447\u0438\u0441\u043B\u044F\u0442\u044C \u0438 \u0443\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0442\u044C \u0432\u0441\u0435 \u043D\u0430\u043B\u043E\u0433\u0438, \u0442\u0440\u0435\u0431\u0443\u0435\u043C\u044B\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u043E\u043C\u0443 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0443 \u043C\u0435\u0441\u0442\u0430 \u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " \u0417\u0430\u0431\u043E\u0442\u044F\u0441\u044C \u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C\u044B\u0445 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u0443\u0441\u043B\u0443\u0433, \u0421\u0435\u0440\u0432\u0438\u0441 Netexchange \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0442\u044C \u0432\u0441\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F, \u043C\u0430\u043A\u0438\u0441\u043C\u0430\u043B\u044C\u043D\u043E \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433 \u0421\u0435\u0440\u0432\u0438\u0441\u0430 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E\u043C \u0421\u0435\u0440\u0432\u0438\u0441\u0430 \u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0435\u0442\u0441\u044F \u043D\u0430 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0441\u0430\u0439\u0442\u0435 \u0421\u0435\u0440\u0432\u0438\u0441\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " \u0421\u0435\u0440\u0432\u0438\u0441 \u0432\u043F\u0440\u0430\u0432\u0435 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u044F\u0442\u044C \u043A\u0443\u0440\u0441\u044B \u043E\u0431\u043C\u0435\u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u0432\u0430\u043B\u044E\u0442 \u0438 \u0432\u0437\u0438\u043C\u0430\u0435\u043C\u044B\u0445 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u043E\u043D\u043D\u044B\u0445 \u0432 \u043B\u044E\u0431\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0432 \u043E\u0434\u043D\u043E\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0435\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435, \u043E \u0447\u0435\u043C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u044F\u0435\u0442 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435\u043C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E\u0431 \u044D\u0442\u0438\u0445 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u0445 \u043D\u0430 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0441\u0430\u0439\u0442\u0435 \u0421\u0435\u0440\u0432\u0438\u0441\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " \u0412 \u0417\u0430\u044F\u0432\u043A\u0435 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0435\u043C\u043E\u0439 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u043D\u0430 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u0430\u0439\u0442\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u041A\u0443\u0440\u0441, \u0440\u0430\u0437\u043C\u0435\u0440 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438, \u0432\u0437\u0438\u043C\u0430\u0435\u043C\u044B\u0439 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u041F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439, \u0437\u0430 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438, \u0440\u0430\u0437\u043C\u0435\u0440 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u044F \u0421\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange, \u0441\u043F\u043E\u0441\u043E\u0431 \u041E\u0431\u043C\u0435\u043D\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u044F\u0435\u043C\u044B\u0445 \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438\u043B\u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u0432\u0437\u0438\u043C\u0430\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0441\u0432\u043E\u0435\u0433\u043E \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u044F \u0432 \u043C\u043E\u043C\u0435\u043D\u0442 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u041E\u0431\u043C\u0435\u043D \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " \u041F\u0443\u0442\u0435\u043C \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u0417\u0430\u044F\u0432\u043A\u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043F\u043E\u0440\u0443\u0447\u0430\u0435\u0442, \u0430 \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u043E\u0442 \u0441\u0432\u043E\u0435\u0433\u043E \u0438\u043C\u0435\u043D\u0438 \u0438 \u0437\u0430 \u0441\u0447\u0435\u0442 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043F\u043E \u043E\u0431\u043C\u0435\u043D\u0443 \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B \u043E\u0434\u043D\u043E\u0439 \u041F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B (\u0418\u0441\u0445\u043E\u0434\u043D\u0430\u044F \u0432\u0430\u043B\u044E\u0442\u0430) \u043D\u0430 \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u0432\u0430\u043B\u044E\u0442\u0443 \u0434\u0440\u0443\u0433\u043E\u0439 \u041F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B (\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u044E\u0449\u0430\u044F \u0432\u0430\u043B\u044E\u0442\u0430) \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0439 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0438\u0442\u044C (\u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C) \u0418\u0441\u0445\u043E\u0434\u043D\u0443\u044E \u0432\u0430\u043B\u044E\u0442\u0443, \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u043C \u0432 \u0417\u0430\u044F\u0432\u043A\u0435, \u0430 \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange, \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B, \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0438\u0442\u044C (\u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C) \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u044E\u0449\u0443\u044E \u0432\u0430\u043B\u044E\u0442\u0443, \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043D\u043D\u0443\u044E \u043F\u043E \u041A\u0443\u0440\u0441\u0443 \u0438 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0441 \u0442\u0430\u0440\u0438\u0444\u0430\u043C\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " \u041F\u043E\u0441\u043B\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u044F\u0432\u043A\u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0438\u043C\u0435\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u043F\u043E\u0441\u043E\u0431 \u041E\u0431\u043C\u0435\u043D\u0430 \u0441 \u042D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u043D\u043E\u0433\u043E \u043D\u0430 \u041C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0439, \u043E\u043F\u043B\u0430\u0442\u0438\u0432 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u0430\u043D\u043D\u043E\u0439 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0441 \u0442\u0430\u0440\u0438\u0444\u0430\u043C\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " \u0420\u0430\u0437\u043C\u0435\u0440 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u044F \u0421\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange \u0437\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u0432 \u043F\u0443\u043D\u043A\u0442\u0435 6.1.,6.3. \u0438 6.5. \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F, \u043E\u0442\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u0432 \u0417\u0430\u044F\u0432\u043A\u0435 \u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0441\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u043D\u0430\u0436\u0430\u0442\u0438\u0435\u043C \u043A\u043D\u043E\u043F\u043A\u0438 \u00AB\u0414\u0430\u043B\u0435\u0435\u00BB \u043D\u0430 \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043F\u0440\u0438 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u044F\u0432\u043A\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " \u041E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u0421\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange \u043F\u043E \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044E (\u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435) \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u043E\u0439 \u0432 \u043C\u043E\u043C\u0435\u043D\u0442 \u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u041F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u0441\u043E \u0441\u0447\u0435\u0442\u0430 \u0421\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange, \u0447\u0442\u043E \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u041F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " \u041F\u0443\u0442\u0435\u043C \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u0417\u0430\u044F\u0432\u043A\u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043F\u043E\u0440\u0443\u0447\u0430\u0435\u0442, \u0430 \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u043E\u0442 \u0441\u0432\u043E\u0435\u0433\u043E \u0438\u043C\u0435\u043D\u0438 \u0438 \u0437\u0430 \u0441\u0447\u0435\u0442 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043F\u043E \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u0438\u044E \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " \u0420\u0430\u0437\u043C\u0435\u0440 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u044F \u0421\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange \u0437\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u0432 \u043F\u0443\u043D\u043A\u0442\u0435 7.1. \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F, \u043E\u0442\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u0432 \u0417\u0430\u044F\u0432\u043A\u0435 \u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0441\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u043D\u0430\u0436\u0430\u0442\u0438\u0435\u043C \u043A\u043D\u043E\u043F\u043A\u0438 \u00AB\u0414\u0430\u043B\u0435\u0435\u00BB \u043D\u0430 \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " \u0412 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 12 \u0447\u0430\u0441\u043E\u0432 \u0441 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043E\u0442 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u043C \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u0417\u0430\u044F\u0432\u043A\u0435, \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u043E\u0431\u044F\u0437\u0430\u043D \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0438\u0442\u044C(\u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C) \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u044E\u0449\u0443\u044E \u0432\u0430\u043B\u044E\u0442\u0443 \u043D\u0430 \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B \u0438 \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0432 \u0417\u0430\u044F\u0432\u043A\u0435. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u0432\u043F\u0440\u0430\u0432\u0435 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u0443\u044E \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B \u0437\u0430 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0435 \u0440\u0443\u0431\u043B\u0438, \u0435\u0441\u043B\u0438 \u043E\u043F\u043B\u0430\u0442\u0430 \u043F\u043E \u0442\u0430\u043A\u043E\u0439 \u0437\u0430\u044F\u0432\u043A\u0435 \u043D\u0435 \u043F\u043E\u0441\u0442\u0443\u043F\u0438\u043B\u0430 \u0432 \u0440\u0430\u0441\u0447\u0435\u0442\u043D\u0443\u044E \u043A\u0430\u0441\u0441\u0443 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u043F\u043E \u0438\u0441\u0442\u0435\u0447\u0435\u043D\u0438\u044F \u0441\u0443\u0442\u043E\u043A \u0441 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0442\u0430\u043A\u043E\u0439 \u0437\u0430\u044F\u0432\u043A\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u0432\u043F\u0440\u0430\u0432\u0435 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u0443\u044E \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B \u0437\u0430 \u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0435 \u0440\u0443\u0431\u043B\u0438, \u0435\u0441\u043B\u0438 \u043E\u043F\u043B\u0430\u0442\u0430 \u043F\u043E \u0442\u0430\u043A\u043E\u0439 \u0437\u0430\u044F\u0432\u043A\u0435 \u043D\u0435 \u043F\u043E\u0441\u0442\u0443\u043F\u0438\u043B\u0430 \u043D\u0430 \u0440\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u043F\u043E \u0438\u0441\u0442\u0435\u0447\u0435\u043D\u0438\u044E 60 \u0447\u0430\u0441\u043E\u0432 \u0441 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0442\u0430\u043A\u043E\u0439 \u0437\u0430\u044F\u0432\u043A\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " \u0412 \u0446\u0435\u043B\u044F\u0445 \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043C\u043E\u0448\u0435\u043D\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F\u043C, \u043F\u0440\u0438 \u0440\u0430\u0441\u0447\u0435\u0442\u0430\u0445 \u0432 \u0441\u0435\u0442\u0438 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442, \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u043C\u0438 \u043A\u0430\u0440\u0442\u0430\u043C\u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C Visa \u0438 MasterCard \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u0432\u043F\u0440\u0430\u0432\u0435 \u043B\u0438\u043C\u0438\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u0432\u0430\u043B\u044E\u0442 \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0445 \u043A\u0430\u0440\u0442 \u0438 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " - \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u0432\u0430\u043B\u044E\u0442 \u0432 \u0441\u0443\u0442\u043A\u0438, \u043F\u043E \u043E\u0434\u043D\u043E\u0439 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043A\u0430\u0440\u0442\u0435, \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 20000 (\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u0442\u044B\u0441\u044F\u0447) \u0440\u0443\u0431\u043B\u0435\u0439; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " - \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u0432\u0430\u043B\u044E\u0442 \u0432 \u043C\u0435\u0441\u044F\u0446, \u043F\u043E \u043E\u0434\u043D\u043E\u0439 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043A\u0430\u0440\u0442\u0435, \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 100000 (\u0441\u0442\u043E \u0442\u044B\u0441\u044F\u0447) \u0440\u0443\u0431\u043B\u0435\u0439; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " \u041E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u0421\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange \u043F\u043E \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044E (\u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435) \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u044E\u0449\u0435\u0439 \u0432\u0430\u043B\u044E\u0442\u044B \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u043E\u0439 \u0432 \u043C\u043E\u043C\u0435\u043D\u0442 \u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u041F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u0441\u043E \u0441\u0447\u0435\u0442\u0430 \u0421\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange, \u0447\u0442\u043E \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u041F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " \u041F\u0443\u0442\u0435\u043C \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u0417\u0430\u044F\u0432\u043A\u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043F\u043E\u0440\u0443\u0447\u0430\u0435\u0442, \u0430 \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u043E\u0442 \u0441\u0432\u043E\u0435\u0433\u043E \u0438\u043C\u0435\u043D\u0438 \u0438 \u0437\u0430 \u0441\u0447\u0435\u0442 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u043F\u043E\u043A\u0443\u043F\u0430\u0435\u0442 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u0432\u0430\u043B\u044E\u0442\u0443 \u0443 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043F\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0434\u0435\u043D\u0435\u0436\u043D\u043E\u0433\u043E \u044D\u043A\u0432\u0438\u0432\u0430\u043B\u0435\u043D\u0442\u0430 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u0432 \u0441\u0443\u043C\u043C\u0435, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0439 \u0432 \u0417\u0430\u044F\u0432\u043A\u0435. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " \u0412 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 3 (\u0442\u0440\u0435\u0445) \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439 \u0441 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0418\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B \u043E\u0442 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u043C \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u0417\u0430\u044F\u0432\u043A\u0435, \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u043E\u0431\u044F\u0437\u0430\u043D \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u0440\u0443\u0431\u043B\u0435\u0432\u044B\u0439 \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u0439 \u044D\u043A\u0432\u0438\u0432\u0430\u043B\u0435\u043D\u0442 \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u043E\u0439 \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B, \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u043C \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u043F\u0440\u0438 \u043F\u043E\u0434\u0430\u0447\u0435 \u0417\u0430\u044F\u0432\u043A\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " \u0420\u0430\u0437\u043C\u0435\u0440 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u044F \u0421\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange \u0437\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u0432 \u043F\u0443\u043D\u043A\u0442\u0435 8.1. \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F, \u043E\u0442\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u0432 \u0417\u0430\u044F\u0432\u043A\u0435 \u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0441\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u043D\u0430\u0436\u0430\u0442\u0438\u0435\u043C \u043A\u043D\u043E\u043F\u043A\u0438 \u00AB\u0414\u0430\u043B\u0435\u0435\u00BB \u043D\u0430 \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " \u041E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u0421\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange \u043F\u043E \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044E \u0434\u0435\u043D\u0435\u0436\u043D\u043E\u0433\u043E \u0440\u0443\u0431\u043B\u0435\u0432\u043E\u0433\u043E \u044D\u043A\u0432\u0438\u0432\u0430\u043B\u0435\u043D\u0442\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0439 \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u043E\u0439 \u0432 \u043C\u043E\u043C\u0435\u043D\u0442 \u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u0441\u0443\u043C\u043C\u044B \u0441 \u0440\u0430\u0441\u0447\u0435\u0442\u043D\u043E\u0433\u043E \u0441\u0447\u0435\u0442\u0430 \u0421\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435\u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0440\u0443\u0431\u043B\u0435\u0432\u043E\u0433\u043E \u0434\u0435\u043D\u0435\u0436\u043D\u043E\u0433\u043E \u044D\u043A\u0432\u0438\u0432\u0430\u043B\u0435\u043D\u0442\u0430, \u043F\u043E \u0432\u0438\u043D\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u0432\u0443\u0445 \u0441\u0443\u0442\u043E\u043A \u0441 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B \u0437\u0430\u044F\u0432\u043A\u0438, \u0421\u0435\u0440\u0432\u0438\u0441 Netexchange \u0432\u043F\u0440\u0430\u0432\u0435 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0438\u0442\u044C \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u0432\u0430\u043B\u044E\u0442\u0443 \u043D\u0430 \u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0441\u0447\u0435\u0442 \u0437\u0430 \u0432\u044B\u0447\u0435\u0442\u043E\u043C \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u041F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B, \u0435\u0441\u043B\u0438 \u0442\u0430\u043A\u0430\u044F \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\u0412\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435 \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F \u0432 \u0441\u0438\u043B\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " \u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u043C \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u043E\u0444\u0435\u0440\u0442\u044B, \u0430\u043A\u0446\u0435\u043F\u0442\u0443\u0435\u043C\u043E\u0439 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0432 \u0445\u043E\u0434\u0435 \u043F\u043E\u0434\u0430\u0447\u0438 \u0438\u043C \u0417\u0430\u044F\u0432\u043A\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " \u041F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u043E\u0444\u0435\u0440\u0442\u043E\u0439 \u043F\u0440\u0438\u0437\u043D\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u0430\u044F \u0421\u0435\u0440\u0432\u0438\u0441\u043E\u043C NetExchange \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u0445 \u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u0417\u0430\u044F\u0432\u043A\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " \u0410\u043A\u0446\u0435\u043F\u0442\u043E\u043C \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u043E\u0444\u0435\u0440\u0442\u044B \u043F\u0440\u0438\u0437\u043D\u0430\u0435\u0442\u0441\u044F \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043F\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044E \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0417\u0430\u044F\u0432\u043A\u0438, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E\u0449\u0438\u0445 \u0435\u0433\u043E \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0438\u0435 \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0443\u0441\u043B\u0443\u0433\u0430\u043C\u0438 \u0421\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445, \u043E\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0445 \u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u043C \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F\u0445 \u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0432 \u0417\u0430\u044F\u0432\u043A\u0435. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " \u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F \u0430\u043A\u0446\u0435\u043F\u0442\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u0417\u0430\u044F\u0432\u043A\u0438 \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0421\u0435\u0440\u0432\u0438\u0441\u043E\u043C NetExchange \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432 \u043C\u043E\u043C\u0435\u043D\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0437\u0430\u044F\u0432\u043A\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0432\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u0432 \u0441\u0438\u043B\u0443 \u0441 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0417\u0430\u044F\u0432\u043A\u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C. \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0430\u0432\u043E \u043E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u043F\u043E \u0417\u0430\u044F\u0432\u043A\u0435. \u041F\u0435\u0440\u0438\u043E\u0434 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u0430\u043A\u0446\u0435\u043F\u0442\u0430 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 24 \u0447\u0430\u0441\u0430 \u0441 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0417\u0430\u044F\u0432\u043A\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0421\u0442\u043E\u0440\u043E\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0434 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435, \u043D\u0435 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u044E\u0449\u0435\u043C \u0432\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0439 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0441\u0443\u043C\u043C\u044B \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438\u043B\u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u043D\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u043E\u0441\u0442\u0438, \u043E\u0448\u0438\u0431\u043A\u0438 \u0438 \u0441\u0431\u043E\u0438 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u044B\u0445 \u0438/\u0438\u043B\u0438 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0449\u0438\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433 \u0421\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange, \u0432\u043E\u0437\u043D\u0438\u043A\u0448\u0438\u0435 \u043F\u043E \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C, \u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u044F\u0449\u0438\u043C \u043E\u0442 \u0421\u0435\u0440\u0432\u0438\u0441\u0430 NetExchange, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441 \u044D\u0442\u0438\u043C \u0443\u0431\u044B\u0442\u043A\u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " \u0421\u0435\u0440\u0432\u0438\u0441 Netexchange \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0443\u0441\u043B\u0443\u0433\u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E \u043E\u0431\u043C\u0435\u043D\u0443, \u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u0438 \u043F\u0440\u043E\u0434\u0430\u0436\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u0432\u0430\u043B\u044E\u0442. Netexchange \u043D\u0438 \u043A\u043E\u0435\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043E\u043F\u043B\u0430\u0442\u0443 \u0432 \u043F\u043E\u043B\u044C\u0437\u0443 \u043A\u0430\u043A\u0438\u0445-\u043B\u0438\u0431\u043E \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446, \u0430 \u0442\u0430\u043A\u0436\u0435, \u0437\u0430\u043F\u0440\u0435\u0449\u0430\u0435\u0442 \u043E\u0431\u043C\u0435\u043D \u043D\u0430 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0438/\u0441\u0447\u0435\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E. Netexchange \u043D\u0435 \u0432\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u043D\u0438 \u0432 \u043A\u0430\u043A\u0438\u0435 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0441\u043A\u0438\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F, \u043D\u0435 \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u043D\u0438 \u043A\u0430\u043A\u0438\u0445 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u0432 \u0441 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F\u043C\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0437\u0430 \u0441\u0432\u043E\u0438 \u0442\u043E\u0432\u0430\u0440\u044B \u0438\u043B\u0438 \u0443\u0441\u043B\u0443\u0433\u0438, \u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0440\u043E\u0442\u0438\u0432 \u0442\u0430\u043A\u0438\u0445 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0439. Netexchange \u043D\u0435\u043B\u044C\u0437\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u043A \u043F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u0447\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u0434\u043B\u044F \u0432\u0437\u0430\u0438\u043C\u043E\u0440\u0430\u0441\u0447\u0435\u0442\u043E\u0432 \u043C\u0435\u0436\u0434\u0443 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u043C \u0438 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u043E\u043C (\u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u0438 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C \u0438 \u0442.\u0434.). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u043D\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0443\u0431\u044B\u0442\u043A\u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u0432\u043E\u0437\u043D\u0438\u043A\u0448\u0438\u0435 \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u044B\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435\u0441\u0435\u0442 \u0432\u0441\u044E \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E\u0441\u0442\u044C \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0438\u043C \u043F\u0440\u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u0417\u0430\u044F\u0432\u043A\u0438. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0435\u0441\u043B\u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043B \u0438\u043B\u0438 \u043D\u0435\u0432\u0435\u0440\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u043B \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u043D\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0443\u0431\u044B\u0442\u043A\u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u043F\u043E\u043D\u0435\u0441\u0435\u043D\u043D\u044B\u0435 \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0434\u043E\u043F\u0443\u0449\u0435\u043D\u043D\u043E\u0439 \u043E\u0448\u0438\u0431\u043A\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " \u0421\u0442\u043E\u0440\u043E\u043D\u044B \u043E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0430\u044E\u0442\u0441\u044F \u043E\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u043F\u043E\u043B\u043D\u043E\u0435 \u0438\u043B\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0435 \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0438\u0445 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043F\u043E \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044E, \u0435\u0441\u043B\u0438 \u0442\u0430\u043A\u043E\u0432\u043E\u0435 \u044F\u0432\u0438\u043B\u043E\u0441\u044C \u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0435\u043C \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043D\u0435\u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0438\u043C\u043E\u0439 \u0441\u0438\u043B\u044B, \u0432\u043E\u0437\u043D\u0438\u043A\u0448\u0438\u0445 \u043F\u043E\u0441\u043B\u0435 \u0432\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u0432 \u0441\u0438\u043B\u0443 \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F, \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u0439 \u0447\u0440\u0435\u0437\u0432\u044B\u0447\u0430\u0439\u043D\u043E\u0433\u043E \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u043C\u043E\u0433\u043B\u0438 \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u044B \u0438 \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0449\u0435\u043D\u044B \u0440\u0430\u0437\u0443\u043C\u043D\u044B\u043C\u0438 \u043C\u0435\u0440\u0430\u043C\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " \u0412 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u043B\u0443\u0447\u0430\u044F\u0445 \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u043D\u0435\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0435\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0441\u0432\u043E\u0438\u0445 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043F\u043E \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044E \u0421\u0442\u043E\u0440\u043E\u043D\u044B \u043D\u0435\u0441\u0443\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "\u041F\u0440\u043E\u0447\u0438\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u0432\u043F\u0440\u0430\u0432\u0435 \u0432 \u043E\u0434\u043D\u043E\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0435\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0432\u043D\u043E\u0441\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F \u043F\u0443\u0442\u0435\u043C \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u043D\u0430 \u0421\u0430\u0439\u0442\u0435 \u0421\u0438\u0441\u0442\u0435\u043C\u044B. \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432\u0441\u0442\u0443\u043F\u0430\u044E\u0442 \u0432 \u0441\u0438\u043B\u0443 \u0441 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u0438\u044F, \u0435\u0441\u043B\u0438 \u0438\u043D\u043E\u0439 \u0441\u0440\u043E\u043A \u0432\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0432 \u0441\u0438\u043B\u0443 \u043D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u0440\u0438 \u0438\u0445 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u0432\u043F\u0440\u0430\u0432\u0435 \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u043E\u0434\u043E\u0437\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u044F\u0432\u043A\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C, \u0432\u043E \u0438\u0437\u0431\u0435\u0436\u0430\u043D\u0438\u0435 \u0443\u0449\u0435\u0440\u0431\u0430 \u043E\u0442 \u0425\u0430\u043A\u0435\u0440\u0441\u043A\u0438\u0445 \u0430\u0442\u0430\u043A \u043F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0442\u044C \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0442\u0430\u043A\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u0434\u043E \u0432\u044B\u044F\u0441\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u0438\u0447\u0438\u043D \u044D\u0442\u0438\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u0432\u043F\u0440\u0430\u0432\u0435 \u043E\u0442\u043A\u0430\u0437\u0430\u0442\u044C \u0432 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u043E\u0431\u043C\u0435\u043D\u0430, \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u0432\u0430\u043B\u044E\u0442, \u0435\u0441\u043B\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0418\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u0430\u043B\u044E\u0442\u044B \u043D\u0430 \u0441\u0447\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0431\u044B\u043B\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0430 \u0431\u0435\u0437 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u044F\u0432\u043A\u0438 \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u0430. \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u0432\u0430\u043B\u044E\u0442\u0430, \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u0430\u044F \u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u0441\u0447\u0435\u0442\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u0430, \u0431\u0435\u0437 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u044F\u0432\u043A\u0438 \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0432\u044B\u0447\u0435\u0442\u0430 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u041F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B, \u0435\u0441\u043B\u0438 \u0442\u0430\u043A\u043E\u0432\u0430\u044F \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u0432\u043F\u0440\u0430\u0432\u0435 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u0443\u044E \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0437\u0430\u044F\u0432\u043A\u0443, \u0435\u0441\u043B\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u043E\u0434\u043D\u043E\u0433\u043E \u0447\u0430\u0441\u0430 \u043F\u0435\u0440\u0432\u044B\u0439 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u044E\u0449\u0443\u044E \u0432\u0430\u043B\u044E\u0442\u0443 \u0432 \u0441\u0443\u043C\u043C\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0439 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0432 \u0437\u0430\u044F\u0432\u043A\u0435, \u0442\u043E \u0435\u0441\u0442\u044C \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u043E\u043F\u043B\u0430\u0442\u0438\u043B \u0417\u0430\u044F\u0432\u043A\u0443. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u0432\u043F\u0440\u0430\u0432\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u043D\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 e-mail \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u043E\u0431\u043C\u0435\u043D\u0430, \u0442.\u043A. \u044D\u0442\u043E \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0435\u043E\u0442\u044A\u0435\u043C\u043B\u0435\u043C\u043E\u0439 \u0447\u0430\u0441\u0442\u044C\u044E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0433\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043E\u0431\u043C\u0435\u043D\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " \u0412\u0441\u0435 \u0441\u043F\u043E\u0440\u044B \u0438 \u0440\u0430\u0437\u043D\u043E\u0433\u043B\u0430\u0441\u0438\u044F, \u0432\u043E\u0437\u043D\u0438\u043A\u0448\u0438\u0435 \u0438\u043B\u0438 \u043C\u043E\u0433\u0443\u0449\u0438\u0435 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u0443\u0442\u044C \u0438\u0437 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F, \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044E \u043F\u0443\u0442\u0435\u043C \u043F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u043E\u0432 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F. \u0421\u0435\u0440\u0432\u0438\u0441 NetExchange \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043E\u0442 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u0438 \u043E\u0431\u044F\u0437\u0430\u043D \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 15 (\u043F\u044F\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u0438) \u0434\u043D\u0435\u0439 \u0443\u0434\u043E\u0432\u043B\u0435\u0442\u0432\u043E\u0440\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0432 \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u0438 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043B\u0438\u0431\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u043C\u043E\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043E\u0442\u043A\u0430\u0437. \u041A \u043E\u0442\u0432\u0435\u0442\u0443 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u044B \u0432\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0435\u0441\u043B\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u0448\u0438\u0439 \u0441\u043F\u043E\u0440 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D \u0432 \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u043E\u043D\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 60 (\u0448\u0435\u0441\u0442\u0438\u0434\u0435\u0441\u044F\u0442\u0438) \u0434\u043D\u0435\u0439, \u043B\u044E\u0431\u0430\u044F \u0438\u0437 \u0421\u0442\u043E\u0440\u043E\u043D \u0432\u043F\u0440\u0430\u0432\u0435 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u0437\u0430 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435\u043C \u0441\u043F\u043E\u0440\u0430 \u0432 \u0441\u0443\u0434 \u043F\u043E \u043C\u0435\u0441\u0442\u0443 \u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0421\u0435\u0440\u0432\u0438\u0441\u0430.11.7. \u041C\u0435\u0441\u0442\u043E\u043C \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0438 \u043C\u0435\u0441\u0442\u043E\u043C \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0430\u044F \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u044F. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "\u0423\u0412\u0415\u0414\u041E\u041C\u041B\u0415\u041D\u0418\u0415 \u041E \u0420\u0418\u0421\u041A\u0410\u0425.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " \u041F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u0435 \u043F\u043E \u0437\u0430\u043A\u0430\u0437\u0443 \u043B\u0438\u0446\u0430 \u043B\u0438\u0431\u043E \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F, \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0438\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u0441\u0438\u0441\u0442\u0435\u043C\u0443 WebMoney Transfer. \u041C\u044B \u044F\u0432\u043B\u044F\u0435\u043C\u0441\u044F \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u043C \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435\u043C, \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0449\u0438\u043C \u0443\u0441\u043B\u0443\u0433\u0438, \u0438 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u043C \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043E \u0446\u0435\u043D\u0430\u0445 \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u0445. \u041F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F, \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0438\u0440\u0443\u044E\u0449\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 WebMoney Transfer, \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0442 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u043E\u043D\u043D\u044B\u0445 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0439 \u0438\u043B\u0438 \u0438\u043D\u044B\u0445 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0439 \u0437\u0430 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0443\u0441\u043B\u0443\u0433 \u0438 \u043D\u0435 \u043D\u0435\u0441\u0443\u0442 \u043D\u0438\u043A\u0430\u043A\u043E\u0439 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u043D\u0430\u0448\u0443 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C.\u0410\u0442\u0442\u0435\u0441\u0442\u0430\u0446\u0438\u044F, \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u043D\u0430\u044F \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B WebMoney Transfer, \u043B\u0438\u0448\u044C \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442 \u043D\u0430\u0448\u0438 \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B \u0434\u043B\u044F \u0441\u0432\u044F\u0437\u0438 \u0438 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u044F\u0435\u0442 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u044C. \u041E\u043D\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E \u043D\u0430\u0448\u0435\u043C\u0443 \u0436\u0435\u043B\u0430\u043D\u0438\u044E \u0438 \u043D\u0435 \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u043C\u044B \u043A\u0430\u043A\u0438\u043C-\u043B\u0438\u0431\u043E \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u0441\u0432\u044F\u0437\u0430\u043D\u044B \u0441 \u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C\u0438 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u044B WebMoney. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.rules__title[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.rules[_ngcontent-%COMP%] {\n  padding: 0 1.6rem;\n}\n\n.rules__sub-rules[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.rules__info[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2NvbXBvbmVudHMvc2VjdGlvbi1ydWxlcy9zZWN0aW9uLXJ1bGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csZUFBQTtBQUNIOztBQUVBO0VBQ0csaUJBQUE7QUFDSDs7QUFDQTtFQUNHLGdCQUFBO0FBRUg7O0FBQ0E7RUFDRyxpQkFBQTtBQUVIOztBQUNBO0VBQ0csaUJBQUE7QUFFSDs7QUFDQTtFQUNHLCtCQUFBO0FBRUgiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vY29tcG9uZW50cy9zZWN0aW9uLXJ1bGVzL3NlY3Rpb24tcnVsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICBmb250LXNpemU6IDNyZW07XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4ucnVsZXNfX3RpdGxlIHtcclxuICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnJ1bGVzIHtcclxuICAgcGFkZGluZzogMCAxLjZyZW07XHJcbn1cclxuXHJcbi5ydWxlc19fc3ViLXJ1bGVzIHtcclxuICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5ydWxlc19faW5mbyB7XHJcbiAgIGNvbG9yOiByZ2JhKCNmZmYsIDAuNyk7XHJcbn1cclxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionRulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section-rules',
                templateUrl: './section-rules.component.html',
                styleUrls: ['./section-rules.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/main/components/section-tariffs/section-tariffs.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/main/components/section-tariffs/section-tariffs.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SectionTariffsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTariffsComponent", function() { return SectionTariffsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../store/index */ "./src/app/store/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _shared_components_currency_img_currency_img_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/currency-img/currency-img.component */ "./src/app/shared/components/currency-img/currency-img.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function SectionTariffsComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "\u041E\u0442\u0434\u0430\u0435\u0442\u0435"));
} }
function SectionTariffsComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-currency-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", exchange_r8.givenCurrency.icon)("alt", exchange_r8.givenCurrency.stringId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", exchange_r8.givenCurrencyCourse, " ", exchange_r8.givenCurrency.name, " ");
} }
function SectionTariffsComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "\u041F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435"));
} }
function SectionTariffsComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-currency-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", exchange_r9.takenCurrency.icon)("alt", exchange_r9.takenCurrency.stringId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", exchange_r9.takenCurrencyCourse, " ", exchange_r9.takenCurrency.name, " ");
} }
function SectionTariffsComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "\u0420\u0435\u0437\u0435\u0440\u0432"));
} }
function SectionTariffsComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exchange_r10.takenCurrency.reserve, " ");
} }
function SectionTariffsComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
const _c0 = function (a1) { return { row: true, inActive: a1 }; };
function SectionTariffsComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SectionTariffsComponent_tr_14_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const row_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onNavigate(row_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !row_r11.isActive));
} }
class SectionTariffsComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.columnsToDisplay = ['givenCurrency', 'takenCurrency', 'reserve'];
    }
    ngOnInit() {
        this.exchanges$ = this.store
            .select(_store_index__WEBPACK_IMPORTED_MODULE_1__["getAllExchanges"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((exchanges) => exchanges.slice().sort(this.sort)));
    }
    onNavigate(exchange) {
        if (!exchange.isActive) {
            return;
        }
        this.router.navigate(['/exchanges', exchange.id]);
    }
    sort(a, b) {
        if (a.givenCurrency.name > b.givenCurrency.name) {
            return 1;
        }
        else if (a.givenCurrency.name < b.givenCurrency.name) {
            return -1;
        }
        return 0;
    }
}
SectionTariffsComponent.ɵfac = function SectionTariffsComponent_Factory(t) { return new (t || SectionTariffsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SectionTariffsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionTariffsComponent, selectors: [["app-section-tariffs"]], decls: 15, vars: 5, consts: [[1, "title"], ["mat-table", "", 1, "table", 3, "dataSource"], ["matColumnDef", "givenCurrency"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "takenCurrency"], ["matColumnDef", "reserve"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "class", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "vertical-center"], [3, "icon", "alt"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function SectionTariffsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0422\u0430\u0440\u0438\u0444\u044B \u043D\u0430 \u043E\u0431\u043C\u0435\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SectionTariffsComponent_th_5_Template, 3, 3, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SectionTariffsComponent_td_6_Template, 4, 4, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SectionTariffsComponent_th_8_Template, 3, 3, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SectionTariffsComponent_td_9_Template, 4, 4, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SectionTariffsComponent_th_11_Template, 3, 3, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SectionTariffsComponent_td_12_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SectionTariffsComponent_tr_13_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SectionTariffsComponent_tr_14_Template, 1, 4, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.exchanges$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _shared_components_currency_img_currency_img_component__WEBPACK_IMPORTED_MODULE_6__["CurrencyImgComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"]], styles: [".title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  background: transparent;\n}\n\n.row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  transition: 0.3s;\n}\n\n.row[_ngcontent-%COMP%]:hover {\n  background: rgba(114, 38, 146, 0.05);\n}\n\n.inActive[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: default;\n}\n\n.inActive[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}\n\n.vertical-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2NvbXBvbmVudHMvc2VjdGlvbi10YXJpZmZzL3NlY3Rpb24tdGFyaWZmcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNHLGVBQUE7QUFESDs7QUFJQTtFQUNHLFdBQUE7RUFDQSx1QkFBQTtBQURIOztBQUlBO0VBQ0csZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFESDs7QUFHRztFQUNHLG9DQUFBO0FBRE47O0FBS0E7RUFDRyxZQUFBO0VBQ0EsZUFBQTtBQUZIOztBQUlHO0VBQ0csdUJBQUE7QUFGTjs7QUFNQTtFQUNHLGFBQUE7RUFDQSxtQkFBQTtBQUhIIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2NvbXBvbmVudHMvc2VjdGlvbi10YXJpZmZzL3NlY3Rpb24tdGFyaWZmcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi50aXRsZSB7XHJcbiAgIGZvbnQtc2l6ZTogM3JlbTtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG4gICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgMC4wNSk7XHJcbiAgIH1cclxufVxyXG5cclxuLmluQWN0aXZlIHtcclxuICAgb3BhY2l0eTogMC41O1xyXG4gICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgIH1cclxufVxyXG5cclxuLnZlcnRpY2FsLWNlbnRlciB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionTariffsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section-tariffs',
                templateUrl: './section-tariffs.component.html',
                styleUrls: ['./section-tariffs.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/main/components/section-third-message/section-third-message.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/main/components/section-third-message/section-third-message.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: SectionThirdMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionThirdMessageComponent", function() { return SectionThirdMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SectionThirdMessageComponent {
    constructor() { }
    ngOnInit() { }
}
SectionThirdMessageComponent.ɵfac = function SectionThirdMessageComponent_Factory(t) { return new (t || SectionThirdMessageComponent)(); };
SectionThirdMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionThirdMessageComponent, selectors: [["app-section-third-message"]], decls: 9, vars: 0, consts: [[1, "text"]], template: function SectionThirdMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0427\u0442\u043E \u0435\u0441\u043B\u0438 \u0432\u0440\u0435\u043C\u044F \u043A\u043E\u043D\u0447\u0438\u043B\u043E\u0441\u044C, \u0430 \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u043D\u0435 \u0443\u0441\u043F\u0435\u043B?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0412 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u041F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433, \u043F\u043E \u0438\u0441\u0442\u0435\u0447\u0435\u043D\u0438\u0438 \u044D\u0442\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0437\u0430\u044F\u0432\u043A\u0430 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u041F\u043E\u0441\u043B\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \"\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C\" \u0412\u044B \u0431\u0443\u0434\u0435\u0442\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u044B \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043E\u043F\u043B\u0430\u0442\u044B \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B, \u0433\u0434\u0435, \u0441\u043B\u0435\u0434\u0443\u044F \u043F\u0440\u043E\u0441\u0442\u044B\u043C \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F\u043C, \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043E\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043E\u043F\u043B\u0430\u0442\u0443. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0423\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u043F\u043B\u0430\u0442\u0438\u043B\u0438 \u0437\u0430\u044F\u0432\u043A\u0443 - \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u0435\u0440\u043D\u0435\u0442\u0435\u0441\u044C \u043D\u0430\u0437\u0430\u0434. \u041E\u0431\u043C\u0435\u043D \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9jb21wb25lbnRzL3NlY3Rpb24tdGhpcmQtbWVzc2FnZS9zZWN0aW9uLXRoaXJkLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionThirdMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section-third-message',
                templateUrl: './section-third-message.component.html',
                styleUrls: ['./section-third-message.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/main/components/section-trade-first/section-trade-first.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/main/components/section-trade-first/section-trade-first.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SectionTradeFirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTradeFirstComponent", function() { return SectionTradeFirstComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../store/index */ "./src/app/store/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_actions_progress_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../store/actions/progress.actions */ "./src/app/store/actions/progress.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_currency_img_currency_img_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/currency-img/currency-img.component */ "./src/app/shared/components/currency-img/currency-img.component.ts");









function SectionTradeFirstComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SectionTradeFirstComponent_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const exchange_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectCurrentExchange(exchange_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-currency-img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", exchange_r2.id === ctx_r0.selectedId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", exchange_r2.givenCurrency.icon)("alt", exchange_r2.givenCurrency.stringId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exchange_r2.givenCurrency.name);
} }
const _c0 = function (a1) { return { currency: true, inActive: a1 }; };
function SectionTradeFirstComponent_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SectionTradeFirstComponent_ng_container_8_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const exchange_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onExchangeSelect(exchange_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-currency-img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, !exchange_r6.isActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", exchange_r6.takenCurrency.icon)("alt", exchange_r6.takenCurrency.stringId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exchange_r6.takenCurrency.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", exchange_r6.givenCurrencyCourse, " : ", exchange_r6.takenCurrencyCourse, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | \u0420\u0435\u0437\u0435\u0440\u0432 ", exchange_r6.takenCurrency.reserve, " ");
} }
function SectionTradeFirstComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SectionTradeFirstComponent_ng_container_8_div_1_Template, 9, 10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.takenCurrencies);
} }
class SectionTradeFirstComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.givenCurrencies = [];
        this.takenCurrencies = [];
    }
    ngOnInit() {
        this.store.dispatch(_store_actions_progress_actions__WEBPACK_IMPORTED_MODULE_3__["setCurrentProcess"]({ payload: 1 }));
        this.store
            .select(_store_index__WEBPACK_IMPORTED_MODULE_1__["getAllExchanges"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe((data) => {
            this.exchanges = data;
            this.getUniqueExchanges(data);
            this.selectCurrentExchange(data[0]);
        });
    }
    selectCurrentExchange(exchange) {
        this.selectedId = exchange.id;
        this.getTakenCurrencies(exchange);
    }
    onExchangeSelect(exchange) {
        if (!exchange.isActive) {
            return;
        }
        this.router.navigate(['exchanges', exchange.id]);
    }
    getUniqueExchanges(exchanges) {
        const checkedExchanges = {};
        for (const e of exchanges) {
            if (!checkedExchanges[e.givenCurrency.name]) {
                this.givenCurrencies.push(e);
                checkedExchanges[e.givenCurrency.name] = true;
            }
        }
    }
    getTakenCurrencies(exchange) {
        this.takenCurrencies = [];
        const exchanges = this.exchanges;
        for (const key of exchanges) {
            if (key.givenCurrency.name === exchange.givenCurrency.name) {
                this.takenCurrencies.push(key);
            }
        }
    }
}
SectionTradeFirstComponent.ɵfac = function SectionTradeFirstComponent_Factory(t) { return new (t || SectionTradeFirstComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
SectionTradeFirstComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionTradeFirstComponent, selectors: [["app-section-trade-first"]], decls: 9, vars: 2, consts: [[1, "table"], [1, "left"], [1, "title"], ["class", "currency", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "right"], [4, "ngIf"], [1, "currency", 3, "click"], [3, "icon", "alt"], [1, "currency__name"], ["disabled", "!exchange.isActive", 3, "class", "click", 4, "ngFor", "ngForOf"], ["disabled", "!exchange.isActive", 3, "click"], [1, "currency__info"], [1, "currency__name", "no-margin"], [1, "currency__value", "no-margin"], [1, "course"]], template: function SectionTradeFirstComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041E\u0442\u0434\u0430\u0435\u0442\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SectionTradeFirstComponent_div_4_Template, 4, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SectionTradeFirstComponent_ng_container_8_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.givenCurrencies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_currency_img_currency_img_component__WEBPACK_IMPORTED_MODULE_7__["CurrencyImgComponent"]], styles: [".table[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.left[_ngcontent-%COMP%] {\n  margin-right: 4rem;\n}\n\n.currency[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 25rem;\n  height: 5rem;\n  border-bottom: 1px solid #722692;\n  padding-bottom: 2rem;\n  position: relative;\n  cursor: pointer;\n}\n\n.currency__name[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.currency[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 4rem;\n}\n\n.currency[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: scaleY(0);\n  transform-origin: bottom center;\n  z-index: -1;\n  transition: transform 0.3s;\n  background: linear-gradient(180deg, rgba(34, 193, 195, 0) 0%, rgba(114, 38, 146, 0.4) 100%);\n}\n\n.currency[_ngcontent-%COMP%]:hover:not(.selected)::after {\n  transform: scaleY(1);\n}\n\n.currency__info[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n}\n\n.currency__value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, rgba(34, 193, 195, 0) 0%, rgba(114, 38, 146, 0.4) 100%);\n}\n\n.inActive[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: default;\n}\n\n.inActive[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2NvbXBvbmVudHMvc2VjdGlvbi10cmFkZS1maXJzdC9zZWN0aW9uLXRyYWRlLWZpcnN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0csYUFBQTtFQUNBLHVCQUFBO0FBREg7O0FBSUE7RUFDRyxrQkFBQTtBQURIOztBQUlBO0VBQ0csYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUEyQ0EsZUFBQTtBQTNDSDs7QUFFRztFQUNHLGlCQUFBO0FBQU47O0FBR0c7RUFDRyxtQkFBQTtBQUROOztBQUlHO0VBQ0csV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSwyRkFBQTtBQUZOOztBQVNHO0VBQ0csb0JBQUE7QUFQTjs7QUFVRztFQUNHLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFSTjs7QUFXRztFQUNHLGVBQUE7QUFUTjs7QUFlQTtFQUNHLDJGQUFBO0FBWkg7O0FBbUJBO0VBQ0csWUFBQTtFQUNBLGVBQUE7QUFoQkg7O0FBaUJHO0VBQ0csV0FBQTtFQUNBLGdCQUFBO0FBZk4iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vY29tcG9uZW50cy9zZWN0aW9uLXRyYWRlLWZpcnN0L3NlY3Rpb24tdHJhZGUtZmlyc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4udGFibGUge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxlZnQge1xyXG4gICBtYXJnaW4tcmlnaHQ6IDRyZW07XHJcbn1cclxuXHJcbi5jdXJyZW5jeSB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIHdpZHRoOiAyNXJlbTtcclxuICAgaGVpZ2h0OiA1cmVtO1xyXG4gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLXByaW1hcnk7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAmX19uYW1lIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgIH1cclxuXHJcbiAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbiAgIH1cclxuXHJcbiAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbnRlcjtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgIDE4MGRlZyxcclxuICAgICAgICAgcmdiYSgzNCwgMTkzLCAxOTUsIDApIDAlLFxyXG4gICAgICAgICByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjQpIDEwMCVcclxuICAgICAgKTtcclxuICAgfVxyXG5cclxuICAgJjpob3Zlcjpub3QoLnNlbGVjdGVkKTo6YWZ0ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgfVxyXG5cclxuICAgJl9faW5mbyB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICB9XHJcblxyXG4gICAmX192YWx1ZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgfVxyXG5cclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDE4MGRlZyxcclxuICAgICAgcmdiYSgzNCwgMTkzLCAxOTUsIDApIDAlLFxyXG4gICAgICByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjQpIDEwMCVcclxuICAgKTtcclxufVxyXG5cclxuLmluQWN0aXZlIHtcclxuICAgb3BhY2l0eTogMC41O1xyXG4gICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionTradeFirstComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section-trade-first',
                templateUrl: './section-trade-first.component.html',
                styleUrls: ['./section-trade-first.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/main/components/section-trade-progress/section-trade-progress.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/main/components/section-trade-progress/section-trade-progress.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: SectionTradeProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTradeProgressComponent", function() { return SectionTradeProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






function SectionTradeProgressComponent_div_1_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SectionTradeProgressComponent_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const progress_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](progress_r1.id);
} }
const _c0 = function (a1, a2) { return { progress__level: true, completed: a1, current: a2 }; };
function SectionTradeProgressComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SectionTradeProgressComponent_div_1_mat_icon_4_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SectionTradeProgressComponent_div_1_ng_template_6_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const progress_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, progress_r1.id < _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r0.progress$), progress_r1.id === _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx_r0.progress$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", progress_r1.id < _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, ctx_r0.progress$))("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", progress_r1.text, " ");
} }
class SectionTradeProgressComponent {
    constructor(store) {
        this.store = store;
        this.levels = [
            {
                id: 1,
                isCompleted: false,
                isCurrent: true,
                text: 'Выберите направление обмена',
            },
            {
                id: 2,
                isCompleted: false,
                isCurrent: false,
                text: 'Платежная информация',
            },
            {
                id: 3,
                isCompleted: false,
                isCurrent: false,
                text: 'Подтверждение, оплата',
            },
        ];
    }
    ngOnInit() {
        this.progress$ = this.store
            .select('progress')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('currentProgress'));
    }
}
SectionTradeProgressComponent.ɵfac = function SectionTradeProgressComponent_Factory(t) { return new (t || SectionTradeProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
SectionTradeProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionTradeProgressComponent, selectors: [["app-section-trade-progress"]], decls: 2, vars: 1, consts: [[1, "progress"], ["class", "progress__block", 4, "ngFor", "ngForOf"], [1, "progress__block"], [4, "ngIf", "ngIfElse"], ["first", ""], [1, "progress__container"], [1, "progress__text"]], template: function SectionTradeProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SectionTradeProgressComponent_div_1_Template, 11, 14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.levels);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".progress[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.progress__block[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.progress__block[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 4rem;\n}\n.progress__level[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2.6rem 2.8rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  font-size: 3rem;\n}\n.progress__container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.progress__text[_ngcontent-%COMP%] {\n  word-spacing: 9999px;\n}\n.completed[_ngcontent-%COMP%] {\n  border: 2px solid #69f0ae;\n}\n.current[_ngcontent-%COMP%] {\n  border: 2px solid #722692;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2NvbXBvbmVudHMvc2VjdGlvbi10cmFkZS1wcm9ncmVzcy9zZWN0aW9uLXRyYWRlLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0csWUFBQTtBQURIO0FBRUc7RUFJRyxrQkFBQTtBQUhOO0FBQU07RUFDRyxtQkFBQTtBQUVUO0FBR0c7RUFDRyxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFETjtBQUlHO0VBQ0csa0JBQUE7QUFGTjtBQUtHO0VBQ0csb0JBQUE7QUFITjtBQU9BO0VBQ0cseUJBQUE7QUFKSDtBQU9BO0VBQ0cseUJBQUE7QUFKSCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9jb21wb25lbnRzL3NlY3Rpb24tdHJhZGUtcHJvZ3Jlc3Mvc2VjdGlvbi10cmFkZS1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5wcm9ncmVzcyB7XHJcbiAgIHdpZHRoOiAxMDBweDtcclxuICAgJl9fYmxvY2sge1xyXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgfVxyXG5cclxuICAgJl9fbGV2ZWwge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDIuNnJlbSAyLjhyZW07XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKCRjb2xvci13aGl0ZSwgMC4yKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgIH1cclxuXHJcbiAgICZfX2NvbnRhaW5lciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgfVxyXG5cclxuICAgJl9fdGV4dCB7XHJcbiAgICAgIHdvcmQtc3BhY2luZzogOTk5OXB4O1xyXG4gICB9XHJcbn1cclxuXHJcbi5jb21wbGV0ZWQge1xyXG4gICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItYWNjZW50O1xyXG59XHJcblxyXG4uY3VycmVudCB7XHJcbiAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionTradeProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section-trade-progress',
                templateUrl: './section-trade-progress.component.html',
                styleUrls: ['./section-trade-progress.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/main/components/section-trade-second/section-trade-second.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/main/components/section-trade-second/section-trade-second.component.ts ***!
  \************************************************************************************************/
/*! exports provided: SectionTradeSecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTradeSecondComponent", function() { return SectionTradeSecondComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../store/index */ "./src/app/store/index.ts");
/* harmony import */ var _store_actions_progress_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/actions/progress.actions */ "./src/app/store/actions/progress.actions.ts");
/* harmony import */ var _store_actions_order_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store/actions/order.actions */ "./src/app/store/actions/order.actions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _core_services_webmoney_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../core/services/webmoney.service */ "./src/app/core/services/webmoney.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/error-message/error-message.component */ "./src/app/shared/components/error-message/error-message.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_pipes_get_money_in_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/pipes/get-money-in.pipe */ "./src/app/shared/pipes/get-money-in.pipe.ts");


















function SectionTradeSecondComponent_ng_container_0_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \u041E\u0431\u043C\u0435\u043D ", exchange_r1.givenCurrency.name, " \u043D\u0430 ", exchange_r1.takenCurrency.name, " ");
} }
function SectionTradeSecondComponent_ng_container_0_app_error_message_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-error-message", 5);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", ctx_r3.webmoneyErrorMessage);
} }
function SectionTradeSecondComponent_ng_container_0_form_3_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041D\u043E\u043C\u0435\u0440 ", exchange_r1.givenCurrency.name.startsWith("Webmoney") ? "\u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0430 " + exchange_r1.givenCurrency.stringId : "\u043A\u0430\u0440\u0442\u044B", " ");
} }
function SectionTradeSecondComponent_ng_container_0_form_3_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041D\u043E\u043C\u0435\u0440 ", exchange_r1.takenCurrency.name.startsWith("Webmoney") ? "\u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0430 " + exchange_r1.takenCurrency.stringId : "\u043A\u0430\u0440\u0442\u044B", "");
} }
function SectionTradeSecondComponent_ng_container_0_form_3_mat_form_field_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0418\u043C\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SectionTradeSecondComponent_ng_container_0_form_3_mat_form_field_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SectionTradeSecondComponent_ng_container_0_form_3_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "+ \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SectionTradeSecondComponent_ng_container_0_form_3_mat_form_field_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function SectionTradeSecondComponent_ng_container_0_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SectionTradeSecondComponent_ng_container_0_form_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const exchange_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onSubmit(exchange_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "getMoneyIn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SectionTradeSecondComponent_ng_container_0_form_3_Template_input_input_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.onCurrencyChange("takenCurrencyAmount", $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "getMoneyIn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SectionTradeSecondComponent_ng_container_0_form_3_Template_input_input_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.onCurrencyChange("givenCurrencyAmount", $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SectionTradeSecondComponent_ng_container_0_form_3_div_12_Template, 5, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SectionTradeSecondComponent_ng_container_0_form_3_div_13_Template, 5, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SectionTradeSecondComponent_ng_container_0_form_3_mat_form_field_15_Template, 4, 0, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SectionTradeSecondComponent_ng_container_0_form_3_mat_form_field_16_Template, 4, 0, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SectionTradeSecondComponent_ng_container_0_form_3_div_17_Template, 7, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SectionTradeSecondComponent_ng_container_0_form_3_mat_form_field_19_Template, 4, 0, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443 \u00AB\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433\u00BB \u0432\u044B \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0435 \u0441\u0432\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0441 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 EXWM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("min", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, exchange_r1.minGivenCurrency))("max", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, exchange_r1.maxGivenCurrency));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041E\u0442\u0434\u0430\u0435\u0442\u0435 \u0432 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 12, exchange_r1.givenCurrency.currencyCode), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("reserve", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, exchange_r1.takenCurrency.reserve));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u0432 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 14, exchange_r1.takenCurrency.currencyCode), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.fields["givenCurrencyCard"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.fields["takenCurrencyCard"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.fields["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.fields["surname"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.fields["phone"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.fields["email"]);
} }
function SectionTradeSecondComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SectionTradeSecondComponent_ng_container_0_h2_1_Template, 2, 2, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SectionTradeSecondComponent_ng_container_0_app_error_message_2_Template, 1, 1, "app-error-message", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SectionTradeSecondComponent_ng_container_0_form_3_Template, 31, 22, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const exchange_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", exchange_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.hasError("invalidData"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form);
} }
class SectionTradeSecondComponent {
    constructor(store, webmoneyService) {
        this.store = store;
        this.webmoneyService = webmoneyService;
        this.fields = {};
        this.webmoneyErrorMessage = `Платежная система WebMoney не разрешает данный обмен. Возможно, это связано с
   тем, что кошельки не принадлежат одному WMID, не связаны, или данные
   участника системы Webmoney не совпадают с указанными.`;
    }
    ngOnInit() {
        this.store.dispatch(_store_actions_progress_actions__WEBPACK_IMPORTED_MODULE_4__["setCurrentProcess"]({ payload: 2 }));
        this.exchange$ = this.store.select(_store_index__WEBPACK_IMPORTED_MODULE_3__["getExchange"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((exchange) => !!exchange), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((exchange) => {
            this.takenCourse = exchange.takenCurrencyCourse;
            this.givenCourse = exchange.givenCurrencyCourse;
            for (const control of exchange.fields) {
                this.fields[control] = true;
            }
            this.initForm(exchange);
        }));
    }
    onCurrencyChange(property, value) {
        if (!value || value < 0) {
            return this.form.get(property).patchValue('');
        }
        let calculatedCurrency;
        if (property.startsWith('taken')) {
            calculatedCurrency = this.takenCourse * value;
        }
        else {
            calculatedCurrency = value / this.takenCourse;
        }
        if (property.startsWith('taken') && this.givenCourse > this.takenCourse) {
            calculatedCurrency = value / this.givenCourse;
        }
        this.form.get(property).patchValue(calculatedCurrency);
    }
    onSubmit(exchange) {
        if (!this.form.valid) {
            return;
        }
        const order = Object.assign(Object.assign({}, this.form.value), { phone: this.form.value.phone, givenCurrency: exchange.givenCurrency.id, takenCurrency: exchange.takenCurrency.id, givenCurrencyCourse: exchange.givenCurrencyCourse, takenCurrencyCourse: exchange.takenCurrencyCourse, merchant: exchange.merchant });
        this.store.dispatch(_store_actions_order_actions__WEBPACK_IMPORTED_MODULE_5__["createOrderStart"]({ payload: order }));
    }
    initForm(exchange) {
        const givenCurrency = exchange.givenCurrency;
        const takenCurrency = exchange.takenCurrency;
        const optionalControls = this.getOptionalControls(givenCurrency, takenCurrency);
        const controls = {
            givenCurrencyAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(exchange.minGivenCurrency),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(exchange.maxGivenCurrency),
                ],
            }),
            takenCurrencyAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(exchange.minGivenCurrency * exchange.takenCurrencyCourse),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(exchange.takenCurrency.reserve),
                ],
            }),
        };
        for (const control of exchange.fields) {
            controls[control] = optionalControls[control];
        }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](controls, {
            updateOn: 'submit',
        });
        if (exchange.enableWMInterface) {
            this.form.setAsyncValidators(this.webmoneyValidator.bind(this));
        }
    }
    getOptionalControls(givenCurrency, takenCurrency) {
        return {
            givenCurrencyCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(givenCurrency.validator && givenCurrency.validator.regex),
                ],
            }),
            takenCurrencyCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(takenCurrency.validator && takenCurrency.validator.regex),
                ],
            }),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            }),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{1,4}[0-9]{10}$'),
                ],
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            }),
        };
    }
    webmoneyValidator() {
        const order = Object.assign({}, this.form.value);
        return this.webmoneyService.check(order).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => (result ? null : { invalidData: true })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ invalidData: true })));
    }
}
SectionTradeSecondComponent.ɵfac = function SectionTradeSecondComponent_Factory(t) { return new (t || SectionTradeSecondComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_webmoney_service__WEBPACK_IMPORTED_MODULE_8__["WebmoneyService"])); };
SectionTradeSecondComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionTradeSecondComponent, selectors: [["app-section-trade-second"]], decls: 2, vars: 3, consts: [[4, "ngIf"], ["class", "title", 4, "ngIf"], [3, "message", 4, "ngIf"], ["class", "form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "title"], [3, "message"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "form__group", "min-max"], ["matInput", "", "required", "", "formControlName", "givenCurrencyAmount", 3, "input"], [1, "form__group", "reserve"], ["matInput", "", "required", "", "formControlName", "takenCurrencyAmount", 3, "input"], ["class", "row", 4, "ngIf"], ["class", "form__group", 4, "ngIf"], [1, "buttons"], ["mat-raised-button", "", "color", "accent", 1, "submit"], ["routerLink", "/", 1, "link--back"], [1, "terms-of-use"], [1, "text"], ["target", "_blank", "routerLink", "/terms-of-use", 1, "link"], [1, "form__group"], ["matInput", "", "required", "", "formControlName", "givenCurrencyCard"], ["matInput", "", "required", "", "formControlName", "takenCurrencyCard"], ["matInput", "", "required", "", "formControlName", "name"], ["matInput", "", "required", "", "formControlName", "surname"], ["matPrefix", ""], ["type", "tel", "matInput", "", "formControlName", "phone", "required", ""], ["matInput", "", "required", "", "formControlName", "email"]], template: function SectionTradeSecondComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SectionTradeSecondComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.exchange$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_10__["ErrorMessageComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatPrefix"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _shared_pipes_get_money_in_pipe__WEBPACK_IMPORTED_MODULE_15__["GetMoneyInPipe"]], styles: ["@charset \"UTF-8\";\n.form__group[_ngcontent-%COMP%] {\n  width: 47.5%;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.row[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 2rem;\n}\n.reserve[_ngcontent-%COMP%] {\n  position: relative;\n}\n.reserve[_ngcontent-%COMP%]::after {\n  content: \"\u0440\u0435\u0437\u0435\u0440\u0432: \" attr(reserve);\n  position: absolute;\n  left: 0;\n  bottom: -10px;\n  font-size: 1.2rem;\n  color: rgba(255, 255, 255, 0.2);\n}\n.min-max[_ngcontent-%COMP%] {\n  position: relative;\n}\n.min-max[_ngcontent-%COMP%]::after {\n  content: \"min: \" attr(min);\n  position: absolute;\n  left: 0;\n  bottom: -1rem;\n  font-size: 1.2rem;\n  color: rgba(255, 255, 255, 0.2);\n}\n.min-max[_ngcontent-%COMP%]::before {\n  content: \"max: \" attr(max);\n  position: absolute;\n  left: 5rem;\n  bottom: -1rem;\n  font-size: 1.2rem;\n  color: rgba(255, 255, 255, 0.2);\n}\n.terms-of-use[_ngcontent-%COMP%] {\n  width: 26rem;\n}\n.link[_ngcontent-%COMP%] {\n  color: #69f0ae;\n  text-decoration: none;\n}\n.submit[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n.link--back[_ngcontent-%COMP%] {\n  color: #fff;\n  display: block;\n  text-decoration: none;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2NvbXBvbmVudHMvc2VjdGlvbi10cmFkZS1zZWNvbmQvc2VjdGlvbi10cmFkZS1zZWNvbmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUdiO0VBQ0csWUFBQTtBQUROO0FBS0E7RUFDRyxhQUFBO0VBQ0EsOEJBQUE7QUFGSDtBQUdHO0VBQ0csbUJBQUE7QUFETjtBQUtBO0VBQ0csa0JBQUE7QUFGSDtBQUtBO0VBQ0csaUNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUZIO0FBS0E7RUFDRyxrQkFBQTtBQUZIO0FBS0E7RUFDRywwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBRkg7QUFLQTtFQUNHLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFGSDtBQUtBO0VBQ0csWUFBQTtBQUZIO0FBS0E7RUFDRyxjQ3REWTtFRHVEWixxQkFBQTtBQUZIO0FBS0E7RUFDRyxvQkFBQTtBQUZIO0FBS0E7RUFDRyxXQ2pFVztFRGtFWCxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBRkgiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vY29tcG9uZW50cy9zZWN0aW9uLXRyYWRlLXNlY29uZC9zZWN0aW9uLXRyYWRlLXNlY29uZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5mb3JtX19ncm91cCB7XG4gIHdpZHRoOiA0Ny41JTtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5yb3c6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5yZXNlcnZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucmVzZXJ2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcItGA0LXQt9C10YDQsjogXCIgYXR0cihyZXNlcnZlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IC0xMHB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuLm1pbi1tYXgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5taW4tbWF4OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwibWluOiBcIiBhdHRyKG1pbik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi5taW4tbWF4OjpiZWZvcmUge1xuICBjb250ZW50OiBcIm1heDogXCIgYXR0cihtYXgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDVyZW07XG4gIGJvdHRvbTogLTFyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG4udGVybXMtb2YtdXNlIHtcbiAgd2lkdGg6IDI2cmVtO1xufVxuXG4ubGluayB7XG4gIGNvbG9yOiAjNjlmMGFlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zdWJtaXQge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLmxpbmstLWJhY2sge1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufSIsIiRjb2xvci13aGl0ZTogI2ZmZjtcclxuJGNvbG9yLWJsYWNrOiAjMDAwO1xyXG4kY29sb3ItYWNjZW50OiAjNjlmMGFlO1xyXG4kY29sb3ItcHJpbWFyeTogIzcyMjY5MjtcclxuJGNvbG9yLXdhcm46ICNmNDQzMzY7XHJcbiRjb2xvci1ncmVlbjogZ3JlZW47XHJcbiRjb2xvci10ZWFsOiB0ZWFsO1xyXG4kY29sb3ItZ3JleTogZ3JleTtcclxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionTradeSecondComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section-trade-second',
                templateUrl: './section-trade-second.component.html',
                styleUrls: ['./section-trade-second.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }, { type: _core_services_webmoney_service__WEBPACK_IMPORTED_MODULE_8__["WebmoneyService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/main/components/section-trade-third/section-trade-third.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/main/components/section-trade-third/section-trade-third.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SectionTradeThirdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTradeThirdComponent", function() { return SectionTradeThirdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/index */ "./src/app/store/index.ts");
/* harmony import */ var _store_actions_progress_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../store/actions/progress.actions */ "./src/app/store/actions/progress.actions.ts");
/* harmony import */ var _store_actions_order_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/actions/order.actions */ "./src/app/store/actions/order.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _section_third_message_section_third_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../section-third-message/section-third-message.component */ "./src/app/modules/main/components/section-third-message/section-third-message.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");












function SectionTradeThirdComponent_ng_container_0_form_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SectionTradeThirdComponent_ng_container_0_section_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0414\u043B\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0433\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043E\u0431\u043C\u0435\u043D\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0421\u043E\u0432\u0435\u0440\u0448\u0438\u0442\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0434 \u0434\u043E \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0442\u0430\u0439\u043C\u0435\u0440\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u041A\u0443\u0440\u0441 \u043C\u043E\u0433 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C\u0441\u044F. \u041E\u0431\u043C\u0435\u043D \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u041F\u043E \u043A\u0443\u0440\u0441\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u041E\u0442\u0434\u0430\u0435\u0442\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u041F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SectionTradeThirdComponent_ng_container_0_section_2_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onRefuse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " \u041E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "app-section-third-message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u043E\u043F\u043B\u0430\u0442\u044B \u043F\u043E \u0437\u0430\u044F\u0432\u043A\u0435 \u2116 ", order_r1.number, " \u043E\u0442 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 17, order_r1.date, "dd.M.yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", order_r1.givenCurrencyAmount, " ", order_r1.givenCurrency.currencyCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 20, ctx_r3.timeLeft, "mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", order_r1.givenCurrencyCourse, " ", order_r1.givenCurrency.currencyCode, " : ", order_r1.takenCurrencyCourse, " ", order_r1.takenCurrency.currencyCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", order_r1.givenCurrencyAmount, " ", order_r1.givenCurrency.currencyCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", order_r1.givenCurrency.name, " ", order_r1.givenCurrency.card, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", order_r1.takenCurrencyAmount, " ", order_r1.takenCurrency.currencyCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", order_r1.takenCurrency.name, " ", order_r1.takenCurrency.card, " ");
} }
function SectionTradeThirdComponent_ng_container_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0415\u0441\u043B\u0438 \u043E\u043F\u043B\u0430\u0442\u0430 \u0431\u044B\u043B\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0430 \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u043C\u0435\u043D\u044B \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438, \u0438\u043B\u0438 \u0441\u0435\u0440\u0432\u0438\u0441 \u043D\u0435 \u0432\u0438\u0434\u0438\u0442 \u043E\u043F\u043B\u0430\u0442\u0443 \u043F\u043E \u0434\u0440\u0443\u0433\u0438\u043C \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C, \u043D\u0435 \u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0439\u0442\u0435, \u043C\u044B \u043D\u0430\u0439\u0434\u0435\u043C \u0432\u0430\u0448 \u043F\u043B\u0430\u0442\u0435\u0436 \u0432 \u0440\u0443\u0447\u043D\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0414\u043B\u044F \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0432 \u0441\u043B\u0443\u0436\u0431\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0442\u0438\u043A\u0435\u0442 \u0432 \u043D\u0430\u0448\u0435\u043C \u0445\u0435\u043B\u043F-\u0434\u0435\u0441. \u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0442\u0432\u0435\u0442\u044F\u0442 \u043D\u0430 \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435, \u043D\u0430\u0439\u0434\u0443\u0442 \u043F\u043B\u0430\u0442\u0435\u0436 \u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0442 \u043E\u0431\u043C\u0435\u043D. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u041D\u043E\u0432\u044B\u0439 \u043E\u0431\u043C\u0435\u043D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \u041E\u0431\u043C\u0435\u043D \u043E\u043F\u043B\u0430\u0442\u044B \u043F\u043E \u0437\u0430\u044F\u0432\u043A\u0435 \u2116 ", order_r1.number, " \u043E\u0442 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, order_r1.date, "dd.M.yyyy"), " \u043E\u0442\u043C\u0435\u043D\u0435\u043D ");
} }
function SectionTradeThirdComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SectionTradeThirdComponent_ng_container_0_form_1_Template, 7, 0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SectionTradeThirdComponent_ng_container_0_section_2_Template, 52, 23, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SectionTradeThirdComponent_ng_container_0_ng_template_3_Template, 11, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const order_r1 = ctx.ngIf;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r1.merchant);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isCanceled)("ngIfElse", _r4);
} }
class SectionTradeThirdComponent {
    constructor(store) {
        this.store = store;
        this.isCanceled = false;
    }
    ngOnInit() {
        this.store.dispatch(_store_actions_progress_actions__WEBPACK_IMPORTED_MODULE_3__["setCurrentProcess"]({ payload: 3 }));
        this.order$ = this.store.select(_store_index__WEBPACK_IMPORTED_MODULE_2__["getOrder"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((order) => !!order), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((order) => {
            if (order.status === 'canceled') {
                this.isCanceled = true;
                return;
            }
            const dueTime = new Date(order.date).getTime() + 15 * 60 * 1000;
            if (!this.timer) {
                this.timeLeft = dueTime - Date.now();
                this.setTimer(dueTime);
            }
        }));
    }
    onRefuse() {
        this.store.dispatch(_store_actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["cancelOrderStart"]());
    }
    setTimer(dueTime) {
        this.timer = setTimeout(() => {
            this.timeLeft = dueTime - Date.now();
            if (this.timeLeft <= 0) {
                this.isCanceled = true;
                return clearTimeout(this.timer);
            }
            this.setTimer(dueTime);
        }, 1000);
    }
}
SectionTradeThirdComponent.ɵfac = function SectionTradeThirdComponent_Factory(t) { return new (t || SectionTradeThirdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
SectionTradeThirdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionTradeThirdComponent, selectors: [["app-section-trade-third"]], decls: 2, vars: 3, consts: [[4, "ngIf"], ["ngNoForm", "", "accept-charset", "utf-8", "id", "pay", "name", "pay", "method", "POST", "action", "https://merchant.webmoney.ru/lmi/payment.asp", "accept-charset", "windows-1251", 4, "ngIf"], ["class", "section-payment", 4, "ngIf", "ngIfElse"], ["alternative", ""], ["ngNoForm", "", "accept-charset", "utf-8", "id", "pay", "name", "pay", "method", "POST", "action", "https://merchant.webmoney.ru/lmi/payment.asp", "accept-charset", "windows-1251"], ["type", "hidden", "name", "LMI_PAYMENT_AMOUNT", "value", "12.08"], ["type", "hidden", "name", "LMI_PAYMENT_DESC", "value", "\u043F\u043B\u0430\u0442\u0435\u0436 \u043F\u043E \u0441\u0447\u0435\u0442\u0443"], ["type", "hidden", "name", "LMI_PAYMENT_NO", "value", "1"], ["type", "hidden", "name", "LMI_PAYEE_PURSE", "value", "Z534212467591"], ["type", "hidden", "name", "LMI_SIM_MODE", "value", "0"], ["type", "submit", "value", "submit"], [1, "section-payment"], [1, "title"], [1, "content"], [1, "left"], [1, "text"], [1, "highlight"], [1, "timer"], [1, "dark-bg"], [1, "details"], [1, "top"], [1, "attention"], [1, "message"], [1, "info"], [1, "row"], [1, "color-grey"], [1, "value"], [1, "actions"], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "right"], [1, "section-canceled"], ["mat-raised-button", "", "color", "primary", "routerLink", "/"]], template: function SectionTradeThirdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SectionTradeThirdComponent_ng_container_0_Template, 5, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.order$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _section_third_message_section_third_message_component__WEBPACK_IMPORTED_MODULE_9__["SectionThirdMessageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".text[_ngcontent-%COMP%], .timer[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.dark-bg[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 15px;\n  padding: 5px;\n}\n\n.attention[_ngcontent-%COMP%], .message[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n\n.details[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n}\n\n.info[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.color-grey[_ngcontent-%COMP%] {\n  color: grey;\n  width: 50%;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.right[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  background: rgba(0, 0, 0, 0.25);\n  padding: 20px;\n  border-radius: 15px;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  color: #69f0ae;\n}\n\n.actions[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  justify-content: space-between;\n  justify-self: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2NvbXBvbmVudHMvc2VjdGlvbi10cmFkZS10aGlyZC9zZWN0aW9uLXRyYWRlLXRoaXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7RUFFRyxlQUFBO0FBREg7O0FBSUE7RUFDRyw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQURIOztBQUlBOztFQUVHLGlCQUFBO0FBREg7O0FBSUE7RUFDRyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFESDs7QUFJQTtFQUNHLGdCQUFBO0FBREg7O0FBSUE7RUFDRyxXQ3ZCVTtFRHdCVixVQUFBO0FBREg7O0FBSUE7RUFDRyxhQUFBO0FBREg7O0FBSUE7RUFDRyxhQUFBO0FBREg7O0FBSUE7RUFDRyxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBREg7O0FBSUE7RUFDRyxjQ2hEWTtBRCtDZjs7QUFJQTtFQUNHLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUFESCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9jb21wb25lbnRzL3NlY3Rpb24tdHJhZGUtdGhpcmQvc2VjdGlvbi10cmFkZS10aGlyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi50ZXh0LFxyXG4udGltZXIge1xyXG4gICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5kYXJrLWJnIHtcclxuICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC4zKTtcclxuICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYXR0ZW50aW9uLFxyXG4ubWVzc2FnZSB7XHJcbiAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgIHdpZHRoOiA1MDBweDtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uY29sb3ItZ3JleSB7XHJcbiAgIGNvbG9yOiAkY29sb3ItZ3JleTtcclxuICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMjUpO1xyXG4gICBwYWRkaW5nOiAyMHB4O1xyXG4gICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0IHtcclxuICAgY29sb3I6ICRjb2xvci1hY2NlbnQ7XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcbiIsIiRjb2xvci13aGl0ZTogI2ZmZjtcclxuJGNvbG9yLWJsYWNrOiAjMDAwO1xyXG4kY29sb3ItYWNjZW50OiAjNjlmMGFlO1xyXG4kY29sb3ItcHJpbWFyeTogIzcyMjY5MjtcclxuJGNvbG9yLXdhcm46ICNmNDQzMzY7XHJcbiRjb2xvci1ncmVlbjogZ3JlZW47XHJcbiRjb2xvci10ZWFsOiB0ZWFsO1xyXG4kY29sb3ItZ3JleTogZ3JleTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionTradeThirdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section-trade-third',
                templateUrl: './section-trade-third.component.html',
                styleUrls: ['./section-trade-third.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/main/components/section-trade/section-trade.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/main/components/section-trade/section-trade.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SectionTradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTradeComponent", function() { return SectionTradeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _section_trade_progress_section_trade_progress_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../section-trade-progress/section-trade-progress.component */ "./src/app/modules/main/components/section-trade-progress/section-trade-progress.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class SectionTradeComponent {
    constructor() { }
    ngOnInit() { }
}
SectionTradeComponent.ɵfac = function SectionTradeComponent_Factory(t) { return new (t || SectionTradeComponent)(); };
SectionTradeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionTradeComponent, selectors: [["app-section-trade"]], decls: 3, vars: 0, consts: [[1, "content"]], template: function SectionTradeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-section-trade-progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_section_trade_progress_section_trade_progress_component__WEBPACK_IMPORTED_MODULE_1__["SectionTradeProgressComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 0 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2NvbXBvbmVudHMvc2VjdGlvbi10cmFkZS9zZWN0aW9uLXRyYWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csYUFBQTtBQUNIOztBQUVBO0VBQ0csWUFBQTtFQUNBLGdCQUFBO0FBQ0giLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vY29tcG9uZW50cy9zZWN0aW9uLXRyYWRlL3NlY3Rpb24tdHJhZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgZmxleC1ncm93OiAxO1xyXG4gICBwYWRkaW5nOiAwIDEwcmVtO1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionTradeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section-trade',
                templateUrl: './section-trade.component.html',
                styleUrls: ['./section-trade.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/main/main-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/main/main-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/modules/main/components/main/main.component.ts");
/* harmony import */ var _components_section_about_section_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/section-about/section-about.component */ "./src/app/modules/main/components/section-about/section-about.component.ts");
/* harmony import */ var _components_section_rules_section_rules_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/section-rules/section-rules.component */ "./src/app/modules/main/components/section-rules/section-rules.component.ts");
/* harmony import */ var _components_section_tariffs_section_tariffs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/section-tariffs/section-tariffs.component */ "./src/app/modules/main/components/section-tariffs/section-tariffs.component.ts");
/* harmony import */ var _components_section_trade_first_section_trade_first_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/section-trade-first/section-trade-first.component */ "./src/app/modules/main/components/section-trade-first/section-trade-first.component.ts");
/* harmony import */ var _components_section_trade_second_section_trade_second_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/section-trade-second/section-trade-second.component */ "./src/app/modules/main/components/section-trade-second/section-trade-second.component.ts");
/* harmony import */ var _components_section_trade_third_section_trade_third_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/section-trade-third/section-trade-third.component */ "./src/app/modules/main/components/section-trade-third/section-trade-third.component.ts");
/* harmony import */ var _components_section_trade_section_trade_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/section-trade/section-trade.component */ "./src/app/modules/main/components/section-trade/section-trade.component.ts");
/* harmony import */ var _components_moneyback_policy_moneyback_policy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/moneyback-policy/moneyback-policy.component */ "./src/app/modules/main/components/moneyback-policy/moneyback-policy.component.ts");
/* harmony import */ var _core_resolvers_exchange_resolver_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/resolvers/exchange-resolver.service */ "./src/app/core/resolvers/exchange-resolver.service.ts");
/* harmony import */ var _core_resolvers_order_resolver_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/resolvers/order-resolver.service */ "./src/app/core/resolvers/order-resolver.service.ts");
/* harmony import */ var _core_guards_active_order_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/guards/active-order.guard */ "./src/app/core/guards/active-order.guard.ts");
















const routes = [
    {
        path: '',
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'exchanges',
            },
            {
                path: 'exchanges',
                component: _components_section_trade_section_trade_component__WEBPACK_IMPORTED_MODULE_9__["SectionTradeComponent"],
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        component: _components_section_trade_first_section_trade_first_component__WEBPACK_IMPORTED_MODULE_6__["SectionTradeFirstComponent"],
                        resolve: {
                            exchanges: _core_resolvers_exchange_resolver_service__WEBPACK_IMPORTED_MODULE_11__["ExchangeResolver"],
                        },
                    },
                    {
                        path: ':id',
                        component: _components_section_trade_second_section_trade_second_component__WEBPACK_IMPORTED_MODULE_7__["SectionTradeSecondComponent"],
                        resolve: {
                            exchange: _core_resolvers_exchange_resolver_service__WEBPACK_IMPORTED_MODULE_11__["ExchangeResolver"],
                        },
                    },
                    {
                        path: 'transaction/:id',
                        component: _components_section_trade_third_section_trade_third_component__WEBPACK_IMPORTED_MODULE_8__["SectionTradeThirdComponent"],
                        canActivate: [_core_guards_active_order_guard__WEBPACK_IMPORTED_MODULE_13__["ActiveOrderGuard"]],
                        resolve: {
                            order: _core_resolvers_order_resolver_service__WEBPACK_IMPORTED_MODULE_12__["OrderResolver"],
                        },
                    },
                ],
            },
            {
                path: 'about',
                component: _components_section_about_section_about_component__WEBPACK_IMPORTED_MODULE_3__["SectionAboutComponent"],
            },
            {
                path: 'terms-of-use',
                component: _components_section_rules_section_rules_component__WEBPACK_IMPORTED_MODULE_4__["SectionRulesComponent"],
            },
            {
                path: 'tariffs',
                component: _components_section_tariffs_section_tariffs_component__WEBPACK_IMPORTED_MODULE_5__["SectionTariffsComponent"],
                resolve: {
                    exchanges: _core_resolvers_exchange_resolver_service__WEBPACK_IMPORTED_MODULE_11__["ExchangeResolver"],
                },
            },
            {
                path: 'moneybackPolicy',
                component: _components_moneyback_policy_moneyback_policy_component__WEBPACK_IMPORTED_MODULE_10__["MoneybackPolicyComponent"],
            },
        ],
    },
];
class MainRoutingModule {
}
MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainRoutingModule });
MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/main/main.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/main/main.module.ts ***!
  \*********************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/modules/main/main-routing.module.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/modules/main/components/main/main.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/modules/main/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/modules/main/components/footer/footer.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/modules/main/components/nav/nav.component.ts");
/* harmony import */ var _components_section_trade_section_trade_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/section-trade/section-trade.component */ "./src/app/modules/main/components/section-trade/section-trade.component.ts");
/* harmony import */ var _components_section_trade_progress_section_trade_progress_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/section-trade-progress/section-trade-progress.component */ "./src/app/modules/main/components/section-trade-progress/section-trade-progress.component.ts");
/* harmony import */ var _components_section_trade_first_section_trade_first_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/section-trade-first/section-trade-first.component */ "./src/app/modules/main/components/section-trade-first/section-trade-first.component.ts");
/* harmony import */ var _components_section_about_section_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/section-about/section-about.component */ "./src/app/modules/main/components/section-about/section-about.component.ts");
/* harmony import */ var _components_section_trade_second_section_trade_second_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/section-trade-second/section-trade-second.component */ "./src/app/modules/main/components/section-trade-second/section-trade-second.component.ts");
/* harmony import */ var _components_section_rules_section_rules_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/section-rules/section-rules.component */ "./src/app/modules/main/components/section-rules/section-rules.component.ts");
/* harmony import */ var _components_section_tariffs_section_tariffs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/section-tariffs/section-tariffs.component */ "./src/app/modules/main/components/section-tariffs/section-tariffs.component.ts");
/* harmony import */ var _components_section_trade_third_section_trade_third_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/section-trade-third/section-trade-third.component */ "./src/app/modules/main/components/section-trade-third/section-trade-third.component.ts");
/* harmony import */ var _components_moneyback_policy_moneyback_policy_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/moneyback-policy/moneyback-policy.component */ "./src/app/modules/main/components/moneyback-policy/moneyback-policy.component.ts");
/* harmony import */ var _components_section_third_message_section_third_message_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/section-third-message/section-third-message.component */ "./src/app/modules/main/components/section-third-message/section-third-message.component.ts");


















class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[_main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _components_section_trade_section_trade_component__WEBPACK_IMPORTED_MODULE_7__["SectionTradeComponent"], _components_section_trade_progress_section_trade_progress_component__WEBPACK_IMPORTED_MODULE_8__["SectionTradeProgressComponent"], _components_section_trade_first_section_trade_first_component__WEBPACK_IMPORTED_MODULE_9__["SectionTradeFirstComponent"], _components_section_about_section_about_component__WEBPACK_IMPORTED_MODULE_10__["SectionAboutComponent"], _components_section_trade_second_section_trade_second_component__WEBPACK_IMPORTED_MODULE_11__["SectionTradeSecondComponent"], _components_section_rules_section_rules_component__WEBPACK_IMPORTED_MODULE_12__["SectionRulesComponent"], _components_section_tariffs_section_tariffs_component__WEBPACK_IMPORTED_MODULE_13__["SectionTariffsComponent"], _components_section_trade_third_section_trade_third_component__WEBPACK_IMPORTED_MODULE_14__["SectionTradeThirdComponent"], _components_moneyback_policy_moneyback_policy_component__WEBPACK_IMPORTED_MODULE_15__["MoneybackPolicyComponent"], _components_section_third_message_section_third_message_component__WEBPACK_IMPORTED_MODULE_16__["SectionThirdMessageComponent"]], imports: [_main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _components_section_trade_section_trade_component__WEBPACK_IMPORTED_MODULE_7__["SectionTradeComponent"], _components_section_trade_progress_section_trade_progress_component__WEBPACK_IMPORTED_MODULE_8__["SectionTradeProgressComponent"], _components_section_trade_first_section_trade_first_component__WEBPACK_IMPORTED_MODULE_9__["SectionTradeFirstComponent"], _components_section_about_section_about_component__WEBPACK_IMPORTED_MODULE_10__["SectionAboutComponent"], _components_section_trade_second_section_trade_second_component__WEBPACK_IMPORTED_MODULE_11__["SectionTradeSecondComponent"], _components_section_rules_section_rules_component__WEBPACK_IMPORTED_MODULE_12__["SectionRulesComponent"], _components_section_tariffs_section_tariffs_component__WEBPACK_IMPORTED_MODULE_13__["SectionTariffsComponent"], _components_section_trade_third_section_trade_third_component__WEBPACK_IMPORTED_MODULE_14__["SectionTradeThirdComponent"], _components_moneyback_policy_moneyback_policy_component__WEBPACK_IMPORTED_MODULE_15__["MoneybackPolicyComponent"], _components_section_third_message_section_third_message_component__WEBPACK_IMPORTED_MODULE_16__["SectionThirdMessageComponent"]],
                imports: [_main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-main-main-module.js.map