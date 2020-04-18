(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inbound-inbound-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-view/order-completed/order-completed.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-view/order-completed/order-completed.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>order-completed works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-view/order-details/order-details.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-view/order-details/order-details.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tab-pane fade show active\" id=\"details\" role=\"tabpanel\" aria-labelledby=\"details-tab\">\r\n  <div class=\"order-box\">\r\n    <div class=\"row border-bottom\">\r\n      <div class=\"col-md-6 pb-2\">\r\n        <div class=\"d-flex\">\r\n          <label class=\"text-muted mb-1 font-weight-bold font-size12\">PO No : </label>\r\n          <div class=\"pl-2\">{{objectArray?.po_no}}</div>\r\n        </div>\r\n        <div class=\"d-flex\">\r\n          <label class=\"text-muted mb-1 font-weight-bold font-size12\">PO Date : </label>\r\n          <div class=\"pl-2\">{{objectArray?.po_date|date:date_format :timezone}}</div>\r\n        </div>\r\n        <div class=\"d-flex\">\r\n          <label class=\"text-muted mb-1 font-weight-bold font-size12\">Receiving Date & Time : </label>\r\n          <div class=\"pl-2\">-</div>\r\n        </div>\r\n        <div class=\"d-flex\">\r\n          <label class=\"text-muted mb-1 font-weight-bold font-size12\">Desription :</label>\r\n          <div class=\"pl-2\">{{objectArray?.notes}}</div>\r\n        </div>\r\n        \r\n      </div>\r\n      <div class=\"col-md-6 pb-2 text-right\">\r\n        <label class=\"text-muted mb-1 font-weight-bold\">Company Name</label>\r\n        <div class=\"pl-2\">Peerbits</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-3 border-bottom pb-3\">\r\n      <div class=\"col-4\">\r\n        <div class=\"order-box-title py-1 px-2 mb-2\" style=\"background-color:#edecfd;\">Supplier Name</div>\r\n        <label class=\"text-muted mb-1 font-weight-bold\">{{objectArray?.supplier?.supplier_name}}</label>\r\n        <div>\r\n          <span *ngIf=\"objectArray?.supplier?.address?.street_address\">\r\n            {{objectArray?.supplier?.address?.street_address}},\r\n          </span>\r\n          <span *ngIf=\"objectArray?.supplier?.address?.city\">\r\n            {{objectArray?.supplier?.address?.city}},\r\n          </span>\r\n          <span *ngIf=\"objectArray?.supplier?.address?.state\">\r\n            {{objectArray?.supplier?.address?.state}}\r\n          </span>\r\n          <span *ngIf=\"objectArray?.supplier?.address?.country_name\">({{objectArray?.supplier?.address?.country_name}})\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-4\">\r\n        <div class=\"order-box-title py-1 px-2 mb-2\" style=\"background-color:#edecfd;\">Client Name</div>\r\n        <label class=\"text-muted mb-1 font-weight-bold\">{{objectArray?.client?.client_name}}</label>\r\n        <div>\r\n          <span *ngIf=\"objectArray?.client?.address?.street_address\">\r\n            {{objectArray?.client?.address?.street_address}},\r\n          </span>\r\n          <span *ngIf=\"objectArray?.client?.address?.city\">\r\n            {{objectArray?.client?.address?.city}},\r\n          </span>\r\n          <span *ngIf=\"objectArray?.client?.address?.state\">\r\n            {{objectArray?.client?.address?.state}}\r\n          </span>\r\n          <span *ngIf=\"objectArray?.client?.address?.country_name\">({{objectArray?.client?.address?.country_name}})\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <div class=\"mt-2 border-bottom py-3\">\r\n          <h6>Order Product List</h6>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-2\">\r\n      <div class=\"col-md-12 mb-3\">\r\n\r\n\r\n        <app-table-list [headerData]=\"headerData\" [rawData]=\"orderProductListArray\">\r\n        </app-table-list>\r\n\r\n        <pagination [paginationList]=\"pagination\" [currentPage]=\"currentPage\" (onPageChange)=\"getPage($event)\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-view/order-putaway/order-putaway.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-view/order-putaway/order-putaway.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Putaway Tab Content -->\r\n<!-- <div class=\"tab-pane fade\" id=\"putaway\" role=\"tabpanel\" aria-labelledby=\"putaway-tab\"> -->\r\n<div class=\"row mt-4\">\r\n  <div class=\"col\">\r\n    <button class=\"btn btn-primary\" [routerLink]=\"['/inbound/put-away/add',viewId]\">Generate\r\n      Transfer\r\n      Order</button>\r\n  </div>\r\n</div>\r\n<!-- <div class=\"table-responsive-md mt-2\">\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>Transfer Order No.</th>\r\n        <th>Case No.</th>\r\n        <th>Location</th>\r\n        <th class=\"text-center\">Article</th>\r\n        <th class=\"text-center\">Putaway Quantity</th>\r\n        <th class=\"text-center\">Pick Quantity</th>\r\n        <th>Status</th>\r\n        <th class=\"text-right\">Action</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n\r\n    </tbody>\r\n  </table>\r\n</div> -->\r\n\r\n<app-table-list [headerData]=\"headerData\" [rawData]=\"orderProductListArray\" (reloadEvent)=\"onReloadEvent()\">\r\n</app-table-list>\r\n\r\n\r\n<!-- </div> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-view/order-sorting/order-sorting.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-view/order-sorting/order-sorting.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mt-4\">\r\n  <div class=\"col\">\r\n    <button  *ngIf=\"isSorting\" class=\"btn btn-primary\" [routerLink]=\"['/inbound/registeration/add',viewId]\">\r\n      Generate Sorting List</button>\r\n  </div>\r\n</div>\r\n\r\n<!-- <app-table-list [headerData]=\"headerData\" [rawData]=\"orderProductListArray\" (reloadEvent)=\"onReloadEvent()\">\r\n</app-table-list> -->\r\n\r\n<div class=\"table-responsive\">\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>SKU No</th>\r\n        <th>Product</th>\r\n        <th class=\"text-center\">Receive Qty</th>\r\n        <th class=\"text-center\">Pending Qty</th>\r\n        <th class=\"text-center\">Sorted Qty</th>\r\n        \r\n        <th class=\"text-right\">Action</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of orderProductListArray; let i=index\">\r\n    \r\n        <td>{{item?.product.sku_no}}</td>\r\n        <td>{{item?.product.label}}</td>\r\n        <td class=\"text-center\">{{item?.unload_detail?.received_qty |number}}</td>\r\n        <td class=\"text-center\">{{item?.pending_qty |number}}</td>\r\n        <td class=\"text-center\">{{item?.sorted_qty |number}}</td>\r\n        <td>\r\n          <div *ngIf=\"item?.is_edit\"  class=\"action-drop dropdown text-right\">\r\n            <a href=\"#\" data-toggle=\"dropdown\" class=\"btn shadow-none btn-default btn-sm btn-icon-only\" title=\"\">\r\n              <i class=\"fa fa-ellipsis-h\"></i>\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-icon-menu drop-menu-right action-dropdown\" style=\"width: 100px;\">\r\n              <a *ngIf=\"item?.is_edit\" class=\"dropdown-item\"\r\n              [routerLink]=\"['/inbound/registeration/edit/',item?.product_register_id]\">\r\n                <i class=\"fa fa-file-pdf-o fa-fw text-primary\">\r\n                </i> Register Product</a>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"!loadingState && orderProductListArray.length == 0\">\r\n        <td colspan=\"6\">No records found</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-view/order-unloding/order-unloding.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-view/order-unloding/order-unloding.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Unloading Tab Content -->\r\n<!-- <div class=\"tab-pane fade\" id=\"unloading\" role=\"tabpanel\" aria-labelledby=\"unloading-tab\"> -->\r\n<div class=\"row mt-4\">\r\n  <div class=\"col\">\r\n    <button *ngIf=\"isGenerate\" class=\"btn btn-primary\" [routerLink]=\"['/inbound/unload/generate/',viewId]\">\r\n      Generate Unloading</button>\r\n  </div>\r\n</div>\r\n\r\n<!-- <app-table-list [headerData]=\"headerData\" [rawData]=\"orderProductListArray\" (reloadEvent)=\"onReloadEvent()\">\r\n</app-table-list> -->\r\n\r\n<div class=\"table-responsive\">\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>UN No</th>\r\n        <th>SKU No</th>\r\n        <th>Product</th>\r\n        <th class=\"text-center\">Order Qty</th>\r\n        <th class=\"text-center\">Receive Qty</th>\r\n        <th class=\"text-center\">Damaged Qty</th>\r\n        <th class=\"text-center\">Missing Qty</th>\r\n        <th class=\"text-center\">Status</th>\r\n        <th class=\"text-right\">Action</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of orderProductListArray; let i=index\">\r\n        <td>{{item?.unload_index}}</td>\r\n        <td>{{item?.sku_no}}</td>\r\n        <td>{{item?.product_name}}</td>\r\n        <td class=\"text-center\">{{item?.order_qty  |number}}</td>\r\n        <td class=\"text-center\">{{item?.received_qty |number}}</td>\r\n        <td class=\"text-center\">{{item?.damaged_qty |number}}</td>\r\n        <td class=\"text-center\">{{item?.missing_qty |number}}</td>\r\n        <td class=\"text-center\">\r\n\r\n          <span *ngIf=\"item?.status?.value ==2\" class=\"badge badge-warning text-white\">{{item?.status?.label}}</span>\r\n          <span *ngIf=\"item?.status?.value ==3\" class=\"badge badge-success\">{{item?.status?.label}}</span>\r\n          <span *ngIf=\"item?.status?.value ==4\" class=\"badge badge-primary\">{{item?.status?.label}}</span>\r\n          \r\n        </td>\r\n        <td>\r\n          <div class=\"action-drop dropdown text-right\">\r\n            <a href=\"#\" data-toggle=\"dropdown\" class=\"btn shadow-none btn-default btn-sm btn-icon-only\" title=\"\">\r\n              <i class=\"fa fa-ellipsis-h\"></i>\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-icon-menu drop-menu-right action-dropdown\" style=\"width: 100px;\">\r\n              <a [routerLink]=\"['/inbound/unload/view/',item?.unload_id]\" class=\"dropdown-item\"><i\r\n                  class=\"fa fa-eye fa-fw text-primary\">\r\n                </i> View</a>\r\n\r\n              <a *ngIf=\"item?.status?.value !=3\" class=\"dropdown-item\"\r\n                [routerLink]=\"['/inbound/unload/generate-unloading/',item?.unload_id]\">\r\n                <i class=\"fa fa-file-pdf-o fa-fw text-primary\">\r\n                </i> Submit Report</a>\r\n              <a *ngIf=\"item?.status?.value ==3\" class=\"dropdown-item\"\r\n                [routerLink]=\"['/inbound/unload/generate-unloading/',item?.unload_id]\">\r\n                <i class=\"fa fa-edit fa-fw text-primary\">\r\n                </i> Edit</a>\r\n              <a *ngIf=\"item?.status?.value ==3\" class=\"dropdown-item\" (click)=\"deleteObject(item)\">\r\n                <i class=\"fa fa-trash fa-fw text-primary\">\r\n                </i> Delete</a>\r\n\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"!loadingState && orderProductListArray.length == 0\">\r\n        <td colspan=\"9\">No records found</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<!-- </div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-view/order-view.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-view/order-view.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n      <div class=\"ml-3\">\r\n        <a class=\"btn shadow-none btn-link\" routerLink=\"/inbound/order\">\r\n          <i class=\"fa fa-chevron-left mr-2 mt-1\"></i>Back to list\r\n        </a>\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <a class=\"btn btn-light\" (click)=\"onPrint()\">\r\n          <i class=\"fa fa-file-pdf-o mr-2 mt-1\"></i>Generate PDF\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link \" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true}\"\r\n            id=\"details-tab\" data-toggle=\"tab\" [routerLink]=\"['/inbound/order/view',viewId]\" role=\"tab\"\r\n            aria-controls=\"details\" aria-selected=\"true\">Details</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{match:['unloading']}\"\r\n            id=\"unloading-tab\" data-toggle=\"tab\" routerLink=\"unloading\" role=\"tab\" aria-controls=\"unloading\"\r\n            aria-selected=\"false\">Unloading</a>\r\n        </li>\r\n\r\n\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{match:['sorting']}\"\r\n            id=\"sorting-tab\" data-toggle=\"tab\" routerLink=\"sorting\" role=\"tab\" aria-controls=\"sorting\"\r\n            aria-selected=\"false\">Sorting</a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{match:['putaway']}\"\r\n            id=\"putaway-tab\" data-toggle=\"tab\" routerLink=\"putaway\" role=\"tab\" aria-controls=\"putaway\"\r\n            aria-selected=\"false\">Put Away</a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"tab-content\">\r\n        <router-outlet>\r\n        </router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/unload/unload.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/unload/unload.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col d-flex\">\r\n        <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n        <div class=\"ml-3\">\r\n          <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n        </div>\r\n        <div class=\"ml-3\">\r\n          <app-btn-add [btnName]=\"'Add Unload'\" [editData]=\"'/inbound/unload/generate'\"></app-btn-add>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\r\n      </app-table-list>\r\n      <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\r\n        (onPageChange)=\"getPage($event)\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/inbound/inbound-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/inbound/inbound-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: InboundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundRoutingModule", function() { return InboundRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [
    {
        path: 'order',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./order/order.module */ "./src/app/pages/inbound/order/order.module.ts")).then(m => m.OrderModule),
        data: { title: 'order_list' },
    },
    {
        path: 'unload',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./unload/unload.module */ "./src/app/pages/inbound/unload/unload.module.ts")).then(m => m.UnloadModule)
    },
    {
        path: 'registeration',
        loadChildren: () => Promise.all(/*! import() | registeration-registeration-module */[__webpack_require__.e("common"), __webpack_require__.e("registeration-registeration-module")]).then(__webpack_require__.bind(null, /*! ./registeration/registeration.module */ "./src/app/pages/inbound/registeration/registeration.module.ts")).then(m => m.RegisterationModule)
    },
    {
        path: 'put-away',
        loadChildren: () => __webpack_require__.e(/*! import() | put-away-put-away-module */ "put-away-put-away-module").then(__webpack_require__.bind(null, /*! ./put-away/put-away.module */ "./src/app/pages/inbound/put-away/put-away.module.ts")).then(m => m.PutAwayModule)
    }
];
let InboundRoutingModule = class InboundRoutingModule {
};
InboundRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], InboundRoutingModule);



/***/ }),

/***/ "./src/app/pages/inbound/inbound.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/inbound/inbound.module.ts ***!
  \*************************************************/
/*! exports provided: InboundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundModule", function() { return InboundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _inbound_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbound-routing.module */ "./src/app/pages/inbound/inbound-routing.module.ts");
/* harmony import */ var _order_order_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order/order.module */ "./src/app/pages/inbound/order/order.module.ts");
/* harmony import */ var _unload_unload_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unload/unload.module */ "./src/app/pages/inbound/unload/unload.module.ts");
/* harmony import */ var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-flatpickr */ "./node_modules/ng2-flatpickr/__ivy_ngcc__/fesm2015/ng2-flatpickr.js");







let InboundModule = class InboundModule {
};
InboundModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _inbound_routing_module__WEBPACK_IMPORTED_MODULE_3__["InboundRoutingModule"],
            _order_order_module__WEBPACK_IMPORTED_MODULE_4__["OrderModule"],
            _unload_unload_module__WEBPACK_IMPORTED_MODULE_5__["UnloadModule"],
            ng2_flatpickr__WEBPACK_IMPORTED_MODULE_6__["Ng2FlatpickrModule"]
        ]
    })
], InboundModule);



/***/ }),

/***/ "./src/app/pages/inbound/order/order-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/inbound/order/order-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function() { return OrderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | order-list-order-list-module */[__webpack_require__.e("default~add-order-add-order-module~add-put-away-add-put-away-module~add-registeration-add-registerat~d94f3084"), __webpack_require__.e("order-list-order-list-module")]).then(__webpack_require__.bind(null, /*! ./order-list/order-list.module */ "./src/app/pages/inbound/order/order-list/order-list.module.ts")).then(m => m.OrderListModule),
        data: { title: 'order_list' },
    },
    {
        path: 'add',
        loadChildren: () => Promise.all(/*! import() | add-order-add-order-module */[__webpack_require__.e("default~add-order-add-order-module~add-put-away-add-put-away-module~add-registeration-add-registerat~d94f3084"), __webpack_require__.e("default~add-order-add-order-module~add-sales-order-add-sales-order-module"), __webpack_require__.e("add-order-add-order-module")]).then(__webpack_require__.bind(null, /*! ./add-order/add-order.module */ "./src/app/pages/inbound/order/add-order/add-order.module.ts")).then(m => m.AddOrderModule),
        data: { title: 'add_order' },
    },
    {
        path: 'edit/:id',
        loadChildren: () => Promise.all(/*! import() | add-order-add-order-module */[__webpack_require__.e("default~add-order-add-order-module~add-put-away-add-put-away-module~add-registeration-add-registerat~d94f3084"), __webpack_require__.e("default~add-order-add-order-module~add-sales-order-add-sales-order-module"), __webpack_require__.e("add-order-add-order-module")]).then(__webpack_require__.bind(null, /*! ./add-order/add-order.module */ "./src/app/pages/inbound/order/add-order/add-order.module.ts")).then(m => m.AddOrderModule),
        data: { title: 'edit_order' },
    },
    {
        path: 'view/:id',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./order-view/order-view.module */ "./src/app/pages/inbound/order/order-view/order-view.module.ts")).then(m => m.OrderViewModule),
        data: { title: 'view_order' },
    },
];
let OrderRoutingModule = class OrderRoutingModule {
};
OrderRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OrderRoutingModule);



/***/ }),

/***/ "./src/app/pages/inbound/order/order-view/order-completed/order-completed.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/inbound/order/order-view/order-completed/order-completed.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: OrderCompletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCompletedComponent", function() { return OrderCompletedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderCompletedComponent = class OrderCompletedComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrderCompletedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-completed',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-completed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-view/order-completed/order-completed.component.html")).default
    })
], OrderCompletedComponent);



/***/ }),

/***/ "./src/app/pages/inbound/order/order-view/order-details/order-details.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/inbound/order/order-view/order-details/order-details.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/order.service */ "./src/app/service/order.service.ts");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");







let OrderDetailsComponent = class OrderDetailsComponent {
    constructor(activatedRoute, orderService, dataService, paginationService) {
        this.activatedRoute = activatedRoute;
        this.orderService = orderService;
        this.dataService = dataService;
        this.paginationService = paginationService;
        this.orderProductListArray = [];
        this.headerData = [];
        this.loadingState = false;
        this.currentPage = 1;
        this.date_format = "M/d/yy";
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.viewId = this.activatedRoute.snapshot.paramMap.get('id');
        }
        this.getOrderDetails();
    }
    ngOnInit() {
        this.dataService.currentCompany.subscribe((response) => {
            if (response) {
                this.timezone = String(response.timezone.format);
                ;
                this.time_format = response.time_format.label;
                this.date_format = response.date_format.label;
                this.currentCompany = response;
            }
        });
        this.setHeaderData();
        this.getOrderProductList();
    }
    setHeaderData() {
        this.headerData.push(new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["IndexField"]({
            label: "No.",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["TextField"]({
            label: "SKU No #",
            key: 'sku_no',
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["TextField"]({
            label: "Product",
            key: "product_name",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["TextField"]({
            label: "Order Quantity",
            key: "qty",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["PriceField"]({
            label: "Price",
            key: "price",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["PriceField"]({
            label: "Total Price",
            key: "amount",
        }));
    }
    getOrderDetails() {
        this.subscription = this.dataService.OrderDetails.subscribe((data) => {
            if (data) {
                this.objectArray = data;
            }
        });
    }
    getPage(page) {
        this.currentPage = page;
        this.currentPage = 1;
        this.getOrderProductList();
    }
    getOrderProductList() {
        const params = { order_id: this.viewId };
        this.orderService.getOrderProductList(params).subscribe((response) => {
            if (response.success && response.data) {
                this.orderProductListArray = response.data.list;
                this.pagination = this.paginationService.getPager(response.data.pagination['total_page'], this.currentPage);
            }
            else {
                this.orderProductListArray = [];
                this.loadingState = false;
                this.pagination = null;
            }
        }, (error) => {
            this.orderProductListArray = [];
            this.loadingState = false;
            this.pagination = null;
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
OrderDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__["PaginationService"] }
];
OrderDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-view/order-details/order-details.component.html")).default
    })
], OrderDetailsComponent);



/***/ }),

/***/ "./src/app/pages/inbound/order/order-view/order-putaway/order-putaway.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/inbound/order/order-view/order-putaway/order-putaway.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OrderPutawayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPutawayComponent", function() { return OrderPutawayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");
/* harmony import */ var src_app_service_put_away_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/put-away.service */ "./src/app/service/put-away.service.ts");








let OrderPutawayComponent = class OrderPutawayComponent {
    constructor(dataService, paginationService, PutAwayService, location, activatedRoute) {
        this.dataService = dataService;
        this.paginationService = paginationService;
        this.PutAwayService = PutAwayService;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.orderProductListArray = [];
        this.headerData = [];
        this.loadingState = false;
        this.isGenerate = false;
        this.currentPage = 1;
        this.activatedRoute.parent.params.subscribe((response) => {
            this.viewId = response['id'];
        });
        this.subscription = this.dataService.OrderDetails.subscribe((data) => {
            if (data) {
                this.objectArray = data;
            }
        });
    }
    ngOnInit() {
        this.setHeaderData();
        this.getOrderProductList();
    }
    back() {
        this.location.back();
    }
    setHeaderData() {
        this.headerData.push(new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["TextField"]({
            label: "Transfer Order No",
            key: 'transfer_order_no',
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["TextField"]({
            label: "Case No",
            key: 'case_no',
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["TextField"]({
            label: "Location",
            key: '',
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["TextField"]({
            label: "Article",
            key: '',
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["TextField"]({
            label: "Putaway Quantity",
            key: 'put_away.put_away_qty',
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["TextField"]({
            label: "Pick Quantity",
            key: 'put_away.pick_qty',
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["StatusField"]({
            label: "Status",
            key: 'status.label',
        }));
        // let canEdit = true;
        // let actions = {};
        // //
        // // View Details
        // if (canEdit) {
        //   actions['view'] = {
        //     path: '/inbound/registeration/add/',
        //     id: 'order_id',
        //     showText: 'Register Product',
        //     // class: 'fa-bell'
        //   }
        // }
        // let actionColom = new ActionField(actions);
        // this.headerData.push(
        //   actionColom
        // );
    }
    onReloadEvent() {
        this.getOrderProductList();
    }
    getOrderProductList() {
        this.PutAwayService.getTransferOrderListById(this.viewId).subscribe((response) => {
            if (response.success && response.data.length > 0) {
                this.orderProductListArray = response.data ? response.data : [];
                if (this.orderProductListArray.length > 0) {
                    this.setOrderId();
                }
                this.isGenerate = response.data.is_generate;
                // this.pagination = this.paginationService.getPager(response.data.pagination['total_page'], this.currentPage);
            }
            else {
                this.orderProductListArray = [];
                this.loadingState = false;
                this.isGenerate = false;
                this.pagination = null;
            }
        }, (error) => {
            this.orderProductListArray = [];
            this.isGenerate = false;
            this.loadingState = false;
            this.pagination = null;
        });
    }
    setOrderId() {
        this.orderProductListArray.filter((obj) => {
            obj.order_id = this.viewId;
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
OrderPutawayComponent.ctorParameters = () => [
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"] },
    { type: src_app_service_put_away_service__WEBPACK_IMPORTED_MODULE_7__["PutAwayService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
OrderPutawayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-putaway',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-putaway.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-view/order-putaway/order-putaway.component.html")).default
    })
], OrderPutawayComponent);



/***/ }),

/***/ "./src/app/pages/inbound/order/order-view/order-sorting/order-sorting.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/inbound/order/order-view/order-sorting/order-sorting.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OrderSortingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSortingComponent", function() { return OrderSortingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_product_registration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/product-registration.service */ "./src/app/service/product-registration.service.ts");







let OrderSortingComponent = class OrderSortingComponent {
    constructor(dataService, paginationService, ProductRegistrationService, location, activatedRoute) {
        this.dataService = dataService;
        this.paginationService = paginationService;
        this.ProductRegistrationService = ProductRegistrationService;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.orderProductListArray = [];
        // headerData: Array<any> = [];
        this.loadingState = false;
        this.isSorting = false;
        this.currentPage = 1;
        this.activatedRoute.parent.params.subscribe((response) => {
            this.viewId = response['id'];
        });
        this.subscription = this.dataService.OrderDetails.subscribe((data) => {
            if (data) {
                this.objectArray = data;
            }
        });
    }
    ngOnInit() {
        // this.setHeaderData();
        this.getOrderProductList();
    }
    back() {
        this.location.back();
    }
    // setHeaderData() {
    //   this.headerData.push(
    //     new TextField({
    //       label: "SKU no",
    //       key: 'product.sku_no',
    //     }),
    //     new TextField({
    //       label: "Product Name",
    //       key: 'product.label',
    //     }),
    //     new TextField({
    //       label: "Receive Qty",
    //       key: 'unload_detail.received_qty',
    //     }),
    //     new TextField({
    //       label: "Pending Qty",
    //       key: 'pending_qty',
    //     }),
    //   );
    //   let canEdit = true;
    //   let actions = {};
    //   //
    //   // View Details
    //   if (canEdit) {
    //     actions['view'] = {
    //       path: '/inbound/registeration/edit/',
    //       id: 'product_register_id',
    //       showText: 'Register Product',
    //       // class: 'fa-bell'
    //     }
    //   }
    //   let actionColom = new ActionField(actions);
    //   this.headerData.push(
    //     actionColom
    //   );
    // }
    // onReloadEvent() {
    //   this.getOrderProductList();
    // }
    getOrderProductList() {
        this.ProductRegistrationService.getSortingList(this.viewId).subscribe((response) => {
            if (response.success && response.data) {
                this.orderProductListArray = response.data.list ? response.data.list : [];
                // this.setOrderId();
                this.isSorting = response.data.is_sorting;
                // this.pagination = this.paginationService.getPager(response.data.pagination['total_page'], this.currentPage);
            }
            else {
                this.orderProductListArray = [];
                this.loadingState = false;
                this.isSorting = false;
                this.pagination = null;
            }
        }, (error) => {
            this.orderProductListArray = [];
            this.isSorting = false;
            this.loadingState = false;
            this.pagination = null;
        });
    }
    // setOrderId() {
    //   this.orderProductListArray.filter((obj) => {
    //     obj.order_id = this.viewId;
    //   });
    // }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
OrderSortingComponent.ctorParameters = () => [
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"] },
    { type: src_app_service_product_registration_service__WEBPACK_IMPORTED_MODULE_6__["ProductRegistrationService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
OrderSortingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-sorting',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-sorting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-view/order-sorting/order-sorting.component.html")).default
    })
], OrderSortingComponent);



/***/ }),

/***/ "./src/app/pages/inbound/order/order-view/order-unloding/order-unloding.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/inbound/order/order-view/order-unloding/order-unloding.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: OrderUnlodingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderUnlodingComponent", function() { return OrderUnlodingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_service_unload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/unload.service */ "./src/app/service/unload.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/messages */ "./src/app/messages.ts");








let OrderUnlodingComponent = class OrderUnlodingComponent {
    constructor(dataService, paginationService, unloadService, location, activatedRoute) {
        this.dataService = dataService;
        this.paginationService = paginationService;
        this.unloadService = unloadService;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.orderProductListArray = [];
        this.headerData = [];
        this.loadingState = false;
        this.isGenerate = false;
        this.currentPage = 1;
        this.activatedRoute.parent.params.subscribe((response) => {
            this.viewId = response['id'];
        });
        this.subscription = this.dataService.OrderDetails.subscribe((data) => {
            if (data) {
                this.objectArray = data;
            }
        });
    }
    ngOnInit() {
        // this.setHeaderData();
        this.getOrderProductList();
    }
    back() {
        this.location.back();
    }
    // setHeaderData() {
    //   this.headerData.push(
    //     new TextField({
    //       label: "UN NO",
    //       key: 'unload_index',
    //     }),
    //     new TextField({
    //       label: "SKU no",
    //       key: 'sku_no',
    //     }),
    //     new TextField({
    //       label: "Product",
    //       key: 'product_name',
    //     }),
    //     new TextField({
    //       label: "Order Qty",
    //       key: 'order_qty',
    //     }),
    //     new TextField({
    //       label: "Receive Qty",
    //       key: 'received_qty',
    //     }),
    //     new TextField({
    //       label: "Damaged Qty",
    //       key: 'damaged_qty',
    //     }),
    //     new TextField({
    //       label: "Missing Qty",
    //       key: 'missing_qty',
    //     }),
    //     new TextField({
    //       label: "Status",
    //       key: 'status.label',
    //     }),
    //   );
    //   let canView = true;
    //   let actions = {};
    //   if (canView) {
    //     actions['edit'] = {
    //       path: '/inbound/unload/view/',
    //       id: 'unload_id',
    //       class: 'fa-eye',
    //       showText: 'View'
    //     }
    //     actions['view'] = {
    //       path: '/inbound/unload/generate-unloading/',
    //       id: 'unload_id',
    //       class: 'fa-file-pdf-o',
    //       showText: 'Submit Report'
    //     }
    //   }
    //   let actionColom = new ActionField(actions);
    //   this.headerData.push(
    //     actionColom
    //   );
    // }
    // onReloadEvent() {
    //   this.getOrderProductList();
    // }
    getOrderProductList() {
        this.unloadService.getUnloadGeneratedListById(this.viewId).subscribe((response) => {
            if (response.success && response.data) {
                this.orderProductListArray = response.data.list ? response.data.list : [];
                this.isGenerate = response.data.is_generate;
                // this.pagination = this.paginationService.getPager(response.data.pagination['total_page'], this.currentPage);
            }
            else {
                this.orderProductListArray = [];
                this.loadingState = false;
                this.isGenerate = false;
                this.pagination = null;
            }
        }, (error) => {
            this.orderProductListArray = [];
            this.isGenerate = false;
            this.loadingState = false;
            this.pagination = null;
        });
    }
    deleteObject(object) {
        swal.fire({
            title: src_app_messages__WEBPACK_IMPORTED_MODULE_7__["errorMessage"].delete_header_text,
            text: src_app_messages__WEBPACK_IMPORTED_MODULE_7__["errorMessage"].delete_smalll_text,
            icon: src_app_messages__WEBPACK_IMPORTED_MODULE_7__["errorMessage"].delete_dialogue_type,
            showCancelButton: true,
            confirmButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_7__["errorMessage"].delete_confirm_button,
            cancelButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_7__["errorMessage"].delete_cancel_button,
        }).then((result) => {
            if (result.value) {
                const params = { unload_detail_id: object.unload_detail_id };
                this.unloadService.deleteUnloadSubmitReports(object.unload_id, params).subscribe((response) => {
                    if (response.success) {
                        this.getOrderProductList();
                    }
                });
            }
        }).catch(swal.noop);
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
OrderUnlodingComponent.ctorParameters = () => [
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"] },
    { type: src_app_service_unload_service__WEBPACK_IMPORTED_MODULE_4__["UnloadService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
OrderUnlodingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-unloding',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-unloding.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-view/order-unloding/order-unloding.component.html")).default
    })
], OrderUnlodingComponent);



/***/ }),

/***/ "./src/app/pages/inbound/order/order-view/order-view-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/inbound/order/order-view/order-view-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: OrderViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderViewRoutingModule", function() { return OrderViewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-view.component */ "./src/app/pages/inbound/order/order-view/order-view.component.ts");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-details/order-details.component */ "./src/app/pages/inbound/order/order-view/order-details/order-details.component.ts");
/* harmony import */ var _order_unloding_order_unloding_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-unloding/order-unloding.component */ "./src/app/pages/inbound/order/order-view/order-unloding/order-unloding.component.ts");
/* harmony import */ var _order_sorting_order_sorting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-sorting/order-sorting.component */ "./src/app/pages/inbound/order/order-view/order-sorting/order-sorting.component.ts");
/* harmony import */ var _order_putaway_order_putaway_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-putaway/order-putaway.component */ "./src/app/pages/inbound/order/order-view/order-putaway/order-putaway.component.ts");
/* harmony import */ var _order_completed_order_completed_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order-completed/order-completed.component */ "./src/app/pages/inbound/order/order-view/order-completed/order-completed.component.ts");









const routes = [
    {
        path: '',
        component: _order_view_component__WEBPACK_IMPORTED_MODULE_3__["OrderViewComponent"],
        children: [
            {
                path: '',
                component: _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_4__["OrderDetailsComponent"],
                data: { title: 'view_order' }
            },
            {
                path: 'unloading',
                component: _order_unloding_order_unloding_component__WEBPACK_IMPORTED_MODULE_5__["OrderUnlodingComponent"],
                data: { title: 'view_order' }
            },
            {
                path: 'sorting',
                component: _order_sorting_order_sorting_component__WEBPACK_IMPORTED_MODULE_6__["OrderSortingComponent"],
                data: { title: 'view_order' }
            },
            {
                path: 'putaway',
                component: _order_putaway_order_putaway_component__WEBPACK_IMPORTED_MODULE_7__["OrderPutawayComponent"],
                data: { title: 'view_order' }
            },
            {
                path: 'completed',
                component: _order_completed_order_completed_component__WEBPACK_IMPORTED_MODULE_8__["OrderCompletedComponent"],
                data: { title: 'view_order' }
            }
        ]
    },
];
let OrderViewRoutingModule = class OrderViewRoutingModule {
};
OrderViewRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OrderViewRoutingModule);



/***/ }),

/***/ "./src/app/pages/inbound/order/order-view/order-view.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/inbound/order/order-view/order-view.component.ts ***!
  \************************************************************************/
/*! exports provided: OrderViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderViewComponent", function() { return OrderViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/order.service */ "./src/app/service/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");





let OrderViewComponent = class OrderViewComponent {
    constructor(orderService, dataService, activatedRoute) {
        this.orderService = orderService;
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.PageTitle = "Order Detail ";
        this.active = true;
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.viewId = this.activatedRoute.snapshot.paramMap.get('id');
            this.getOrderDetails();
        }
    }
    ngOnInit() { }
    getOrderDetails() {
        this.orderService.getOrderViewById(this.viewId).subscribe((res) => {
            if (res.success && res.data) {
                this.objectArray = res.data;
                this.PageTitle = this.PageTitle + `${this.objectArray.po_no}`;
                this.dataService.OrderDetailsSubject.next(this.objectArray);
            }
        });
    }
    onPrint() {
        window.print();
    }
};
OrderViewComponent.ctorParameters = () => [
    { type: src_app_service_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
OrderViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-view/order-view.component.html")).default,
    })
], OrderViewComponent);



/***/ }),

/***/ "./src/app/pages/inbound/order/order-view/order-view.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/inbound/order/order-view/order-view.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrderViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderViewModule", function() { return OrderViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _order_view_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-view-routing.module */ "./src/app/pages/inbound/order/order-view/order-view-routing.module.ts");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");
/* harmony import */ var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-flatpickr */ "./node_modules/ng2-flatpickr/__ivy_ngcc__/fesm2015/ng2-flatpickr.js");
/* harmony import */ var src_app_service_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/order.service */ "./src/app/service/order.service.ts");
/* harmony import */ var _order_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-view.component */ "./src/app/pages/inbound/order/order-view/order-view.component.ts");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order-details/order-details.component */ "./src/app/pages/inbound/order/order-view/order-details/order-details.component.ts");
/* harmony import */ var _order_unloding_order_unloding_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-unloding/order-unloding.component */ "./src/app/pages/inbound/order/order-view/order-unloding/order-unloding.component.ts");
/* harmony import */ var _order_sorting_order_sorting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order-sorting/order-sorting.component */ "./src/app/pages/inbound/order/order-view/order-sorting/order-sorting.component.ts");
/* harmony import */ var _order_putaway_order_putaway_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order-putaway/order-putaway.component */ "./src/app/pages/inbound/order/order-view/order-putaway/order-putaway.component.ts");
/* harmony import */ var _order_completed_order_completed_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./order-completed/order-completed.component */ "./src/app/pages/inbound/order/order-view/order-completed/order-completed.component.ts");
/* harmony import */ var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/common-module/table-list/table-list.module */ "./src/app/common-module/table-list/table-list.module.ts");
/* harmony import */ var src_app_service_product_registration_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/service/product-registration.service */ "./src/app/service/product-registration.service.ts");
/* harmony import */ var src_app_service_put_away_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/service/put-away.service */ "./src/app/service/put-away.service.ts");
















let OrderViewModule = class OrderViewModule {
};
OrderViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_order_view_component__WEBPACK_IMPORTED_MODULE_7__["OrderViewComponent"], _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_8__["OrderDetailsComponent"], _order_unloding_order_unloding_component__WEBPACK_IMPORTED_MODULE_9__["OrderUnlodingComponent"], _order_sorting_order_sorting_component__WEBPACK_IMPORTED_MODULE_10__["OrderSortingComponent"], _order_putaway_order_putaway_component__WEBPACK_IMPORTED_MODULE_11__["OrderPutawayComponent"], _order_completed_order_completed_component__WEBPACK_IMPORTED_MODULE_12__["OrderCompletedComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _order_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrderViewRoutingModule"],
            ng2_flatpickr__WEBPACK_IMPORTED_MODULE_5__["Ng2FlatpickrModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
            src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_13__["TableListModule"]
        ], providers: [src_app_service_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"], src_app_service_product_registration_service__WEBPACK_IMPORTED_MODULE_14__["ProductRegistrationService"], src_app_service_put_away_service__WEBPACK_IMPORTED_MODULE_15__["PutAwayService"]]
    })
], OrderViewModule);



/***/ }),

/***/ "./src/app/pages/inbound/order/order.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/inbound/order/order.module.ts ***!
  \*****************************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-routing.module */ "./src/app/pages/inbound/order/order-routing.module.ts");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-flatpickr */ "./node_modules/ng2-flatpickr/__ivy_ngcc__/fesm2015/ng2-flatpickr.js");
/* harmony import */ var _order_view_order_view_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-view/order-view.module */ "./src/app/pages/inbound/order/order-view/order-view.module.ts");








let OrderModule = class OrderModule {
};
OrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _order_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrderRoutingModule"],
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__["BtnAddModule"],
            ng2_flatpickr__WEBPACK_IMPORTED_MODULE_6__["Ng2FlatpickrModule"],
            _order_view_order_view_module__WEBPACK_IMPORTED_MODULE_7__["OrderViewModule"]
        ]
    })
], OrderModule);



/***/ }),

/***/ "./src/app/pages/inbound/unload/unload.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/inbound/unload/unload.component.ts ***!
  \**********************************************************/
/*! exports provided: UnloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnloadComponent", function() { return UnloadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");
/* harmony import */ var src_app_service_unload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/unload.service */ "./src/app/service/unload.service.ts");





let UnloadComponent = class UnloadComponent {
    constructor(paginationService, UnloadService) {
        this.paginationService = paginationService;
        this.UnloadService = UnloadService;
        this.PageTitle = "Manage Unload";
        this.loadform = false;
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.permissionObject = null;
        this.showPagination = false;
        //For Dynamic List
        this.headerData = [];
    }
    ngOnInit() {
        // this.dataService.permission.subscribe((perms) => {
        //   this.permissionObject = perms['self'];
        // });
        this.loadform = false;
        this.setHeaderData();
        this.getObjects();
    }
    setHeaderData() {
        this.headerData.push(new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Order No",
            key: "order.po_no",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Client Name",
            key: "client.label",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Supplier Name",
            key: "supplier.label",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["DateField"]({
            label: "Order Date",
            key: "order.po_date",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["DateField"]({
            label: "Receipt Date",
            key: "receipt_date",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Delievery Name",
            key: "delivery_name",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Receipt Name",
            key: "receiver_name",
        }));
        let canEdit = true;
        let canView = true;
        let canDelete = true;
        let actions = {};
        if (canEdit) {
            actions['edit'] = {
                path: '/inbound/unload/generate/',
                id: 'unload_id'
            };
        }
        if (canView) {
            actions['view'] = {
                path: '/inbound/unload/view/',
                id: 'unload_id'
            };
        }
        if (canDelete) {
            actions['delete'] = {
                path: 'unload/generate/',
                id: 'unload_id'
            };
        }
        let actionColom = new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["ActionField"](actions);
        this.headerData.push(actionColom);
    }
    getObjects() {
        const params = { page: this.currentPage };
        if (this.searchText) {
            params.search = this.searchText;
        }
        this.UnloadService.getUnloadList(params).subscribe((response) => {
            this.loadingState = false;
            if (response.success) {
                this.objectArray = response.data.list ? response.data.list : [];
                this.showPagination = true;
                this.pagination = this.paginationService.getPager(response.data.pagination['total_page'], this.currentPage);
            }
            else {
                this.objectArray = [];
                this.pagination = null;
            }
        }, (error) => {
            this.loadingState = false;
            this.objectArray = [];
            this.pagination = null;
        });
    }
    getPage(page) {
        this.currentPage = page;
        this.getObjects();
    }
    searchObject(text) {
        this.searchText = text;
        this.currentPage = 1;
        this.getObjects();
    }
    onReloadEvent() {
        this.getObjects();
    }
};
UnloadComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_unload_service__WEBPACK_IMPORTED_MODULE_4__["UnloadService"] }
];
UnloadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unload',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./unload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/unload/unload.component.html")).default
    })
], UnloadComponent);



/***/ }),

/***/ "./src/app/pages/inbound/unload/unload.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/inbound/unload/unload.module.ts ***!
  \*******************************************************/
/*! exports provided: UnloadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnloadModule", function() { return UnloadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _unload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unload.component */ "./src/app/pages/inbound/unload/unload.component.ts");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_unload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/unload.service */ "./src/app/service/unload.service.ts");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");
/* harmony import */ var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common-module/table-list/table-list.module */ "./src/app/common-module/table-list/table-list.module.ts");










const routes = [
    {
        path: '',
        component: _unload_component__WEBPACK_IMPORTED_MODULE_3__["UnloadComponent"],
        data: { title: 'unload_list' },
    },
    {
        path: 'generate',
        loadChildren: () => Promise.all(/*! import() | generate-generate-module */[__webpack_require__.e("default~add-sales-order-add-sales-order-module~generate-generate-module~generate-pick-list-generate-~f3681f3e"), __webpack_require__.e("common"), __webpack_require__.e("generate-generate-module")]).then(__webpack_require__.bind(null, /*! ./generate/generate.module */ "./src/app/pages/inbound/unload/generate/generate.module.ts")).then(m => m.GenerateModule),
        data: { title: 'add_unload' },
    },
    {
        path: 'view',
        loadChildren: () => __webpack_require__.e(/*! import() | unloading-view-unloading-view-module */ "unloading-view-unloading-view-module").then(__webpack_require__.bind(null, /*! ./unloading-view/unloading-view.module */ "./src/app/pages/inbound/unload/unloading-view/unloading-view.module.ts")).then(m => m.UnloadingViewModule),
        data: { title: 'view_unload' },
    },
    {
        path: 'generate-unloading',
        loadChildren: () => __webpack_require__.e(/*! import() | generate-unloading-generate-unloading-module */ "generate-unloading-generate-unloading-module").then(__webpack_require__.bind(null, /*! ./generate-unloading/generate-unloading.module */ "./src/app/pages/inbound/unload/generate-unloading/generate-unloading.module.ts")).then(m => m.GenerateUnloadingModule),
        data: { title: 'add_unload' },
    },
];
let UnloadModule = class UnloadModule {
};
UnloadModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_unload_component__WEBPACK_IMPORTED_MODULE_3__["UnloadComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__["BtnAddModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"],
            src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_9__["TableListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
        ], providers: [src_app_service_unload_service__WEBPACK_IMPORTED_MODULE_7__["UnloadService"]]
    })
], UnloadModule);



/***/ }),

/***/ "./src/app/service/product-registration.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/service/product-registration.service.ts ***!
  \*********************************************************/
/*! exports provided: ProductRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRegistrationService", function() { return ProductRegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ProductRegistrationService = class ProductRegistrationService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getProductRegistrationList(param) {
        return this.http.get(`${this.API_URL}/sorting`, { params: param });
    }
    addProductRegistration(data) {
        return this.http.post(`${this.API_URL}/sorting`, data);
    }
    editProductRegistration(id, data) {
        return this.http.put(`${this.API_URL}/sorting/${id}`, data);
    }
    getProductRegistrationById(id, param = null) {
        return this.http.get(`${this.API_URL}/sorting/${id}`, { params: param });
    }
    getMasterData(param = null) {
        return this.http.get(`${this.API_URL}/sorting/drop-down`, { params: param });
    }
    getSortingList(id) {
        return this.http.get(`${this.API_URL}/sorting/get-list/${id}`);
    }
};
ProductRegistrationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProductRegistrationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ProductRegistrationService);



/***/ }),

/***/ "./src/app/service/put-away.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/put-away.service.ts ***!
  \*********************************************/
/*! exports provided: PutAwayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutAwayService", function() { return PutAwayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let PutAwayService = class PutAwayService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getPutAwayList(param) {
        return this.http.get(`${this.API_URL}/transfer-order`, { params: param });
    }
    addPutAway(data) {
        return this.http.post(`${this.API_URL}/transfer-order`, data);
    }
    editPutAway(id, data) {
        return this.http.put(`${this.API_URL}/transfer-order/${id}`, data);
    }
    getPutAwayById(id, param = null) {
        return this.http.get(`${this.API_URL}/transfer-order/${id}`, { params: param });
    }
    getMasterData(param = null) {
        return this.http.get(`${this.API_URL}/transfer-order/master-data`, { params: param });
    }
    getProductByOrderId(id) {
        return this.http.get(`${this.API_URL}/transfer-order/product/${id}`);
    }
    getTransferOrderListById(id, param = null) {
        return this.http.get(`${this.API_URL}/transfer-order/list/${id}`, { params: param });
    }
};
PutAwayService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PutAwayService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], PutAwayService);



/***/ })

}]);
//# sourceMappingURL=pages-inbound-inbound-module-es2015.js.map