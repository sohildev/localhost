(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unit-unit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/unit/unit-add/unit-add.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/unit/unit-add/unit-add.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\n    <div class=\"page-header\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\n        </div>\n      </div>\n  \n    </div>\n    <div class=\"card\">\n      <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\n        <div class=\"card-body\">\n          <div>\n            <div class=\"form-group row align-items-center\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">\n                Unit Name <em>*</em></label>\n              <div class=\"col-md-5\"  [ngClass]=\"{'has-error': formErrors.unit_name}\">\n                <input [formControl]=\"addForm.controls['unit_name']\" type=\"text\" class=\"form-control\"\n                  placeholder=\"\">\n                  <span *ngIf=\"formErrors.unit_name\" class=\"help-block\"\n                  [innerHTML]=\"formErrors.unit_name\"></span>\n              </div>\n            </div>\n            <div class=\"form-group row align-items-center\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Unit Code <em>*</em></label>\n              <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.unit_code}\">\n                <input [formControl]=\"addForm.controls['unit_code']\" type=\"text\" class=\"form-control\"\n                  placeholder=\"\">\n                <span *ngIf=\"formErrors.unit_code\" class=\"help-block\"\n                  [innerHTML]=\"formErrors.unit_code\"></span>\n              </div>\n            </div>\n  \n          </div>\n        </div>\n        <div class=\"text-right border-top pt-4 mt-5 card-footer\">\n          <button type=\"button\" class=\"btn btn-light\" routerLink=\"/manage/unit\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-secondary ml-2\"\n            [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\" [disabled]=\"showLoader\">Submit</button>\n        </div>\n      </form>\n  \n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/unit/unit-list/unit-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/unit/unit-list/unit-list.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\n    <div class=\"page-header\">\n      <div class=\"row m-0\">\n        <h2 class=\"mr-auto\">{{PageTitle}}</h2>\n        <div class=\"ml-3\">\n          <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\n        </div>\n        <div class=\"ml-3\">\n          <app-btn-add [btnName]=\"'Add Unit'\" [editData]=\"'/manage/unit/add'\"></app-btn-add>\n        </div>\n      </div>\n  \n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\n        </app-table-list>\n        <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\n          (onPageChange)=\"getPage($event)\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./src/app/pages/master/unit/unit-add/unit-add.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/master/unit/unit-add/unit-add.component.ts ***!
  \******************************************************************/
/*! exports provided: UnitAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitAddComponent", function() { return UnitAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/unit.service */ "./src/app/service/unit.service.ts");






let UnitAddComponent = class UnitAddComponent {
    constructor(router, activatedRoute, fb, unitservice, commonservice) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.unitservice = unitservice;
        this.commonservice = commonservice;
        this.PageTitle = "Unit";
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
            unit_code: null,
            apierror: null,
        };
        this.isEditing = false;
        this.editId = null;
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }
        this.addForm = this.fb.group({
            unit_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            unit_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    ngOnInit() {
        if (this.isEditing) {
            this.getEditObject();
        }
    }
    getEditObject() {
        this.unitservice.getUnitById(this.editId).subscribe((response) => {
            if (response.success) {
                this.addForm.patchValue(response.data);
            }
            else {
                this.router.navigateByUrl('/manage/unit');
            }
        });
    }
    submitForm(formData) {
        this.removeError();
        if (formData.valid) {
            this.showLoader = true;
            const data = new FormData();
            data.append('unit_name', formData.value.unit_name);
            data.append('unit_code', formData.value.unit_code);
            if (this.isEditing) {
                this.unitservice.editUnit(this.editId, data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/unit');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('unit_name')) {
                                this.formErrors['unit_name'] = obj['unit_name'];
                            }
                            else if (obj.hasOwnProperty('unit_code')) {
                                this.formErrors['unit_code'] = obj['unit_code'];
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
                this.unitservice.addUnit(data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/unit');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('unit_name')) {
                                this.formErrors['unit_name'] = obj['unit_name'];
                            }
                            else if (obj.hasOwnProperty('unit_code')) {
                                this.formErrors['unit_code'] = obj['unit_code'];
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
    removeError() {
        this.formErrors = {
            unit_code: null,
            apierror: null,
        };
    }
};
UnitAddComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_5__["UnitService"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
UnitAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unit-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./unit-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/unit/unit-add/unit-add.component.html")).default
    })
], UnitAddComponent);



/***/ }),

/***/ "./src/app/pages/master/unit/unit-list/unit-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/master/unit/unit-list/unit-list.component.ts ***!
  \********************************************************************/
/*! exports provided: UnitListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitListComponent", function() { return UnitListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");
/* harmony import */ var src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/unit.service */ "./src/app/service/unit.service.ts");





let UnitListComponent = class UnitListComponent {
    constructor(paginationService, unitservice) {
        this.paginationService = paginationService;
        this.unitservice = unitservice;
        this.PageTitle = "Manage Unit";
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
        //   this.permissionObject = perms['unit'];
        // });
        this.loadform = false;
        this.setHeaderData();
        this.getObjects();
    }
    setHeaderData() {
        this.headerData.push(new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Unit Name",
            key: "unit_name",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Unit Code",
            key: "unit_code",
        }));
        let canEdit = true;
        let canDelete = true;
        let actions = {};
        if (canEdit) {
            actions['edit'] = {
                path: '/manage/unit/edit/',
                id: 'unit_id'
            };
        }
        if (canDelete) {
            actions['delete'] = {
                path: 'unit/',
                id: 'unit_id'
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
        this.unitservice.getUnitList(params).subscribe((response) => {
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
UnitListComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_4__["UnitService"] }
];
UnitListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unit-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./unit-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/unit/unit-list/unit-list.component.html")).default
    })
], UnitListComponent);



/***/ }),

/***/ "./src/app/pages/master/unit/unit.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/master/unit/unit.module.ts ***!
  \**************************************************/
/*! exports provided: UnitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitModule", function() { return UnitModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _unit_list_unit_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-list/unit-list.component */ "./src/app/pages/master/unit/unit-list/unit-list.component.ts");
/* harmony import */ var _unit_add_unit_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unit-add/unit-add.component */ "./src/app/pages/master/unit/unit-add/unit-add.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common-module/table-list/table-list.module */ "./src/app/common-module/table-list/table-list.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");
/* harmony import */ var src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/service/unit.service */ "./src/app/service/unit.service.ts");














const routes = [
    {
        path: "",
        component: _unit_list_unit_list_component__WEBPACK_IMPORTED_MODULE_1__["UnitListComponent"],
        data: { title: 'unit_list' }
    },
    {
        path: "add",
        component: _unit_add_unit_add_component__WEBPACK_IMPORTED_MODULE_2__["UnitAddComponent"],
        data: { title: 'add_unit' }
    },
    {
        path: 'edit/:id',
        component: _unit_add_unit_add_component__WEBPACK_IMPORTED_MODULE_2__["UnitAddComponent"],
        data: { title: 'edit_unit' }
    },
];
let UnitModule = class UnitModule {
};
UnitModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_unit_list_unit_list_component__WEBPACK_IMPORTED_MODULE_1__["UnitListComponent"], _unit_add_unit_add_component__WEBPACK_IMPORTED_MODULE_2__["UnitAddComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_8__["TableListModule"],
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_7__["BtnAddModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_10__["FormValidationModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_12__["PaginationModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        ], providers: [src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_13__["UnitService"]]
    })
], UnitModule);



/***/ }),

/***/ "./src/app/service/unit.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/unit.service.ts ***!
  \*****************************************/
/*! exports provided: UnitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitService", function() { return UnitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let UnitService = class UnitService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getUnitList(param) {
        return this.http.get(`${this.API_URL}/unit`, { params: param });
    }
    addUnit(data) {
        return this.http.post(`${this.API_URL}/unit`, data);
    }
    editUnit(id, data) {
        return this.http.put(`${this.API_URL}/unit/${id}`, data);
    }
    getUnitById(id, param = null) {
        return this.http.get(`${this.API_URL}/unit/${id}`, { params: param });
    }
};
UnitService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UnitService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], UnitService);



/***/ })

}]);
//# sourceMappingURL=unit-unit-module-es2015.js.map