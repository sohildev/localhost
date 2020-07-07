(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pick-list-view-product-pick-list-view-product-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list-new/pick-list-view-product/pick-list-view-product.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list-new/pick-list-view-product/pick-list-view-product.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"page-header border-b\">\n        <div class=\"row m-0\">\n            <h2 class=\"mr-auto\">Product PickList view\n            </h2>\n            <div class=\"ml-3\"><a class=\"btn shadow-none btn-link\" (click)=\"back()\"><i\n                        class=\"fa fa-chevron-left mr-2 mt-1\"></i>Back to\n                    Order </a></div>\n            <div class=\"ml-3\"><a (click)=\"print()\" class=\"btn btn-dark\"><i class=\"fa fa-print mr-2 mt-1\"></i>Print </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div *ngIf=\"objectArray\" class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col-8 d-flex align-items-center mb-0\">\n                    <div>\n                        <img src=\"./assets/images/barcodegen.png\" alt=\"\" width=\"150\" />\n                    </div>\n                </div>\n                <div class=\"col-4 text-right\">\n                    <small>{{objectArray?.receipt_date |date:date_format :timezone}} </small><br />\n                    <small>{{objectArray?.receipt_date |date:time_format :timezone}}</small>\n                </div>\n            </div>\n            <div class=\"row mb-4\">\n                <div class=\"col-12 text-center\">\n                    <p class=\"mb-0\">PickList No. : {{objectArray?.pick_list_no}}</p>\n                    <h6 class=\"ml-3 mb-0 border-bottom d-inline pb-2 px-3\">{{objectArray?.client?.label}}</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div *ngIf=\"objectArray?.client_address\" class=\"col-sm-6\">\n                    <div class=\"row\">\n                        <div class=\"col-md-5\">\n                            <h6>Sold To:</h6>\n                            <div class=\"mt-1\">\n                                {{objectArray?.client_address[0]?.street_address}}<br />\n                                {{objectArray?.client_address[0]?.label}}-\n                                {{objectArray?.client_address[0]?.pin_code}}<br />\n                                {{objectArray?.client_address[0]?.state}} ,\n                                {{objectArray?.client_address[0]?.country_name}}\n                                <br />\n                            </div>\n                        </div>\n                        <div class=\"col-md-5\">\n                            <h6>Ship To:</h6>\n                            <p class=\"mt-1\">\n                                {{objectArray?.client_address[0]?.street_address}}<br />\n                                {{objectArray?.client_address[0]?.label}}-\n                                {{objectArray?.client_address[0]?.pin_code}}<br />\n                                {{objectArray?.client_address[0]?.state}} ,\n                                {{objectArray?.client_address[0]?.country_name}}\n                                <br />\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n\n                    <div class=\"row  justify-content-end text-right\">\n                        <div class=\"col-md-6 col-lg-4\">\n                            <div><label class=\"mb-0 text-muted font-w\">Sales Order Number</label>\n                                <div class=\"\"> {{objectArray?.sales_order_no}} </div>\n                            </div>\n                            <div class=\"mt-2\"><label class=\"mb-0 text-muted font-w\">Customer Number</label>\n                                <div class=\"\"> {{objectArray?.client?.client_code}} </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6 col-lg-4\">\n                            <div><label class=\"mb-0 text-muted font-w\">Sales Order Date</label>\n                                <div class=\"\">{{objectArray?.sales_order_date |date:date_format :timezone}}</div>\n                            </div>\n                            <div class=\"mt-2\"><label class=\"mb-0 text-muted font-w\">PickList Date</label>\n                                <div class=\"\">{{objectArray?.pick_list_date |date:date_format :timezone}}</div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"border my-2 border-left-0 border-right-0\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th width=\"5%\">No.</th>\n                                        <th width=\"35%\">Product</th>\n                                        <th width=\"10%\">SKU No.</th>\n                                        <th width=\"20%\">Location</th>\n                                        <th width=\"5%\">Pick Date</th>\n                                        <th width=\"10%\" class=\"text-right\">Qty</th>\n                                        <th width=\"15%\" class=\"text-right\">Amount</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let item of objectArray?.product_list; let i=index\">\n                                        <td> {{i+1}} </td>\n                                        <td> {{item?.product?.label}} </td>\n                                        <td> {{item?.product?.sku_no}} </td>\n                                        <td>{{item?.location ? item?.location :'-'}}</td>\n                                        <td>30/06/2020</td>\n                                        <td class=\"text-right\">{{item?.product_qty}}</td>\n                                        <td class=\"text-right\"> {{currentCompany?.currency?.label }}\n                                            {{item?.price |number}}</td>\n                                    </tr>\n\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/pages/outbound/pick-list-new/pick-list-view-product/pick-list-view-product.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/outbound/pick-list-new/pick-list-view-product/pick-list-view-product.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PickListViewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickListViewProductComponent", function() { return PickListViewProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_pick_list_new_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/pick-list-new.service */ "./src/app/service/pick-list-new.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






let PickListViewProductComponent = class PickListViewProductComponent {
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
            this.currentCompany = response;
        });
        this.dataService.currentCompany.subscribe((response) => {
            if (response) {
                this.timezone = String(response.timezone.format);
                this.time_format = response.time_format.label;
                this.date_format = response.date_format.label;
            }
        });
    }
    ngOnInit() {
        this.pickListNewService.getPickListNewviewProductById(this.viewId).subscribe((response) => {
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
PickListViewProductComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_service_pick_list_new_service__WEBPACK_IMPORTED_MODULE_3__["PickListNewService"] }
];
PickListViewProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pick-list-view-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pick-list-view-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list-new/pick-list-view-product/pick-list-view-product.component.html")).default,
    })
], PickListViewProductComponent);



/***/ }),

/***/ "./src/app/pages/outbound/pick-list-new/pick-list-view-product/pick-list-view-product.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/outbound/pick-list-new/pick-list-view-product/pick-list-view-product.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: PickListViewProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickListViewProductModule", function() { return PickListViewProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pick_list_view_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pick-list-view-product.component */ "./src/app/pages/outbound/pick-list-new/pick-list-view-product/pick-list-view-product.component.ts");





const routes = [
    {
        path: '',
        component: _pick_list_view_product_component__WEBPACK_IMPORTED_MODULE_4__["PickListViewProductComponent"]
    }
];
let PickListViewProductModule = class PickListViewProductModule {
};
PickListViewProductModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pick_list_view_product_component__WEBPACK_IMPORTED_MODULE_4__["PickListViewProductComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
        ]
    })
], PickListViewProductModule);



/***/ })

}]);
//# sourceMappingURL=pick-list-view-product-pick-list-view-product-module-es2015.js.map