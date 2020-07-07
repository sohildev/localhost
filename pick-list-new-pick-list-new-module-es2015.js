(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pick-list-new-pick-list-new-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list-new/pick-list-new.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list-new/pick-list-new.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col d-flex\">\r\n                <h2 class=\"mr-auto\">Picking new</h2>\r\n                <div>\r\n                    <ng-select style=\"width: 180px;\" [(ngModel)]=\"status_id\" (change)=\"getObjects()\"\r\n                        [items]=\"statusListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Status\">\r\n                    </ng-select>\r\n                </div>\r\n                <div class=\"ml-3\">\r\n                    <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n                </div>\r\n                <div class=\"ml-3\">\r\n                    <app-btn-add [btnName]=\"'Add PickList'\" [editData]=\"'/outbound/pick-list-new/add'\">\r\n                    </app-btn-add>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\r\n            </app-table-list>\r\n            <pagination [paginationList]=\"pagination\" [currentPage]=\"currentPage\" (onPageChange)=\"getPage($event)\">\r\n            </pagination>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/outbound/pick-list-new/pick-list-new.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/outbound/pick-list-new/pick-list-new.component.ts ***!
  \*************************************************************************/
/*! exports provided: PickListNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickListNewComponent", function() { return PickListNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");
/* harmony import */ var src_app_service_pick_list_new_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/pick-list-new.service */ "./src/app/service/pick-list-new.service.ts");





let PickListNewComponent = class PickListNewComponent {
    constructor(paginationService, pickListNewService) {
        this.paginationService = paginationService;
        this.pickListNewService = pickListNewService;
        this.loadingState = true;
        this.objectArray = [];
        this.headerData = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.statusListArray = [];
    }
    ngOnInit() {
        this.getMasterData();
        this.setHeaderData();
        this.getObjects();
    }
    getMasterData() {
        this.pickListNewService.getListFilterData().subscribe((responce) => {
            if (responce.success) {
                this.statusListArray = responce.data.status;
            }
        });
    }
    setHeaderData() {
        this.headerData.push(new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextViewUrlField"]({
            label: "Pick No",
            key: "pick_no",
            viewUrl: {
                path: '/outbound/pick-list-new/view/',
                id: 'sales_order_id'
            }
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Sales Order No",
            key: 'sales_order_no',
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["DateField"]({
            label: "Order Date",
            key: "sales_order_date",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Customer Name",
            key: "client.label",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Customer Code",
            key: "client.client_code",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["DateField"]({
            label: "Picking Date",
            key: "po_date",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["StatusField"]({
            label: "Status",
            key: "status.label",
        }));
        let canEdit = true;
        let canView = true;
        let canDelete = true;
        let actions = {};
        if (canEdit) {
            actions['edit'] = {
                path: '/outbound/pick-list-new/edit/',
                id: 'sales_order_id'
            };
        }
        if (canView) {
            actions['view'] = {
                path: '/outbound/pick-list-new/view/',
                id: 'sales_order_id'
            };
        }
        if (canDelete) {
            actions['delete'] = {
                path: 'po/',
                id: 'sales_order_id'
            };
        }
        let actionColom = new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["ActionField"](actions);
        this.headerData.push(actionColom);
    }
    getObjects() {
        const params = { page: this.currentPage };
        console.log(this.status_id);
        if (this.status_id) {
            params.status_id = this.status_id;
        }
        if (this.searchText) {
            params.search = this.searchText;
        }
        this.pickListNewService.getPickListNewList(params).subscribe((response) => {
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
};
PickListNewComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_pick_list_new_service__WEBPACK_IMPORTED_MODULE_4__["PickListNewService"] }
];
PickListNewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pick-list-new',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pick-list-new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list-new/pick-list-new.component.html")).default,
    })
], PickListNewComponent);



/***/ }),

/***/ "./src/app/pages/outbound/pick-list-new/pick-list-new.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/outbound/pick-list-new/pick-list-new.module.ts ***!
  \**********************************************************************/
/*! exports provided: PickListNewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickListNewModule", function() { return PickListNewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pick_list_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pick-list-new.component */ "./src/app/pages/outbound/pick-list-new/pick-list-new.component.ts");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");
/* harmony import */ var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common-module/table-list/table-list.module */ "./src/app/common-module/table-list/table-list.module.ts");
/* harmony import */ var src_app_service_pick_list_new_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/pick-list-new.service */ "./src/app/service/pick-list-new.service.ts");












const routes = [
    {
        path: '',
        component: _pick_list_new_component__WEBPACK_IMPORTED_MODULE_3__["PickListNewComponent"],
        data: { title: 'pick_list_list' },
    },
    {
        path: 'add',
        loadChildren: () => Promise.all(/*! import() | add-picklist-add-picklist-module */[__webpack_require__.e("default~add-picklist-add-picklist-module~add-sales-order-add-sales-order-module~generate-generate-mo~7fdd0daa"), __webpack_require__.e("common"), __webpack_require__.e("add-picklist-add-picklist-module")]).then(__webpack_require__.bind(null, /*! ./add-picklist/add-picklist.module */ "./src/app/pages/outbound/pick-list-new/add-picklist/add-picklist.module.ts")).then(m => m.AddPicklistModule),
        data: { title: 'add_pick_list' },
    },
    {
        path: 'edit/:id',
        loadChildren: () => Promise.all(/*! import() | add-picklist-add-picklist-module */[__webpack_require__.e("default~add-picklist-add-picklist-module~add-sales-order-add-sales-order-module~generate-generate-mo~7fdd0daa"), __webpack_require__.e("common"), __webpack_require__.e("add-picklist-add-picklist-module")]).then(__webpack_require__.bind(null, /*! ./add-picklist/add-picklist.module */ "./src/app/pages/outbound/pick-list-new/add-picklist/add-picklist.module.ts")).then(m => m.AddPicklistModule),
        data: { title: 'edit_pick_list' },
    },
    {
        path: 'view/:id',
        loadChildren: () => Promise.all(/*! import() | pick-list-view-pick-list-view-module */[__webpack_require__.e("common"), __webpack_require__.e("pick-list-view-pick-list-view-module")]).then(__webpack_require__.bind(null, /*! ./pick-list-view/pick-list-view.module */ "./src/app/pages/outbound/pick-list-new/pick-list-view/pick-list-view.module.ts")).then(m => m.PickListViewModule),
        data: { title: 'view_pick_list' },
    },
    {
        path: 'pick-view/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | pick-list-view-product-pick-list-view-product-module */ "pick-list-view-product-pick-list-view-product-module").then(__webpack_require__.bind(null, /*! ./pick-list-view-product/pick-list-view-product.module */ "./src/app/pages/outbound/pick-list-new/pick-list-view-product/pick-list-view-product.module.ts")).then(m => m.PickListViewProductModule),
        data: { title: 'view_pick_list' },
    }
];
let PickListNewModule = class PickListNewModule {
};
PickListNewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pick_list_new_component__WEBPACK_IMPORTED_MODULE_3__["PickListNewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__["BtnAddModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"],
            src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_10__["TableListModule"],
        ], providers: [src_app_service_pick_list_new_service__WEBPACK_IMPORTED_MODULE_11__["PickListNewService"]]
    })
], PickListNewModule);



/***/ })

}]);
//# sourceMappingURL=pick-list-new-pick-list-new-module-es2015.js.map