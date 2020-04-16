function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["generate-generate-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/unload/generate/generate.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/unload/generate/generate.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInboundUnloadGenerateGenerateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{PageTitle}} {{objectDetails?.po_no}}</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"control-label text-md-right col-md-3 mt-2\">Order Number <em>*</em></label>\r\n        <div class=\"d-flex\">\r\n          <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n          <button type=\"button\" (click)=\"searchObject()\" class=\"btn btn-primary ml-2\">Search</button>\r\n        </div>\r\n      </div>\r\n      <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n        <div *ngIf=\"objectDetails\" class=\"row mt-3\">\r\n          <div class=\"col-7 pl-3\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">PO Date <em>*</em></label>\r\n                  <div class=\"\">\r\n                    \r\n                    <input  value=\"{{addForm.value.po_date|date:date_format :timezone}}\" type=\"text\"\r\n                      class=\"form-control\" placeholder=\"\" disabled>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">Date of Receipt</label>\r\n                  <div class=\"date-picker\">\r\n                    <ng2-flatpickr [formControl]=\"addForm.controls['receipt_date']\" [config]=\"exampleOptions\">\r\n                    </ng2-flatpickr>\r\n                    <span class=\"date-picker-icon\">\r\n                      <span class=\"fa fa-calendar\"></span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"row mt-4\">\r\n          <div class=\"col\">\r\n            <h5>Product</h5>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <ng-container *ngIf=\"productList.length>0\">\r\n            <div class=\"row mt-3\">\r\n              <div class=\"col\">\r\n                <!-- <div class=\"table-responsive-md\">\r\n                  <table class=\"table\">\r\n                    <thead class=\"thead-dark\">\r\n                      <tr>\r\n                        <th class=\"align-items-center d-flex\">\r\n                          <div class=\"form-check form-check-inline mr-0\">\r\n                            <div class=\"checkbox-container\">\r\n                              <input id=\"checkBoxAll\" (change)=\"markAllProduct($event.target.checked)\"\r\n                                class=\"form-check-input\" type=\"checkbox\" value=\"all\">\r\n                              <span class=\"checkmark\"></span>\r\n                            </div>\r\n                          </div>\r\n                        </th>\r\n                        <th>SKU</th>\r\n                        <th>Product</th>\r\n                        <th class=\"text-center\">Order Quantity</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of productList; let i=index\">\r\n                        <td class=\"align-items-center d-flex\">\r\n                          <div class=\"form-check form-check-inline mr-0\">\r\n                            <div class=\"checkbox-container\">\r\n                              <input id=\"checkBox{{i}}\" (change)=\"addProduct(item, $event.target.checked)\"\r\n                                class=\"form-check-input pro-chk\" type=\"checkbox\" value=\"all\">\r\n                              <span class=\"checkmark\"></span>\r\n                            </div>\r\n                          </div>\r\n                        </td>\r\n  \r\n                        <td>{{item?.sku_no}}</td>\r\n                        <td>{{item?.product_name}}</td>\r\n                        <td class=\"text-center\">{{item?.order_quantity |number}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div> -->\r\n\r\n                <app-table-list (checkBoxSelectEvent)=\"checkBoxSelectEvent($event)\" [headerData]=\"headerData\"\r\n                  [rawData]=\"productList\" (reloadEvent)=\"onReloadEvent()\">\r\n                </app-table-list>\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"text-right border-top pt-4 mt-5 mb-3\">\r\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"back()\">Cancel</button>\r\n                <button type=\"submit\" [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\"\r\n                  [disabled]=\"showLoader\" class=\"btn btn-secondary ml-2\">Generate</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list/generate/generate.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list/generate/generate.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOutboundPickListGenerateGenerateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"control-label text-md-right col-md-3\">Order Number <em>*</em></label>\r\n        <div class=\"d-flex\">\r\n          <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n          <button type=\"button\" (click)=\"searchObject()\" class=\"btn btn-primary ml-2\">Search</button>\r\n        </div>\r\n      </div>\r\n\r\n      <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n        <div *ngIf=\"objectDetails\" class=\"row mt-3\">\r\n          <div class=\"col-7 pl-3\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">\r\n                    Sales Order Date <em>*</em></label>\r\n                  <div class=\"\">\r\n                    <input [formControl]=\"addForm.controls['sales_order_date']\"\r\n                      value=\"addForm.value.sales_order_date |date:date_format :timezone\" type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                      disabled>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">Date of Receipt</label>\r\n                  <div class=\"date-picker\">\r\n                    <ng2-flatpickr [formControl]=\"addForm.controls['pick_list_date']\" [config]=\"exampleOptions\">\r\n                    </ng2-flatpickr>\r\n                    <span class=\"date-picker-icon\">\r\n                      <span class=\"fa fa-calendar\"></span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"row mt-4\">\r\n          <div class=\"col\">\r\n            <h5>Product</h5>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <ng-container *ngIf=\"productList.length>0\">\r\n            <div class=\"row mt-3\">\r\n              <div class=\"col\">\r\n                <!-- <div class=\"table-responsive-md\">\r\n                  <table class=\"table\">\r\n                    <thead class=\"thead-dark\">\r\n                      <tr>\r\n                        <th class=\"align-items-center d-flex\">\r\n                          <div class=\"form-check form-check-inline mr-0\">\r\n                            <div class=\"checkbox-container\">\r\n                              <input id=\"checkBoxAll\" (change)=\"markAllProduct($event.target.checked)\"\r\n                                class=\"form-check-input\" type=\"checkbox\" value=\"all\">\r\n                              <span class=\"checkmark\"></span>\r\n                            </div>\r\n                          </div>\r\n                        </th>\r\n                        <th>SKU</th>\r\n                        <th>Product</th>\r\n                        <th class=\"text-center\">Order Quantity</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of productList; let i=index\">\r\n                        <td class=\"align-items-center d-flex\">\r\n                          <div class=\"form-check form-check-inline mr-0\">\r\n                            <div class=\"checkbox-container\">\r\n                              <input id=\"checkBox{{i}}\" (change)=\"addProduct(item, $event.target.checked)\"\r\n                                class=\"form-check-input pro-chk\" type=\"checkbox\" value=\"all\">\r\n                              <span class=\"checkmark\"></span>\r\n                            </div>\r\n                          </div>\r\n                        </td>\r\n  \r\n                        <td>{{item?.sku_no}}</td>\r\n                        <td>{{item?.product_name}}</td>\r\n                        <td class=\"text-center\">{{item?.order_quantity |number}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div> -->\r\n\r\n                <app-table-list (checkBoxSelectEvent)=\"checkBoxSelectEvent($event)\" [headerData]=\"headerData\"\r\n                  [rawData]=\"productList\" (reloadEvent)=\"onReloadEvent()\">\r\n                </app-table-list>\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"text-right border-top pt-4 mt-5 mb-3\">\r\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"back()\">Cancel</button>\r\n                <button type=\"submit\" [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\"\r\n                  [disabled]=\"showLoader\" class=\"btn btn-secondary ml-2\">Generate</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/inbound/unload/generate/generate.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/inbound/unload/generate/generate.component.ts ***!
    \*********************************************************************/

  /*! exports provided: GenerateComponent */

  /***/
  function srcAppPagesInboundUnloadGenerateGenerateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenerateComponent", function () {
      return GenerateComponent;
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


    var src_app_service_unload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/unload.service */
    "./src/app/service/unload.service.ts");
    /* harmony import */


    var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/pagination.service */
    "./src/app/service/pagination.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/common */
    "./src/app/common.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/common-module/table-list/list-field-type */
    "./src/app/common-module/table-list/list-field-type.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var src_app_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/messages */
    "./src/app/messages.ts");

    var GenerateComponent =
    /*#__PURE__*/
    function () {
      function GenerateComponent(location, toastr, unloadService, paginationService, activatedRoute, dataService, fb, router) {
        _classCallCheck(this, GenerateComponent);

        this.location = location;
        this.toastr = toastr;
        this.unloadService = unloadService;
        this.paginationService = paginationService;
        this.activatedRoute = activatedRoute;
        this.dataService = dataService;
        this.fb = fb;
        this.router = router;
        this.PageTitle = "Genrate Unloading";
        this.objectDetails = false;
        this.productList = [];
        this.productItems = [];
        this.headerData = [];
        this.date_format = "M/d/yy";
        this.showLoader = false;
        this.formErrors = {
          apierror: null
        };
        this.exampleOptions = {
          defaultDate: new Date(),
          dateFormat: src_app_messages__WEBPACK_IMPORTED_MODULE_11__["DATEFORMAT"] //enableTime: true

        };

        if (this.activatedRoute.snapshot.paramMap.get('id')) {
          this.orderId = this.activatedRoute.snapshot.paramMap.get('id');

          if (this.orderId) {
            this.getUnloadGenerateListById();
          }
        }

        this.addForm = this.fb.group({
          receipt_date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
          po_date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])]
        });
      }

      _createClass(GenerateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.dataService.currentCompany.subscribe(function (response) {
            if (response) {
              _this.timezone = String(response.timezone.format);
              ;
              _this.time_format = response.time_format.label;
              _this.date_format = response.date_format.label;
              _this.currentCompany = response;
            }
          });
          this.addForm.patchValue({
            receipt_date: new Date()
          });
          this.setHeaderData();
        }
      }, {
        key: "setHeaderData",
        value: function setHeaderData() {
          this.headerData.push(new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_9__["CheckBoxFildes"]({
            class: 'align-items-center d-flex',
            key: "product_id"
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_9__["TextField"]({
            label: "SKU",
            key: "sku_no"
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_9__["TextField"]({
            label: "Product",
            key: "product_name"
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_9__["TextField"]({
            label: "Order Quantity",
            key: "order_quantity"
          }));
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back(); // this.router.navigateByUrl(`/inbound/order/view/${this.orderId}/unloading`);
        }
      }, {
        key: "getUnloadGenerateListById",
        value: function getUnloadGenerateListById() {
          var _this2 = this;

          this.unloadService.getUnloadGenerateListById(this.orderId).subscribe(function (response) {
            if (response.success) {
              _this2.objectDetails = response.data.po_detail ? response.data.po_detail : {};
              _this2.productList = response.data.product_list ? response.data.product_list : [];

              _this2.setData(); // this.pagination = this.paginationService.getPager(response.data.pagination['total_page'], this.currentPage);

            } else {
              _this2.objectDetails = null;
              _this2.productList = [];
              _this2.pagination = null;
            }
          });
        }
      }, {
        key: "setData",
        value: function setData() {
          this.searchText = this.objectDetails.po_no;
          this.addForm.patchValue({
            po_date: this.objectDetails.po_date,
            receipt_date: new Date()
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(formData) {
          var _this3 = this;

          if (formData.valid) {
            this.showLoader = true;
            var data = new FormData();
            data.append('receipt_date', src_app_common__WEBPACK_IMPORTED_MODULE_7__["CommonFunction"].changedateFormate(formData.value.receipt_date[0]));
            data.append('po_id', this.orderId);
            data.append('supplier_id', this.objectDetails.supplier_id);
            data.append('to_details', this.objectDetails.client_id);
            data.append('product', JSON.stringify(this.productItems));

            if (this.isEditing) {// this.unloadService.editUnload(this.editId, data).subscribe((response) => {
              //   this.showLoader = false;
              //   if (response.success) {
              //     this.router.navigateByUrl('/inbound/unload/');
              //   }
              // }, (error) => {
              //   this.showLoader = false;
              // });
            } else {
              this.unloadService.addUnloadGenerate(data).subscribe(function (response) {
                setTimeout(function () {
                  _this3.showLoader = false;
                }, 700);

                if (response.success) {
                  // this.router.navigateByUrl(`/inbound/order/view/${this.orderId}`);
                  _this3.back();
                } else {
                  response.error.filter(function (data) {
                    if (data.hasOwnProperty('product')) {
                      _this3.toastr.error('', 'Please Select a Product...!');
                    }
                  });
                }
              }, function (error) {
                _this3.showLoader = false;
              });
            }
          }
        } // markAllProduct(checked) {
        //   if (checked) {
        //     this.productItems = this.productList.map((obj, index) => {
        //       const object = new Object();
        //       object['product_id'] = obj.product_id;
        //       object['order_qty'] = obj.order_quantity;
        //       object['sku_no'] = obj.sku_no;
        //       object['product_name'] = obj.product_name;
        //       $('.pro-chk').prop('checked', true);
        //       return object;
        //     });
        //   } else {
        //     $('.pro-chk').prop('checked', false);
        //     this.productItems = [];
        //   }
        // }
        // addProduct(obj, checked) {
        //   if (checked) {
        //     const object = new Object();
        //     object['product_id'] = obj.product_id;
        //     object['order_qty'] = obj.order_quantity;
        //     object['sku_no'] = obj.sku_no;
        //     object['product_name'] = obj.product_name;
        //     this.productItems.push(object);
        //     if (this.productItems.length === this.productItems.length) {
        //       $('#checkBoxAll').prop('checked', true);
        //     }
        //   } else {
        //     $('#checkBoxAll').prop('checked', false);
        //     this.productItems = this.productItems.filter((object) => {
        //       return String(object.product_id) !== String(obj.product_id);
        //     });
        //   }
        // }

      }, {
        key: "getPage",
        value: function getPage(page) {
          this.currentPage = page;
        }
      }, {
        key: "searchObject",
        value: function searchObject() {
          console.log("searchObject", this.searchText);
        }
      }, {
        key: "onReloadEvent",
        value: function onReloadEvent() {
          this.getUnloadGenerateListById();
        }
      }, {
        key: "checkBoxSelectEvent",
        value: function checkBoxSelectEvent(data) {
          var _this4 = this;

          this.productItems = [];

          if (data && data.length > 0) {
            data.filter(function (obj) {
              var object = new Object();
              object['product_id'] = obj.product_id;
              object['order_qty'] = obj.order_quantity;
              object['sku_no'] = obj.sku_no;
              object['product_name'] = obj.product_name;

              _this4.productItems.push(object);
            });
          }
        }
      }]);

      return GenerateComponent;
    }();

    GenerateComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
      }, {
        type: src_app_service_unload_service__WEBPACK_IMPORTED_MODULE_3__["UnloadService"]
      }, {
        type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__["PaginationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    GenerateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-generate',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./generate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/unload/generate/generate.component.html")).default
    })], GenerateComponent);
    /***/
  },

  /***/
  "./src/app/pages/inbound/unload/generate/generate.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/inbound/unload/generate/generate.module.ts ***!
    \******************************************************************/

  /*! exports provided: GenerateModule */

  /***/
  function srcAppPagesInboundUnloadGenerateGenerateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenerateModule", function () {
      return GenerateModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _generate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./generate.component */
    "./src/app/pages/inbound/unload/generate/generate.component.ts");
    /* harmony import */


    var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-flatpickr */
    "./node_modules/ng2-flatpickr/__ivy_ngcc__/fesm2015/ng2-flatpickr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/common-module/table-list/table-list.module */
    "./src/app/common-module/table-list/table-list.module.ts");

    var routes = [{
      path: '',
      component: _generate_component__WEBPACK_IMPORTED_MODULE_4__["GenerateComponent"]
    }, {
      path: ':id',
      component: _generate_component__WEBPACK_IMPORTED_MODULE_4__["GenerateComponent"]
    }];

    var GenerateModule = function GenerateModule() {
      _classCallCheck(this, GenerateModule);
    };

    GenerateModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_generate_component__WEBPACK_IMPORTED_MODULE_4__["GenerateComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng2_flatpickr__WEBPACK_IMPORTED_MODULE_5__["Ng2FlatpickrModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_7__["TableListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
    })], GenerateModule);
    /***/
  },

  /***/
  "./src/app/pages/outbound/pick-list/generate/generate.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/outbound/pick-list/generate/generate.component.ts ***!
    \*************************************************************************/

  /*! exports provided: GenerateComponent */

  /***/
  function srcAppPagesOutboundPickListGenerateGenerateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenerateComponent", function () {
      return GenerateComponent;
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


    var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/pagination.service */
    "./src/app/service/pagination.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/common */
    "./src/app/common.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/common-module/table-list/list-field-type */
    "./src/app/common-module/table-list/list-field-type.ts");
    /* harmony import */


    var src_app_service_pick_list_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/service/pick-list.service */
    "./src/app/service/pick-list.service.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var src_app_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/messages */
    "./src/app/messages.ts");

    var GenerateComponent =
    /*#__PURE__*/
    function () {
      function GenerateComponent(location, toastr, picklistService, paginationService, activatedRoute, fb, dataService, router) {
        _classCallCheck(this, GenerateComponent);

        this.location = location;
        this.toastr = toastr;
        this.picklistService = picklistService;
        this.paginationService = paginationService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.dataService = dataService;
        this.router = router;
        this.PageTitle = "Genrate PickList";
        this.objectDetails = false;
        this.productList = [];
        this.productItems = [];
        this.headerData = [];
        this.date_format = "M/d/yy";
        this.showLoader = false;
        this.formErrors = {
          apierror: null
        };
        this.exampleOptions = {
          defaultDate: new Date(),
          dateFormat: src_app_messages__WEBPACK_IMPORTED_MODULE_11__["DATEFORMAT"] //enableTime: true

        };

        if (this.activatedRoute.snapshot.paramMap.get('id')) {
          var id = this.activatedRoute.snapshot.paramMap.get('id');

          if (location.path() == "/outbound/pick-list/generate/".concat(id)) {
            this.orderId = this.activatedRoute.snapshot.paramMap.get('id');

            if (this.orderId) {
              this.getUnloadGenerateListById();
            }
          } else {
            this.editId = id;
            this.isEditing = true;
          }
        }

        this.addForm = this.fb.group({
          pick_list_date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
          sales_order_date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
        });
      }

      _createClass(GenerateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.dataService.currentCompany.subscribe(function (response) {
            if (response) {
              _this5.timezone = String(response.timezone.format);
              ;
              _this5.time_format = response.time_format.label;
              _this5.date_format = response.date_format.label;
              _this5.currentCompany = response;
            }
          });
          this.addForm.patchValue({
            pick_list_date: new Date()
          });
          this.setHeaderData();
        }
      }, {
        key: "setHeaderData",
        value: function setHeaderData() {
          this.headerData.push(new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_8__["CheckBoxFildes"]({
            class: 'align-items-center d-flex',
            key: "sales_order_detail_id"
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_8__["TextField"]({
            label: "SKU",
            key: "sku_no"
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_8__["TextField"]({
            label: "Product",
            key: "product_name"
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_8__["TextField"]({
            label: "Order Quantity",
            key: "qty"
          }));
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back(); // this.router.navigateByUrl(`/inbound/order/view/${this.orderId}/unloading`);
        }
      }, {
        key: "getUnloadGenerateListById",
        value: function getUnloadGenerateListById() {
          var _this6 = this;

          this.picklistService.getPickListGenerateListById(this.orderId).subscribe(function (response) {
            if (response.success) {
              _this6.objectDetails = response.data.sales_order_detail ? response.data.sales_order_detail : {};
              _this6.productList = response.data.product_list ? response.data.product_list : [];

              _this6.setData(); // this.pagination = this.paginationService.getPager(response.data.pagination['total_page'], this.currentPage);

            } else {
              _this6.objectDetails = null;
              _this6.productList = [];
              _this6.pagination = null;
            }
          });
        }
      }, {
        key: "setData",
        value: function setData() {
          this.searchText = this.objectDetails.sales_order_no;
          this.addForm.patchValue({
            sales_order_date: this.objectDetails.sales_order_date,
            pick_list_date: new Date()
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(formData) {
          var _this7 = this;

          if (formData.valid) {
            this.showLoader = true;
            var data = new FormData();
            data.append('pick_list_date', src_app_common__WEBPACK_IMPORTED_MODULE_6__["CommonFunction"].changedateFormate(formData.value.pick_list_date[0]));
            data.append('po_id', this.orderId); // data.append('supplier_id', this.objectDetails.supplier_id);

            data.append('client_id', this.objectDetails.client_id);
            data.append('product', JSON.stringify(this.productItems));
            data.append('sales_order_id', JSON.stringify(this.orderId));
            data.append('pick_list_no', JSON.stringify(this.objectDetails.sales_order_no));

            if (this.isEditing) {// this.picklistService.editUnload(this.editId, data).subscribe((response) => {
              //   this.showLoader = false;
              //   if (response.success) {
              //     this.router.navigateByUrl('/inbound/unload/');
              //   }
              // }, (error) => {
              //   this.showLoader = false;
              // });
            } else {
              this.picklistService.addPickListGenerate(data).subscribe(function (response) {
                setTimeout(function () {
                  _this7.showLoader = false;
                }, 700);

                if (response.success) {
                  // this.router.navigateByUrl(`/inbound/order/view/${this.orderId}`);
                  _this7.back();
                } else {
                  response.error.filter(function (data) {
                    if (data.hasOwnProperty('product')) {
                      _this7.toastr.error('', 'Please Select a Product...!');
                    }
                  });
                }
              }, function (error) {
                _this7.showLoader = false;
              });
            }
          }
        }
      }, {
        key: "getPage",
        value: function getPage(page) {
          this.currentPage = page;
        }
      }, {
        key: "searchObject",
        value: function searchObject() {
          console.log("searchObject", this.searchText);
        }
      }, {
        key: "onReloadEvent",
        value: function onReloadEvent() {
          this.getUnloadGenerateListById();
        }
      }, {
        key: "checkBoxSelectEvent",
        value: function checkBoxSelectEvent(data) {
          var _this8 = this;

          this.productItems = [];

          if (data && data.length > 0) {
            data.filter(function (obj) {
              var object = new Object();
              object['product_id'] = obj.product_id;
              object['product_qty'] = obj.qty;

              _this8.productItems.push(object);
            });
          }
        }
      }]);

      return GenerateComponent;
    }();

    GenerateComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
      }, {
        type: src_app_service_pick_list_service__WEBPACK_IMPORTED_MODULE_9__["PickListService"]
      }, {
        type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    GenerateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-generate',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./generate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list/generate/generate.component.html")).default
    })], GenerateComponent);
    /***/
  },

  /***/
  "./src/app/pages/outbound/pick-list/generate/generate.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/outbound/pick-list/generate/generate.module.ts ***!
    \**********************************************************************/

  /*! exports provided: GenerateModule */

  /***/
  function srcAppPagesOutboundPickListGenerateGenerateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenerateModule", function () {
      return GenerateModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _generate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./generate.component */
    "./src/app/pages/outbound/pick-list/generate/generate.component.ts");
    /* harmony import */


    var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-flatpickr */
    "./node_modules/ng2-flatpickr/__ivy_ngcc__/fesm2015/ng2-flatpickr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/common-module/table-list/table-list.module */
    "./src/app/common-module/table-list/table-list.module.ts");

    var routes = [{
      path: '',
      component: _generate_component__WEBPACK_IMPORTED_MODULE_4__["GenerateComponent"]
    }, {
      path: ':id',
      component: _generate_component__WEBPACK_IMPORTED_MODULE_4__["GenerateComponent"]
    }];

    var GenerateModule = function GenerateModule() {
      _classCallCheck(this, GenerateModule);
    };

    GenerateModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_generate_component__WEBPACK_IMPORTED_MODULE_4__["GenerateComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng2_flatpickr__WEBPACK_IMPORTED_MODULE_5__["Ng2FlatpickrModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_7__["TableListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
    })], GenerateModule);
    /***/
  }
}]);
//# sourceMappingURL=generate-generate-module-es5.js.map