(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/pagination/pagination.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/pagination/pagination.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"pagination p-3 m-0 justify-content-end\" *ngIf=\"paginationList?.pages && paginationList?.pages.length > 1\">\r\n  <li class=\"paginate_button page-item previous\" [ngClass]=\"{ disabled : currentPage === 1}\">\r\n    <a (click)=\"getPage(currentPage - 1)\" class=\"page-link\"><i class=\"fa fa-angle-double-left\"></i></a>\r\n  </li>\r\n  <li class=\"paginate_button page-item\">\r\n    <a class=\"page-link\">{{currentPage}} of {{paginationList.totalPages}}</a>\r\n  </li>\r\n  <li class=\"paginate_button page-item next\" [ngClass]=\"{ disabled: currentPage === paginationList.totalPages}\">\r\n    <a (click)=\"getPage(currentPage + 1)\" class=\"page-link\"><i class=\"fa fa-angle-double-right\"></i></a>\r\n  </li>\r\n</ul>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/table-view/table-view.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/table-view/table-view.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-responsive\">\r\n  <table class=\"table\">\r\n    <thead class=\"thead-dark\">\r\n      <tr>\r\n        <th *ngFor=\"let head of TableHead\" scope=\"col\">{{head.Head}} </th>\r\n        <th *ngIf=\"showActions\" class=\"text-right\">\r\n          Actions\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let el of TableValue; let j=index\" scope=\"row\">\r\n        <ng-template ngFor let-head [ngForOf]='TableHead' let-i=\"index\">\r\n          <td>\r\n            <!-- sss{{el|json}} -->\r\n            <a *ngIf=\"el?.link\" [routerLink]=\"el?.url\">{{\r\n              el[head.key]?el[head.key]:el[head.Head]\r\n            }}</a>\r\n\r\n            <a *ngIf=\"el?.company_redirect_click\">{{\r\n              el[head.key]?el[head.key]:el[head.Head]\r\n            }}</a>\r\n\r\n            <a *ngIf=\"el?.simple_click\">{{\r\n              el[head.key]?el[head.key]:el[head.Head]\r\n            }}</a>\r\n\r\n            <span *ngIf=\"el?.only_show\">{{\r\n              el[head.key]?el[head.key]:el[head.Head]\r\n            }}\r\n            </span>\r\n          </td>\r\n        </ng-template>\r\n        <td *ngIf=\"showActions\">\r\n          <div class=\"action-drop dropdown text-right\">\r\n            <a href=\"#\" data-toggle=\"dropdown\" class=\"btn btn-default btn-sm btn-icon-only shadow-none\" title=\"\">\r\n              <i class=\"fa fa-ellipsis-h\"></i>\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-icon-menu drop-menu-right action-dropdown\" style=\"width: 100px;\">\r\n              <ng-container *ngFor=\"let action of tableConfig.action\">\r\n                <a *ngIf=\"action.event=='link'\" class=\"dropdown-item\" [routerLink]=\"action.TableActionAddLink\">\r\n                  <i class=\"la la-{{action.actionIcon}} font-size16 text-primary\">\r\n                  </i> {{action.actionText}}\r\n                </a>\r\n                <a *ngIf=\"action.event=='click'\" class=\"dropdown-item\"\r\n                  (click)=\"deleteObject(action?.id,action?.actionUrl)\">\r\n                  <i class=\"la la-{{action.actionIcon}} font-size16 text-primary\">\r\n                  </i> {{action.actionText}}\r\n                </a>\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/common-module/pagination/pagination.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/common-module/pagination/pagination.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1tb2R1bGUvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/common-module/pagination/pagination.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/common-module/pagination/pagination.component.ts ***!
  \******************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PaginationComponent = class PaginationComponent {
    constructor() {
        this.onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    getPage(page) {
        this.currentPage = page;
        this.onPageChange.emit(page);
    }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginationComponent.prototype, "paginationList", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginationComponent.prototype, "currentPage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PaginationComponent.prototype, "onPageChange", void 0);
PaginationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pagination',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/pagination/pagination.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pagination.component.css */ "./src/app/common-module/pagination/pagination.component.css")).default]
    })
], PaginationComponent);



/***/ }),

/***/ "./src/app/common-module/pagination/pagination.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/common-module/pagination/pagination.module.ts ***!
  \***************************************************************/
/*! exports provided: PaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination.component */ "./src/app/common-module/pagination/pagination.component.ts");




let PaginationModule = class PaginationModule {
};
PaginationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ], exports: [_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]]
    })
], PaginationModule);



/***/ }),

/***/ "./src/app/common-module/table-view/table-view.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/common-module/table-view/table-view.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .table-responsive{\r\n    overflow: hidden;\r\n    padding-bottom: 100px;\r\n}\r\n.table thead th{    \r\n    border-bottom: 0px;\r\n    font-weight: 600;\r\n    font-size: 14px;    \r\n    color: #8684ab;\r\n    border-top: 0px;    \r\n}\r\n.table th, .table td {    \r\n    border-top: 1px solid #ebeaf5;\r\n}\r\n.table td{    \r\n    color: #7286a2;\r\n    padding: 0.75rem 0.75rem 0.25rem;\r\n}\r\n\r\n.table tr:last-child td{\r\n    border-bottom: 1px solid #ebeaf5;\r\n}\r\n\r\n.inner-dropdown{\r\n    left: -100% !important;\r\n    top: 0 !important;\r\n} */\r\n/* .table .thead-dark th {\r\n    background-color: #eff2f9;    \r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLW1vZHVsZS90YWJsZS12aWV3L3RhYmxlLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQkc7QUFDSDs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1tb2R1bGUvdGFibGUtdmlldy90YWJsZS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAudGFibGUtcmVzcG9uc2l2ZXtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuLnRhYmxlIHRoZWFkIHRoeyAgICBcclxuICAgIGJvcmRlci1ib3R0b206IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7ICAgIFxyXG4gICAgY29sb3I6ICM4Njg0YWI7XHJcbiAgICBib3JkZXItdG9wOiAwcHg7ICAgIFxyXG59XHJcbi50YWJsZSB0aCwgLnRhYmxlIHRkIHsgICAgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ViZWFmNTtcclxufVxyXG4udGFibGUgdGR7ICAgIFxyXG4gICAgY29sb3I6ICM3Mjg2YTI7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDAuNzVyZW0gMC4yNXJlbTtcclxufVxyXG5cclxuLnRhYmxlIHRyOmxhc3QtY2hpbGQgdGR7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWFmNTtcclxufVxyXG5cclxuLmlubmVyLWRyb3Bkb3due1xyXG4gICAgbGVmdDogLTEwMCUgIWltcG9ydGFudDtcclxuICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG59ICovXHJcbi8qIC50YWJsZSAudGhlYWQtZGFyayB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMmY5OyAgICBcclxufSAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/common-module/table-view/table-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/common-module/table-view/table-view.component.ts ***!
  \******************************************************************/
/*! exports provided: TableViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableViewComponent", function() { return TableViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/messages */ "./src/app/messages.ts");
/* harmony import */ var src_app_service_common_module_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/common-module.service */ "./src/app/service/common-module.service.ts");




let TableViewComponent = class TableViewComponent {
    constructor(commonModuleService) {
        this.commonModuleService = commonModuleService;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.TableHead = this.tableConfig.TableHead;
        this.TableValue = this.tableConfig.TableValue;
        this.showActions = this.tableConfig.showActions;
    }
    ngOnDestroy() {
    }
    deleteObject(id, url) {
        swal.fire({
            title: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_header_text,
            text: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_smalll_text,
            icon: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_dialogue_type,
            showCancelButton: true,
            confirmButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_confirm_button,
            cancelButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_cancel_button,
        }).then((result) => {
            if (result.value) {
                this.commonModuleService.delete(id, url).subscribe((response) => {
                    if (response.success) {
                        this.onChange.emit(true);
                    }
                });
            }
        }).catch(swal.noop);
    }
};
TableViewComponent.ctorParameters = () => [
    { type: src_app_service_common_module_service__WEBPACK_IMPORTED_MODULE_3__["CommonModuleService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableViewComponent.prototype, "tableConfig", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TableViewComponent.prototype, "onChange", void 0);
TableViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./table-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/table-view/table-view.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./table-view.component.css */ "./src/app/common-module/table-view/table-view.component.css")).default]
    })
], TableViewComponent);



/***/ }),

/***/ "./src/app/common-module/table-view/table-view.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/common-module/table-view/table-view.module.ts ***!
  \***************************************************************/
/*! exports provided: TableViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableViewModule", function() { return TableViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _table_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-view.component */ "./src/app/common-module/table-view/table-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let TableViewModule = class TableViewModule {
};
TableViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_table_view_component__WEBPACK_IMPORTED_MODULE_3__["TableViewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        exports: [
            _table_view_component__WEBPACK_IMPORTED_MODULE_3__["TableViewComponent"]
        ]
    })
], TableViewModule);



/***/ }),

/***/ "./src/app/service/area.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/area.service.ts ***!
  \*****************************************/
/*! exports provided: AreaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaService", function() { return AreaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let AreaService = class AreaService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getAreaList(param) {
        return this.http.get(`${this.API_URL}/area`, { params: param });
    }
    addArea(data) {
        return this.http.post(`${this.API_URL}/area`, data);
    }
    editArea(id, data) {
        return this.http.put(`${this.API_URL}/area/${id}`, data);
    }
    getAreaById(id, param = null) {
        return this.http.get(`${this.API_URL}/area/${id}`, { params: param });
    }
};
AreaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AreaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AreaService);



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    checkResetPasswordToken(token) {
        return this.http.get(`${this.API_URL}/reset-password/${token}`);
    }
    login(data) {
        return this.http.post(`${this.API_URL}/auth/login`, data);
    }
    forgotPassword(data) {
        return this.http.post(`${this.API_URL}/forgot-password`, data);
    }
    resetPassword(token, data) {
        return this.http.post(`${this.API_URL}/reset-password/${token}`, data);
    }
    changePassword(data) {
        return this.http.post(`${this.API_URL}/auth/change-password`, data);
    }
    editProfile(data) {
        return this.http.post(`${this.API_URL}/auth/profile`, data);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/service/common-module.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/common-module.service.ts ***!
  \**************************************************/
/*! exports provided: CommonModuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonModuleService", function() { return CommonModuleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let CommonModuleService = class CommonModuleService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    delete(id, url) {
        return this.http.delete(`${this.API_URL}/${url}/${id}`);
    }
};
CommonModuleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CommonModuleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CommonModuleService);



/***/ }),

/***/ "./src/app/service/company.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/company.service.ts ***!
  \********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let CompanyService = class CompanyService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getCompanyList(param) {
        return this.http.get(`${this.API_URL}/company`, { params: param });
    }
    addCompany(data) {
        return this.http.post(`${this.API_URL}/company`, data);
    }
    editCompany(id, data) {
        return this.http.put(`${this.API_URL}/company/${id}`, data);
    }
    getCompanyById(id, param = null) {
        return this.http.get(`${this.API_URL}/company/${id}`, { params: param });
    }
    getCompanyViewById(id) {
        return this.http.get(`${this.API_URL}/company/${id}/view`);
    }
    getCompanyMasterData() {
        return this.http.get(`${this.API_URL}/company/master-data`);
    }
    selectCompany(id) {
        return this.http.get(`${this.API_URL}/company/select/${id}`);
    }
    unSelectCompany() {
        return this.http.get(`${this.API_URL}/company/deselect`);
    }
    getCompanyNameList() {
        return this.http.get(`${this.API_URL}/company`);
    }
};
CompanyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CompanyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CompanyService);



/***/ }),

/***/ "./src/app/service/order.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/order.service.ts ***!
  \******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getOrderList(param) {
        return this.http.get(`${this.API_URL}/po`, { params: param });
    }
    addOrder(data) {
        return this.http.post(`${this.API_URL}/po`, data);
    }
    editOrder(id, data) {
        return this.http.put(`${this.API_URL}/po/${id}`, data);
    }
    getOrderById(id, param = null) {
        return this.http.get(`${this.API_URL}/po/${id}`, { params: param });
    }
    getOrderViewById(id) {
        return this.http.get(`${this.API_URL}/po/${id}/view`);
    }
    getOrderMasterData() {
        return this.http.get(`${this.API_URL}/po/master-data`);
    }
    getOrderfilterData() {
        return this.http.get(`${this.API_URL}/po/filter-drop-down`);
    }
    deleteOrder(id) {
        return this.http.delete(`${this.API_URL}/po/${id}`);
    }
    // Product
    getOrderProductList(param = null) {
        return this.http.get(`${this.API_URL}/po-detail`, { params: param });
    }
    getOrderProductMasterData(param = null) {
        return this.http.get(`${this.API_URL}/po-detail/master-data`, { params: param });
    }
    editOrderProduct(id, data) {
        return this.http.put(`${this.API_URL}/po-detail/${id}`, data);
    }
    addOrderProduct(data) {
        return this.http.post(`${this.API_URL}/po-detail`, data);
    }
    deleteOrderProduct(id) {
        return this.http.delete(`${this.API_URL}/po-detail/${id}`);
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], OrderService);



/***/ }),

/***/ "./src/app/service/pick-list.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/pick-list.service.ts ***!
  \**********************************************/
/*! exports provided: PickListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickListService", function() { return PickListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let PickListService = class PickListService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getPickList(param) {
        return this.http.get(`${this.API_URL}/picking`, { params: param });
    }
    addPickListGenerate(data) {
        return this.http.post(`${this.API_URL}/picking`, data);
    }
    getPickListGenerateListById(id, param = null) {
        return this.http.get(`${this.API_URL}/picking/generate-list/${id}`, { params: param });
    }
    getPickListById(id, param = null) {
        return this.http.get(`${this.API_URL}/picking/generate-picking-list/${id}`, { params: param });
    }
    getPickListGeneratedViewById(id, param = null) {
        return this.http.get(`${this.API_URL}/picking/generated-view/${id}`, { params: param });
    }
    getPickListGeneratedListById(id, param = null) {
        return this.http.get(`${this.API_URL}/picking/generated-list/${id}`, { params: param });
    }
    getPickListReportsDetails(id, param = null) {
        return this.http.get(`${this.API_URL}/picking/submit-report/${id}`, { params: param });
    }
    getPickListSubmitReports(id, data) {
        return this.http.put(`${this.API_URL}/picking/submit-report/${id}`, data);
    }
};
PickListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PickListService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], PickListService);



/***/ }),

/***/ "./src/app/service/unload.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/unload.service.ts ***!
  \*******************************************/
/*! exports provided: UnloadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnloadService", function() { return UnloadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let UnloadService = class UnloadService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getUnloadList(param) {
        return this.http.get(`${this.API_URL}/unload/generate`, { params: param });
    }
    addUnloadGenerate(data) {
        return this.http.post(`${this.API_URL}/unload/generate`, data);
    }
    // editUnload(id, data): Observable<any> {
    //   return this.http.put(`${this.API_URL}/unload/${id}`, data);
    // }
    // getUnloadById(id, param = null): Observable<any> {
    //   return this.http.get(`${this.API_URL}/unload/${id}`, { params: param });
    // }
    getUnloadGenerateListById(id, param = null) {
        return this.http.get(`${this.API_URL}/unload/generate-list/${id}`, { params: param });
    }
    getUnloadGeneratedListById(id, param = null) {
        return this.http.get(`${this.API_URL}/unload/generated-list/${id}`, { params: param });
    }
    getUnloadGeneratedViewById(id, param = null) {
        return this.http.get(`${this.API_URL}/unload/generated-view/${id}`, { params: param });
    }
    getUnloadReportsDetails(id, param = null) {
        return this.http.get(`${this.API_URL}/unload/submit-reports/${id}`, { params: param });
    }
    getUnloadSubmitReports(id, data) {
        return this.http.put(`${this.API_URL}/unload/submit-reports/${id}`, data);
    }
    deleteUnloadSubmitReports(id, param = null) {
        return this.http.delete(`${this.API_URL}/unload/submit-reports/${id}`, { params: param });
    }
};
UnloadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UnloadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], UnloadService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map