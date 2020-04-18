(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-list-order-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/order-table-list/order-table-list.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/order-table-list/order-table-list.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-responsive\">\r\n    <table class=\"table table-hover\">\r\n        <thead>\r\n            <tr>\r\n                <th *ngFor=\"let head of TableHead\" scope=\"col\">{{head}} </th>\r\n                <th *ngIf=\"showActions\" class=\"text-right\">\r\n                    Actions\r\n                </th>\r\n            </tr>\r\n\r\n        </thead>\r\n        <tbody>\r\n            <tr mdbTableCol *ngFor=\"let el of TableValue\" scope=\"row\">\r\n                <ng-template ngFor let-head [ngForOf]='TableHead'>\r\n                    <td>\r\n                        {{el[head]}}\r\n                    </td>\r\n                </ng-template>\r\n                <td *ngIf=\"showActions\">\r\n\r\n                    <div class=\"action-drop dropdown text-right\">\r\n\r\n                        <a href=\"#\" data-toggle=\"dropdown\" class=\"btn btn-default btn-sm btn-icon-only\" title=\"\">\r\n                            <i class=\"fa fa-ellipsis-h\"></i>\r\n                        </a>\r\n                        <div class=\"dropdown-menu dropdown-icon-menu drop-menu-right action-dropdown\"\r\n                            style=\"width: 100px;\">\r\n\r\n                            <a class=\"dropdown-item\" [routerLink]=\"TableActionAddLink\"><i\r\n                                    class=\"fa fa-eye fa-fw text-primary\">\r\n                                </i> View</a>\r\n                            <a class=\"dropdown-item\" routerLink=\"javascript:void(0);\"><i\r\n                                    class=\"fa fa-trash fa-fw text-primary\">\r\n                                </i> Delete</a>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n\r\n\r\n            </tr>\r\n        </tbody>\r\n\r\n    </table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-list/order-list.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-list/order-list.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"page-header\">\n      <div class=\"row m-0\">\n        <h2 class=\"mr-auto\">{{PageTitle}}</h2>\n        <div class=\"ml-3\">\n            <ng-select style=\"width: 200px;\" [(ngModel)]=\"status_id\" (change)=\"getObjects()\"\n              [items]=\"statusListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Status\">\n            </ng-select>\n        </div>\n        <div *ngIf=\"status_id==1\" class=\"ml-3\">\n            <ng-select style=\"width: 200px;\" [(ngModel)]=\"satage_id\" (change)=\"getObjects()\"\n              [items]=\"stagesListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Stages\">\n            </ng-select>\n        </div>\n        <div class=\"ml-3\">\n            <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\n        </div>\n        <div class=\"ml-3\">\n          <app-btn-add [btnName]=\"'Add Order'\" [editData]=\"'/inbound/order/add'\"></app-btn-add>\n        </div>\n      </div>\n  \n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        \n        <div class=\"row\">\n          <div class=\"col mt-1\">\n            <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\n            </app-table-list>\n            <pagination [paginationList]=\"pagination\" [currentPage]=\"currentPage\" (onPageChange)=\"getPage($event)\">\n            </pagination>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  ");

/***/ }),

/***/ "./src/app/common-module/order-table-list/order-table-list.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/common-module/order-table-list/order-table-list.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-responsive{\r\n    overflow: hidden;\r\n    padding-bottom: 100px;\r\n}\r\n.table thead th{    \r\n    border-bottom: 0px;\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    color: #6c6a90;\r\n    border-top: 0px;    \r\n}\r\n.table th, .table td {    \r\n    border-top: 1px solid #ebeaf5;\r\n}\r\n.table td{\r\n    /* color: #58566d; */\r\n    color: #231f67;\r\n    padding: 0.75rem 0.75rem 0.25rem;\r\n}\r\n.table tr:last-child td{\r\n    border-bottom: 1px solid #ebeaf5;\r\n}\r\n.inner-dropdown{\r\n    left: -100% !important;\r\n    top: 0 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLW1vZHVsZS9vcmRlci10YWJsZS1saXN0L29yZGVyLXRhYmxlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24tbW9kdWxlL29yZGVyLXRhYmxlLWxpc3Qvb3JkZXItdGFibGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXJlc3BvbnNpdmV7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG59XHJcbi50YWJsZSB0aGVhZCB0aHsgICAgXHJcbiAgICBib3JkZXItYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM2YzZhOTA7XHJcbiAgICBib3JkZXItdG9wOiAwcHg7ICAgIFxyXG59XHJcbi50YWJsZSB0aCwgLnRhYmxlIHRkIHsgICAgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ViZWFmNTtcclxufVxyXG4udGFibGUgdGR7XHJcbiAgICAvKiBjb2xvcjogIzU4NTY2ZDsgKi9cclxuICAgIGNvbG9yOiAjMjMxZjY3O1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAwLjc1cmVtIDAuMjVyZW07XHJcbn1cclxuXHJcbi50YWJsZSB0cjpsYXN0LWNoaWxkIHRke1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmVhZjU7XHJcbn1cclxuXHJcbi5pbm5lci1kcm9wZG93bntcclxuICAgIGxlZnQ6IC0xMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDAgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/common-module/order-table-list/order-table-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/common-module/order-table-list/order-table-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: OrderTableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTableListComponent", function() { return OrderTableListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderTableListComponent = class OrderTableListComponent {
    constructor() { }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrderTableListComponent.prototype, "TableHead", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrderTableListComponent.prototype, "TableValue", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrderTableListComponent.prototype, "TableActionAddLink", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrderTableListComponent.prototype, "showActions", void 0);
OrderTableListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-table-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-table-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/order-table-list/order-table-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-table-list.component.css */ "./src/app/common-module/order-table-list/order-table-list.component.css")).default]
    })
], OrderTableListComponent);



/***/ }),

/***/ "./src/app/common-module/order-table-list/order-table-list.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/common-module/order-table-list/order-table-list.module.ts ***!
  \***************************************************************************/
/*! exports provided: OrderTableListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTableListModule", function() { return OrderTableListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _order_table_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-table-list.component */ "./src/app/common-module/order-table-list/order-table-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let OrderTableListModule = class OrderTableListModule {
};
OrderTableListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_order_table_list_component__WEBPACK_IMPORTED_MODULE_3__["OrderTableListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        exports: [
            _order_table_list_component__WEBPACK_IMPORTED_MODULE_3__["OrderTableListComponent"]
        ]
    })
], OrderTableListModule);



/***/ }),

/***/ "./src/app/pages/inbound/order/order-list/order-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/inbound/order/order-list/order-list.component.ts ***!
  \************************************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/messages */ "./src/app/messages.ts");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var src_app_service_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/order.service */ "./src/app/service/order.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");







let OrderListComponent = class OrderListComponent {
    constructor(paginationService, orderService, dataService) {
        this.paginationService = paginationService;
        this.orderService = orderService;
        this.dataService = dataService;
        this.PageTitle = "Manage Order";
        this.loadform = false;
        this.loadingState = true;
        this.objectArray = [];
        this.statusListArray = [];
        this.stagesListArray = [];
        this.headerData = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.permissionObject = null;
        this.status_id = 1;
    }
    ngOnInit() {
        // this.dataService.permission.subscribe((perms) => {
        //   this.permissionObject = perms['activity'];
        // });
        this.getMasterData();
        this.setHeaderData();
        this.loadform = false;
        this.getObjects();
    }
    getMasterData() {
        this.orderService.getOrderfilterData().subscribe((responce) => {
            if (responce.success) {
                this.statusListArray = responce.data.status;
                this.stagesListArray = responce.data.status_type;
            }
        });
    }
    setHeaderData() {
        this.headerData.push(new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["TextViewUrlField"]({
            label: "Order #",
            key: "po_no",
            viewUrl: {
                path: '/inbound/order/view/',
                id: 'po_id'
            }
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["DateField"]({
            label: "PO Date",
            key: "po_date",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["TextField"]({
            label: "Case #",
            key: '',
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["TextField"]({
            label: "Supplier",
            key: "supplier.label",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["TextField"]({
            label: "Client",
            key: "client.label",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["MultiStatusField"]({
            label: "Status",
            key: "status",
        }));
        let canEdit = true;
        let canView = true;
        let canDelete = true;
        let actions = {};
        if (canEdit) {
            actions['edit'] = {
                path: '/inbound/order/edit/',
                id: 'po_id'
            };
        }
        if (canView) {
            actions['view'] = {
                path: '/inbound/order/view/',
                id: 'po_id'
            };
        }
        if (canDelete) {
            actions['delete'] = {
                path: 'po/',
                id: 'po_id'
            };
        }
        let actionColom = new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["ActionField"](actions);
        this.headerData.push(actionColom);
    }
    getObjects() {
        const params = { page: this.currentPage };
        if (this.status_id) {
            params.po_status = this.status_id;
        }
        if (this.satage_id && this.status_id && this.status_id == 1) {
            params.status_id = this.satage_id;
        }
        if (this.searchText) {
            params.search = this.searchText;
        }
        this.orderService.getOrderList(params).subscribe((response) => {
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
    deleteObject(object) {
        swal.fire({
            title: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_header_text,
            text: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_smalll_text,
            icon: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_dialogue_type,
            showCancelButton: true,
            confirmButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_confirm_button,
            cancelButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_cancel_button,
        }).then((result) => {
            if (result.value) {
                this.orderService.deleteOrder(object.po_id).subscribe((response) => {
                    if (response.success) {
                        this.getObjects();
                    }
                });
            }
        }).catch(swal.noop);
    }
};
OrderListComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"] },
    { type: src_app_service_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
OrderListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/order-list/order-list.component.html")).default
    })
], OrderListComponent);



/***/ }),

/***/ "./src/app/pages/inbound/order/order-list/order-list.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/inbound/order/order-list/order-list.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrderListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListModule", function() { return OrderListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_module_order_table_list_order_table_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-module/order-table-list/order-table-list.module */ "./src/app/common-module/order-table-list/order-table-list.module.ts");
/* harmony import */ var src_app_service_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/order.service */ "./src/app/service/order.service.ts");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");
/* harmony import */ var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-module/table-list/table-list.module */ "./src/app/common-module/table-list/table-list.module.ts");
/* harmony import */ var _order_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order-list.component */ "./src/app/pages/inbound/order/order-list/order-list.component.ts");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");













const routes = [
    {
        path: '',
        component: _order_list_component__WEBPACK_IMPORTED_MODULE_8__["OrderListComponent"]
    }
];
let OrderListModule = class OrderListModule {
};
OrderListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_order_list_component__WEBPACK_IMPORTED_MODULE_8__["OrderListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_common_module_order_table_list_order_table_list_module__WEBPACK_IMPORTED_MODULE_4__["OrderTableListModule"],
            src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_7__["TableListModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"],
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_9__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_10__["BtnAddModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"]
        ], providers: [src_app_service_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]]
    })
], OrderListModule);



/***/ })

}]);
//# sourceMappingURL=order-list-order-list-module-es2015.js.map