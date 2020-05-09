(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales-order-sales-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/sales-order/sales-order.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/sales-order/sales-order.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n      <div class=\"ml-3\">\r\n        <!-- <app-search></app-search> -->\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <app-btn-add [btnName]=\"'Add Sales Order'\" [editData]=\"'/outbound/sales-order/add'\">\r\n        </app-btn-add>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\r\n      </app-table-list>\r\n      <pagination [paginationList]=\"pagination\" [currentPage]=\"currentPage\" (onPageChange)=\"getPage($event)\">\r\n      </pagination>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/outbound/sales-order/sales-order.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/outbound/sales-order/sales-order.component.ts ***!
  \*********************************************************************/
/*! exports provided: SalesOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesOrderComponent", function() { return SalesOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");
/* harmony import */ var src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/sales-order.service */ "./src/app/service/sales-order.service.ts");





let SalesOrderComponent = class SalesOrderComponent {
    constructor(paginationService, salesOrderService) {
        this.paginationService = paginationService;
        this.salesOrderService = salesOrderService;
        this.PageTitle = "Manage Sales Order";
        this.loadform = false;
        this.loadingState = true;
        this.objectArray = [];
        this.headerData = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.permissionObject = null;
    }
    ngOnInit() {
        // this.dataService.permission.subscribe((perms) => {
        //   this.permissionObject = perms['activity'];
        // });
        this.setHeaderData();
        this.loadform = false;
        this.getObjects();
    }
    setHeaderData() {
        this.headerData.push(new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextViewUrlField"]({
            label: "Sales Order No",
            key: "sales_order_no",
            viewUrl: {
                path: '/outbound/sales-order/view/',
                id: 'sales_order_id'
            }
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Transfer Order No",
            key: '',
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["DateField"]({
            label: "Order Date",
            key: "sales_order_date",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Client Name",
            key: 'client.label',
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["DateField"]({
            label: "Picking Date",
            key: "sales_order_date",
        }));
        let canEdit = true;
        let canView = true;
        let canDelete = true;
        let actions = {};
        if (canEdit) {
            actions['edit'] = {
                path: '/outbound/sales-order/edit/',
                id: 'sales_order_id'
            };
        }
        if (canView) {
            actions['view'] = {
                path: '/outbound/sales-order/view/',
                id: 'sales_order_id'
            };
        }
        if (canDelete) {
            actions['delete'] = {
                path: 'sales-order/',
                id: 'sales_order_id'
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
        this.salesOrderService.getSalesOrderList(params).subscribe((response) => {
            this.loadingState = false;
            if (response.success && response.data) {
                this.objectArray = response.data.list;
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
        // this.currentPage = 1;
        this.getObjects();
    }
    onReloadEvent() {
        this.getObjects();
    }
    searchObject(text) {
        this.searchText = text;
        this.currentPage = 1;
        this.getObjects();
    }
    ngAfterViewChecked() {
    }
};
SalesOrderComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_4__["SalesOrderService"] }
];
SalesOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sales-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sales-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/sales-order/sales-order.component.html")).default
    })
], SalesOrderComponent);



/***/ }),

/***/ "./src/app/pages/outbound/sales-order/sales-order.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/outbound/sales-order/sales-order.module.ts ***!
  \******************************************************************/
/*! exports provided: SalesOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesOrderModule", function() { return SalesOrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sales_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-order.component */ "./src/app/pages/outbound/sales-order/sales-order.component.ts");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-module/table-list/table-list.module */ "./src/app/common-module/table-list/table-list.module.ts");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");
/* harmony import */ var src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/sales-order.service */ "./src/app/service/sales-order.service.ts");










const routes = [
    {
        path: '',
        component: _sales_order_component__WEBPACK_IMPORTED_MODULE_3__["SalesOrderComponent"],
        data: { title: 'sales_order_list' },
    },
    {
        path: 'add',
        loadChildren: () => Promise.all(/*! import() | add-sales-order-add-sales-order-module */[__webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~add-configuration-add-configuration-module~add-orde~d3e4c59f"), __webpack_require__.e("default~add-sales-order-add-sales-order-module~generate-generate-module~generate-pick-list-generate-~f3681f3e"), __webpack_require__.e("common"), __webpack_require__.e("add-sales-order-add-sales-order-module")]).then(__webpack_require__.bind(null, /*! ./add-sales-order/add-sales-order.module */ "./src/app/pages/outbound/sales-order/add-sales-order/add-sales-order.module.ts")).then(m => m.AddSalesOrderModule),
        data: { title: 'add_sales_order' },
    },
    {
        path: 'edit/:id',
        loadChildren: () => Promise.all(/*! import() | add-sales-order-add-sales-order-module */[__webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~add-configuration-add-configuration-module~add-orde~d3e4c59f"), __webpack_require__.e("default~add-sales-order-add-sales-order-module~generate-generate-module~generate-pick-list-generate-~f3681f3e"), __webpack_require__.e("common"), __webpack_require__.e("add-sales-order-add-sales-order-module")]).then(__webpack_require__.bind(null, /*! ./add-sales-order/add-sales-order.module */ "./src/app/pages/outbound/sales-order/add-sales-order/add-sales-order.module.ts")).then(m => m.AddSalesOrderModule),
        data: { title: 'edit_sales_order' },
    },
    {
        path: 'view/:id',
        loadChildren: () => Promise.all(/*! import() | sales-order-view-sales-order-view-module */[__webpack_require__.e("common"), __webpack_require__.e("sales-order-view-sales-order-view-module")]).then(__webpack_require__.bind(null, /*! ./sales-order-view/sales-order-view.module */ "./src/app/pages/outbound/sales-order/sales-order-view/sales-order-view.module.ts")).then(m => m.SalesOrderViewModule),
        data: { title: 'view_sales_order' },
    }
];
let SalesOrderModule = class SalesOrderModule {
};
SalesOrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_sales_order_component__WEBPACK_IMPORTED_MODULE_3__["SalesOrderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__["BtnAddModule"],
            src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_7__["TableListModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
        ], providers: [src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_9__["SalesOrderService"]]
    })
], SalesOrderModule);



/***/ }),

/***/ "./src/app/service/sales-order.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/sales-order.service.ts ***!
  \************************************************/
/*! exports provided: SalesOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesOrderService", function() { return SalesOrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let SalesOrderService = class SalesOrderService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getSalesOrderList(param) {
        return this.http.get(`${this.API_URL}/sales-order`, { params: param });
    }
    addSalesOrder(data) {
        return this.http.post(`${this.API_URL}/sales-order`, data);
    }
    editSalesOrder(id, data) {
        return this.http.put(`${this.API_URL}/sales-order/${id}`, data);
    }
    getSalesOrderById(id, param = null) {
        return this.http.get(`${this.API_URL}/sales-order/${id}`, { params: param });
    }
    getSalesOrderViewById(id) {
        return this.http.get(`${this.API_URL}/sales-order/${id}/view`);
    }
    getSalesOrderMasterData() {
        return this.http.get(`${this.API_URL}/sales-order/master-data`);
    }
    deleteSalesOrder(id) {
        return this.http.delete(`${this.API_URL}/sales-order/${id}`);
    }
    // Product
    getSalesOrderProductList(param = null) {
        return this.http.get(`${this.API_URL}/sales-order-detail`, { params: param });
    }
    getSalesOrderProductMasterData(param = null) {
        return this.http.get(`${this.API_URL}/sales-order-detail/master-data`, { params: param });
    }
    editSalesOrderProduct(id, data) {
        return this.http.put(`${this.API_URL}/sales-order-detail/${id}`, data);
    }
    addSalesOrderProduct(data) {
        return this.http.post(`${this.API_URL}/sales-order-detail`, data);
    }
    deleteSalesOrderProduct(id) {
        return this.http.delete(`${this.API_URL}/sales-order-detail/${id}`);
    }
};
SalesOrderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
SalesOrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], SalesOrderService);



/***/ })

}]);
//# sourceMappingURL=sales-order-sales-order-module-es2015.js.map