(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-type-order-type-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/order-type/add-order-type/add-order-type.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/order-type/add-order-type/add-order-type.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div>\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">\r\n              Order Type Name <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['order_type_name']\" type=\"text\" class=\"form-control\"\r\n                placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Order Type Code <em>*</em></label>\r\n            <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.order_type_code}\">\r\n              <input [formControl]=\"addForm.controls['order_type_code']\" type=\"text\" class=\"form-control\"\r\n                placeholder=\"\">\r\n              <span *ngIf=\"formErrors.order_type_code\" class=\"help-block\"\r\n                [innerHTML]=\"formErrors.order_type_code\"></span>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"text-right border-top pt-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" routerLink=\"/manage/order-type\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-secondary ml-2\"\r\n          [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\" [disabled]=\"showLoader\">Submit</button>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/order-type/order-type-list/order-type-list.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/order-type/order-type-list/order-type-list.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n      <div class=\"ml-3\">\r\n        <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <app-btn-add [btnName]=\"'Add Order Type'\" [editData]=\"'/manage/order-type/add'\"></app-btn-add>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\r\n      </app-table-list>\r\n      <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\r\n        (onPageChange)=\"getPage($event)\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/master/order-type/add-order-type/add-order-type.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/master/order-type/add-order-type/add-order-type.component.ts ***!
  \************************************************************************************/
/*! exports provided: AddOrderTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrderTypeComponent", function() { return AddOrderTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var src_app_service_order_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/order-type.service */ "./src/app/service/order-type.service.ts");






let AddOrderTypeComponent = class AddOrderTypeComponent {
    constructor(router, activatedRoute, fb, ordertypeService, commonservice) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.ordertypeService = ordertypeService;
        this.commonservice = commonservice;
        this.PageTitle = "Order Type";
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
            order_type_code: null,
            apierror: null,
        };
        this.isEditing = false;
        this.editId = null;
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }
        this.addForm = this.fb.group({
            order_type_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            order_type_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    ngOnInit() {
        if (this.isEditing) {
            this.getEditObject();
        }
    }
    getEditObject() {
        this.ordertypeService.getOrderTypeById(this.editId).subscribe((response) => {
            if (response.success) {
                this.addForm.patchValue(response.data);
            }
            else {
                this.router.navigateByUrl('/manage/order-type');
            }
        });
    }
    submitForm(formData) {
        if (formData.valid) {
            this.showLoader = true;
            const data = new FormData();
            data.append('order_type_name', formData.value.order_type_name);
            data.append('order_type_code', formData.value.order_type_code);
            if (this.isEditing) {
                this.ordertypeService.editOrderType(this.editId, data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/order-type');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('order_type_code')) {
                                this.formErrors['order_type_code'] = obj['order_type_code'];
                            }
                            else {
                                this.formErrors['apierror'] = `* ${response.error}`;
                            }
                        });
                    }
                }, (error) => {
                    this.showLoader = false;
                });
            }
            else {
                this.ordertypeService.addOrderType(data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/order-type');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('order_type_code')) {
                                this.formErrors['order_type_code'] = obj['order_type_code'];
                            }
                            else {
                                this.formErrors['apierror'] = `* ${response.error}`;
                            }
                        });
                    }
                }, (error) => {
                    this.showLoader = false;
                });
            }
        }
    }
};
AddOrderTypeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_order_type_service__WEBPACK_IMPORTED_MODULE_5__["OrderTypeService"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
AddOrderTypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-order-type',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-order-type.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/order-type/add-order-type/add-order-type.component.html")).default
    })
], AddOrderTypeComponent);



/***/ }),

/***/ "./src/app/pages/master/order-type/order-type-list/order-type-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/master/order-type/order-type-list/order-type-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OrderTypeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTypeListComponent", function() { return OrderTypeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");
/* harmony import */ var src_app_service_order_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/order-type.service */ "./src/app/service/order-type.service.ts");





let OrderTypeListComponent = class OrderTypeListComponent {
    constructor(paginationService, ordertypeService) {
        this.paginationService = paginationService;
        this.ordertypeService = ordertypeService;
        this.PageTitle = "Manage Order Type";
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
            label: "Order Type Name",
            key: "order_type_name",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Order Type Code",
            key: "order_type_code",
        }));
        let canEdit = true;
        let canDelete = true;
        let actions = {};
        if (canEdit) {
            actions['edit'] = {
                path: '/manage/order-type/edit/',
                id: 'order_type_id'
            };
        }
        if (canDelete) {
            actions['delete'] = {
                path: 'order_type/',
                id: 'order_type_id'
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
        this.ordertypeService.getOrderTypeList(params).subscribe((response) => {
            this.loadingState = false;
            if (response.success) {
                this.objectArray = response.data.list;
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
OrderTypeListComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_order_type_service__WEBPACK_IMPORTED_MODULE_4__["OrderTypeService"] }
];
OrderTypeListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-type-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-type-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/order-type/order-type-list/order-type-list.component.html")).default
    })
], OrderTypeListComponent);



/***/ }),

/***/ "./src/app/pages/master/order-type/order-type.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/master/order-type/order-type.module.ts ***!
  \**************************************************************/
/*! exports provided: OrderTypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTypeModule", function() { return OrderTypeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-module/table-list/table-list.module */ "./src/app/common-module/table-list/table-list.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");
/* harmony import */ var _order_type_list_order_type_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order-type-list/order-type-list.component */ "./src/app/pages/master/order-type/order-type-list/order-type-list.component.ts");
/* harmony import */ var _add_order_type_add_order_type_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-order-type/add-order-type.component */ "./src/app/pages/master/order-type/add-order-type/add-order-type.component.ts");
/* harmony import */ var src_app_service_order_type_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/service/order-type.service */ "./src/app/service/order-type.service.ts");














const routes = [
    {
        path: "",
        component: _order_type_list_order_type_list_component__WEBPACK_IMPORTED_MODULE_11__["OrderTypeListComponent"],
        data: { title: 'order_type_list' }
    },
    {
        path: "add",
        component: _add_order_type_add_order_type_component__WEBPACK_IMPORTED_MODULE_12__["AddOrderTypeComponent"],
        data: { title: 'add_order_type' }
    },
    {
        path: 'edit/:id',
        component: _add_order_type_add_order_type_component__WEBPACK_IMPORTED_MODULE_12__["AddOrderTypeComponent"],
        data: { title: 'edit_order_type' }
    },
];
let OrderTypeModule = class OrderTypeModule {
};
OrderTypeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_order_type_list_order_type_list_component__WEBPACK_IMPORTED_MODULE_11__["OrderTypeListComponent"], _add_order_type_add_order_type_component__WEBPACK_IMPORTED_MODULE_12__["AddOrderTypeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_6__["TableListModule"],
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__["BtnAddModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_8__["FormValidationModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_10__["PaginationModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ], providers: [src_app_service_order_type_service__WEBPACK_IMPORTED_MODULE_13__["OrderTypeService"]]
    })
], OrderTypeModule);



/***/ }),

/***/ "./src/app/service/order-type.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/order-type.service.ts ***!
  \***********************************************/
/*! exports provided: OrderTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTypeService", function() { return OrderTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let OrderTypeService = class OrderTypeService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getOrderTypeList(param) {
        return this.http.get(`${this.API_URL}/order_type`, { params: param });
    }
    addOrderType(data) {
        return this.http.post(`${this.API_URL}/order_type`, data);
    }
    editOrderType(id, data) {
        return this.http.put(`${this.API_URL}/order_type/${id}`, data);
    }
    getOrderTypeById(id, param = null) {
        return this.http.get(`${this.API_URL}/order_type/${id}`, { params: param });
    }
};
OrderTypeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
OrderTypeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], OrderTypeService);



/***/ })

}]);
//# sourceMappingURL=order-type-order-type-module-es2015.js.map