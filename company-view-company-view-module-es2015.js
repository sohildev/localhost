(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-view-company-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company/company-view/company-view.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company/company-view/company-view.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"page-header\">\n        <div class=\"row m-0\">\n            <h2 class=\"mr-auto\">Company Details</h2>\n            \n            <div class=\"ml-3\">\n                <a class=\"btn shadow-none btn-link\" routerLink=\"/company\">\n                  <i class=\"fa fa-chevron-left mr-2 mt-1\"></i>Back to list\n                </a>\n              </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <div class=\"tab-pane fade show active\" id=\"details\" role=\"tabpanel\" aria-labelledby=\"details-tab\">\n                <div class=\"row\">\n                    <div class=\"col-3\">\n                        <div>\n                            <img width=\"250px\"\n                            [src]=\"objectArray?.company_logo ? objectArray?.company_logo : 'assets/no_image.png'\"\n                             alt=\"company logo\">\n                        </div>\n                    </div>\n                    <div class=\"col-9\">\n                        <div class=\"row mr-3 ml-3\">\n                            <div class=\"col\">\n                                <label class=\"text-muted mb-1 font-weight-bold\">Comapny Name</label>\n                                <div>{{objectArray?.company_name}}</div>\n                            </div>\n\n                            <div class=\"col\">\n                                <label class=\"text-muted mb-1 font-weight-bold\">Company Email</label>\n                                <div>{{objectArray?.company_email}}</div>\n                            </div>\n                        </div>\n\n\n                        <div class=\"row mt-5 mr-3 ml-3\">\n                            <div class=\"col\">\n                                <label class=\"text-muted mb-1 font-weight-bold\">Dile Code</label>\n                                <div>{{objectArray?.dial_code}}</div>\n                            </div>\n                            <div class=\"col\">\n                                <label class=\"text-muted mb-1 font-weight-bold\">Phone Number</label>\n                                <div>{{objectArray?.phone_no}}</div>\n                            </div>\n                        </div>\n                        <div class=\"row mt-5 mr-3 ml-3\">\n                            <div class=\"col\">\n                                <label class=\"text-muted mb-1 font-weight-bold\">Comapny Domain</label>\n                                <div>{{objectArray?.company_domain}}</div>\n                            </div>\n                            <div class=\"col\">\n                                <label class=\"text-muted mb-1 font-weight-bold\">Company SubDomain</label>\n                                <div>{{objectArray?.company_subdomain}}</div>\n                            </div>\n                        </div>\n\n                        <div class=\"row  mt-5 mr-3 ml-3\">\n                            <div class=\"col\">\n                                <label class=\"text-muted mb-1 font-weight-bold\">language</label>\n                                <div>{{objectArray?.language?.label}}</div>\n                            </div>\n                            <div class=\"col\">\n                                <label class=\"text-muted mb-1 font-weight-bold\">Currency</label>\n                                <div>{{objectArray?.currency?.label}}</div>\n                            </div>\n                        </div>\n\n                        <div class=\"row  mt-5 mr-3 ml-3\">\n                            <div class=\"col\">\n                                <label class=\"text-muted mb-1 font-weight-bold\">Time Format</label>\n                                <div>{{objectArray?.time_format?.label}}</div>\n                            </div>\n                            <div class=\"col\">\n                                <label class=\"text-muted mb-1 font-weight-bold\">Date Format</label>\n                                <div>{{objectArray?.date_format?.label}}</div>\n                            </div>\n                           \n                        </div>\n\n                        <div class=\"row  mt-5 mr-3 ml-3\">\n                            <div class=\"col\">\n                                <label class=\"text-muted mb-1 font-weight-bold\">Timezone</label>\n                                <div>{{objectArray?.timezone?.label}}</div>\n                            </div>\n                            <div class=\"col\">\n                                <label class=\"text-muted mb-1 font-weight-bold\">Address</label>\n                                <div>{{objectArray?.address?.street_address}}</div>\n                                <div>{{objectArray?.address?.city}}</div>\n                                <div>{{objectArray?.address?.state}}</div>\n                                <div>{{objectArray?.address?.country_name}}</div>\n                               \n                            </div>\n                        </div>\n\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/pages/company/company-view/company-view.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/company/company-view/company-view.component.ts ***!
  \**********************************************************************/
/*! exports provided: CompanyViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyViewComponent", function() { return CompanyViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/company.service */ "./src/app/service/company.service.ts");




let CompanyViewComponent = class CompanyViewComponent {
    constructor(activatedRoute, companyservice) {
        this.activatedRoute = activatedRoute;
        this.companyservice = companyservice;
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.viewId = this.activatedRoute.snapshot.paramMap.get('id');
        }
    }
    ngOnInit() {
        this.companyservice.getCompanyViewById(this.viewId).subscribe((response) => {
            if (response.success) {
                this.objectArray = response.data;
            }
        });
    }
};
CompanyViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] }
];
CompanyViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./company-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company/company-view/company-view.component.html")).default
    })
], CompanyViewComponent);



/***/ }),

/***/ "./src/app/pages/company/company-view/company-view.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/company/company-view/company-view.module.ts ***!
  \*******************************************************************/
/*! exports provided: routes, CompanyViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyViewModule", function() { return CompanyViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _company_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-view.component */ "./src/app/pages/company/company-view/company-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _company_view_component__WEBPACK_IMPORTED_MODULE_3__["CompanyViewComponent"]
    }
];
let CompanyViewModule = class CompanyViewModule {
};
CompanyViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_company_view_component__WEBPACK_IMPORTED_MODULE_3__["CompanyViewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], CompanyViewModule);



/***/ })

}]);
//# sourceMappingURL=company-view-company-view-module-es2015.js.map