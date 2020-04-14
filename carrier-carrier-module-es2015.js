(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carrier-carrier-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/carrier/add-carrier/add-carrier.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/carrier/add-carrier/add-carrier.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div>\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">\r\n              Carrier Name <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['carrier_name']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Carrier Code <em>*</em></label>\r\n            <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.carrier_code}\">\r\n              <input [formControl]=\"addForm.controls['carrier_code']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n              <span *ngIf=\"formErrors.carrier_code\" class=\"help-block\" [innerHTML]=\"formErrors.carrier_code\"></span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">\r\n              Contact Person <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['contact_person']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">\r\n              Contact No <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input number [formControl]=\"addForm.controls['contact_no']\" type=\"text\" class=\"form-control\"\r\n                placeholder=\"\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"text-right border-top pt-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" routerLink=\"/manage/carrier\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-secondary ml-2\"\r\n          [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\" [disabled]=\"showLoader\">Submit</button>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/carrier/carrier-list/carrier-list.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/carrier/carrier-list/carrier-list.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n      <div class=\"ml-3\">\r\n        <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <app-btn-add [btnName]=\"'Add Carrier'\" [editData]=\"'/manage/carrier/add'\"></app-btn-add>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\r\n      </app-table-list>\r\n      <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\r\n        (onPageChange)=\"getPage($event)\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/carrier/carrier-view/carrier-view.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/carrier/carrier-view/carrier-view.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>carrier-view works!</p>\r\n");

/***/ }),

/***/ "./src/app/pages/master/carrier/add-carrier/add-carrier.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/master/carrier/add-carrier/add-carrier.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddCarrierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCarrierComponent", function() { return AddCarrierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var src_app_service_carrier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/carrier.service */ "./src/app/service/carrier.service.ts");






let AddCarrierComponent = class AddCarrierComponent {
    constructor(router, activatedRoute, fb, carrierService, commonservice) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.carrierService = carrierService;
        this.commonservice = commonservice;
        this.PageTitle = "Carrier";
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
            carrier_code: null,
            apierror: null,
        };
        this.isEditing = false;
        this.editId = null;
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }
        this.addForm = this.fb.group({
            carrier_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            carrier_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            contact_person: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            contact_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    ngOnInit() {
        if (this.isEditing) {
            this.getEditObject();
        }
    }
    getEditObject() {
        this.carrierService.getCarrierById(this.editId).subscribe((response) => {
            if (response.success) {
                this.addForm.patchValue(response.data);
            }
            else {
                this.router.navigateByUrl('/manage/Carrier');
            }
        });
    }
    submitForm(formData) {
        if (formData.valid) {
            this.showLoader = true;
            const data = new FormData();
            data.append('carrier_name', formData.value.carrier_name);
            data.append('carrier_code', formData.value.carrier_code);
            data.append('contact_person', formData.value.contact_person);
            data.append('contact_no', formData.value.contact_no);
            if (this.isEditing) {
                this.carrierService.editCarrier(this.editId, data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/carrier');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('carrier_code')) {
                                this.formErrors['carrier_code'] = obj['carrier_code'];
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
                this.carrierService.addCarrier(data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/carrier');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('carrier_code')) {
                                this.formErrors['carrier_code'] = obj['carrier_code'];
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
AddCarrierComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_carrier_service__WEBPACK_IMPORTED_MODULE_5__["CarrierService"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
AddCarrierComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-carrier',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-carrier.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/carrier/add-carrier/add-carrier.component.html")).default
    })
], AddCarrierComponent);



/***/ }),

/***/ "./src/app/pages/master/carrier/carrier-list/carrier-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/master/carrier/carrier-list/carrier-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CarrierListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierListComponent", function() { return CarrierListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");
/* harmony import */ var src_app_service_carrier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/carrier.service */ "./src/app/service/carrier.service.ts");





let CarrierListComponent = class CarrierListComponent {
    constructor(paginationService, carrierService) {
        this.paginationService = paginationService;
        this.carrierService = carrierService;
        this.PageTitle = "Manage Carrier";
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
            label: "Carrier Name",
            key: "carrier_name",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Carrier Code",
            key: "carrier_code",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Contact Person",
            key: "contact_person",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Contact No",
            key: "contact_no",
        }));
        let canEdit = true;
        let canDelete = true;
        let canView = true;
        let actions = {};
        if (canEdit) {
            actions['edit'] = {
                path: '/manage/carrier/edit/',
                id: 'carrier_id'
            };
        }
        // if (canView) {
        //   actions['view'] = {
        //     path: '/manage/carrier/view/',
        //     id: 'carrier_id'
        //   }
        // }
        if (canDelete) {
            actions['delete'] = {
                path: 'carrier/',
                id: 'carrier_id'
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
        this.carrierService.getCarrierList(params).subscribe((response) => {
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
CarrierListComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_carrier_service__WEBPACK_IMPORTED_MODULE_4__["CarrierService"] }
];
CarrierListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carrier-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carrier-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/carrier/carrier-list/carrier-list.component.html")).default
    })
], CarrierListComponent);



/***/ }),

/***/ "./src/app/pages/master/carrier/carrier-view/carrier-view.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/master/carrier/carrier-view/carrier-view.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CarrierViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierViewComponent", function() { return CarrierViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CarrierViewComponent = class CarrierViewComponent {
    constructor() { }
    ngOnInit() {
    }
};
CarrierViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carrier-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carrier-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/carrier/carrier-view/carrier-view.component.html")).default
    })
], CarrierViewComponent);



/***/ }),

/***/ "./src/app/pages/master/carrier/carrier.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/master/carrier/carrier.module.ts ***!
  \********************************************************/
/*! exports provided: CarrierModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierModule", function() { return CarrierModule; });
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
/* harmony import */ var _carrier_view_carrier_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./carrier-view/carrier-view.component */ "./src/app/pages/master/carrier/carrier-view/carrier-view.component.ts");
/* harmony import */ var _carrier_list_carrier_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./carrier-list/carrier-list.component */ "./src/app/pages/master/carrier/carrier-list/carrier-list.component.ts");
/* harmony import */ var _add_carrier_add_carrier_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-carrier/add-carrier.component */ "./src/app/pages/master/carrier/add-carrier/add-carrier.component.ts");
/* harmony import */ var src_app_service_carrier_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/service/carrier.service */ "./src/app/service/carrier.service.ts");
















const routes = [
    {
        path: "",
        component: _carrier_list_carrier_list_component__WEBPACK_IMPORTED_MODULE_13__["CarrierListComponent"],
        data: { title: 'carrier_list' }
    },
    {
        path: "add",
        component: _add_carrier_add_carrier_component__WEBPACK_IMPORTED_MODULE_14__["AddCarrierComponent"],
        data: { title: 'add_carrier' }
    },
    {
        path: 'edit/:id',
        component: _add_carrier_add_carrier_component__WEBPACK_IMPORTED_MODULE_14__["AddCarrierComponent"],
        data: { title: 'edit_carrier' }
    },
];
let CarrierModule = class CarrierModule {
};
CarrierModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_carrier_add_carrier_component__WEBPACK_IMPORTED_MODULE_14__["AddCarrierComponent"], _carrier_list_carrier_list_component__WEBPACK_IMPORTED_MODULE_13__["CarrierListComponent"], _carrier_view_carrier_view_component__WEBPACK_IMPORTED_MODULE_12__["CarrierViewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_6__["TableListModule"],
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__["BtnAddModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_8__["FormValidationModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_10__["PaginationModule"]
        ], providers: [src_app_service_carrier_service__WEBPACK_IMPORTED_MODULE_15__["CarrierService"]]
    })
], CarrierModule);



/***/ }),

/***/ "./src/app/service/carrier.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/carrier.service.ts ***!
  \********************************************/
/*! exports provided: CarrierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierService", function() { return CarrierService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let CarrierService = class CarrierService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getCarrierList(param) {
        return this.http.get(`${this.API_URL}/carrier`, { params: param });
    }
    addCarrier(data) {
        return this.http.post(`${this.API_URL}/carrier`, data);
    }
    editCarrier(id, data) {
        return this.http.put(`${this.API_URL}/carrier/${id}`, data);
    }
    getCarrierById(id, param = null) {
        return this.http.get(`${this.API_URL}/carrier/${id}`, { params: param });
    }
};
CarrierService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CarrierService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], CarrierService);



/***/ })

}]);
//# sourceMappingURL=carrier-carrier-module-es2015.js.map