function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-config-product-config-list-product-config-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/product-config/product-config-list/product-config-list.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/product-config/product-config-list/product-config-list.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInboundProductConfigProductConfigListProductConfigListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <div class=\"page-header\">\n      <div class=\"row\">\n        <div class=\"col d-flex\">\n          <h2 class=\"mr-auto\">{{PageTitle}}</h2>\n          <div class=\"ml-3\">\n            <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\n          </div>\n          <div class=\"ml-3\">\n            <app-btn-add [btnName]=\"'Add Product Configuration'\" [editData]=\"'/inbound/product-config/add'\"></app-btn-add>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\n        </app-table-list>\n        <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\n          (onPageChange)=\"getPage($event)\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n  ";
    /***/
  },

  /***/
  "./src/app/pages/inbound/product-config/product-config-list/product-config-list.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/pages/inbound/product-config/product-config-list/product-config-list.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: ProductConfigListComponent */

  /***/
  function srcAppPagesInboundProductConfigProductConfigListProductConfigListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductConfigListComponent", function () {
      return ProductConfigListComponent;
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


    var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common-module/table-list/list-field-type */
    "./src/app/common-module/table-list/list-field-type.ts");
    /* harmony import */


    var src_app_service_product_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/product-config.service */
    "./src/app/service/product-config.service.ts");

    var ProductConfigListComponent =
    /*#__PURE__*/
    function () {
      function ProductConfigListComponent(paginationService, productconfigService) {
        _classCallCheck(this, ProductConfigListComponent);

        this.paginationService = paginationService;
        this.productconfigService = productconfigService;
        this.PageTitle = "Manage Product Congiguration";
        this.loadform = false;
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.permissionObject = null;
        this.showPagination = false; //For Dynamic List

        this.headerData = [];
      }

      _createClass(ProductConfigListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.dataService.permission.subscribe((perms) => {
          //   this.permissionObject = perms['self'];
          // });
          this.loadform = false;
          this.setHeaderData();
          this.getObjects();
        }
      }, {
        key: "setHeaderData",
        value: function setHeaderData() {
          this.headerData.push(new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Order Number",
            key: "order.po_no"
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Product",
            key: "product.label"
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Registration Type",
            key: "registration_type.label"
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Serial",
            key: "serial.label"
          }));
          var canEdit = true;
          var canDelete = true;
          var actions = {};

          if (canEdit) {
            actions['edit'] = {
              path: '/inbound/product-config/edit/',
              id: 'product_register_config_id'
            };
          }

          if (canDelete) {
            actions['delete'] = {
              path: 'product-config/',
              id: 'product_register_config_id'
            };
          }

          var actionColom = new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["ActionField"](actions);
          this.headerData.push(actionColom);
        }
      }, {
        key: "getObjects",
        value: function getObjects() {
          var _this = this;

          var params = {
            page: this.currentPage
          };

          if (this.searchText) {
            params.search = this.searchText;
          }

          this.productconfigService.getProductConfigList(params).subscribe(function (response) {
            _this.loadingState = false;

            if (response.success) {
              _this.objectArray = response.data.list ? response.data.list : [];
              _this.showPagination = true;
              _this.pagination = _this.paginationService.getPager(response.data.pagination['total_page'], _this.currentPage);
            } else {
              _this.objectArray = [];
              _this.pagination = null;
            }
          }, function (error) {
            _this.loadingState = false;
            _this.objectArray = [];
            _this.pagination = null;
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
        key: "onReloadEvent",
        value: function onReloadEvent() {
          this.getObjects();
        }
      }]);

      return ProductConfigListComponent;
    }();

    ProductConfigListComponent.ctorParameters = function () {
      return [{
        type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"]
      }, {
        type: src_app_service_product_config_service__WEBPACK_IMPORTED_MODULE_4__["ProductConfigService"]
      }];
    };

    ProductConfigListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-config-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-config-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbound/product-config/product-config-list/product-config-list.component.html")).default
    })], ProductConfigListComponent);
    /***/
  },

  /***/
  "./src/app/pages/inbound/product-config/product-config-list/product-config-list.module.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/pages/inbound/product-config/product-config-list/product-config-list.module.ts ***!
    \************************************************************************************************/

  /*! exports provided: ProductConfigListModule */

  /***/
  function srcAppPagesInboundProductConfigProductConfigListProductConfigListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductConfigListModule", function () {
      return ProductConfigListModule;
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


    var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/common-module/search/search.module */
    "./src/app/common-module/search/search.module.ts");
    /* harmony import */


    var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/common-module/btn-add/btn-add.module */
    "./src/app/common-module/btn-add/btn-add.module.ts");
    /* harmony import */


    var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/common-module/table-list/table-list.module */
    "./src/app/common-module/table-list/table-list.module.ts");
    /* harmony import */


    var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/common-module/pagination/pagination.module */
    "./src/app/common-module/pagination/pagination.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _product_config_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./product-config-list.component */
    "./src/app/pages/inbound/product-config/product-config-list/product-config-list.component.ts");
    /* harmony import */


    var src_app_service_product_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/service/product-config.service */
    "./src/app/service/product-config.service.ts");

    var routes = [{
      path: '',
      component: _product_config_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductConfigListComponent"],
      data: {
        title: 'product_config_list'
      }
    }, {
      path: 'add',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | product-config-add-product-config-add-module */
        [__webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~add-configuration-add-configuration-module~add-orde~d3e4c59f"), __webpack_require__.e("common"), __webpack_require__.e("product-config-add-product-config-add-module")]).then(__webpack_require__.bind(null,
        /*! ../product-config-add/product-config-add.module */
        "./src/app/pages/inbound/product-config/product-config-add/product-config-add.module.ts")).then(function (m) {
          return m.ProductConfigAddModule;
        });
      },
      data: {
        title: 'add_product_config'
      }
    }, {
      path: 'edit/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | product-config-add-product-config-add-module */
        [__webpack_require__.e("default~add-bin-transfer-add-bin-transfer-module~add-configuration-add-configuration-module~add-orde~d3e4c59f"), __webpack_require__.e("common"), __webpack_require__.e("product-config-add-product-config-add-module")]).then(__webpack_require__.bind(null,
        /*! ../product-config-add/product-config-add.module */
        "./src/app/pages/inbound/product-config/product-config-add/product-config-add.module.ts")).then(function (m) {
          return m.ProductConfigAddModule;
        });
      },
      data: {
        title: 'edit_product_config'
      }
    }];

    var ProductConfigListModule = function ProductConfigListModule() {
      _classCallCheck(this, ProductConfigListModule);
    };

    ProductConfigListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_product_config_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductConfigListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_6__["TableListModule"], src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchModule"], src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__["BtnAddModule"], src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]],
      providers: [src_app_service_product_config_service__WEBPACK_IMPORTED_MODULE_10__["ProductConfigService"]]
    })], ProductConfigListModule);
    /***/
  },

  /***/
  "./src/app/service/product-config.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/service/product-config.service.ts ***!
    \***************************************************/

  /*! exports provided: ProductConfigService */

  /***/
  function srcAppServiceProductConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductConfigService", function () {
      return ProductConfigService;
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

    var ProductConfigService =
    /*#__PURE__*/
    function () {
      function ProductConfigService(http) {
        _classCallCheck(this, ProductConfigService);

        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
      }

      _createClass(ProductConfigService, [{
        key: "getProductConfigList",
        value: function getProductConfigList(param) {
          return this.http.get("".concat(this.API_URL, "/product-config"), {
            params: param
          });
        }
      }, {
        key: "addProductConfig",
        value: function addProductConfig(data) {
          return this.http.post("".concat(this.API_URL, "/product-config"), data);
        }
      }, {
        key: "editProductConfig",
        value: function editProductConfig(id, data) {
          return this.http.put("".concat(this.API_URL, "/product-config/").concat(id), data);
        }
      }, {
        key: "getProductConfigById",
        value: function getProductConfigById(id) {
          var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return this.http.get("".concat(this.API_URL, "/product-config/").concat(id), {
            params: param
          });
        }
      }, {
        key: "getProductConfigMasterData",
        value: function getProductConfigMasterData(param) {
          console.log(param);
          return this.http.get("".concat(this.API_URL, "/product-config/drop-down"), {
            params: param
          });
        }
      }]);

      return ProductConfigService;
    }();

    ProductConfigService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ProductConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], ProductConfigService);
    /***/
  }
}]);
//# sourceMappingURL=product-config-product-config-list-product-config-list-module-es5.js.map