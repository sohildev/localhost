function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["generate-unloading-generate-unloading-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/unload/generate-unloading/generate-unloading.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/unload/generate-unloading/generate-unloading.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInboundUnloadGenerateUnloadingGenerateUnloadingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n  <div class=\"page-header border-b\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">Order No : {{objectArray?.po_no}} Unloading - Submit Report </h2>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-7 pl-3\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">PO Date <em>*</em></label>\r\n                  <div class=\"\">\r\n                    <input type=\"text\" class=\"form-control\" [value]=\"orderDetails?.po_date |date:date_format :timezone\"\r\n                      disabled>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">Date of Receipt <em>*</em></label>\r\n                  <div class=\"date-picker\">\r\n                    <ng2-flatpickr disabled [setDate]=\"orderDetails?.receipt_date\" [config]=\"exampleOptions\">\r\n                    </ng2-flatpickr>\r\n                    <span class=\"date-picker-icon\">\r\n                      <span class=\"fa fa-calendar\"></span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">Notes</label>\r\n                  <textarea [formControl]=\"addForm.controls['notes']\" class=\"form-control\" rows=\"2\"></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-4\">\r\n          <div class=\"col\">\r\n            <h5>Items</h5>\r\n            <div class=\"table-responsive-md mt-3\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>No.</th>\r\n                    <th>SKU no</th>\r\n                    <th>Product</th>\r\n                    <th class=\"text-center\">Order Qty</th>\r\n                    <th class=\"text-center\">Receive Qty</th>\r\n                    <th class=\"text-center\">Damaged Qty </th>\r\n                    <th class=\"text-center\">Missing Qty</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody formArrayName=\"unload_detail\">\r\n\r\n                  <tr *ngFor=\"let item of addForm['controls'].unload_detail['controls']; let i = index; last as last;\"\r\n                    [formGroupName]=\"i\">\r\n\r\n                    <td>\r\n                      <div class=\"p-1\">{{i+1}}</div>\r\n                    </td>\r\n                    <td>\r\n                      <!-- <div class=\"p-1\"> -->\r\n                      {{ item?.value?.sku_no }}\r\n                      <!-- <input type=\"text\" class=\"input_formarray form-control\" formControlName='sku_no' disabled> -->\r\n                      <!-- </div> -->\r\n                    </td>\r\n                    <td>\r\n                      <!-- <div class=\"p-1\"> -->\r\n                      {{item?.value?.product_name}}\r\n                      <!-- <input type=\"text\" class=\"input_formarray form-control\" formControlName='product_name' disabled> -->\r\n                      <!-- </div> -->\r\n                    </td>\r\n\r\n                    <td class=\"text-center\">\r\n                      <!-- <div class=\"p-1\"> -->\r\n                      {{item?.value?.order_qty}}\r\n                      <!-- <input type=\"text\" class=\"input_formarray form-control\" formControlName='order_qty' disabled> -->\r\n                      <!-- </div> -->\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                      <!-- <div class=\"border p-1 d-inline-block w-75\"> -->\r\n                      <input type=\"text\" (input)=\"setMissingQuantity(i)\" class=\"input_formarray form-control\"\r\n                        formControlName='received_qty'>\r\n                      <!-- {{item?.received_qty}} -->\r\n                      <!-- </div> -->\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                      <!-- <div class=\"border p-1 d-inline-block w-75\"> -->\r\n                      <input type=\"text\" class=\"input_formarray form-control\" (input)=\"setMissingQuantity(i)\"\r\n                        formControlName='damaged_qty'>\r\n                      <!-- {{item?.missing_qty}} -->\r\n                      <!-- </div> -->\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                      <!-- <div class=\"border p-1 d-inline-block w-75\"> -->\r\n                      <input type=\"text\" class=\"input_formarray form-control\" formControlName='missing_qty' disabled>\r\n                      <!-- {{item?.damaged_qty}} -->\r\n                      <!-- </div> -->\r\n                    </td>\r\n\r\n                  </tr>\r\n\r\n\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-4\">\r\n          <div class=\"col\">\r\n            <div class=\"border border-left-0 border-right-0 border-bottom-0 pt-4 pb-2\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <h5>Delivery By</h5>\r\n                  <div class=\"row mt-3\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"control-label text-md-right\">Name <em>*</em></label>\r\n                        <div class=\"\">\r\n                          <input [formControl]=\"addForm.controls['delivery_name']\" type=\"text\" class=\"form-control\"\r\n                            placeholder=\"\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"control-label text-md-right\">Phone No. <em>*</em></label>\r\n                        <div class=\"\">\r\n                          <input number [formControl]=\"addForm.controls['delivery_phone']\" type=\"text\"\r\n                            class=\"form-control\" placeholder=\"\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row mt-2\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"control-label text-md-right\">Vehicle No. <em>*</em></label>\r\n                        <div class=\"\">\r\n                          <input [formControl]=\"addForm.controls['delivery_vehicle_no']\" type=\"text\"\r\n                            class=\"form-control\" placeholder=\"\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <h5>Received By</h5>\r\n                  <div class=\"row mt-3\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"control-label text-md-right\">Name <em>*</em></label>\r\n                        <div class=\"\">\r\n                          <input [formControl]=\"addForm.controls['receiver_name']\" type=\"text\" class=\"form-control\"\r\n                            placeholder=\"\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"control-label text-md-right\">Phone No. <em>*</em></label>\r\n                        <div class=\"\">\r\n                          <input number [formControl]=\"addForm.controls['receiver_phone']\" type=\"text\"\r\n                            class=\"form-control\" placeholder=\"\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n      <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"back()\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n\r\n<style>\r\n  .input_formarray {\r\n    width: 80%;\r\n  }\r\n</style>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-validation/control-error/control-error.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-validation/control-error/control-error.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedFormValidationControlErrorControlErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p class=\"help is-danger\" [class.hide]=\"_hide\" [innerHTML]=\"_text\"></p>";
    /***/
  },

  /***/
  "./src/app/pages/inbound/unload/generate-unloading/generate-unloading.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/inbound/unload/generate-unloading/generate-unloading.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: GenerateUnloadingComponent */

  /***/
  function srcAppPagesInboundUnloadGenerateUnloadingGenerateUnloadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenerateUnloadingComponent", function () {
      return GenerateUnloadingComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_service_unload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/unload.service */
    "./src/app/service/unload.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var src_app_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/messages */
    "./src/app/messages.ts");

    var GenerateUnloadingComponent =
    /*#__PURE__*/
    function () {
      function GenerateUnloadingComponent(activatedRoute, unloadService, location, fb, dataService, router) {
        _classCallCheck(this, GenerateUnloadingComponent);

        this.activatedRoute = activatedRoute;
        this.unloadService = unloadService;
        this.location = location;
        this.fb = fb;
        this.dataService = dataService;
        this.router = router;
        this.exampleOptions = {
          defaultDate: new Date(),
          dateFormat: src_app_messages__WEBPACK_IMPORTED_MODULE_7__["DATEFORMAT"],
          noCalendar: true
        };
        this.orderDetails = {};
        this.productList = [];
        this.date_format = "M/d/yy";
        this.addForm = this.fb.group({
          delivery_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
          delivery_phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
          delivery_vehicle_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
          receiver_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
          receiver_phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
          notes: [null],
          unload_detail: this.fb.array([])
        });

        if (this.activatedRoute.snapshot.paramMap.get('id')) {
          this.viewId = this.activatedRoute.snapshot.paramMap.get('id');
        }

        this.getOrderDetails();
      }

      _createClass(GenerateUnloadingComponent, [{
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
          this.getObject();
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "getOrderDetails",
        value: function getOrderDetails() {
          var _this2 = this;

          this.subscription = this.dataService.OrderDetails.subscribe(function (data) {
            if (data) {
              _this2.objectArray = data;
            }
          });
        }
      }, {
        key: "getObject",
        value: function getObject() {
          var _this3 = this;

          this.unloadService.getUnloadReportsDetails(this.viewId).subscribe(function (response) {
            if (response.success) {
              _this3.orderDetails = response.data.order_detail;
              _this3.productList = response.data.product;

              _this3.setData(); // this.pagination = this.paginationService.getPager(response.data.pagination['total_page'], this.currentPage);

            } else {
              _this3.orderDetails = {};
              _this3.productList = [];
            }
          }, function (error) {
            _this3.orderDetails = {};
            _this3.productList = [];
          });
        }
      }, {
        key: "setData",
        value: function setData() {
          var _this4 = this;

          this.addForm.patchValue({
            notes: this.orderDetails.notes,
            delivery_name: this.orderDetails.delivery_name,
            delivery_phone: this.orderDetails.delivery_phone,
            delivery_vehicle_no: this.orderDetails.delivery_vehicle_no,
            receiver_name: this.orderDetails.receiver_name,
            receiver_phone: this.orderDetails.receiver_phone
          });

          if (this.productList.length > 0) {
            var control = this.addForm.get('unload_detail');

            for (var i = 0; i <= control.length + 1; i++) {
              control.removeAt(i);
            }

            this.productList.forEach(function (obj, i) {
              control.push(_this4.fb.group({
                unload_detail_id: obj.unload_detail_id,
                sku_no: obj.sku_no,
                product_name: obj.product_name,
                order_qty: obj.order_qty,
                received_qty: obj.received_qty,
                missing_qty: obj.missing_qty,
                damaged_qty: obj.damaged_qty
              }));
            });
          }
        }
      }, {
        key: "submitForm",
        value: function submitForm(formData) {
          var _this5 = this;

          if (formData.valid) {
            this.showLoader = true;
            var data = new FormData();
            data.append('delivery_name', formData.value.delivery_name);
            data.append('delivery_phone', formData.value.delivery_phone);
            data.append('delivery_vehicle_no', formData.value.delivery_vehicle_no);
            data.append('receiver_name', formData.value.receiver_name);
            data.append('receiver_phone', formData.value.receiver_phone);
            data.append('unload_detail', JSON.stringify(formData.value.unload_detail));
            data.append('notes', formData.value.notes ? formData.value.notes : ''); // let unload_detail = [];
            // this.productList.filter((item) => {
            //   let obj: any = {};
            //   obj.unload_detail_id = item.unload_detail_id;
            //   obj.received_qty = item.received_qty;
            //   obj.missing_qty = item.missing_qty;
            //   obj.damaged_qty = item.damaged_qty;
            //   unload_detail.push(obj);
            // });
            // data.append('unload_detail', JSON.stringify(unload_detail));

            this.unloadService.getUnloadSubmitReports(this.viewId, data).subscribe(function (response) {
              _this5.showLoader = false;

              if (response.success) {
                _this5.back();
              }
            }, function (error) {
              _this5.showLoader = false;
            });
          }
        }
      }, {
        key: "addNewRow",
        value: function addNewRow() {
          var control = this.addForm.get('unload_detail');
          control.push(this.initRows());
        }
      }, {
        key: "initRows",
        value: function initRows() {
          return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            unload_detail_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            sku_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            product_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            order_qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            received_qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            missing_qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            damaged_qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]))
          });
        } // calQty(i) {
        //   const control = <FormArray>this.addForm.get('unload_detail');
        //   this.productList.forEach((obj, i) => {
        //     control.push(this.fb.group({
        //       unload_detail_id: obj.unload_detail_id,
        //       sku_no: obj.sku_no,
        //       product_name: obj.product_name,
        //       order_qty: obj.order_qty,
        //       received_qty: obj.received_qty,
        //       missing_qty: obj.missing_qty,
        //       damaged_qty: obj.damaged_qty,
        //     })
        //     );
        //   });
        //   console.log(control[i]);
        // }

      }, {
        key: "setMissingQuantity",
        value: function setMissingQuantity(index) {
          var productFormArray = this.addForm.controls['unload_detail'].at(index);
          var damaged_qty = productFormArray.value.damaged_qty;
          var received_qty = productFormArray.value.received_qty;
          var order_qty = productFormArray.value.order_qty;
          var missing_qty = Number(order_qty) - (Number(received_qty) + Number(damaged_qty)) > 0 ? Number(order_qty) - (Number(received_qty) + Number(damaged_qty)) : 0;
          productFormArray['controls'].missing_qty.setValue(missing_qty);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return GenerateUnloadingComponent;
    }();

    GenerateUnloadingComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_service_unload_service__WEBPACK_IMPORTED_MODULE_3__["UnloadService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    GenerateUnloadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-generate-unloading',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./generate-unloading.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/unload/generate-unloading/generate-unloading.component.html")).default
    })], GenerateUnloadingComponent);
    /***/
  },

  /***/
  "./src/app/pages/inbound/unload/generate-unloading/generate-unloading.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/inbound/unload/generate-unloading/generate-unloading.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: GenerateUnloadingModule */

  /***/
  function srcAppPagesInboundUnloadGenerateUnloadingGenerateUnloadingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenerateUnloadingModule", function () {
      return GenerateUnloadingModule;
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


    var _generate_unloading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./generate-unloading.component */
    "./src/app/pages/inbound/unload/generate-unloading/generate-unloading.component.ts");
    /* harmony import */


    var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-flatpickr */
    "./node_modules/ng2-flatpickr/__ivy_ngcc__/fesm2015/ng2-flatpickr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/form-validation/form-validation.module */
    "./src/app/shared/form-validation/form-validation.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var routes = [{
      path: ':id',
      component: _generate_unloading_component__WEBPACK_IMPORTED_MODULE_4__["GenerateUnloadingComponent"]
    }];

    var GenerateUnloadingModule = function GenerateUnloadingModule() {
      _classCallCheck(this, GenerateUnloadingModule);
    };

    GenerateUnloadingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_generate_unloading_component__WEBPACK_IMPORTED_MODULE_4__["GenerateUnloadingComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), ng2_flatpickr__WEBPACK_IMPORTED_MODULE_5__["Ng2FlatpickrModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_7__["FormValidationModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
    })], GenerateUnloadingModule);
    /***/
  },

  /***/
  "./src/app/shared/directive/number.directive.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/directive/number.directive.ts ***!
    \******************************************************/

  /*! exports provided: NumberDirective, FloatNumberDirective */

  /***/
  function srcAppSharedDirectiveNumberDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberDirective", function () {
      return NumberDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FloatNumberDirective", function () {
      return FloatNumberDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NumberDirective =
    /*#__PURE__*/
    function () {
      function NumberDirective(_el) {
        _classCallCheck(this, NumberDirective);

        this._el = _el;
      }

      _createClass(NumberDirective, [{
        key: "onKeyDown",
        value: function onKeyDown(event) {
          var e = event;

          if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 || // Allow: Ctrl+A
          e.keyCode === 65 && (e.ctrlKey || e.metaKey) || // Allow: Ctrl+C
          // (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
          // Allow: Ctrl+V
          // (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
          // Allow: Ctrl+X
          e.keyCode === 88 && (e.ctrlKey || e.metaKey) || // Allow: home, end, left, right
          e.keyCode >= 35 && e.keyCode <= 39) {
            // let it happen, don't do anything
            return;
          } // Ensure that it is a number and stop the keypress


          if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105 || e.keyCode === 110 || e.keyCode === 190)) {
            e.preventDefault();
          }
        }
      }]);

      return NumberDirective;
    }();

    NumberDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])], NumberDirective.prototype, "onKeyDown", null);
    NumberDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[number]'
    })], NumberDirective);

    var FloatNumberDirective =
    /*#__PURE__*/
    function () {
      function FloatNumberDirective(_el) {
        _classCallCheck(this, FloatNumberDirective);

        this._el = _el;
      }

      _createClass(FloatNumberDirective, [{
        key: "onKeyDown",
        value: function onKeyDown(event) {
          var e = event;

          if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 || // Allow: Ctrl+A
          e.keyCode === 65 && (e.ctrlKey || e.metaKey) || // Allow: Ctrl+C
          // (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
          // Allow: Ctrl+V
          // (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
          // Allow: Ctrl+X
          e.keyCode === 88 && (e.ctrlKey || e.metaKey) || // Allow: home, end, left, right
          e.keyCode >= 35 && e.keyCode <= 39) {
            // let it happen, don't do anything
            return;
          } // Ensure that it is a number and stop the keypress


          if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
          }
        }
      }]);

      return FloatNumberDirective;
    }();

    FloatNumberDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])], FloatNumberDirective.prototype, "onKeyDown", null);
    FloatNumberDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[floatNumber]'
    })], FloatNumberDirective);
    /***/
  },

  /***/
  "./src/app/shared/form-validation/control-error/control-error.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/shared/form-validation/control-error/control-error.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ControlErrorComponent */

  /***/
  function srcAppSharedFormValidationControlErrorControlErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlErrorComponent", function () {
      return ControlErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ControlErrorComponent =
    /*#__PURE__*/
    function () {
      function ControlErrorComponent(cdr) {
        _classCallCheck(this, ControlErrorComponent);

        this.cdr = cdr;
        this._hide = true;
      }

      _createClass(ControlErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "text",
        set: function set(value) {
          if (value !== this._text) {
            this._text = value;
            this._hide = !value;
            this.cdr.detectChanges();
          }
        }
      }]);

      return ControlErrorComponent;
    }();

    ControlErrorComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlErrorComponent.prototype, "text", null);
    ControlErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-control-error',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./control-error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-validation/control-error/control-error.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })], ControlErrorComponent);
    /***/
  },

  /***/
  "./src/app/shared/form-validation/directive/control-error-container.directive.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/shared/form-validation/directive/control-error-container.directive.ts ***!
    \***************************************************************************************/

  /*! exports provided: ControlErrorContainerDirective */

  /***/
  function srcAppSharedFormValidationDirectiveControlErrorContainerDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlErrorContainerDirective", function () {
      return ControlErrorContainerDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ControlErrorContainerDirective = function ControlErrorContainerDirective(vcr) {
      _classCallCheck(this, ControlErrorContainerDirective);

      this.vcr = vcr;
    };

    ControlErrorContainerDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }];
    };

    ControlErrorContainerDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[controlErrorContainer]'
    })], ControlErrorContainerDirective);
    /***/
  },

  /***/
  "./src/app/shared/form-validation/directive/control-errors.directive.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/form-validation/directive/control-errors.directive.ts ***!
    \******************************************************************************/

  /*! exports provided: ControlErrorsDirective */

  /***/
  function srcAppSharedFormValidationDirectiveControlErrorsDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlErrorsDirective", function () {
      return ControlErrorsDirective;
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


    var _control_error_control_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../control-error/control-error.component */
    "./src/app/shared/form-validation/control-error/control-error.component.ts");
    /* harmony import */


    var _control_error_container_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./control-error-container.directive */
    "./src/app/shared/form-validation/directive/control-error-container.directive.ts");
    /* harmony import */


    var _form_submit_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./form-submit.directive */
    "./src/app/shared/form-validation/directive/form-submit.directive.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _form_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../form-errors */
    "./src/app/shared/form-validation/form-errors.ts");

    var ControlErrorsDirective =
    /*#__PURE__*/
    function () {
      function ControlErrorsDirective(vcr, resolver, controlErrorContainer, form, controlDir) {
        _classCallCheck(this, ControlErrorsDirective);

        this.vcr = vcr;
        this.resolver = resolver;
        this.form = form;
        this.controlDir = controlDir;
        this.customErrors = {};
        this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
        this.submit$ = this.form ? this.form.submit$ : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
      }

      _createClass(ControlErrorsDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          if (this.control && this.control.valueChanges) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.control.valueChanges, this.submit$).subscribe(function (v) {
              var controlErrors = _this6.control.errors;

              if (controlErrors) {
                var control_name = _this6.getFormControlName(_this6.control); // console.log(control_name, controlErrors);


                var firstKey = Object.keys(controlErrors)[0];
                var messages = _form_errors__WEBPACK_IMPORTED_MODULE_7__["VALIDATION_MESSAGES"][control_name];

                if (messages !== undefined && messages !== null && messages !== '') {
                  _this6.setError(messages[firstKey]);
                }
              } else if (_this6.ref) {
                _this6.setError(null);
              }
            });
          }
        }
      }, {
        key: "getFormControlName",
        value: function getFormControlName(c) {
          var formGroup = c.parent.controls;
          return Object.keys(formGroup).find(function (name) {
            return c === formGroup[name];
          }) || null;
        }
      }, {
        key: "setError",
        value: function setError(text) {
          if (!this.ref) {
            var factory = this.resolver.resolveComponentFactory(_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_3__["ControlErrorComponent"]);
            this.ref = this.container.createComponent(factory);
          }

          this.ref.instance.text = text;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "control",
        get: function get() {
          return this.controlDir.control;
        }
      }]);

      return ControlErrorsDirective;
    }();

    ControlErrorsDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _control_error_container_directive__WEBPACK_IMPORTED_MODULE_4__["ControlErrorContainerDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _form_submit_directive__WEBPACK_IMPORTED_MODULE_5__["FormSubmitDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlErrorsDirective.prototype, "customErrors", void 0);
    ControlErrorsDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[formControl], [formControlName]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], ControlErrorsDirective);
    /***/
  },

  /***/
  "./src/app/shared/form-validation/directive/form-submit.directive.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/shared/form-validation/directive/form-submit.directive.ts ***!
    \***************************************************************************/

  /*! exports provided: FormSubmitDirective */

  /***/
  function srcAppSharedFormValidationDirectiveFormSubmitDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormSubmitDirective", function () {
      return FormSubmitDirective;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var FormSubmitDirective =
    /*#__PURE__*/
    function () {
      function FormSubmitDirective(host) {
        var _this7 = this;

        _classCallCheck(this, FormSubmitDirective);

        this.host = host;
        this.submit$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.element, 'submit').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
          if (_this7.element.classList.contains('submitted') === false) {
            _this7.element.classList.add('submitted');
          }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
      }

      _createClass(FormSubmitDirective, [{
        key: "element",
        get: function get() {
          return this.host.nativeElement;
        }
      }]);

      return FormSubmitDirective;
    }();

    FormSubmitDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    FormSubmitDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'form'
    })], FormSubmitDirective);
    /***/
  },

  /***/
  "./src/app/shared/form-validation/form-errors.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/form-validation/form-errors.ts ***!
    \*******************************************************/

  /*! exports provided: VALIDATION_MESSAGES */

  /***/
  function srcAppSharedFormValidationFormErrorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VALIDATION_MESSAGES", function () {
      return VALIDATION_MESSAGES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var VALIDATION_MESSAGES = {
      first_name: {
        required: "* Please enter first name"
      },
      last_name: {
        required: "* Please enter last name"
      },
      email: {
        required: "* Please enter email",
        email: "* Please enter valid email",
        validateEmail: "* Please enter valid email"
      },
      phone_number: {
        required: "Please enter phone number",
        minlength: "Please enter at least 8 digits",
        maxlength: "Please enter at least 18 digits"
      },
      password: {
        required: "* Please enter password",
        pattern: "* Password must contains at least 6 characters"
      },
      confirm_password: {
        required: "* Please enter confirm password",
        validatePassword: "* Your Password is not matched"
      },
      tree_level_name: {
        required: "* Please enter tree level name"
      },
      max_node: {
        required: "* Please enter max node"
      },
      tree_order: {
        required: "* Please enter tree order"
      },
      tree_name: {
        required: "* Please enter tree name"
      },
      tree_level_id: {
        required: "* Please enter tree level"
      },
      user_type: {
        required: "* Please enter user type"
      },
      wallet_name: {
        required: "* Please enter wallet name"
      },
      currency_id: {
        required: "* Please select currency"
      },
      wallet_type: {
        required: "* Please select wallet type"
      },
      otp: {
        required: "* Please enter OTP"
      },
      login_pin: {
        required: "* Please enter PIN",
        maxlength: "Pin Max 4 Digit",
        minlength: "Please enter at least 4 digits"
      },
      bank_name: {
        required: "* Please enter bank name"
      },
      bank_code: {
        required: "* Please enter code",
        maxlength: "Code Max 4 Digit",
        minlength: "Please enter at least 4 digits"
      },
      amount: {
        required: "* Please enter amount",
        max: "amount max balance"
      },
      sms: {
        required: "* Please enter content"
      },
      webhook: {
        required: "* Please enter content"
      },
      device_number: {
        required: "* Please enter device number"
      },
      name: {
        required: "* Please enter name"
      },
      location: {
        required: "* Please enter location"
      },
      group_id: {
        required: "* Please select group"
      }
    };
    /***/
  },

  /***/
  "./src/app/shared/form-validation/form-validation.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/form-validation/form-validation.module.ts ***!
    \******************************************************************/

  /*! exports provided: FormValidationModule */

  /***/
  function srcAppSharedFormValidationFormValidationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormValidationModule", function () {
      return FormValidationModule;
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


    var _directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./directive/form-submit.directive */
    "./src/app/shared/form-validation/directive/form-submit.directive.ts");
    /* harmony import */


    var _directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./directive/control-errors.directive */
    "./src/app/shared/form-validation/directive/control-errors.directive.ts");
    /* harmony import */


    var _directive_control_error_container_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./directive/control-error-container.directive */
    "./src/app/shared/form-validation/directive/control-error-container.directive.ts");
    /* harmony import */


    var _control_error_control_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./control-error/control-error.component */
    "./src/app/shared/form-validation/control-error/control-error.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var FormValidationModule = function FormValidationModule() {
      _classCallCheck(this, FormValidationModule);
    };

    FormValidationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
      declarations: [_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_6__["ControlErrorComponent"], _directive_control_error_container_directive__WEBPACK_IMPORTED_MODULE_5__["ControlErrorContainerDirective"], _directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_4__["ControlErrorsDirective"], _directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_3__["FormSubmitDirective"]],
      exports: [_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_6__["ControlErrorComponent"], _directive_control_error_container_directive__WEBPACK_IMPORTED_MODULE_5__["ControlErrorContainerDirective"], _directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_4__["ControlErrorsDirective"], _directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_3__["FormSubmitDirective"]],
      entryComponents: [_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_6__["ControlErrorComponent"]]
    })], FormValidationModule);
    /***/
  },

  /***/
  "./src/app/shared/pipe/status.pipe.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/pipe/status.pipe.ts ***!
    \********************************************/

  /*! exports provided: TransactionStatusPipe, PricePipe, TransactionIconsPipe */

  /***/
  function srcAppSharedPipeStatusPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionStatusPipe", function () {
      return TransactionStatusPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PricePipe", function () {
      return PricePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionIconsPipe", function () {
      return TransactionIconsPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TransactionStatusPipe =
    /*#__PURE__*/
    function () {
      function TransactionStatusPipe() {
        _classCallCheck(this, TransactionStatusPipe);
      }

      _createClass(TransactionStatusPipe, [{
        key: "transform",
        value: function transform(value, args) {
          var text = null;

          if (value) {
            switch (value.value) {
              case 1:
                text = "<small class=\"badge badge-pill badge-default\">".concat(value.label, "</small>");
                break;

              case 2:
                text = "<small class=\"badge badge-pill badge-primary\">".concat(value.label, "</small>");
                break;

              case 3:
                text = "<small class=\"badge badge-pill badge-success\">".concat(value.label, "</small>");
                break;

              case 4:
                text = "<small class=\"badge badge-pill badge-danger\">".concat(value.label, "</small>");
                break;

              default:
                text = null;
                break;
            }

            return text;
          }
        }
      }]);

      return TransactionStatusPipe;
    }();

    TransactionStatusPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'transactionStatus'
    })], TransactionStatusPipe);

    var PricePipe =
    /*#__PURE__*/
    function () {
      function PricePipe() {
        _classCallCheck(this, PricePipe);
      }

      _createClass(PricePipe, [{
        key: "transform",
        value: function transform(value, args) {
          return value ? parseFloat(value).toLocaleString(undefined, {
            minimumFractionDigits: 2
          }) : '00'; // return parseFloat(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
      }]);

      return PricePipe;
    }();

    PricePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'price'
    })], PricePipe);

    var TransactionIconsPipe =
    /*#__PURE__*/
    function () {
      function TransactionIconsPipe() {
        _classCallCheck(this, TransactionIconsPipe);
      }

      _createClass(TransactionIconsPipe, [{
        key: "transform",
        value: function transform(value, args) {
          var text = null;

          if (value) {
            switch (value.value) {
              case 1:
                text = '<span class="la la-check-circle text-success"> </span>';
                break;

              case 2:
                text = '<span class="la la-times-circle text-danger"> </span>';
                break;

              case 3:
                text = '<span class="la la-check-circle text-success"> </span>';
                break;

              case 4:
                text = '<span class="la la-times-circle text-danger"> </span>';
                break;

              default:
                text = null;
                break;
            }

            return text;
          }
        }
      }]);

      return TransactionIconsPipe;
    }();

    TransactionIconsPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'transactionIcons'
    })], TransactionIconsPipe);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./directive/number.directive */
    "./src/app/shared/directive/number.directive.ts");
    /* harmony import */


    var _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pipe/status.pipe */
    "./src/app/shared/pipe/status.pipe.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["NumberDirective"], _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["FloatNumberDirective"], _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["PricePipe"], _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["TransactionStatusPipe"], _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["TransactionIconsPipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["NumberDirective"], _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["PricePipe"], _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["TransactionStatusPipe"], _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["TransactionIconsPipe"], _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["FloatNumberDirective"]]
    })], SharedModule);
    /***/
  }
}]);
//# sourceMappingURL=generate-unloading-generate-unloading-module-es5.js.map