function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"], {
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-password/change-password.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-password/change-password.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileChangePasswordChangePasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <div class=\"w-25 mx-auto\">\r\n                    <form class=\"form-horizontal\" role=\"form\">\r\n                        <div class=\"mt-3\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label text-md-right\">Old Password <em>*</em></label>\r\n                                <div class=\"\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label text-md-right\">New Password <em>*</em></label>\r\n                                <div class=\"\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label text-md-right\">Retype New Password <em>*</em></label>\r\n                                <div class=\"\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <div class=\"text-right border-top pt-4 mt-3 mb-3\">\r\n                                    <button type=\"button\" class=\"btn btn-light\" routerLink=\"/profile\">Cancel</button>\r\n                                    <button type=\"submit\" class=\"btn btn-secondary ml-2\">Save</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<style>\r\n    .w-25 {\r\n        width: 30% !important;\r\n    }\r\n</style>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit-profile/edit-profile.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit-profile/edit-profile.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileEditProfileEditProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <form class=\"form-horizontal\" role=\"form\">\r\n            <div class=\"card-body\">\r\n                <div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-4\">\r\n                            <div class=\"clearfix\">\r\n                                <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\r\n                                    <div class=\"btn-file mt-3\">\r\n                                        <div class=\"thumbnail fileinput-new uploaded-user-image rounded-circle\"\r\n                                            style=\"width: 150px; height: 150px;\"><img alt=\"\" class=\"view-image\"\r\n                                                src=\"assets/no_image.png\"></div>\r\n                                        <div class=\"clearfix\"></div><button\r\n                                            class=\"fileinput-new btn btn-dark btn-sm btn-file mt-3\"> Browse\r\n                                            Image\r\n                                        </button><input accept=\"image/x-png,image/jpeg\" file-model=\"myFile\" type=\"file\">\r\n                                        <div class=\"fileinput-preview fileinput-exists thumbnail uploaded-user-image rounded-circle\"\r\n                                            style=\"width: 150px; height: 150px;\"></div>\r\n                                    </div>\r\n                                    <div class=\"text-center\"><a class=\"btn btn-link btn-sm fileinput-exists mt-3\"\r\n                                            data-dismiss=\"fileinput\">Remove</a></div>\r\n                                    <div class=\"clearfix mt-3\">\r\n                                        <p class=\"upload-img-label text-muted font-size-12\">*Recommended\r\n                                            Size:<br>Minimum\r\n                                            250 * 250</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-8\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"control-label text-md-right\">First Name <em>*</em></label>\r\n                                        <div class=\"\">\r\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"control-label text-md-right\">Last Name <em>*</em></label>\r\n                                        <div class=\"\">\r\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"control-label text-md-right\">Phone Number <em>*</em></label>\r\n                                        <div class=\"\">\r\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"control-label text-md-right\">Email <em>*</em></label>\r\n                                        <div class=\"\">\r\n                                            <input type=\"email\" class=\"form-control\" placeholder=\"\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n                <button type=\"button\" class=\"btn btn-light\" routerLink=\"/profile\">Cancel</button>\r\n                <button type=\"submit\" class=\"btn btn-secondary ml-2\">Save</button>\r\n            </div>\r\n        </form>\r\n\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row mx-0\">\r\n            <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n            <app-btn-add [btnName]=\"'Edit Profile'\" [editData]=\"'/profile/edit-profile'\"></app-btn-add>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body p-5\">\r\n            <div class=\"row\">\r\n                <div class=\"col-2 text-center\">\r\n                    <img src=\"./../../../assets/no_image.png\" class=\"rounded-circle border\" alt=\"\" width=\"150px\">\r\n                </div>\r\n                <div class=\"col-10\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <label class=\"control-label mb-1\">First Name</label>\r\n                            <div class=\"bg-light p-2\">Admin</div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <label class=\"control-label mb-1\">Last Name</label>\r\n                            <div class=\"bg-light p-2\">Peerbits</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mt-4\">\r\n                        <div class=\"col-md-6\">\r\n                            <label class=\"control-label mb-1\">Phone</label>\r\n                            <div class=\"bg-light p-2\">+9988778855</div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <label class=\"control-label mb-1\">Email</label>\r\n                            <div class=\"bg-light p-2\">admin@peerbits.com</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
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
  "./src/app/pages/profile/change-password/change-password.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/profile/change-password/change-password.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileChangePasswordChangePasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/profile/change-password/change-password.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/profile/change-password/change-password.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppPagesProfileChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ChangePasswordComponent =
    /*#__PURE__*/
    function () {
      function ChangePasswordComponent() {
        _classCallCheck(this, ChangePasswordComponent);

        this.PageTitle = "Change Password";
      }

      _createClass(ChangePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChangePasswordComponent;
    }();

    ChangePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change-password',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./change-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-password/change-password.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./change-password.component.css */
      "./src/app/pages/profile/change-password/change-password.component.css")).default]
    })], ChangePasswordComponent);
    /***/
  },

  /***/
  "./src/app/pages/profile/edit-profile/edit-profile.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/profile/edit-profile/edit-profile.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileEditProfileEditProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/profile/edit-profile/edit-profile.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/profile/edit-profile/edit-profile.component.ts ***!
    \**********************************************************************/

  /*! exports provided: EditProfileComponent */

  /***/
  function srcAppPagesProfileEditProfileEditProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function () {
      return EditProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EditProfileComponent =
    /*#__PURE__*/
    function () {
      function EditProfileComponent() {
        _classCallCheck(this, EditProfileComponent);

        this.PageTitle = "Edit Profile";
      }

      _createClass(EditProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EditProfileComponent;
    }();

    EditProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./edit-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit-profile/edit-profile.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./edit-profile.component.css */
      "./src/app/pages/profile/edit-profile/edit-profile.component.css")).default]
    })], EditProfileComponent);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/pages/profile/profile.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/profile/profile.component.ts ***!
    \****************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppPagesProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);

        this.PageTitle = "Profile";
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/pages/profile/profile.component.css")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.module.ts ***!
    \*************************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppPagesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
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


    var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/pages/profile/profile.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./change-password/change-password.component */
    "./src/app/pages/profile/change-password/change-password.component.ts");
    /* harmony import */


    var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-profile/edit-profile.component */
    "./src/app/pages/profile/edit-profile/edit-profile.component.ts");
    /* harmony import */


    var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/common-module/btn-add/btn-add.module */
    "./src/app/common-module/btn-add/btn-add.module.ts");

    var routes = [{
      path: '',
      component: _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
    }, {
      path: 'change-password',
      component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"]
    }, {
      path: 'edit-profile',
      component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"]
    }];

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_7__["BtnAddModule"]]
    })], ProfileModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map