(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-sales-order-add-sales-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/sales-order/add-sales-order/add-sales-order.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/sales-order/add-sales-order/add-sales-order.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <div class=\"form-group\" [ngClass]=\"{'has-error': formErrors.order_no}\">\r\n              <label class=\"control-label text-md-right\">Order No. <em>*</em></label>\r\n              <div class=\"\">\r\n                <input [formControl]=\"addForm.controls['sales_order_no']\" (change)=\"removeError()\" type=\"text\"\r\n                  class=\"form-control\" placeholder=\"\">\r\n                <span *ngIf=\"formErrors.order_no\" class=\"help-block\" [innerHTML]=\"formErrors.order_no\"></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label text-md-right\">Order Date <em>*</em></label>\r\n              <div class=\"date-picker\">\r\n                <ng2-flatpickr [setDate]=\"orderDate\" [formControl]=\"addForm.controls['sales_order_date']\"\r\n                  [config]=\"exampleOptions\">\r\n                </ng2-flatpickr>\r\n                <span class=\"date-picker-icon\">\r\n                  <span class=\"fa fa-calendar\"></span>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label text-md-right\">Client <em>*</em></label>\r\n              <ng-select [formControl]=\"addForm.controls['client_id']\" [items]=\"clientListArray\" bindLabel=\"label\"\r\n                bindValue=\"value\" placeholder=\"Select Client\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label text-md-right\">Supplier <em>*</em></label>\r\n              <ng-select [formControl]=\"addForm.controls['supplier_id']\" [items]=\"supplierListArray\" bindLabel=\"label\"\r\n                bindValue=\"value\" placeholder=\"Select Supplier\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"col-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label text-md-right\">Deliver Address <em>*</em></label>\r\n              <textarea [formControl]=\"addForm.controls['deliver_address']\" class=\"form-control\" rows=\"2\"></textarea>\r\n            </div>\r\n          </div>\r\n      </div>-->\r\n\r\n          <div class=\"col-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label text-md-right\">Country <em>*</em></label>\r\n              <div class=\"\">\r\n                <ng-select [formControl]=\"addForm.controls['country_id']\" (change)=\"getCountryName($event)\"\r\n                  [items]=\"countryListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Country\">\r\n                </ng-select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label text-md-right\">State <em>*</em></label>\r\n              <div class=\"\">\r\n                <input [formControl]=\"addForm.controls['state']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label text-md-right\">City <em>*</em></label>\r\n              <div class=\"\">\r\n                <input [formControl]=\"addForm.controls['city']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label text-md-right\">Street Address <em>*</em></label>\r\n              <div class=\"\">\r\n                <input [formControl]=\"addForm.controls['street_address']\" type=\"text\" class=\"form-control\"\r\n                  placeholder=\"\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label text-md-right\">Invoice No. </label>\r\n              <input [formControl]=\"addForm.controls['invoice_no']\"  type=\"text\"\r\n              class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"row mt-5\">\r\n          <div class=\"col-7 d-flex align-items-center\">\r\n            <h5>Product</h5>\r\n          </div>\r\n          <div class=\"col-5 text-right\">\r\n            <button type=\"button\" class=\"btn btn-light\" (click)=\"addform()\">\r\n              <i class=\"la la-plus\"></i>\r\n              Add Product\r\n            </button><br>\r\n            <span *ngIf=\"formErrors.product\" class=\"help-block\" [innerHTML]=\"formErrors.product\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col\">\r\n            <div class=\"table-responsive-md\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>No.</th>\r\n                    <th>Product</th>\r\n                    <th>Sku No</th>\r\n                    <th>Order Quantity</th>\r\n                    <th>Price</th>\r\n                    <th>Total Price</th>\r\n                    <th class=\"text-right\" width=\"80\">Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let item of objectArray; let i=index\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{item?.product_name}}</td>\r\n                    <td>{{item?.sku_no}}</td>\r\n                    <td>{{item?.qty}}</td>\r\n                    <td>{{currentCompany?.currency?.label }} {{item?.price}}</td>\r\n                    <td>{{currentCompany?.currency?.label }} {{(item?.qty) * (item?.price) | number}}</td>\r\n                    <td>\r\n                      <div class=\"action-drop dropdown text-right\">\r\n                        <a href=\"#\" data-toggle=\"dropdown\" class=\"btn shadow-none btn-default btn-sm btn-icon-only\"\r\n                          title=\"\">\r\n                          <i class=\"fa fa-ellipsis-h\"></i>\r\n                        </a>\r\n                        <div class=\"dropdown-menu dropdown-icon-menu drop-menu-right\" style=\"width: 100px;\">\r\n                          <a *ngIf=\"isEditing\" class=\"dropdown-item\" (click)=\"editform(item?.po_detail_id,i,item)\"><i\r\n                              class=\"fa fa-edit fa-fw text-primary\">\r\n                            </i> Edit</a>\r\n                          <a class=\"dropdown-item\" (click)=\"deleteObject(item,i)\">\r\n                            <i class=\"fa fa-trash fa-fw text-primary\"></i>\r\n                            Delete\r\n                          </a>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"!loadingState && objectArray.length === 0\">\r\n                    <td colspan=\"7\">No records found</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <pagination [paginationList]=\"pagination\" [currentPage]=\"currentPage\" (onPageChange)=\"getPage($event)\">\r\n            </pagination>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-5\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label text-md-right\">Notes</label>\r\n              <textarea [formControl]=\"addForm.controls['notes']\" class=\"form-control\" rows=\"2\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" routerLink=\"/outbound/sales-order\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<app-add-product (onRelodeEvent)=\"onRelodeEvent($event)\" [ProductList]=\"objectArray\"\r\n  [orderNo]=\"addForm.value.sales_order_no\" (onProductSubmit)=\"onProductSubmit($event)\"></app-add-product>\r\n");

/***/ }),

/***/ "./src/app/pages/outbound/sales-order/add-sales-order/add-sales-order.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/outbound/sales-order/add-sales-order/add-sales-order.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddSalesOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSalesOrderComponent", function() { return AddSalesOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common */ "./src/app/common.ts");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/messages */ "./src/app/messages.ts");
/* harmony import */ var src_app_common_module_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-module/add-product/add-product.component */ "./src/app/common-module/add-product/add-product.component.ts");
/* harmony import */ var src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/sales-order.service */ "./src/app/service/sales-order.service.ts");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");











let AddSalesOrderComponent = class AddSalesOrderComponent {
    constructor(router, activatedRoute, fb, salesOrderService, paginationService, cdr, commonService, dataservice) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.salesOrderService = salesOrderService;
        this.paginationService = paginationService;
        this.cdr = cdr;
        this.commonService = commonService;
        this.dataservice = dataservice;
        this.PageTitle = "Sales Order";
        this.exampleOptions = {
            defaultDate: new Date(),
            dateFormat: src_app_messages__WEBPACK_IMPORTED_MODULE_6__["DATEFORMAT"]
            //enableTime: true
        };
        this.supplierListArray = [];
        this.countryListArray = [];
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
            sales_order_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            sales_order_date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            supplier_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            client_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            notes: [null],
            address: [null],
            invoice_no: [""],
            country_name: [null],
            country_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            street_address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    ngOnInit() {
        this.dataservice.currentCompany.subscribe((response) => {
            this.currentCompany = response;
        });
        this.addForm.patchValue({ sales_order_date: new Date() });
        this.getMasterData();
        this.getCountryList();
        if (this.isEditing) {
            this.getEditObject();
            this.getOrderProductList();
        }
    }
    getCountryName(data) {
        this.addForm.patchValue({ country_name: data.label });
    }
    getCountryList() {
        this.commonService.getCountryList().subscribe((res) => {
            if (res.success) {
                this.countryListArray = res.data.country_list;
            }
        });
    }
    getMasterData() {
        this.salesOrderService.getSalesOrderMasterData().subscribe((response) => {
            if (response.success) {
                this.supplierListArray = response.data.supplier;
                this.clientListArray = response.data.client;
            }
        });
    }
    getOrderProductList() {
        const params = { sales_order_id: this.editId };
        this.salesOrderService.getSalesOrderProductList(params).subscribe((response) => {
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
        this.salesOrderService.getSalesOrderById(this.editId).subscribe((response) => {
            if (response.success) {
                this.orderDate = response.data.sales_order_date;
                this.addForm.patchValue({
                    sales_order_no: response.data.sales_order_no,
                    supplier_id: response.data.supplier_id,
                    client_id: response.data.client_id,
                    sales_order_date: response.data.sales_order_date,
                    notes: response.data.notes ? response.data.notes : '',
                    country_name: response.data.address.country_name,
                    country_id: response.data.address.country_id,
                    state: response.data.address.state,
                    city: response.data.address.city,
                    invoice_no: response.data.invoice_no,
                    street_address: response.data.address.street_address ? response.data.address.street_address : ''
                });
            }
            else {
                this.router.navigateByUrl('/outbound/sales-order');
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
                data.append('sales_order_no', formData.value.sales_order_no);
                data.append('sales_order_date', src_app_common__WEBPACK_IMPORTED_MODULE_4__["CommonFunction"].changedateFormate(formData.value.sales_order_date[0]));
                data.append('supplier_id', formData.value.supplier_id);
                data.append('client_id', formData.value.client_id);
                data.append('invoice_no', formData.value.invoice_no);
                data.append('notes', formData.value.notes ? formData.value.notes : '');
                let address = {
                    country_id: formData.value.country_id,
                    country_name: formData.value.country_name,
                    state: formData.value.state,
                    city: formData.value.city,
                    street_address: formData.value.street_address
                };
                data.append('address', JSON.stringify(address));
                if (this.isEditing) {
                    this.salesOrderService.editSalesOrder(this.editId, data).subscribe((response) => {
                        this.showLoader = false;
                        if (response.success) {
                            if (this.objectArray && this.objectArray.length > 0) {
                                let EditobjectArray = [];
                                this.objectArray.filter((item) => {
                                    if (!item.sales_order_detail_id) {
                                        EditobjectArray.push(item);
                                    }
                                });
                                EditobjectArray.filter((item) => {
                                    item.sales_order_id = this.editId;
                                });
                                this.salesOrderService.addSalesOrderProduct(EditobjectArray).subscribe((res) => {
                                    this.showLoader = false;
                                    if (res.success) {
                                    }
                                }, (error) => {
                                    this.showLoader = false;
                                });
                            }
                            this.router.navigateByUrl('/outbound/sales-order');
                        }
                    }, (error) => {
                        this.showLoader = false;
                    });
                }
                else {
                    this.salesOrderService.addSalesOrder(data).subscribe((response) => {
                        this.showLoader = false;
                        if (response.success) {
                            let sales_order_id = response.data.sales_order_id;
                            if (this.objectArray && this.objectArray.length > 0) {
                                this.objectArray.filter((item) => {
                                    item.sales_order_id = sales_order_id;
                                });
                                this.salesOrderService.addSalesOrderProduct(this.objectArray).subscribe((res) => {
                                    this.showLoader = false;
                                    if (res.success) {
                                    }
                                }, (error) => {
                                    this.showLoader = false;
                                });
                            }
                            this.router.navigateByUrl('/outbound/sales-order');
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
        if (this.addForm.value.sales_order_no) {
            setTimeout(() => {
                this.productAdd.addObject();
                this.orderDate = this.addForm.value.sales_order_date;
            }, 200);
        }
        else {
            this.formErrors.order_no = "* Plese Enter Order Number";
        }
    }
    editform(id, index, data) {
        setTimeout(() => {
            this.productAdd.editObject(id, index, data, this.editId, this.addForm.value.sales_order_no);
            this.orderDate = this.addForm.value.sales_order_date;
        }, 200);
    }
    onRelodeEvent(value) {
        if (value) {
            this.getOrderProductList();
            this.addForm.patchValue({ sales_order_date: new Date() });
        }
    }
    deleteObject(object, index) {
        swal.fire({
            title: src_app_messages__WEBPACK_IMPORTED_MODULE_6__["errorMessage"].delete_header_text,
            text: src_app_messages__WEBPACK_IMPORTED_MODULE_6__["errorMessage"].delete_smalll_text,
            icon: src_app_messages__WEBPACK_IMPORTED_MODULE_6__["errorMessage"].delete_dialogue_type,
            showCancelButton: true,
            confirmButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_6__["errorMessage"].delete_confirm_button,
            cancelButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_6__["errorMessage"].delete_cancel_button,
        }).then((result) => {
            if (result.value) {
                if (object.sales_order_detail_id) {
                    this.salesOrderService.deleteSalesOrderProduct(object.sales_order_detail_id).subscribe((response) => {
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
        if (this.addForm.value.sales_order_no) {
            this.formErrors.order_no = null;
        }
    }
    ngAfterViewChecked() {
        this.cdr.detectChanges();
    }
};
AddSalesOrderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_8__["SalesOrderService"] },
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_5__["PaginationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_common_module_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_7__["AddProductComponent"], { static: false })
], AddSalesOrderComponent.prototype, "productAdd", void 0);
AddSalesOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-sales-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-sales-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/sales-order/add-sales-order/add-sales-order.component.html")).default
    })
], AddSalesOrderComponent);



/***/ }),

/***/ "./src/app/pages/outbound/sales-order/add-sales-order/add-sales-order.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/outbound/sales-order/add-sales-order/add-sales-order.module.ts ***!
  \**************************************************************************************/
/*! exports provided: AddSalesOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSalesOrderModule", function() { return AddSalesOrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-flatpickr */ "./node_modules/ng2-flatpickr/__ivy_ngcc__/fesm2015/ng2-flatpickr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");
/* harmony import */ var src_app_common_module_add_product_add_product_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common-module/add-product/add-product.module */ "./src/app/common-module/add-product/add-product.module.ts");
/* harmony import */ var _add_sales_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-sales-order.component */ "./src/app/pages/outbound/sales-order/add-sales-order/add-sales-order.component.ts");
/* harmony import */ var src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/service/sales-order.service */ "./src/app/service/sales-order.service.ts");













const routes = [{
        path: '',
        component: _add_sales_order_component__WEBPACK_IMPORTED_MODULE_11__["AddSalesOrderComponent"]
    }
];
let AddSalesOrderModule = class AddSalesOrderModule {
};
AddSalesOrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_sales_order_component__WEBPACK_IMPORTED_MODULE_11__["AddSalesOrderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_common_module_add_product_add_product_module__WEBPACK_IMPORTED_MODULE_10__["AddProductModule"],
            ng2_flatpickr__WEBPACK_IMPORTED_MODULE_4__["Ng2FlatpickrModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_8__["FormValidationModule"],
        ], providers: [src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_12__["SalesOrderService"]]
    })
], AddSalesOrderModule);



/***/ })

}]);
//# sourceMappingURL=add-sales-order-add-sales-order-module-es2015.js.map