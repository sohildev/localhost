(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"auth-box private-card\">\r\n    <div class=\"auth-logo\">\r\n      <h1 class=\"text-primary\">WMS</h1>\r\n    </div>\r\n    <div class=\"auth-heading\">\r\n      <h1 class=\"heading\">Let's Get Started</h1>\r\n      <p>Hi! Please enter your login information below to send submissions as contacts.</p>\r\n    </div>\r\n    <div *ngIf=\"formErrors.apierror\" class=\"alert alert-danger alert-dismissible\">\r\n      <a class=\"close\" (click)=\"removeError()\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\r\n      <span [innerHTML]=\"formErrors.apierror\"> </span>\r\n    </div>\r\n    <form *ngIf=\"loginType == 'email'\" class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm()\">\r\n      <div class=\"form-group field-loginform-email required\">\r\n        <label class=\"control-label\">Email Address</label>\r\n        <input type=\"text\" [formControl]=\"loginForm.controls['email']\" class=\"form-control input-lg\"\r\n          placeholder=\"Email ID\">\r\n      </div>\r\n      <div class=\"form-group field-loginform-password required\">\r\n        <label class=\"control-label\">Password</label>\r\n        <input type=\"password\" [formControl]=\"loginForm.controls['password']\" class=\"form-control input-lg\"\r\n          placeholder=\"Password\">\r\n      </div>\r\n      <div class=\"\">\r\n        <div class=\"form-group\">\r\n          <div class=\"form-check form-check-inline mr-0\">\r\n            <div class=\"checkbox-container\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"all\">\r\n              <span class=\"checkmark\"></span>\r\n            </div>\r\n            <label class=\"checkbox-set mb-0 ml-1\"> Remember Me</label>\r\n          </div>\r\n\r\n          <a routerLink=\"/forgot-password\" class=\"pull-right\"><small>Forgot\r\n              password?</small></a>\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block mt-4\"\r\n        [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\" [disabled]=\"showLoader\">\r\n        Log In\r\n      </button>\r\n      <p class=\"text-muted mt-4 m-bottom-0 text-center\">Don't have an account yet?<a routerLink=\"/\"> Sign\r\n          Up</a></p>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common */ "./src/app/common.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");









let LoginComponent = class LoginComponent {
    constructor(config, router, activatedRoute, authService, commonService, fBuilder, dataService) {
        this.config = config;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.commonService = commonService;
        this.fBuilder = fBuilder;
        this.dataService = dataService;
        this.formErrors = {
            apierror: null
        };
        this.showLoader = false;
        this.loginType = 'email';
        this.config.config = { showHeader: false };
        this.loginForm = this.fBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, src_app_common__WEBPACK_IMPORTED_MODULE_6__["validateEmailFormControl"]])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
        });
    }
    ngOnInit() {
    }
    changeLoginType(type) {
        this.loginType = type;
    }
    getLoginType(type) {
        this.loginType = type;
    }
    submitForm() {
        if (this.loginForm.valid) {
            this.showLoader = true;
            const formData = {
                email: this.loginForm.value.email.toLowerCase(),
                password: this.loginForm.value.password,
                remember_me: this.loginForm.value.remember_me,
            };
            this.authService.login(formData).subscribe((response) => {
                this.showLoader = false;
                if (response.success) {
                    src_app_common__WEBPACK_IMPORTED_MODULE_6__["CommonFunction"].resetForm(this.loginForm);
                    const user = response.data.User;
                    this.dataService.setAuth(response.data);
                    if (user.is_superuser) {
                        this.dataService.purgeCompany();
                    }
                    this.config.config = { showHeader: true };
                    this.activatedRoute.snapshot.queryParamMap.get('next');
                    const nextURL = this.activatedRoute.snapshot.queryParamMap.get('next') ?
                        this.activatedRoute.snapshot.queryParamMap.get('next') : '/dashboard';
                    this.router.navigateByUrl(nextURL);
                }
                else {
                    this.formErrors.apierror = `* ${response.error[0]}`;
                }
            }, (error) => {
                this.formErrors.apierror = `* Server Error`;
                this.showLoader = false;
            });
        }
    }
    removeError() {
        this.formErrors.apierror = null;
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_service_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");









const routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        data: { title: 'login' }
    }
];
let LoginModule = class LoginModule {
};
LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_7__["FormValidationModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [
            src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        ]
    })
], LoginModule);



/***/ })

}]);
//# sourceMappingURL=auth-login-login-module-es2015.js.map