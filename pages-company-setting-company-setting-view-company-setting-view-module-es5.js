function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-company-setting-company-setting-view-company-setting-view-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/btn-add/btn-add.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/btn-add/btn-add.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonModuleBtnAddBtnAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a class=\"btn btn-secondary\" (click)=\"getEditPage()\" routerLink=\"['editData']\">\r\n    {{btnName}}\r\n</a>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company-setting/company-setting-view/company-setting-view.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company-setting/company-setting-view/company-setting-view.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCompanySettingCompanySettingViewCompanySettingViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <div class=\"page-header\">\n        <div class=\"row mx-0\">\n            <h2 class=\"mr-auto\">{{PageTitle}}</h2>\n            <app-btn-add [btnName]=\"'Edit Setting'\" [editData]=\"'/setting/edit'\"></app-btn-add>\n        </div>\n\n    </div>\n    <div class=\"card\">\n        <div class=\"card-body p-5\">\n            <div class=\"row\">\n                <div class=\"col-2 text-center\">\n                    <img  [src]=\"currentCompany?.company_logo ? currentCompany?.company_logo : 'assets/no_image.png'\"\n                    alt=\"company logo\" class=\"rounded-circle border\"  width=\"150px\">\n                </div>\n                <div class=\"col-10\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <label class=\"control-label mb-1\">Company Name</label>\n                            <div class=\"bg-light p-2\">{{currentCompany?.company_name}}</div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <label class=\"control-label mb-1\">Company Email</label>\n                            <div class=\"bg-light p-2\">{{currentCompany?.company_email}}</div>\n                        </div>\n                    </div>\n                    <div class=\"row mt-4\">\n                        <div class=\"col-md-6\">\n                            <label class=\"control-label mb-1\">Dile Code</label>\n                            <div class=\"bg-light p-2\">{{currentCompany?.dial_code}}</div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <label class=\"control-label mb-1\">Phone</label>\n                            <div class=\"bg-light p-2\">{{currentCompany?.phone_no}}</div>\n                        </div>\n                        \n                    </div>\n                    \n                    <div class=\"row mt-4\">\n                        <div class=\"col-md-6\">\n                            <label class=\"control-label mb-1\">Comapny Domain</label>\n                            <div class=\"bg-light p-2\">{{currentCompany?.company_domain}}</div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <label class=\"control-label mb-1\">Company SubDomain</label>\n                            <div class=\"bg-light p-2\">{{currentCompany?.company_subdomain}}</div>\n                        </div>\n                    </div>\n\n                   \n                    <div class=\"row mt-4\">\n                        <div class=\"col-md-6\">\n                            <label class=\"control-label mb-1\">language</label>\n                            <div class=\"bg-light p-2\">{{currentCompany?.language?.label}}</div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <label class=\"control-label mb-1\">Currency</label>\n                            <div class=\"bg-light p-2\">{{currentCompany?.currency?.label}}</div>\n                        </div>\n                    </div>\n                    <div class=\"row mt-4\">\n                        <div class=\"col-md-6\">\n                            <label class=\"control-label mb-1\">Time Format</label>\n                            <div class=\"bg-light p-2\">{{currentCompany?.time_format?.label}}</div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <label class=\"control-label mb-1\">Date Format</label>\n                            <div class=\"bg-light p-2\">{{currentCompany?.date_format?.label}}</div>\n                        </div>\n                    </div>\n                    <div class=\"row mt-4\">\n                        <div class=\"col-md-6\">\n                            <label class=\"control-label mb-1\">Timezone</label>\n                            <div class=\"bg-light p-2\">{{currentCompany?.timezone?.label}}</div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <label class=\"control-label mb-1\">Address</label>\n                            <div class=\"bg-light p-2\">\n                                {{currentCompany?.address?.street_address}}\n                                {{currentCompany?.address?.city}}\n                                {{currentCompany?.address?.state}}\n                                {{currentCompany?.address?.country_name}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/common-module/btn-add/btn-add.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/common-module/btn-add/btn-add.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonModuleBtnAddBtnAddComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1tb2R1bGUvYnRuLWFkZC9idG4tYWRkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/common-module/btn-add/btn-add.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/common-module/btn-add/btn-add.component.ts ***!
    \************************************************************/

  /*! exports provided: BtnAddComponent */

  /***/
  function srcAppCommonModuleBtnAddBtnAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BtnAddComponent", function () {
      return BtnAddComponent;
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

    var BtnAddComponent =
    /*#__PURE__*/
    function () {
      function BtnAddComponent(router) {
        _classCallCheck(this, BtnAddComponent);

        this.router = router;
      }

      _createClass(BtnAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getEditPage",
        value: function getEditPage() {
          this.router.navigateByUrl(this.editData);
        }
      }]);

      return BtnAddComponent;
    }();

    BtnAddComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BtnAddComponent.prototype, "editData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BtnAddComponent.prototype, "btnName", void 0);
    BtnAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-btn-add',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./btn-add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/btn-add/btn-add.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./btn-add.component.css */
      "./src/app/common-module/btn-add/btn-add.component.css")).default]
    })], BtnAddComponent);
    /***/
  },

  /***/
  "./src/app/common-module/btn-add/btn-add.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/common-module/btn-add/btn-add.module.ts ***!
    \*********************************************************/

  /*! exports provided: BtnAddModule */

  /***/
  function srcAppCommonModuleBtnAddBtnAddModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BtnAddModule", function () {
      return BtnAddModule;
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


    var _btn_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./btn-add.component */
    "./src/app/common-module/btn-add/btn-add.component.ts");

    var BtnAddModule = function BtnAddModule() {
      _classCallCheck(this, BtnAddModule);
    };

    BtnAddModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_btn_add_component__WEBPACK_IMPORTED_MODULE_3__["BtnAddComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_btn_add_component__WEBPACK_IMPORTED_MODULE_3__["BtnAddComponent"]]
    })], BtnAddModule);
    /***/
  },

  /***/
  "./src/app/pages/company-setting/company-setting-view/company-setting-view.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/company-setting/company-setting-view/company-setting-view.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: CompanySettingViewComponent */

  /***/
  function srcAppPagesCompanySettingCompanySettingViewCompanySettingViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanySettingViewComponent", function () {
      return CompanySettingViewComponent;
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


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");

    var CompanySettingViewComponent =
    /*#__PURE__*/
    function () {
      function CompanySettingViewComponent(dataservice) {
        _classCallCheck(this, CompanySettingViewComponent);

        this.dataservice = dataservice;
        this.PageTitle = "Setting";
      }

      _createClass(CompanySettingViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.dataservice.currentCompany.subscribe(function (responce) {
            if (responce) {
              _this.currentCompany = responce;
            }
          });
        }
      }]);

      return CompanySettingViewComponent;
    }();

    CompanySettingViewComponent.ctorParameters = function () {
      return [{
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    CompanySettingViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-company-setting-view',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./company-setting-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company-setting/company-setting-view/company-setting-view.component.html")).default
    })], CompanySettingViewComponent);
    /***/
  },

  /***/
  "./src/app/pages/company-setting/company-setting-view/company-setting-view.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/company-setting/company-setting-view/company-setting-view.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: CompanySettingViewModule */

  /***/
  function srcAppPagesCompanySettingCompanySettingViewCompanySettingViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanySettingViewModule", function () {
      return CompanySettingViewModule;
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


    var _company_setting_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./company-setting-view.component */
    "./src/app/pages/company-setting/company-setting-view/company-setting-view.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/common-module/btn-add/btn-add.module */
    "./src/app/common-module/btn-add/btn-add.module.ts");

    var routes = [{
      path: '',
      component: _company_setting_view_component__WEBPACK_IMPORTED_MODULE_3__["CompanySettingViewComponent"]
    }, {
      path: 'edit',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | company-setting-edit-company-setting-edit-module */
        [__webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~auth-forgot-password-forgot-password-module~auth-lo~135b230d"), __webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~add-configuration-add-configuration-module~add-orde~d3e4c59f"), __webpack_require__.e("common"), __webpack_require__.e("company-setting-edit-company-setting-edit-module")]).then(__webpack_require__.bind(null,
        /*! ../company-setting-edit/company-setting-edit.module */
        "./src/app/pages/company-setting/company-setting-edit/company-setting-edit.module.ts")).then(function (m) {
          return m.CompanySettingEditModule;
        });
      }
    }];

    var CompanySettingViewModule = function CompanySettingViewModule() {
      _classCallCheck(this, CompanySettingViewModule);
    };

    CompanySettingViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_company_setting_view_component__WEBPACK_IMPORTED_MODULE_3__["CompanySettingViewComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__["BtnAddModule"]]
    })], CompanySettingViewModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-company-setting-company-setting-view-company-setting-view-module-es5.js.map