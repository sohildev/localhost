function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-client-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/client/add-client/add-client.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/client/add-client/add-client.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMasterClientAddClientAddClientComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row m-0\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div>\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <div class=\"clearfix\">\r\n                <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\r\n                  <div class=\"btn-file mt-3\">\r\n                    <div class=\"thumbnail fileinput-new uploaded-user-image rounded-circle\"\r\n                      style=\"width: 150px; height: 150px;\">\r\n                      <img [src]=\"editImageUrl ? editImageUrl : 'assets/no_image.png'\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <button class=\"fileinput-new btn btn-dark btn-sm btn-file mt-3\"> Browse\r\n                      Image\r\n                    </button>\r\n                    <input accept=\"image/x-png,image/jpeg\" (change)=\"fileChangeEvent($event)\" type=\"file\"\r\n                      file-model=\"myFile\">\r\n                    <div class=\"fileinput-preview fileinput-exists thumbnail uploaded-user-image rounded-circle\"\r\n                      style=\"width: 150px; height: 150px;\"></div>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <a (click)=\"removeFile()\" class=\"btn btn-link btn-sm fileinput-exists mt-3\"\r\n                      data-dismiss=\"fileinput\">Remove</a> </div>\r\n                  <div class=\"clearfix mt-3\">\r\n                    <p class=\"upload-img-label text-muted font-size-12\">*Recommended\r\n                      Size:<br>Minimum\r\n                      250 * 250</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-8\">\r\n              <div class=\"row\">\r\n\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">First Name <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['first_name']\" type=\"text\" class=\"form-control\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Last Name <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['last_name']\" type=\"text\" class=\"form-control\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Client Name <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['client_name']\" type=\"text\" class=\"form-control\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Client Code <em>*</em></label>\r\n                    <div class=\"\" [ngClass]=\"{'has-error': formErrors.client_code}\">\r\n                      <input [formControl]=\"addForm.controls['client_code']\" type=\"text\" class=\"form-control\"\r\n                        placeholder=\"\">\r\n                      <span *ngIf=\"formErrors.client_code\" class=\"help-block\"\r\n                        [innerHTML]=\"formErrors.client_code\"></span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Country <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <ng-select [formControl]=\"addForm.controls['country_id']\" (change)=\"getCountryName($event)\"\r\n                        [items]=\"countryListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Country\">\r\n                      </ng-select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">State <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['state']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">City <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['city']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Street Address <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['street_address']\" type=\"text\" class=\"form-control\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Tax <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['tax_id']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label text-md-right\">Phone Number <em>*</em></label>\r\n                <div class=\"d-flex\">\r\n                  <input number [formControl]=\"addForm.controls['dial_code']\" type=\"text\" class=\"form-control mr-2\"\r\n                    style=\"width: 100px;\" placeholder=\"Enter dial number\">\r\n                  <input number [formControl]=\"addForm.controls['phone_number']\" type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter phone number\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label text-md-right\">Email <em>*</em></label>\r\n                <div class=\"\">\r\n                  <input [formControl]=\"addForm.controls['email']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                </div>\r\n              </div>\r\n\r\n              <!-- <div class=\"form-group\">\r\n                <label class=\"control-label text-md-right\">Address</label>\r\n                <textarea [formControl]=\"addForm.controls['address']\" class=\"form-control\" rows=\"2\"></textarea>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" routerLink=\"/manage/client\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/client/client-list/client-list.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/client/client-list/client-list.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMasterClientClientListClientListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n      <div class=\"ml-3\">\r\n        <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <app-btn-add [btnName]=\"'Add Client'\" [editData]=\"'/manage/client/add'\"></app-btn-add>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\r\n      </app-table-list>\r\n      <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\r\n      (onPageChange)=\"getPage($event)\">\r\n    </pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/master/client/add-client/add-client.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/master/client/add-client/add-client.component.ts ***!
    \************************************************************************/

  /*! exports provided: AddClientComponent */

  /***/
  function srcAppPagesMasterClientAddClientAddClientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddClientComponent", function () {
      return AddClientComponent;
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


    var src_app_service_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/client.service */
    "./src/app/service/client.service.ts");
    /* harmony import */


    var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/common.service */
    "./src/app/service/common.service.ts");

    var AddClientComponent =
    /*#__PURE__*/
    function () {
      function AddClientComponent(router, activatedRoute, fb, clientService, commonService) {
        _classCallCheck(this, AddClientComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.clientService = clientService;
        this.commonService = commonService;
        this.PageTitle = "Client";
        this.editImageUrl = null;
        this.addNewRadio = false;
        this.categoryListArray = [];
        this.brandListArray = [];
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
          client_code: null,
          apierror: null
        };
        this.isEditing = false;
        this.editId = null;
        this.countryListArray = [];

        if (this.activatedRoute.snapshot.paramMap.get('id')) {
          this.isEditing = true;
          this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }

        this.addForm = this.fb.group({
          client_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          client_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          phone_number: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          dial_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
          address: [null],
          country_name: [null],
          first_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          last_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          country_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          tax_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          street_address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
      }

      _createClass(AddClientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCountryList();

          if (this.isEditing) {
            this.getEditObject();
          }
        }
      }, {
        key: "getCountryList",
        value: function getCountryList() {
          var _this = this;

          this.commonService.getCountryList().subscribe(function (res) {
            if (res.success) {
              _this.countryListArray = res.data.country_list;
            }
          });
        }
      }, {
        key: "getEditObject",
        value: function getEditObject() {
          var _this2 = this;

          this.clientService.getClientById(this.editId).subscribe(function (response) {
            if (response.success) {
              _this2.editImageUrl = response.data.image, _this2.addForm.patchValue({
                client_name: response.data.client_name,
                category_id: response.data.category_id,
                dial_code: response.data.user.dial_code,
                client_code: response.data.client_code,
                tax_id: response.data.tax_id,
                first_name: response.data.user.first_name,
                last_name: response.data.user.last_name,
                phone_number: response.data.user.phone_number,
                email: response.data.user.email,
                country_name: response.data.address.country_name,
                country_id: response.data.address.country_id,
                state: response.data.address.state,
                city: response.data.address.city,
                street_address: response.data.address.street_address ? response.data.address.street_address : ''
              });
            } else {
              _this2.router.navigateByUrl('/manage/client');
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
        key: "getCountryName",
        value: function getCountryName(data) {
          this.addForm.patchValue({
            country_name: data.label
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(formData) {
          var _this3 = this;

          if (formData.valid) {
            this.showLoader = true;
            var data = new FormData();
            data.append('client_name', formData.value.client_name);
            data.append('client_code', formData.value.client_code);
            data.append('phone_number', formData.value.phone_number);
            data.append('first_name', formData.value.first_name);
            data.append('last_name', formData.value.last_name);
            data.append('dial_code', formData.value.dial_code);
            data.append('email', formData.value.email);
            data.append('tax_id', formData.value.tax_id);
            var address = {
              country_id: formData.value.country_id,
              country_name: formData.value.country_name,
              state: formData.value.state,
              city: formData.value.city,
              street_address: formData.value.street_address
            };
            data.append('address', JSON.stringify(address));

            if (this.selectedFile) {
              data.append('file', this.selectedFile);
            }

            if (this.isEditing) {
              this.clientService.editClient(this.editId, data).subscribe(function (response) {
                _this3.showLoader = false;

                if (response.success) {
                  _this3.router.navigateByUrl('/manage/client');
                } else {
                  response.error.map(function (obj) {
                    if (obj.hasOwnProperty('client_code')) {
                      _this3.formErrors['client_code'] = obj['client_code'];
                    } else {
                      _this3.formErrors['apierror'] = "* ".concat(response.error);
                    }
                  });
                }
              }, function (error) {
                _this3.showLoader = false;
              });
            } else {
              this.clientService.addClient(data).subscribe(function (response) {
                _this3.showLoader = false;

                if (response.success) {
                  _this3.router.navigateByUrl('/manage/client');
                } else {
                  response.error.map(function (obj) {
                    if (obj.hasOwnProperty('client_code')) {
                      _this3.formErrors['client_code'] = obj['client_code'];
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
      }]);

      return AddClientComponent;
    }();

    AddClientComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_service_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"]
      }, {
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }];
    };

    AddClientComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-client',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-client.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/client/add-client/add-client.component.html")).default
    })], AddClientComponent);
    /***/
  },

  /***/
  "./src/app/pages/master/client/client-list/client-list.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/master/client/client-list/client-list.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ClientListComponent */

  /***/
  function srcAppPagesMasterClientClientListClientListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientListComponent", function () {
      return ClientListComponent;
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


    var src_app_service_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/client.service */
    "./src/app/service/client.service.ts");

    var ClientListComponent =
    /*#__PURE__*/
    function () {
      function ClientListComponent(paginationService, clientService) {
        _classCallCheck(this, ClientListComponent);

        this.paginationService = paginationService;
        this.clientService = clientService;
        this.PageTitle = "Manage Client";
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

      _createClass(ClientListComponent, [{
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
            label: "Client Name",
            key: "client_name"
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Client Code",
            key: "client_code"
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Email",
            key: "user.email"
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Phone Number",
            key: "user.phone_number"
          }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Address	",
            key: "address.country_name"
          }));
          var canEdit = true;
          var canDelete = true;
          var actions = {};

          if (canEdit) {
            actions['edit'] = {
              path: '/manage/client/edit/',
              id: 'client_id'
            };
          }

          if (canDelete) {
            actions['delete'] = {
              path: 'client/',
              id: 'client_id'
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

          this.clientService.getClientList(params).subscribe(function (response) {
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
          this.currentPage = page; // this.currentPage = 1;

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

      return ClientListComponent;
    }();

    ClientListComponent.ctorParameters = function () {
      return [{
        type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"]
      }, {
        type: src_app_service_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"]
      }];
    };

    ClientListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-client-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./client-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/client/client-list/client-list.component.html")).default
    })], ClientListComponent);
    /***/
  },

  /***/
  "./src/app/pages/master/client/client.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/master/client/client.module.ts ***!
    \******************************************************/

  /*! exports provided: ClientModule */

  /***/
  function srcAppPagesMasterClientClientModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientModule", function () {
      return ClientModule;
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


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/form-validation/form-validation.module */
    "./src/app/shared/form-validation/form-validation.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_common_module_table_view_table_view_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/common-module/table-view/table-view.module */
    "./src/app/common-module/table-view/table-view.module.ts");
    /* harmony import */


    var _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./client-list/client-list.component */
    "./src/app/pages/master/client/client-list/client-list.component.ts");
    /* harmony import */


    var _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./add-client/add-client.component */
    "./src/app/pages/master/client/add-client/add-client.component.ts");
    /* harmony import */


    var src_app_service_client_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/service/client.service */
    "./src/app/service/client.service.ts");
    /* harmony import */


    var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/common-module/pagination/pagination.module */
    "./src/app/common-module/pagination/pagination.module.ts");

    var routes = [{
      path: "",
      component: _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_12__["ClientListComponent"],
      data: {
        title: 'client_list'
      }
    }, {
      path: "add",
      component: _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_13__["AddClientComponent"],
      data: {
        title: 'add_client'
      }
    }, {
      path: 'edit/:id',
      component: _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_13__["AddClientComponent"],
      data: {
        title: 'edit_client'
      }
    }];

    var ClientModule = function ClientModule() {
      _classCallCheck(this, ClientModule);
    };

    ClientModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_12__["ClientListComponent"], _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_13__["AddClientComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_6__["TableListModule"], src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchModule"], src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__["BtnAddModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_9__["FormValidationModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], src_app_common_module_table_view_table_view_module__WEBPACK_IMPORTED_MODULE_11__["TableViewModule"], src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_15__["PaginationModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"]],
      providers: [src_app_service_client_service__WEBPACK_IMPORTED_MODULE_14__["ClientService"]]
    })], ClientModule);
    /***/
  },

  /***/
  "./src/app/service/client.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/service/client.service.ts ***!
    \*******************************************/

  /*! exports provided: ClientService */

  /***/
  function srcAppServiceClientServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientService", function () {
      return ClientService;
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

    var ClientService =
    /*#__PURE__*/
    function () {
      function ClientService(http) {
        _classCallCheck(this, ClientService);

        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
      }

      _createClass(ClientService, [{
        key: "getClientList",
        value: function getClientList(param) {
          return this.http.get("".concat(this.API_URL, "/client"), {
            params: param
          });
        }
      }, {
        key: "addClient",
        value: function addClient(data) {
          return this.http.post("".concat(this.API_URL, "/client"), data);
        }
      }, {
        key: "editClient",
        value: function editClient(id, data) {
          return this.http.put("".concat(this.API_URL, "/client/").concat(id), data);
        }
      }, {
        key: "getClientById",
        value: function getClientById(id) {
          var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return this.http.get("".concat(this.API_URL, "/client/").concat(id), {
            params: param
          });
        }
      }]);

      return ClientService;
    }();

    ClientService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ClientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], ClientService);
    /***/
  }
}]);
//# sourceMappingURL=client-client-module-es5.js.map