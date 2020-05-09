(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-config-add-product-config-add-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/product-config/product-config-add/product-config-add.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/product-config/product-config-add/product-config-add.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"page-header border-b\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\n            <div class=\"card-body\">\n                <div>\n                    <div class=\"form-group row\">\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Order Id</label>\n                        <div class=\"col-md-5\">\n\n                            <ng-select [formControl]=\"addForm.controls['order_id']\" (change)=\"getMasterData(true)\"\n                                    [items]=\"orderListArray\" bindLabel=\"label\" bindValue=\"value\"\n                                    placeholder=\"Select Order\">\n                                </ng-select>\n                                \n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Product <em>*</em></label>\n                        <div class=\"col-md-5\">\n                            <ng-select [formControl]=\"addForm.controls['product_id']\"\n                                (change)=\"setProductDetail($event)\" [items]=\"productListArray\" bindLabel=\"label\"\n                                bindValue=\"value\" placeholder=\"Select Product\">\n                            </ng-select>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Registration Type\n                            <em>*</em></label>\n                        <div class=\"col-md-5\">\n                            <ng-select [formControl]=\"addForm.controls['registration_type']\"\n                                [items]=\"registrationTypeArray\" bindLabel=\"label\" bindValue=\"value\"\n                                (change)=\"typeChange()\" placeholder=\"Select Registration\">\n                            </ng-select>\n                        </div>\n                    </div>\n                    <div *ngIf=\"isSerialShow\" class=\"form-group row\">\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Serial Number <em>*</em></label>\n                        <div class=\"col-md-5\">\n                            <ng-select [formControl]=\"addForm.controls['maintain_serial_no']\" [items]=\"serialArray\"\n                                bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Serial\">\n                            </ng-select>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"text-right border-top py-4 mt-5 card-footer\">\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"back()\">Cancel</button>\n                <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/pages/inbound/product-config/product-config-add/product-config-add.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/inbound/product-config/product-config-add/product-config-add.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProductConfigAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductConfigAddComponent", function() { return ProductConfigAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_service_product_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/product-config.service */ "./src/app/service/product-config.service.ts");






let ProductConfigAddComponent = class ProductConfigAddComponent {
    constructor(router, activatedRoute, fb, location, productconfigService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.location = location;
        this.productconfigService = productconfigService;
        this.PageTitle = "Product Cofiguration";
        this.addNewRadio = false;
        this.loadingState = false;
        this.registrationTypeArray = [];
        this.serialArray = [];
        this.isSerialShow = false;
        this.showLoader = false;
        this.formErrors = {
            apierror: null,
        };
        this.isEditing = false;
        this.editId = null;
        this.addForm = this.fb.group({
            order_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            maintain_serial_no: [null],
            product_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            registration_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            let id = this.activatedRoute.snapshot.paramMap.get('id');
            this.editId = id;
            this.isEditing = true;
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
    typeChange() {
        if (this.addForm.value.registration_type == 0) {
            this.isSerialShow = true;
            this.addForm.get('maintain_serial_no').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
            this.addForm.get('maintain_serial_no').updateValueAndValidity();
        }
        else {
            this.isSerialShow = false;
            this.addForm.get('maintain_serial_no').clearValidators();
            this.addForm.get('maintain_serial_no').updateValueAndValidity();
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
        this.productconfigService.getProductConfigMasterData(params).subscribe((response) => {
            if (response.success) {
                if (this.addForm.value.order_id) {
                    if (this.isEditing) {
                        this.registrationTypeArray = response.data.registration_type;
                        this.serialArray = response.data.serial;
                        this.productListArray = response.data.product;
                    }
                    else {
                        this.productListArray = response.data.product;
                    }
                }
                else {
                    this.orderListArray = response.data.order;
                    this.registrationTypeArray = response.data.registration_type;
                    this.serialArray = response.data.serial;
                }
            }
        });
    }
    setProductDetail(data) {
        if (data) {
            console.log(data);
            // console.log(this.productListArray[this.addForm.value.product_id]);
            this.addForm.patchValue({
                sku_no: data.sku_no,
                product_id: data.value,
                unload_id: data.unload_id,
                unload_detail_id: data.unload_detail_id,
                received_qty: data.received_qty
            });
        }
    }
    getEditObject() {
        this.productconfigService.getProductConfigById(this.editId).subscribe((response) => {
            if (response.success) {
                this.orderListArray = [response.data.order];
                this.addForm.patchValue({
                    order_id: response.data.order.value,
                    product_id: response.data.product.value,
                    registration_type: response.data.registration_type.value,
                });
                if (response.data.registration_type.value == 0) {
                    this.isSerialShow = true;
                    this.addForm.patchValue({
                        maintain_serial_no: response.data.serial.value,
                    });
                }
                this.typeChange();
                this.getMasterData();
            }
            else {
                // this.router.navigateByUrl('/inbound/registeration');
            }
        });
    }
    submitForm(formData) {
        if (formData.valid) {
            this.showLoader = true;
            const data = new FormData();
            data.append('registration_type', formData.value.registration_type);
            data.append('order_id', formData.value.order_id);
            data.append('product_id', formData.value.product_id);
            if (this.isSerialShow) {
                data.append('maintain_serial_no', formData.value.maintain_serial_no);
            }
            if (this.isEditing) {
                this.productconfigService.editProductConfig(this.editId, data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.back();
                    }
                }, (error) => {
                    this.showLoader = false;
                });
            }
            else {
                this.productconfigService.addProductConfig(data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.back();
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
};
ProductConfigAddComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: src_app_service_product_config_service__WEBPACK_IMPORTED_MODULE_5__["ProductConfigService"] }
];
ProductConfigAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-config-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-config-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/product-config/product-config-add/product-config-add.component.html")).default
    })
], ProductConfigAddComponent);



/***/ }),

/***/ "./src/app/pages/inbound/product-config/product-config-add/product-config-add.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/inbound/product-config/product-config-add/product-config-add.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: ProductConfigAddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductConfigAddModule", function() { return ProductConfigAddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _product_config_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-config-add.component */ "./src/app/pages/inbound/product-config/product-config-add/product-config-add.component.ts");
/* harmony import */ var src_app_service_product_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/product-config.service */ "./src/app/service/product-config.service.ts");










const routes = [
    {
        path: '',
        component: _product_config_add_component__WEBPACK_IMPORTED_MODULE_8__["ProductConfigAddComponent"]
    }
];
let ProductConfigAddModule = class ProductConfigAddModule {
};
ProductConfigAddModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_product_config_add_component__WEBPACK_IMPORTED_MODULE_8__["ProductConfigAddComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_5__["FormValidationModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ], providers: [src_app_service_product_config_service__WEBPACK_IMPORTED_MODULE_9__["ProductConfigService"]]
    })
], ProductConfigAddModule);



/***/ })

}]);
//# sourceMappingURL=product-config-add-product-config-add-module-es2015.js.map