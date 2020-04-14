(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-registeration-add-registeration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/registeration/add-registeration/add-registeration.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/registeration/add-registeration/add-registeration.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"page-header border-b\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Order Id</label>\r\n            <div class=\"col-md-5\">\r\n\r\n              <ng-container *ngIf=\"OrderId_show; then thenTemplate; else elseTemplate\"></ng-container>\r\n              <ng-template #thenTemplate>\r\n                <ng-select [formControl]=\"addForm.controls['order_id']\" (change)=\"getMasterData(true)\"\r\n                  [items]=\"orderListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Order\">\r\n                </ng-select>\r\n              </ng-template>\r\n              <ng-template #elseTemplate>\r\n                <select disabled class=\"form-control\">\r\n                  <option default selected=\"true\" disabled hidden value=\"OrderDetails?.po_no\">{{OrderDetails?.po_no}}\r\n                  </option>\r\n                </select>\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Product <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <ng-select [formControl]=\"addForm.controls['product_id']\" (change)=\"setProductDetail($event)\"\r\n                [items]=\"productListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Product\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Serial Number</label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['serial_no']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Tag ID <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['tag_id']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Qunatity</label>\r\n            <div class=\"col-md-5\">\r\n              <input number [formControl]=\"addForm.controls['qty']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Bar Code</label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['barcode']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"back()\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-validation/control-error/control-error.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-validation/control-error/control-error.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"help is-danger\" [class.hide]=\"_hide\" [innerHTML]=\"_text\"></p>");

/***/ }),

/***/ "./src/app/pages/inbound/registeration/add-registeration/add-registeration.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/inbound/registeration/add-registeration/add-registeration.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AddRegisterationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRegisterationComponent", function() { return AddRegisterationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_product_registration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/product-registration.service */ "./src/app/service/product-registration.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");







let AddRegisterationComponent = class AddRegisterationComponent {
    constructor(router, activatedRoute, fb, location, dataService, productRegistrationService) {
        // console.log("location.path() ==>", location.path());
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.location = location;
        this.dataService = dataService;
        this.productRegistrationService = productRegistrationService;
        this.PageTitle = "Product Registration";
        this.addNewRadio = false;
        this.loadingState = false;
        this.productListArray = [];
        this.orderListArray = [];
        this.showLoader = false;
        this.formErrors = {
            apierror: null,
        };
        this.isEditing = false;
        this.editId = null;
        this.OrderId_show = true;
        this.addForm = this.fb.group({
            order_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            tag_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            serial_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            barcode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            qty: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            product_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            sku_no: [null],
            unload_id: [null],
            unload_detail_id: [null],
        });
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            let id = this.activatedRoute.snapshot.paramMap.get('id');
            if (location.path() == `/inbound/registeration/add/${id}`) {
                this.OrderId = id;
                this.addForm.patchValue({ order_id: this.OrderId });
                this.OrderId_show = false;
                this.getOrderDetails();
            }
            else {
                this.editId = id;
                this.isEditing = true;
            }
        }
    }
    ngOnInit() {
        if (this.isEditing) {
            this.getEditObject();
        }
        else {
            this.getMasterData();
        }
    }
    getMasterData(event = null) {
        event ? this.addForm.patchValue({ product_id: '' }) : '';
        const params = {};
        if (this.addForm.value.order_id) {
            params.order_id = this.addForm.value.order_id;
        }
        if (this.isEditing) {
            params.is_editing = this.isEditing;
        }
        this.productRegistrationService.getMasterData(params).subscribe((response) => {
            if (response.success) {
                if (this.addForm.value.order_id) {
                    if (this.isEditing) {
                        this.orderListArray = response.data.order;
                        this.productListArray = response.data.product;
                    }
                    else {
                        this.productListArray = response.data.product;
                    }
                }
                else {
                    this.orderListArray = response.data.order;
                }
            }
        });
    }
    getEditObject() {
        this.productRegistrationService.getProductRegistrationById(this.editId).subscribe((response) => {
            if (response.success) {
                this.addForm.patchValue(response.data);
                this.getMasterData();
            }
            else {
                // this.router.navigateByUrl('/inbound/registeration');
            }
        });
    }
    setProductDetail(data) {
        if (data) {
            this.addForm.patchValue({
                sku_no: data.sku_no,
                unload_id: data.unload_id,
                unload_detail_id: data.unload_detail_id
            });
        }
    }
    submitForm(formData) {
        if (formData.valid) {
            this.showLoader = true;
            if (this.isEditing) {
                this.productRegistrationService.editProductRegistration(this.editId, formData.value).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.back();
                        // this.router.navigateByUrl('/inbound/registeration');
                    }
                }, (error) => {
                    this.showLoader = false;
                });
            }
            else {
                this.productRegistrationService.addProductRegistration(formData.value).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.back();
                        // this.router.navigateByUrl('/inbound/registeration');
                    }
                }, (error) => {
                    this.showLoader = false;
                });
            }
        }
    }
    back() {
        this.location.back();
    }
    getOrderDetails() {
        this.subscription = this.dataService.OrderDetails.subscribe((data) => {
            if (data) {
                this.OrderDetails = data;
            }
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
AddRegisterationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: src_app_service_product_registration_service__WEBPACK_IMPORTED_MODULE_4__["ProductRegistrationService"] }
];
AddRegisterationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-registeration',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-registeration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/registeration/add-registeration/add-registeration.component.html")).default
    })
], AddRegisterationComponent);



/***/ }),

/***/ "./src/app/pages/inbound/registeration/add-registeration/add-registeration.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/inbound/registeration/add-registeration/add-registeration.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddRegisterationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRegisterationModule", function() { return AddRegisterationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_registeration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-registeration.component */ "./src/app/pages/inbound/registeration/add-registeration/add-registeration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_service_product_registration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/product-registration.service */ "./src/app/service/product-registration.service.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");










const routes = [
    {
        path: '',
        component: _add_registeration_component__WEBPACK_IMPORTED_MODULE_4__["AddRegisterationComponent"]
    },
    {
        path: ':id',
        component: _add_registeration_component__WEBPACK_IMPORTED_MODULE_4__["AddRegisterationComponent"]
    }
];
let AddRegisterationModule = class AddRegisterationModule {
};
AddRegisterationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_registeration_component__WEBPACK_IMPORTED_MODULE_4__["AddRegisterationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__["FormValidationModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ], providers: [src_app_service_product_registration_service__WEBPACK_IMPORTED_MODULE_8__["ProductRegistrationService"]]
    })
], AddRegisterationModule);



/***/ }),

/***/ "./src/app/shared/form-validation/control-error/control-error.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/form-validation/control-error/control-error.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ControlErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlErrorComponent", function() { return ControlErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ControlErrorComponent = class ControlErrorComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this._hide = true;
    }
    set text(value) {
        if (value !== this._text) {
            this._text = value;
            this._hide = !value;
            this.cdr.detectChanges();
        }
    }
    ngOnInit() {
    }
};
ControlErrorComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ControlErrorComponent.prototype, "text", null);
ControlErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-control-error',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./control-error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-validation/control-error/control-error.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    })
], ControlErrorComponent);



/***/ }),

/***/ "./src/app/shared/form-validation/directive/control-error-container.directive.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/form-validation/directive/control-error-container.directive.ts ***!
  \***************************************************************************************/
/*! exports provided: ControlErrorContainerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlErrorContainerDirective", function() { return ControlErrorContainerDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ControlErrorContainerDirective = class ControlErrorContainerDirective {
    constructor(vcr) {
        this.vcr = vcr;
    }
};
ControlErrorContainerDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
ControlErrorContainerDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[controlErrorContainer]'
    })
], ControlErrorContainerDirective);



/***/ }),

/***/ "./src/app/shared/form-validation/directive/control-errors.directive.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/form-validation/directive/control-errors.directive.ts ***!
  \******************************************************************************/
/*! exports provided: ControlErrorsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlErrorsDirective", function() { return ControlErrorsDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _control_error_control_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../control-error/control-error.component */ "./src/app/shared/form-validation/control-error/control-error.component.ts");
/* harmony import */ var _control_error_container_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control-error-container.directive */ "./src/app/shared/form-validation/directive/control-error-container.directive.ts");
/* harmony import */ var _form_submit_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-submit.directive */ "./src/app/shared/form-validation/directive/form-submit.directive.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _form_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form-errors */ "./src/app/shared/form-validation/form-errors.ts");








let ControlErrorsDirective = class ControlErrorsDirective {
    constructor(vcr, resolver, controlErrorContainer, form, controlDir) {
        this.vcr = vcr;
        this.resolver = resolver;
        this.form = form;
        this.controlDir = controlDir;
        this.customErrors = {};
        this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
        this.submit$ = this.form ? this.form.submit$ : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
    }
    ngOnInit() {
        if (this.control && this.control.valueChanges) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.control.valueChanges, this.submit$).subscribe((v) => {
                const controlErrors = this.control.errors;
                if (controlErrors) {
                    const control_name = this.getFormControlName(this.control);
                    // console.log(control_name, controlErrors);
                    const firstKey = Object.keys(controlErrors)[0];
                    const messages = _form_errors__WEBPACK_IMPORTED_MODULE_7__["VALIDATION_MESSAGES"][control_name];
                    if (messages !== undefined && messages !== null && messages !== '') {
                        this.setError(messages[firstKey]);
                    }
                }
                else if (this.ref) {
                    this.setError(null);
                }
            });
        }
    }
    getFormControlName(c) {
        const formGroup = c.parent.controls;
        return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
    }
    get control() {
        return this.controlDir.control;
    }
    setError(text) {
        if (!this.ref) {
            const factory = this.resolver.resolveComponentFactory(_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_3__["ControlErrorComponent"]);
            this.ref = this.container.createComponent(factory);
        }
        this.ref.instance.text = text;
    }
    ngOnDestroy() { }
};
ControlErrorsDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _control_error_container_directive__WEBPACK_IMPORTED_MODULE_4__["ControlErrorContainerDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _form_submit_directive__WEBPACK_IMPORTED_MODULE_5__["FormSubmitDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ControlErrorsDirective.prototype, "customErrors", void 0);
ControlErrorsDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[formControl], [formControlName]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())
], ControlErrorsDirective);



/***/ }),

/***/ "./src/app/shared/form-validation/directive/form-submit.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/form-validation/directive/form-submit.directive.ts ***!
  \***************************************************************************/
/*! exports provided: FormSubmitDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSubmitDirective", function() { return FormSubmitDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let FormSubmitDirective = class FormSubmitDirective {
    constructor(host) {
        this.host = host;
        this.submit$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.element, 'submit').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            if (this.element.classList.contains('submitted') === false) {
                this.element.classList.add('submitted');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
    }
    get element() {
        return this.host.nativeElement;
    }
};
FormSubmitDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
FormSubmitDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'form'
    })
], FormSubmitDirective);



/***/ }),

/***/ "./src/app/shared/form-validation/form-errors.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/form-validation/form-errors.ts ***!
  \*******************************************************/
/*! exports provided: VALIDATION_MESSAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_MESSAGES", function() { return VALIDATION_MESSAGES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const VALIDATION_MESSAGES = {
    first_name: {
        required: `* Please enter first name`,
    },
    last_name: {
        required: `* Please enter last name`,
    },
    email: {
        required: `* Please enter email`,
        email: `* Please enter valid email`,
        validateEmail: `* Please enter valid email`,
    },
    phone_number: {
        required: `Please enter phone number`,
        minlength: `Please enter at least 8 digits`,
        maxlength: `Please enter at least 18 digits`
    },
    password: {
        required: `* Please enter password`,
        pattern: `* Password must contains at least 6 characters`,
    },
    confirm_password: {
        required: `* Please enter confirm password`,
        validatePassword: `* Your Password is not matched`,
    },
    tree_level_name: {
        required: `* Please enter tree level name`,
    },
    max_node: {
        required: `* Please enter max node`,
    },
    tree_order: {
        required: `* Please enter tree order`,
    },
    tree_name: {
        required: `* Please enter tree name`,
    },
    tree_level_id: {
        required: `* Please enter tree level`,
    },
    user_type: {
        required: `* Please enter user type`,
    },
    wallet_name: {
        required: `* Please enter wallet name`,
    },
    currency_id: {
        required: `* Please select currency`,
    },
    wallet_type: {
        required: `* Please select wallet type`,
    },
    otp: {
        required: `* Please enter OTP`,
    },
    login_pin: {
        required: `* Please enter PIN`,
        maxlength: `Pin Max 4 Digit`,
        minlength: `Please enter at least 4 digits`,
    },
    bank_name: {
        required: `* Please enter bank name`,
    },
    bank_code: {
        required: `* Please enter code`,
        maxlength: `Code Max 4 Digit`,
        minlength: `Please enter at least 4 digits`,
    },
    amount: {
        required: `* Please enter amount`,
        max: `amount max balance`,
    },
    sms: {
        required: `* Please enter content`,
    },
    webhook: {
        required: `* Please enter content`,
    },
    device_number: {
        required: `* Please enter device number`,
    },
    name: {
        required: `* Please enter name`,
    },
    location: {
        required: `* Please enter location`,
    },
    group_id: {
        required: `* Please select group`,
    }
};


/***/ }),

/***/ "./src/app/shared/form-validation/form-validation.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/form-validation/form-validation.module.ts ***!
  \******************************************************************/
/*! exports provided: FormValidationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidationModule", function() { return FormValidationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directive/form-submit.directive */ "./src/app/shared/form-validation/directive/form-submit.directive.ts");
/* harmony import */ var _directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive/control-errors.directive */ "./src/app/shared/form-validation/directive/control-errors.directive.ts");
/* harmony import */ var _directive_control_error_container_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directive/control-error-container.directive */ "./src/app/shared/form-validation/directive/control-error-container.directive.ts");
/* harmony import */ var _control_error_control_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./control-error/control-error.component */ "./src/app/shared/form-validation/control-error/control-error.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








let FormValidationModule = class FormValidationModule {
};
FormValidationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        ],
        declarations: [
            _control_error_control_error_component__WEBPACK_IMPORTED_MODULE_6__["ControlErrorComponent"],
            _directive_control_error_container_directive__WEBPACK_IMPORTED_MODULE_5__["ControlErrorContainerDirective"],
            _directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_4__["ControlErrorsDirective"],
            _directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_3__["FormSubmitDirective"]
        ],
        exports: [
            _control_error_control_error_component__WEBPACK_IMPORTED_MODULE_6__["ControlErrorComponent"],
            _directive_control_error_container_directive__WEBPACK_IMPORTED_MODULE_5__["ControlErrorContainerDirective"],
            _directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_4__["ControlErrorsDirective"],
            _directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_3__["FormSubmitDirective"]
        ],
        entryComponents: [
            _control_error_control_error_component__WEBPACK_IMPORTED_MODULE_6__["ControlErrorComponent"]
        ]
    })
], FormValidationModule);



/***/ })

}]);
//# sourceMappingURL=add-registeration-add-registeration-module-es2015.js.map