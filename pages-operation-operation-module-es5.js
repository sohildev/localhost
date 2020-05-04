function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-operation-operation-module"], {
  /***/
  "./src/app/pages/operation/operation-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/operation/operation-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: OperationRoutingModule */

  /***/
  function srcAppPagesOperationOperationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperationRoutingModule", function () {
      return OperationRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: 'search-product',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | product-stock-product-stock-module */
        [__webpack_require__.e("common"), __webpack_require__.e("product-stock-product-stock-module")]).then(__webpack_require__.bind(null,
        /*! ./product-stock/product-stock.module */
        "./src/app/pages/operation/product-stock/product-stock.module.ts")).then(function (m) {
          return m.ProductStockModule;
        });
      }
    }, {
      path: 'add-bin-transfer',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | add-bin-transfer-add-bin-transfer-module */
        "add-bin-transfer-add-bin-transfer-module").then(__webpack_require__.bind(null,
        /*! ./add-bin-transfer/add-bin-transfer.module */
        "./src/app/pages/operation/add-bin-transfer/add-bin-transfer.module.ts")).then(function (m) {
          return m.AddBinTransferModule;
        });
      }
    }, {
      path: 'transfer-order',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | transfer-order-transfer-order-module */
        "transfer-order-transfer-order-module").then(__webpack_require__.bind(null,
        /*! ./transfer-order/transfer-order.module */
        "./src/app/pages/operation/transfer-order/transfer-order.module.ts")).then(function (m) {
          return m.TransferOrderModule;
        });
      }
    }];

    var OperationRoutingModule = function OperationRoutingModule() {
      _classCallCheck(this, OperationRoutingModule);
    };

    OperationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OperationRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/operation/operation.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/operation/operation.module.ts ***!
    \*****************************************************/

  /*! exports provided: OperationModule */

  /***/
  function srcAppPagesOperationOperationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperationModule", function () {
      return OperationModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _operation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./operation-routing.module */
    "./src/app/pages/operation/operation-routing.module.ts");

    var OperationModule = function OperationModule() {
      _classCallCheck(this, OperationModule);
    };

    OperationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _operation_routing_module__WEBPACK_IMPORTED_MODULE_3__["OperationRoutingModule"]]
    })], OperationModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-operation-operation-module-es5.js.map