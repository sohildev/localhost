function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales-order-view-sales-order-view-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/sales-order/sales-order-view/sales-order-details/sales-order-details.component.html":
  /*!**********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/sales-order/sales-order-view/sales-order-details/sales-order-details.component.html ***!
    \**********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOutboundSalesOrderSalesOrderViewSalesOrderDetailsSalesOrderDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"tab-pane fade show active\" id=\"details\" role=\"tabpanel\" aria-labelledby=\"details-tab\">\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-md-4\">\r\n      <label class=\"text-muted mb-1 font-weight-bold\">Purchase Order Number</label>\r\n      <div>{{objectArray?.sales_order_no}}</div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <label class=\"text-muted mb-1 font-weight-bold\">SO Date</label>\r\n      <div>{{objectArray?.sales_order_date|date:date_format :timezone}}</div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <label class=\"text-muted mb-1 font-weight-bold\">Receiving Date & Time</label>\r\n      <div>-</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-md-4\">\r\n      <label class=\"text-muted mb-1 font-weight-bold\">MO</label>\r\n      <div>-</div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <label class=\"text-muted mb-1 font-weight-bold\">Case #</label>\r\n      <div>-</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\" mt-5 border-bottom pb-2\">\r\n        <h5>Client Details</h5>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col-md-4\">\r\n      <label class=\"text-muted mb-1 font-weight-bold\">Client Name</label>\r\n      <div>{{objectArray?.client?.client_name}}</div>\r\n    </div>\r\n    <div class=\"col-md-7\">\r\n      <label class=\"text-muted mb-1 font-weight-bold\">Address</label>\r\n      <div>\r\n        <span *ngIf=\"objectArray?.supplier?.address?.street_address\">\r\n          {{objectArray?.client?.address?.street_address}},\r\n        </span>\r\n        <span *ngIf=\"objectArray?.client?.address?.city\">\r\n          {{objectArray?.client?.address?.city}},\r\n        </span>\r\n        <span *ngIf=\"objectArray?.client?.address?.state\">\r\n          {{objectArray?.client?.address?.state}}\r\n        </span>\r\n        <span *ngIf=\"objectArray?.client?.address?.country_name\">({{objectArray?.client?.address?.country_name}})\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"mt-5 border-bottom pb-2\">\r\n        <h5>Order Product List</h5>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col-md-12 mb-3\">\r\n\r\n      <app-table-list [headerData]=\"headerData\" [rawData]=\"orderProductListArray\">\r\n      </app-table-list>\r\n\r\n      <pagination [paginationList]=\"pagination\" [currentPage]=\"currentPage\" (onPageChange)=\"getPage($event)\">\r\n      </pagination>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/sales-order/sales-order-view/sales-order-picklist/sales-order-picklist.component.html":
  /*!************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/sales-order/sales-order-view/sales-order-picklist/sales-order-picklist.component.html ***!
    \************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOutboundSalesOrderSalesOrderViewSalesOrderPicklistSalesOrderPicklistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row mt-4\">\r\n  <div class=\"col\">\r\n\r\n    <button *ngIf=\"isGenerate\" class=\"btn btn-primary\" [routerLink]=\"['/outbound/pick-list/generate/',viewId]\">\r\n      Generate PickList</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"table-responsive\">\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>UN No</th>\r\n        <th>SKU No</th>\r\n        <th>Product</th>\r\n        <th class=\"text-center\">Product Qty</th>\r\n        <th class=\"text-center\">Status</th>\r\n        <th class=\"text-right\">Action</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of orderProductListArray; let i=index\">\r\n        <td>{{item?.pick_list_index}}</td>\r\n        <td>{{item?.product.sku_no}}</td>\r\n        <td>{{item?.product.product_name}}</td>\r\n        <td class=\"text-center\">{{item?.product_qty  |number}}</td>\r\n        <td class=\"text-center\">\r\n          <span *ngIf=\"item?.status?.value ==2\" class=\"badge badge-warning text-white\">{{item?.status?.label}}</span>\r\n          <span *ngIf=\"item?.status?.value ==3\" class=\"badge badge-success\">{{item?.status?.label}}</span>\r\n          <span *ngIf=\"item?.status?.value ==4\" class=\"badge badge-primary\">{{item?.status?.label}}</span> \r\n        </td>\r\n        <td>\r\n          <div class=\"action-drop dropdown text-right\">\r\n            <a href=\"#\" data-toggle=\"dropdown\" class=\"btn shadow-none btn-default btn-sm btn-icon-only\" title=\"\">\r\n              <i class=\"fa fa-ellipsis-h\"></i>\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-icon-menu drop-menu-right action-dropdown\" style=\"width: 100px;\">\r\n              <a [routerLink]=\"['/outbound/pick-list/view/',item?.pick_list_id]\" class=\"dropdown-item\"><i\r\n                  class=\"fa fa-eye fa-fw text-primary\">\r\n                </i> View</a>\r\n\r\n              <a *ngIf=\"item?.status?.value !=3\" class=\"dropdown-item\"\r\n                [routerLink]=\"['/outbound/pick-list/generate-pick-list/',item?.pick_list_id]\">\r\n                <i class=\"fa fa-file-pdf-o fa-fw text-primary\">\r\n                </i> Submit Report</a>\r\n              <a *ngIf=\"item?.status?.value ==3\" class=\"dropdown-item\"\r\n                [routerLink]=\"['/outbound/pick-list/generate-pick-list/',item?.pick_list_id]\">\r\n                <i class=\"fa fa-edit fa-fw text-primary\">\r\n                </i> Edit</a>\r\n              <a  class=\"dropdown-item\" (click)=\"deleteObject(item)\">\r\n                <i class=\"fa fa-trash fa-fw text-primary\">\r\n                </i> Delete</a>\r\n\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"!loadingState && orderProductListArray.length == 0\">\r\n        <td colspan=\"9\">No records found</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/sales-order/sales-order-view/sales-order-view.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/sales-order/sales-order-view/sales-order-view.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOutboundSalesOrderSalesOrderViewSalesOrderViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n      <div class=\"ml-3\">\r\n        <a class=\"btn shadow-none btn-link\" routerLink=\"/outbound/sales-order\">\r\n          <i class=\"fa fa-chevron-left mr-2 mt-1\"></i>Back to list\r\n        </a>\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <a class=\"btn btn-light\" (click)=\"onPrint()\">\r\n          <i class=\"fa fa-file-pdf-o mr-2 mt-1\"></i>Generate PDF\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link \" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true}\"\r\n            id=\"details-tab\" data-toggle=\"tab\" [routerLink]=\"['/outbound/sales-order/view',viewId]\" role=\"tab\"\r\n            aria-controls=\"details\" aria-selected=\"true\">Details</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{match:['picklist']}\"\r\n            id=\"picklist-tab\" data-toggle=\"tab\" routerLink=\"picklist\" role=\"tab\" aria-controls=\"picklist\"\r\n            aria-selected=\"false\">PickList</a>\r\n        </li>\r\n\r\n      </ul>\r\n      <div class=\"tab-content\">\r\n        <router-outlet>\r\n        </router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/outbound/sales-order/sales-order-view/sales-order-details/sales-order-details.component.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/pages/outbound/sales-order/sales-order-view/sales-order-details/sales-order-details.component.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: SalesOrderDetailsComponent */

  /***/
  function srcAppPagesOutboundSalesOrderSalesOrderViewSalesOrderDetailsSalesOrderDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesOrderDetailsComponent", function () {
      return SalesOrderDetailsComponent;
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
    /* harmony import */


    var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/pagination.service */
    "./src/app/service/pagination.service.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/common-module/table-list/list-field-type */
    "./src/app/common-module/table-list/list-field-type.ts");
    /* harmony import */


    var src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/service/sales-order.service */
    "./src/app/service/sales-order.service.ts");

    var SalesOrderDetailsComponent =
    /*#__PURE__*/
    function () {
      function SalesOrderDetailsComponent(activatedRoute, salesorderService, dataService, paginationService) {
        _classCallCheck(this, SalesOrderDetailsComponent);

        this.activatedRoute = activatedRoute;
        this.salesorderService = salesorderService;
        this.dataService = dataService;
        this.paginationService = paginationService;
        this.orderProductListArray = [];
        this.headerData = [];
        this.loadingState = false;
        this.currentPage = 1;
        this.date_format = "M/d/yy";

        if (this.activatedRoute.snapshot.paramMap.get('id')) {
          this.viewId = this.activatedRoute.snapshot.paramMap.get('id');
        }
      }

      _createClass(SalesOrderDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.dataService.currentCompany.subscribe(function (response) {
            if (response) {
              _this.timezone = String(response.timezone.format);
              ;
              _this.time_format = response.time_format.label;
              _this.date_format = response.date_format.label;
              _this.currentCompany = response;
            }
          });
          this.getOrderDetails();
          this.setHeaderData();
          this.getOrderProductList();
        }
      }, {
        key: "setHeaderData",
        value: function setHeaderData() {
          this.headerData.push(new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_5__["TextField"]({
            label: "SKU No #",
            key: 'sku_no'
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_5__["TextField"]({
            label: "Product",
            key: "product_name"
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_5__["TextField"]({
            label: "Order Qty",
            key: "qty"
          }));
        }
      }, {
        key: "getOrderDetails",
        value: function getOrderDetails() {
          var _this2 = this;

          this.subscription = this.dataService.SalesOrderDetails.subscribe(function (data) {
            if (data) {
              _this2.objectArray = data;
            }
          });
        }
      }, {
        key: "getPage",
        value: function getPage(page) {
          this.currentPage = page;
          this.currentPage = 1;
          this.getOrderProductList();
        }
      }, {
        key: "getOrderProductList",
        value: function getOrderProductList() {
          var _this3 = this;

          var params = {
            sales_order_id: this.viewId
          };
          this.salesorderService.getSalesOrderProductList(params).subscribe(function (response) {
            if (response.success && response.data) {
              _this3.orderProductListArray = response.data.list;
              _this3.pagination = _this3.paginationService.getPager(response.data.pagination['total_page'], _this3.currentPage);
            } else {
              _this3.orderProductListArray = [];
              _this3.loadingState = false;
              _this3.pagination = null;
            }
          }, function (error) {
            _this3.orderProductListArray = [];
            _this3.loadingState = false;
            _this3.pagination = null;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return SalesOrderDetailsComponent;
    }();

    SalesOrderDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_6__["SalesOrderService"]
      }, {
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }, {
        type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"]
      }];
    };

    SalesOrderDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sales-order-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sales-order-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/sales-order/sales-order-view/sales-order-details/sales-order-details.component.html")).default
    })], SalesOrderDetailsComponent);
    /***/
  },

  /***/
  "./src/app/pages/outbound/sales-order/sales-order-view/sales-order-picklist/sales-order-picklist.component.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/pages/outbound/sales-order/sales-order-view/sales-order-picklist/sales-order-picklist.component.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: SalesOrderPicklistComponent */

  /***/
  function srcAppPagesOutboundSalesOrderSalesOrderViewSalesOrderPicklistSalesOrderPicklistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesOrderPicklistComponent", function () {
      return SalesOrderPicklistComponent;
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
    /* harmony import */


    var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/pagination.service */
    "./src/app/service/pagination.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/common-module/table-list/list-field-type */
    "./src/app/common-module/table-list/list-field-type.ts");
    /* harmony import */


    var src_app_service_pick_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/service/pick-list.service */
    "./src/app/service/pick-list.service.ts");
    /* harmony import */


    var src_app_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/messages */
    "./src/app/messages.ts");

    var SalesOrderPicklistComponent =
    /*#__PURE__*/
    function () {
      function SalesOrderPicklistComponent(dataService, paginationService, picklistService, location, activatedRoute) {
        var _this4 = this;

        _classCallCheck(this, SalesOrderPicklistComponent);

        this.dataService = dataService;
        this.paginationService = paginationService;
        this.picklistService = picklistService;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.orderProductListArray = [];
        this.headerData = [];
        this.loadingState = false;
        this.isGenerate = false;
        this.currentPage = 1;
        this.activatedRoute.parent.params.subscribe(function (response) {
          _this4.viewId = response['id'];
        });
        this.subscription = this.dataService.SalesOrderDetails.subscribe(function (data) {
          if (data) {
            _this4.objectArray = data;
          }
        });
      }

      _createClass(SalesOrderPicklistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setHeaderData();
          this.getOrderProductList();
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "setHeaderData",
        value: function setHeaderData() {
          this.headerData.push(new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["TextField"]({
            label: "UN NO",
            key: 'pick_list_index'
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["TextField"]({
            label: "SKU no",
            key: 'product.sku_no'
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["TextField"]({
            label: "Product",
            key: 'product.product_name'
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["TextField"]({
            label: "Product Qty",
            key: 'product_qty'
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["StatusField"]({
            label: "Status",
            key: 'status.label'
          }));
          var canView = true;
          var actions = {};

          if (canView) {
            actions['edit'] = {
              path: '/outbound/pick-list/view/',
              id: 'pick_list_id',
              class: 'fa-eye',
              showText: 'View'
            };
            actions['view'] = {
              path: '/outbound/pick-list/generate-pick-list/',
              id: 'pick_list_id',
              class: 'fa-file-pdf-o',
              showText: 'Submit Report'
            };
          }

          var actionColom = new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_6__["ActionField"](actions);
          this.headerData.push(actionColom);
        }
      }, {
        key: "onReloadEvent",
        value: function onReloadEvent() {
          this.getOrderProductList();
        }
      }, {
        key: "getOrderProductList",
        value: function getOrderProductList() {
          var _this5 = this;

          this.picklistService.getPickListGeneratedListById(this.viewId).subscribe(function (response) {
            if (response.success && response.data) {
              _this5.orderProductListArray = response.data.list ? response.data.list : [];
              _this5.isGenerate = response.data.is_generate; // this.pagination = this.paginationService.getPager(response.data.pagination['total_page'], this.currentPage);
            } else {
              _this5.orderProductListArray = [];
              _this5.loadingState = false;
              _this5.isGenerate = false;
              _this5.pagination = null;
            }
          }, function (error) {
            _this5.orderProductListArray = [];
            _this5.isGenerate = false;
            _this5.loadingState = false;
            _this5.pagination = null;
          });
        }
      }, {
        key: "deleteObject",
        value: function deleteObject(object) {
          var _this6 = this;

          swal.fire({
            title: src_app_messages__WEBPACK_IMPORTED_MODULE_8__["errorMessage"].delete_header_text,
            text: src_app_messages__WEBPACK_IMPORTED_MODULE_8__["errorMessage"].delete_smalll_text,
            icon: src_app_messages__WEBPACK_IMPORTED_MODULE_8__["errorMessage"].delete_dialogue_type,
            showCancelButton: true,
            confirmButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_8__["errorMessage"].delete_confirm_button,
            cancelButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_8__["errorMessage"].delete_cancel_button
          }).then(function (result) {
            if (result.value) {
              var params = {
                pick_list_detail_id: object.pick_list_detail_id
              };

              _this6.picklistService.deletePickListSubmitReports(object.pick_list_id, params).subscribe(function (response) {
                if (response.success) {
                  _this6.getOrderProductList();
                }
              });
            }
          }).catch(swal.noop);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return SalesOrderPicklistComponent;
    }();

    SalesOrderPicklistComponent.ctorParameters = function () {
      return [{
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"]
      }, {
        type: src_app_service_pick_list_service__WEBPACK_IMPORTED_MODULE_7__["PickListService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    SalesOrderPicklistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sales-order-picklist',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sales-order-picklist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/sales-order/sales-order-view/sales-order-picklist/sales-order-picklist.component.html")).default
    })], SalesOrderPicklistComponent);
    /***/
  },

  /***/
  "./src/app/pages/outbound/sales-order/sales-order-view/sales-order-view.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/outbound/sales-order/sales-order-view/sales-order-view.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: SalesOrderViewComponent */

  /***/
  function srcAppPagesOutboundSalesOrderSalesOrderViewSalesOrderViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesOrderViewComponent", function () {
      return SalesOrderViewComponent;
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
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/sales-order.service */
    "./src/app/service/sales-order.service.ts");

    var SalesOrderViewComponent =
    /*#__PURE__*/
    function () {
      function SalesOrderViewComponent(salesorderService, dataService, activatedRoute) {
        _classCallCheck(this, SalesOrderViewComponent);

        this.salesorderService = salesorderService;
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.PageTitle = "Sales Order Detail ";
        this.active = true;

        if (this.activatedRoute.snapshot.paramMap.get('id')) {
          this.viewId = this.activatedRoute.snapshot.paramMap.get('id');
        }
      }

      _createClass(SalesOrderViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getOrderDetails();
        }
      }, {
        key: "getOrderDetails",
        value: function getOrderDetails() {
          var _this7 = this;

          this.salesorderService.getSalesOrderViewById(this.viewId).subscribe(function (res) {
            if (res.success && res.data) {
              _this7.objectArray = res.data;
              _this7.PageTitle = _this7.PageTitle + "".concat(_this7.objectArray.sales_order_no);

              _this7.dataService.SalesOrderDetailsSubject.next(_this7.objectArray);
            }
          });
        }
      }, {
        key: "onPrint",
        value: function onPrint() {
          window.print();
        }
      }]);

      return SalesOrderViewComponent;
    }();

    SalesOrderViewComponent.ctorParameters = function () {
      return [{
        type: src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_4__["SalesOrderService"]
      }, {
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    SalesOrderViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sales-order-view',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sales-order-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/sales-order/sales-order-view/sales-order-view.component.html")).default
    })], SalesOrderViewComponent);
    /***/
  },

  /***/
  "./src/app/pages/outbound/sales-order/sales-order-view/sales-order-view.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/outbound/sales-order/sales-order-view/sales-order-view.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: SalesOrderViewModule */

  /***/
  function srcAppPagesOutboundSalesOrderSalesOrderViewSalesOrderViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesOrderViewModule", function () {
      return SalesOrderViewModule;
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


    var _sales_order_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sales-order-view.component */
    "./src/app/pages/outbound/sales-order/sales-order-view/sales-order-view.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/sales-order.service */
    "./src/app/service/sales-order.service.ts");
    /* harmony import */


    var _sales_order_details_sales_order_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sales-order-details/sales-order-details.component */
    "./src/app/pages/outbound/sales-order/sales-order-view/sales-order-details/sales-order-details.component.ts");
    /* harmony import */


    var _sales_order_picklist_sales_order_picklist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./sales-order-picklist/sales-order-picklist.component */
    "./src/app/pages/outbound/sales-order/sales-order-view/sales-order-picklist/sales-order-picklist.component.ts");
    /* harmony import */


    var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/common-module/pagination/pagination.module */
    "./src/app/common-module/pagination/pagination.module.ts");
    /* harmony import */


    var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/common-module/table-list/table-list.module */
    "./src/app/common-module/table-list/table-list.module.ts");
    /* harmony import */


    var src_app_service_pick_list_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/service/pick-list.service */
    "./src/app/service/pick-list.service.ts");

    var routes = [{
      path: '',
      component: _sales_order_view_component__WEBPACK_IMPORTED_MODULE_3__["SalesOrderViewComponent"],
      children: [{
        path: '',
        component: _sales_order_details_sales_order_details_component__WEBPACK_IMPORTED_MODULE_6__["SalesOrderDetailsComponent"],
        data: {
          title: 'view_sales_order'
        }
      }, {
        path: 'picklist',
        component: _sales_order_picklist_sales_order_picklist_component__WEBPACK_IMPORTED_MODULE_7__["SalesOrderPicklistComponent"],
        data: {
          title: 'view_sales_order'
        }
      }]
    }];

    var SalesOrderViewModule = function SalesOrderViewModule() {
      _classCallCheck(this, SalesOrderViewModule);
    };

    SalesOrderViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_sales_order_view_component__WEBPACK_IMPORTED_MODULE_3__["SalesOrderViewComponent"], _sales_order_details_sales_order_details_component__WEBPACK_IMPORTED_MODULE_6__["SalesOrderDetailsComponent"], _sales_order_picklist_sales_order_picklist_component__WEBPACK_IMPORTED_MODULE_7__["SalesOrderPicklistComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"], src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_9__["TableListModule"]],
      providers: [src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_5__["SalesOrderService"], src_app_service_pick_list_service__WEBPACK_IMPORTED_MODULE_10__["PickListService"]]
    })], SalesOrderViewModule);
    /***/
  }
}]);
//# sourceMappingURL=sales-order-view-sales-order-view-module-es5.js.map