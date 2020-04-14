(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["warehouse-warehouse-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/warehouse/add-warehouse/add-warehouse.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/warehouse/add-warehouse/add-warehouse.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div>\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Warehouse Name <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['warehouse_name']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Country <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <ng-select [formControl]=\"addForm.controls['country_id']\" (change)=\"getCountryName($event)\"\r\n                [items]=\"countryListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Country\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">State <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['state']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">City\r\n              <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['city']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Street\r\n              Address <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['street_address']\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Warehouse Code <em>*</em></label>\r\n            <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.warehouse_code}\">\r\n              <input [formControl]=\"addForm.controls['warehouse_code']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n            <span *ngIf=\"formErrors.warehouse_code\" class=\"help-block\" [innerHTML]=\"formErrors.warehouse_code\"></span>\r\n\r\n          </div>\r\n          <!-- <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Address</label>\r\n            <div class=\"col-md-5\">\r\n              <textarea [formControl]=\"addForm.controls['address']\" class=\"form-control\" rows=\"2\"></textarea>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Description</label>\r\n            <div class=\"col-md-5\">\r\n              <textarea [formControl]=\"addForm.controls['description']\" class=\"form-control\" rows=\"2\"></textarea>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" routerLink=\"/manage/warehouse\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n      </div>\r\n    </form>\r\n\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/warehouse/warehouse-list/warehouse-list.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/warehouse/warehouse-list/warehouse-list.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n      <div class=\"ml-3\">\r\n        <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <app-btn-add [btnName]=\"'Add Warehouse'\" [editData]=\"'/manage/warehouse/add'\"></app-btn-add>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\r\n      </app-table-list>\r\n      <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\r\n        (onPageChange)=\"getPage($event)\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/master/warehouse/add-warehouse/add-warehouse.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/master/warehouse/add-warehouse/add-warehouse.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddWarehouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWarehouseComponent", function() { return AddWarehouseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var src_app_service_warehouse_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/warehouse.service */ "./src/app/service/warehouse.service.ts");






let AddWarehouseComponent = class AddWarehouseComponent {
    constructor(router, activatedRoute, fb, warehouseService, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.warehouseService = warehouseService;
        this.commonService = commonService;
        this.PageTitle = "Warehouse";
        this.addNewRadio = false;
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
            warehouse_code: null,
            apierror: null,
        };
        this.isEditing = false;
        this.editId = null;
        this.countryListArray = [];
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }
        this.addForm = this.fb.group({
            warehouse_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            warehouse_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            address: [null],
            description: [null],
            country_name: [null],
            country_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            street_address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    ngOnInit() {
        this.getCountryList();
        if (this.isEditing) {
            this.getEditObject();
        }
    }
    getCountryList() {
        this.commonService.getCountryList().subscribe((res) => {
            if (res.success) {
                this.countryListArray = res.data.country_list;
            }
        });
    }
    getCountryName(data) {
        this.addForm.patchValue({ country_name: data.label });
    }
    getEditObject() {
        this.warehouseService.getWarehouseById(this.editId).subscribe((response) => {
            if (response.success) {
                this.addForm.patchValue({
                    warehouse_name: response.data.warehouse_name,
                    warehouse_code: response.data.warehouse_code,
                    description: response.data.description,
                    country_id: response.data.address.country_id,
                    country_name: response.data.address.country_name,
                    state: response.data.address.state,
                    city: response.data.address.city,
                    street_address: response.data.address.street_address ? response.data.address.street_address : ''
                });
            }
            else {
                this.router.navigateByUrl('/manage/warehouse');
            }
        });
    }
    submitForm(formData) {
        if (formData.valid) {
            this.showLoader = true;
            const data = new FormData();
            data.append('warehouse_name', formData.value.warehouse_name);
            data.append('warehouse_code', formData.value.warehouse_code);
            data.append('description', formData.value.description);
            let address = {
                country_id: formData.value.country_id,
                country_name: formData.value.country_name,
                state: formData.value.state,
                city: formData.value.city,
                street_address: formData.value.street_address
            };
            data.append('address', JSON.stringify(address));
            if (this.isEditing) {
                this.warehouseService.editWarehouse(this.editId, data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/warehouse');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('warehouse_code')) {
                                this.formErrors['warehouse_code'] = obj['warehouse_code'];
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
                this.warehouseService.addWarehouse(data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/warehouse');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('warehouse_code')) {
                                this.formErrors['warehouse_code'] = obj['warehouse_code'];
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
AddWarehouseComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_warehouse_service__WEBPACK_IMPORTED_MODULE_5__["WarehouseService"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
AddWarehouseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-warehouse',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-warehouse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/warehouse/add-warehouse/add-warehouse.component.html")).default
    })
], AddWarehouseComponent);



/***/ }),

/***/ "./src/app/pages/master/warehouse/warehouse-list/warehouse-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/master/warehouse/warehouse-list/warehouse-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WarehouseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseListComponent", function() { return WarehouseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");
/* harmony import */ var src_app_service_warehouse_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/warehouse.service */ "./src/app/service/warehouse.service.ts");





let WarehouseListComponent = class WarehouseListComponent {
    constructor(paginationService, warehouseService) {
        this.paginationService = paginationService;
        this.warehouseService = warehouseService;
        this.PageTitle = "Manage Warehouse";
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
            label: "Warehouse Name",
            key: "warehouse_name",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Warehouse Code",
            key: "warehouse_code",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Address",
            key: "address.country_name",
        }));
        let canEdit = true;
        let canDelete = true;
        let actions = {};
        if (canEdit) {
            actions['edit'] = {
                path: '/manage/warehouse/edit/',
                id: 'warehouse_id'
            };
        }
        if (canDelete) {
            actions['delete'] = {
                path: 'warehouse/',
                id: 'warehouse_id'
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
        this.warehouseService.getWarehouseList(params).subscribe((response) => {
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
WarehouseListComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_warehouse_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseService"] }
];
WarehouseListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-warehouse-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouse-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/warehouse/warehouse-list/warehouse-list.component.html")).default
    })
], WarehouseListComponent);



/***/ }),

/***/ "./src/app/pages/master/warehouse/warehouse.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/master/warehouse/warehouse.module.ts ***!
  \************************************************************/
/*! exports provided: WarehouseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseModule", function() { return WarehouseModule; });
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
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _warehouse_list_warehouse_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./warehouse-list/warehouse-list.component */ "./src/app/pages/master/warehouse/warehouse-list/warehouse-list.component.ts");
/* harmony import */ var src_app_service_warehouse_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/service/warehouse.service */ "./src/app/service/warehouse.service.ts");
/* harmony import */ var _add_warehouse_add_warehouse_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-warehouse/add-warehouse.component */ "./src/app/pages/master/warehouse/add-warehouse/add-warehouse.component.ts");















const routes = [
    {
        path: "",
        component: _warehouse_list_warehouse_list_component__WEBPACK_IMPORTED_MODULE_12__["WarehouseListComponent"],
        data: { title: 'warehouse_list' }
    },
    {
        path: "add",
        component: _add_warehouse_add_warehouse_component__WEBPACK_IMPORTED_MODULE_14__["AddWarehouseComponent"],
        data: { title: 'add_warehouse' }
    },
    {
        path: 'edit/:id',
        component: _add_warehouse_add_warehouse_component__WEBPACK_IMPORTED_MODULE_14__["AddWarehouseComponent"],
        data: { title: 'edit_warehouse' }
    },
];
let WarehouseModule = class WarehouseModule {
};
WarehouseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_warehouse_list_warehouse_list_component__WEBPACK_IMPORTED_MODULE_12__["WarehouseListComponent"], _add_warehouse_add_warehouse_component__WEBPACK_IMPORTED_MODULE_14__["AddWarehouseComponent"]],
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
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"]
        ], providers: [src_app_service_warehouse_service__WEBPACK_IMPORTED_MODULE_13__["WarehouseService"]]
    })
], WarehouseModule);



/***/ }),

/***/ "./src/app/service/warehouse.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/warehouse.service.ts ***!
  \**********************************************/
/*! exports provided: WarehouseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseService", function() { return WarehouseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let WarehouseService = class WarehouseService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getWarehouseList(param) {
        return this.http.get(`${this.API_URL}/warehouse`, { params: param });
    }
    addWarehouse(data) {
        return this.http.post(`${this.API_URL}/warehouse`, data);
    }
    editWarehouse(id, data) {
        return this.http.put(`${this.API_URL}/warehouse/${id}`, data);
    }
    getWarehouseById(id, param = null) {
        return this.http.get(`${this.API_URL}/warehouse/${id}`, { params: param });
    }
};
WarehouseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
WarehouseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], WarehouseService);



/***/ })

}]);
//# sourceMappingURL=warehouse-warehouse-module-es2015.js.map