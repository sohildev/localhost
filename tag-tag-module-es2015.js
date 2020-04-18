(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tag-tag-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/tag/tag-add/tag-add.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/tag/tag-add/tag-add.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\n    <div class=\"page-header\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\n            <div class=\"card-body\">\n                <div>\n                    <div class=\"form-group row align-items-center\">\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">\n                            Number tag to create <em>*</em></label>\n                        <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.number_tag_to_create}\">\n                            <input number [formControl]=\"addForm.controls['number_tag_to_create']\" type=\"text\" class=\"form-control\"\n                                placeholder=\"\">\n                            <span *ngIf=\"formErrors.number_tag_to_create\" class=\"help-block\" [innerHTML]=\"formErrors.number_tag_to_create\"></span>\n                        </div>\n                    </div>\n                    <div class=\"form-group row align-items-center\">\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Tag Type <em>*</em></label>\n                        <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.tag_type_id}\">\n                            <ng-select [formControl]=\"addForm.controls['tag_type_id']\" [items]=\"tagTypeListArray\"\n                                bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Type\">\n                            </ng-select>\n                            <span *ngIf=\"formErrors.tag_type_id\" class=\"help-block\"\n                                [innerHTML]=\"formErrors.tag_type_id\"></span>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"text-right border-top pt-4 mt-5 card-footer\">\n                <button type=\"button\" class=\"btn btn-light\" routerLink=\"/manage/tag\">Cancel</button>\n                <button type=\"submit\" class=\"btn btn-secondary ml-2\"\n                    [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\"\n                    [disabled]=\"showLoader\">Submit</button>\n            </div>\n        </form>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/tag/tag-list/tag-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/tag/tag-list/tag-list.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\n    <div class=\"page-header\">\n      <div class=\"row m-0\">\n        <h2 class=\"mr-auto\">{{PageTitle}}</h2>\n        <div class=\"ml-3\">\n          <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\n        </div>\n        <div class=\"ml-3\">\n          <app-btn-add [btnName]=\"'Add Tag'\" [editData]=\"'/manage/tag/add'\"></app-btn-add>\n        </div>\n      </div>\n  \n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\n        </app-table-list>\n        <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\n          (onPageChange)=\"getPage($event)\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./src/app/pages/master/tag/tag-add/tag-add.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/master/tag/tag-add/tag-add.component.ts ***!
  \***************************************************************/
/*! exports provided: TagAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagAddComponent", function() { return TagAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_tag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/tag.service */ "./src/app/service/tag.service.ts");





let TagAddComponent = class TagAddComponent {
    constructor(router, activatedRoute, fb, tagservice) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.tagservice = tagservice;
        this.PageTitle = "Tag";
        this.loadingState = false;
        this.tagTypeListArray = [];
        this.showLoader = false;
        this.formErrors = {
            number_tag_to_create: null,
            tag_type_id: null,
            apierror: null,
        };
        this.isEditing = false;
        this.editId = null;
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }
        this.addForm = this.fb.group({
            number_tag_to_create: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)])],
            tag_type_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    ngOnInit() {
        this.getMasterData();
        if (this.isEditing) {
            this.getEditObject();
        }
    }
    getMasterData() {
        this.tagservice.getTagMasterData().subscribe((res) => {
            if (res.success) {
                this.tagTypeListArray = res.data.tag_type ? res.data.tag_type : [];
            }
        });
    }
    getEditObject() {
        this.tagservice.getTagById(this.editId).subscribe((response) => {
            if (response.success) {
                this.addForm.patchValue(response.data);
            }
            else {
                this.router.navigateByUrl('/manage/tag');
            }
        });
    }
    submitForm(formData) {
        this.removeError();
        if (formData.valid) {
            this.showLoader = true;
            const data = new FormData();
            data.append('number_tag_to_create', formData.value.number_tag_to_create);
            data.append('tag_type_id', formData.value.tag_type_id);
            if (this.isEditing) {
                this.tagservice.editTag(this.editId, data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/tag');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('number_tag_to_create')) {
                                this.formErrors['number_tag_to_create'] = obj['number_tag_to_create'];
                            }
                            else if (obj.hasOwnProperty('tag_type_id')) {
                                this.formErrors['tag_type_id'] = obj['tag_type_id'];
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
                this.tagservice.addTag(data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/tag');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('number_tag_to_create')) {
                                this.formErrors['number_tag_to_create'] = obj['number_tag_to_create'];
                            }
                            else if (obj.hasOwnProperty('tag_type_id')) {
                                this.formErrors['tag_type_id'] = obj['tag_type_id'];
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
    removeError() {
        this.formErrors = {
            number_tag_to_create: null,
            tag_type_id: null,
            apierror: null,
        };
    }
};
TagAddComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagService"] }
];
TagAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tag-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tag-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/tag/tag-add/tag-add.component.html")).default
    })
], TagAddComponent);



/***/ }),

/***/ "./src/app/pages/master/tag/tag-list/tag-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/master/tag/tag-list/tag-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: TagListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagListComponent", function() { return TagListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");
/* harmony import */ var src_app_service_tag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/tag.service */ "./src/app/service/tag.service.ts");





let TagListComponent = class TagListComponent {
    constructor(paginationService, tagService) {
        this.paginationService = paginationService;
        this.tagService = tagService;
        this.PageTitle = "Manage Tag";
        this.loadform = false;
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.permissionObject = null;
        this.showPagination = false;
        //For Dynamic List
        this.headerData = [];
    }
    ngOnInit() {
        // this.dataService.permission.subscribe((perms) => {
        //   this.permissionObject = perms['tag'];
        // });
        this.loadform = false;
        this.setHeaderData();
        this.getObjects();
    }
    setHeaderData() {
        this.headerData.push(new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Tag Type",
            key: "tag_type.label",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Tag",
            key: "tag",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Product",
            key: "product.label",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["StatusField"]({
            label: "Status",
            key: 'status.label',
        }));
        let canEdit = true;
        let canDelete = true;
        let actions = {};
        // if (canEdit) {
        //   actions['edit'] = {
        //     path: '/manage/tag/edit/',
        //     id: 'tag_id'
        //   }
        // }
        if (canDelete) {
            actions['delete'] = {
                path: 'tag/',
                id: 'tag_id'
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
        this.tagService.getTagList(params).subscribe((response) => {
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
TagListComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagService"] }
];
TagListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tag-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tag-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/tag/tag-list/tag-list.component.html")).default
    })
], TagListComponent);



/***/ }),

/***/ "./src/app/pages/master/tag/tag.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/master/tag/tag.module.ts ***!
  \************************************************/
/*! exports provided: TagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagModule", function() { return TagModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-module/table-list/table-list.module */ "./src/app/common-module/table-list/table-list.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");
/* harmony import */ var _tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tag-list/tag-list.component */ "./src/app/pages/master/tag/tag-list/tag-list.component.ts");
/* harmony import */ var _tag_add_tag_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tag-add/tag-add.component */ "./src/app/pages/master/tag/tag-add/tag-add.component.ts");
/* harmony import */ var src_app_service_tag_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/service/tag.service */ "./src/app/service/tag.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");















const routes = [
    {
        path: "",
        component: _tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_11__["TagListComponent"],
        data: { title: 'tag_list' }
    },
    {
        path: "add",
        component: _tag_add_tag_add_component__WEBPACK_IMPORTED_MODULE_12__["TagAddComponent"],
        data: { title: 'add_tag' }
    },
    {
        path: 'edit/:id',
        component: _tag_add_tag_add_component__WEBPACK_IMPORTED_MODULE_12__["TagAddComponent"],
        data: { title: 'edit_tag' }
    },
];
let TagModule = class TagModule {
};
TagModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_11__["TagListComponent"], _tag_add_tag_add_component__WEBPACK_IMPORTED_MODULE_12__["TagAddComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_6__["TableListModule"],
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__["BtnAddModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_8__["FormValidationModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_10__["PaginationModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ], providers: [src_app_service_tag_service__WEBPACK_IMPORTED_MODULE_13__["TagService"]]
    })
], TagModule);



/***/ }),

/***/ "./src/app/service/tag.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/tag.service.ts ***!
  \****************************************/
/*! exports provided: TagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagService", function() { return TagService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let TagService = class TagService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getTagList(param) {
        return this.http.get(`${this.API_URL}/tag`, { params: param });
    }
    addTag(data) {
        return this.http.post(`${this.API_URL}/tag`, data);
    }
    editTag(id, data) {
        return this.http.put(`${this.API_URL}/tag/${id}`, data);
    }
    getTagById(id, param = null) {
        return this.http.get(`${this.API_URL}/tag/${id}`, { params: param });
    }
    getTagMasterData() {
        return this.http.get(`${this.API_URL}/tag/master-data`);
    }
};
TagService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TagService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], TagService);



/***/ })

}]);
//# sourceMappingURL=tag-tag-module-es2015.js.map