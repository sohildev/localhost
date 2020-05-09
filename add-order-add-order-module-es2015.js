(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-order-add-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/add-product/add-product.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/add-product/add-product.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Modal -->\r\n<div class=\"modal fade\" id=\"AddOrderProduct\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <form [formGroup]=\"productAddForm\" (ngSubmit)=\"submitForm(productAddForm)\" class=\"form-horizontal\" role=\"form\">\r\n\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Product</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label text-md-right\">Order No. <em>*</em></label>\r\n            <div class=\"\">\r\n              <input [formControl]=\"productAddForm.controls['order_no']\" type=\"text\" class=\"form-control\" disabled>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label text-md-right\">Brand <em>*</em></label>\r\n            <ng-select [formControl]=\"productAddForm.controls['brand_id']\" (change)=\"getMasterData()\"\r\n              [items]=\"brandListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Brand\">\r\n            </ng-select>\r\n\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label text-md-right\">Product <em>*</em></label>\r\n            <ng-select [formControl]=\"productAddForm.controls['product_id']\" [items]=\"productListArray\"\r\n              bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Product\" (change)=checkProductAddedd($event)>\r\n            </ng-select>\r\n            <span *ngIf=\"formErrors.product_id\" class=\"help-block\" [innerHTML]=\"formErrors.product_id\"></span>\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label text-md-right\">Order Quantity <em>*</em></label>\r\n                <div class=\"\">\r\n                  <input number [formControl]=\"productAddForm.controls['qty']\" type=\"text\" class=\"form-control\"\r\n                    placeholder=\"\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label text-md-right\">Price <em>*</em></label>\r\n                <div class=\"\">\r\n                  <input number [formControl]=\"productAddForm.controls['price']\" type=\"text\" class=\"form-control\"\r\n                    placeholder=\"\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-light\" data-dismiss=\"modal\">Cancel</button>\r\n          <button type=\"submit\" [disabled]=\"showLoader\" class=\"btn btn-secondary\">Submit</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/add-order/add-order.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/add-order/add-order.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-7\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\" [ngClass]=\"{'has-error': formErrors.order_no}\">\r\n                  <label class=\"control-label text-md-right\">Order No. <em>*</em></label>\r\n                  <div class=\"\">\r\n                    <input [formControl]=\"addForm.controls['po_no']\" (change)=\"removeError()\" type=\"text\"\r\n                      class=\"form-control\" placeholder=\"\">\r\n                    <span *ngIf=\"formErrors.order_no\" class=\"help-block\" [innerHTML]=\"formErrors.order_no\"></span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">Order Date <em>*</em></label>\r\n                  <div class=\"date-picker\">\r\n                    <ng2-flatpickr [setDate]=\"orderDate\"  [formControl]=\"addForm.controls['po_date']\"\r\n                      [config]=\"exampleOptions\">\r\n                    </ng2-flatpickr>\r\n                    <span class=\"date-picker-icon\">\r\n                      <span class=\"fa fa-calendar\"></span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">Supplier <em>*</em></label>\r\n                  <ng-select [formControl]=\"addForm.controls['supplier_id']\" [items]=\"supplierListArray\"\r\n                    bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Supplier\">\r\n                  </ng-select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">Client</label>\r\n                  <ng-select [formControl]=\"addForm.controls['client_id']\" [items]=\"clientListArray\" bindLabel=\"label\"\r\n                    bindValue=\"value\" placeholder=\"Select Client\">\r\n                  </ng-select>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">Invoice No. </label>\r\n                  <input [formControl]=\"addForm.controls['invoice_no']\"  type=\"text\"\r\n                  class=\"form-control\" placeholder=\"\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-5\">\r\n          <div class=\"col-7 d-flex align-items-center\">\r\n            <h5>Product</h5>\r\n          </div>\r\n          <div class=\"col-5 text-right\">\r\n            <button type=\"button\" class=\"btn btn-light\" (click)=\"addform()\">\r\n              <i class=\"la la-plus\"></i>\r\n              Add Product\r\n            </button><br>\r\n            <span *ngIf=\"formErrors.product\" class=\"help-block\" [innerHTML]=\"formErrors.product\"></span>\r\n                 \r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col\">\r\n            <div class=\"table-responsive-md\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>No.</th>\r\n                    <th>Product</th>\r\n                    <th>Sku No</th>\r\n                    <th>Order Quantity</th>\r\n                    <th>Price</th>\r\n                    <th>Total Price</th>\r\n                    <th class=\"text-right\" width=\"80\">Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let item of objectArray; let i=index\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{item?.product_name}}</td>\r\n                    <td>{{item?.sku_no}}</td>\r\n                    <td>{{item?.qty}}</td>\r\n                    <td>{{currentCompany?.currency?.label }} {{item?.price}}</td>\r\n                    <td>{{currentCompany?.currency?.label }} {{(item?.qty) * (item?.price) | number}}</td>\r\n                    <td>\r\n                      <div class=\"action-drop dropdown text-right\">\r\n                        <a href=\"#\" data-toggle=\"dropdown\" class=\"btn shadow-none btn-default btn-sm btn-icon-only\"\r\n                          title=\"\">\r\n                          <i class=\"fa fa-ellipsis-h\"></i>\r\n                        </a>\r\n                        <div class=\"dropdown-menu dropdown-icon-menu drop-menu-right\" style=\"width: 100px;\">\r\n                          <a *ngIf=\"isEditing\" class=\"dropdown-item\" (click)=\"editform(item?.po_detail_id,i,item)\"><i\r\n                              class=\"fa fa-edit fa-fw text-primary\">\r\n                            </i> Edit</a>\r\n                          <a class=\"dropdown-item\" (click)=\"deleteObject(item,i)\">\r\n                            <i class=\"fa fa-trash fa-fw text-primary\"></i>\r\n                            Delete\r\n                          </a>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"!loadingState && objectArray.length === 0\">\r\n                    <td colspan=\"7\">No records found</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <pagination [paginationList]=\"pagination\" [currentPage]=\"currentPage\" (onPageChange)=\"getPage($event)\">\r\n            </pagination>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-5\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label text-md-right\">Notes</label>\r\n              <textarea [formControl]=\"addForm.controls['notes']\" class=\"form-control\" rows=\"2\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" routerLink=\"/inbound/order\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n\r\n<app-add-product (onRelodeEvent)=\"onRelodeEvent($event)\" [ProductList]=\"objectArray\" [orderNo]=\"addForm.value.po_no\"\r\n  (onProductSubmit)=\"onProductSubmit($event)\"></app-add-product>\r\n");

/***/ }),

/***/ "./src/app/common-module/add-product/add-product.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/common-module/add-product/add-product.component.ts ***!
  \********************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_service_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/order.service */ "./src/app/service/order.service.ts");
/* harmony import */ var src_app_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common */ "./src/app/common.ts");





let AddProductComponent = class AddProductComponent {
    constructor(fb, orderService) {
        this.fb = fb;
        this.orderService = orderService;
        this.orderNo = false;
        this.ProductList = [];
        this.onProductSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRelodeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.brandListArray = [];
        this.productListArray = [];
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
            apierror: null,
            product_id: null
        };
        this.productIdList = [];
        this.isEditing = false;
        this.index = false;
        this.productAddForm = this.fb.group({
            order_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            sku_no: [null],
            brand_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            product_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            qty: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            price: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            amount: [0]
        });
    }
    ngOnInit() {
    }
    addObject() {
        this.resetForm();
        $('#AddOrderProduct').modal('show');
        this.getMasterData();
        this.productAddForm.patchValue({ order_no: this.orderNo });
    }
    editObject(id, index, data, order_id, order_no) {
        this.order_id = order_id;
        this.getMasterData();
        this.resetForm();
        $('#AddOrderProduct').modal('show');
        this.productAddForm.patchValue({
            order_no: order_no,
            sku_no: data.sku_no,
            brand_id: data.brand_id,
            product_id: data.product_id,
            qty: data.qty,
            price: data.price,
            amount: data.amount
        });
        this.getMasterData();
        if (id) {
            this.isEditing = true;
            this.editId = id;
        }
        else {
            this.index = index;
        }
    }
    getMasterData() {
        const params = {};
        let brand_id = this.productAddForm.value.brand_id;
        if (brand_id) {
            params.brand_id = brand_id;
        }
        this.orderService.getOrderProductMasterData(params).subscribe((response) => {
            if (response.success) {
                if (brand_id) {
                    this.productListArray = response.data.product ? response.data.product : [];
                }
                else {
                    this.brandListArray = response.data.brand ? response.data.brand : [];
                }
            }
        });
    }
    checkProductAddedd(event) {
        let selected_product_id = this.productAddForm.value.product_id;
        let already_added = false;
        this.ProductList.filter((obj) => {
            if (selected_product_id == obj.product_id) {
                already_added = true;
            }
        });
        if (already_added) {
            this.formErrors.product_id = "* Product Allredy Exit.";
            this.showLoader = true;
        }
        else {
            this.formErrors.product_id = null;
            this.productAddForm.patchValue({ sku_no: event.sku_no });
            this.showLoader = false;
        }
    }
    submitForm(formData) {
        let product_name;
        if (formData.valid) {
            this.showLoader = true;
            this.productListArray.filter((item) => {
                if (item.value == formData.value.product_id) {
                    product_name = item.label;
                }
            });
            let data = {};
            data.order_no = formData.value.order_no;
            data.sku_no = formData.value.sku_no;
            data.product_id = formData.value.product_id;
            data.brand_id = formData.value.brand_id;
            data.product_name = product_name;
            data.qty = formData.value.qty;
            data.price = formData.value.price;
            data.amount = Number(formData.value.price * formData.value.qty);
            if (this.isEditing) {
                data.order_id = this.order_id;
                this.orderService.editOrderProduct(this.editId, data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.onRelodeEvent.emit(true);
                    }
                }, (error) => {
                    this.showLoader = false;
                });
                $('#AddOrderProduct').modal('hide');
            }
            else {
                if (this.orderNo) {
                    data.index = this.index;
                    this.onProductSubmit.emit(data);
                    $('#AddOrderProduct').modal('hide');
                    setTimeout(() => {
                        this.showLoader = false;
                    }, 500);
                }
            }
        }
    }
    resetForm() {
        this.loadingState = false;
        this.isEditing = false;
        this.editId = null;
        src_app_common__WEBPACK_IMPORTED_MODULE_4__["CommonFunction"].resetForm(this.productAddForm, this.formErrors);
    }
};
AddProductComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddProductComponent.prototype, "orderNo", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddProductComponent.prototype, "ProductList", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AddProductComponent.prototype, "onProductSubmit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AddProductComponent.prototype, "onRelodeEvent", void 0);
AddProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/add-product/add-product.component.html")).default
    })
], AddProductComponent);



/***/ }),

/***/ "./src/app/common-module/add-product/add-product.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/common-module/add-product/add-product.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductModule", function() { return AddProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _add_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-product.component */ "./src/app/common-module/add-product/add-product.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var src_app_service_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/order.service */ "./src/app/service/order.service.ts");









let AddProductModule = class AddProductModule {
};
AddProductModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_product_component__WEBPACK_IMPORTED_MODULE_3__["AddProductComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_7__["FormValidationModule"],
        ], exports: [_add_product_component__WEBPACK_IMPORTED_MODULE_3__["AddProductComponent"]], providers: [src_app_service_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"]]
    })
], AddProductModule);



/***/ }),

/***/ "./src/app/pages/inbound/order/add-order/add-order.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/inbound/order/add-order/add-order.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrderComponent", function() { return AddOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/order.service */ "./src/app/service/order.service.ts");
/* harmony import */ var src_app_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common */ "./src/app/common.ts");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/messages */ "./src/app/messages.ts");
/* harmony import */ var src_app_common_module_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common-module/add-product/add-product.component */ "./src/app/common-module/add-product/add-product.component.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");










let AddOrderComponent = class AddOrderComponent {
    constructor(router, activatedRoute, dataservice, fb, orderService, cdr, paginationService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dataservice = dataservice;
        this.fb = fb;
        this.orderService = orderService;
        this.cdr = cdr;
        this.paginationService = paginationService;
        this.PageTitle = "Order";
        this.exampleOptions = {
            defaultDate: new Date(),
            dateFormat: src_app_messages__WEBPACK_IMPORTED_MODULE_7__["DATEFORMAT"]
            //enableTime: true
        };
        this.supplierListArray = [];
        this.objectArray = [];
        this.clientListArray = [];
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
            apierror: null,
            order_no: null,
            product: null
        };
        this.isEditing = false;
        this.editId = null;
        this.orderId = false;
        this.currentPage = 1;
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }
        this.addForm = this.fb.group({
            po_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            po_date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            supplier_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            client_id: [""],
            notes: [null],
            invoice_no: [""]
        });
    }
    ngOnInit() {
        this.dataservice.currentCompany.subscribe((response) => {
            if (response) {
                this.currentCompany = response;
            }
        });
        this.orderDate = new Date();
        this.addForm.patchValue({ po_date: new Date() });
        this.getMasterData();
        if (this.isEditing) {
            this.getEditObject();
            this.getOrderProductList();
        }
    }
    getMasterData() {
        this.orderService.getOrderMasterData().subscribe((response) => {
            if (response.success) {
                this.supplierListArray = response.data.supplier;
                this.clientListArray = response.data.client;
            }
        });
    }
    getOrderProductList() {
        const params = { order_id: this.editId };
        this.orderService.getOrderProductList(params).subscribe((response) => {
            this.loadingState = false;
            if (response.success && response.data) {
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
    getEditObject() {
        this.orderService.getOrderById(this.editId).subscribe((response) => {
            if (response.success) {
                this.orderDate = new Date(response.data.po_date);
                this.addForm.patchValue({
                    po_no: response.data.po_no,
                    supplier_id: response.data.supplier_id,
                    client_id: response.data.client_id,
                    po_date: response.data.po_date,
                    notes: response.data.notes ? response.data.notes : '',
                    invoice_no: response.data.invoice_no
                });
            }
            else {
                this.router.navigateByUrl('/inbound/order');
            }
        });
    }
    getPage(page) {
        this.currentPage = page;
        this.currentPage = 1;
        this.getOrderProductList();
    }
    onProductSubmit(data) {
        if (data) {
            if (data.index) {
                this.objectArray[data.index] = data;
            }
            else {
                this.objectArray.push(data);
            }
        }
        if (this.objectArray && this.objectArray.length > 0) {
            this.formErrors.product = null;
        }
        else {
            this.formErrors.product = "* Please Add Product";
        }
    }
    submitForm(formData) {
        if (formData.valid) {
            if (this.objectArray && this.objectArray.length > 0) {
                this.formErrors.product = null;
                this.showLoader = true;
                const data = new FormData();
                data.append('po_no', formData.value.po_no);
                data.append('po_date', src_app_common__WEBPACK_IMPORTED_MODULE_5__["CommonFunction"].changedateFormate(formData.value.po_date[0]));
                data.append('supplier_id', formData.value.supplier_id);
                data.append('client_id', formData.value.client_id);
                // if (formData.value.invoice_no) {
                data.append('invoice_no', formData.value.invoice_no);
                // }
                data.append('notes', formData.value.notes ? formData.value.notes : '');
                if (this.isEditing) {
                    this.orderService.editOrder(this.editId, data).subscribe((response) => {
                        this.showLoader = false;
                        if (response.success) {
                            if (this.objectArray && this.objectArray.length > 0) {
                                let EditobjectArray = [];
                                this.objectArray.filter((item) => {
                                    if (!item.po_detail_id) {
                                        EditobjectArray.push(item);
                                    }
                                });
                                EditobjectArray.filter((item) => {
                                    item.order_id = this.editId;
                                });
                                this.orderService.addOrderProduct(EditobjectArray).subscribe((res) => {
                                    this.showLoader = false;
                                    if (res.success) {
                                    }
                                }, (error) => {
                                    this.showLoader = false;
                                });
                            }
                            this.router.navigateByUrl('/inbound/order');
                        }
                        else {
                            response.error.map(obj => {
                                if (obj.hasOwnProperty('po_no')) {
                                    this.formErrors['order_no'] = obj['po_no'];
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
                    this.orderService.addOrder(data).subscribe((response) => {
                        this.showLoader = false;
                        if (response.success) {
                            let po_id = response.data.po_id;
                            if (this.objectArray && this.objectArray.length > 0) {
                                this.objectArray.filter((item) => {
                                    item.order_id = po_id;
                                });
                                this.orderService.addOrderProduct(this.objectArray).subscribe((res) => {
                                    this.showLoader = false;
                                    if (res.success) {
                                    }
                                }, (error) => {
                                    this.showLoader = false;
                                });
                            }
                            this.router.navigateByUrl('/inbound/order');
                        }
                        else {
                            response.error.map(obj => {
                                if (obj.hasOwnProperty('po_no')) {
                                    this.formErrors['order_no'] = obj['po_no'];
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
            else {
                this.formErrors.product = "* Please Add Product";
            }
        }
    }
    addform() {
        if (this.addForm.value.po_no) {
            setTimeout(() => {
                this.productAdd.addObject();
                this.orderDate = this.addForm.value.po_date;
            }, 200);
        }
        else {
            this.formErrors.order_no = "* Please Enter Order Number";
        }
    }
    editform(id, index, data) {
        setTimeout(() => {
            this.productAdd.editObject(id, index, data, this.editId, this.addForm.value.po_no);
            this.orderDate = this.addForm.value.po_date;
        }, 200);
    }
    onRelodeEvent(value) {
        if (value) {
            this.getOrderProductList();
            // this.addForm.patchValue({ po_date: new Date() });
        }
    }
    deleteObject(object, index) {
        swal.fire({
            title: src_app_messages__WEBPACK_IMPORTED_MODULE_7__["errorMessage"].delete_header_text,
            text: src_app_messages__WEBPACK_IMPORTED_MODULE_7__["errorMessage"].delete_smalll_text,
            icon: src_app_messages__WEBPACK_IMPORTED_MODULE_7__["errorMessage"].delete_dialogue_type,
            showCancelButton: true,
            confirmButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_7__["errorMessage"].delete_confirm_button,
            cancelButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_7__["errorMessage"].delete_cancel_button,
        }).then((result) => {
            if (result.value) {
                if (object.po_detail_id) {
                    this.orderService.deleteOrderProduct(object.po_detail_id).subscribe((response) => {
                        if (response.success) {
                            this.getOrderProductList();
                        }
                    });
                }
                else {
                    this.objectArray.splice(index, 1);
                }
            }
        }).catch(swal.noop);
    }
    removeError() {
        if (this.addForm.value.po_no) {
            this.formErrors.order_no = null;
        }
    }
    ngAfterViewChecked() {
        this.cdr.detectChanges();
    }
};
AddOrderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_6__["PaginationService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_common_module_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__["AddProductComponent"], { static: false })
], AddOrderComponent.prototype, "productAdd", void 0);
AddOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/add-order/add-order.component.html")).default
    })
], AddOrderComponent);



/***/ }),

/***/ "./src/app/pages/inbound/order/add-order/add-order.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/inbound/order/add-order/add-order.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrderModule", function() { return AddOrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _add_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-order.component */ "./src/app/pages/inbound/order/add-order/add-order.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-flatpickr */ "./node_modules/ng2-flatpickr/__ivy_ngcc__/fesm2015/ng2-flatpickr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var src_app_service_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/order.service */ "./src/app/service/order.service.ts");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");
/* harmony import */ var src_app_common_module_add_product_add_product_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/common-module/add-product/add-product.module */ "./src/app/common-module/add-product/add-product.module.ts");













const routes = [{
        path: '',
        component: _add_order_component__WEBPACK_IMPORTED_MODULE_3__["AddOrderComponent"]
    }
];
let AddOrderModule = class AddOrderModule {
};
AddOrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_order_component__WEBPACK_IMPORTED_MODULE_3__["AddOrderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_common_module_add_product_add_product_module__WEBPACK_IMPORTED_MODULE_12__["AddProductModule"],
            ng2_flatpickr__WEBPACK_IMPORTED_MODULE_5__["Ng2FlatpickrModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_9__["FormValidationModule"],
        ], providers: [src_app_service_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"]]
    })
], AddOrderModule);



/***/ })

}]);
//# sourceMappingURL=add-order-add-order-module-es2015.js.map