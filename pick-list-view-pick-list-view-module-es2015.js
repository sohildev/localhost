(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pick-list-view-pick-list-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list/pick-list-view/pick-list-view.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list/pick-list-view/pick-list-view.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"page-header border-b\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n      <div class=\"ml-3\">\r\n        <a class=\"btn shadow-none btn-link\" (click)=\"back()\">\r\n          <i class=\"fa fa-chevron-left mr-2 mt-1\"></i>Back to Order\r\n        </a>\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <a class=\"btn btn-dark\" (click)=\"print()\">\r\n          <i class=\"fa fa-print mr-2 mt-1\"></i>Print\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div>\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Sales Order Number</label>\r\n            <div>\r\n              {{orderDetails?.sales_order_no}}\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Sales Order Date</label>\r\n            <div>{{orderDetails?.sales_order_date |date:date_format :timezone}}</div>\r\n          </div>\r\n        </div>\r\n  \r\n  \r\n        <div class=\"col-md-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-7 text-right align-items-center d-flex justify-content-end\">\r\n              <label class=\"text-muted mb-1 font-weight-bold\">PickList Date</label>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n              <div class=\"border p-2\">{{orderDetails?.pick_list_date  |date:date_format :timezone}}</div>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"row\">\r\n            <div class=\"col-md-7 text-right align-items-center d-flex justify-content-end\">\r\n              <label class=\"text-muted mb-1 font-weight-bold\">Product Arrival Date &Time</label>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n              <div *ngIf=\"orderDetails?.arrival_date\" class=\"border p-2 border-top-0 border-bottom-0\">\r\n                {{orderDetails?.arrival_date  |date:date_format :timezone\r\n                }}\r\n              </div>\r\n              <div *ngIf=\"!orderDetails?.arrival_date\" class=\"border p-2 border-top-0 border-bottom-0\">-\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-7 text-right align-items-center d-flex justify-content-end\">\r\n              <label class=\"text-muted mb-1 font-weight-bold\">Invoice No. </label>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n              <div class=\"border p-2\">{{orderDetails?.invoice_no ? orderDetails?.invoice_no :'-'}}</div>\r\n            </div>\r\n          </div>\r\n  \r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"border my-4 border-left-0 border-right-0\">\r\n        <div class=\"row p-3\">\r\n          <div class=\"col-md-6\">\r\n            <h5 class=\"mb-3\">From</h5>\r\n            <div class=\"form-check form-check-inline\">\r\n              <div class=\"checkbox-container mr-1\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"all\">\r\n                <span class=\"checkmark\"></span>\r\n              </div>\r\n              <label class=\"form-check-label\" for=\"inlineCheckbox1\">LOCL</label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n              <div class=\"checkbox-container mr-1\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"all\">\r\n                <span class=\"checkmark\"></span>\r\n              </div>\r\n              <label class=\"form-check-label\" for=\"inlineCheckbox1\">INTR</label>\r\n            </div>\r\n  \r\n            <!-- <p class=\"mt-3 mb-0\">{{orderDetails?.supplier?.supplier_code}} : {{orderDetails?.supplier?.supplier_name}}</p>\r\n            <p class=\"my-1\">\r\n              <span *ngIf=\"orderDetails?.supplier?.address?.street_address\">\r\n                {{orderDetails?.supplier?.address?.street_address}} ,</span>\r\n              <span *ngIf=\"orderDetails?.supplier?.address?.city\"> {{orderDetails?.supplier?.address?.city}} ,</span>\r\n              <span *ngIf=\"orderDetails?.supplier?.address?.state\"> {{orderDetails?.supplier?.address?.state}}\r\n                ,</span>\r\n              <span *ngIf=\"orderDetails?.supplier?.address?.country_name\">\r\n                ({{orderDetails?.supplier?.address?.country_name}} )</span>\r\n            </p>\r\n            <p class=\"mb-0\"> {{orderDetails?.supplier?.dial_code}} {{orderDetails?.supplier?.phone_number}} </p> -->\r\n  \r\n  \r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <h5>To</h5>\r\n            <p class=\"mt-3 mb-0\">{{orderDetails?.to_details?.client_code}} : {{orderDetails?.to_details?.client_name}}</p>\r\n            <p class=\"my-1\">\r\n              <span *ngIf=\"orderDetails?.to_details?.address?.street_address\">\r\n                {{orderDetails?.to_details?.address?.street_address}} ,</span>\r\n              <span *ngIf=\"orderDetails?.to_details?.address?.city\"> {{orderDetails?.to_details?.address?.city}} ,</span>\r\n              <span *ngIf=\"orderDetails?.to_details?.address?.state\"> {{orderDetails?.to_details?.address?.state}}\r\n                ,</span>\r\n              <span *ngIf=\"orderDetails?.to_details?.address?.country_name\">\r\n                ({{orderDetails?.to_details?.address?.country_name}} )</span>\r\n            </p>\r\n            <p class=\"mb-0\"> {{orderDetails?.to_details?.dial_code}} {{orderDetails?.to_details?.phone_number}} </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-hover\">\r\n              <thead>\r\n                <tr>\r\n                  <th>No.</th>\r\n                  <th>Product</th>\r\n                  <th>SKU No.</th>\r\n                  <th>Product Qty</th>\r\n                </tr>\r\n  \r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of productList; let i=index\">\r\n                  <!-- {{item?.}}  -->\r\n                  <td>\r\n                    {{i}}\r\n                  </td>\r\n                  <td>\r\n                    {{item?.product_name ? item?.product_name :'-'}}\r\n                  </td>\r\n                  <td>\r\n                    {{item?.sku_no ? item?.sku_no :'-'}}\r\n                  </td>\r\n                  <td>\r\n                    {{item?.product_qty }}\r\n                  </td>\r\n                </tr>\r\n                <tr *ngIf=\"productList.length == 0\">\r\n                  <td colspan=\"6\">No records found</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"row my-4 border border-left-0 border-right-0 py-3\">\r\n      <div class=\"col-md-6\">\r\n        <h5>Delivery By</h5>\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-md-6\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Name</label>\r\n            <div>{{orderDetails?.delivery_name ? orderDetails?.delivery_name :'-' }}</div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Phone No.</label>\r\n            <div>{{orderDetails?.delivery_phone ? orderDetails?.delivery_phone :'-' }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-md-6\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Vehicle No.</label>\r\n            <div>{{orderDetails?.delivery_vehicle_no ? orderDetails?.delivery_vehicle_no :'-' }}</div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Signature</label>\r\n            <div>{{orderDetails?.delivery_sign ? orderDetails?.delivery_sign :'-' }}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <h5>Received By</h5>\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-md-6\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Name</label>\r\n            <div>{{orderDetails?.receiver_name ? orderDetails?.receiver_name :'-' }}</div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Phone No.</label>\r\n            <div>{{orderDetails?.receiver_phone ? orderDetails?.receiver_phone :'-' }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-md-6\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Signature</label>\r\n            <div>{{orderDetails?.receiver_sign ? orderDetails?.receiver_sign :'-' }}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n");

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