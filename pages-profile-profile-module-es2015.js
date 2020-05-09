(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/btn-add/btn-add.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/btn-add/btn-add.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"btn btn-secondary\" (click)=\"getEditPage()\" routerLink=\"['editData']\">\r\n    {{btnName}}\r\n</a>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-password/change-password.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-password/change-password.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <div class=\"w-25 mx-auto\">\r\n                    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm()\" class=\"form-horizontal\" role=\"form\">\r\n                        <div class=\"mt-3\">\r\n                            <div class=\"form-group\" [ngClass]=\"{'has-error': formErrors.old_password}\">\r\n                                <label class=\"control-label text-md-right\">Old Password <em>*</em></label>\r\n                                <div class=\"\">\r\n                                    <input type=\"password\" class=\"form-control\" placeholder=\"Old password\"\r\n                                        [formControl]=\"addForm.controls['old_password']\">\r\n                                    <span *ngIf=\"formErrors.old_password\" class=\"help-block\"\r\n                                        [innerHTML]=\"formErrors.old_password\"> </span>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n                            <div class=\"form-group\" [ngClass]=\"{'has-error': formErrors.new_password}\">\r\n                                <label class=\"control-label text-md-right\">New Password <em>*</em></label>\r\n                                <div class=\"\">\r\n                                    <input type=\"password\" class=\"form-control\" placeholder=\"New password\"\r\n                                        [formControl]=\"addForm.controls['new_password']\">\r\n                                    <span *ngIf=\"formErrors.new_password\" class=\"help-block\"\r\n                                        [innerHTML]=\"formErrors.new_password\"> </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\" [ngClass]=\"{'has-error': formErrors.confirm_password}\">\r\n                                <label class=\"control-label text-md-right\">Retype New Password <em>*</em></label>\r\n                                <div class=\"\">\r\n                                    <input type=\"password\" class=\"form-control\" placeholder=\"Confirm password\"\r\n                                        [formControl]=\"addForm.controls['confirm_password']\">\r\n                                    <span *ngIf=\"formErrors.confirm_password\" class=\"help-block\"\r\n                                        [innerHTML]=\"formErrors.confirm_password\">\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <div class=\"text-right border-top pt-4 mt-3 mb-3\">\r\n                                    <button type=\"button\" class=\"btn btn-light\" routerLink=\"/profile\">Cancel</button>\r\n                                    <button type=\"submit\" [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\" [disabled]=\"showLoader\" class=\"btn btn-secondary ml-2\">Save</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<style>\r\n    .w-25 {\r\n        width: 30% !important;\r\n    }\r\n</style>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit-profile/edit-profile.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit-profile/edit-profile.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n            <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n\r\n            <div class=\"card-body\">\r\n                <div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-4\">\r\n                            <div class=\"clearfix\">\r\n                                <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\r\n                                    <div class=\"btn-file mt-3\">\r\n                                        <div class=\"thumbnail fileinput-new uploaded-user-image rounded-circle\"\r\n                                            style=\"width: 150px; height: 150px;\">\r\n                                            <img [src]=\"editImageUrl ? editImageUrl : 'assets/no_image.png'\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"clearfix\"></div>\r\n                                        <button class=\"fileinput-new btn btn-dark btn-sm btn-file mt-3\"> Browse\r\n                                            Image\r\n                                        </button>\r\n                                        <input accept=\"image/x-png,image/jpeg\" (change)=\"fileChangeEvent($event)\"\r\n                                            type=\"file\" file-model=\"myFile\">\r\n                                        <div class=\"fileinput-preview fileinput-exists thumbnail uploaded-user-image rounded-circle\"\r\n                                            style=\"width: 150px; height: 150px;\"></div>\r\n                                    </div>\r\n                                    <div class=\"text-center\">\r\n                                        <a (click)=\"removeFile()\" class=\"btn btn-link btn-sm fileinput-exists mt-3\"\r\n                                            data-dismiss=\"fileinput\">Remove</a> </div>\r\n                                    <div class=\"clearfix mt-3\">\r\n                                        <p class=\"upload-img-label text-muted font-size-12\">*Recommended\r\n                                            Size:<br>Minimum\r\n                                            250 * 250</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-8\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"control-label text-md-right\">First Name <em>*</em></label>\r\n                                        <div class=\"\">\r\n                                            <input [formControl]=\"addForm.controls['first_name']\" type=\"text\"\r\n                                                class=\"form-control\" placeholder=\"\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"control-label text-md-right\">Last Name <em>*</em></label>\r\n                                        <div class=\"\">\r\n                                            <input type=\"text\" [formControl]=\"addForm.controls['last_name']\"\r\n                                                class=\"form-control\" placeholder=\"\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"control-label text-md-right\">Email <em>*</em></label>\r\n                                        <div class=\"\">\r\n                                            <input type=\"email\" [formControl]=\"addForm.controls['email']\"\r\n                                                class=\"form-control\" placeholder=\"\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"control-label text-md-right\">Phone Number <em>*</em></label>\r\n                                        <div class=\"d-flex\">\r\n                                            <input number [formControl]=\"addForm.controls['dial_code']\" type=\"text\"\r\n                                                class=\"form-control mr-2\" style=\"width: 100px;\"\r\n                                                placeholder=\"Dial code\">\r\n                                            <input number [formControl]=\"addForm.controls['phone_number']\" type=\"text\"\r\n                                                class=\"form-control\" placeholder=\"Enter phone number\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n                <button type=\"button\" class=\"btn btn-light\" routerLink=\"/profile\">Cancel</button>\r\n                <button type=\"submit\" [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\"\r\n                    [disabled]=\"showLoader\" class=\"btn btn-secondary ml-2\">Save</button>\r\n            </div>\r\n        </form>\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row mx-0\">\r\n            <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n            <app-btn-add [btnName]=\"'Edit Profile'\" [editData]=\"'/profile/edit'\"></app-btn-add>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body p-5\">\r\n            <div class=\"row\">\r\n                <div class=\"col-2 text-center\">\r\n                    <img [src]=\"currentUser?.image ? currentUser?.image : 'assets/no_image.png'\" class=\"rounded-circle border\" alt=\"\" width=\"150px\">\r\n                </div>\r\n                <div class=\"col-10\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <label class=\"control-label mb-1\">First Name</label>\r\n                            <div class=\"bg-light p-2\">{{currentUser?.first_name}}</div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <label class=\"control-label mb-1\">Last Name</label>\r\n                            <div class=\"bg-light p-2\">{{currentUser?.last_name}}</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mt-4\">\r\n                        <div class=\"col-md-6\">\r\n                            <label class=\"control-label mb-1\">Phone</label>\r\n                            <div class=\"bg-light p-2\"> {{currentUser?.dial_code}} {{currentUser?.phone_number}}</div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <label class=\"control-label mb-1\">Email</label>\r\n                            <div class=\"bg-light p-2\"> {{currentUser?.email}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/common-module/btn-add/btn-add.component.css":
/*!*************************************************************!*\
  !*** ./src/app/common-module/btn-add/btn-add.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1tb2R1bGUvYnRuLWFkZC9idG4tYWRkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/common-module/btn-add/btn-add.component.ts":
/*!************************************************************!*\
  !*** ./src/app/common-module/btn-add/btn-add.component.ts ***!
  \************************************************************/
/*! exports provided: BtnAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnAddComponent", function() { return BtnAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let BtnAddComponent = class BtnAddComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    getEditPage() {
        this.router.navigateByUrl(this.editData);
    }
};
BtnAddComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BtnAddComponent.prototype, "editData", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BtnAddComponent.prototype, "btnName", void 0);
BtnAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-btn-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./btn-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/btn-add/btn-add.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./btn-add.component.css */ "./src/app/common-module/btn-add/btn-add.component.css")).default]
    })
], BtnAddComponent);



/***/ }),

/***/ "./src/app/common-module/btn-add/btn-add.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/common-module/btn-add/btn-add.module.ts ***!
  \*********************************************************/
/*! exports provided: BtnAddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnAddModule", function() { return BtnAddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _btn_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./btn-add.component */ "./src/app/common-module/btn-add/btn-add.component.ts");




let BtnAddModule = class BtnAddModule {
};
BtnAddModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_btn_add_component__WEBPACK_IMPORTED_MODULE_3__["BtnAddComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _btn_add_component__WEBPACK_IMPORTED_MODULE_3__["BtnAddComponent"]
        ]
    })
], BtnAddModule);



/***/ }),

/***/ "./src/app/pages/profile/change-password/change-password.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profile/change-password/change-password.component.ts ***!
  \****************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common */ "./src/app/common.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/messages */ "./src/app/messages.ts");








let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(router, authService, fb, toastr) {
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.toastr = toastr;
        this.PageTitle = "Change Password";
        this.loadingState = true;
        this.formErrors = {
            old_password: '',
            new_password: '',
            confirm_password: '',
            apierror: '',
        };
        this.submitAttempt = false;
        this.showLoader = false;
        this.addForm = fb.group({
            old_password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            new_password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            confirm_password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        }, {
            validator: src_app_common__WEBPACK_IMPORTED_MODULE_5__["PasswordValidation"].passwordValidation()
        });
    }
    ngOnInit() { }
    submitForm() {
        this.submitAttempt = true;
        if (this.addForm.valid) {
            this.showLoader = true;
            const formData = this.addForm.value;
            this.authService.changePassword(formData).subscribe((response) => {
                this.showLoader = false;
                this.submitAttempt = false;
                if (response.success) {
                    this.toastr.success('', src_app_messages__WEBPACK_IMPORTED_MODULE_7__["errorMessage"].change_password_success);
                    this.formErrors.old_password = null;
                    this.router.navigateByUrl('/profile');
                }
                else {
                    response.error.map(obj => {
                        if (obj.hasOwnProperty('old_password')) {
                            this.formErrors.old_password = obj.old_password;
                        }
                        if (obj.hasOwnProperty('confirm_password')) {
                            this.formErrors.confirm_password = obj.confirm_password;
                        }
                        if (!obj.hasOwnProperty('old_password') && !obj.hasOwnProperty('confirm_password')) {
                            this.formErrors.apierror = `* ${response.error}`;
                        }
                    });
                }
            }, (error) => {
                this.showLoader = false;
                this.submitAttempt = false;
                this.formErrors.apierror = `* Server Error`;
            });
        }
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
ChangePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-password/change-password.component.html")).default
    })
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/pages/profile/edit-profile/edit-profile.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile/edit-profile/edit-profile.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");







let EditProfileComponent = class EditProfileComponent {
    constructor(router, fb, dataservice, commonService, authservice) {
        this.router = router;
        this.fb = fb;
        this.dataservice = dataservice;
        this.commonService = commonService;
        this.authservice = authservice;
        this.PageTitle = "Edit Profile";
        this.editImageUrl = null;
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
            email: null,
            apierror: null,
        };
        this.editId = null;
        this.addForm = this.fb.group({
            first_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            last_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            phone_number: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            dial_code: ['+', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    ngOnInit() {
        this.dataservice.currentUser.subscribe((responce) => {
            if (responce) {
                this.currentUser = responce;
            }
        });
        this.getEditObject();
    }
    getEditObject() {
        this.dataservice.currentUser.subscribe((response) => {
            if (response) {
                this.editId = response.company_id;
                this.editImageUrl = response.image,
                    this.addForm.patchValue({
                        first_name: response.first_name,
                        last_name: response.last_name,
                        dial_code: response.dial_code,
                        email: response.email,
                        phone_number: response.phone_number,
                    });
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
        }
    }
    removeFile() {
        this.selectedFile = null;
    }
    submitForm(formData) {
        if (formData.valid) {
            this.showLoader = true;
            const data = new FormData();
            data.append('first_name', formData.value.first_name);
            data.append('last_name', formData.value.last_name);
            data.append('email', formData.value.email);
            data.append('phone_number', formData.value.phone_number);
            data.append('dial_code', formData.value.dial_code);
            if (this.selectedFile) {
                data.append('file', this.selectedFile);
            }
            this.authservice.editProfile(data).subscribe((response) => {
                this.showLoader = false;
                if (response.success) {
                    this.commonService.getProfile().subscribe((response) => {
                        if (response.success) {
                            this.dataservice.setAuth(response.data);
                            this.router.navigateByUrl('/profile');
                        }
                    });
                }
                else {
                    response.error.map(obj => {
                        if (obj.hasOwnProperty('email')) {
                            this.formErrors['email'] = obj['email'];
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
};
EditProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
EditProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit-profile/edit-profile.component.html")).default
    })
], EditProfileComponent);



/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");



let ProfileComponent = class ProfileComponent {
    constructor(dataservice) {
        this.dataservice = dataservice;
        this.PageTitle = "Profile";
    }
    ngOnInit() {
        this.dataservice.currentUser.subscribe((responce) => {
            if (responce) {
                this.currentUser = responce;
            }
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html")).default
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/pages/profile/change-password/change-password.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/pages/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");












const routes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
        data: { title: 'view_profile' }
    },
    {
        path: 'change-password',
        component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"],
        data: { title: 'change_password' }
    },
    {
        path: 'edit',
        component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"],
        data: { title: 'edit_profile' }
    }
];
let ProfileModule = class ProfileModule {
};
ProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_8__["FormValidationModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_7__["BtnAddModule"]
        ], providers: [
            src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]
        ]
    })
], ProfileModule);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map