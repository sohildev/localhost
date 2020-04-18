function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-company-company-list-company-list-module~pages-inbound-inbound-module~pages-master-mas~9cad3811"], {
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/search/search.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/search/search.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonModuleSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"input-group search-box\">\r\n  <input type=\"text\" class=\"form-control\" #search (keyup.enter)=\"searchAction(search.value)\" name=\"search\"\r\n    autocomplete=\"off\" placeholder=\"{{placeholder}}\">\r\n  <div class=\"input-group-append\">\r\n    <button type=\"button\" (click)=\"searchAction(search.value)\" class=\"input-group-text pointer\"><i\r\n        class=\"la la-search\"></i></button>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<style>\r\n  .search-box {\r\n    width: 280px;\r\n  }\r\n\r\n  .search-box .form-control {\r\n    background-color: white;\r\n    border: none;\r\n  }\r\n\r\n  .search-box .input-group-text {\r\n    background-color: #a5a2e2;\r\n    border: 1px solid white;\r\n    color: white;\r\n    border-radius: 0 3px 3px 0;\r\n  }\r\n</style>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/table-list/table-list/table-list.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/table-list/table-list/table-list.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonModuleTableListTableListTableListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"table-responsive\">\r\n  <table class=\"table\">\r\n    <thead class=\"thead-dark\">\r\n      <tr>\r\n        <ng-container *ngFor=\"let obj of headerData\">\r\n          <th class=\"{{obj.class}}\" scope=\"col\">\r\n            <span *ngIf=\"obj.label=='checkbox';then thenTemplate else elseTemplate\">Condition is valid.</span>\r\n            <ng-template #thenTemplate>\r\n              <div class=\"form-check form-check-inline mr-0\">\r\n                <div class=\"checkbox-container\">\r\n                  <input id=\"checkBoxAll\" (change)=\"markAllProduct($event.target.checked)\" class=\"form-check-input\"\r\n                    type=\"checkbox\" value=\"all\">\r\n                  <span class=\"checkmark\"></span>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template #elseTemplate>\r\n              {{obj.label}}\r\n            </ng-template>\r\n          </th>\r\n        </ng-container>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let obj of rawData ;let j=index\" scope=\"row\">\r\n\r\n        <ng-container *ngFor=\"let hobj of headerData;let i=index\">\r\n          <ng-container *ngIf=\"hobj.type == 'checkbox'\">\r\n            <td>\r\n              <div class=\"form-check form-check-inline mr-0\">\r\n                <div class=\"checkbox-container\">\r\n                  <input id=\"checkBox{{i}}\" (change)=\"addProduct(obj, hobj?.key,$event.target.checked)\"\r\n                    class=\"form-check-input pro-chk\" type=\"checkbox\" value=\"all\">\r\n                  <span class=\"checkmark\"></span>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </ng-container>\r\n\r\n\r\n          <ng-container *ngIf=\"hobj.type == 'index'\">\r\n            <td>\r\n              {{j + 1}}\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"hobj.type == 'text'\">\r\n            <td *ngIf=\"!hobj.viewUrl\">\r\n              {{obj|objectValue : hobj?.key}}\r\n            </td>\r\n          </ng-container>\r\n\r\n\r\n          <ng-container *ngIf=\"hobj.type == 'price'\">\r\n            <td *ngIf=\"!hobj.viewUrl\">\r\n              {{currentCompany?.currency?.label }}\r\n              <span *ngIf=\"'-' !=(obj|objectValue : hobj?.key)\">\r\n                {{obj|objectValue : hobj?.key |number}}\r\n              </span>\r\n              <span *ngIf=\"'-' ==(obj|objectValue : hobj?.key)\">\r\n                0\r\n              </span>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"hobj.type == 'date'\">\r\n            <td *ngIf=\"!hobj.viewUrl\">\r\n              {{obj|objectValue : hobj?.key  |date:date_format :timezone}}\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"hobj.type == 'status'\">\r\n            <td>\r\n              <span class=\"badge\" [ngClass]=\"{\r\n                'badge-success': obj?.status?.value == '3',\r\n                'badge-primary': obj?.status?.value == '4',\r\n                'badge-warning text-white': obj?.status?.value == '2',\r\n                'badge-danger': obj?.status?.value == '1',\r\n                'badge-success': obj?.status?.value == '0'\r\n              }\">\r\n                {{obj|objectValue : hobj?.key  }}\r\n              \r\n              </span>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"hobj.type == 'multistatus'\">\r\n            <td>\r\n              <span class=\"pr-1\" *ngFor=\"let statusitem of obj|objectValue : hobj?.key\">\r\n                <span class=\"badge\" [ngClass]=\"{\r\n                'badge-info': statusitem?.value == '6',\r\n                'badge-success ': statusitem?.value == '5',\r\n                'badge-dark ': statusitem?.value == '4',\r\n                'badge-danger ': statusitem?.value == '3',\r\n                'badge-primary ': statusitem?.value == '2',\r\n                'badge-warning text-white': statusitem?.value == '1'\r\n              }\">\r\n                  {{statusitem?.label }}\r\n                </span>\r\n              </span>\r\n            </td>\r\n          </ng-container>\r\n\r\n\r\n\r\n          <ng-container *ngIf=\"hobj.type == 'textClickEvent'\">\r\n            <td>\r\n              <a href=\"javascript:void(0)\" (click)=\"sendClickEvent(obj)\">\r\n                {{obj|objectValue : hobj?.key}}\r\n              </a>\r\n            </td>\r\n          </ng-container>\r\n\r\n\r\n          <ng-container *ngIf=\"hobj.type == 'textUrl'\">\r\n            <td>\r\n              <a routerLink=\"{{ obj|getViewUrl : hobj?.viewUrl}}\">\r\n                {{obj|objectValue : hobj?.key }}\r\n              </a>\r\n            </td>\r\n\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"hobj.type == 'action'\">\r\n\r\n            <td>\r\n              <div class=\"action-drop dropdown text-right\">\r\n                <a href=\"#\" data-toggle=\"dropdown\" class=\"btn btn-default btn-sm btn-icon-only shadow-none\" title=\"\">\r\n                  <i class=\"fa fa-ellipsis-h\"></i>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-icon-menu drop-menu-right action-dropdown\" style=\"width: 100px;\">\r\n                  <a *ngIf=\"hobj.view\" class=\"dropdown-item\" routerLink=\"{{ obj|getViewUrl : hobj.view}}\">\r\n                    <i class=\"font-size16 text-primary fa {{hobj?.view?.class ? hobj?.view?.class:'fa-eye'}}\">\r\n                    </i> {{hobj?.view?.showText ? hobj?.view?.showText:'View' }}\r\n                  </a>\r\n\r\n                  <a *ngIf=\"hobj.edit\" class=\"dropdown-item\" routerLink=\"{{ obj|getEditUrl : hobj.edit}}\">\r\n                    <i class=\"fa font-size16 text-primary fa {{hobj?.view?.class ? hobj?.view?.class:'fa-edit'}}\">\r\n                    </i> {{hobj?.edit?.showText ? hobj?.edit?.showText:'Edit' }}\r\n                  </a>\r\n\r\n                  <a *ngIf=\"hobj.delete\" class=\"dropdown-item\" (click)=\"deleteObject(obj ,hobj.delete)\">\r\n                    <i class=\"fa fa-trash font-size16 text-primary\">\r\n                    </i> Delete</a>\r\n\r\n                </div>\r\n              </div>\r\n            </td>\r\n\r\n\r\n          </ng-container>\r\n\r\n        </ng-container>\r\n\r\n      </tr>\r\n      <tr *ngIf=\"rawData.length == 0\">\r\n        <td [attr.colspan]=\"headerData.length\">No records found </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>";
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
  "./src/app/common-module/search/search.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/common-module/search/search.component.ts ***!
    \**********************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppCommonModuleSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent() {
        _classCallCheck(this, SearchComponent);

        this.text = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "searchAction",
        value: function searchAction(text) {
          this.text.emit(text);
        }
      }]);

      return SearchComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SearchComponent.prototype, "text", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SearchComponent.prototype, "placeholder", void 0);
    SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'search-box',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/search/search.component.html")).default
    })], SearchComponent);
    /***/
  },

  /***/
  "./src/app/common-module/search/search.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/common-module/search/search.module.ts ***!
    \*******************************************************/

  /*! exports provided: SearchModule */

  /***/
  function srcAppCommonModuleSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchModule", function () {
      return SearchModule;
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


    var _search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search.component */
    "./src/app/common-module/search/search.component.ts");

    var SearchModule = function SearchModule() {
      _classCallCheck(this, SearchModule);
    };

    SearchModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]]
    })], SearchModule);
    /***/
  },

  /***/
  "./src/app/common-module/table-list/list-field-type.ts":
  /*!*************************************************************!*\
    !*** ./src/app/common-module/table-list/list-field-type.ts ***!
    \*************************************************************/

  /*! exports provided: BaseField, IndexField, TextField, PriceField, DateField, StatusField, MultiStatusField, TextClickEventField, TextViewUrlField, ActionField, CheckBoxFildes */

  /***/
  function srcAppCommonModuleTableListListFieldTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseField", function () {
      return BaseField;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexField", function () {
      return IndexField;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextField", function () {
      return TextField;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PriceField", function () {
      return PriceField;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateField", function () {
      return DateField;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusField", function () {
      return StatusField;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiStatusField", function () {
      return MultiStatusField;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextClickEventField", function () {
      return TextClickEventField;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextViewUrlField", function () {
      return TextViewUrlField;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionField", function () {
      return ActionField;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckBoxFildes", function () {
      return CheckBoxFildes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var BaseField = function BaseField() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, BaseField);

      this.label = options.label || null;
      this.key = options.key || null;
      this.class = options.class || null;
    };

    var IndexField =
    /*#__PURE__*/
    function (_BaseField) {
      _inherits(IndexField, _BaseField);

      function IndexField() {
        var _this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, IndexField);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(IndexField).call(this, options));
        _this.type = 'index';
        return _this;
      }

      return IndexField;
    }(BaseField);

    var TextField =
    /*#__PURE__*/
    function (_BaseField2) {
      _inherits(TextField, _BaseField2);

      function TextField() {
        var _this2;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, TextField);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(TextField).call(this, options));
        _this2.type = 'text';
        return _this2;
      }

      return TextField;
    }(BaseField);

    var PriceField =
    /*#__PURE__*/
    function (_BaseField3) {
      _inherits(PriceField, _BaseField3);

      function PriceField() {
        var _this3;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, PriceField);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(PriceField).call(this, options));
        _this3.type = 'price';
        return _this3;
      }

      return PriceField;
    }(BaseField);

    var DateField =
    /*#__PURE__*/
    function (_BaseField4) {
      _inherits(DateField, _BaseField4);

      function DateField() {
        var _this4;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, DateField);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(DateField).call(this, options));
        _this4.type = 'date';
        return _this4;
      }

      return DateField;
    }(BaseField);

    var StatusField =
    /*#__PURE__*/
    function (_BaseField5) {
      _inherits(StatusField, _BaseField5);

      function StatusField() {
        var _this5;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, StatusField);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(StatusField).call(this, options));
        _this5.type = 'status';
        return _this5;
      }

      return StatusField;
    }(BaseField);

    var MultiStatusField =
    /*#__PURE__*/
    function (_BaseField6) {
      _inherits(MultiStatusField, _BaseField6);

      function MultiStatusField() {
        var _this6;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, MultiStatusField);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(MultiStatusField).call(this, options));
        _this6.type = 'multistatus';
        return _this6;
      }

      return MultiStatusField;
    }(BaseField);

    var TextClickEventField =
    /*#__PURE__*/
    function (_BaseField7) {
      _inherits(TextClickEventField, _BaseField7);

      function TextClickEventField() {
        var _this7;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, TextClickEventField);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(TextClickEventField).call(this, options));
        _this7.type = 'textClickEvent';
        return _this7;
      }

      return TextClickEventField;
    }(BaseField);

    var TextViewUrlField =
    /*#__PURE__*/
    function (_BaseField8) {
      _inherits(TextViewUrlField, _BaseField8);

      function TextViewUrlField() {
        var _this8;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, TextViewUrlField);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(TextViewUrlField).call(this, options));
        _this8.type = 'textUrl';
        _this8.viewUrl = options['viewUrl'] || null;
        return _this8;
      }

      return TextViewUrlField;
    }(BaseField);

    var ActionField =
    /*#__PURE__*/
    function (_BaseField9) {
      _inherits(ActionField, _BaseField9);

      function ActionField() {
        var _this9;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ActionField);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(ActionField).call(this, options));
        _this9.type = 'action';
        _this9.label = options['label'] || 'Action';
        _this9.key = options['key'] || 'action';
        _this9.class = options['class'] || 'text-right';
        _this9.view = options['view'] || null;
        _this9.edit = options['edit'] || null;
        _this9.delete = options['delete'] || null;
        return _this9;
      }

      return ActionField;
    }(BaseField);

    var CheckBoxFildes =
    /*#__PURE__*/
    function (_BaseField10) {
      _inherits(CheckBoxFildes, _BaseField10);

      function CheckBoxFildes() {
        var _this10;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, CheckBoxFildes);

        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(CheckBoxFildes).call(this, options));
        _this10.type = 'checkbox';
        _this10.label = options['label'] || "checkbox";
        _this10.class = options['class'] || 'text-right';
        return _this10;
      }

      return CheckBoxFildes;
    }(BaseField);
    /***/

  },

  /***/
  "./src/app/common-module/table-list/object-value.pipe.ts":
  /*!***************************************************************!*\
    !*** ./src/app/common-module/table-list/object-value.pipe.ts ***!
    \***************************************************************/

  /*! exports provided: ObjectValuePipe, getViewUrlPipe, getEditUrlPipe, getDeleteUrlPipe */

  /***/
  function srcAppCommonModuleTableListObjectValuePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObjectValuePipe", function () {
      return ObjectValuePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getViewUrlPipe", function () {
      return getViewUrlPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getEditUrlPipe", function () {
      return getEditUrlPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDeleteUrlPipe", function () {
      return getDeleteUrlPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ObjectValuePipe =
    /*#__PURE__*/
    function () {
      function ObjectValuePipe() {
        _classCallCheck(this, ObjectValuePipe);
      }

      _createClass(ObjectValuePipe, [{
        key: "transform",
        value: function transform(obj, args) {
          var value = obj;

          if (args) {
            var attrList = args.split('.');
            attrList.forEach(function (key) {
              if (key && value) {
                value = value[key];
              }
            });
            value = value ? value : '-';
          } else {
            value = '-';
          }

          return value;
        }
      }]);

      return ObjectValuePipe;
    }();

    ObjectValuePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'objectValue'
    })], ObjectValuePipe);

    var getViewUrlPipe =
    /*#__PURE__*/
    function () {
      function getViewUrlPipe() {
        _classCallCheck(this, getViewUrlPipe);
      }

      _createClass(getViewUrlPipe, [{
        key: "transform",
        value: function transform(obj, args) {
          var urlpath = args.path;
          var id = obj;
          var attrList = args.id.split('.');
          attrList.forEach(function (key) {
            id = id[key];
          });
          urlpath += String(id);
          return urlpath;
        }
      }]);

      return getViewUrlPipe;
    }();

    getViewUrlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'getViewUrl'
    })], getViewUrlPipe);

    var getEditUrlPipe =
    /*#__PURE__*/
    function () {
      function getEditUrlPipe() {
        _classCallCheck(this, getEditUrlPipe);
      }

      _createClass(getEditUrlPipe, [{
        key: "transform",
        value: function transform(obj, args) {
          var urlpath = args.path;
          var id = obj;
          var attrList = args.id.split('.');
          attrList.forEach(function (key) {
            id = id[key];
          });
          urlpath += String(id);
          return urlpath;
        }
      }]);

      return getEditUrlPipe;
    }();

    getEditUrlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'getEditUrl'
    })], getEditUrlPipe);

    var getDeleteUrlPipe =
    /*#__PURE__*/
    function () {
      function getDeleteUrlPipe() {
        _classCallCheck(this, getDeleteUrlPipe);
      }

      _createClass(getDeleteUrlPipe, [{
        key: "transform",
        value: function transform(obj, args) {
          var urlpath = args.path;
          var id = obj;
          var attrList = args.id.split('.');
          attrList.forEach(function (key) {
            id = id[key];
          });
          urlpath += String(id);
          return urlpath;
        }
      }]);

      return getDeleteUrlPipe;
    }();

    getDeleteUrlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'getDeleteUrl'
    })], getDeleteUrlPipe);
    /***/
  },

  /***/
  "./src/app/common-module/table-list/table-list-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/common-module/table-list/table-list-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: TableListRoutingModule */

  /***/
  function srcAppCommonModuleTableListTableListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableListRoutingModule", function () {
      return TableListRoutingModule;
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

    var routes = [];

    var TableListRoutingModule = function TableListRoutingModule() {
      _classCallCheck(this, TableListRoutingModule);
    };

    TableListRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TableListRoutingModule);
    /***/
  },

  /***/
  "./src/app/common-module/table-list/table-list.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/common-module/table-list/table-list.module.ts ***!
    \***************************************************************/

  /*! exports provided: TableListModule */

  /***/
  function srcAppCommonModuleTableListTableListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableListModule", function () {
      return TableListModule;
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


    var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./table-list/table-list.component */
    "./src/app/common-module/table-list/table-list/table-list.component.ts");
    /* harmony import */


    var _object_value_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./object-value.pipe */
    "./src/app/common-module/table-list/object-value.pipe.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _table_list_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./table-list-routing.module */
    "./src/app/common-module/table-list/table-list-routing.module.ts");

    var TableListModule = function TableListModule() {
      _classCallCheck(this, TableListModule);
    };

    TableListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_table_list_table_list_component__WEBPACK_IMPORTED_MODULE_3__["TableListComponent"], _object_value_pipe__WEBPACK_IMPORTED_MODULE_4__["ObjectValuePipe"], _object_value_pipe__WEBPACK_IMPORTED_MODULE_4__["getViewUrlPipe"], _object_value_pipe__WEBPACK_IMPORTED_MODULE_4__["getEditUrlPipe"], _object_value_pipe__WEBPACK_IMPORTED_MODULE_4__["getDeleteUrlPipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _table_list_routing_module__WEBPACK_IMPORTED_MODULE_6__["TableListRoutingModule"]],
      exports: [_table_list_table_list_component__WEBPACK_IMPORTED_MODULE_3__["TableListComponent"]]
    })], TableListModule);
    /***/
  },

  /***/
  "./src/app/common-module/table-list/table-list.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/common-module/table-list/table-list.service.ts ***!
    \****************************************************************/

  /*! exports provided: TableListService */

  /***/
  function srcAppCommonModuleTableListTableListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableListService", function () {
      return TableListService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var TableListService =
    /*#__PURE__*/
    function () {
      function TableListService(http) {
        _classCallCheck(this, TableListService);

        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
      }

      _createClass(TableListService, [{
        key: "deleteObject",
        value: function deleteObject(url) {
          return this.http.delete("".concat(this.API_URL, "/").concat(url));
        }
      }]);

      return TableListService;
    }();

    TableListService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    TableListService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], TableListService);
    /***/
  },

  /***/
  "./src/app/common-module/table-list/table-list/table-list.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/common-module/table-list/table-list/table-list.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonModuleTableListTableListTableListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1tb2R1bGUvdGFibGUtbGlzdC90YWJsZS1saXN0L3RhYmxlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/common-module/table-list/table-list/table-list.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/common-module/table-list/table-list/table-list.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: TableListComponent */

  /***/
  function srcAppCommonModuleTableListTableListTableListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableListComponent", function () {
      return TableListComponent;
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


    var _table_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../table-list.service */
    "./src/app/common-module/table-list/table-list.service.ts");
    /* harmony import */


    var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../messages */
    "./src/app/messages.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");

    var TableListComponent =
    /*#__PURE__*/
    function () {
      function TableListComponent(tableListService, dataservice) {
        _classCallCheck(this, TableListComponent);

        this.tableListService = tableListService;
        this.dataservice = dataservice;
        this.headerData = [];
        this.rawData = [];
        this.reloadEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkBoxSelectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.productItems = [];
        this.date_format = "M/d/yy";
      }

      _createClass(TableListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.dataservice.currentCompany.subscribe(function (response) {
            if (response) {
              _this11.timezone = String(response.timezone.format);
              ;
              _this11.time_format = response.time_format.label;
              _this11.date_format = response.date_format.label;
              _this11.currentCompany = response;
            }
          });
        }
      }, {
        key: "sendClickEvent",
        value: function sendClickEvent(obj) {
          this.clickEvent.emit(obj);
        }
      }, {
        key: "deleteObject",
        value: function deleteObject(dataObj, args) {
          var _this12 = this;

          swal.fire({
            title: _messages__WEBPACK_IMPORTED_MODULE_3__["errorMessage"]['delete_header_text'],
            text: _messages__WEBPACK_IMPORTED_MODULE_3__["errorMessage"]['delete_smalll_text'],
            icon: _messages__WEBPACK_IMPORTED_MODULE_3__["errorMessage"]['delete_dialogue_type'],
            showCancelButton: true,
            confirmButtonText: _messages__WEBPACK_IMPORTED_MODULE_3__["errorMessage"]['delete_confirm_button'],
            cancelButtonText: _messages__WEBPACK_IMPORTED_MODULE_3__["errorMessage"]['delete_cancel_button']
          }).then(function (result) {
            if (result.value) {
              var urlpath = args.path;
              var id = dataObj;
              var attrList = args.id.split('.');
              attrList.forEach(function (key) {
                id = id[key];
              });
              urlpath += String(id);

              _this12.tableListService.deleteObject(urlpath).subscribe(function (response) {
                if (response.success) {
                  _this12.reloadEvent.emit(true);
                }
              });
            }
          }).catch(swal.noop);
        }
      }, {
        key: "markAllProduct",
        value: function markAllProduct(checked) {
          if (checked) {
            this.productItems = this.rawData.map(function (obj, index) {
              var object = new Object();
              object = obj; // object['product_id'] = obj.product_id;
              // object['order_qty'] = obj.order_quantity;
              // object['sku_no'] = obj.sku_no;
              // object['product_name'] = obj.product_name;

              $('.pro-chk').prop('checked', true);
              return object;
            });
            this.checkBoxSelectEvent.emit(this.productItems);
          } else {
            $('.pro-chk').prop('checked', false);
            this.productItems = [];
            this.checkBoxSelectEvent.emit(this.productItems);
          }
        }
      }, {
        key: "addProduct",
        value: function addProduct(obj, key, checked) {
          if (checked) {
            var object = new Object();
            object = obj; // object['product_id'] = obj.product_id;
            // object['order_qty'] = obj.order_quantity;
            // object['sku_no'] = obj.sku_no;
            // object['product_name'] = obj.product_name;

            this.productItems.push(object);
            this.checkBoxSelectEvent.emit(this.productItems);

            if (this.productItems.length === this.productItems.length) {
              $('#checkBoxAll').prop('checked', true);
            }
          } else {
            $('#checkBoxAll').prop('checked', false);
            this.productItems = this.productItems.filter(function (object) {
              return String(object[key]) !== String(obj[key]);
            });
            this.checkBoxSelectEvent.emit(this.productItems);
          }
        }
      }]);

      return TableListComponent;
    }();

    TableListComponent.ctorParameters = function () {
      return [{
        type: _table_list_service__WEBPACK_IMPORTED_MODULE_2__["TableListService"]
      }, {
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TableListComponent.prototype, "headerData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TableListComponent.prototype, "rawData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TableListComponent.prototype, "reloadEvent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TableListComponent.prototype, "clickEvent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TableListComponent.prototype, "checkBoxSelectEvent", void 0);
    TableListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-table-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./table-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/table-list/table-list/table-list.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./table-list.component.css */
      "./src/app/common-module/table-list/table-list/table-list.component.css")).default]
    })], TableListComponent);
    /***/
  },

  /***/
  "./src/app/service/pagination.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/service/pagination.service.ts ***!
    \***********************************************/

  /*! exports provided: PaginationService */

  /***/
  function srcAppServicePaginationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationService", function () {
      return PaginationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PaginationService =
    /*#__PURE__*/
    function () {
      function PaginationService() {
        _classCallCheck(this, PaginationService);
      }

      _createClass(PaginationService, [{
        key: "getPager",
        value: function getPager(totalPages) {
          var currentPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

          if (totalPages !== undefined && totalPages !== null && totalPages !== 0) {
            // ensure current page isn't out of range
            if (currentPage < 1) {
              currentPage = 1;
            } else if (currentPage > totalPages) {
              currentPage = totalPages;
            }

            var startPage, endPage;

            if (totalPages <= 10) {
              // less than 10 total pages so show all
              startPage = 1;
              endPage = totalPages;
            } else {
              // more than 10 total pages so calculate start and end pages
              if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
              } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
              } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
              }
            } // create an array of pages to ng-repeat in the pager control


            var pages = Array.from(Array(endPage + 1 - startPage).keys()).map(function (i) {
              return startPage + i;
            }); // return object with all pager properties required by the view

            return {
              currentPage: currentPage,
              totalPages: totalPages,
              startPage: startPage,
              endPage: endPage,
              pages: pages
            };
          }
        }
      }]);

      return PaginationService;
    }();

    PaginationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PaginationService);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-company-company-list-company-list-module~pages-inbound-inbound-module~pages-master-mas~9cad3811-es5.js.map