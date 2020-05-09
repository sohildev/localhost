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
  }
}]);
//# sourceMappingURL=generate-unloading-generate-unloading-module-es5.js.map