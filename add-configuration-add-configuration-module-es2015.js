(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-configuration-add-configuration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/registeration/add-configuration/add-configuration.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/registeration/add-configuration/add-configuration.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"page-header border-b\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n\n    <ng-container *ngIf=\"formtype==1\">\n      <form [formGroup]=\"addForm\"  class=\"form-horizontal\" role=\"form\">\n        <div class=\"card-body\">\n          <div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Order Id</label>\n              <div class=\"col-md-5\">\n\n                <ng-container *ngIf=\"orderId_show; then thenTemplate; else elseTemplate\"></ng-container>\n                <ng-template #thenTemplate>\n                  <ng-select [formControl]=\"addForm.controls['order_id']\" (change)=\"getMasterData(true)\"\n                    [items]=\"orderListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Order\">\n                  </ng-select>\n                </ng-template>\n                <ng-template #elseTemplate>\n                  <select disabled class=\"form-control\">\n                    <option default selected=\"true\" disabled hidden value=\"OrderDetails?.po_no\">{{OrderDetails?.po_no}}\n                    </option>\n                  </select>\n                </ng-template>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Product <em>*</em></label>\n              <div class=\"col-md-5\">\n                <ng-select [formControl]=\"addForm.controls['product_id']\"  (change)=\"setProductDetail($event)\" [items]=\"productListArray\" bindLabel=\"label\"\n                  bindValue=\"value\" placeholder=\"Select Product\">\n                </ng-select>\n              </div>\n              <span *ngIf=\"formErrors.product_id\" class=\"help-block\"\n              [innerHTML]=\"formErrors.product_id\"></span>\n            </div>\n          </div>\n        </div>\n  \n      </form>\n    </ng-container>\n\n\n    <ng-container *ngIf=\"formtype==2\">\n\n      <form [formGroup]=\"addWithForm\" (ngSubmit)=\"submitPForm(addWithForm)\" class=\"form-horizontal\" role=\"form\">\n        <div class=\"card-body\">\n          <div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Order Id</label>\n              <div class=\"col-md-5\">\n  \n                <ng-container *ngIf=\"orderId_show; then thenTemplate; else elseTemplate\"></ng-container>\n                <ng-template #thenTemplate>\n                  <ng-select [formControl]=\"addWithForm.controls['order_id']\" (change)=\"getMasterData(true)\"\n                    [items]=\"orderListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Order\">\n                  </ng-select>\n                </ng-template>\n                <ng-template #elseTemplate>\n                  <select disabled class=\"form-control\">\n                    <option default selected=\"true\" disabled hidden value=\"OrderDetails?.po_no\">{{OrderDetails?.po_no}}\n                    </option>\n                  </select>\n                </ng-template>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Product <em>*</em></label>\n              <div class=\"col-md-5\">\n                <input [value]=\"productText\" type=\"text\" class=\"form-control\"  readonly >\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Registration Type <em>*</em></label>\n              <div class=\"col-md-5\">\n                <input [value]=\"registrationTypeText\" type=\"text\" class=\"form-control\"  readonly >\n              </div>\n            </div>\n            <div  class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Serial Number <em>*</em></label>\n              <div class=\"col-md-5\">               \n                <input [formControl]=\"addWithForm.controls['serial_no']\" type=\"text\" class=\"form-control\" placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Bar Code <em>*</em></label>\n              <div class=\"col-md-5\">\n                <input [formControl]=\"addWithForm.controls['barcode']\" type=\"text\" class=\"form-control\" placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Tag ID <em>*</em></label>\n              <div class=\"col-md-5\">\n                <ng-select [formControl]=\"addWithForm.controls['tag_id']\" \n                    [items]=\"tagArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Tag\">\n                  </ng-select>\n              </div>\n            </div>           \n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Qunatity <em>*</em></label>\n              <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.qty}\">\n                <input number [formControl]=\"addWithForm.controls['qty']\" readonly type=\"text\" class=\"form-control\" placeholder=\"\">\n              </div>\n              <span *ngIf=\"formErrors.qty\" class=\"help-block\"\n              [innerHTML]=\"formErrors.qty\"></span>\n            </div>           \n          </div>\n        </div>\n        <div class=\"text-right border-top py-4 mt-5 card-footer\">\n          <button type=\"button\" class=\"btn btn-light\" (click)=\"back()\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\n        </div>\n      </form>\n    </ng-container>\n\n    <ng-container *ngIf=\"formtype==3\">\n      <form [formGroup]=\"addWithOutForm\" (ngSubmit)=\"submitPForm(addWithOutForm)\" class=\"form-horizontal\" role=\"form\">\n        <div class=\"card-body\">\n          <div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Order Id</label>\n              <div class=\"col-md-5\">\n  \n                <ng-container *ngIf=\"orderId_show; then thenTemplate; else elseTemplate\"></ng-container>\n                <ng-template #thenTemplate>\n                  <ng-select [formControl]=\"addWithOutForm.controls['order_id']\" (change)=\"getMasterData(true)\"\n                    [items]=\"orderListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Order\">\n                  </ng-select>\n                </ng-template>\n                <ng-template #elseTemplate>\n                  <select disabled class=\"form-control\">\n                    <option default selected=\"true\" disabled hidden value=\"OrderDetails?.po_no\">{{OrderDetails?.po_no}}\n                    </option>\n                  </select>\n                </ng-template>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Product <em>*</em></label>\n              <div class=\"col-md-5\">\n                <input [value]=\"productText\" type=\"text\" class=\"form-control\"  readonly >\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Registration Type <em>*</em></label>\n              <div class=\"col-md-5\">\n                <input [value]=\"registrationTypeText\" type=\"text\" class=\"form-control\"  readonly >\n              </div>\n            </div>            \n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Bar Code <em>*</em></label>\n              <div class=\"col-md-5\">\n                <input [formControl]=\"addWithOutForm.controls['barcode']\" type=\"text\" class=\"form-control\" placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Tag ID <em>*</em></label>\n              <div class=\"col-md-5\">\n                <ng-select [formControl]=\"addWithOutForm.controls['tag_id']\" \n                [items]=\"tagArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Tag\">\n              </ng-select>\n                \n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Qunatity <em>*</em></label>\n              <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.qty}\">\n                <input number readonly [formControl]=\"addWithOutForm.controls['qty']\"  type=\"text\" class=\"form-control\" placeholder=\"\">\n              </div>\n              <span *ngIf=\"formErrors.qty\" class=\"help-block\"\n              [innerHTML]=\"formErrors.qty\"></span>\n            </div>            \n          </div>\n        </div>\n        <div class=\"text-right border-top py-4 mt-5 card-footer\">\n          <button type=\"button\" class=\"btn btn-light\" (click)=\"back()\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\n        </div>\n      </form>\n    </ng-container>\n\n\n    <ng-container *ngIf=\"formtype==4\">\n      <form [formGroup]=\"addBulkForm\" (ngSubmit)=\"submitPForm(addBulkForm)\" class=\"form-horizontal\" role=\"form\">\n        <div class=\"card-body\">\n          <div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Order Id</label>\n              <div class=\"col-md-5\">\n  \n                <ng-container *ngIf=\"orderId_show; then thenTemplate; else elseTemplate\"></ng-container>\n                <ng-template #thenTemplate>\n                  <ng-select [formControl]=\"addBulkForm.controls['order_id']\" (change)=\"getMasterData(true)\"\n                    [items]=\"orderListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Order\">\n                  </ng-select>\n                </ng-template>\n                <ng-template #elseTemplate>\n                  <select disabled class=\"form-control\">\n                    <option default selected=\"true\" disabled hidden value=\"OrderDetails?.po_no\">{{OrderDetails?.po_no}}\n                    </option>\n                  </select>\n                </ng-template>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Product <em>*</em></label>\n              <div class=\"col-md-5\">\n                <input [value]=\"productText\" type=\"text\" class=\"form-control\"  readonly >\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Registration Type <em>*</em></label>\n              <div class=\"col-md-5\">\n                <input [value]=\"registrationTypeText\" type=\"text\" class=\"form-control\"  readonly >\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Tag ID <em>*</em></label>\n              <div class=\"col-md-5\">\n                <ng-select [formControl]=\"addBulkForm.controls['tag_id']\" \n                [items]=\"tagArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Tag\">\n              </ng-select> \n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Received Qunatity </label>\n              <div class=\"col-md-5\">\n                <input number [formControl]=\"addBulkForm.controls['received_qty']\" type=\"text\" class=\"form-control\" readonly placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Sorted Qunatity </label>\n              <div class=\"col-md-5\">\n                <input number [formControl]=\"addBulkForm.controls['sorted_qty']\" type=\"text\" class=\"form-control\" readonly placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Pending Qunatity </label>\n              <div class=\"col-md-5\">\n                <input number [formControl]=\"addBulkForm.controls['pending_qty']\" type=\"text\" class=\"form-control\" readonly placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"control-label text-md-right col-md-4 col-lg-3\">Qunatity <em>*</em></label>\n              <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.qty}\">\n                <input number [formControl]=\"addBulkForm.controls['qty']\" (input)=\"qunatitycheck()\" type=\"text\" class=\"form-control\" placeholder=\"\">\n              </div>\n              <span *ngIf=\"formErrors.qty\" class=\"help-block\"\n              [innerHTML]=\"formErrors.qty\"></span>\n            </div>\n            \n          </div>\n        </div>\n        <div class=\"text-right border-top py-4 mt-5 card-footer\">\n          <button type=\"button\" class=\"btn btn-light\" (click)=\"back()\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\n        </div>\n      </form>\n    </ng-container>\n\n  </div>\n</div>");

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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");








let AddConfigurationComponent = class AddConfigurationComponent {
    constructor(router, activatedRoute, fb, location, toastr, dataService, productRegistrationService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.location = location;
        this.toastr = toastr;
        this.dataService = dataService;
        this.productRegistrationService = productRegistrationService;
        this.PageTitle = "Product Registrtion";
        this.loadingState = false;
        this.productListArray = [];
        this.orderListArray = [];
        this.showLoader = false;
        this.formErrors = {
            apierror: null,
            product_id: null,
            qty: null
        };
        this.isEditing = false;
        this.editId = null;
        this.orderId_show = true;
        this.isSerialShow = false;
        this.registrationTypeArray = [];
        this.serialArray = [];
        this.formtype = 1;
        this.tagArray = [];
        this.isRegister = false;
        console.log("location.path() ==>", location.path());
        this.addForm = this.fb.group({
            order_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            product_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
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
            received_qty: [null],
            pending_qty: [null],
            sorted_qty: [null]
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
            received_qty: [null],
            pending_qty: [null],
            sorted_qty: [null]
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
            received_qty: [null],
            pending_qty: [null],
            sorted_qty: [null]
        });
        console.log(this.activatedRoute.snapshot.paramMap);
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            let id = this.activatedRoute.snapshot.paramMap.get('id');
            if (location.path() == `/inbound/registeration/add/${id}`) {
                this.orderId = id;
                this.addForm.patchValue({ order_id: this.orderId });
                this.orderId_show = false;
                this.getOrderDetails();
            }
            else {
                this.formtype = 5;
                this.editId = id;
                this.isEditing = true;
            }
        }
        else if (this.activatedRoute.snapshot.paramMap.get('order_id') && this.activatedRoute.snapshot.paramMap.get('product_id')) {
            let order_id = this.activatedRoute.snapshot.paramMap.get('order_id');
            let product_id = this.activatedRoute.snapshot.paramMap.get('product_id');
            if (location.path() == `/inbound/registeration/register-product;order_id=${order_id};product_id=${product_id}`) {
                this.orderId = order_id;
                this.productId = product_id;
                this.addForm.patchValue({ order_id: this.orderId, product_id: product_id });
                this.orderId_show = false;
                this.formtype = 5;
                this.isEditing = false;
                this.isRegister = true;
                this.getOrderDetails();
            }
        }
    }
    ngOnInit() {
        if (this.isEditing) {
            this.getEditObject();
        }
        else if (this.isRegister) {
            this.getProductRegistrationObject();
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
            this.orderId = this.addForm.value.order_id;
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
        // this.getTagData();
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
            if (response.success) {
                this.orderListArray = [response.data.order];
                this.OrderDetails = { po_no: response.data.order.label, po_id: response.data.order.value };
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
                            pending_qty: response.data.pending_qty,
                            sorted_qty: response.data.sorted_qty,
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
                            pending_qty: response.data.pending_qty,
                            sorted_qty: response.data.sorted_qty,
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
                        pending_qty: response.data.pending_qty,
                        sorted_qty: response.data.sorted_qty,
                    });
                }
            }
        });
    }
    setProductDetail(data) {
        if (data) {
            console.log(data);
            this.productId = data.value;
            this.getProductRegistrationObject();
            this.productText = data.label;
            this.addWithForm.patchValue({
                sku_no: data.sku_no,
                product_id: data.value,
                unload_id: data.unload_id,
                unload_detail_id: data.unload_detail_id,
                received_qty: data.received_qty,
                pending_qty: data.pending_qty,
                sorted_qty: data.sorted_qty
            });
            this.addWithOutForm.patchValue({
                sku_no: data.sku_no,
                product_id: data.value,
                unload_id: data.unload_id,
                unload_detail_id: data.unload_detail_id,
                received_qty: data.received_qty,
                pending_qty: data.pending_qty,
                sorted_qty: data.sorted_qty
            });
            this.addBulkForm.patchValue({
                sku_no: data.sku_no,
                product_id: data.value,
                unload_id: data.unload_id,
                unload_detail_id: data.unload_detail_id,
                received_qty: data.received_qty,
                pending_qty: data.pending_qty,
                sorted_qty: data.sorted_qty
            });
        }
    }
    qunatitycheck() {
        let qty = Number(this.addBulkForm.value.qty);
        let p_qty = Number(this.addBulkForm.value.pending_qty);
        if (qty <= p_qty) {
            this.formErrors.qty = null;
            this.addBulkForm.controls['qty'].setErrors(null);
        }
        else {
            this.formErrors.qty = "* Please Enter equval or small value in Pending Qunatity";
            this.addBulkForm.controls['qty'].setErrors({ 'incorrect': true });
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
    getProductRegistrationObject() {
        this.productRegistrationService.getProductConfigurationById(this.productId, this.orderId).subscribe((response) => {
            if (response.success) {
                this.getTagData();
                if (this.OrderDetails) {
                    this.orderListArray = [{ label: this.OrderDetails.po_no, value: this.OrderDetails.po_id }];
                }
                if (response.data.configuration.registration_type.value == 0) {
                    if (response.data.configuration.serial.value == 0) {
                        this.formtype = 2;
                        this.registrationTypeText = response.data.configuration.registration_type.label;
                        this.productText = response.data.product.label;
                        this.addWithForm.patchValue({
                            order_id: this.orderId,
                            registration_type: response.data.configuration.registration_type.value,
                            maintain_serial_no: response.data.configuration.serial.value,
                            product_id: response.data.product.value,
                            serial_no: response.data.serial_no,
                            barcode: response.data.barcode,
                            sku_no: response.data.product.sku_no,
                            unload_id: response.data.unload_id ? response.data.unload_id : this.addWithForm.value.unload_id,
                            unload_detail_id: response.data.unload_detail ? response.data.unload_detail.unload_detail_id : this.addWithForm.value.unload_detail_id,
                            received_qty: response.data.unload_detail ? response.data.unload_detail.received_qty : this.addWithForm.value.received_qty,
                            pending_qty: response.data.pending_qty,
                            sorted_qty: response.data.sorted_qty
                        });
                    }
                    else if (response.data.configuration.serial.value == 1) {
                        this.formtype = 3;
                        this.registrationTypeText = response.data.configuration.registration_type.label;
                        this.productText = response.data.product.label;
                        this.addWithOutForm.patchValue({
                            order_id: this.orderId,
                            registration_type: response.data.configuration.registration_type.value,
                            product_id: response.data.product.value,
                            maintain_serial_no: response.data.configuration.serial.value,
                            barcode: response.data.barcode,
                            sku_no: response.data.product.sku_no,
                            unload_id: response.data.unload_id ? response.data.unload_id : this.addWithForm.value.unload_id,
                            unload_detail_id: response.data.unload_detail ? response.data.unload_detail.unload_detail_id : this.addWithForm.value.unload_detail_id,
                            received_qty: response.data.unload_detail ? response.data.unload_detail.received_qty : this.addWithForm.value.received_qty,
                            pending_qty: response.data.pending_qty,
                            sorted_qty: response.data.sorted_qty
                        });
                    }
                }
                else if (response.data.configuration.registration_type.value == 1) {
                    this.formtype = 4;
                    this.registrationTypeText = response.data.configuration.registration_type.label;
                    this.productText = response.data.product.label;
                    this.addBulkForm.patchValue({
                        order_id: this.orderId,
                        registration_type: response.data.configuration.registration_type.value,
                        product_id: response.data.product.value,
                        qty: response.data.qty,
                        sku_no: response.data.product.sku_no,
                        unload_id: response.data.unload_id ? response.data.unload_id : this.addWithForm.value.unload_id,
                        unload_detail_id: response.data.unload_detail ? response.data.unload_detail.unload_detail_id : this.addWithForm.value.unload_detail_id,
                        received_qty: response.data.unload_detail ? response.data.unload_detail.received_qty : this.addWithForm.value.received_qty,
                        pending_qty: response.data.pending_qty,
                        sorted_qty: response.data.sorted_qty
                    });
                }
            }
            else {
                response.error.map(obj => {
                    if (obj.hasOwnProperty('product_id')) {
                        this.formErrors['product_id'] = obj['product_id'];
                        this.addForm.controls['product_id'].setErrors({ 'incorrect': true });
                        if (this.formtype != 1) {
                            this.back();
                            this.toastr.error('', obj['product_id']);
                        }
                    }
                    else {
                        this.formErrors['apierror'] = `* ${response.error}`;
                    }
                });
            }
        });
    }
};
AddConfigurationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
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



/***/ })

}]);
//# sourceMappingURL=add-configuration-add-configuration-module-es2015.js.map