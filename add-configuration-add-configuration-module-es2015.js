(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-configuration-add-configuration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/registeration/add-configuration/add-configuration.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/registeration/add-configuration/add-configuration.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"page-header border-b\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n\n    <ng-container *ngIf=\"formtype==1\">\n      <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\n        <div class=\"card-body\">\n          <div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Order Id</label>\n              <div class=\"col-md-5\">\n\n                <ng-container *ngIf=\"OrderId_show; then thenTemplate; else elseTemplate\"></ng-container>\n                <ng-template #thenTemplate>\n                  <ng-select [formControl]=\"addForm.controls['order_id']\" (change)=\"getMasterData(true)\"\n                    [items]=\"orderListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Order\">\n                  </ng-select>\n                </ng-template>\n                <ng-template #elseTemplate>\n                  <select disabled class=\"form-control\">\n                    <option default selected=\"true\" disabled hidden value=\"OrderDetails?.po_no\">{{OrderDetails?.po_no}}\n                    </option>\n                  </select>\n                </ng-template>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Product <em>*</em></label>\n              <div class=\"col-md-5\">\n                <ng-select [formControl]=\"addForm.controls['product_id']\"  (change)=\"setProductDetail($event)\" [items]=\"productListArray\" bindLabel=\"label\"\n                  bindValue=\"value\" placeholder=\"Select Product\">\n                </ng-select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Registration Type <em>*</em></label>\n              <div class=\"col-md-5\">\n                <ng-select [formControl]=\"addForm.controls['registration_type']\" [items]=\"registrationTypeArray\"\n                  bindLabel=\"label\" bindValue=\"value\" (change)=\"typeChange()\" placeholder=\"Select Registration\">\n                </ng-select>\n              </div>\n            </div>\n            <div *ngIf=\"isSerialShow\" class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Serial Number <em>*</em></label>\n              <div class=\"col-md-5\">\n                <ng-select [formControl]=\"addForm.controls['maintain_serial_no']\" [items]=\"serialArray\"\n                  bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Serial\">\n                </ng-select>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"text-right border-top py-4 mt-5 card-footer\">\n          <button type=\"button\" class=\"btn btn-light\" (click)=\"back()\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\n        </div>\n      </form>\n    </ng-container>\n\n\n    <ng-container *ngIf=\"formtype==2\">\n\n      <form [formGroup]=\"addWithForm\" (ngSubmit)=\"submitPForm(addWithForm)\" class=\"form-horizontal\" role=\"form\">\n        <div class=\"card-body\">\n          <div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Order Id</label>\n              <div class=\"col-md-5\">\n  \n                <ng-container *ngIf=\"OrderId_show; then thenTemplate; else elseTemplate\"></ng-container>\n                <ng-template #thenTemplate>\n                  <ng-select [formControl]=\"addWithForm.controls['order_id']\" (change)=\"getMasterData(true)\"\n                    [items]=\"orderListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Order\">\n                  </ng-select>\n                </ng-template>\n                <ng-template #elseTemplate>\n                  <select disabled class=\"form-control\">\n                    <option default selected=\"true\" disabled hidden value=\"OrderDetails?.po_no\">{{OrderDetails?.po_no}}\n                    </option>\n                  </select>\n                </ng-template>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Product <em>*</em></label>\n              <div class=\"col-md-5\">\n                <input [value]=\"productText\" type=\"text\" class=\"form-control\"  readonly >\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Registration Type <em>*</em></label>\n              <div class=\"col-md-5\">\n                <input [value]=\"registrationTypeText\" type=\"text\" class=\"form-control\"  readonly >\n              </div>\n            </div>\n            <div  class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Serial Number <em>*</em></label>\n              <div class=\"col-md-5\">               \n                <input [formControl]=\"addWithForm.controls['serial_no']\" type=\"text\" class=\"form-control\" placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Bar Code <em>*</em></label>\n              <div class=\"col-md-5\">\n                <input [formControl]=\"addWithForm.controls['barcode']\" type=\"text\" class=\"form-control\" placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Tag ID <em>*</em></label>\n              <div class=\"col-md-5\">\n                <ng-select [formControl]=\"addWithForm.controls['tag_id']\" \n                    [items]=\"tagArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Tag\">\n                  </ng-select>\n              </div>\n            </div>           \n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Qunatity <em>*</em></label>\n              <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.qty}\">\n                <input number [formControl]=\"addWithForm.controls['qty']\" readonly type=\"text\" class=\"form-control\" placeholder=\"\">\n              </div>\n              <span *ngIf=\"formErrors.qty\" class=\"help-block\"\n              [innerHTML]=\"formErrors.qty\"></span>\n            </div>           \n          </div>\n        </div>\n        <div class=\"text-right border-top py-4 mt-5 card-footer\">\n          <button type=\"button\" class=\"btn btn-light\" (click)=\"back()\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\n        </div>\n      </form>\n    </ng-container>\n\n    <ng-container *ngIf=\"formtype==3\">\n      <form [formGroup]=\"addWithOutForm\" (ngSubmit)=\"submitPForm(addWithOutForm)\" class=\"form-horizontal\" role=\"form\">\n        <div class=\"card-body\">\n          <div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Order Id</label>\n              <div class=\"col-md-5\">\n  \n                <ng-container *ngIf=\"OrderId_show; then thenTemplate; else elseTemplate\"></ng-container>\n                <ng-template #thenTemplate>\n                  <ng-select [formControl]=\"addWithOutForm.controls['order_id']\" (change)=\"getMasterData(true)\"\n                    [items]=\"orderListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Order\">\n                  </ng-select>\n                </ng-template>\n                <ng-template #elseTemplate>\n                  <select disabled class=\"form-control\">\n                    <option default selected=\"true\" disabled hidden value=\"OrderDetails?.po_no\">{{OrderDetails?.po_no}}\n                    </option>\n                  </select>\n                </ng-template>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Product <em>*</em></label>\n              <div class=\"col-md-5\">\n                <input [value]=\"productText\" type=\"text\" class=\"form-control\"  readonly >\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Registration Type <em>*</em></label>\n              <div class=\"col-md-5\">\n                <input [value]=\"registrationTypeText\" type=\"text\" class=\"form-control\"  readonly >\n              </div>\n            </div>            \n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Bar Code <em>*</em></label>\n              <div class=\"col-md-5\">\n                <input [formControl]=\"addWithOutForm.controls['barcode']\" type=\"text\" class=\"form-control\" placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Tag ID <em>*</em></label>\n              <div class=\"col-md-5\">\n                <ng-select [formControl]=\"addWithOutForm.controls['tag_id']\" \n                [items]=\"tagArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Tag\">\n              </ng-select>\n                \n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Qunatity <em>*</em></label>\n              <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.qty}\">\n                <input number readonly [formControl]=\"addWithOutForm.controls['qty']\"  type=\"text\" class=\"form-control\" placeholder=\"\">\n              </div>\n              <span *ngIf=\"formErrors.qty\" class=\"help-block\"\n              [innerHTML]=\"formErrors.qty\"></span>\n            </div>            \n          </div>\n        </div>\n        <div class=\"text-right border-top py-4 mt-5 card-footer\">\n          <button type=\"button\" class=\"btn btn-light\" (click)=\"back()\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\n        </div>\n      </form>\n    </ng-container>\n\n\n    <ng-container *ngIf=\"formtype==4\">\n      <form [formGroup]=\"addBulkForm\" (ngSubmit)=\"submitPForm(addBulkForm)\" class=\"form-horizontal\" role=\"form\">\n        <div class=\"card-body\">\n          <div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Order Id</label>\n              <div class=\"col-md-5\">\n  \n                <ng-container *ngIf=\"OrderId_show; then thenTemplate; else elseTemplate\"></ng-container>\n                <ng-template #thenTemplate>\n                  <ng-select [formControl]=\"addBulkForm.controls['order_id']\" (change)=\"getMasterData(true)\"\n                    [items]=\"orderListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Order\">\n                  </ng-select>\n                </ng-template>\n                <ng-template #elseTemplate>\n                  <select disabled class=\"form-control\">\n                    <option default selected=\"true\" disabled hidden value=\"OrderDetails?.po_no\">{{OrderDetails?.po_no}}\n                    </option>\n                  </select>\n                </ng-template>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Product <em>*</em></label>\n              <div class=\"col-md-5\">\n                <input [value]=\"productText\" type=\"text\" class=\"form-control\"  readonly >\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Registration Type <em>*</em></label>\n              <div class=\"col-md-5\">\n                <input [value]=\"registrationTypeText\" type=\"text\" class=\"form-control\"  readonly >\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Tag ID <em>*</em></label>\n              <div class=\"col-md-5\">\n                <ng-select [formControl]=\"addBulkForm.controls['tag_id']\" \n                [items]=\"tagArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Tag\">\n              </ng-select> \n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Received Qunatity </label>\n              <div class=\"col-md-5\">\n                <input number [formControl]=\"addBulkForm.controls['received_qty']\" type=\"text\" class=\"form-control\" readonly placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Qunatity <em>*</em></label>\n              <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.qty}\">\n                <input number [formControl]=\"addBulkForm.controls['qty']\" (input)=\"qunatitycheck()\" type=\"text\" class=\"form-control\" placeholder=\"\">\n              </div>\n              <span *ngIf=\"formErrors.qty\" class=\"help-block\"\n              [innerHTML]=\"formErrors.qty\"></span>\n            </div>\n            \n          </div>\n        </div>\n        <div class=\"text-right border-top py-4 mt-5 card-footer\">\n          <button type=\"button\" class=\"btn btn-light\" (click)=\"back()\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\n        </div>\n      </form>\n    </ng-container>\n\n  </div>\n</div>");

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

/***/ "./src/app/pages/inbound/registeration/add-configuration/add-configuration.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/inbound/registeration/add-configuration/add-configuration.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AddConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddConfigurationComponent", function() { return AddConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_product_registration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/product-registration.service */ "./src/app/service/product-registration.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");







let AddConfigurationComponent = class AddConfigurationComponent {
    constructor(router, activatedRoute, fb, location, dataService, productRegistrationService) {
        // console.log("location.path() ==>", location.path());
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.location = location;
        this.dataService = dataService;
        this.productRegistrationService = productRegistrationService;
        this.PageTitle = "Product Registrtion";
        this.loadingState = false;
        this.productListArray = [];
        this.orderListArray = [];
        this.showLoader = false;
        this.formErrors = {
            apierror: null,
            qty: null
        };
        this.isEditing = false;
        this.editId = null;
        this.OrderId_show = true;
        this.isSerialShow = false;
        this.registrationTypeArray = [];
        this.serialArray = [];
        this.formtype = 1;
        this.tagArray = [];
        this.addForm = this.fb.group({
            order_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            maintain_serial_no: [null],
            product_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            registration_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
        this.addWithForm = this.fb.group({
            order_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            maintain_serial_no: [null],
            product_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            registration_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            barcode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            serial_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            tag_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            qty: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            sku_no: [null],
            unload_id: [null],
            unload_detail_id: [null],
            received_qty: [null]
        });
        this.addWithOutForm = this.fb.group({
            order_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            maintain_serial_no: [null],
            product_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            registration_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            barcode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            tag_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            qty: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            sku_no: [null],
            unload_id: [null],
            unload_detail_id: [null],
            received_qty: [null]
        });
        this.addBulkForm = this.fb.group({
            order_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            product_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            registration_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            tag_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            qty: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            sku_no: [null],
            unload_id: [null],
            unload_detail_id: [null],
            received_qty: [null]
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
                        this.registrationTypeArray = response.data.registration_type;
                        this.serialArray = response.data.serial;
                        this.productListArray = response.data.product;
                    }
                }
                else {
                    this.orderListArray = response.data.order;
                }
            }
        });
        this.getTagData();
    }
    getTagData() {
        this.productRegistrationService.getTagData().subscribe((res) => {
            if (res.success) {
                this.tagArray = res.data.tag;
            }
        });
    }
    getEditObject() {
        this.productRegistrationService.getProductRegistrationById(this.editId).subscribe((response) => {
            this.orderListArray = [response.data.order];
            this.tagArray = [response.data.tag];
            if (response.data.configuration.registration_type.value == 0) {
                if (response.data.configuration.serial.value == 0) {
                    this.formtype = 2;
                    this.registrationTypeText = response.data.configuration.registration_type.label;
                    this.productText = response.data.product.label;
                    this.addWithForm.patchValue({
                        registration_type: response.data.configuration.registration_type.value,
                        order_id: response.data.order.value,
                        maintain_serial_no: response.data.configuration.serial.value,
                        product_id: response.data.product.value,
                        tag_id: response.data.tag.value,
                        qty: response.data.qty,
                        serial_no: response.data.serial_no,
                        barcode: response.data.barcode,
                        sku_no: response.data.sku_no,
                        unload_id: response.data.unload_id,
                        unload_detail_id: response.data.unload_detail.unload_detail_id,
                        received_qty: response.data.unload_detail.received_qty,
                    });
                }
                else if (response.data.configuration.serial.value == 1) {
                    this.formtype = 3;
                    this.registrationTypeText = response.data.configuration.registration_type.label;
                    this.productText = response.data.product.label;
                    this.addWithOutForm.patchValue({
                        registration_type: response.data.configuration.registration_type.value,
                        order_id: response.data.order.value,
                        product_id: response.data.product.value,
                        maintain_serial_no: response.data.configuration.serial.value,
                        tag_id: response.data.tag.value,
                        qty: response.data.qty,
                        barcode: response.data.barcode,
                        sku_no: response.data.sku_no,
                        unload_id: response.data.unload_id,
                        unload_detail_id: response.data.unload_detail.unload_detail_id,
                        received_qty: response.data.unload_detail.received_qty,
                    });
                }
            }
            else if (response.data.configuration.registration_type.value == 1) {
                this.formtype = 4;
                this.registrationTypeText = response.data.configuration.registration_type.label;
                this.productText = response.data.product.label;
                this.addBulkForm.patchValue({
                    registration_type: response.data.configuration.registration_type.value,
                    order_id: response.data.order.value,
                    product_id: response.data.product.value,
                    tag_id: response.data.tag.value,
                    qty: response.data.qty,
                    sku_no: response.data.sku_no,
                    unload_id: response.data.unload_id,
                    unload_detail_id: response.data.unload_detail.unload_detail_id,
                    received_qty: response.data.unload_detail.received_qty,
                });
            }
        });
    }
    setProductDetail(data) {
        if (data) {
            console.log(data);
            // console.log(this.productListArray[this.addForm.value.product_id]);
            this.productText = data.label;
            this.addWithForm.patchValue({
                sku_no: data.sku_no,
                product_id: data.value,
                unload_id: data.unload_id,
                unload_detail_id: data.unload_detail_id,
                received_qty: data.received_qty
            });
            this.addWithOutForm.patchValue({
                sku_no: data.sku_no,
                product_id: data.value,
                unload_id: data.unload_id,
                unload_detail_id: data.unload_detail_id,
                received_qty: data.received_qty
            });
            this.addBulkForm.patchValue({
                sku_no: data.sku_no,
                product_id: data.value,
                unload_id: data.unload_id,
                unload_detail_id: data.unload_detail_id,
                received_qty: data.received_qty
            });
        }
    }
    qunatitycheck() {
        let qty = Number(this.addBulkForm.value.qty);
        let r_qty = Number(this.addBulkForm.value.received_qty);
        if (qty <= r_qty) {
            this.formErrors.qty = null;
            this.addBulkForm.controls['qty'].setErrors(null);
        }
        else {
            this.formErrors.qty = "* Please Enter equval or small value in Received Qunatity";
            this.addBulkForm.controls['qty'].setErrors({ 'incorrect': true });
        }
    }
    submitForm(formData) {
        if (formData.valid) {
            // this.showLoader = true;
            // const data = new FormData();
            // data.append('registration_type', formData.value.registration_type);
            // data.append('order_id', formData.value.order_id);
            // data.append('product_id', formData.value.product_id);
            // if (this.isSerialShow) { data.append('maintain_serial_no', formData.value.maintain_serial_no); }
            // if (this.isEditing) {
            //   this.productRegistrationService.editProductConfiguration(this.editId, data).subscribe((response) => {
            //     this.showLoader = false;
            //     if (response.success) {
            //       this.next();
            //       // this.router.navigateByUrl('/inbound/registeration');
            //     }
            //   }, (error) => {
            //     this.showLoader = false;
            //   });
            // } else {
            //   this.productRegistrationService.addProductConfiguration(data).subscribe((response) => {
            //     this.showLoader = false;
            //     if (response.success) {
            //       this.next();
            //       // this.router.navigateByUrl('/inbound/registeration');
            //     }
            //   }, (error) => {
            //     this.showLoader = false;
            //   });
            // }
            this.next();
        }
    }
    back() {
        this.location.back();
    }
    next() {
        if (this.addForm.value.registration_type == 0) {
            this.registrationTypeText = this.registrationTypeArray[0].label;
            if (this.addForm.value.maintain_serial_no == 0) {
                this.maintainSerialNoText = this.serialArray[0].label;
                this.formtype = 2;
                this.addWithForm.patchValue({
                    registration_type: this.registrationTypeArray[0].value,
                    order_id: this.addForm.value.order_id,
                    maintain_serial_no: this.addForm.value.maintain_serial_no
                });
            }
            else {
                this.maintainSerialNoText = this.serialArray[0].label;
                this.formtype = 3;
                this.addWithOutForm.patchValue({
                    registration_type: this.registrationTypeArray[0].value,
                    order_id: this.addForm.value.order_id,
                    maintain_serial_no: this.addForm.value.maintain_serial_no
                });
            }
        }
        else {
            this.formtype = 4;
            this.addBulkForm.patchValue({
                registration_type: this.registrationTypeArray[1].value,
                order_id: this.addForm.value.order_id,
                maintain_serial_no: this.addForm.value.maintain_serial_no
            });
            this.registrationTypeText = this.registrationTypeArray[1].label;
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
    // Product Registration
    submitPForm(formData) {
        console.log(formData);
        if (formData.valid) {
            this.showLoader = true;
            if (this.isEditing) {
                this.productRegistrationService.editProductRegistration(this.editId, formData.value).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.back();
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
                    }
                }, (error) => {
                    this.showLoader = false;
                });
            }
        }
    }
};
AddConfigurationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: src_app_service_product_registration_service__WEBPACK_IMPORTED_MODULE_4__["ProductRegistrationService"] }
];
AddConfigurationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-configuration',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-configuration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/registeration/add-configuration/add-configuration.component.html")).default
    })
], AddConfigurationComponent);



/***/ }),

/***/ "./src/app/pages/inbound/registeration/add-configuration/add-configuration.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/inbound/registeration/add-configuration/add-configuration.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddConfigurationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddConfigurationModule", function() { return AddConfigurationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_configuration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-configuration.component */ "./src/app/pages/inbound/registeration/add-configuration/add-configuration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_service_product_registration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/product-registration.service */ "./src/app/service/product-registration.service.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");










const routes = [
    {
        path: '',
        component: _add_configuration_component__WEBPACK_IMPORTED_MODULE_4__["AddConfigurationComponent"]
    },
    {
        path: ':id',
        component: _add_configuration_component__WEBPACK_IMPORTED_MODULE_4__["AddConfigurationComponent"]
    }
];
let AddConfigurationModule = class AddConfigurationModule {
};
AddConfigurationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_configuration_component__WEBPACK_IMPORTED_MODULE_4__["AddConfigurationComponent"]],
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
], AddConfigurationModule);



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
    login_pin: {
        required: `* Please enter PIN`,
        maxlength: `Pin Max 4 Digit`,
        minlength: `Please enter at least 4 digits`,
    },
    number_tag_to_create: {
        required: `* Please enter vlaue`,
        max: `Maximum 100`,
        min: ` Minimum 1`
    },
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
//# sourceMappingURL=add-configuration-add-configuration-module-es2015.js.map