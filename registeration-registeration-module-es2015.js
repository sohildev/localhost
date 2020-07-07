(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registeration-registeration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/registeration/registeration.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/registeration/registeration.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col d-flex\">\r\n        <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n        <div class=\"ml-3\">\r\n          <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n        </div>\r\n        <!-- <div class=\"ml-3\">\r\n          <app-btn-add [btnName]=\"'Product Registeration Config'\" [editData]=\"'/inbound/registeration/add'\"></app-btn-add>\r\n        </div> -->\r\n        <div class=\"ml-3\">\r\n          <app-btn-add [btnName]=\"'Add Product Registeration'\" [editData]=\"'/inbound/registeration/add'\"></app-btn-add>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\r\n      </app-table-list>\r\n      <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\r\n        (onPageChange)=\"getPage($event)\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/registeration/sorted-list/sorted-list.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/registeration/sorted-list/sorted-list.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"page-header\">\n    <div class=\"row\">\n      <div class=\"col d-flex\">\n        <h2 class=\"mr-auto\">\n          Order No : {{orderDetais?.po_no}} <br>\n          Product Name : {{productDetials?.label}} - {{productDetials?.sku_no}}<br>\n          Sorted Quantity\n        </h2>\n        <div class=\"ml-3\">\n          <a class=\"btn shadow-none btn-link\" (click)=\"back()\">\n            <i class=\"fa fa-chevron-left mr-2 mt-1\"></i>Back to list\n          </a>\n        </div>\n        <!-- <div class=\"ml-3\">\n          <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\n        </div> -->\n\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\n      </app-table-list>\n      <!-- <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\n          (onPageChange)=\"getPage($event)\">\n        </pagination> -->\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/pages/inbound/registeration/registeration.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/inbound/registeration/registeration.component.ts ***!
  \************************************************************************/
/*! exports provided: RegisterationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationComponent", function() { return RegisterationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");
/* harmony import */ var src_app_service_product_registration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/product-registration.service */ "./src/app/service/product-registration.service.ts");





let RegisterationComponent = class RegisterationComponent {
    constructor(paginationService, productregistrationService) {
        this.paginationService = paginationService;
        this.productregistrationService = productregistrationService;
        this.PageTitle = "Manage Product Registration (Sorting)";
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
            label: "SKU",
            key: "sku_no",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Product",
            key: "product.label",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Serial Number",
            key: "serial_no",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Tag ID",
            key: "tag.label",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Qty",
            key: "qty",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["DateField"]({
            label: "Register Date",
            key: "created_date",
        }));
        let canEdit = true;
        let canDelete = true;
        let actions = {};
        if (canEdit) {
            actions['edit'] = {
                path: '/inbound/registeration/edit/',
                id: 'product_register_id'
            };
        }
        if (canDelete) {
            actions['delete'] = {
                path: 'sorting/',
                id: 'product_register_id'
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
        this.productregistrationService.getProductRegistrationList(params).subscribe((response) => {
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
RegisterationComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_product_registration_service__WEBPACK_IMPORTED_MODULE_4__["ProductRegistrationService"] }
];
RegisterationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registeration',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registeration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/registeration/registeration.component.html")).default
    })
], RegisterationComponent);



/***/ }),

/***/ "./src/app/pages/inbound/registeration/registeration.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/inbound/registeration/registeration.module.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationModule", function() { return RegisterationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _registeration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registeration.component */ "./src/app/pages/inbound/registeration/registeration.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-module/table-list/table-list.module */ "./src/app/common-module/table-list/table-list.module.ts");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _sorted_list_sorted_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sorted-list/sorted-list.component */ "./src/app/pages/inbound/registeration/sorted-list/sorted-list.component.ts");
/* harmony import */ var src_app_service_product_registration_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/product-registration.service */ "./src/app/service/product-registration.service.ts");












const routes = [
    {
        path: '',
        component: _registeration_component__WEBPACK_IMPORTED_MODULE_3__["RegisterationComponent"],
        data: { title: 'product_register_list' },
    },
    {
        path: 'sorted-qty',
        component: _sorted_list_sorted_list_component__WEBPACK_IMPORTED_MODULE_10__["SortedListComponent"],
        data: { title: 'product_register_list' },
    },
    // {
    //   path: 'add',
    //   loadChildren: () => import('./add-registeration/add-registeration.module').then(m => m.AddRegisterationModule),
    //   data: { title: 'add_product_register' },
    // },
    {
        path: 'add',
        loadChildren: () => Promise.all(/*! import() | add-configuration-add-configuration-module */[__webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~add-configuration-add-configuration-module~add-orde~79bd05af"), __webpack_require__.e("common"), __webpack_require__.e("add-configuration-add-configuration-module")]).then(__webpack_require__.bind(null, /*! ./add-configuration/add-configuration.module */ "./src/app/pages/inbound/registeration/add-configuration/add-configuration.module.ts")).then(m => m.AddConfigurationModule),
        data: { title: 'add_product_register' },
    },
    {
        path: 'edit',
        loadChildren: () => Promise.all(/*! import() | add-configuration-add-configuration-module */[__webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~add-configuration-add-configuration-module~add-orde~79bd05af"), __webpack_require__.e("common"), __webpack_require__.e("add-configuration-add-configuration-module")]).then(__webpack_require__.bind(null, /*! ./add-configuration/add-configuration.module */ "./src/app/pages/inbound/registeration/add-configuration/add-configuration.module.ts")).then(m => m.AddConfigurationModule),
        data: { title: 'edit_product_register' },
    },
    {
        path: 'register-product',
        loadChildren: () => Promise.all(/*! import() | add-configuration-add-configuration-module */[__webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~add-configuration-add-configuration-module~add-orde~79bd05af"), __webpack_require__.e("common"), __webpack_require__.e("add-configuration-add-configuration-module")]).then(__webpack_require__.bind(null, /*! ./add-configuration/add-configuration.module */ "./src/app/pages/inbound/registeration/add-configuration/add-configuration.module.ts")).then(m => m.AddConfigurationModule),
        data: { title: 'add_product_register' },
    },
];
let RegisterationModule = class RegisterationModule {
};
RegisterationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_registeration_component__WEBPACK_IMPORTED_MODULE_3__["RegisterationComponent"], _sorted_list_sorted_list_component__WEBPACK_IMPORTED_MODULE_10__["SortedListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_7__["TableListModule"],
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_5__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_6__["BtnAddModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        ], providers: [src_app_service_product_registration_service__WEBPACK_IMPORTED_MODULE_11__["ProductRegistrationService"]]
    })
], RegisterationModule);



/***/ }),

/***/ "./src/app/pages/inbound/registeration/sorted-list/sorted-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/inbound/registeration/sorted-list/sorted-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SortedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortedListComponent", function() { return SortedListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");
/* harmony import */ var src_app_service_product_registration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/product-registration.service */ "./src/app/service/product-registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








let SortedListComponent = class SortedListComponent {
    constructor(paginationService, dataService, location, activatedRoute, productregistrationService) {
        this.paginationService = paginationService;
        this.dataService = dataService;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.productregistrationService = productregistrationService;
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
        if (this.activatedRoute.snapshot.paramMap.get('order_id') && this.activatedRoute.snapshot.paramMap.get('product_id')) {
            this.orderId = this.activatedRoute.snapshot.paramMap.get('order_id');
            this.productId = this.activatedRoute.snapshot.paramMap.get('product_id');
        }
        this.subscription = this.dataService.OrderDetails.subscribe((data) => {
            if (data) {
                this.orderDetais = data;
            }
        });
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
            label: "Sorted Qty",
            key: "sorted_qty",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Tag",
            key: "tag.label",
        }));
        let canEdit = true;
        let canDelete = true;
        let actions = {};
        if (canEdit) {
            actions['edit'] = {
                path: '/inbound/registeration/edit/',
                id: 'product_register_id'
            };
        }
        if (canDelete) {
            actions['delete'] = {
                path: 'sorting/',
                id: 'product_register_id'
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
        this.productregistrationService.getSortedListById(this.productId, this.orderId, params).subscribe((response) => {
            this.loadingState = false;
            if (response.success) {
                this.objectArray = response.data.list ? response.data.list : [];
                this.productDetials = response.data.product;
                this.showPagination = true;
                // this.pagination = this.paginationService.getPager(response.data.pagination['total_page'], this.currentPage);
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
    back() {
        this.location.back();
    }
    searchObject(text) {
        this.searchText = text;
        this.currentPage = 1;
        this.getObjects();
    }
    onReloadEvent() {
        this.getObjects();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
SortedListComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_service_product_registration_service__WEBPACK_IMPORTED_MODULE_4__["ProductRegistrationService"] }
];
SortedListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sorted-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sorted-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/registeration/sorted-list/sorted-list.component.html")).default
    })
], SortedListComponent);



/***/ })

}]);
//# sourceMappingURL=registeration-registeration-module-es2015.js.map