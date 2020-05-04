function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-bin-transfer-add-bin-transfer-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOperationAddBinTransferAddBinTransferComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <form class=\"form-horizontal\" role=\"form\">\r\n            <div class=\"card-body\">\r\n                <div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Transfer Order No.</label>\r\n                        <div class=\"col-md-5\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">From Bin <em>*</em></label>\r\n                        <div class=\"col-md-5\">\r\n                            <select class=\"form-control\">\r\n                                <option>Select Bin</option>\r\n                                <option>B1</option>\r\n                                <option>B2</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">SKU <em>*</em></label>\r\n                        <div class=\"col-md-5\">\r\n                            <select class=\"form-control\">\r\n                                <option>Select Product</option>\r\n                                <option>Zone A</option>\r\n                                <option>Zone B</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Total Quantity\r\n                            <em>*</em></label>\r\n                        <div class=\"col-md-5\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">To Bin <em>*</em></label>\r\n                        <div class=\"col-md-5\">\r\n                            <select class=\"form-control\">\r\n                                <option>Select Bin</option>\r\n                                <option>B1</option>\r\n                                <option>B2</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Location</label>\r\n                        <div class=\"col-md-5\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"\" disabled>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n                <button type=\"button\" class=\"btn btn-light\" routerLink=\"/inbound/registeration\">Cancel</button>\r\n                <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n            </div>\r\n        </form>\r\n        \r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOperationAddBinTransferAddBinTransferComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wZXJhdGlvbi9hZGQtYmluLXRyYW5zZmVyL2FkZC1iaW4tdHJhbnNmZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AddBinTransferComponent */

  /***/
  function srcAppPagesOperationAddBinTransferAddBinTransferComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddBinTransferComponent", function () {
      return AddBinTransferComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AddBinTransferComponent =
    /*#__PURE__*/
    function () {
      function AddBinTransferComponent() {
        _classCallCheck(this, AddBinTransferComponent);

        this.PageTitle = "Generate Bin Transfer Order";
      }

      _createClass(AddBinTransferComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddBinTransferComponent;
    }();

    AddBinTransferComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-bin-transfer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-bin-transfer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-bin-transfer.component.css */
      "./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.css")).default]
    })], AddBinTransferComponent);
    /***/
  },

  /***/
  "./src/app/pages/operation/add-bin-transfer/add-bin-transfer.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/operation/add-bin-transfer/add-bin-transfer.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: AddBinTransferModule */

  /***/
  function srcAppPagesOperationAddBinTransferAddBinTransferModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddBinTransferModule", function () {
      return AddBinTransferModule;
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


    var _add_bin_transfer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-bin-transfer.component */
    "./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.ts");

    var routes = [{
      path: '',
      component: _add_bin_transfer_component__WEBPACK_IMPORTED_MODULE_4__["AddBinTransferComponent"]
    }];

    var AddBinTransferModule = function AddBinTransferModule() {
      _classCallCheck(this, AddBinTransferModule);
    };

    AddBinTransferModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_add_bin_transfer_component__WEBPACK_IMPORTED_MODULE_4__["AddBinTransferComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
    })], AddBinTransferModule);
    /***/
  }
}]);
//# sourceMappingURL=add-bin-transfer-add-bin-transfer-module-es5.js.map