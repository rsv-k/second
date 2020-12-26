(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/core/resolvers/exchange-resolver.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/resolvers/exchange-resolver.service.ts ***!
  \*************************************************************/
/*! exports provided: ExchangeResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeResolver", function() { return ExchangeResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/index */ "./src/app/store/index.ts");
/* harmony import */ var _store_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/exchange.actions */ "./src/app/store/actions/exchange.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");






class ExchangeResolver {
    constructor(store) {
        this.store = store;
    }
    resolve(route) {
        const id = route.paramMap.get('id');
        if (id) {
            return this.store.select(_store_index__WEBPACK_IMPORTED_MODULE_2__["getExchange"], { id }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((exchange) => {
                if (!exchange) {
                    this.store.dispatch(_store_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_3__["loadExchangeStart"]({ payload: id }));
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((exchange) => !!exchange), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
        }
        this.store.dispatch(_store_actions_exchange_actions__WEBPACK_IMPORTED_MODULE_3__["loadExchangesStart"]());
        return this.store.select(_store_index__WEBPACK_IMPORTED_MODULE_2__["getAllExchanges"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((exchanges) => !!exchanges.length), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
}
ExchangeResolver.ɵfac = function ExchangeResolver_Factory(t) { return new (t || ExchangeResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
ExchangeResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExchangeResolver, factory: ExchangeResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExchangeResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/resolvers/order-resolver.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/resolvers/order-resolver.service.ts ***!
  \**********************************************************/
/*! exports provided: OrderResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderResolver", function() { return OrderResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/index */ "./src/app/store/index.ts");
/* harmony import */ var _store_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/order.actions */ "./src/app/store/actions/order.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");






class OrderResolver {
    constructor(store) {
        this.store = store;
    }
    resolve(route) {
        const id = route.paramMap.get('id');
        if (id) {
            return this.store.select(_store_index__WEBPACK_IMPORTED_MODULE_2__["getOrder"], { id }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((order) => {
                if (!order) {
                    this.store.dispatch(_store_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["getOrderStart"]({ payload: { id } }));
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((order) => !!order), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
        }
        else {
            this.store.dispatch(_store_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["getOrdersStart"]());
            return this.store.select(_store_index__WEBPACK_IMPORTED_MODULE_2__["getAllOrders"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((orders) => !!orders.length), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
        }
    }
}
OrderResolver.ɵfac = function OrderResolver_Factory(t) { return new (t || OrderResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
OrderResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderResolver, factory: OrderResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map