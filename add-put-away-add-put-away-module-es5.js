function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-put-away-add-put-away-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/put-away/add-put-away/add-put-away.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/put-away/add-put-away/add-put-away.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInboundPutAwayAddPutAwayAddPutAwayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Generate' }} {{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Order Number <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n\r\n\r\n              <ng-container *ngIf=\"OrderId_show; then thenTemplate; else elseTemplate\"></ng-container>\r\n              <ng-template #thenTemplate>\r\n                <ng-select [formControl]=\"addForm.controls['order_id']\" (change)=\"getProductByOrderId()\"\r\n                  [items]=\"orderListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Order Number\">\r\n                </ng-select>\r\n\r\n              </ng-template>\r\n              <ng-template #elseTemplate>\r\n                <select disabled class=\"form-control\">\r\n                  <option default selected=\"true\" disabled hidden value=\"OrderDetails?.po_no\">{{OrderDetails?.po_no}}\r\n                  </option>\r\n                </select>\r\n              </ng-template>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Transfer Order No\r\n              <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['transfer_order_no']\" type=\"text\" class=\"form-control\"\r\n                placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Case No <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['case_no']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">SKU <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <ng-select [formControl]=\"addForm.controls['sku_no']\" [items]=\"skuListArray\" bindLabel=\"label\"\r\n                bindValue=\"value\" placeholder=\"Select SKU No\" (change)=\"setProductDetail($event)\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Bin <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <ng-select [formControl]=\"addForm.controls['bin_id']\" [items]=\"binListArray\" bindLabel=\"label\"\r\n                bindValue=\"value\" placeholder=\"Select Bin\" (change)=\"setBinDetail($event)\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Location</label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['location']\" type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                disabled>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Total Quantity\r\n              <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['qty']\" type=\"text\" class=\"form-control\" placeholder=\"\" disabled>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Open Quantity\r\n              <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"\" disabled>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Putaway Quantity\r\n              <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input number [formControl]=\"addForm.controls['putaway_qty']\" (input)=\"calPutawayQuantity()\" type=\"text\"\r\n                class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">No of Putaway\r\n              <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input number (input)=\"calNoPutaway()\" [formControl]=\"addForm.controls['pick_qty']\" type=\"text\"\r\n                class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"back()\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/inbound/put-away/add-put-away/add-put-away.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/inbound/put-away/add-put-away/add-put-away.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AddPutAwayComponent */

  /***/
  function srcAppPagesInboundPutAwayAddPutAwayAddPutAwayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPutAwayComponent", function () {
      return AddPutAwayComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var src_app_service_put_away_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/service/put-away.service */
    "./src/app/service/put-away.service.ts");

    var AddPutAwayComponent =
    /*#__PURE__*/
    function () {
      function AddPutAwayComponent(router, activatedRoute, fb, location, dataService, putawayService) {
        _classCallCheck(this, AddPutAwayComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.location = location;
        this.dataService = dataService;
        this.putawayService = putawayService;
        this.PageTitle = "Putaway Transfer Order";
        this.addNewRadio = false;
        this.loadingState = false;
        this.binListArray = [];
        this.skuListArray = [];
        this.orderListArray = [];
        this.showLoader = false;
        this.formErrors = {
          apierror: null
        };
        this.isEditing = false;
        this.editId = null;
        this.OrderId_show = true;
        this.addForm = this.fb.group({
          order_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          transfer_order_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          case_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          sku_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          pick_qty: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          bin_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          bin_tag_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          location: [null],
          level_id: [null],
          bay_id: [null],
          aisle_id: [null],
          area_id: [null],
          from_location_bin: [null],
          qty: [null],
          putaway_qty: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });

        if (this.activatedRoute.snapshot.paramMap.get('id')) {
          var id = this.activatedRoute.snapshot.paramMap.get('id');

          if (location.path() == "/inbound/put-away/add/".concat(id)) {
            this.OrderId = id;
            this.addForm.patchValue({
              order_id: this.OrderId
            });
            this.OrderId_show = false;
            this.getOrderDetails();
            this.getProductByOrderId();
          } else {
            this.editId = id;
            this.isEditing = true;
          }
        }
      }

      _createClass(AddPutAwayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.isEditing) {
            this.getEditObject();
          } else {
            this.getMasterData();
          }
        }
      }, {
        key: "getMasterData",
        value: function getMasterData() {
          var _this = this;

          this.putawayService.getMasterData().subscribe(function (response) {
            if (response.success) {
              _this.orderListArray = response.data.order;
              _this.binListArray = response.data.bin;
            }
          });
        }
      }, {
        key: "getProductByOrderId",
        value: function getProductByOrderId() {
          var _this2 = this;

          // event ? this.addForm.patchValue({ sku_no: '' }) : '';
          this.putawayService.getProductByOrderId(this.addForm.value.order_id).subscribe(function (response) {
            if (response.success) {
              _this2.skuListArray = response.data.product;
            }
          });
        }
      }, {
        key: "getEditObject",
        value: function getEditObject() {
          var _this3 = this;

          this.putawayService.getPutAwayById(this.editId).subscribe(function (response) {
            if (response.success) {
              var location_text = "".concat(response.data.from_location_bin.area.label, "-").concat(response.data.from_location_bin.aisle.label, "-").concat(response.data.from_location_bin.bay.label, "-").concat(response.data.from_location_bin.level.label);

              _this3.addForm.patchValue({
                order_id: response.data.order_id,
                qty: response.data.qty,
                transfer_order_no: response.data.transfer_order_no,
                case_no: response.data.case_no,
                sku_no: response.data.sku_no,
                pick_qty: response.data.pick_qty,
                bin_id: response.data.bin_id,
                bin_tag_id: response.data.bin_tag_id,
                putaway_qty: response.data.put_away_qty,
                location: location_text,
                level_id: response.data.from_location_bin.level.value,
                bay_id: response.data.from_location_bin.bay.value,
                aisle_id: response.data.from_location_bin.aisle.value,
                area_id: response.data.from_location_bin.area.value
              });

              _this3.getMasterData();

              _this3.getProductByOrderId();
            } else {// this.router.navigateByUrl('/inbound/registeration');
            }
          });
        }
      }, {
        key: "setBinDetail",
        value: function setBinDetail(data) {
          if (data) {
            var location_text = "".concat(data.location.area.label, "-").concat(data.location.aisle.label, "-").concat(data.location.bay.label, "-").concat(data.location.level.label);
            this.addForm.patchValue({
              bin_tag_id: data.tag_id,
              location: location_text,
              bin_id: data.value,
              level_id: data.location.level.value,
              bay_id: data.location.bay.value,
              aisle_id: data.location.aisle.value,
              area_id: data.location.area.value
            });
          }
        }
      }, {
        key: "setProductDetail",
        value: function setProductDetail(data) {
          if (data) {
            this.addForm.patchValue({
              qty: data.qty
            });
          }
        }
      }, {
        key: "submitForm",
        value: function submitForm(formData) {
          var _this4 = this;

          if (formData.valid) {
            var data = new FormData();
            data.append('order_id', formData.value.order_id);
            data.append('qty', formData.value.qty);
            data.append('transfer_order_no', formData.value.transfer_order_no);
            data.append('case_no', formData.value.case_no);
            data.append('sku_no', formData.value.sku_no);
            data.append('pick_qty', formData.value.pick_qty);
            data.append('bin_id', formData.value.bin_id);
            data.append('bin_tag_id', formData.value.bin_tag_id);
            data.append('putaway_qty', formData.value.putaway_qty);
            data.append('location', formData.value.location);
            data.append('from_location_bin', formData.value.from_location_bin);
            var put_away_data = {
              order_id: formData.value.order_id,
              sku_no: formData.value.sku_no,
              pick_qty: formData.value.pick_qty,
              bin_id: formData.value.bin_id,
              bin_tag_id: formData.value.bin_tag_id,
              put_away_qty: formData.value.putaway_qty
            };
            var from_location_bin = {
              bin_id: formData.value.bin_id,
              level_id: formData.value.level_id,
              bay_id: formData.value.bay_id,
              aisle_id: formData.value.aisle_id,
              area_id: formData.value.area_id
            };
            data.append('from_location_bin', JSON.stringify(from_location_bin));
            data.append('put_away_data', JSON.stringify(put_away_data));
            this.showLoader = true;

            if (this.isEditing) {
              this.putawayService.editPutAway(this.editId, data).subscribe(function (response) {
                _this4.showLoader = false;

                if (response.success) {
                  _this4.back();
                }
              }, function (error) {
                _this4.showLoader = false;
              });
            } else {
              this.putawayService.addPutAway(data).subscribe(function (response) {
                _this4.showLoader = false;

                if (response.success) {
                  _this4.back();
                }
              }, function (error) {
                _this4.showLoader = false;
              });
            }
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "getOrderDetails",
        value: function getOrderDetails() {
          var _this5 = this;

          this.subscription = this.dataService.OrderDetails.subscribe(function (data) {
            if (data) {
              _this5.OrderDetails = data;
            }
          });
        }
      }, {
        key: "calPutawayQuantity",
        value: function calPutawayQuantity() {
          var total = this.addForm.value.qty;
          var no_of_putaway = this.addForm.value.putaway_qty;
          var new_on_of_qty = Number(total / no_of_putaway);

          if (isFinite(new_on_of_qty)) {
            this.addForm.patchValue({
              pick_qty: new_on_of_qty
            });
          } else {
            this.addForm.patchValue({
              pick_qty: '0'
            });
          }
        }
      }, {
        key: "calNoPutaway",
        value: function calNoPutaway() {
          var total = this.addForm.value.qty;
          var no_of_putaway = this.addForm.value.pick_qty;
          var putaway_quantity = Number(total / no_of_putaway);

          if (isFinite(putaway_quantity)) {
            this.addForm.patchValue({
              putaway_qty: putaway_quantity
            });
          } else {
            this.addForm.patchValue({
              putaway_qty: '0'
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return AddPutAwayComponent;
    }();

    AddPutAwayComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
      }, {
        type: src_app_service_put_away_service__WEBPACK_IMPORTED_MODULE_6__["PutAwayService"]
      }];
    };

    AddPutAwayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-put-away',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-put-away.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/put-away/add-put-away/add-put-away.component.html")).default
    })], AddPutAwayComponent);
    /***/
  },

  /***/
  "./src/app/pages/inbound/put-away/add-put-away/add-put-away.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/inbound/put-away/add-put-away/add-put-away.module.ts ***!
    \****************************************************************************/

  /*! exports provided: AddPutAwayModule */

  /***/
  function srcAppPagesInboundPutAwayAddPutAwayAddPutAwayModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPutAwayModule", function () {
      return AddPutAwayModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/form-validation/form-validation.module */
    "./src/app/shared/form-validation/form-validation.module.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _add_put_away_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./add-put-away.component */
    "./src/app/pages/inbound/put-away/add-put-away/add-put-away.component.ts");
    /* harmony import */


    var src_app_service_put_away_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/service/put-away.service */
    "./src/app/service/put-away.service.ts");

    var routes = [{
      path: '',
      component: _add_put_away_component__WEBPACK_IMPORTED_MODULE_8__["AddPutAwayComponent"]
    }, {
      path: ':id',
      component: _add_put_away_component__WEBPACK_IMPORTED_MODULE_8__["AddPutAwayComponent"]
    }];

    var AddPutAwayModule = function AddPutAwayModule() {
      _classCallCheck(this, AddPutAwayModule);
    };

    AddPutAwayModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_add_put_away_component__WEBPACK_IMPORTED_MODULE_8__["AddPutAwayComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_5__["FormValidationModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      providers: [src_app_service_put_away_service__WEBPACK_IMPORTED_MODULE_9__["PutAwayService"]]
    })], AddPutAwayModule);
    /***/
  }
}]);
//# sourceMappingURL=add-put-away-add-put-away-module-es5.js.map