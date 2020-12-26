(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | modules-main-main-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-main-main-module")]).then(__webpack_require__.bind(null, /*! ./modules/main/main.module */ "./src/app/modules/main/main.module.ts")).then((m) => m.MainModule),
    },
    {
        path: 'admin-dashboard',
        loadChildren: () => Promise.all(/*! import() | modules-admin-admin-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-admin-admin-module")]).then(__webpack_require__.bind(null, /*! ./modules/admin/admin.module */ "./src/app/modules/admin/admin.module.ts")).then((m) => m.AdminModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _store_effects_exchange_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/effects/exchange.effects */ "./src/app/store/effects/exchange.effects.ts");
/* harmony import */ var _store_effects_order_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/effects/order.effects */ "./src/app/store/effects/order.effects.ts");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/index */ "./src/app/store/index.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/ngrx-router-store.js");
/* harmony import */ var _store_custom_route_serializer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/custom-route-serializer */ "./src/app/store/custom-route-serializer.ts");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_store_index__WEBPACK_IMPORTED_MODULE_10__["appReducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_store_effects_exchange_effects__WEBPACK_IMPORTED_MODULE_8__["ExchangeEffects"], _store_effects_order_effects__WEBPACK_IMPORTED_MODULE_9__["OrderEffects"]]),
            _core_core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"],
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_11__["StoreRouterConnectingModule"].forRoot({
                serializer: _store_custom_route_serializer__WEBPACK_IMPORTED_MODULE_12__["CustomSerializer"],
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsRootModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_11__["StoreRouterConnectingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_store_index__WEBPACK_IMPORTED_MODULE_10__["appReducers"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_store_effects_exchange_effects__WEBPACK_IMPORTED_MODULE_8__["ExchangeEffects"], _store_effects_order_effects__WEBPACK_IMPORTED_MODULE_9__["OrderEffects"]]),
                    _core_core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"],
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_11__["StoreRouterConnectingModule"].forRoot({
                        serializer: _store_custom_route_serializer__WEBPACK_IMPORTED_MODULE_12__["CustomSerializer"],
                    }),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/services/common.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/common.service.ts ***!
  \*************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CommonService {
    constructor() { }
    changeId(obj) {
        obj.id = obj._id;
        delete obj._id;
        return obj;
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/services/exchange.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/exchange.service.ts ***!
  \***************************************************/
/*! exports provided: ExchangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeService", function() { return ExchangeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.service */ "./src/app/core/services/common.service.ts");





const ENDPOINT_URL = '/api/v1/exchanges/';
class ExchangeService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    createExchange(exchange) {
        return this.http.post(ENDPOINT_URL, exchange).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.commonService.changeId), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((ex) => {
            ex.givenCurrency.id = ex.givenCurrency._id;
            delete ex.givenCurrency._id;
            ex.takenCurrency.id = ex.takenCurrency._id;
            delete ex.takenCurrency._id;
            return ex;
        }));
    }
    getExchanges() {
        return this.http.get(ENDPOINT_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((exchanges) => exchanges.map(this.commonService.changeId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((exchanges) => {
            return exchanges.map((ex) => {
                ex.givenCurrency.id = ex.givenCurrency._id;
                delete ex.givenCurrency._id;
                ex.takenCurrency.id = ex.takenCurrency._id;
                delete ex.takenCurrency._id;
                return ex;
            });
        }));
    }
    deleteExchange(id) {
        return this.http
            .delete(ENDPOINT_URL + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.commonService.changeId));
    }
    getExchange(id) {
        return this.http
            .get(ENDPOINT_URL + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.commonService.changeId));
    }
    updateExchange(id, exchange) {
        return this.http
            .put(ENDPOINT_URL + id, exchange)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.commonService.changeId));
    }
}
ExchangeService.ɵfac = function ExchangeService_Factory(t) { return new (t || ExchangeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
ExchangeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExchangeService, factory: ExchangeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExchangeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/order.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/order.service.ts ***!
  \************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.service */ "./src/app/core/services/common.service.ts");






const END_POINT = '/api/v1/orders/';
class OrderService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    createOrder(order) {
        return this.http
            .post(END_POINT, order)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.commonService.changeId));
    }
    getOrders(opt) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"](),
        };
        for (const key in opt) {
            if (key in opt) {
                options.params = options.params.set(key, opt[key]);
            }
        }
        return this.http.get(END_POINT, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((orders) => orders.map(this.commonService.changeId)));
    }
    getOrder(id) {
        return this.http
            .get(END_POINT + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.commonService.changeId));
    }
    isActiveOrder(id) {
        return this.http
            .get(END_POINT + 'isActiveOrder/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'));
    }
    deleteOrder(ids) {
        return this.http
            .post(END_POINT + 'deleteManyById', ids)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'));
    }
    cancelOrder(id) {
        return this.http
            .get(END_POINT + 'cancelOrder/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => true));
    }
    updateOrder(ids, status) {
        return this.http
            .put(END_POINT + 'updateManyById', {
            ids,
            status,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((orders) => orders.map(this.commonService.changeId)));
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/currency-img/currency-img.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/currency-img/currency-img.component.ts ***!
  \**************************************************************************/
/*! exports provided: CurrencyImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyImgComponent", function() { return CurrencyImgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CurrencyImgComponent {
}
CurrencyImgComponent.ɵfac = function CurrencyImgComponent_Factory(t) { return new (t || CurrencyImgComponent)(); };
CurrencyImgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrencyImgComponent, selectors: [["app-currency-img"]], inputs: { icon: "icon", alt: "alt" }, decls: 2, vars: 2, consts: [[1, "img-container"], [1, "img", 3, "src", "alt"]], template: function CurrencyImgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", ctx.alt, " logo");
    } }, styles: [".img-container[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 3rem;\n  margin-right: 1rem;\n}\n\n.img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY3VycmVuY3ktaW1nL2N1cnJlbmN5LWltZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSDs7QUFFQTtFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFDSCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2N1cnJlbmN5LWltZy9jdXJyZW5jeS1pbWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWNvbnRhaW5lciB7XHJcbiAgIHdpZHRoOiA0cmVtO1xyXG4gICBoZWlnaHQ6IDNyZW07XHJcbiAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbiAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyImgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-currency-img',
                templateUrl: './currency-img.component.html',
                styleUrls: ['./currency-img.component.scss'],
            }]
    }], null, { icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], alt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/error-message/error-message.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/error-message/error-message.component.ts ***!
  \****************************************************************************/
/*! exports provided: ErrorMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageComponent", function() { return ErrorMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ErrorMessageComponent {
    constructor() { }
    ngOnInit() { }
}
ErrorMessageComponent.ɵfac = function ErrorMessageComponent_Factory(t) { return new (t || ErrorMessageComponent)(); };
ErrorMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorMessageComponent, selectors: [["app-error-message"]], inputs: { message: "message" }, decls: 2, vars: 1, consts: [[1, "error"]], template: function ErrorMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, "\n");
    } }, styles: [".error[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-bottom: 1px solid #f44336;\n  background: linear-gradient(180deg, rgba(34, 193, 195, 0) 0%, rgba(244, 67, 54, 0.2024160006) 100%);\n  border-radius: 15px 15px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZXJyb3ItbWVzc2FnZS9lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0csYUFBQTtFQUNBLGdDQUFBO0VBQ0EsbUdBQUE7RUFNQSw0QkFBQTtBQU5IIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZXJyb3ItbWVzc2FnZS9lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmVycm9yIHtcclxuICAgcGFkZGluZzogMnJlbTtcclxuICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci13YXJuO1xyXG4gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDE4MGRlZyxcclxuICAgICAgcmdiYSgzNCwgMTkzLCAxOTUsIDApIDAlLFxyXG4gICAgICByZ2JhKCRjb2xvci13YXJuLCAwLjIwMjQxNjAwMDU3OTkxOTUpIDEwMCVcclxuICAgKTtcclxuXHJcbiAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-message',
                templateUrl: './error-message.component.html',
                styleUrls: ['./error-message.component.scss'],
            }]
    }], function () { return []; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
















class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/get-money-in.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/get-money-in.pipe.ts ***!
  \***************************************************/
/*! exports provided: GetMoneyInPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMoneyInPipe", function() { return GetMoneyInPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GetMoneyInPipe {
    constructor() {
        this.currencyNames = {
            EUR: 'евро',
            UAH: 'гривнах',
            USD: 'долларах',
            RUB: 'рублях',
        };
    }
    transform(value) {
        return this.currencyNames[value];
    }
}
GetMoneyInPipe.ɵfac = function GetMoneyInPipe_Factory(t) { return new (t || GetMoneyInPipe)(); };
GetMoneyInPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "getMoneyIn", type: GetMoneyInPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetMoneyInPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'getMoneyIn',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/status.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/status.pipe.ts ***!
  \*********************************************/
/*! exports provided: StatusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusPipe", function() { return StatusPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StatusPipe {
    constructor() {
        this.statuses = {
            freezed: 'Приостановлена',
            done: 'Выполнена',
            pending: 'Ожидается',
            canceled: 'Отменена',
            paid: 'Оплачена',
        };
    }
    transform(value, ...args) {
        return this.statuses[value];
    }
}
StatusPipe.ɵfac = function StatusPipe_Factory(t) { return new (t || StatusPipe)(); };
StatusPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "status", type: StatusPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'status',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _pipes_status_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/status.pipe */ "./src/app/shared/pipes/status.pipe.ts");
/* harmony import */ var _components_currency_img_currency_img_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/currency-img/currency-img.component */ "./src/app/shared/components/currency-img/currency-img.component.ts");
/* harmony import */ var _pipes_get_money_in_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/get-money-in.pipe */ "./src/app/shared/pipes/get-money-in.pipe.ts");
/* harmony import */ var _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/error-message/error-message.component */ "./src/app/shared/components/error-message/error-message.component.ts");









class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipes_status_pipe__WEBPACK_IMPORTED_MODULE_4__["StatusPipe"],
        _components_currency_img_currency_img_component__WEBPACK_IMPORTED_MODULE_5__["CurrencyImgComponent"],
        _pipes_get_money_in_pipe__WEBPACK_IMPORTED_MODULE_6__["GetMoneyInPipe"],
        _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_7__["ErrorMessageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _pipes_status_pipe__WEBPACK_IMPORTED_MODULE_4__["StatusPipe"],
        _components_currency_img_currency_img_component__WEBPACK_IMPORTED_MODULE_5__["CurrencyImgComponent"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _pipes_get_money_in_pipe__WEBPACK_IMPORTED_MODULE_6__["GetMoneyInPipe"],
        _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_7__["ErrorMessageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _pipes_status_pipe__WEBPACK_IMPORTED_MODULE_4__["StatusPipe"],
                    _components_currency_img_currency_img_component__WEBPACK_IMPORTED_MODULE_5__["CurrencyImgComponent"],
                    _pipes_get_money_in_pipe__WEBPACK_IMPORTED_MODULE_6__["GetMoneyInPipe"],
                    _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_7__["ErrorMessageComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"]],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _pipes_status_pipe__WEBPACK_IMPORTED_MODULE_4__["StatusPipe"],
                    _components_currency_img_currency_img_component__WEBPACK_IMPORTED_MODULE_5__["CurrencyImgComponent"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _pipes_get_money_in_pipe__WEBPACK_IMPORTED_MODULE_6__["GetMoneyInPipe"],
                    _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_7__["ErrorMessageComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/store/actions/exchange.actions.ts":
/*!***************************************************!*\
  !*** ./src/app/store/actions/exchange.actions.ts ***!
  \***************************************************/
/*! exports provided: addExchangeStart, addExchangeSuccess, loadExchangesStart, loadExchangesSuccess, deleteExchangeStart, deleteExchangeSuccess, loadExchangeStart, loadExchangeSuccess, editExchangeStart, editExchangeSuccess, exchangeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExchangeStart", function() { return addExchangeStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExchangeSuccess", function() { return addExchangeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadExchangesStart", function() { return loadExchangesStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadExchangesSuccess", function() { return loadExchangesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteExchangeStart", function() { return deleteExchangeStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteExchangeSuccess", function() { return deleteExchangeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadExchangeStart", function() { return loadExchangeStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadExchangeSuccess", function() { return loadExchangeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editExchangeStart", function() { return editExchangeStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editExchangeSuccess", function() { return editExchangeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exchangeError", function() { return exchangeError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const addExchangeStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[EXCHANGE] ADD EXCHANGE START', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addExchangeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[EXCHANGE] ADD EXCHANGE SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadExchangesStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[EXCHANGE] LOAD EXCHANGES START');
const loadExchangesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[EXCHANGE] LOAD EXCHANGES SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteExchangeStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[EXCHANGE] DELETE EXCHANGE START]', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteExchangeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[EXCHANGE] DELETE EXCHANGE SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadExchangeStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[EXCHANGE] LOAD EXCHANGE START', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadExchangeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[EXCHANGE] LOAD EXCHANGE SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const editExchangeStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[EXCHANGE] EDIT EXCHANGE START', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const editExchangeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[EXCHANGE] EDIT EXCHANGE SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const exchangeError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[EXCHANGE] ERROR', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/store/actions/order.actions.ts":
/*!************************************************!*\
  !*** ./src/app/store/actions/order.actions.ts ***!
  \************************************************/
/*! exports provided: createOrderStart, createOrderSuccess, getOrdersStart, getOrdersSuccess, getOrderStart, getOrderSuccess, deleteOrdersStart, deleteOrdersSuccess, updateOrdersStart, updateOrdersSuccess, cancelOrderStart, cancelOrderSuccess, addOrder, orderError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrderStart", function() { return createOrderStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrderSuccess", function() { return createOrderSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrdersStart", function() { return getOrdersStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrdersSuccess", function() { return getOrdersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderStart", function() { return getOrderStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderSuccess", function() { return getOrderSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOrdersStart", function() { return deleteOrdersStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOrdersSuccess", function() { return deleteOrdersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOrdersStart", function() { return updateOrdersStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOrdersSuccess", function() { return updateOrdersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelOrderStart", function() { return cancelOrderStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelOrderSuccess", function() { return cancelOrderSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrder", function() { return addOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderError", function() { return orderError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const createOrderStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ORDER] CREATE START', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createOrderSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ORDER] CREATE SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getOrdersStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ORDER] GET ORDERS START');
const getOrdersSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ORDER] GET ORDERS SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getOrderStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ORDER] GET ORDER START', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getOrderSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ORDER] GET ORDER SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteOrdersStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ORDER] DELETE ORDERS START', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteOrdersSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ORDER] DELETE ORDERS SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateOrdersStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ORDER] UPDATE ORDERS START', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateOrdersSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ORDER] UPDATE ORDERS SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const cancelOrderStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ORDER] CANCEL ORDER START');
const cancelOrderSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ORDER] CANCEL ORDER SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addOrder = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ORDER] ADD ORDER', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const orderError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ORDER] ERROR', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/store/actions/progress.actions.ts":
/*!***************************************************!*\
  !*** ./src/app/store/actions/progress.actions.ts ***!
  \***************************************************/
/*! exports provided: setCurrentProcess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentProcess", function() { return setCurrentProcess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const setCurrentProcess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PROGRESS] SET', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/store/custom-route-serializer.ts":
/*!**************************************************!*\
  !*** ./src/app/store/custom-route-serializer.ts ***!
  \**************************************************/
/*! exports provided: CustomSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return CustomSerializer; });
class CustomSerializer {
    serialize(routerState) {
        const { url } = routerState;
        const { queryParams } = routerState.root;
        let state = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params } = state;
        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return { url, params, queryParams };
    }
}


/***/ }),

/***/ "./src/app/store/effects/exchange.effects.ts":
/*!***************************************************!*\
  !*** ./src/app/store/effects/exchange.effects.ts ***!
  \***************************************************/
/*! exports provided: ExchangeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeEffects", function() { return ExchangeEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _actions_exchange_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/exchange.actions */ "./src/app/store/actions/exchange.actions.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "./src/app/store/index.ts");
/* harmony import */ var _core_services_exchange_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/exchange.service */ "./src/app/core/services/exchange.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











class ExchangeEffects {
    constructor(exchangeService, actions$, store, router) {
        this.exchangeService = exchangeService;
        this.actions$ = actions$;
        this.store = store;
        this.router = router;
        this.createExchange$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_4__["addExchangeStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((action) => this.exchangeService.createExchange(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((exchange) => _actions_exchange_actions__WEBPACK_IMPORTED_MODULE_4__["addExchangeSuccess"]({
            payload: exchange,
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_4__["exchangeError"]({ payload: error.message })))))));
        this.exchangeNavigate$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_4__["addExchangeSuccess"], _actions_exchange_actions__WEBPACK_IMPORTED_MODULE_4__["editExchangeSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.router.navigate(['admin-dashboard/exchanges-show']);
        })), { dispatch: false });
        this.loadExchanges$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_4__["loadExchangesStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((action) => this.exchangeService.getExchanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((exchanges) => _actions_exchange_actions__WEBPACK_IMPORTED_MODULE_4__["loadExchangesSuccess"]({
            payload: exchanges,
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_4__["exchangeError"]({
            payload: error.message,
        })))))));
        this.deleteExchange$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_4__["deleteExchangeStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((action) => this.exchangeService.deleteExchange(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((exchange) => _actions_exchange_actions__WEBPACK_IMPORTED_MODULE_4__["deleteExchangeSuccess"]({ payload: exchange })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_4__["exchangeError"]({ payload: error.message })))))));
        this.loadExchange$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_4__["loadExchangeStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((action) => this.exchangeService.getExchange(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((exchange) => _actions_exchange_actions__WEBPACK_IMPORTED_MODULE_4__["loadExchangeSuccess"]({ payload: exchange })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_4__["exchangeError"]({ payload: error.message })))))));
        this.updatedExchange$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_4__["editExchangeStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.store.select(_index__WEBPACK_IMPORTED_MODULE_5__["selectRouterParamId"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(([action, id]) => this.exchangeService
            .updateExchange(id || action.payload.id, action.payload.body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((exchange) => _actions_exchange_actions__WEBPACK_IMPORTED_MODULE_4__["editExchangeSuccess"]({ payload: exchange })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_4__["exchangeError"]({
            payload: error.message,
        })))))));
    }
}
ExchangeEffects.ɵfac = function ExchangeEffects_Factory(t) { return new (t || ExchangeEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_exchange_service__WEBPACK_IMPORTED_MODULE_6__["ExchangeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
ExchangeEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExchangeEffects, factory: ExchangeEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExchangeEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_exchange_service__WEBPACK_IMPORTED_MODULE_6__["ExchangeService"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/effects/order.effects.ts":
/*!************************************************!*\
  !*** ./src/app/store/effects/order.effects.ts ***!
  \************************************************/
/*! exports provided: OrderEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderEffects", function() { return OrderEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _actions_order_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/order.actions */ "./src/app/store/actions/order.actions.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "./src/app/store/index.ts");
/* harmony import */ var _core_services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../core/services/order.service */ "./src/app/core/services/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");











class OrderEffects {
    constructor(orderService, actions$, router, store) {
        this.orderService = orderService;
        this.actions$ = actions$;
        this.router = router;
        this.store = store;
        this.createOrder$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["createOrderStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((action) => this.orderService.createOrder(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((order) => this.router.navigate(['/exchanges/transaction/', order.id])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((order) => _actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["createOrderSuccess"]({ payload: order })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["orderError"]({ payload: error.message })))))));
        this.getOrders$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["getOrdersStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(() => this.store.select(_index__WEBPACK_IMPORTED_MODULE_5__["getRouterQueryParams"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((queryParams) => {
            return this.orderService.getOrders(queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((orders) => _actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["getOrdersSuccess"]({ payload: orders })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["orderError"]({ payload: error.message }))));
        })));
        this.getOrder$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["getOrderStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((action) => this.orderService.getOrder(action.payload.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((order) => _actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["getOrderSuccess"]({ payload: order })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            this.router.navigate(['/admin-dashboard/orders-show']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["orderError"]({ payload: error.message }));
        })))));
        this.deleteOrder$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["deleteOrdersStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((action) => this.orderService.deleteOrder(action.payload.ids).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((ids) => _actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["deleteOrdersSuccess"]({ payload: { ids } })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.router.navigate(['/admin-dashboard/orders-show'])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["orderError"]({ payload: error.message })))))));
        this.updateOrder$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["updateOrdersStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((action) => this.orderService
            .updateOrder(action.payload.ids, action.payload.status)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((orders) => _actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["updateOrdersSuccess"]({
            payload: { orders },
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["orderError"]({ payload: error.message })))))));
        this.cancelOrder$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["cancelOrderStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(() => this.store.select(_index__WEBPACK_IMPORTED_MODULE_5__["selectRouterParamId"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((id) => this.orderService.cancelOrder(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => _actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["cancelOrderSuccess"]({
            payload: { id },
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["orderError"]({ payload: error.message })))))));
    }
}
OrderEffects.ɵfac = function OrderEffects_Factory(t) { return new (t || OrderEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"])); };
OrderEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderEffects, factory: OrderEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: appReducers, getRouterState, selectRouterParamId, getCurrentUrl, getRouterQueryParams, exchangeState, getExchangesEntities, getAllExchanges, getExchange, getExchangeError, orderState, getOrdersEntities, getAllOrders, getOrder, getOrderError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouterState", function() { return getRouterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouterParamId", function() { return selectRouterParamId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUrl", function() { return getCurrentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouterQueryParams", function() { return getRouterQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exchangeState", function() { return exchangeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExchangesEntities", function() { return getExchangesEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllExchanges", function() { return getAllExchanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExchange", function() { return getExchange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExchangeError", function() { return getExchangeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderState", function() { return orderState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrdersEntities", function() { return getOrdersEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllOrders", function() { return getAllOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrder", function() { return getOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderError", function() { return getOrderError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _reducers_exchange_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/exchange.reducer */ "./src/app/store/reducers/exchange.reducer.ts");
/* harmony import */ var _reducers_progress_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/progress.reducer */ "./src/app/store/reducers/progress.reducer.ts");
/* harmony import */ var _reducers_order_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/order.reducer */ "./src/app/store/reducers/order.reducer.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/ngrx-router-store.js");





const appReducers = {
    exchange: _reducers_exchange_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    progress: _reducers_progress_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    order: _reducers_order_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"],
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["routerReducer"],
};
const getRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('router');
const selectRouterParamId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRouterState, (router) => router && router.state.params.id);
const getCurrentUrl = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRouterState, (router) => router && router.state.url);
const getRouterQueryParams = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRouterState, (router) => router && router.state.queryParams);
const exchangeState = (state) => state.exchange;
const getExchangesEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(exchangeState, _reducers_exchange_reducer__WEBPACK_IMPORTED_MODULE_1__["getExchangesEntities"]);
const getAllExchanges = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getExchangesEntities, (entities) => Object.keys(entities).map((id) => entities[id]));
const getExchange = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getExchangesEntities, getRouterState, (entities, router) => router.state && entities[router.state.params.id]);
const getExchangeError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(exchangeState, _reducers_exchange_reducer__WEBPACK_IMPORTED_MODULE_1__["getExchangeError"]);
const orderState = (state) => state.order;
const getOrdersEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(orderState, _reducers_order_reducer__WEBPACK_IMPORTED_MODULE_3__["getOrdersEntities"]);
const getAllOrders = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(orderState, getRouterState, (state, router) => {
    return Object.keys(state.entities).map((id) => state.entities[id]);
});
const getOrder = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getOrdersEntities, getRouterState, (entities, router) => router.state && entities[router.state.params.id]);
const getOrderError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(orderState, _reducers_order_reducer__WEBPACK_IMPORTED_MODULE_3__["getOrderError"]);


/***/ }),

/***/ "./src/app/store/reducers/exchange.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/store/reducers/exchange.reducer.ts ***!
  \****************************************************/
/*! exports provided: adapter, initialState, reducer, getExchangesEntities, getExchangeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExchangesEntities", function() { return getExchangesEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExchangeError", function() { return getExchangeError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _actions_exchange_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/exchange.actions */ "./src/app/store/actions/exchange.actions.ts");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/ngrx-entity.js");



const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    exchangeError: null,
});
const exchangeReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_1__["addExchangeSuccess"], (state, { payload }) => adapter.addOne(payload, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_1__["loadExchangesSuccess"], (state, { payload }) => adapter.addMany(payload, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_1__["deleteExchangeSuccess"], (state, { payload }) => adapter.removeOne(payload.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_1__["loadExchangeSuccess"], (state, { payload }) => adapter.setOne(payload, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_1__["editExchangeSuccess"], (state, { payload }) => adapter.setOne(payload, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_1__["exchangeError"], (state, { payload }) => (Object.assign(Object.assign({}, state), { exchangeError: payload }))));
function reducer(state, action) {
    return exchangeReducer(state, action);
}
const getExchangesEntities = (state) => state.entities;
const getExchangeError = (state) => state.exchangeError;


/***/ }),

/***/ "./src/app/store/reducers/order.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/order.reducer.ts ***!
  \*************************************************/
/*! exports provided: adapter, initialState, reducer, getOrdersEntities, getOrderError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrdersEntities", function() { return getOrdersEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderError", function() { return getOrderError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _actions_order_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/order.actions */ "./src/app/store/actions/order.actions.ts");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/ngrx-entity.js");



const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    error: null,
});
const orderReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["createOrderSuccess"], (state, { payload }) => adapter.addOne(payload, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["getOrdersSuccess"], (state, { payload }) => {
    const newState = adapter.removeAll(state);
    return adapter.addMany(payload, newState);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["getOrderSuccess"], (state, { payload }) => adapter.setOne(payload, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["deleteOrdersSuccess"], (state, { payload }) => adapter.removeMany(payload.ids, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["addOrder"], (state, { payload }) => adapter.setOne(payload, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["updateOrdersSuccess"], (state, { payload }) => adapter.upsertMany(payload.orders, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["cancelOrderSuccess"], (state, { payload }) => adapter.updateOne({
    id: payload.id,
    changes: Object.assign(Object.assign({}, state.entities[payload.id]), { status: 'canceled' }),
}, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["orderError"], (state, { payload }) => (Object.assign(Object.assign({}, state), { error: payload }))));
function reducer(state, action) {
    return orderReducer(state, action);
}
const getOrdersEntities = (state) => state.entities;
const getOrderError = (state) => state.error;


/***/ }),

/***/ "./src/app/store/reducers/progress.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/store/reducers/progress.reducer.ts ***!
  \****************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _actions_progress_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/progress.actions */ "./src/app/store/actions/progress.actions.ts");


const initialState = {
    currentProgress: 1,
};
const progressReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_progress_actions__WEBPACK_IMPORTED_MODULE_1__["setCurrentProcess"], (state, { payload }) => (Object.assign(Object.assign({}, state), { currentProgress: payload }))));
function reducer(state, action) {
    return progressReducer(state, action);
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\angular\second\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map