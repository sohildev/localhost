function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-order-add-order-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/add-product/add-product.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/add-product/add-product.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonModuleAddProductAddProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Modal -->\r\n<div class=\"modal fade\" id=\"AddOrderProduct\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <form [formGroup]=\"productAddForm\" (ngSubmit)=\"submitForm(productAddForm)\" class=\"form-horizontal\" role=\"form\">\r\n\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Product</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label text-md-right\">Order No. <em>*</em></label>\r\n            <div class=\"\">\r\n              <input [formControl]=\"productAddForm.controls['order_no']\" type=\"text\" class=\"form-control\" disabled>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label text-md-right\">Brand <em>*</em></label>\r\n            <ng-select [formControl]=\"productAddForm.controls['brand_id']\" (change)=\"getMasterData()\"\r\n              [items]=\"brandListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Brand\">\r\n            </ng-select>\r\n\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label text-md-right\">Product <em>*</em></label>\r\n            <ng-select [formControl]=\"productAddForm.controls['product_id']\" [items]=\"productListArray\"\r\n              bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Product\" (change)=checkProductAddedd($event)>\r\n            </ng-select>\r\n            <span *ngIf=\"formErrors.product_id\" class=\"help-block\" [innerHTML]=\"formErrors.product_id\"></span>\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label text-md-right\">Order Quantity <em>*</em></label>\r\n                <div class=\"\">\r\n                  <input number [formControl]=\"productAddForm.controls['qty']\" type=\"text\" class=\"form-control\"\r\n                    placeholder=\"\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label text-md-right\">Price <em>*</em></label>\r\n                <div class=\"\">\r\n                  <input number [formControl]=\"productAddForm.controls['price']\" type=\"text\" class=\"form-control\"\r\n                    placeholder=\"\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-light\" data-dismiss=\"modal\">Cancel</button>\r\n          <button type=\"submit\" [disabled]=\"showLoader\" class=\"btn btn-secondary\">Submit</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/add-order/add-order.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/add-order/add-order.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInboundOrderAddOrderAddOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-7\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\" [ngClass]=\"{'has-error': formErrors.order_no}\">\r\n                  <label class=\"control-label text-md-right\">Order No. <em>*</em></label>\r\n                  <div class=\"\">\r\n                    <input [formControl]=\"addForm.controls['po_no']\" (change)=\"removeError()\" type=\"text\"\r\n                      class=\"form-control\" placeholder=\"\">\r\n                    <span *ngIf=\"formErrors.order_no\" class=\"help-block\" [innerHTML]=\"formErrors.order_no\"></span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">Order Date <em>*</em></label>\r\n                  <div class=\"date-picker\">\r\n                    <ng2-flatpickr [setDate]=\"orderDate\"  [formControl]=\"addForm.controls['po_date']\"\r\n                      [config]=\"exampleOptions\">\r\n                    </ng2-flatpickr>\r\n                    <span class=\"date-picker-icon\">\r\n                      <span class=\"fa fa-calendar\"></span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">Supplier <em>*</em></label>\r\n                  <ng-select [formControl]=\"addForm.controls['supplier_id']\" [items]=\"supplierListArray\"\r\n                    bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Supplier\">\r\n                  </ng-select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">Client</label>\r\n                  <ng-select [formControl]=\"addForm.controls['client_id']\" [items]=\"clientListArray\" bindLabel=\"label\"\r\n                    bindValue=\"value\" placeholder=\"Select Client\">\r\n                  </ng-select>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">Invoice No. </label>\r\n                  <input [formControl]=\"addForm.controls['invoice_no']\"  type=\"text\"\r\n                  class=\"form-control\" placeholder=\"\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-5\">\r\n          <div class=\"col-7 d-flex align-items-center\">\r\n            <h5>Product</h5>\r\n          </div>\r\n          <div class=\"col-5 text-right\">\r\n            <button type=\"button\" class=\"btn btn-light\" (click)=\"addform()\">\r\n              <i class=\"la la-plus\"></i>\r\n              Add Product\r\n            </button><br>\r\n            <span *ngIf=\"formErrors.product\" class=\"help-block\" [innerHTML]=\"formErrors.product\"></span>\r\n                 \r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col\">\r\n            <div class=\"table-responsive-md\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>No.</th>\r\n                    <th>Product</th>\r\n                    <th>Sku No</th>\r\n                    <th>Order Quantity</th>\r\n                    <th>Price</th>\r\n                    <th>Total Price</th>\r\n                    <th class=\"text-right\" width=\"80\">Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let item of objectArray; let i=index\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{item?.product_name}}</td>\r\n                    <td>{{item?.sku_no}}</td>\r\n                    <td>{{item?.qty}}</td>\r\n                    <td>{{currentCompany?.currency?.label }} {{item?.price}}</td>\r\n                    <td>{{currentCompany?.currency?.label }} {{(item?.qty) * (item?.price) | number}}</td>\r\n                    <td>\r\n                      <div class=\"action-drop dropdown text-right\">\r\n                        <a href=\"#\" data-toggle=\"dropdown\" class=\"btn shadow-none btn-default btn-sm btn-icon-only\"\r\n                          title=\"\">\r\n                          <i class=\"fa fa-ellipsis-h\"></i>\r\n                        </a>\r\n                        <div class=\"dropdown-menu dropdown-icon-menu drop-menu-right\" style=\"width: 100px;\">\r\n                          <a *ngIf=\"isEditing\" class=\"dropdown-item\" (click)=\"editform(item?.po_detail_id,i,item)\"><i\r\n                              class=\"fa fa-edit fa-fw text-primary\">\r\n                            </i> Edit</a>\r\n                          <a class=\"dropdown-item\" (click)=\"deleteObject(item,i)\">\r\n                            <i class=\"fa fa-trash fa-fw text-primary\"></i>\r\n                            Delete\r\n                          </a>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"!loadingState && objectArray.length === 0\">\r\n                    <td colspan=\"7\">No records found</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <pagination [paginationList]=\"pagination\" [currentPage]=\"currentPage\" (onPageChange)=\"getPage($event)\">\r\n            </pagination>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-5\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label text-md-right\">Notes</label>\r\n              <textarea [formControl]=\"addForm.controls['notes']\" class=\"form-control\" rows=\"2\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" routerLink=\"/inbound/order\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n\r\n<app-add-product (onRelodeEvent)=\"onRelodeEvent($event)\" [ProductList]=\"objectArray\" [orderNo]=\"addForm.value.po_no\"\r\n  (onProductSubmit)=\"onProductSubmit($event)\"></app-add-product>\r\n";
    /***/
  },

  /***/
  "./src/app/common-module/add-product/add-product.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/common-module/add-product/add-product.component.ts ***!
    \********************************************************************/

  /*! exports provided: AddProductComponent */

  /***/
  function srcAppCommonModuleAddProductAddProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductComponent", function () {
      return AddProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_service_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/order.service */
    "./src/app/service/order.service.ts");
    /* harmony import */


    var src_app_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/common */
    "./src/app/common.ts");

    var AddProductComponent =
    /*#__PURE__*/
    function () {
      function AddProductComponent(fb, orderService) {
        _classCallCheck(this, AddProductComponent);

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

      _createClass(AddProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addObject",
        value: function addObject() {
          this.resetForm();
          $('#AddOrderProduct').modal('show');
          this.getMasterData();
          this.productAddForm.patchValue({
            order_no: this.orderNo
          });
        }
      }, {
        key: "editObject",
        value: function editObject(id, index, data, order_id, order_no) {
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
          } else {
            this.index = index;
          }
        }
      }, {
        key: "getMasterData",
        value: function getMasterData() {
          var _this = this;

          var params = {};
          var brand_id = this.productAddForm.value.brand_id;

          if (brand_id) {
            params.brand_id = brand_id;
          }

          this.orderService.getOrderProductMasterData(params).subscribe(function (response) {
            if (response.success) {
              if (brand_id) {
                _this.productListArray = response.data.product ? response.data.product : [];
              } else {
                _this.brandListArray = response.data.brand ? response.data.brand : [];
              }
            }
          });
        }
      }, {
        key: "checkProductAddedd",
        value: function checkProductAddedd(event) {
          var selected_product_id = this.productAddForm.value.product_id;
          var already_added = false;
          this.ProductList.filter(function (obj) {
            if (selected_product_id == obj.product_id) {
              already_added = true;
            }
          });

          if (already_added) {
            this.formErrors.product_id = "* Product Allredy Exit.";
            this.showLoader = true;
          } else {
            this.formErrors.product_id = null;
            this.productAddForm.patchValue({
              sku_no: event.sku_no
            });
            this.showLoader = false;
          }
        }
      }, {
        key: "submitForm",
        value: function submitForm(formData) {
          var _this2 = this;

          var product_name;

          if (formData.valid) {
            this.showLoader = true;
            this.productListArray.filter(function (item) {
              if (item.value == formData.value.product_id) {
                product_name = item.label;
              }
            });
            var data = {};
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
              this.orderService.editOrderProduct(this.editId, data).subscribe(function (response) {
                _this2.showLoader = false;

                if (response.success) {
                  _this2.onRelodeEvent.emit(true);
                }
              }, function (error) {
                _this2.showLoader = false;
              });
              $('#AddOrderProduct').modal('hide');
            } else {
              if (this.orderNo) {
                data.index = this.index;
                this.onProductSubmit.emit(data);
                this.showLoader = false;
                $('#AddOrderProduct').modal('hide');
              }
            }
          }
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.loadingState = false;
          this.isEditing = false;
          this.editId = null;
          src_app_common__WEBPACK_IMPORTED_MODULE_4__["CommonFunction"].resetForm(this.productAddForm, this.formErrors);
        }
      }]);

      return AddProductComponent;
    }();

    AddProductComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_service_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AddProductComponent.prototype, "orderNo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AddProductComponent.prototype, "ProductList", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AddProductComponent.prototype, "onProductSubmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AddProductComponent.prototype, "onRelodeEvent", void 0);
    AddProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-product',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/add-product/add-product.component.html")).default
    })], AddProductComponent);
    /***/
  },

  /***/
  "./src/app/common-module/add-product/add-product.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/common-module/add-product/add-product.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AddProductModule */

  /***/
  function srcAppCommonModuleAddProductAddProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductModule", function () {
      return AddProductModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _add_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-product.component */
    "./src/app/common-module/add-product/add-product.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/form-validation/form-validation.module */
    "./src/app/shared/form-validation/form-validation.module.ts");
    /* harmony import */


    var src_app_service_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/service/order.service */
    "./src/app/service/order.service.ts");

    var AddProductModule = function AddProductModule() {
      _classCallCheck(this, AddProductModule);
    };

    AddProductModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_add_product_component__WEBPACK_IMPORTED_MODULE_3__["AddProductComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_7__["FormValidationModule"]],
      exports: [_add_product_component__WEBPACK_IMPORTED_MODULE_3__["AddProductComponent"]],
      providers: [src_app_service_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"]]
    })], AddProductModule);
    /***/
  },

  /***/
  "./src/app/pages/inbound/order/add-order/add-order.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/inbound/order/add-order/add-order.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AddOrderComponent */

  /***/
  function srcAppPagesInboundOrderAddOrderAddOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddOrderComponent", function () {
      return AddOrderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_service_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/order.service */
    "./src/app/service/order.service.ts");
    /* harmony import */


    var src_app_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/common */
    "./src/app/common.ts");
    /* harmony import */


    var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/service/pagination.service */
    "./src/app/service/pagination.service.ts");
    /* harmony import */


    var src_app_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/messages */
    "./src/app/messages.ts");
    /* harmony import */


    var src_app_common_module_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/common-module/add-product/add-product.component */
    "./src/app/common-module/add-product/add-product.component.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");

    var AddOrderComponent =
    /*#__PURE__*/
    function () {
      function AddOrderComponent(router, activatedRoute, dataservice, fb, orderService, cdr, paginationService) {
        _classCallCheck(this, AddOrderComponent);

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
          dateFormat: src_app_messages__WEBPACK_IMPORTED_MODULE_7__["DATEFORMAT"] //enableTime: true

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

      _createClass(AddOrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.dataservice.currentCompany.subscribe(function (response) {
            if (response) {
              _this3.currentCompany = response;
            }
          });
          this.orderDate = new Date();
          this.addForm.patchValue({
            po_date: new Date()
          });
          this.getMasterData();

          if (this.isEditing) {
            this.getEditObject();
            this.getOrderProductList();
          }
        }
      }, {
        key: "getMasterData",
        value: function getMasterData() {
          var _this4 = this;

          this.orderService.getOrderMasterData().subscribe(function (response) {
            if (response.success) {
              _this4.supplierListArray = response.data.supplier;
              _this4.clientListArray = response.data.client;
            }
          });
        }
      }, {
        key: "getOrderProductList",
        value: function getOrderProductList() {
          var _this5 = this;

          var params = {
            order_id: this.editId
          };
          this.orderService.getOrderProductList(params).subscribe(function (response) {
            _this5.loadingState = false;

            if (response.success && response.data) {
              _this5.objectArray = response.data.list;
              _this5.pagination = _this5.paginationService.getPager(response.data.pagination['total_page'], _this5.currentPage);
            } else {
              _this5.objectArray = [];
              _this5.pagination = null;
            }
          }, function (error) {
            _this5.loadingState = false;
            _this5.objectArray = [];
            _this5.pagination = null;
          });
        }
      }, {
        key: "getEditObject",
        value: function getEditObject() {
          var _this6 = this;

          this.orderService.getOrderById(this.editId).subscribe(function (response) {
            if (response.success) {
              _this6.orderDate = new Date(response.data.po_date);

              _this6.addForm.patchValue({
                po_no: response.data.po_no,
                supplier_id: response.data.supplier_id,
                client_id: response.data.client_id,
                po_date: response.data.po_date,
                notes: response.data.notes ? response.data.notes : '',
                invoice_no: response.data.invoice_no
              });
            } else {
              _this6.router.navigateByUrl('/inbound/order');
            }
          });
        }
      }, {
        key: "getPage",
        value: function getPage(page) {
          this.currentPage = page;
          this.currentPage = 1;
          this.getOrderProductList();
        }
      }, {
        key: "onProductSubmit",
        value: function onProductSubmit(data) {
          if (data) {
            if (data.index) {
              this.objectArray[data.index] = data;
            } else {
              this.objectArray.push(data);
            }
          }

          if (this.objectArray && this.objectArray.length > 0) {
            this.formErrors.product = null;
          } else {
            this.formErrors.product = "* Please Add Product";
          }
        }
      }, {
        key: "submitForm",
        value: function submitForm(formData) {
          var _this7 = this;

          if (formData.valid) {
            if (this.objectArray && this.objectArray.length > 0) {
              this.formErrors.product = null;
              this.showLoader = true;
              var data = new FormData();
              data.append('po_no', formData.value.po_no);
              data.append('po_date', src_app_common__WEBPACK_IMPORTED_MODULE_5__["CommonFunction"].changedateFormate(formData.value.po_date[0]));
              data.append('supplier_id', formData.value.supplier_id);
              data.append('client_id', formData.value.client_id); // if (formData.value.invoice_no) {

              data.append('invoice_no', formData.value.invoice_no); // }

              data.append('notes', formData.value.notes ? formData.value.notes : '');

              if (this.isEditing) {
                this.orderService.editOrder(this.editId, data).subscribe(function (response) {
                  _this7.showLoader = false;

                  if (response.success) {
                    if (_this7.objectArray && _this7.objectArray.length > 0) {
                      var EditobjectArray = [];

                      _this7.objectArray.filter(function (item) {
                        if (!item.po_detail_id) {
                          EditobjectArray.push(item);
                        }
                      });

                      EditobjectArray.filter(function (item) {
                        item.order_id = _this7.editId;
                      });

                      _this7.orderService.addOrderProduct(EditobjectArray).subscribe(function (res) {
                        _this7.showLoader = false;

                        if (res.success) {}
                      }, function (error) {
                        _this7.showLoader = false;
                      });
                    }

                    _this7.router.navigateByUrl('/inbound/order');
                  } else {
                    response.error.map(function (obj) {
                      if (obj.hasOwnProperty('po_no')) {
                        _this7.formErrors['order_no'] = obj['po_no'];
                      } else {
                        _this7.formErrors['apierror'] = "* ".concat(response.error);
                      }
                    });
                  }
                }, function (error) {
                  _this7.showLoader = false;
                });
              } else {
                this.orderService.addOrder(data).subscribe(function (response) {
                  _this7.showLoader = false;

                  if (response.success) {
                    var po_id = response.data.po_id;

                    if (_this7.objectArray && _this7.objectArray.length > 0) {
                      _this7.objectArray.filter(function (item) {
                        item.order_id = po_id;
                      });

                      _this7.orderService.addOrderProduct(_this7.objectArray).subscribe(function (res) {
                        _this7.showLoader = false;

                        if (res.success) {}
                      }, function (error) {
                        _this7.showLoader = false;
                      });
                    }

                    _this7.router.navigateByUrl('/inbound/order');
                  } else {
                    response.error.map(function (obj) {
                      if (obj.hasOwnProperty('po_no')) {
                        _this7.formErrors['order_no'] = obj['po_no'];
                      } else {
                        _this7.formErrors['apierror'] = "* ".concat(response.error);
                      }
                    });
                  }
                }, function (error) {
                  _this7.showLoader = false;
                });
              }
            } else {
              this.formErrors.product = "* Please Add Product";
            }
          }
        }
      }, {
        key: "addform",
        value: function addform() {
          var _this8 = this;

          if (this.addForm.value.po_no) {
            setTimeout(function () {
              _this8.productAdd.addObject();

              _this8.orderDate = _this8.addForm.value.po_date;
            }, 200);
          } else {
            this.formErrors.order_no = "* Please Enter Order Number";
          }
        }
      }, {
        key: "editform",
        value: function editform(id, index, data) {
          var _this9 = this;

          setTimeout(function () {
            _this9.productAdd.editObject(id, index, data, _this9.editId, _this9.addForm.value.po_no);

            _this9.orderDate = _this9.addForm.value.po_date;
          }, 200);
        }
      }, {
        key: "onRelodeEvent",
        value: function onRelodeEvent(value) {
          if (value) {
            this.getOrderProductList(); // this.addForm.patchValue({ po_date: new Date() });
          }
        }
      }, {
        key: "deleteObject",
        value: function deleteObject(object, index) {
          var _this10 = this;

          swal.fire({
            title: src_app_messages__WEBPACK_IMPORTED_MODULE_7__["errorMessage"].delete_header_text,
            text: src_app_messages__WEBPACK_IMPORTED_MODULE_7__["errorMessage"].delete_smalll_text,
            icon: src_app_messages__WEBPACK_IMPORTED_MODULE_7__["errorMessage"].delete_dialogue_type,
            showCancelButton: true,
            confirmButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_7__["errorMessage"].delete_confirm_button,
            cancelButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_7__["errorMessage"].delete_cancel_button
          }).then(function (result) {
            if (result.value) {
              if (object.po_detail_id) {
                _this10.orderService.deleteOrderProduct(object.po_detail_id).subscribe(function (response) {
                  if (response.success) {
                    _this10.getOrderProductList();
                  }
                });
              } else {
                _this10.objectArray.splice(index, 1);
              }
            }
          }).catch(swal.noop);
        }
      }, {
        key: "removeError",
        value: function removeError() {
          if (this.addForm.value.po_no) {
            this.formErrors.order_no = null;
          }
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.cdr.detectChanges();
        }
      }]);

      return AddOrderComponent;
    }();

    AddOrderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_service_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_6__["PaginationService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_common_module_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__["AddProductComponent"], {
      static: false
    })], AddOrderComponent.prototype, "productAdd", void 0);
    AddOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-order',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-order.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/order/add-order/add-order.component.html")).default
    })], AddOrderComponent);
    /***/
  },

  /***/
  "./src/app/pages/inbound/order/add-order/add-order.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/inbound/order/add-order/add-order.module.ts ***!
    \*******************************************************************/

  /*! exports provided: AddOrderModule */

  /***/
  function srcAppPagesInboundOrderAddOrderAddOrderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddOrderModule", function () {
      return AddOrderModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _add_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-order.component */
    "./src/app/pages/inbound/order/add-order/add-order.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-flatpickr */
    "./node_modules/ng2-flatpickr/__ivy_ngcc__/fesm2015/ng2-flatpickr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/form-validation/form-validation.module */
    "./src/app/shared/form-validation/form-validation.module.ts");
    /* harmony import */


    var src_app_service_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/service/order.service */
    "./src/app/service/order.service.ts");
    /* harmony import */


    var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/common-module/pagination/pagination.module */
    "./src/app/common-module/pagination/pagination.module.ts");
    /* harmony import */


    var src_app_common_module_add_product_add_product_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/common-module/add-product/add-product.module */
    "./src/app/common-module/add-product/add-product.module.ts");

    var routes = [{
      path: '',
      component: _add_order_component__WEBPACK_IMPORTED_MODULE_3__["AddOrderComponent"]
    }];

    var AddOrderModule = function AddOrderModule() {
      _classCallCheck(this, AddOrderModule);
    };

    AddOrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_add_order_component__WEBPACK_IMPORTED_MODULE_3__["AddOrderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_common_module_add_product_add_product_module__WEBPACK_IMPORTED_MODULE_12__["AddProductModule"], ng2_flatpickr__WEBPACK_IMPORTED_MODULE_5__["Ng2FlatpickrModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"], src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_9__["FormValidationModule"]],
      providers: [src_app_service_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"]]
    })], AddOrderModule);
    /***/
  }
}]);
//# sourceMappingURL=add-order-add-order-module-es5.js.map