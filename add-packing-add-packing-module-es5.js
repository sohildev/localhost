function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-packing-add-packing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/packing/add-packing/add-packing.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/packing/add-packing/add-packing.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOutboundPackingAddPackingAddPackingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col d-flex\">\r\n                <h2 class=\"mr-auto\">Add Packing </h2>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"mb-3\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"form-group row align-items-center\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Select Order Number</label>\r\n                        <ng-select style=\"width: 180px;\" placeholder=\"Select Order Number\" [items]=\"orderNumber\"\r\n                            bindLabel=\"number\">\r\n                        </ng-select>\r\n\r\n\r\n                    </div>\r\n                    <div class=\"form-group row align-items-center\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Packing Type</label>\r\n                        <ng-select style=\"width: 180px;\" placeholder=\"Select Packing Type\" [items]=\"packType\"\r\n                            bindLabel=\"type\" class=\"\">\r\n                        </ng-select>\r\n                    </div>\r\n                    <div class=\"form-group row align-items-center\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Add Products</label>\r\n                        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\r\n                            Add\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mt-4\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"border p-2\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-6\">\r\n                                <h6>John Doe</h6>\r\n                            </div>\r\n                            <div class=\"col-6 text-right\">\r\n                                <div>Pallet Number: 78959197880000709972</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row mt-2\">\r\n                            <div class=\"col-md-6\">\r\n                                <p class=\"mb-1\">Order No. <span>11722</span></p>\r\n                                <p class=\"mb-1\">Item No. <span>11722</span></p>\r\n                                <p class=\"mb-1\">Description. <span>11722</span></p>\r\n                            </div>\r\n                            <div class=\"col-md-6 text-right\">\r\n                                <div class=\"w-25 ml-auto\">\r\n                                    Akshya Nagar 1st Block 1st Cross,\r\n                                    Rammurthy nagar,\r\n                                    Bangalore-560016\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"mt-2\">\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table\">\r\n                                <thead class=\"thead-dark\">\r\n                                    <tr>\r\n                                        <th width=\"10%\">No.</th>\r\n                                        <th width=\"15%\">Product Code</th>\r\n                                        <th width=\"65%\">Product Details</th>\r\n                                        <th width=\"10%\">Product Total</th>\r\n\r\n                                    </tr>\r\n\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let prodLists of productList; let i =index\">\r\n                                        <td>{{i + 1}}</td>\r\n                                        <td>{{prodLists.prodCode}}</td>\r\n                                        <td>{{prodLists.prodDet}}</td>\r\n                                        <td class=\"text-center\">{{prodLists.prodTotal}}</td>\r\n                                    </tr>\r\n\r\n\r\n\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n        <div class=\"text-right border-top py-4 card-footer\">\r\n            <a href=\"/outbound/packing\" class=\"btn btn-light\">Cancel</a>\r\n            <button type=\"submit\" class=\"btn btn-secondary ml-2\">Done</button></div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Product Lists</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"px-3\">\r\n                    <div class=\"row border-bottom pb-2\">\r\n                        <div class=\"col-1\">\r\n                        </div>\r\n                        <div class=\"col-2 font-weight-bold\"> Code</div>\r\n                        <div class=\"col-9 font-weight-bold\">Product Name</div>\r\n\r\n                    </div>\r\n                    <div class=\"row border-bottom py-2\" *ngFor=\"let allProds of allProducts\">\r\n                        <div class=\"col-1\">\r\n                            <div class=\"form-check\">\r\n                                <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-2\">{{allProds.prodCode}}</div>\r\n                        <div class=\"col-9\">{{allProds.prodName}}</div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-light\" data-dismiss=\"modal\">Cancel</button>\r\n                <button type=\"button\" class=\"btn btn-primary\">Add Product</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/outbound/packing/add-packing/add-packing.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/outbound/packing/add-packing/add-packing.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AddPackingComponent */

  /***/
  function srcAppPagesOutboundPackingAddPackingAddPackingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPackingComponent", function () {
      return AddPackingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AddPackingComponent =
    /*#__PURE__*/
    function () {
      function AddPackingComponent() {
        _classCallCheck(this, AddPackingComponent);

        this.orderNumber = [{
          id: 1,
          number: '00515'
        }, {
          id: 2,
          number: '00522'
        }, {
          id: 3,
          number: '00523'
        }, {
          id: 4,
          number: '00524'
        }, {
          id: 5,
          number: '00525'
        }];
        this.packType = [{
          id: 1,
          type: 'PCS'
        }, {
          id: 2,
          type: 'BOX'
        }];
        this.productList = [{
          id: 1,
          prodCode: '05284',
          prodDet: 'ddsf 45454 ddf',
          prodTotal: '1'
        }, {
          id: 2,
          prodCode: '05285',
          prodDet: 'ddsf 45454 ddf',
          prodTotal: '2'
        }, {
          id: 3,
          prodCode: '05286',
          prodDet: 'ddsf 45454 ddf',
          prodTotal: '4'
        }, {
          id: 4,
          prodCode: '05287',
          prodDet: 'ddsf 45454 ddf',
          prodTotal: '1'
        }, {
          id: 5,
          prodCode: '05288',
          prodDet: 'ddsf 45454 ddf',
          prodTotal: '1'
        }];
        this.allProducts = [{
          id: 1,
          prodCode: '05284',
          prodName: 'Product name 1'
        }, {
          id: 2,
          prodCode: '05284',
          prodName: 'Product name 2'
        }, {
          id: 3,
          prodCode: '05284',
          prodName: 'Product name 3'
        }, {
          id: 4,
          prodCode: '05284',
          prodName: 'Product name 4'
        }, {
          id: 5,
          prodCode: '05284',
          prodName: 'Product name 5'
        }];
      }

      _createClass(AddPackingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddPackingComponent;
    }();

    AddPackingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-packing',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-packing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/packing/add-packing/add-packing.component.html")).default
    })], AddPackingComponent);
    /***/
  },

  /***/
  "./src/app/pages/outbound/packing/add-packing/add-packing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/outbound/packing/add-packing/add-packing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: AddPackingModule */

  /***/
  function srcAppPagesOutboundPackingAddPackingAddPackingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPackingModule", function () {
      return AddPackingModule;
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


    var _add_packing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-packing.component */
    "./src/app/pages/outbound/packing/add-packing/add-packing.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var routes = [{
      path: '',
      component: _add_packing_component__WEBPACK_IMPORTED_MODULE_3__["AddPackingComponent"]
    }];

    var AddPackingModule = function AddPackingModule() {
      _classCallCheck(this, AddPackingModule);
    };

    AddPackingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_add_packing_component__WEBPACK_IMPORTED_MODULE_3__["AddPackingComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
    })], AddPackingModule);
    /***/
  }
}]);
//# sourceMappingURL=add-packing-add-packing-module-es5.js.map