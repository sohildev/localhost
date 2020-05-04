function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aisle-aisle-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/aisle/add-aisle/add-aisle.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/aisle/add-aisle/add-aisle.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMasterAisleAddAisleAddAisleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div>\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">\r\n              Aisle Name <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['aisle_name']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Aisle Code <em>*</em></label>\r\n            <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.aisle_code}\">\r\n              <input [formControl]=\"addForm.controls['aisle_code']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n              <span *ngIf=\"formErrors.aisle_code\" class=\"help-block\" [innerHTML]=\"formErrors.aisle_code\"></span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">\r\n              Area Name <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <ng-select [formControl]=\"addForm.controls['area_id']\" [items]=\"areaListArray\" bindLabel=\"label\"\r\n                bindValue=\"value\" placeholder=\"Select Area\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\"></label>\r\n            <div class=\"col-md-5\">\r\n              <ng-container *ngIf=\"isEditing; else elseTemplate\">\r\n                <img class=\"bcode\" [src]=\"barCodeFile\" alt=\"\" sizes=\"\" srcset=\"\">\r\n              </ng-container>\r\n              <ng-template #elseTemplate>\r\n                <img class=\"bcode\" id=\"barCodeShow\" alt=\"\" sizes=\"\" srcset=\"\" [hidden]=\"!addForm.valid\">\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"text-right border-top pt-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" routerLink=\"/manage/aisle\">Cancel</button>\r\n        <button type=\"submit\" [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\"\r\n          [disabled]=\"showLoader\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/aisle/aisle-list/aisle-list.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/aisle/aisle-list/aisle-list.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMasterAisleAisleListAisleListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n      <div class=\"ml-3\">\r\n        <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <app-btn-add [btnName]=\"'Add Aisle'\" [editData]=\"'/manage/aisle/add'\"></app-btn-add>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\r\n      </app-table-list>\r\n      <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\r\n        (onPageChange)=\"getPage($event)\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/aisle/aisle-view/aisle-view.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/aisle/aisle-view/aisle-view.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMasterAisleAisleViewAisleViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">Aisle Details</h2>\r\n      <div class=\"ml-3\">\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <button class=\"btn btn-secondary\" (click)=\"VoucherPrint()\">Print</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"tab-pane fade show active\" id=\"details\" role=\"tabpanel\" aria-labelledby=\"details-tab\">\r\n        <div class=\"row mt-4\">\r\n          <div class=\"col-md-4\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Aisle Name</label>\r\n            <div>{{objectArray?.aisle_name}}</div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Aisle Code</label>\r\n            <div>{{objectArray?.aisle_code}}</div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Bar code No</label>\r\n            <div>{{objectArray?.aisle_bar_code}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-4\">\r\n          <div class=\"col\">\r\n            <div>\r\n              <img [src]=\"objectArray?.aisle_bar_code_image\" alt=\"\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/master/aisle/add-aisle/add-aisle.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/master/aisle/add-aisle/add-aisle.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AddAisleComponent */

  /***/
  function srcAppPagesMasterAisleAddAisleAddAisleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAisleComponent", function () {
      return AddAisleComponent;
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


    var src_app_service_aisle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/aisle.service */
    "./src/app/service/aisle.service.ts");
    /* harmony import */


    var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/common.service */
    "./src/app/service/common.service.ts");

    var AddAisleComponent =
    /*#__PURE__*/
    function () {
      function AddAisleComponent(router, activatedRoute, fb, aisleService, commonservice) {
        _classCallCheck(this, AddAisleComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.aisleService = aisleService;
        this.commonservice = commonservice;
        this.PageTitle = "Aisle";
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
          aisle_code: null,
          apierror: null
        };
        this.areaListArray = [];
        this.isEditing = false;
        this.editId = null;

        if (this.activatedRoute.snapshot.paramMap.get('id')) {
          this.isEditing = true;
          this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }

        this.addForm = this.fb.group({
          aisle_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          aisle_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          area_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          aisle_bar_code: [null]
        });
      }

      _createClass(AddAisleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMasterData();

          if (this.isEditing) {
            this.getEditObject();
          } else {
            this.getAreaBarcode();
          }
        }
      }, {
        key: "getMasterData",
        value: function getMasterData() {
          var _this = this;

          this.aisleService.getMasterData().subscribe(function (res) {
            if (res.success) {
              _this.areaListArray = res.data.area;
            }
          });
        }
      }, {
        key: "getAreaBarcode",
        value: function getAreaBarcode() {
          var _this2 = this;

          this.commonservice.getGenerateBarcode().subscribe(function (res) {
            _this2.addForm.patchValue({
              aisle_bar_code: res.type
            });

            var urlCreator = window.URL || window.webkitURL;
            document.getElementById('barCodeShow').src = urlCreator.createObjectURL(res);
            _this2.selectedFile = new File([res], 'noname.jpeg', {
              type: 'image/jpeg'
            });
          });
        }
      }, {
        key: "getEditObject",
        value: function getEditObject() {
          var _this3 = this;

          this.aisleService.getAisleById(this.editId).subscribe(function (response) {
            if (response.success) {
              _this3.addForm.patchValue(response.data);

              _this3.barCodeFile = response.data.aisle_bar_code_image;
            } else {
              _this3.router.navigateByUrl('/manage/aisle');
            }
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(formData) {
          var _this4 = this;

          if (formData.valid) {
            this.showLoader = true;
            var data = new FormData();
            data.append('aisle_name', formData.value.aisle_name);
            data.append('aisle_code', formData.value.aisle_code);
            data.append('area_id', formData.value.area_id);
            data.append('aisle_bar_code', formData.value.aisle_bar_code);

            if (this.selectedFile) {
              data.append('file', this.selectedFile);
            }

            if (this.isEditing) {
              this.aisleService.editAisle(this.editId, data).subscribe(function (response) {
                _this4.showLoader = false;

                if (response.success) {
                  _this4.router.navigateByUrl('/manage/aisle');
                } else {
                  response.error.map(function (obj) {
                    if (obj.hasOwnProperty('aisle_code')) {
                      _this4.formErrors['aisle_code'] = obj['aisle_code'];
                    } else {
                      _this4.formErrors['apierror'] = "* ".concat(response.error);
                    }
                  });
                }
              }, function (error) {
                _this4.showLoader = false;
              });
            } else {
              this.aisleService.addAisle(data).subscribe(function (response) {
                _this4.showLoader = false;

                if (response.success) {
                  _this4.router.navigateByUrl('/manage/aisle');
                } else {
                  response.error.map(function (obj) {
                    if (obj.hasOwnProperty('aisle_code')) {
                      _this4.formErrors['aisle_code'] = obj['aisle_code'];
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

      return AddAisleComponent;
    }();

    AddAisleComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_service_aisle_service__WEBPACK_IMPORTED_MODULE_4__["AisleService"]
      }, {
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }];
    };

    AddAisleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-aisle',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-aisle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/aisle/add-aisle/add-aisle.component.html")).default
    })], AddAisleComponent);
    /***/
  },

  /***/
  "./src/app/pages/master/aisle/aisle-list/aisle-list.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/master/aisle/aisle-list/aisle-list.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AisleListComponent */

  /***/
  function srcAppPagesMasterAisleAisleListAisleListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AisleListComponent", function () {
      return AisleListComponent;
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


    var src_app_service_aisle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/aisle.service */
    "./src/app/service/aisle.service.ts");

    var AisleListComponent =
    /*#__PURE__*/
    function () {
      function AisleListComponent(paginationService, aisleService) {
        _classCallCheck(this, AisleListComponent);

        this.paginationService = paginationService;
        this.aisleService = aisleService;
        this.PageTitle = "Manage Aisle";
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

      _createClass(AisleListComponent, [{
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
            label: "Aisle Name",
            key: "aisle_name"
          }), // new TextViewUrlField({
          //   label: "Order #",
          //   key: "po_no",
          //   viewUrl: {
          //     path: '/inbound/order/view/',
          //     id: 'po_id'
          //   }
          // }),
          new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Aisle Code",
            key: "aisle_code"
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Bar Code No",
            key: "aisle_bar_code"
          }));
          var canEdit = true;
          var canView = true;
          var canDelete = true;
          var actions = {};

          if (canEdit) {
            actions['edit'] = {
              path: '/manage/aisle/edit/',
              id: 'aisle_id'
            };
          }

          if (canView) {
            actions['view'] = {
              path: '/manage/aisle/view/',
              id: 'aisle_id'
            };
          }

          if (canDelete) {
            actions['delete'] = {
              path: 'aisle/',
              id: 'aisle_id'
            };
          }

          var actionColom = new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["ActionField"](actions);
          this.headerData.push(actionColom);
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

          this.aisleService.getAisleList(params).subscribe(function (response) {
            _this5.loadingState = false;

            if (response.success) {
              _this5.objectArray = response.data.list;
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
        key: "onReloadEvent",
        value: function onReloadEvent() {
          this.getObjects();
        }
      }]);

      return AisleListComponent;
    }();

    AisleListComponent.ctorParameters = function () {
      return [{
        type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"]
      }, {
        type: src_app_service_aisle_service__WEBPACK_IMPORTED_MODULE_4__["AisleService"]
      }];
    };

    AisleListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-aisle-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./aisle-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/aisle/aisle-list/aisle-list.component.html")).default
    })], AisleListComponent);
    /***/
  },

  /***/
  "./src/app/pages/master/aisle/aisle-view/aisle-view.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/master/aisle/aisle-view/aisle-view.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AisleViewComponent */

  /***/
  function srcAppPagesMasterAisleAisleViewAisleViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AisleViewComponent", function () {
      return AisleViewComponent;
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


    var src_app_service_aisle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/aisle.service */
    "./src/app/service/aisle.service.ts");

    var AisleViewComponent =
    /*#__PURE__*/
    function () {
      function AisleViewComponent(activatedRoute, aisleservice) {
        _classCallCheck(this, AisleViewComponent);

        this.activatedRoute = activatedRoute;
        this.aisleservice = aisleservice;

        if (this.activatedRoute.snapshot.paramMap.get('id')) {
          this.viewId = this.activatedRoute.snapshot.paramMap.get('id');
        }
      }

      _createClass(AisleViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.aisleservice.getAisleById(this.viewId).subscribe(function (response) {
            if (response.success) {
              _this6.objectArray = response.data;
            }
          });
        }
      }, {
        key: "VoucherSourcetoPrint",
        value: function VoucherSourcetoPrint() {
          var _a, _b, _c;

          return "\n            <html>\n            <head>\n              <script>\n                function step1() {\n                  setTimeout('step2()', 10);\n                }\n                function step2() {\n                  window.print(); window.close()\n                }\n              </script>\n            </head>\n\n            <body onload='step1()'>\n              <h3>Aisle Name:- ".concat((_a = this.objectArray) === null || _a === void 0 ? void 0 : _a.aisle_name, "</h3>\n              <h3>Aisle Code:- ").concat((_b = this.objectArray) === null || _b === void 0 ? void 0 : _b.aisle_code, "</h3>\n              <img src='").concat((_c = this.objectArray) === null || _c === void 0 ? void 0 : _c.aisle_bar_code_image, "' />\n            </body>\n            </html>\n      ");
        }
      }, {
        key: "VoucherPrint",
        value: function VoucherPrint() {
          // let pwa = window.open();
          // pwa.document.open();
          // pwa.document.write(this.VoucherSourcetoPrint());
          // pwa.document.close();
          window.print();
        }
      }]);

      return AisleViewComponent;
    }();

    AisleViewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_service_aisle_service__WEBPACK_IMPORTED_MODULE_3__["AisleService"]
      }];
    };

    AisleViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-aisle-view',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./aisle-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/aisle/aisle-view/aisle-view.component.html")).default
    })], AisleViewComponent);
    /***/
  },

  /***/
  "./src/app/pages/master/aisle/aisle.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/master/aisle/aisle.module.ts ***!
    \****************************************************/

  /*! exports provided: AisleModule */

  /***/
  function srcAppPagesMasterAisleAisleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AisleModule", function () {
      return AisleModule;
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


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/form-validation/form-validation.module */
    "./src/app/shared/form-validation/form-validation.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/common-module/pagination/pagination.module */
    "./src/app/common-module/pagination/pagination.module.ts");
    /* harmony import */


    var src_app_service_aisle_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/service/aisle.service */
    "./src/app/service/aisle.service.ts");
    /* harmony import */


    var _add_aisle_add_aisle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./add-aisle/add-aisle.component */
    "./src/app/pages/master/aisle/add-aisle/add-aisle.component.ts");
    /* harmony import */


    var _aisle_list_aisle_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./aisle-list/aisle-list.component */
    "./src/app/pages/master/aisle/aisle-list/aisle-list.component.ts");
    /* harmony import */


    var _aisle_view_aisle_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./aisle-view/aisle-view.component */
    "./src/app/pages/master/aisle/aisle-view/aisle-view.component.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");

    var routes = [{
      path: "",
      component: _aisle_list_aisle_list_component__WEBPACK_IMPORTED_MODULE_13__["AisleListComponent"],
      data: {
        title: 'aisle_list'
      }
    }, {
      path: "add",
      component: _add_aisle_add_aisle_component__WEBPACK_IMPORTED_MODULE_12__["AddAisleComponent"],
      data: {
        title: 'add_aisle'
      }
    }, {
      path: 'edit/:id',
      component: _add_aisle_add_aisle_component__WEBPACK_IMPORTED_MODULE_12__["AddAisleComponent"],
      data: {
        title: 'edit_aisle'
      }
    }, {
      path: 'view/:id',
      component: _aisle_view_aisle_view_component__WEBPACK_IMPORTED_MODULE_14__["AisleViewComponent"],
      data: {
        title: 'view_aisle'
      }
    }];

    var AisleModule = function AisleModule() {
      _classCallCheck(this, AisleModule);
    };

    AisleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_aisle_list_aisle_list_component__WEBPACK_IMPORTED_MODULE_13__["AisleListComponent"], _add_aisle_add_aisle_component__WEBPACK_IMPORTED_MODULE_12__["AddAisleComponent"], _aisle_view_aisle_view_component__WEBPACK_IMPORTED_MODULE_14__["AisleViewComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_6__["TableListModule"], src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchModule"], src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__["BtnAddModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_8__["FormValidationModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_10__["PaginationModule"]],
      providers: [src_app_service_aisle_service__WEBPACK_IMPORTED_MODULE_11__["AisleService"]]
    })], AisleModule);
    /***/
  },

  /***/
  "./src/app/service/aisle.service.ts":
  /*!******************************************!*\
    !*** ./src/app/service/aisle.service.ts ***!
    \******************************************/

  /*! exports provided: AisleService */

  /***/
  function srcAppServiceAisleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AisleService", function () {
      return AisleService;
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

    var AisleService =
    /*#__PURE__*/
    function () {
      function AisleService(http) {
        _classCallCheck(this, AisleService);

        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
      }

      _createClass(AisleService, [{
        key: "getAisleList",
        value: function getAisleList(param) {
          return this.http.get("".concat(this.API_URL, "/aisle"), {
            params: param
          });
        }
      }, {
        key: "addAisle",
        value: function addAisle(data) {
          return this.http.post("".concat(this.API_URL, "/aisle"), data);
        }
      }, {
        key: "editAisle",
        value: function editAisle(id, data) {
          return this.http.put("".concat(this.API_URL, "/aisle/").concat(id), data);
        }
      }, {
        key: "getAisleById",
        value: function getAisleById(id) {
          var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return this.http.get("".concat(this.API_URL, "/aisle/").concat(id), {
            params: param
          });
        }
      }, {
        key: "getMasterData",
        value: function getMasterData() {
          return this.http.get("".concat(this.API_URL, "/aisle/master-data"));
        }
      }]);

      return AisleService;
    }();

    AisleService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    AisleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AisleService);
    /***/
  }
}]);
//# sourceMappingURL=aisle-aisle-module-es5.js.map