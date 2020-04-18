(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-company-company-list-company-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company/company-list/company-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company/company-list/company-list.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col d-flex\">\r\n        <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n        <div class=\"ml-3\">\r\n          <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n        </div>\r\n        <div class=\"ml-3\">\r\n          <app-btn-add [btnName]=\"'Add Company'\" [editData]=\"'/company/add'\"></app-btn-add>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\"\r\n        (clickEvent)=\"onClickEvent($event)\"></app-table-list>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/company/company-list/company-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/company/company-list/company-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: CompanyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyListComponent", function() { return CompanyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/company.service */ "./src/app/service/company.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var _common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");







let CompanyListComponent = class CompanyListComponent {
    constructor(router, paginationService, companyService, dataService) {
        this.router = router;
        this.paginationService = paginationService;
        this.companyService = companyService;
        this.dataService = dataService;
        this.loadform = false;
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.permissionObject = null;
        this.PageTitle = "Company";
        //For Dynamic List
        this.headerData = [];
    }
    ngOnInit() {
        // this.dataService.permission.subscribe((perms) => {
        //   this.permissionObject = perms['company'];
        // });
        this.loadform = false;
        this.setHeaderData();
        this.getObjects();
    }
    setHeaderData() {
        this.headerData.push(new _common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["TextClickEventField"]({
            label: "Company Name",
            key: "company_name",
            viewUrl: {
                path: '/company/edit/',
                id: 'company_id'
            }
        }), new _common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["TextField"]({
            label: "Company Email",
            key: "company_email",
        }));
        let canEdit = true;
        let canDelete = false;
        let canView = true;
        let actions = {};
        if (canEdit) {
            actions['edit'] = {
                path: '/company/edit/',
                id: 'company_id'
            };
        }
        if (canDelete) {
            actions['delete'] = {
                path: 'company/',
                id: 'company_id'
            };
        }
        if (canView) {
            actions['view'] = {
                path: '/company/view/',
                id: 'company_id'
            };
        }
        let actionColom = new _common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["ActionField"](actions);
        this.headerData.push(actionColom);
    }
    getObjects() {
        const params = { page: this.currentPage };
        if (this.searchText) {
            params.search = this.searchText;
        }
        this.companyService.getCompanyList(params).subscribe((response) => {
            this.loadingState = false;
            if (response.success) {
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
    onClickEvent(obj) {
        this.onCompanySelect(obj);
    }
    onCompanySelect(obj) {
        this.companyService.selectCompany(obj.company_id).subscribe((response) => {
            if (response.success) {
                this.dataService.saveToken(response.data.Token['token']);
                this.dataService.updateCompany(response.data.Company);
                this.router.navigateByUrl('/dashboard');
            }
            else {
                this.objectArray = [];
                this.pagination = null;
            }
        });
    }
};
CompanyListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_5__["PaginationService"] },
    { type: src_app_service_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
CompanyListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./company-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company/company-list/company-list.component.html")).default
    })
], CompanyListComponent);



/***/ }),

/***/ "./src/app/pages/company/company-list/company-list.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/company/company-list/company-list.module.ts ***!
  \*******************************************************************/
/*! exports provided: CompanyListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyListModule", function() { return CompanyListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _company_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-list.component */ "./src/app/pages/company/company-list/company-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_module_table_view_table_view_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-module/table-view/table-view.module */ "./src/app/common-module/table-view/table-view.module.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var _common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common-module/table-list/table-list.module */ "./src/app/common-module/table-list/table-list.module.ts");









const routes = [
    {
        path: '',
        component: _company_list_component__WEBPACK_IMPORTED_MODULE_3__["CompanyListComponent"],
        data: { title: 'company_list' }
    },
    {
        path: 'add',
        loadChildren: () => Promise.all(/*! import() | company-add-company-add-module */[__webpack_require__.e("default~add-configuration-add-configuration-module~add-order-add-order-module~add-put-away-add-put-a~71daa61d"), __webpack_require__.e("company-add-company-add-module")]).then(__webpack_require__.bind(null, /*! ../company-add/company-add.module */ "./src/app/pages/company/company-add/company-add.module.ts")).then(m => m.CompanyAddModule),
        data: { title: 'add_company' }
    },
    {
        path: 'edit/:id',
        loadChildren: () => Promise.all(/*! import() | company-add-company-add-module */[__webpack_require__.e("default~add-configuration-add-configuration-module~add-order-add-order-module~add-put-away-add-put-a~71daa61d"), __webpack_require__.e("company-add-company-add-module")]).then(__webpack_require__.bind(null, /*! ../company-add/company-add.module */ "./src/app/pages/company/company-add/company-add.module.ts")).then(m => m.CompanyAddModule),
        data: { title: 'edit_company' }
    },
    {
        path: 'view/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | company-view-company-view-module */ "company-view-company-view-module").then(__webpack_require__.bind(null, /*! ../company-view/company-view.module */ "./src/app/pages/company/company-view/company-view.module.ts")).then(m => m.CompanyViewModule),
        data: { title: 'company_list' }
    },
];
let CompanyListModule = class CompanyListModule {
};
CompanyListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_company_list_component__WEBPACK_IMPORTED_MODULE_3__["CompanyListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_7__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_6__["BtnAddModule"],
            src_app_common_module_table_view_table_view_module__WEBPACK_IMPORTED_MODULE_5__["TableViewModule"],
            _common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_8__["TableListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], CompanyListModule);



/***/ })

}]);
//# sourceMappingURL=pages-company-company-list-company-list-module-es2015.js.map