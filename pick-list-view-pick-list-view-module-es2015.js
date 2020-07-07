(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pick-list-view-pick-list-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list-new/pick-list-view/pick-list-view.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list-new/pick-list-view/pick-list-view.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"page-header border-b\">\r\n        <div class=\"row m-0\">\r\n            <h2 class=\"mr-auto\">PickList view </h2>\r\n            <div class=\"ml-3\"><a class=\"btn shadow-none btn-link\" (click)=\"back()\"><i\r\n                        class=\"fa fa-chevron-left mr-2 mt-1\"></i>Back to\r\n                    Order </a></div>\r\n            <div class=\"ml-3\"><a (click)=\"print()\" class=\"btn btn-dark\"><i class=\"fa fa-print mr-2 mt-1\"></i>Print </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"objectArray\" class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-8 d-flex align-items-center mb-0\">\r\n                    <div>\r\n                        <img src=\"./assets/images/barcodegen.png\" alt=\"\" width=\"150\" />\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"row mb-4\">\r\n                <div class=\"col-12 text-center\">\r\n                    <p class=\"mb-0\">Sales Order Number : {{objectArray?.sales_order_no}}</p>\r\n                    <h6 class=\"ml-3 mb-0 border-bottom d-inline pb-2 px-3\">{{objectArray?.client?.label}}</h6>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div *ngIf=\"objectArray?.client_address\" class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <h6>Sold To:</h6>\r\n                            <div class=\"mt-1\">\r\n                                {{objectArray?.client_address[0]?.street_address}}<br />\r\n                                {{objectArray?.client_address[0]?.label}}-\r\n                                {{objectArray?.client_address[0]?.pin_code}}<br />\r\n                                {{objectArray?.client_address[0]?.state}} ,\r\n                                {{objectArray?.client_address[0]?.country_name}}\r\n                                <br />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <h6>Ship To:</h6>\r\n                            <p class=\"mt-1\">\r\n                                {{objectArray?.client_address[0]?.street_address}}<br />\r\n                                {{objectArray?.client_address[0]?.label}}-\r\n                                {{objectArray?.client_address[0]?.pin_code}}<br />\r\n                                {{objectArray?.client_address[0]?.state}} ,\r\n                                {{objectArray?.client_address[0]?.country_name}}\r\n                                <br />\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"row  justify-content-end text-right\">\r\n                        <div class=\"col-md-6 col-lg-4\">\r\n                            <div><label class=\"mb-0 text-muted font-w\">Sales Order Number</label>\r\n                                <div class=\"\"> {{objectArray?.sales_order_no}} </div>\r\n                            </div>\r\n                            <div class=\"mt-2\"><label class=\"mb-0 text-muted font-w\">Customer Number</label>\r\n                                <div class=\"\"> {{objectArray?.client?.client_code}} </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-lg-4\">\r\n                            <div><label class=\"mb-0 text-muted font-w\">Sales Order Date</label>\r\n                                <div class=\"\">{{objectArray?.sales_order_date |date:date_format :timezone}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"border my-2 border-left-0 border-right-0\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th width=\"5%\">No.</th>\r\n                                        <th width=\"35%\">PickList No.</th>\r\n                                        <th width=\"5%\">Pick Date</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of objectArray?.pick_list; let i=index\">\r\n                                        <td> {{i+1}} </td>\r\n                                        <td> <a [routerLink]=\"['/outbound/pick-list-new/pick-view',item?.pick_list_id]\">{{item?.pick_list_no}}\r\n                                            </a></td>\r\n                                        <td> {{item?.pick_list_date |date:date_format :timezone}} </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list/pick-list-view/pick-list-view.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list/pick-list-view/pick-list-view.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"page-header border-b\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n      <div class=\"ml-3\">\r\n        <a class=\"btn shadow-none btn-link\" (click)=\"back()\">\r\n          <i class=\"fa fa-chevron-left mr-2 mt-1\"></i>Back to Order\r\n        </a>\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <a class=\"btn btn-dark\" (click)=\"print()\">\r\n          <i class=\"fa fa-print mr-2 mt-1\"></i>Print\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div>\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Sales Order Number</label>\r\n            <div>\r\n              {{orderDetails?.sales_order_no}}\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Sales Order Date</label>\r\n            <div>{{orderDetails?.sales_order_date |date:date_format :timezone}}</div>\r\n          </div>\r\n\r\n          <div *ngIf=\"orderDetails?.picked_by\" class=\"mt-3\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Picked By</label>\r\n            <div>{{orderDetails?.picked_by}}</div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-7 text-right align-items-center d-flex justify-content-end\">\r\n              <label class=\"text-muted mb-1 font-weight-bold\">PickList Date</label>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n              <div class=\"border p-2\">\r\n                {{orderDetails?.pick_list_date  |date:date_format :timezone}}\r\n               <span *ngIf=\"orderDetails?.pick_list_date\"> {{ (orderDetails?.pick_list_date) |date:time_format :timezone }}\r\n               </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-7 text-right align-items-center d-flex justify-content-end\">\r\n              <label class=\"text-muted mb-1 font-weight-bold\">Invoice No. </label>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n              <div class=\"border p-2\">{{orderDetails?.invoice_no ? orderDetails?.invoice_no :'-'}}</div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"border my-4 border-left-0 border-right-0\">\r\n        <div class=\"row p-3\">\r\n          <div class=\"col-md-6\">\r\n            <h6>To</h6>\r\n            <p class=\"mt-3 mb-0\">{{orderDetails?.client?.client_code}}\r\n              <span *ngIf=\"orderDetails?.client?.client_name\"> : {{orderDetails?.client?.client_name}}</span>\r\n            </p>\r\n            <p class=\"my-1\">\r\n              <span *ngIf=\"orderDetails?.client?.address?.street_address\">\r\n                {{orderDetails?.client?.address?.street_address}} ,</span>\r\n              <span *ngIf=\"orderDetails?.client?.address?.city\"> {{orderDetails?.client?.address?.city}}\r\n                ,</span>\r\n              <span *ngIf=\"orderDetails?.client?.address?.state\"> {{orderDetails?.client?.address?.state}}\r\n              </span>\r\n              <span *ngIf=\"orderDetails?.client?.address?.country_name\">\r\n                ( {{orderDetails?.client?.address?.country_name}} )</span>\r\n            </p>\r\n            <p class=\"mb-0\"> {{orderDetails?.client?.dial_code}} {{orderDetails?.client?.phone_number}} </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-hover\">\r\n              <thead>\r\n                <tr>\r\n                  <th>No.</th>\r\n                  <th>Product</th>\r\n                  <th>SKU No.</th>\r\n                  <th>Product Qty</th>\r\n                </tr>\r\n\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of productList; let i=index\">\r\n                  <!-- {{item?.}}  -->\r\n                  <td>\r\n                    {{i+1}}\r\n                  </td>\r\n                  <td>\r\n                    {{item?.product_name ? item?.product_name :'-'}}\r\n                  </td>\r\n                  <td>\r\n                    {{item?.sku_no ? item?.sku_no :'-'}}\r\n                  </td>\r\n                  <td>\r\n                    {{item?.product_qty }}\r\n                  </td>\r\n                </tr>\r\n                <tr *ngIf=\"productList.length == 0\">\r\n                  <td colspan=\"6\">No records found</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"row my-4 border border-left-0 border-right-0 py-3\">\r\n      <div class=\"col-md-6\">\r\n        <h5>Delivery By</h5>\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-md-6\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Name</label>\r\n            <div>{{orderDetails?.delivery_name ? orderDetails?.delivery_name :'-' }}</div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Phone No.</label>\r\n            <div>{{orderDetails?.delivery_phone ? orderDetails?.delivery_phone :'-' }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-md-6\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Vehicle No.</label>\r\n            <div>{{orderDetails?.delivery_vehicle_no ? orderDetails?.delivery_vehicle_no :'-' }}</div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Signature</label>\r\n            <div>{{orderDetails?.delivery_sign ? orderDetails?.delivery_sign :'-' }}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <h5>Received By</h5>\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-md-6\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Name</label>\r\n            <div>{{orderDetails?.receiver_name ? orderDetails?.receiver_name :'-' }}</div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Phone No.</label>\r\n            <div>{{orderDetails?.receiver_phone ? orderDetails?.receiver_phone :'-' }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-md-6\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Signature</label>\r\n            <div>{{orderDetails?.receiver_sign ? orderDetails?.receiver_sign :'-' }}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n\r\n\r\n\r\n</div>");

/***/ }),

/***/ "./src/app/pages/outbound/pick-list-new/pick-list-view/pick-list-view.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/outbound/pick-list-new/pick-list-view/pick-list-view.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PickListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickListViewComponent", function() { return PickListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_pick_list_new_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/pick-list-new.service */ "./src/app/service/pick-list-new.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






let PickListViewComponent = class PickListViewComponent {
    constructor(activatedRoute, dataService, location, pickListNewService) {
        this.activatedRoute = activatedRoute;
        this.dataService = dataService;
        this.location = location;
        this.pickListNewService = pickListNewService;
        this.date_format = "M/d/yy";
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.viewId = this.activatedRoute.snapshot.paramMap.get('id');
        }
        this.dataService.currentCompany.subscribe((response) => {
            if (response) {
                this.timezone = String(response.timezone.format);
                this.time_format = response.time_format.label;
                this.date_format = response.date_format.label;
            }
        });
    }
    ngOnInit() {
        this.pickListNewService.getPickListNewById(this.viewId).subscribe((response) => {
            if (response.success) {
                this.objectArray = response.data;
            }
        });
    }
    print() {
        window.print();
    }
    back() {
        this.location.back();
    }
};
PickListViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_service_pick_list_new_service__WEBPACK_IMPORTED_MODULE_3__["PickListNewService"] }
];
PickListViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pick-list-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pick-list-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list-new/pick-list-view/pick-list-view.component.html")).default,
    })
], PickListViewComponent);



/***/ }),

/***/ "./src/app/pages/outbound/pick-list-new/pick-list-view/pick-list-view.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/outbound/pick-list-new/pick-list-view/pick-list-view.module.ts ***!
  \**************************************************************************************/
/*! exports provided: PickListViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickListViewModule", function() { return PickListViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pick_list_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pick-list-view.component */ "./src/app/pages/outbound/pick-list-new/pick-list-view/pick-list-view.component.ts");





const routes = [
    {
        path: '',
        component: _pick_list_view_component__WEBPACK_IMPORTED_MODULE_4__["PickListViewComponent"]
    }
];
let PickListViewModule = class PickListViewModule {
};
PickListViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pick_list_view_component__WEBPACK_IMPORTED_MODULE_4__["PickListViewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
        ]
    })
], PickListViewModule);



/***/ }),

/***/ "./src/app/pages/outbound/pick-list/pick-list-view/pick-list-view.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/outbound/pick-list/pick-list-view/pick-list-view.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PickListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickListViewComponent", function() { return PickListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_pick_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/pick-list.service */ "./src/app/service/pick-list.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");






let PickListViewComponent = class PickListViewComponent {
    constructor(activatedRoute, pickListService, dataService, location) {
        this.activatedRoute = activatedRoute;
        this.pickListService = pickListService;
        this.dataService = dataService;
        this.location = location;
        this.PageTitle = "PickList View";
        this.orderDetails = {};
        this.productList = [];
        this.date_format = "M/d/yy";
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.viewId = this.activatedRoute.snapshot.paramMap.get('id');
        }
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
        this.getObject();
    }
    back() {
        this.location.back();
    }
    getObject() {
        this.pickListService.getPickListGeneratedViewById(this.viewId).subscribe((response) => {
            if (response.success) {
                this.orderDetails = response.data.order_detail;
                this.productList = response.data.product;
                // this.pagination = this.paginationService.getPager(response.data.pagination['total_page'], this.currentPage);
            }
            else {
                this.orderDetails = {};
                this.productList = [];
            }
        }, (error) => {
            this.orderDetails = {};
            this.productList = [];
        });
    }
    print() {
        window.print();
    }
    convertUTCDateToLocalDate(date_string_you_received) {
        let date = new Date(date_string_you_received);
        let newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
        let offset = date.getTimezoneOffset() / 60;
        let hours = date.getHours();
        newDate.setHours(hours - offset);
        return newDate;
    }
};
PickListViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_pick_list_service__WEBPACK_IMPORTED_MODULE_3__["PickListService"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
PickListViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pick-list-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pick-list-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list/pick-list-view/pick-list-view.component.html")).default
    })
], PickListViewComponent);



/***/ }),

/***/ "./src/app/pages/outbound/pick-list/pick-list-view/pick-list-view.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/outbound/pick-list/pick-list-view/pick-list-view.module.ts ***!
  \**********************************************************************************/
/*! exports provided: PickListViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickListViewModule", function() { return PickListViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pick_list_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pick-list-view.component */ "./src/app/pages/outbound/pick-list/pick-list-view/pick-list-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_pick_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/pick-list.service */ "./src/app/service/pick-list.service.ts");






const routes = [
    {
        path: ':id',
        component: _pick_list_view_component__WEBPACK_IMPORTED_MODULE_3__["PickListViewComponent"]
    }
];
let PickListViewModule = class PickListViewModule {
};
PickListViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pick_list_view_component__WEBPACK_IMPORTED_MODULE_3__["PickListViewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ], providers: [src_app_service_pick_list_service__WEBPACK_IMPORTED_MODULE_5__["PickListService"]]
    })
], PickListViewModule);



/***/ })

}]);
//# sourceMappingURL=pick-list-view-pick-list-view-module-es2015.js.map