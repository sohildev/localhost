function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-config-add-product-config-add-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/product-config/product-config-add/product-config-add.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/product-config/product-config-add/product-config-add.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInboundProductConfigProductConfigAddProductConfigAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <div class=\"page-header border-b\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\n            <div class=\"card-body\">\n                <div>\n                    <div class=\"form-group row\">\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Order Id</label>\n                        <div class=\"col-md-5\">\n\n                            <ng-select [formControl]=\"addForm.controls['order_id']\" (change)=\"getMasterData(true)\"\n                                    [items]=\"orderListArray\" bindLabel=\"label\" bindValue=\"value\"\n                                    placeholder=\"Select Order\">\n                                </ng-select>\n                                \n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Product <em>*</em></label>\n                        <div class=\"col-md-5\">\n                            <ng-select [formControl]=\"addForm.controls['product_id']\"\n                                (change)=\"setProductDetail($event)\" [items]=\"productListArray\" bindLabel=\"label\"\n                                bindValue=\"value\" placeholder=\"Select Product\">\n                            </ng-select>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Registration Type\n                            <em>*</em></label>\n                        <div class=\"col-md-5\">\n                            <ng-select [formControl]=\"addForm.controls['registration_type']\"\n                                [items]=\"registrationTypeArray\" bindLabel=\"label\" bindValue=\"value\"\n                                (change)=\"typeChange()\" placeholder=\"Select Registration\">\n                            </ng-select>\n                        </div>\n                    </div>\n                    <div *ngIf=\"isSerialShow\" class=\"form-group row\">\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Serial Number <em>*</em></label>\n                        <div class=\"col-md-5\">\n                            <ng-select [formControl]=\"addForm.controls['maintain_serial_no']\" [items]=\"serialArray\"\n                                bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Serial\">\n                            </ng-select>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"text-right border-top py-4 mt-5 card-footer\">\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"back()\">Cancel</button>\n                <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\n            </div>\n        </form>\n    </div>\n</div>";
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
  "./src/app/pages/inbound/product-config/product-config-add/product-config-add.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/pages/inbound/product-config/product-config-add/product-config-add.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ProductConfigAddComponent */

  /***/
  function srcAppPagesInboundProductConfigProductConfigAddProductConfigAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductConfigAddComponent", function () {
      return ProductConfigAddComponent;
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


    var src_app_service_product_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/product-config.service */
    "./src/app/service/product-config.service.ts");

    var ProductConfigAddComponent =
    /*#__PURE__*/
    function () {
      function ProductConfigAddComponent(router, activatedRoute, fb, location, productconfigService) {
        _classCallCheck(this, ProductConfigAddComponent);

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
          apierror: null
        };
        this.isEditing = false;
        this.editId = null;
        this.addForm = this.fb.group({
          order_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          maintain_serial_no: [null],
          product_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          registration_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });

        if (this.activatedRoute.snapshot.paramMap.get('id')) {
          var id = this.activatedRoute.snapshot.paramMap.get('id');
          this.editId = id;
          this.isEditing = true;
        }
      }

      _createClass(ProductConfigAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.isEditing) {
            this.getEditObject();
          } else {
            this.getMasterData();
          }
        }
      }, {
        key: "typeChange",
        value: function typeChange() {
          if (this.addForm.value.registration_type == 0) {
            this.isSerialShow = true;
            this.addForm.get('maintain_serial_no').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
            this.addForm.get('maintain_serial_no').updateValueAndValidity();
          } else {
            this.isSerialShow = false;
            this.addForm.get('maintain_serial_no').clearValidators();
            this.addForm.get('maintain_serial_no').updateValueAndValidity();
          }
        }
      }, {
        key: "getMasterData",
        value: function getMasterData() {
          var _this = this;

          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          event ? this.addForm.patchValue({
            product_id: ''
          }) : '';
          var params = {};

          if (this.addForm.value.order_id) {
            params.order_id = this.addForm.value.order_id;
          }

          if (this.isEditing) {
            params.is_editing = this.isEditing;
          }

          this.productconfigService.getProductConfigMasterData(params).subscribe(function (response) {
            if (response.success) {
              if (_this.addForm.value.order_id) {
                if (_this.isEditing) {
                  _this.registrationTypeArray = response.data.registration_type;
                  _this.serialArray = response.data.serial;
                  _this.productListArray = response.data.product;
                } else {
                  _this.productListArray = response.data.product;
                }
              } else {
                _this.orderListArray = response.data.order;
                _this.registrationTypeArray = response.data.registration_type;
                _this.serialArray = response.data.serial;
              }
            }
          });
        }
      }, {
        key: "setProductDetail",
        value: function setProductDetail(data) {
          if (data) {
            console.log(data); // console.log(this.productListArray[this.addForm.value.product_id]);

            this.addForm.patchValue({
              sku_no: data.sku_no,
              product_id: data.value,
              unload_id: data.unload_id,
              unload_detail_id: data.unload_detail_id,
              received_qty: data.received_qty
            });
          }
        }
      }, {
        key: "getEditObject",
        value: function getEditObject() {
          var _this2 = this;

          this.productconfigService.getProductConfigById(this.editId).subscribe(function (response) {
            if (response.success) {
              _this2.orderListArray = [response.data.order];

              _this2.addForm.patchValue({
                order_id: response.data.order.value,
                product_id: response.data.product.value,
                registration_type: response.data.registration_type.value
              });

              if (response.data.registration_type.value == 0) {
                _this2.isSerialShow = true;

                _this2.addForm.patchValue({
                  maintain_serial_no: response.data.serial.value
                });
              }

              _this2.typeChange();

              _this2.getMasterData();
            } else {// this.router.navigateByUrl('/inbound/registeration');
            }
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(formData) {
          var _this3 = this;

          if (formData.valid) {
            this.showLoader = true;
            var data = new FormData();
            data.append('registration_type', formData.value.registration_type);
            data.append('order_id', formData.value.order_id);
            data.append('product_id', formData.value.product_id);

            if (this.isSerialShow) {
              data.append('maintain_serial_no', formData.value.maintain_serial_no);
            }

            if (this.isEditing) {
              this.productconfigService.editProductConfig(this.editId, data).subscribe(function (response) {
                _this3.showLoader = false;

                if (response.success) {
                  _this3.back();
                }
              }, function (error) {
                _this3.showLoader = false;
              });
            } else {
              this.productconfigService.addProductConfig(data).subscribe(function (response) {
                _this3.showLoader = false;

                if (response.success) {
                  _this3.back();
                }
              }, function (error) {
                _this3.showLoader = false;
              });
            }
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }]);

      return ProductConfigAddComponent;
    }();

    ProductConfigAddComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: src_app_service_product_config_service__WEBPACK_IMPORTED_MODULE_5__["ProductConfigService"]
      }];
    };

    ProductConfigAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-config-add',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-config-add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/product-config/product-config-add/product-config-add.component.html")).default
    })], ProductConfigAddComponent);
    /***/
  },

  /***/
  "./src/app/pages/inbound/product-config/product-config-add/product-config-add.module.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/inbound/product-config/product-config-add/product-config-add.module.ts ***!
    \**********************************************************************************************/

  /*! exports provided: ProductConfigAddModule */

  /***/
  function srcAppPagesInboundProductConfigProductConfigAddProductConfigAddModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductConfigAddModule", function () {
      return ProductConfigAddModule;
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


    var _product_config_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./product-config-add.component */
    "./src/app/pages/inbound/product-config/product-config-add/product-config-add.component.ts");
    /* harmony import */


    var src_app_service_product_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/service/product-config.service */
    "./src/app/service/product-config.service.ts");

    var routes = [{
      path: '',
      component: _product_config_add_component__WEBPACK_IMPORTED_MODULE_8__["ProductConfigAddComponent"]
    }];

    var ProductConfigAddModule = function ProductConfigAddModule() {
      _classCallCheck(this, ProductConfigAddModule);
    };

    ProductConfigAddModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_product_config_add_component__WEBPACK_IMPORTED_MODULE_8__["ProductConfigAddComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_5__["FormValidationModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      providers: [src_app_service_product_config_service__WEBPACK_IMPORTED_MODULE_9__["ProductConfigService"]]
    })], ProductConfigAddModule);
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
          var _this4 = this;

          if (this.control && this.control.valueChanges) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.control.valueChanges, this.submit$).subscribe(function (v) {
              var controlErrors = _this4.control.errors;

              if (controlErrors) {
                var control_name = _this4.getFormControlName(_this4.control); // console.log(control_name, controlErrors);


                var firstKey = Object.keys(controlErrors)[0];
                var messages = _form_errors__WEBPACK_IMPORTED_MODULE_7__["VALIDATION_MESSAGES"][control_name];

                if (messages !== undefined && messages !== null && messages !== '') {
                  _this4.setError(messages[firstKey]);
                }
              } else if (_this4.ref) {
                _this4.setError(null);
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
        var _this5 = this;

        _classCallCheck(this, FormSubmitDirective);

        this.host = host;
        this.submit$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.element, 'submit').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
          if (_this5.element.classList.contains('submitted') === false) {
            _this5.element.classList.add('submitted');
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
      login_pin: {
        required: "* Please enter PIN",
        maxlength: "Pin Max 4 Digit",
        minlength: "Please enter at least 4 digits"
      },
      number_tag_to_create: {
        required: "* Please enter vlaue",
        max: "Maximum 100",
        min: " Minimum 1"
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
  }
}]);
//# sourceMappingURL=product-config-add-product-config-add-module-es5.js.map