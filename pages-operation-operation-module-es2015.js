(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-operation-operation-module"],{

/***/ "./src/app/pages/operation/operation-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/operation/operation-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OperationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationRoutingModule", function() { return OperationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [
    {
        path: 'search-product',
        loadChildren: () => Promise.all(/*! import() | product-stock-product-stock-module */[__webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~auth-forgot-password-forgot-password-module~auth-lo~cda04ce2"), __webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~add-configuration-add-configuration-module~add-orde~79bd05af"), __webpack_require__.e("common"), __webpack_require__.e("product-stock-product-stock-module")]).then(__webpack_require__.bind(null, /*! ./product-stock/product-stock.module */ "./src/app/pages/operation/product-stock/product-stock.module.ts")).then(m => m.ProductStockModule)
    },
    {
        path: 'add-bin-transfer',
        loadChildren: () => Promise.all(/*! import() | add-bin-transfer-add-bin-transfer-module */[__webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~auth-forgot-password-forgot-password-module~auth-lo~cda04ce2"), __webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~add-configuration-add-configuration-module~add-orde~79bd05af"), __webpack_require__.e("common"), __webpack_require__.e("add-bin-transfer-add-bin-transfer-module")]).then(__webpack_require__.bind(null, /*! ./add-bin-transfer/add-bin-transfer.module */ "./src/app/pages/operation/add-bin-transfer/add-bin-transfer.module.ts")).then(m => m.AddBinTransferModule)
    },
    {
        path: 'transfer-order',
        loadChildren: () => __webpack_require__.e(/*! import() | transfer-order-transfer-order-module */ "transfer-order-transfer-order-module").then(__webpack_require__.bind(null, /*! ./transfer-order/transfer-order.module */ "./src/app/pages/operation/transfer-order/transfer-order.module.ts")).then(m => m.TransferOrderModule)
    }
];
let OperationRoutingModule = class OperationRoutingModule {
};
OperationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OperationRoutingModule);



/***/ }),

/***/ "./src/app/pages/operation/operation.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/operation/operation.module.ts ***!
  \*****************************************************/
/*! exports provided: OperationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationModule", function() { return OperationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _operation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operation-routing.module */ "./src/app/pages/operation/operation-routing.module.ts");




let OperationModule = class OperationModule {
};
OperationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _operation_routing_module__WEBPACK_IMPORTED_MODULE_3__["OperationRoutingModule"]
        ]
    })
], OperationModule);



/***/ })

}]);
//# sourceMappingURL=pages-operation-operation-module-es2015.js.map