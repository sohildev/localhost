(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["put-away-put-away-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/put-away/put-away.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/put-away/put-away.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col d-flex\">\r\n        <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n        <div class=\"ml-3\">\r\n          <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n        </div>\r\n        <div class=\"ml-3\">\r\n          <app-btn-add [btnName]=\"'Add Putaway'\" [editData]=\"'/inbound/put-away/add'\"></app-btn-add>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\r\n      </app-table-list>\r\n      <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\r\n        (onPageChange)=\"getPage($event)\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/inbound/put-away/put-away.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/inbound/put-away/put-away.component.ts ***!
  \**************************************************************/
/*! exports provided: PutAwayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutAwayComponent", function() { return PutAwayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");
/* harmony import */ var src_app_service_put_away_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/put-away.service */ "./src/app/service/put-away.service.ts");





let PutAwayComponent = class PutAwayComponent {
    constructor(paginationService, putawayService) {
        this.paginationService = paginationService;
        this.putawayService = putawayService;
        this.PageTitle = "Manage Putaway";
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
            label: "Order Number",
            key: "order.po_no",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Transfer Order No",
            key: "transfer_order_no",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "SKU",
            key: "sku_no.sku_no",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Bin Code",
            key: "put_away.bin_code",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Bin Tag Id",
            key: "put_away.bin_tag_id",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Putaway Qty",
            key: "put_away.put_away_qty",
        }));
        let canEdit = true;
        let canDelete = true;
        let actions = {};
        if (canEdit) {
            actions['edit'] = {
                path: '/inbound/put-away/edit/',
                id: 'transfer_order_id'
            };
        }
        if (canDelete) {
            actions['delete'] = {
                path: 'transfer-order/',
                id: 'transfer_order_id'
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
        this.putawayService.getPutAwayList(params).subscribe((response) => {
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
PutAwayComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_put_away_service__WEBPACK_IMPORTED_MODULE_4__["PutAwayService"] }
];
PutAwayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-put-away',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./put-away.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/put-away/put-away.component.html")).default,
    })
], PutAwayComponent);



/***/ }),

/***/ "./src/app/pages/inbound/put-away/put-away.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/inbound/put-away/put-away.module.ts ***!
  \***********************************************************/
/*! exports provided: PutAwayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutAwayModule", function() { return PutAwayModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-module/table-list/table-list.module */ "./src/app/common-module/table-list/table-list.module.ts");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _put_away_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./put-away.component */ "./src/app/pages/inbound/put-away/put-away.component.ts");
/* harmony import */ var src_app_service_put_away_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/put-away.service */ "./src/app/service/put-away.service.ts");











const routes = [
    {
        path: '',
        component: _put_away_component__WEBPACK_IMPORTED_MODULE_9__["PutAwayComponent"],
        data: { title: 'product_register_list' },
    },
    {
        path: 'add',
        loadChildren: () => Promise.all(/*! import() | add-put-away-add-put-away-module */[__webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~add-configuration-add-configuration-module~add-orde~79bd05af"), __webpack_require__.e("common"), __webpack_require__.e("add-put-away-add-put-away-module")]).then(__webpack_require__.bind(null, /*! ./add-put-away/add-put-away.module */ "./src/app/pages/inbound/put-away/add-put-away/add-put-away.module.ts")).then(m => m.AddPutAwayModule),
        data: { title: 'add_product_register' },
    },
    {
        path: 'edit',
        loadChildren: () => Promise.all(/*! import() | add-put-away-add-put-away-module */[__webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~add-configuration-add-configuration-module~add-orde~79bd05af"), __webpack_require__.e("common"), __webpack_require__.e("add-put-away-add-put-away-module")]).then(__webpack_require__.bind(null, /*! ./add-put-away/add-put-away.module */ "./src/app/pages/inbound/put-away/add-put-away/add-put-away.module.ts")).then(m => m.AddPutAwayModule),
        data: { title: 'edit_product_register' },
    }
];
let PutAwayModule = class PutAwayModule {
};
PutAwayModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_put_away_component__WEBPACK_IMPORTED_MODULE_9__["PutAwayComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_6__["TableListModule"],
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__["BtnAddModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        ], providers: [src_app_service_put_away_service__WEBPACK_IMPORTED_MODULE_10__["PutAwayService"]]
    })
], PutAwayModule);



/***/ })

}]);
//# sourceMappingURL=put-away-put-away-module-es2015.js.map