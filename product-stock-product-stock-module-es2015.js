(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-stock-product-stock-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/search/search.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/search/search.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"input-group search-box\">\r\n  <input type=\"text\" class=\"form-control\" #search (keyup.enter)=\"searchAction(search.value)\" name=\"search\"\r\n    autocomplete=\"off\" placeholder=\"{{placeholder}}\">\r\n  <div class=\"input-group-append\">\r\n    <button type=\"button\" (click)=\"searchAction(search.value)\" class=\"input-group-text pointer\"><i\r\n        class=\"la la-search\"></i></button>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<style>\r\n  .search-box {\r\n    width: 280px;\r\n  }\r\n\r\n  .search-box .form-control {\r\n    background-color: white;\r\n    border: none;\r\n  }\r\n\r\n  .search-box .input-group-text {\r\n    background-color: #a5a2e2;\r\n    border: 1px solid white;\r\n    color: white;\r\n    border-radius: 0 3px 3px 0;\r\n  }\r\n</style>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock-list/product-stock-list.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock-list/product-stock-list.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <!-- <div class=\"page-header border-b\">\n        <div class=\"row m-0\">\n            <h2 class=\"mr-auto\">{{PageTitle}}</h2>\n        </div>\n        <div class=\"ml-3\">\n            <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\n          </div>\n    </div> -->\n\n    <div class=\"page-header border-b\">\n        <div class=\"row m-0\">\n            <h2 class=\"mr-auto\">{{PageTitle}}</h2>\n            <div class=\"ml-3\">\n                <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\n            </div>\n\n        </div>\n\n    </div>\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link active\" id=\"productStock-tab\" data-toggle=\"tab\" href=\"#productStock\" role=\"tab\"\n                        aria-controls=\"productStock\" [routerLink]=\"['/stock/search-product']\" routerLinkActive=\"router-link-active\" aria-selected=\"true\">Product Stock</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-toggle=\"tab\"  role=\"tab\"\n                        aria-controls=\"productStock\" aria-selected=\"true\" [routerLink]=\"['/stock/search-product/summary']\" routerLinkActive=\"router-link-active\" >Stock Summary</a>\n                </li>\n\n            </ul>\n            <div class=\"tab-content\" id=\"myTabContent\">\n                <div class=\"tab-pane fade show active\" id=\"productStock\" role=\"tabpanel\"\n                    aria-labelledby=\"productStock-tab\">\n                    <div class=\"table-responsive-md mt-3\">\n                        <table class=\"table\">\n                            <thead class=\"thead-dark\">\n                                <tr>\n                                    <th class=\"align-items-center d-flex\">\n                                        <div class=\"form-check form-check-inline mr-0\">\n                                            <div class=\"checkbox-container\">\n                                                <input class=\"form-check-input\" type=\"checkbox\" value=\"all\">\n                                                <span class=\"checkmark\"></span>\n                                            </div>\n                                        </div>\n                                    </th>\n                                    <th>Product</th>\n                                    <th>SKU</th>\n                                    <th>Category</th>\n                                    <th>Qty</th>\n                                    <th>Bin</th>\n                                    <th>Bin Location</th>\n                                    <th>Stock In Date</th>\n                                    <th>Stock In Days</th>\n                                    <th>Stock Out Date</th>\n                                    <th>Status</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let item of objectArray; let i=index\">\n                                    <td class=\"align-items-center d-flex\">\n                                        <div class=\"form-check form-check-inline mr-0\">\n                                            <div class=\"checkbox-container\">\n                                                <input class=\"form-check-input\" type=\"checkbox\" value=\"all\">\n                                                <span class=\"checkmark\"></span>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>{{item?.product?.label ? item?.product?.label :\"-\"}}</td>\n                                    <td>{{item?.product?.sku_no ? item?.product?.sku_no :\"-\"}}</td>\n                                    <td>{{item?.category?.label ? item?.category?.label :\"-\"}}</td>\n                                    <td>{{item?.qty}} {{item?.unit?.label}}</td>\n                                    <td>{{item?.bin?.bin_code ? item?.bin?.bin_code :\"-\"}}</td>\n                                    <td>{{item?.location_code}}</td>\n                                    <td>{{item?.stock_datetime|date:date_format :timezone}} </td>\n                                    <td>{{calcDate(item.stock_datetime)}}</td>\n                                    <td>\n                                        <span *ngIf=\"item?.stock_out_date;else outdate\">\n                                            {{item?.stock_out_date|date:date_format :timezone}}\n                                        </span>\n                                        <ng-template #outdate>\n                                            <span> - </span>\n                                        </ng-template>\n                                    </td>\n                                    <td>\n                                        <span class=\"badge\" [ngClass]=\"{\n                                            'badge-success': item?.status?.value == '3',\n                                            'badge-primary': item?.status?.value == '4',\n                                            'badge-warning text-white': item?.status?.value == '2',\n                                            'badge-danger': item?.status?.value == '1',\n                                            'badge-info': item?.status?.value == '0' }\">\n                                            {{item?.status?.label  }}\n                                        </span>\n                                    </td>\n                                </tr>\n                                <tr *ngIf=\"!loadingState && objectArray?.length == 0\">\n                                    <td colspan=\"11\">No records found</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\n                        (onPageChange)=\"getPage($event)\">\n                    </pagination>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock-summary-list/product-stock-summary-list.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock-summary-list/product-stock-summary-list.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"page-header border-b\">\n        <div class=\"row m-0\">\n            <h2 class=\"mr-auto\">{{PageTitle}}</h2>\n            <div class=\"ml-3\">\n                <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\n            </div>\n\n        </div>\n\n    </div>\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" id=\"productStock-tab\" data-toggle=\"tab\" href=\"#productStock\" role=\"tab\"\n                        aria-controls=\"productStock\" [routerLink]=\"['/stock/search-product']\" routerLinkActive=\"router-link-active\" aria-selected=\"true\">Product Stock</a>\n                </li>\n                \n                <li class=\"nav-item\">\n                    <a class=\"nav-link active\" id=\"productStocksummary-tab\" data-toggle=\"tab\" href=\"#productStocksummary\" role=\"tab\"\n                        aria-controls=\"productStocksummary\"  aria-selected=\"true\">Stock Summary</a>\n                </li>\n\n            </ul>\n            <div class=\"tab-content\" id=\"myTabContent\">\n                <div class=\"tab-pane fade show active\" id=\"productStocksummary\" role=\"tabpanel\"\n                    aria-labelledby=\"productStocksummary-tab\">\n                    <div class=\"table-responsive-md mt-3\">\n                        <table class=\"table\">\n                            <thead class=\"thead-dark\">\n                                <tr>\n                                    <th>Product</th>\n                                    <th>SKU</th>\n                                    <th>Category</th>\n                                    <th>Qty</th>\n                                    <th>Volume Total</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let item of objectArray; let i=index\">\n                                    <td>{{item?.product?.label ? item?.product?.label :\"-\"}}</td>\n                                    <td>{{item?.product?.sku_no ? item?.product?.sku_no :\"-\"}}</td>\n                                    <td>{{item?.category?.label ? item?.category?.label :\"-\"}}</td>\n                                    <td>{{item?.qty}} {{item?.unit?.label}}</td>\n                                    <td>{{item?.volume}}</td>\n                                </tr>\n                                <tr *ngIf=\"!loadingState && objectArray?.length == 0\">\n                                    <td colspan=\"5\">No records found</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\n                        (onPageChange)=\"getPage($event)\">\n                    </pagination>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/common-module/search/search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/common-module/search/search.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SearchComponent = class SearchComponent {
    constructor() {
        this.text = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    searchAction(text) {
        this.text.emit(text);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchComponent.prototype, "text", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchComponent.prototype, "placeholder", void 0);
SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'search-box',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/search/search.component.html")).default
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/common-module/search/search.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/common-module/search/search.module.ts ***!
  \*******************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.component */ "./src/app/common-module/search/search.component.ts");




let SearchModule = class SearchModule {
};
SearchModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
        ]
    })
], SearchModule);



/***/ }),

/***/ "./src/app/pages/operation/product-stock/product-stock-list/product-stock-list.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/operation/product-stock/product-stock-list/product-stock-list.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ProductStockListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStockListComponent", function() { return ProductStockListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/product-stock.service */ "./src/app/service/product-stock.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");





let ProductStockListComponent = class ProductStockListComponent {
    constructor(paginationService, productStockService, dataService) {
        this.paginationService = paginationService;
        this.productStockService = productStockService;
        this.dataService = dataService;
        this.PageTitle = "Product Stock";
        this.loadform = false;
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.permissionObject = null;
        this.showPagination = false;
        this.date_format = "M/d/yy";
        //For Dynamic List
        this.headerData = [];
    }
    ngOnInit() {
        // this.dataService.permission.subscribe((perms) => {
        //   this.permissionObject = perms['product_stock'];
        // });
        this.dataService.currentCompany.subscribe((response) => {
            if (response) {
                this.timezone = String(response.timezone.format);
                ;
                this.time_format = response.time_format.label;
                this.date_format = response.date_format.label;
                this.currentCompany = response;
            }
        });
        this.loadform = false;
        this.getObjects();
    }
    getObjects() {
        const params = { page: this.currentPage };
        if (this.searchText) {
            params.search = this.searchText;
        }
        this.productStockService.getProductStockList(params).subscribe((response) => {
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
    calcDate(date1) {
        date1 = new Date(date1);
        if (date1) {
            let date2 = new Date();
            let diff = Math.floor(date2.getTime() - date1);
            let day = 1000 * 60 * 60 * 24;
            let ndays = Math.floor(diff / day);
            let years = Math.floor(ndays / 365);
            ndays = ndays - (365 * years);
            let months = Math.floor(ndays / 30);
            let days = ndays - Math.floor(months * 30);
            let message = '';
            if (days && days != undefined && days != null) {
                message = Math.abs(days) + " days ";
            }
            if (months) {
                message += Math.abs(months) + " months ";
            }
            if (years) {
                message += Math.abs(years) + " years ";
            }
            if (message) {
                message += "ago \n";
                return 'Last  ' + message;
            }
            else {
                return "Today";
            }
        }
    }
};
ProductStockListComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_3__["ProductStockService"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
ProductStockListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-stock-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-stock-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock-list/product-stock-list.component.html")).default
    })
], ProductStockListComponent);



/***/ }),

/***/ "./src/app/pages/operation/product-stock/product-stock-summary-list/product-stock-summary-list.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/operation/product-stock/product-stock-summary-list/product-stock-summary-list.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ProductStockSummaryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStockSummaryListComponent", function() { return ProductStockSummaryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/product-stock.service */ "./src/app/service/product-stock.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");





let ProductStockSummaryListComponent = class ProductStockSummaryListComponent {
    constructor(paginationService, productStockService, dataService) {
        this.paginationService = paginationService;
        this.productStockService = productStockService;
        this.dataService = dataService;
        this.PageTitle = "Stock Summary";
        this.loadform = false;
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.permissionObject = null;
        this.showPagination = false;
        this.date_format = "M/d/yy";
        //For Dynamic List
        this.headerData = [];
    }
    ngOnInit() {
        // this.dataService.permission.subscribe((perms) => {
        //   this.permissionObject = perms['product_stock'];
        // });
        this.dataService.currentCompany.subscribe((response) => {
            if (response) {
                this.timezone = String(response.timezone.format);
                ;
                this.time_format = response.time_format.label;
                this.date_format = response.date_format.label;
                this.currentCompany = response;
            }
        });
        this.loadform = false;
        this.getObjects();
    }
    getObjects() {
        const params = { page: this.currentPage };
        if (this.searchText) {
            params.search = this.searchText;
        }
        this.productStockService.getProductStockSummeryList(params).subscribe((response) => {
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
};
ProductStockSummaryListComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_3__["ProductStockService"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
ProductStockSummaryListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-stock-summary-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-stock-summary-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock-summary-list/product-stock-summary-list.component.html")).default
    })
], ProductStockSummaryListComponent);



/***/ }),

/***/ "./src/app/pages/operation/product-stock/product-stock.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/operation/product-stock/product-stock.module.ts ***!
  \***********************************************************************/
/*! exports provided: routes, ProductStockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStockModule", function() { return ProductStockModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/product-stock.service */ "./src/app/service/product-stock.service.ts");
/* harmony import */ var _product_stock_list_product_stock_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-stock-list/product-stock-list.component */ "./src/app/pages/operation/product-stock/product-stock-list/product-stock-list.component.ts");
/* harmony import */ var _product_stock_summary_list_product_stock_summary_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-stock-summary-list/product-stock-summary-list.component */ "./src/app/pages/operation/product-stock/product-stock-summary-list/product-stock-summary-list.component.ts");










const routes = [
    {
        path: '',
        component: _product_stock_list_product_stock_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductStockListComponent"],
        data: { title: 'product_stock_list' },
    },
    {
        path: 'summary',
        component: _product_stock_summary_list_product_stock_summary_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductStockSummaryListComponent"],
        data: { title: 'product_sammary_list' },
    }
];
let ProductStockModule = class ProductStockModule {
};
ProductStockModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_product_stock_list_product_stock_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductStockListComponent"], _product_stock_summary_list_product_stock_summary_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductStockSummaryListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"]
        ], providers: [src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_7__["ProductStockService"]]
    })
], ProductStockModule);



/***/ }),

/***/ "./src/app/service/pagination.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/pagination.service.ts ***!
  \***********************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PaginationService = class PaginationService {
    constructor() { }
    getPager(totalPages, currentPage = 1) {
        if (totalPages !== undefined && totalPages !== null && totalPages !== 0) {
            // ensure current page isn't out of range
            if (currentPage < 1) {
                currentPage = 1;
            }
            else if (currentPage > totalPages) {
                currentPage = totalPages;
            }
            let startPage, endPage;
            if (totalPages <= 10) {
                // less than 10 total pages so show all
                startPage = 1;
                endPage = totalPages;
            }
            else {
                // more than 10 total pages so calculate start and end pages
                if (currentPage <= 6) {
                    startPage = 1;
                    endPage = 10;
                }
                else if (currentPage + 4 >= totalPages) {
                    startPage = totalPages - 9;
                    endPage = totalPages;
                }
                else {
                    startPage = currentPage - 5;
                    endPage = currentPage + 4;
                }
            }
            // create an array of pages to ng-repeat in the pager control
            const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
            // return object with all pager properties required by the view
            return {
                currentPage: currentPage,
                totalPages: totalPages,
                startPage: startPage,
                endPage: endPage,
                pages: pages
            };
        }
    }
};
PaginationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PaginationService);



/***/ }),

/***/ "./src/app/service/product-stock.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/product-stock.service.ts ***!
  \**************************************************/
/*! exports provided: ProductStockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStockService", function() { return ProductStockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ProductStockService = class ProductStockService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getProductStockList(param) {
        return this.http.get(`${this.API_URL}/product-stock/list`, { params: param });
    }
    getProductStockSummeryList(param) {
        return this.http.get(`${this.API_URL}/product-stock/summary-list`, { params: param });
    }
};
ProductStockService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProductStockService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ProductStockService);



/***/ }),

/***/ "./src/app/shared/directive/number.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/directive/number.directive.ts ***!
  \******************************************************/
/*! exports provided: NumberDirective, FloatNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberDirective", function() { return NumberDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatNumberDirective", function() { return FloatNumberDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NumberDirective = class NumberDirective {
    constructor(_el) {
        this._el = _el;
    }
    onKeyDown(event) {
        const e = event;
        if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+C
            // (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+V
            // (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105 ||
            (e.keyCode === 110) || (e.keyCode === 190))) {
            e.preventDefault();
        }
    }
};
NumberDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
], NumberDirective.prototype, "onKeyDown", null);
NumberDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[number]'
    })
], NumberDirective);

let FloatNumberDirective = class FloatNumberDirective {
    constructor(_el) {
        this._el = _el;
    }
    onKeyDown(event) {
        const e = event;
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+C
            // (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+V
            // (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    }
};
FloatNumberDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
], FloatNumberDirective.prototype, "onKeyDown", null);
FloatNumberDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[floatNumber]'
    })
], FloatNumberDirective);



/***/ }),

/***/ "./src/app/shared/pipe/status.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/shared/pipe/status.pipe.ts ***!
  \********************************************/
/*! exports provided: TransactionStatusPipe, PricePipe, TransactionIconsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionStatusPipe", function() { return TransactionStatusPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricePipe", function() { return PricePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionIconsPipe", function() { return TransactionIconsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TransactionStatusPipe = class TransactionStatusPipe {
    transform(value, args) {
        let text = null;
        if (value) {
            switch (value.value) {
                case 1:
                    text = `<small class="badge badge-pill badge-default">${value.label}</small>`;
                    break;
                case 2:
                    text = `<small class="badge badge-pill badge-primary">${value.label}</small>`;
                    break;
                case 3:
                    text = `<small class="badge badge-pill badge-success">${value.label}</small>`;
                    break;
                case 4:
                    text = `<small class="badge badge-pill badge-danger">${value.label}</small>`;
                    break;
                default:
                    text = null;
                    break;
            }
            return text;
        }
    }
};
TransactionStatusPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'transactionStatus'
    })
], TransactionStatusPipe);

let PricePipe = class PricePipe {
    transform(value, args) {
        return value ? parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2 }) : '00';
        // return parseFloat(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
};
PricePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'price'
    })
], PricePipe);

let TransactionIconsPipe = class TransactionIconsPipe {
    transform(value, args) {
        let text = null;
        if (value) {
            switch (value.value) {
                case 1:
                    text = '<span class="la la-check-circle text-success"> </span>';
                    break;
                case 2:
                    text = '<span class="la la-times-circle text-danger"> </span>';
                    break;
                case 3:
                    text = '<span class="la la-check-circle text-success"> </span>';
                    break;
                case 4:
                    text = '<span class="la la-times-circle text-danger"> </span>';
                    break;
                default:
                    text = null;
                    break;
            }
            return text;
        }
    }
};
TransactionIconsPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'transactionIcons'
    })
], TransactionIconsPipe);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directive/number.directive */ "./src/app/shared/directive/number.directive.ts");
/* harmony import */ var _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe/status.pipe */ "./src/app/shared/pipe/status.pipe.ts");





let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["NumberDirective"],
            _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["FloatNumberDirective"],
            _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["PricePipe"],
            _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["TransactionStatusPipe"],
            _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["TransactionIconsPipe"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["NumberDirective"],
            _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["PricePipe"],
            _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["TransactionStatusPipe"],
            _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["TransactionIconsPipe"],
            _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["FloatNumberDirective"]
        ]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=product-stock-product-stock-module-es2015.js.map