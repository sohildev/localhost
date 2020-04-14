function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/product/add-product/add-product.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/product/add-product/add-product.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMasterProductAddProductAddProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div>\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n\r\n              <!-- <div class=\"clearfix\">\r\n                <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\r\n                  <div class=\"btn-file mt-3\">\r\n                    <div class=\"thumbnail fileinput-new uploaded-user-image rounded-circle\"\r\n                      style=\"width: 150px; height: 150px;\">\r\n                      <img [src]=\"editImageUrl ? editImageUrl : 'assets/no_image.png'\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <button class=\"fileinput-new btn btn-secondary btn-sm btn-file mt-3\"> Browse Image </button>\r\n                    <input accept=\"image/x-png,image/jpeg\" (change)=\"fileChangeEvent($event)\" type=\"file\"\r\n                      file-model=\"myFile\">\r\n                    <div class=\"fileinput-preview fileinput-exists thumbnail uploaded-user-image rounded-circle\"\r\n                      style=\"width: 150px; height: 150px;\"></div>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <a (click)=\"removeFile()\" class=\"btn btn-link btn-sm fileinput-exists mt-3\"\r\n                      data-dismiss=\"fileinput\">Remove</a>\r\n                  </div>\r\n                  <div class=\"clearfix mt-3\">\r\n                    <p class=\"upload-img-label text-muted font-size-12\">*Recommended Size:<br>Minimum 250 * 250</p>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n\r\n              <div class=\"clearfix\">\r\n                <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\r\n                  <div class=\"btn-file mt-3\">\r\n                    <div class=\"thumbnail fileinput-new uploaded-user-image rounded-circle\"\r\n                      style=\"width: 150px; height: 150px;\">\r\n                      <img [src]=\"editImageUrl ? editImageUrl : 'assets/no_image.png'\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <button class=\"fileinput-new btn btn-dark btn-sm btn-file mt-3\"> Browse\r\n                      Image\r\n                    </button>\r\n                    <input id=\"myimg\" accept=\"image/x-png,image/jpeg\" (change)=\"fileChangeEvent($event)\" type=\"file\"\r\n                      file-model=\"myFile\">\r\n                    <div class=\"fileinput-preview fileinput-exists thumbnail uploaded-user-image rounded-circle\"\r\n                      style=\"width: 150px; height: 150px;\"></div>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <a (click)=\"removeFile()\" class=\"btn btn-link btn-sm fileinput-exists mt-3\"\r\n                      data-dismiss=\"fileinput\">Remove</a> </div>\r\n                  <div class=\"clearfix mt-3\">\r\n                    <p class=\"upload-img-label text-muted font-size-12\">*Recommended\r\n                      Size:<br>Minimum\r\n                      250 * 250</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-8\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Product Name <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['product_name']\" type=\"text\" class=\"form-control\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Product Code <em>*</em></label>\r\n                    <div class=\"\" [ngClass]=\"{'has-error': formErrors.product_code}\">\r\n                      <input type=\"text\" [formControl]=\"addForm.controls['product_code']\" class=\"form-control\"\r\n                        placeholder=\"\">\r\n                      <span *ngIf=\"formErrors.product_code\" class=\"help-block\"\r\n                        [innerHTML]=\"formErrors.product_code\"></span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Category <em>*</em></label>\r\n                    <ng-select [formControl]=\"addForm.controls['category_id']\" [items]=\"categoryListArray\"\r\n                      bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Category\">\r\n                    </ng-select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Brand <em>*</em></label>\r\n                    <ng-select bindLabel=\"label\" bindValue=\"value\" [formControl]=\"addForm.controls['brand_id']\"\r\n                      [items]=\"brandListArray\" placeholder=\"Select Brand\">\r\n                    </ng-select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Barcode</label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['barcode']\" type=\"text\" class=\"form-control\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">SKU No <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['sku_no']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group \">\r\n                  <label class=\"control-label text-md-right \">Volume(cm)</label>\r\n                  <div class=\"col\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col\">\r\n                        <input number (change)=\"volumeCal()\" [formControl]=\"addForm.controls['height']\" type=\"text\"\r\n                          class=\"form-control\" placeholder=\"Height\">\r\n                      </div>\r\n                      <i class=\"la la-times mt-2\" aria-hidden=\"true\"></i>\r\n                      <div class=\"col\">\r\n                        <input number (change)=\"volumeCal()\" [formControl]=\"addForm.controls['width']\" type=\"text\"\r\n                          class=\"form-control\" placeholder=\"Width\">\r\n                      </div>\r\n                      <i class=\"la la-times mt-2\" aria-hidden=\"true\"></i>\r\n                      <div class=\"col\">\r\n                        <input number (change)=\"volumeCal()\" [formControl]=\"addForm.controls['depth']\" type=\"text\"\r\n                          class=\"form-control\" placeholder=\"Depth\">\r\n                      </div>\r\n                      <i class=\"la la-equals mt-2\"></i>\r\n                      <div class=\"col\">\r\n                        <input number [formControl]=\"addForm.controls['total_volume']\" type=\"text\" class=\"form-control\"\r\n                          placeholder=\"\" disabled>\r\n                      </div>\r\n                      <div class=\"col\">\r\n                        <ng-select bindLabel=\"label\" bindValue=\"value\" [formControl]=\"addForm.controls['product_unit']\"\r\n                          [items]=\"unitListArray\" placeholder=\"Select Unit\">\r\n                        </ng-select>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label text-md-right\">Description</label>\r\n                <textarea [formControl]=\"addForm.controls['description']\" class=\"form-control\" rows=\"2\"></textarea>\r\n              </div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" routerLink=\"/manage/product\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/product/product-list/product-list.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/product/product-list/product-list.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMasterProductProductListProductListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n      <div class=\"ml-3\">\r\n        <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <app-btn-add [btnName]=\"'Add Product'\" [editData]=\"'/manage/product/add'\"></app-btn-add>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\r\n      </app-table-list>\r\n      <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\r\n        (onPageChange)=\"getPage($event)\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/master/product/add-product/add-product.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/master/product/add-product/add-product.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AddProductComponent */

  /***/
  function srcAppPagesMasterProductAddProductAddProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductComponent", function () {
      return AddProductComponent;
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


    var src_app_service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/product.service */
    "./src/app/service/product.service.ts");

    var AddProductComponent =
    /*#__PURE__*/
    function () {
      function AddProductComponent(router, activatedRoute, fb, productService) {
        _classCallCheck(this, AddProductComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.productService = productService;
        this.PageTitle = "Product";
        this.editImageUrl = null;
        this.addNewRadio = false;
        this.categoryListArray = [];
        this.brandListArray = [];
        this.unitListArray = [];
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
          product_code: null,
          apierror: null
        };
        this.isEditing = false;
        this.editId = null;

        if (this.activatedRoute.snapshot.paramMap.get('id')) {
          this.isEditing = true;
          this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }

        this.addForm = this.fb.group({
          product_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          product_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          category_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          description: [null],
          barcode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          sku_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          brand_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          height: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          width: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          depth: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          unit: ['cm', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          product_unit: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          total_volume: [0]
        });
      }

      _createClass(AddProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMasterData();

          if (this.isEditing) {
            this.getEditObject();
          }
        }
      }, {
        key: "getMasterData",
        value: function getMasterData() {
          var _this = this;

          this.productService.getProductMasterData().subscribe(function (response) {
            if (response.success) {
              _this.categoryListArray = response.data.category;
              _this.brandListArray = response.data.brand;
              _this.unitListArray = response.data.unit;
            }
          });
        }
      }, {
        key: "getEditObject",
        value: function getEditObject() {
          var _this2 = this;

          this.productService.getProductById(this.editId).subscribe(function (response) {
            if (response.success) {
              _this2.editImageUrl = response.data.image, _this2.addForm.patchValue({
                product_name: response.data.product_name,
                category_id: response.data.category_id,
                description: response.data.description,
                product_code: response.data.product_code,
                brand_id: response.data.brand_id,
                barcode: response.data.barcode,
                sku_no: response.data.sku_no,
                width: response.data.volume.width,
                height: response.data.volume.height,
                depth: response.data.volume.depth,
                unit: response.data.volume.unit,
                product_unit: response.data.product_unit,
                total_volume: response.data.volume.total_volume
              });
            } else {
              _this2.router.navigateByUrl('/manage/product');
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
        key: "submitForm",
        value: function submitForm(formData) {
          var _this3 = this;

          if (formData.valid) {
            this.showLoader = true;
            var data = new FormData();
            data.append('product_name', formData.value.product_name);
            data.append('product_unit', formData.value.product_unit);
            data.append('product_code', formData.value.product_code);
            data.append('category_id', formData.value.category_id ? formData.value.category_id : '');
            data.append('brand_id', formData.value.brand_id ? formData.value.brand_id : '');
            data.append('description', formData.value.description);
            data.append('barcode', formData.value.barcode);
            data.append('sku_no', formData.value.sku_no);
            var volume = {
              width: formData.value.width,
              unit: formData.value.unit,
              height: formData.value.height,
              depth: formData.value.depth,
              total_volume: formData.value.total_volume
            };
            data.append('volume', JSON.stringify(volume));

            if (this.selectedFile) {
              data.append('file', this.selectedFile);
            }

            if (this.isEditing) {
              this.productService.editProduct(this.editId, data).subscribe(function (response) {
                _this3.showLoader = false;

                if (response.success) {
                  _this3.router.navigateByUrl('/manage/product');
                } else {
                  response.error.map(function (obj) {
                    if (obj.hasOwnProperty('product_code')) {
                      _this3.formErrors['product_code'] = obj['product_code'];
                    } else {
                      _this3.formErrors['apierror'] = "* ".concat(response.error);
                    }
                  });
                }
              }, function (error) {
                _this3.showLoader = false;
              });
            } else {
              this.productService.addProduct(data).subscribe(function (response) {
                _this3.showLoader = false;

                if (response.success) {
                  _this3.router.navigateByUrl('/manage/product');
                } else {
                  response.error.map(function (obj) {
                    if (obj.hasOwnProperty('product_code')) {
                      _this3.formErrors['product_code'] = obj['product_code'];
                    } else {
                      _this3.formErrors['apierror'] = "* ".concat(response.error);
                    }
                  });
                }
              }, function (error) {
                _this3.showLoader = false;
              });
            }
          }
        }
      }, {
        key: "volumeCal",
        value: function volumeCal() {
          var total = parseInt(this.addForm.value.height ? this.addForm.value.height : 0) * parseInt(this.addForm.value.width ? this.addForm.value.width : 0) * parseInt(this.addForm.value.depth ? this.addForm.value.depth : 0);
          this.addForm.patchValue({
            total_volume: total ? total : 0
          });
        }
      }]);

      return AddProductComponent;
    }();

    AddProductComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_service_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }];
    };

    AddProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-product',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/product/add-product/add-product.component.html")).default
    })], AddProductComponent);
    /***/
  },

  /***/
  "./src/app/pages/master/product/product-list/product-list.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/master/product/product-list/product-list.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppPagesMasterProductProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
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


    var src_app_service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/product.service */
    "./src/app/service/product.service.ts");

    var ProductListComponent =
    /*#__PURE__*/
    function () {
      function ProductListComponent(paginationService, productService) {
        _classCallCheck(this, ProductListComponent);

        this.paginationService = paginationService;
        this.productService = productService;
        this.PageTitle = "Manage Product";
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

      _createClass(ProductListComponent, [{
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
            label: "Product Name",
            key: "product_name"
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Product Code",
            key: "product_code"
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Sku No",
            key: "sku_no"
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Category",
            key: "category.label"
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Brand	",
            key: "brand.label"
          }));
          var canEdit = true;
          var canDelete = true;
          var actions = {};

          if (canEdit) {
            actions['edit'] = {
              path: '/manage/product/edit/',
              id: 'product_id'
            };
          }

          if (canDelete) {
            actions['delete'] = {
              path: 'product/',
              id: 'product_id'
            };
          }

          var actionColom = new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["ActionField"](actions);
          this.headerData.push(actionColom);
        }
      }, {
        key: "getObjects",
        value: function getObjects() {
          var _this4 = this;

          var params = {
            page: this.currentPage
          };

          if (this.searchText) {
            params.search = this.searchText;
          }

          this.productService.getProductList(params).subscribe(function (response) {
            _this4.loadingState = false;

            if (response.success) {
              _this4.objectArray = response.data.list;
              _this4.showPagination = true;
              _this4.pagination = _this4.paginationService.getPager(response.data.pagination['total_page'], _this4.currentPage);
            } else {
              _this4.objectArray = [];
              _this4.pagination = null;
            }
          }, function (error) {
            _this4.loadingState = false;
            _this4.objectArray = [];
            _this4.pagination = null;
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

      return ProductListComponent;
    }();

    ProductListComponent.ctorParameters = function () {
      return [{
        type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"]
      }, {
        type: src_app_service_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }];
    };

    ProductListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/product/product-list/product-list.component.html")).default
    })], ProductListComponent);
    /***/
  },

  /***/
  "./src/app/pages/master/product/product.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/master/product/product.module.ts ***!
    \********************************************************/

  /*! exports provided: ProductModule */

  /***/
  function srcAppPagesMasterProductProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductModule", function () {
      return ProductModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./product-list/product-list.component */
    "./src/app/pages/master/product/product-list/product-list.component.ts");
    /* harmony import */


    var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./add-product/add-product.component */
    "./src/app/pages/master/product/add-product/add-product.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/common-module/search/search.module */
    "./src/app/common-module/search/search.module.ts");
    /* harmony import */


    var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/common-module/btn-add/btn-add.module */
    "./src/app/common-module/btn-add/btn-add.module.ts");
    /* harmony import */


    var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/common-module/table-list/table-list.module */
    "./src/app/common-module/table-list/table-list.module.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/form-validation/form-validation.module */
    "./src/app/shared/form-validation/form-validation.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_common_module_table_view_table_view_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/common-module/table-view/table-view.module */
    "./src/app/common-module/table-view/table-view.module.ts");
    /* harmony import */


    var src_app_service_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/service/product.service */
    "./src/app/service/product.service.ts");
    /* harmony import */


    var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/common-module/pagination/pagination.module */
    "./src/app/common-module/pagination/pagination.module.ts");

    var routes = [{
      path: "",
      component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductListComponent"],
      data: {
        title: 'product_list'
      }
    }, {
      path: "add",
      component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_2__["AddProductComponent"],
      data: {
        title: 'add_product'
      }
    }, {
      path: 'edit/:id',
      component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_2__["AddProductComponent"],
      data: {
        title: 'edit_product'
      }
    }];

    var ProductModule = function ProductModule() {
      _classCallCheck(this, ProductModule);
    };

    ProductModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductListComponent"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_2__["AddProductComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes), src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_8__["TableListModule"], src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"], src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_7__["BtnAddModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_11__["FormValidationModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_15__["PaginationModule"], src_app_common_module_table_view_table_view_module__WEBPACK_IMPORTED_MODULE_13__["TableViewModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"]],
      providers: [src_app_service_product_service__WEBPACK_IMPORTED_MODULE_14__["ProductService"]]
    })], ProductModule);
    /***/
  },

  /***/
  "./src/app/service/product.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service/product.service.ts ***!
    \********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServiceProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
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

    var ProductService =
    /*#__PURE__*/
    function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
      }

      _createClass(ProductService, [{
        key: "getProductList",
        value: function getProductList(param) {
          return this.http.get("".concat(this.API_URL, "/product"), {
            params: param
          });
        }
      }, {
        key: "addProduct",
        value: function addProduct(data) {
          return this.http.post("".concat(this.API_URL, "/product"), data);
        }
      }, {
        key: "editProduct",
        value: function editProduct(id, data) {
          return this.http.put("".concat(this.API_URL, "/product/").concat(id), data);
        }
      }, {
        key: "getProductById",
        value: function getProductById(id) {
          var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return this.http.get("".concat(this.API_URL, "/product/").concat(id), {
            params: param
          });
        }
      }, {
        key: "getProductMasterData",
        value: function getProductMasterData() {
          return this.http.get("".concat(this.API_URL, "/product/master-data"));
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], ProductService);
    /***/
  }
}]);
//# sourceMappingURL=product-product-module-es5.js.map