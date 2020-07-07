function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-stock-product-stock-module"], {
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/add-damage-product/add-damage-product.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/add-damage-product/add-damage-product.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOperationProductStockAddDamageProductAddDamageProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"page-header border-b\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h2 class=\"mr-auto\">{{PageTitle}}</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\n      <div class=\"card-body\">\n\n        <div>\n          <div class=\"form-group row\">\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\"> Bin Location <em>*</em> </label>\n            <div class=\"col-md-5\">\n              <ng-select [formControl]=\"addForm.controls['location_detail']\" [items]=\"binArray\" bindLabel=\"label\"\n                bindValue=\"value\" placeholder=\"Select Damage Bin\" (change)=\"getProducts($event)\">\n              </ng-select>\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <div class=\"form-group row\">\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\"> Product <em>*</em> </label>\n            <div class=\"col-md-5\">\n              <ng-select [formControl]=\"addForm.controls['product_id']\" [items]=\"productArray\" bindLabel=\"label\"\n                bindValue=\"value\" placeholder=\"Select Damage product\" (change)=\"setProductObj($event)\">\n              </ng-select>\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <div class=\"form-group row\">\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\"> Total Product Quantity in Bin </label>\n            <div class=\"col-md-5\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Total Products in bin\" readonly\n                [value]=\"selectedProductQty\">\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <div class=\"form-group row\">\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\"> Product Damage Quantity <em>*</em> </label>\n            <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.qty}\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter the quantity\"\n                [formControl]=\"addForm.controls['qty']\" number (input)=\"quantityCheck()\">\n            </div>\n            <span *ngIf=\"formErrors.qty\" class=\"help-block\" [innerHTML]=\"formErrors.qty\"></span>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"text-right border-top py-4 mt-5 card-footer\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"back()\">Cancel</button>\n        <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\n      </div>\n    </form>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock-list/product-stock-list.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock-list/product-stock-list.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOperationProductStockProductStockListProductStockListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n    <div class=\"page-header border-b\">\r\n        <div class=\"row m-0\">\r\n            <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n            <div class=\"ml-3\">\r\n                <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n            </div>\r\n            <div class=\"ml-3\">\r\n                <app-btn-add [btnName]=\"'Add Damage Product'\" [editData]=\"'/stock/search-product/add-damage'\">\r\n                </app-btn-add>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link active\" id=\"productStock-tab\" data-toggle=\"tab\" href=\"#productStock\" role=\"tab\"\r\n                        aria-controls=\"productStock\" [routerLink]=\"['/stock/search-product']\"\r\n                        routerLinkActive=\"router-link-active\" aria-selected=\"true\">Product Stock</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"productStock\" aria-selected=\"true\"\r\n                        [routerLink]=\"['/stock/search-product/summary']\" routerLinkActive=\"router-link-active\">Stock\r\n                        Summary</a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"tab-content\" id=\"myTabContent\">\r\n                <div class=\"tab-pane fade show active\" id=\"productStock\" role=\"tabpanel\"\r\n                    aria-labelledby=\"productStock-tab\">\r\n                    <div class=\"table-responsive-md mt-3\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"thead-dark\">\r\n                                <tr>\r\n                                    <th>Product</th>\r\n                                    <th>SKU</th>\r\n                                    <th>Category</th>\r\n                                    <th>Qty</th>\r\n                                    <th>Bin</th>\r\n                                    <th>Bin Location</th>\r\n                                    <th>Stock In Date</th>\r\n                                    <th>Stock In Days</th>\r\n                                    <th>Stock Out Date</th>\r\n                                    <th>Status</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of objectArray; let i=index\">\r\n                                    <td>{{item?.product?.label ? item?.product?.label :\"-\"}}</td>\r\n                                    <td>{{item?.product?.sku_no ? item?.product?.sku_no :\"-\"}}</td>\r\n                                    <td>{{item?.category?.label ? item?.category?.label :\"-\"}}</td>\r\n                                    <td>{{item?.qty}} {{item?.unit?.label}}</td>\r\n                                    <td>{{item?.bin?.bin_code ? item?.bin?.bin_code :\"-\"}}</td>\r\n                                    <td>{{item?.location_code}}</td>\r\n                                    <td>{{item?.stock_datetime | date:date_format :timezone}} </td>\r\n                                    <td>{{calcDate(item.stock_datetime)}}</td>\r\n                                    <td>\r\n                                        <span *ngIf=\"item?.stock_out_date;else outdate\">\r\n                                            {{item?.stock_out_date | date:date_format :timezone}}\r\n                                        </span>\r\n                                        <ng-template #outdate>\r\n                                            <span> - </span>\r\n                                        </ng-template>\r\n                                    </td>\r\n                                    <td>\r\n                                        <span class=\"badge\" [ngClass]=\"classes[item.status.value]\">\r\n                                            {{item.status.label}}\r\n                                        </span>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr *ngIf=\"!loadingState && objectArray?.length == 0\">\r\n                                    <td colspan=\"10\">No records found</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\r\n                        (onPageChange)=\"getPage($event)\">\r\n                    </pagination>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock-summary-list/product-stock-summary-list.component.html":
  /*!**********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock-summary-list/product-stock-summary-list.component.html ***!
    \**********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOperationProductStockProductStockSummaryListProductStockSummaryListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <div class=\"page-header border-b\">\n        <div class=\"row m-0\">\n            <h2 class=\"mr-auto\">{{PageTitle}}</h2>\n            <div class=\"ml-3\">\n                <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\n            </div>\n\n        </div>\n\n    </div>\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" id=\"productStock-tab\" data-toggle=\"tab\" href=\"#productStock\" role=\"tab\"\n                        aria-controls=\"productStock\" [routerLink]=\"['/stock/search-product']\" routerLinkActive=\"router-link-active\" aria-selected=\"true\">Product Stock</a>\n                </li>\n                \n                <li class=\"nav-item\">\n                    <a class=\"nav-link active\" id=\"productStocksummary-tab\" data-toggle=\"tab\" href=\"#productStocksummary\" role=\"tab\"\n                        aria-controls=\"productStocksummary\"  aria-selected=\"true\">Stock Summary</a>\n                </li>\n\n            </ul>\n            <div class=\"tab-content\" id=\"myTabContent\">\n                <div class=\"tab-pane fade show active\" id=\"productStocksummary\" role=\"tabpanel\"\n                    aria-labelledby=\"productStocksummary-tab\">\n                    <div class=\"table-responsive-md mt-3\">\n                        <table class=\"table\">\n                            <thead class=\"thead-dark\">\n                                <tr>\n                                    <th>Product</th>\n                                    <th>SKU</th>\n                                    <th>Category</th>\n                                    <th>Qty</th>\n                                    <th>Volume Total</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let item of objectArray; let i=index\">\n                                    <td>{{item?.product?.label ? item?.product?.label :\"-\"}}</td>\n                                    <td>{{item?.product?.sku_no ? item?.product?.sku_no :\"-\"}}</td>\n                                    <td>{{item?.category?.label ? item?.category?.label :\"-\"}}</td>\n                                    <td>{{item?.qty}} {{item?.unit?.label}}</td>\n                                    <td>{{item?.volume}}</td>\n                                </tr>\n                                <tr *ngIf=\"!loadingState && objectArray?.length == 0\">\n                                    <td colspan=\"5\">No records found</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\n                        (onPageChange)=\"getPage($event)\">\n                    </pagination>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
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
  "./src/app/pages/operation/product-stock/add-damage-product/add-damage-product.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/pages/operation/product-stock/add-damage-product/add-damage-product.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: AddDamageProductComponent */

  /***/
  function srcAppPagesOperationProductStockAddDamageProductAddDamageProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddDamageProductComponent", function () {
      return AddDamageProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/product-stock.service */
    "./src/app/service/product-stock.service.ts");

    var AddDamageProductComponent =
    /*#__PURE__*/
    function () {
      function AddDamageProductComponent(fb, location, productDamageService) {
        _classCallCheck(this, AddDamageProductComponent);

        this.fb = fb;
        this.location = location;
        this.productDamageService = productDamageService;
        this.binLocation = '';
        this.showLoader = false;
        this.binArray = [];
        this.loadingState = false;
        this.productArray = [];
        this.selectedProductQty = 0;
        this.PageTitle = 'Add Damage Product';
        this.formErrors = {
          api_error: null,
          qty: null
        };
        this.addForm = this.fb.group({
          price: [null],
          status_id: [null],
          qty: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
          product_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
          location_detail: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
      }

      _createClass(AddDamageProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMasterData();
        }
      }, {
        key: "submitForm",
        value: function submitForm(formData) {
          var _this = this;

          if (formData.valid) {
            this.showLoader = true;
            var data = formData.value;
            data.location_code = this.binLocation;
            this.productDamageService.addDamageProduct(formData.value).subscribe(function (response) {
              _this.showLoader = false;

              if (response.success) {
                _this.back();
              } else {
                response.error.map(function (obj) {
                  console.log(obj);
                });
              }
            }, function (error) {
              _this.showLoader = false;
            });
          }
        }
      }, {
        key: "getMasterData",
        value: function getMasterData() {
          var _this2 = this;

          this.productDamageService.getProductDamageMasterData().subscribe(function (response) {
            _this2.binArray = response.data.bin;
          });
        }
      }, {
        key: "getProducts",
        value: function getProducts(bin) {
          var _this3 = this;

          this.binLocation = bin.label;
          this.productDamageService.getDamageProduct({
            bin_id: bin.value.bin_id
          }).subscribe(function (response) {
            _this3.productArray = response.data.product;
          });
        }
      }, {
        key: "setProductObj",
        value: function setProductObj(product) {
          this.selectedProductQty = product.quantity;
        }
      }, {
        key: "quantityCheck",
        value: function quantityCheck() {
          if (Number(this.addForm.value.qty) <= this.selectedProductQty) {
            this.formErrors.qty = null;
            this.addForm.controls.qty.setErrors(null);
          } else {
            this.formErrors.qty = '* Please Enter equal or small value in Total Quantity';
            this.addForm.controls.qty.setErrors({
              incorrect: true
            });
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }]);

      return AddDamageProductComponent;
    }();

    AddDamageProductComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
      }, {
        type: src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_4__["ProductStockService"]
      }];
    };

    AddDamageProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-add-damage-product',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-damage-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/add-damage-product/add-damage-product.component.html")).default
    })], AddDamageProductComponent);
    /***/
  },

  /***/
  "./src/app/pages/operation/product-stock/product-stock-list/product-stock-list.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/pages/operation/product-stock/product-stock-list/product-stock-list.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: ProductStockListComponent */

  /***/
  function srcAppPagesOperationProductStockProductStockListProductStockListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductStockListComponent", function () {
      return ProductStockListComponent;
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


    var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/pagination.service */
    "./src/app/service/pagination.service.ts");
    /* harmony import */


    var src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/product-stock.service */
    "./src/app/service/product-stock.service.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");

    var ProductStockListComponent =
    /*#__PURE__*/
    function () {
      function ProductStockListComponent(paginationService, productStockService, dataService) {
        _classCallCheck(this, ProductStockListComponent);

        this.paginationService = paginationService;
        this.productStockService = productStockService;
        this.dataService = dataService;
        this.PageTitle = "Product Stock";
        this.loadform = false;
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.permissionObject = null;
        this.showPagination = false;
        this.date_format = "M/d/yy";
        this.classes = {
          0: 'badge-info',
          1: 'badge-danger',
          2: 'badge-warning text-white',
          3: 'badge-success',
          4: 'badge-primary'
        }; //For Dynamic List

        this.headerData = [];
      }

      _createClass(ProductStockListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          // this.dataService.permission.subscribe((perms) => {
          //   this.permissionObject = perms['product_stock'];
          // });
          this.dataService.currentCompany.subscribe(function (response) {
            if (response) {
              _this4.timezone = String(response.timezone.format);
              ;
              _this4.time_format = response.time_format.label;
              _this4.date_format = response.date_format.label;
              _this4.currentCompany = response;
            }
          });
          this.loadform = false;
          this.getObjects();
        }
      }, {
        key: "getObjects",
        value: function getObjects() {
          var _this5 = this;

          var params = {
            page: this.currentPage
          };

          if (this.searchText) {
            params.search = this.searchText;
          }

          this.productStockService.getProductStockList(params).subscribe(function (response) {
            _this5.loadingState = false;

            if (response.success) {
              _this5.objectArray = response.data.list ? response.data.list : [];
              _this5.showPagination = true;
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
        key: "getPage",
        value: function getPage(page) {
          this.currentPage = page;
          this.getObjects();
        }
      }, {
        key: "searchObject",
        value: function searchObject(text) {
          this.searchText = text;
          this.currentPage = 1;
          this.getObjects();
        }
      }, {
        key: "calcDate",
        value: function calcDate(date1) {
          date1 = new Date(date1);

          if (date1) {
            var date2 = new Date();
            var diff = Math.floor(date2.getTime() - date1);
            var day = 1000 * 60 * 60 * 24;
            var ndays = Math.floor(diff / day);
            var years = Math.floor(ndays / 365);
            ndays = ndays - 365 * years;
            var months = Math.floor(ndays / 30);
            var days = ndays - Math.floor(months * 30);
            var message = '';

            if (days && days != undefined && days != null) {
              message = Math.abs(days) + " days ";
            }

            if (months) {
              message += Math.abs(months) + " months ";
            }

            if (years) {
              message += Math.abs(years) + " years ";
            }

            if (message) {
              message += "ago \n";
              return 'Last  ' + message;
            } else {
              return "Today";
            }
          }
        }
      }]);

      return ProductStockListComponent;
    }();

    ProductStockListComponent.ctorParameters = function () {
      return [{
        type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"]
      }, {
        type: src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_3__["ProductStockService"]
      }, {
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }];
    };

    ProductStockListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-stock-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-stock-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock-list/product-stock-list.component.html")).default
    })], ProductStockListComponent);
    /***/
  },

  /***/
  "./src/app/pages/operation/product-stock/product-stock-summary-list/product-stock-summary-list.component.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/pages/operation/product-stock/product-stock-summary-list/product-stock-summary-list.component.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: ProductStockSummaryListComponent */

  /***/
  function srcAppPagesOperationProductStockProductStockSummaryListProductStockSummaryListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductStockSummaryListComponent", function () {
      return ProductStockSummaryListComponent;
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


    var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/pagination.service */
    "./src/app/service/pagination.service.ts");
    /* harmony import */


    var src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/product-stock.service */
    "./src/app/service/product-stock.service.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");

    var ProductStockSummaryListComponent =
    /*#__PURE__*/
    function () {
      function ProductStockSummaryListComponent(paginationService, productStockService, dataService) {
        _classCallCheck(this, ProductStockSummaryListComponent);

        this.paginationService = paginationService;
        this.productStockService = productStockService;
        this.dataService = dataService;
        this.PageTitle = "Stock Summary";
        this.loadform = false;
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.permissionObject = null;
        this.showPagination = false;
        this.date_format = "M/d/yy"; //For Dynamic List

        this.headerData = [];
      }

      _createClass(ProductStockSummaryListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          // this.dataService.permission.subscribe((perms) => {
          //   this.permissionObject = perms['product_stock'];
          // });
          this.dataService.currentCompany.subscribe(function (response) {
            if (response) {
              _this6.timezone = String(response.timezone.format);
              ;
              _this6.time_format = response.time_format.label;
              _this6.date_format = response.date_format.label;
              _this6.currentCompany = response;
            }
          });
          this.loadform = false;
          this.getObjects();
        }
      }, {
        key: "getObjects",
        value: function getObjects() {
          var _this7 = this;

          var params = {
            page: this.currentPage
          };

          if (this.searchText) {
            params.search = this.searchText;
          }

          this.productStockService.getProductStockSummeryList(params).subscribe(function (response) {
            _this7.loadingState = false;

            if (response.success) {
              _this7.objectArray = response.data.list ? response.data.list : [];
              _this7.showPagination = true;
              _this7.pagination = _this7.paginationService.getPager(response.data.pagination['total_page'], _this7.currentPage);
            } else {
              _this7.objectArray = [];
              _this7.pagination = null;
            }
          }, function (error) {
            _this7.loadingState = false;
            _this7.objectArray = [];
            _this7.pagination = null;
          });
        }
      }, {
        key: "getPage",
        value: function getPage(page) {
          this.currentPage = page;
          this.getObjects();
        }
      }, {
        key: "searchObject",
        value: function searchObject(text) {
          this.searchText = text;
          this.currentPage = 1;
          this.getObjects();
        }
      }]);

      return ProductStockSummaryListComponent;
    }();

    ProductStockSummaryListComponent.ctorParameters = function () {
      return [{
        type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"]
      }, {
        type: src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_3__["ProductStockService"]
      }, {
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }];
    };

    ProductStockSummaryListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-stock-summary-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-stock-summary-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock-summary-list/product-stock-summary-list.component.html")).default
    })], ProductStockSummaryListComponent);
    /***/
  },

  /***/
  "./src/app/pages/operation/product-stock/product-stock.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/operation/product-stock/product-stock.module.ts ***!
    \***********************************************************************/

  /*! exports provided: routes, ProductStockModule */

  /***/
  function srcAppPagesOperationProductStockProductStockModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductStockModule", function () {
      return ProductStockModule;
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


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/common-module/pagination/pagination.module */
    "./src/app/common-module/pagination/pagination.module.ts");
    /* harmony import */


    var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/common-module/search/search.module */
    "./src/app/common-module/search/search.module.ts");
    /* harmony import */


    var src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/service/product-stock.service */
    "./src/app/service/product-stock.service.ts");
    /* harmony import */


    var _product_stock_list_product_stock_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./product-stock-list/product-stock-list.component */
    "./src/app/pages/operation/product-stock/product-stock-list/product-stock-list.component.ts");
    /* harmony import */


    var _product_stock_summary_list_product_stock_summary_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./product-stock-summary-list/product-stock-summary-list.component */
    "./src/app/pages/operation/product-stock/product-stock-summary-list/product-stock-summary-list.component.ts");
    /* harmony import */


    var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/common-module/btn-add/btn-add.module */
    "./src/app/common-module/btn-add/btn-add.module.ts");
    /* harmony import */


    var _add_damage_product_add_damage_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./add-damage-product/add-damage-product.component */
    "./src/app/pages/operation/product-stock/add-damage-product/add-damage-product.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/shared/form-validation/form-validation.module */
    "./src/app/shared/form-validation/form-validation.module.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");

    var routes = [{
      path: '',
      component: _product_stock_list_product_stock_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductStockListComponent"],
      data: {
        title: 'product_stock_list'
      }
    }, {
      path: 'summary',
      component: _product_stock_summary_list_product_stock_summary_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductStockSummaryListComponent"],
      data: {
        title: 'product_summary_list'
      }
    }, {
      path: 'add-damage',
      component: _add_damage_product_add_damage_product_component__WEBPACK_IMPORTED_MODULE_11__["AddDamageProductComponent"],
      data: {
        title: 'add_damage_product'
      }
    }];

    var ProductStockModule = function ProductStockModule() {
      _classCallCheck(this, ProductStockModule);
    };

    ProductStockModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_product_stock_list_product_stock_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductStockListComponent"], _product_stock_summary_list_product_stock_summary_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductStockSummaryListComponent"], _add_damage_product_add_damage_product_component__WEBPACK_IMPORTED_MODULE_11__["AddDamageProductComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_10__["BtnAddModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"], src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_13__["FormValidationModule"]],
      providers: [src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_7__["ProductStockService"]]
    })], ProductStockModule);
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
  },

  /***/
  "./src/app/service/product-stock.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/service/product-stock.service.ts ***!
    \**************************************************/

  /*! exports provided: ProductStockService */

  /***/
  function srcAppServiceProductStockServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductStockService", function () {
      return ProductStockService;
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

    var ProductStockService =
    /*#__PURE__*/
    function () {
      function ProductStockService(http) {
        _classCallCheck(this, ProductStockService);

        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
      }

      _createClass(ProductStockService, [{
        key: "getProductStockList",
        value: function getProductStockList(param) {
          return this.http.get("".concat(this.API_URL, "/product-stock/list"), {
            params: param
          });
        }
      }, {
        key: "getProductStockSummeryList",
        value: function getProductStockSummeryList(param) {
          return this.http.get("".concat(this.API_URL, "/product-stock/summary-list"), {
            params: param
          });
        }
      }, {
        key: "getProductDamageMasterData",
        value: function getProductDamageMasterData() {
          return this.http.get("".concat(this.API_URL, "/product-stock/damage-master-data"));
        }
      }, {
        key: "getDamageProduct",
        value: function getDamageProduct(param) {
          return this.http.get("".concat(this.API_URL, "/product-stock/damage-master-data"), {
            params: param
          });
        }
      }, {
        key: "addDamageProduct",
        value: function addDamageProduct(data) {
          return this.http.post("".concat(this.API_URL, "/product-stock/add-damage-product"), data);
        }
      }]);

      return ProductStockService;
    }();

    ProductStockService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ProductStockService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], ProductStockService);
    /***/
  }
}]);
//# sourceMappingURL=product-stock-product-stock-module-es5.js.map