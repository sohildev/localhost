(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-add-company-add-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company/company-add/company-add.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company/company-add/company-add.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"page-header border-b\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div>\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <div class=\"clearfix\">\r\n                <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\r\n                  <div class=\"btn-file mt-3\">\r\n                    <div class=\"thumbnail fileinput-new uploaded-user-image rounded-circle\"\r\n                      style=\"width: 150px; height: 150px;\">\r\n                      <img [src]=\"editImageUrl ? editImageUrl : 'assets/no_image.png'\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <button class=\"fileinput-new btn btn-dark btn-sm btn-file mt-3\"> Browse\r\n                      Image\r\n                    </button>\r\n                    <input accept=\"image/x-png,image/jpeg\" (change)=\"fileChangeEvent($event)\" type=\"file\"\r\n                      file-model=\"myFile\">\r\n                    <div class=\"fileinput-preview fileinput-exists thumbnail uploaded-user-image rounded-circle\"\r\n                      style=\"width: 150px; height: 150px;\"></div>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <a (click)=\"removeFile()\" class=\"btn btn-link btn-sm fileinput-exists mt-3\"\r\n                      data-dismiss=\"fileinput\">Remove</a> </div>\r\n                  <div class=\"clearfix mt-3\">\r\n                    <p class=\"upload-img-label text-muted font-size-12\">*Recommended\r\n                      Size:<br>Minimum\r\n                      250 * 250</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-8\">\r\n              <div class=\"row\">\r\n\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Name <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['company_name']\" type=\"text\" class=\"form-control\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Email <em>*</em></label>\r\n                    \r\n                    <div class=\"\" [ngClass]=\"{'has-error': formErrors.company_email}\">\r\n                      <input [formControl]=\"addForm.controls['company_email']\" type=\"text\" class=\"form-control\"\r\n                        placeholder=\"\">\r\n                      <span *ngIf=\"formErrors.company_email\" class=\"help-block\"\r\n                        [innerHTML]=\"formErrors.company_email\"></span>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Company Domain <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['company_domain']\" type=\"text\" class=\"form-control\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Company Subdomain <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['company_subdomain']\" type=\"text\" class=\"form-control\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Currency <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <ng-select [formControl]=\"addForm.controls['currency']\"\r\n                        [items]=\"currencyListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Currency\">\r\n                      </ng-select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Language <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <ng-select [formControl]=\"addForm.controls['language']\" \r\n                        [items]=\"languageListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Language\">\r\n                      </ng-select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Time Format <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <ng-select [formControl]=\"addForm.controls['time_format']\"\r\n                        [items]=\"timeFormatListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Time Format\">\r\n                      </ng-select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Timezone <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <ng-select [formControl]=\"addForm.controls['timezone']\" \r\n                        [items]=\"timezoneListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Timezone\">\r\n                      </ng-select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Date Format <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <ng-select [formControl]=\"addForm.controls['date_format']\" \r\n                        [items]=\"dateFormatListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Date Format\">\r\n                      </ng-select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                \r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Country <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <ng-select [formControl]=\"addForm.controls['country_id']\" (change)=\"getCountryName($event)\"\r\n                        [items]=\"countryListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Country\">\r\n                      </ng-select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">State <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['state']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">City <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['city']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label text-md-right\">Street Address <em>*</em></label>\r\n                    <div class=\"\">\r\n                      <input [formControl]=\"addForm.controls['street_address']\" type=\"text\" class=\"form-control\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                \r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label text-md-right\">Phone Number <em>*</em></label>\r\n                <div class=\"d-flex\">\r\n                  <input number [formControl]=\"addForm.controls['dial_code']\" type=\"text\" class=\"form-control mr-2\"\r\n                    style=\"width: 100px;\" placeholder=\"Dial code\">\r\n                  <input number [formControl]=\"addForm.controls['phone_no']\" type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter phone number\">\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"form-group\">\r\n                <label class=\"control-label text-md-right\">Address</label>\r\n                <textarea [formControl]=\"addForm.controls['address']\" class=\"form-control\" rows=\"2\"></textarea>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" routerLink=\"/manage/client\">Cancel</button>\r\n        <button type=\"submit\" [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\" [disabled]=\"showLoader\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/company/company-add/company-add.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/company/company-add/company-add.component.ts ***!
  \********************************************************************/
/*! exports provided: CompanyAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyAddComponent", function() { return CompanyAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var src_app_service_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/company.service */ "./src/app/service/company.service.ts");






let CompanyAddComponent = class CompanyAddComponent {
    constructor(router, activatedRoute, fb, companyservice, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.companyservice = companyservice;
        this.commonService = commonService;
        this.PageTitle = "Company";
        this.editImageUrl = null;
        this.addNewRadio = false;
        this.timezoneListArray = [];
        this.dateFormatListArray = [];
        this.timeFormatListArray = [];
        this.languageListArray = [];
        this.currencyListArray = [];
        this.countryListArray = [];
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
            company_email: null,
            apierror: null,
        };
        this.isEditing = false;
        this.editId = null;
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }
        this.addForm = this.fb.group({
            company_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            company_email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            phone_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            dial_code: ['+', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            address: [null],
            country_name: [null],
            company_domain: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            company_subdomain: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            language: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            currency: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            time_format: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            timezone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            date_format: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            country_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            street_address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    ngOnInit() {
        this.getCountryList();
        this.getMasterData();
        if (this.isEditing) {
            this.getEditObject();
        }
    }
    getMasterData() {
        this.companyservice.getCompanyMasterData().subscribe((res) => {
            if (res.success) {
                this.timezoneListArray = res.data.timezone;
                this.dateFormatListArray = res.data.date_format;
                this.timeFormatListArray = res.data.time_format;
                this.languageListArray = res.data.language;
                this.currencyListArray = res.data.currency;
            }
        });
    }
    getCountryList() {
        this.commonService.getCountryList().subscribe((res) => {
            if (res.success) {
                this.countryListArray = res.data.country_list;
            }
        });
    }
    getEditObject() {
        this.companyservice.getCompanyById(this.editId).subscribe((response) => {
            if (response.success) {
                this.editImageUrl = response.data.company_logo,
                    this.addForm.patchValue({
                        company_name: response.data.company_name,
                        category_id: response.data.category_id,
                        dial_code: response.data.dial_code,
                        company_email: response.data.company_email,
                        time_format: response.data.time_format,
                        timezone: response.data.timezone,
                        date_format: response.data.date_format,
                        company_domain: response.data.company_domain,
                        company_subdomain: response.data.company_subdomain,
                        language: response.data.language,
                        phone_no: response.data.phone_no,
                        currency: response.data.currency,
                        country_name: response.data.address.country_name,
                        country_id: response.data.address.country_id,
                        state: response.data.address.state,
                        city: response.data.address.city,
                        street_address: response.data.address.street_address ? response.data.address.street_address : ''
                    });
            }
            else {
                this.router.navigateByUrl('/company');
            }
        });
    }
    fileChangeEvent(fileInput) {
        const reg = /(.*?)\.(jpg|jpeg|png|gif|giff)$/;
        if (!fileInput.target.files[0].name.match(reg)) {
            swal.fire('Invalid File!', 'Please select valid file ', 'error');
            this.removeFile();
            return false;
        }
        else {
            this.removeFile();
            this.selectedFile = fileInput.target.files[0];
            // this.editImageUrl = String(fileInput.target.value);
        }
    }
    removeFile() {
        this.selectedFile = null;
    }
    getCountryName(data) {
        this.addForm.patchValue({ country_name: data.label });
    }
    submitForm(formData) {
        if (formData.valid) {
            this.showLoader = true;
            const data = new FormData();
            data.append('company_name', formData.value.company_name);
            data.append('company_email', formData.value.company_email);
            data.append('phone_no', formData.value.phone_no);
            data.append('company_domain', formData.value.company_domain);
            data.append('company_subdomain', formData.value.company_subdomain);
            data.append('dial_code', formData.value.dial_code);
            data.append('language', formData.value.language);
            data.append('currency', formData.value.currency);
            data.append('time_format', formData.value.time_format);
            data.append('timezone', formData.value.timezone);
            data.append('date_format', formData.value.date_format);
            let address = {
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
                this.companyservice.editCompany(this.editId, data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/company');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('company_email')) {
                                this.formErrors['company_email'] = obj['company_email'];
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
                this.companyservice.addCompany(data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/company');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('company_email')) {
                                this.formErrors['company_email'] = obj['company_email'];
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
CompanyAddComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
CompanyAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./company-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company/company-add/company-add.component.html")).default
    })
], CompanyAddComponent);



/***/ }),

/***/ "./src/app/pages/company/company-add/company-add.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/company/company-add/company-add.module.ts ***!
  \*****************************************************************/
/*! exports provided: CompanyAddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyAddModule", function() { return CompanyAddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _company_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-add.component */ "./src/app/pages/company/company-add/company-add.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");









const routes = [
    {
        path: '',
        component: _company_add_component__WEBPACK_IMPORTED_MODULE_3__["CompanyAddComponent"],
        data: { title: 'add_company' }
    }
];
let CompanyAddModule = class CompanyAddModule {
};
CompanyAddModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_company_add_component__WEBPACK_IMPORTED_MODULE_3__["CompanyAddComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__["FormValidationModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], CompanyAddModule);



/***/ })

}]);
//# sourceMappingURL=company-add-company-add-module-es2015.js.map