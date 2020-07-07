function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-outbound-outbound-module"], {
  /***/
  "./src/app/pages/outbound/outbound-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/outbound/outbound-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: OutboundRoutingModule */

  /***/
  function srcAppPagesOutboundOutboundRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutboundRoutingModule", function () {
      return OutboundRoutingModule;
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
      path: 'sales-order',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | sales-order-sales-order-module */
        [__webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~auth-forgot-password-forgot-password-module~auth-lo~cda04ce2"), __webpack_require__.e("default~pages-company-company-list-company-list-module~pages-inbound-inbound-module~pages-master-mas~480f1082"), __webpack_require__.e("common"), __webpack_require__.e("sales-order-sales-order-module")]).then(__webpack_require__.bind(null,
        /*! ./sales-order/sales-order.module */
        "./src/app/pages/outbound/sales-order/sales-order.module.ts")).then(function (m) {
          return m.SalesOrderModule;
        });
      }
    }, {
      path: 'pick-list',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pick-list-pick-list-module */
        [__webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~auth-forgot-password-forgot-password-module~auth-lo~cda04ce2"), __webpack_require__.e("default~pages-company-company-list-company-list-module~pages-inbound-inbound-module~pages-master-mas~480f1082"), __webpack_require__.e("common"), __webpack_require__.e("pick-list-pick-list-module")]).then(__webpack_require__.bind(null,
        /*! ./pick-list/pick-list.module */
        "./src/app/pages/outbound/pick-list/pick-list.module.ts")).then(function (m) {
          return m.PickListModule;
        });
      }
    }, {
      path: 'packing',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | packing-packing-module */
        [__webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~auth-forgot-password-forgot-password-module~auth-lo~cda04ce2"), __webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~add-configuration-add-configuration-module~add-orde~79bd05af"), __webpack_require__.e("packing-packing-module")]).then(__webpack_require__.bind(null,
        /*! ./packing/packing.module */
        "./src/app/pages/outbound/packing/packing.module.ts")).then(function (m) {
          return m.PackingModule;
        });
      }
    }, {
      path: 'pick-list-new',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pick-list-new-pick-list-new-module */
        [__webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~auth-forgot-password-forgot-password-module~auth-lo~cda04ce2"), __webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~add-configuration-add-configuration-module~add-orde~79bd05af"), __webpack_require__.e("default~pages-company-company-list-company-list-module~pages-inbound-inbound-module~pages-master-mas~480f1082"), __webpack_require__.e("common"), __webpack_require__.e("pick-list-new-pick-list-new-module")]).then(__webpack_require__.bind(null,
        /*! ./pick-list-new/pick-list-new.module */
        "./src/app/pages/outbound/pick-list-new/pick-list-new.module.ts")).then(function (m) {
          return m.PickListNewModule;
        });
      }
    }];

    var OutboundRoutingModule = function OutboundRoutingModule() {
      _classCallCheck(this, OutboundRoutingModule);
    };

    OutboundRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OutboundRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/outbound/outbound.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/outbound/outbound.module.ts ***!
    \***************************************************/

  /*! exports provided: OutboundModule */

  /***/
  function srcAppPagesOutboundOutboundModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutboundModule", function () {
      return OutboundModule;
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


    var _outbound_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./outbound-routing.module */
    "./src/app/pages/outbound/outbound-routing.module.ts");

    var OutboundModule = function OutboundModule() {
      _classCallCheck(this, OutboundModule);
    };

    OutboundModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _outbound_routing_module__WEBPACK_IMPORTED_MODULE_3__["OutboundRoutingModule"]]
    })], OutboundModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-outbound-outbound-module-es5.js.map