function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-add-company-add-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company/company-add/company-add.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company/company-add/company-add.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCompanyCompanyAddCompanyAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n  <div class=\"page-header border-b\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div>\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <div class=\"clearfix\">\r\n                <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\r\n                  <div class=\"btn-file mt-3\">\r\n                    <div class=\"thumbnail fileinput-new uploaded-user-image rounded-circle\"\r\n                      style=\"width: 150px; height: 150px;\">\r\n                      <img [src]=\"editImageUrl ? editImageUrl : 'assets/no_image.png'\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <button class=\"fileinput-new btn btn-dark btn-sm btn-file mt-3\"> Browse\r\n                      Image\r\n                    </button>\r\n                    <input accept=\"image/x-png,image/jpeg\" (change)=\"fileChangeEvent($event)\" type=\"file\"\r\n                      file-model=\"myFile\">\r\n                    <div class=\"fileinput-preview fileinput-exists thumbnail uploaded-user-image rounded-circle\"\r\n                      style=\"width: 150px; height: 150px;\"></div>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <a (click)=\"removeFile()\" class=\"btn btn-link btn-sm fileinput-exists mt-3\"\r\n                      data-dismiss=\"fileinput\">Remove</a> </div>\r\n                  <div class=\"clearfix mt-3\">\r\n                    <p class=\"upload-img-label text-muted font-size-12\">*Recommended\r\n                      Size:<br>Minimum\r\n                      250 * 250</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-8\">\r\n              <div class=\"row\">\r\n\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Name <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['company_name']\" type=\"text\" class=\"form-control\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Email <em>*</em></label>\r\n                    \r\n                    <div class=\"\" [ngClass]=\"{'has-error': formErrors.company_email}\">\r\n                      <input [formControl]=\"addForm.controls['company_email']\" type=\"text\" class=\"form-control\"\r\n                        placeholder=\"\">\r\n                      <span *ngIf=\"formErrors.company_email\" class=\"help-block\"\r\n                        [innerHTML]=\"formErrors.company_email\"></span>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Company Domain <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['company_domain']\" type=\"text\" class=\"form-control\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Company Subdomain <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['company_subdomain']\" type=\"text\" class=\"form-control\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Currency <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <ng-select [formControl]=\"addForm.controls['currency']\"\r\n                        [items]=\"currencyListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Currency\">\r\n                      </ng-select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Language <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <ng-select [formControl]=\"addForm.controls['language']\" \r\n                        [items]=\"languageListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Language\">\r\n                      </ng-select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Time Format <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <ng-select [formControl]=\"addForm.controls['time_format']\"\r\n                        [items]=\"timeFormatListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Time Format\">\r\n                      </ng-select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Timezone <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <ng-select [formControl]=\"addForm.controls['timezone']\" \r\n                        [items]=\"timezoneListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Timezone\">\r\n                      </ng-select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Date Format <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <ng-select [formControl]=\"addForm.controls['date_format']\" \r\n                        [items]=\"dateFormatListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Date Format\">\r\n                      </ng-select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                \r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Country <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <ng-select [formControl]=\"addForm.controls['country_id']\" (change)=\"getCountryName($event)\"\r\n                        [items]=\"countryListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Country\">\r\n                      </ng-select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">State <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['state']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">City <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['city']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Street Address <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['street_address']\" type=\"text\" class=\"form-control\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                \r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label text-md-right\">Phone Number <em>*</em></label>\r\n                <div class=\"d-flex\">\r\n                  <input number [formControl]=\"addForm.controls['dial_code']\" type=\"text\" class=\"form-control mr-2\"\r\n                    style=\"width: 100px;\" placeholder=\"Enter dial number\">\r\n                  <input number [formControl]=\"addForm.controls['phone_no']\" type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter phone number\">\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"form-group\">\r\n                <label class=\"control-label text-md-right\">Address</label>\r\n                <textarea [formControl]=\"addForm.controls['address']\" class=\"form-control\" rows=\"2\"></textarea>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" routerLink=\"/manage/client\">Cancel</button>\r\n        <button type=\"submit\" [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\" [disabled]=\"showLoader\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n";
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
  "./src/app/pages/company/company-add/company-add.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/company/company-add/company-add.component.ts ***!
    \********************************************************************/

  /*! exports provided: CompanyAddComponent */

  /***/
  function srcAppPagesCompanyCompanyAddCompanyAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyAddComponent", function () {
      return CompanyAddComponent;
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


    var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var src_app_service_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/company.service */
    "./src/app/service/company.service.ts");

    var CompanyAddComponent =
    /*#__PURE__*/
    function () {
      function CompanyAddComponent(router, activatedRoute, fb, companyservice, commonService) {
        _classCallCheck(this, CompanyAddComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.companyservice = companyservice;
        this.commonService = commonService;
        this.PageTitle = "Company";
        this.editImageUrl = null;
        this.addNewRadio = false;
        this.timezoneListArray = [];
        this.dateFormatListArray = [];
        this.timeFormatListArray = [];
        this.languageListArray = [];
        this.currencyListArray = [];
        this.countryListArray = [];
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
          company_email: null,
          apierror: null
        };
        this.isEditing = false;
        this.editId = null;

        if (this.activatedRoute.snapshot.paramMap.get('id')) {
          this.isEditing = true;
          this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }

        this.addForm = this.fb.group({
          company_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          company_email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
          phone_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          dial_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          address: [null],
          country_name: [null],
          company_domain: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          company_subdomain: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          language: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          currency: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          time_format: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          timezone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          date_format: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          country_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          street_address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
      }

      _createClass(CompanyAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCountryList();
          this.getMasterData();

          if (this.isEditing) {
            this.getEditObject();
          }
        }
      }, {
        key: "getMasterData",
        value: function getMasterData() {
          var _this = this;

          this.companyservice.getCompanyMasterData().subscribe(function (res) {
            if (res.success) {
              _this.timezoneListArray = res.data.timezone;
              _this.dateFormatListArray = res.data.date_format;
              _this.timeFormatListArray = res.data.time_format;
              _this.languageListArray = res.data.language;
              _this.currencyListArray = res.data.currency;
            }
          });
        }
      }, {
        key: "getCountryList",
        value: function getCountryList() {
          var _this2 = this;

          this.commonService.getCountryList().subscribe(function (res) {
            if (res.success) {
              _this2.countryListArray = res.data.country_list;
            }
          });
        }
      }, {
        key: "getEditObject",
        value: function getEditObject() {
          var _this3 = this;

          this.companyservice.getCompanyById(this.editId).subscribe(function (response) {
            if (response.success) {
              _this3.editImageUrl = response.data.company_logo, _this3.addForm.patchValue({
                company_name: response.data.company_name,
                category_id: response.data.category_id,
                dial_code: response.data.dial_code,
                company_email: response.data.company_email,
                time_format: response.data.time_format,
                timezone: response.data.timezone,
                date_format: response.data.date_format,
                company_domain: response.data.company_domain,
                company_subdomain: response.data.company_subdomain,
                language: response.data.language,
                phone_no: response.data.phone_no,
                currency: response.data.currency,
                country_name: response.data.address.country_name,
                country_id: response.data.address.country_id,
                state: response.data.address.state,
                city: response.data.address.city,
                street_address: response.data.address.street_address ? response.data.address.street_address : ''
              });
            } else {
              _this3.router.navigateByUrl('/company');
            }
          });
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(fileInput) {
          var reg = /(.*?)\.(jpg|jpeg|png|gif|giff)$/;

          if (!fileInput.target.files[0].name.match(reg)) {
            swal.fire('Invalid File!', 'Please select valid file ', 'error');
            this.removeFile();
            return false;
          } else {
            this.removeFile();
            this.selectedFile = fileInput.target.files[0]; // this.editImageUrl = String(fileInput.target.value);
          }
        }
      }, {
        key: "removeFile",
        value: function removeFile() {
          this.selectedFile = null;
        }
      }, {
        key: "getCountryName",
        value: function getCountryName(data) {
          this.addForm.patchValue({
            country_name: data.label
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(formData) {
          var _this4 = this;

          if (formData.valid) {
            this.showLoader = true;
            var data = new FormData();
            data.append('company_name', formData.value.company_name);
            data.append('company_email', formData.value.company_email);
            data.append('phone_no', formData.value.phone_no);
            data.append('company_domain', formData.value.company_domain);
            data.append('company_subdomain', formData.value.company_subdomain);
            data.append('dial_code', formData.value.dial_code);
            data.append('language', formData.value.language);
            data.append('currency', formData.value.currency);
            data.append('time_format', formData.value.time_format);
            data.append('timezone', formData.value.timezone);
            data.append('date_format', formData.value.date_format);
            var address = {
              country_id: formData.value.country_id,
              country_name: formData.value.country_name,
              state: formData.value.state,
              city: formData.value.city,
              street_address: formData.value.street_address
            };
            data.append('address', JSON.stringify(address));

            if (this.selectedFile) {
              data.append('file', this.selectedFile);
            }

            if (this.isEditing) {
              this.companyservice.editCompany(this.editId, data).subscribe(function (response) {
                _this4.showLoader = false;

                if (response.success) {
                  _this4.router.navigateByUrl('/company');
                } else {
                  response.error.map(function (obj) {
                    if (obj.hasOwnProperty('company_email')) {
                      _this4.formErrors['company_email'] = obj['company_email'];
                    } else {
                      _this4.formErrors['apierror'] = "* ".concat(response.error);
                    }
                  });
                }
              }, function (error) {
                _this4.showLoader = false;
              });
            } else {
              this.companyservice.addCompany(data).subscribe(function (response) {
                _this4.showLoader = false;

                if (response.success) {
                  _this4.router.navigateByUrl('/company');
                } else {
                  response.error.map(function (obj) {
                    if (obj.hasOwnProperty('company_email')) {
                      _this4.formErrors['company_email'] = obj['company_email'];
                    } else {
                      _this4.formErrors['apierror'] = "* ".concat(response.error);
                    }
                  });
                }
              }, function (error) {
                _this4.showLoader = false;
              });
            }
          }
        }
      }]);

      return CompanyAddComponent;
    }();

    CompanyAddComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_service_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"]
      }, {
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }];
    };

    CompanyAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-company-add',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./company-add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company/company-add/company-add.component.html")).default
    })], CompanyAddComponent);
    /***/
  },

  /***/
  "./src/app/pages/company/company-add/company-add.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/company/company-add/company-add.module.ts ***!
    \*****************************************************************/

  /*! exports provided: CompanyAddModule */

  /***/
  function srcAppPagesCompanyCompanyAddCompanyAddModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyAddModule", function () {
      return CompanyAddModule;
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


    var _company_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./company-add.component */
    "./src/app/pages/company/company-add/company-add.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/form-validation/form-validation.module */
    "./src/app/shared/form-validation/form-validation.module.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var routes = [{
      path: '',
      component: _company_add_component__WEBPACK_IMPORTED_MODULE_3__["CompanyAddComponent"],
      data: {
        title: 'add_company'
      }
    }];

    var CompanyAddModule = function CompanyAddModule() {
      _classCallCheck(this, CompanyAddModule);
    };

    CompanyAddModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_company_add_component__WEBPACK_IMPORTED_MODULE_3__["CompanyAddComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__["FormValidationModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)]
    })], CompanyAddModule);
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
          var _this5 = this;

          if (this.control && this.control.valueChanges) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.control.valueChanges, this.submit$).subscribe(function (v) {
              var controlErrors = _this5.control.errors;

              if (controlErrors) {
                var control_name = _this5.getFormControlName(_this5.control); // console.log(control_name, controlErrors);


                var firstKey = Object.keys(controlErrors)[0];
                var messages = _form_errors__WEBPACK_IMPORTED_MODULE_7__["VALIDATION_MESSAGES"][control_name];

                if (messages !== undefined && messages !== null && messages !== '') {
                  _this5.setError(messages[firstKey]);
                }
              } else if (_this5.ref) {
                _this5.setError(null);
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
        var _this6 = this;

        _classCallCheck(this, FormSubmitDirective);

        this.host = host;
        this.submit$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.element, 'submit').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
          if (_this6.element.classList.contains('submitted') === false) {
            _this6.element.classList.add('submitted');
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
//# sourceMappingURL=company-add-company-add-module-es5.js.map