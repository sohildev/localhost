(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shipping-address-shipping-address-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/shipping-address/shipping-address-add/shipping-address-add.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/shipping-address/shipping-address-add/shipping-address-add.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div>\r\n\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">\r\n              Client <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <ng-select [formControl]=\"addForm.controls['client_id']\" [items]=\"clientListArray\" bindLabel=\"label\"\r\n                bindValue=\"value\" placeholder=\"Select Client\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">\r\n              Country <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <ng-select [formControl]=\"addForm.controls['country_id']\" (change)=\"getCountryName($event)\"\r\n                [items]=\"countryListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Country\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">State <em>*</em></label>\r\n            <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.state}\">\r\n              <input [formControl]=\"addForm.controls['state']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n              <span *ngIf=\"formErrors.state\" class=\"help-block\" [innerHTML]=\"formErrors.state\"></span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">\r\n              Pincode <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input number [formControl]=\"addForm.controls['pin_code']\" type=\"text\" class=\"form-control\"\r\n                placeholder=\"\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">\r\n              City <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['city']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">\r\n              is Default <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <div class=\"form-check form-check-inline mr-0\">\r\n                <div class=\"checkbox-container mt-2\">\r\n                  <input [formControl]=\"addForm.controls['is_default']\" class=\"form-check-input\" type=\"checkbox\"\r\n                    value=\"all\">\r\n                  <span class=\"checkmark\"></span>\r\n                </div>\r\n              </div>\r\n              <!-- <input [formControl]=\"addForm.controls['is_default']\" type=\"checkbox\" class=\"form-control\" placeholder=\"\"> -->\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">\r\n              Address </label>\r\n            <div class=\"col-md-5\">\r\n              <textarea [formControl]=\"addForm.controls['street_address']\" class=\"form-control\" rows=\"2\"></textarea>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"text-right border-top pt-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" routerLink=\"/manage/shipping-address\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-secondary ml-2\"\r\n          [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\" [disabled]=\"showLoader\">Submit</button>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/shipping-address/shipping-address-list/shipping-address-list.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/shipping-address/shipping-address-list/shipping-address-list.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n      <div class=\"ml-3\">\r\n        <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <app-btn-add [btnName]=\"'Add Shipping Address'\" [editData]=\"'/manage/shipping-address/add'\"></app-btn-add>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\r\n      </app-table-list>\r\n      <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\r\n        (onPageChange)=\"getPage($event)\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/master/shipping-address/shipping-address-add/shipping-address-add.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/master/shipping-address/shipping-address-add/shipping-address-add.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ShippingAddressAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingAddressAddComponent", function() { return ShippingAddressAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var src_app_service_shipping_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/shipping-address.service */ "./src/app/service/shipping-address.service.ts");






let ShippingAddressAddComponent = class ShippingAddressAddComponent {
    constructor(router, activatedRoute, fb, shippingaddressService, commonservice) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.shippingaddressService = shippingaddressService;
        this.commonservice = commonservice;
        this.PageTitle = "Shipping Address";
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
            state: null,
            apierror: null,
        };
        this.isEditing = false;
        this.editId = null;
        this.countryListArray = [];
        this.clientListArray = [];
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }
        this.addForm = this.fb.group({
            city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            street_address: [null],
            country_name: [''],
            country_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            pin_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            is_default: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            client_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    ngOnInit() {
        this.getCountryList();
        this.getMasterData();
        if (this.isEditing) {
            this.getEditObject();
        }
    }
    getCountryList() {
        this.commonservice.getCountryList().subscribe((res) => {
            if (res.success) {
                this.countryListArray = res.data.country_list;
            }
        });
    }
    getMasterData() {
        this.shippingaddressService.getMasterData().subscribe((res) => {
            if (res.success) {
                this.clientListArray = res.data.client;
            }
        });
    }
    getEditObject() {
        this.shippingaddressService.getShippingAddressById(this.editId).subscribe((response) => {
            if (response.success) {
                this.addForm.patchValue(response.data);
            }
            else {
                this.router.navigateByUrl('/manage/shipping-address');
            }
        });
    }
    getCountryName(data) {
        this.addForm.patchValue({ country_name: data.label });
    }
    submitForm(formData) {
        if (formData.valid) {
            this.showLoader = true;
            const data = new FormData();
            data.append('client_id', formData.value.client_id);
            data.append('city', formData.value.city);
            data.append('state', formData.value.state);
            data.append('country_name', formData.value.country_name);
            data.append('country_id', formData.value.country_id);
            data.append('pin_code', formData.value.pin_code);
            data.append('street_address', formData.value.street_address);
            data.append('is_default', formData.value.is_default);
            data.append('order_type_code', formData.value.order_type_code);
            if (this.isEditing) {
                this.shippingaddressService.editShippingAddress(this.editId, data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/shipping-address');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('state')) {
                                this.formErrors['state'] = obj['state'];
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
                this.shippingaddressService.addShippingAddress(data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/shipping-address');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('state')) {
                                this.formErrors['state'] = obj['state'];
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
ShippingAddressAddComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_shipping_address_service__WEBPACK_IMPORTED_MODULE_5__["ShippingAddressService"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
ShippingAddressAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shipping-address-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shipping-address-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/shipping-address/shipping-address-add/shipping-address-add.component.html")).default
    })
], ShippingAddressAddComponent);



/***/ }),

/***/ "./src/app/pages/master/shipping-address/shipping-address-list/shipping-address-list.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/master/shipping-address/shipping-address-list/shipping-address-list.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ShippingAddressListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingAddressListComponent", function() { return ShippingAddressListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");
/* harmony import */ var src_app_service_shipping_address_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/shipping-address.service */ "./src/app/service/shipping-address.service.ts");





let ShippingAddressListComponent = class ShippingAddressListComponent {
    constructor(paginationService, shippingaddressService) {
        this.paginationService = paginationService;
        this.shippingaddressService = shippingaddressService;
        this.PageTitle = "Manage Shipping Address";
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
            label: "Client",
            key: "client.label",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "City",
            key: "city",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "State",
            key: "state",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Pincode",
            key: "pin_code",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Country",
            key: "country_name",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Is Default",
            key: "is_default",
        }));
        let canEdit = true;
        let canDelete = true;
        let actions = {};
        if (canEdit) {
            actions['edit'] = {
                path: '/manage/shipping-address/edit/',
                id: 'shipping_address_id'
            };
        }
        if (canDelete) {
            actions['delete'] = {
                path: 'shipping-address/',
                id: 'shipping_address_id'
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
        this.shippingaddressService.getShippingAddressList(params).subscribe((response) => {
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
ShippingAddressListComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_shipping_address_service__WEBPACK_IMPORTED_MODULE_4__["ShippingAddressService"] }
];
ShippingAddressListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shipping-address-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shipping-address-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/shipping-address/shipping-address-list/shipping-address-list.component.html")).default
    })
], ShippingAddressListComponent);



/***/ }),

/***/ "./src/app/pages/master/shipping-address/shipping-address.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/master/shipping-address/shipping-address.module.ts ***!
  \**************************************************************************/
/*! exports provided: ShippingAddressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingAddressModule", function() { return ShippingAddressModule; });
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
/* harmony import */ var _shipping_address_list_shipping_address_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shipping-address-list/shipping-address-list.component */ "./src/app/pages/master/shipping-address/shipping-address-list/shipping-address-list.component.ts");
/* harmony import */ var _shipping_address_add_shipping_address_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shipping-address-add/shipping-address-add.component */ "./src/app/pages/master/shipping-address/shipping-address-add/shipping-address-add.component.ts");
/* harmony import */ var src_app_service_shipping_address_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/service/shipping-address.service */ "./src/app/service/shipping-address.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");















const routes = [
    {
        path: "",
        component: _shipping_address_list_shipping_address_list_component__WEBPACK_IMPORTED_MODULE_11__["ShippingAddressListComponent"],
        data: { title: 'shipping_address_list' }
    },
    {
        path: "add",
        component: _shipping_address_add_shipping_address_add_component__WEBPACK_IMPORTED_MODULE_12__["ShippingAddressAddComponent"],
        data: { title: 'add_shipping_address' }
    },
    {
        path: 'edit/:id',
        component: _shipping_address_add_shipping_address_add_component__WEBPACK_IMPORTED_MODULE_12__["ShippingAddressAddComponent"],
        data: { title: 'edit_shipping_address' }
    },
];
let ShippingAddressModule = class ShippingAddressModule {
};
ShippingAddressModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_shipping_address_list_shipping_address_list_component__WEBPACK_IMPORTED_MODULE_11__["ShippingAddressListComponent"], _shipping_address_add_shipping_address_add_component__WEBPACK_IMPORTED_MODULE_12__["ShippingAddressAddComponent"]],
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
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"]
        ], providers: [src_app_service_shipping_address_service__WEBPACK_IMPORTED_MODULE_13__["ShippingAddressService"]]
    })
], ShippingAddressModule);



/***/ }),

/***/ "./src/app/service/shipping-address.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/shipping-address.service.ts ***!
  \*****************************************************/
/*! exports provided: ShippingAddressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingAddressService", function() { return ShippingAddressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ShippingAddressService = class ShippingAddressService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getShippingAddressList(param) {
        return this.http.get(`${this.API_URL}/shipping-address`, { params: param });
    }
    addShippingAddress(data) {
        return this.http.post(`${this.API_URL}/shipping-address`, data);
    }
    editShippingAddress(id, data) {
        return this.http.put(`${this.API_URL}/shipping-address/${id}`, data);
    }
    getShippingAddressById(id, param = null) {
        return this.http.get(`${this.API_URL}/shipping-address/${id}`, { params: param });
    }
    getMasterData() {
        return this.http.get(`${this.API_URL}/shipping-address/master-data`);
    }
};
ShippingAddressService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ShippingAddressService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ShippingAddressService);



/***/ })

}]);
//# sourceMappingURL=shipping-address-shipping-address-module-es2015.js.map