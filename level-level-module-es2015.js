(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["level-level-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/level/add-level/add-level.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/level/add-level/add-level.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div>\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Level Name <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['level_name']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Level Code <em>*</em></label>\r\n            <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.level_code}\">\r\n              <input [formControl]=\"addForm.controls['level_code']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n              <span *ngIf=\"formErrors.level_code\" class=\"help-block\" [innerHTML]=\"formErrors.level_code\"></span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">\r\n              Bay Name <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <ng-select [formControl]=\"addForm.controls['bay_id']\" [items]=\"bayListArray\" bindLabel=\"label\"\r\n                bindValue=\"value\" placeholder=\"Select Bay\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\"></label>\r\n            <div class=\"col-md-5\">\r\n              <ng-container *ngIf=\"isEditing; else elseTemplate\">\r\n                <img class=\"bcode\" [src]=\"barCodeFile\" alt=\"\" sizes=\"\" srcset=\"\">\r\n              </ng-container>\r\n              <ng-template #elseTemplate>\r\n                <img class=\"bcode\" id=\"barCodeShow\" alt=\"\" sizes=\"\" srcset=\"\" [hidden]=\"!addForm.valid\">\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"text-right border-top pt-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" routerLink=\"/manage/level\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-secondary ml-2\"\r\n          [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\" [disabled]=\"showLoader\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/level/level-list/level-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/level/level-list/level-list.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n      <div class=\"ml-3\">\r\n        <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <app-btn-add [btnName]=\"'Add Level'\" [editData]=\"'/manage/level/add'\"></app-btn-add>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\r\n      </app-table-list>\r\n      <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\r\n        (onPageChange)=\"getPage($event)\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/level/level-view/level-view.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/level/level-view/level-view.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">Level Details</h2>\r\n      <div class=\"ml-3\">\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <button class=\"btn btn-secondary\" (click)=\"VoucherPrint()\">Print</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"tab-pane fade show active\" id=\"details\" role=\"tabpanel\" aria-labelledby=\"details-tab\">\r\n        <div class=\"row mt-4\">\r\n          <div class=\"col-md-4\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Level Name</label>\r\n            <div>{{objectArray?.level_name}}</div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Level Code</label>\r\n            <div>{{objectArray?.level_code}}</div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Bar code No</label>\r\n\r\n            <div>{{objectArray?.level_bar_code}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-4\">\r\n          <div class=\"col\">\r\n            <div>\r\n              <img [src]=\"objectArray?.level_bar_code_image\" alt=\"\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/master/level/add-level/add-level.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/master/level/add-level/add-level.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLevelComponent", function() { return AddLevelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_level_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/level.service */ "./src/app/service/level.service.ts");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");






let AddLevelComponent = class AddLevelComponent {
    constructor(router, activatedRoute, fb, levelservice, commonservice) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.levelservice = levelservice;
        this.commonservice = commonservice;
        this.PageTitle = "Level";
        this.addNewRadio = false;
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
            level_code: null,
            apierror: null,
        };
        this.isEditing = false;
        this.editId = null;
        this.bayListArray = [];
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }
        this.addForm = this.fb.group({
            level_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            level_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            bay_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            level_bar_code: [null]
        });
    }
    ngOnInit() {
        this.getMasterData();
        if (this.isEditing) {
            this.getEditObject();
        }
        else {
            this.getAreaBarcode();
        }
    }
    getMasterData() {
        this.levelservice.getMasterData().subscribe((res) => {
            if (res.success) {
                this.bayListArray = res.data.bay;
            }
        });
    }
    getAreaBarcode() {
        this.commonservice.getGenerateBarcode().subscribe((res) => {
            this.addForm.patchValue({ level_bar_code: res.type });
            const urlCreator = window.URL || window.webkitURL;
            document.getElementById('barCodeShow').src = urlCreator.createObjectURL(res);
            this.selectedFile = new File([res], 'noname.jpeg', { type: 'image/jpeg' });
        });
    }
    getEditObject() {
        this.levelservice.getLevelById(this.editId).subscribe((response) => {
            if (response.success) {
                this.addForm.patchValue(response.data);
                this.barCodeFile = response.data.level_bar_code_image;
            }
            else {
                this.router.navigateByUrl('/manage/level');
            }
        });
    }
    submitForm(formData) {
        if (formData.valid) {
            this.showLoader = true;
            const data = new FormData();
            data.append('level_name', formData.value.level_name);
            data.append('level_code', formData.value.level_code);
            data.append('bay_id', formData.value.bay_id);
            data.append('level_bar_code', formData.value.level_bar_code);
            if (this.selectedFile) {
                data.append('file', this.selectedFile);
            }
            if (this.isEditing) {
                this.levelservice.editLevel(this.editId, data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/level');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('level_code')) {
                                this.formErrors['level_code'] = obj['level_code'];
                            }
                            else {
                                this.formErrors['apierror'] = `* ${response.error}`;
                            }
                        });
                    }
                }, (error) => {
                    this.showLoader = false;
                });
            }
            else {
                this.levelservice.addLevel(data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/level');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('level_code')) {
                                this.formErrors['level_code'] = obj['level_code'];
                            }
                            else {
                                this.formErrors['apierror'] = `* ${response.error}`;
                            }
                        });
                    }
                }, (error) => {
                    this.showLoader = false;
                });
            }
        }
    }
};
AddLevelComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_level_service__WEBPACK_IMPORTED_MODULE_4__["LevelService"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
AddLevelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-level',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-level.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/level/add-level/add-level.component.html")).default
    })
], AddLevelComponent);



/***/ }),

/***/ "./src/app/pages/master/level/level-list/level-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/master/level/level-list/level-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: LevelListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelListComponent", function() { return LevelListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");
/* harmony import */ var src_app_service_level_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/level.service */ "./src/app/service/level.service.ts");





let LevelListComponent = class LevelListComponent {
    constructor(paginationService, levelService) {
        this.paginationService = paginationService;
        this.levelService = levelService;
        this.loadform = false;
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.permissionObject = null;
        this.showPagination = false;
        this.PageTitle = "Manage Level";
        //For Dynamic List
        this.headerData = [];
    }
    ngOnInit() {
        // this.dataService.permission.subscribe((perms) => {
        //   this.permissionObject = perms['self'];
        // });
        this.loadform = false;
        this.setHeaderData();
        this.getObjects();
    }
    setHeaderData() {
        this.headerData.push(new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Level Name",
            key: "level_name",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Level Code",
            key: "level_code",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Bar Code No",
            key: "level_bar_code",
        }));
        let canEdit = true;
        let canView = true;
        let canDelete = true;
        let actions = {};
        if (canEdit) {
            actions['edit'] = {
                path: '/manage/level/edit/',
                id: 'level_id'
            };
        }
        if (canView) {
            actions['view'] = {
                path: '/manage/level/view/',
                id: 'level_id'
            };
        }
        if (canDelete) {
            actions['delete'] = {
                path: 'level/',
                id: 'level_id'
            };
        }
        let actionColom = new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["ActionField"](actions);
        this.headerData.push(actionColom);
    }
    getObjects() {
        const params = { page: this.currentPage };
        if (this.searchText) {
            params.search = this.searchText;
        }
        this.levelService.getLevelList(params).subscribe((response) => {
            this.loadingState = false;
            if (response.success) {
                this.objectArray = response.data.list;
                this.showPagination = true;
                this.pagination = this.paginationService.getPager(response.data.pagination['total_page'], this.currentPage);
            }
            else {
                this.objectArray = [];
                this.pagination = null;
            }
        }, (error) => {
            this.loadingState = false;
            this.objectArray = [];
            this.pagination = null;
        });
    }
    getPage(page) {
        this.currentPage = page;
        this.getObjects();
    }
    searchObject(text) {
        this.searchText = text;
        this.currentPage = 1;
        this.getObjects();
    }
    onReloadEvent() {
        this.getObjects();
    }
};
LevelListComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_level_service__WEBPACK_IMPORTED_MODULE_4__["LevelService"] }
];
LevelListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-level-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./level-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/level/level-list/level-list.component.html")).default
    })
], LevelListComponent);



/***/ }),

/***/ "./src/app/pages/master/level/level-view/level-view.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/master/level/level-view/level-view.component.ts ***!
  \***********************************************************************/
/*! exports provided: LevelViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelViewComponent", function() { return LevelViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_level_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/level.service */ "./src/app/service/level.service.ts");




let LevelViewComponent = class LevelViewComponent {
    constructor(activatedRoute, levelservice) {
        this.activatedRoute = activatedRoute;
        this.levelservice = levelservice;
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.viewId = this.activatedRoute.snapshot.paramMap.get('id');
        }
    }
    ngOnInit() {
        this.levelservice.getLevelById(this.viewId).subscribe((response) => {
            if (response.success) {
                this.objectArray = response.data;
            }
        });
    }
    VoucherSourcetoPrint() {
        var _a, _b, _c;
        return (`
            <html>
            <head>
              <script>
                function step1() {
                  setTimeout('step2()', 10);
                }
                function step2() {
                  window.print(); window.close()
                }
              </script>
            </head>

            <body onload='step1()'>
              <h3>Level Name:- ${(_a = this.objectArray) === null || _a === void 0 ? void 0 : _a.level_name}</h3>
              <h3>Level Code:- ${(_b = this.objectArray) === null || _b === void 0 ? void 0 : _b.level_code}</h3>
              <img src='${(_c = this.objectArray) === null || _c === void 0 ? void 0 : _c.level_bar_code_image}' />
            </body>
            </html>
      `);
    }
    VoucherPrint() {
        // let pwa = window.open();
        // pwa.document.open();
        // pwa.document.write(this.VoucherSourcetoPrint());
        // pwa.document.close();
        window.print();
    }
};
LevelViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_level_service__WEBPACK_IMPORTED_MODULE_3__["LevelService"] }
];
LevelViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-level-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./level-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/level/level-view/level-view.component.html")).default
    })
], LevelViewComponent);



/***/ }),

/***/ "./src/app/pages/master/level/level.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/master/level/level.module.ts ***!
  \****************************************************/
/*! exports provided: LevelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelModule", function() { return LevelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-module/table-list/table-list.module */ "./src/app/common-module/table-list/table-list.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");
/* harmony import */ var _level_list_level_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./level-list/level-list.component */ "./src/app/pages/master/level/level-list/level-list.component.ts");
/* harmony import */ var _add_level_add_level_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-level/add-level.component */ "./src/app/pages/master/level/add-level/add-level.component.ts");
/* harmony import */ var src_app_service_level_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/service/level.service */ "./src/app/service/level.service.ts");
/* harmony import */ var _level_view_level_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./level-view/level-view.component */ "./src/app/pages/master/level/level-view/level-view.component.ts");
















const routes = [
    {
        path: "",
        component: _level_list_level_list_component__WEBPACK_IMPORTED_MODULE_12__["LevelListComponent"],
        data: { title: 'level_list' }
    },
    {
        path: "add",
        component: _add_level_add_level_component__WEBPACK_IMPORTED_MODULE_13__["AddLevelComponent"],
        data: { title: 'add_level' }
    },
    {
        path: 'edit/:id',
        component: _add_level_add_level_component__WEBPACK_IMPORTED_MODULE_13__["AddLevelComponent"],
        data: { title: 'edit_level' }
    },
    {
        path: 'view/:id',
        component: _level_view_level_view_component__WEBPACK_IMPORTED_MODULE_15__["LevelViewComponent"],
        data: { title: 'view_level' }
    },
];
let LevelModule = class LevelModule {
};
LevelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_level_list_level_list_component__WEBPACK_IMPORTED_MODULE_12__["LevelListComponent"], _add_level_add_level_component__WEBPACK_IMPORTED_MODULE_13__["AddLevelComponent"], _level_view_level_view_component__WEBPACK_IMPORTED_MODULE_15__["LevelViewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_6__["TableListModule"],
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__["BtnAddModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_9__["FormValidationModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"]
        ], providers: [src_app_service_level_service__WEBPACK_IMPORTED_MODULE_14__["LevelService"]]
    })
], LevelModule);



/***/ }),

/***/ "./src/app/service/level.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/level.service.ts ***!
  \******************************************/
/*! exports provided: LevelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelService", function() { return LevelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let LevelService = class LevelService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getLevelList(param) {
        return this.http.get(`${this.API_URL}/level`, { params: param });
    }
    addLevel(data) {
        return this.http.post(`${this.API_URL}/level`, data);
    }
    editLevel(id, data) {
        return this.http.put(`${this.API_URL}/level/${id}`, data);
    }
    getLevelById(id, param = null) {
        return this.http.get(`${this.API_URL}/level/${id}`, { params: param });
    }
    getMasterData() {
        return this.http.get(`${this.API_URL}/level/master-data`);
    }
};
LevelService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LevelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], LevelService);



/***/ })

}]);
//# sourceMappingURL=level-level-module-es2015.js.map