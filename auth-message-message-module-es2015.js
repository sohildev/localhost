(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-message-message-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/message/message.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/message/message.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"sign-in-form\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"brand text-center d-block m-b-30 m-t-20\">\r\n                  <div class=\"auth-logo\">\r\n                    <h1 class=\"text-primary\">WMS</h1>\r\n                  </div>\r\n                </div>\r\n                <h1 class=\"sign-in-heading text-center\">Link is Expired</h1>\r\n                <p class=\"text-center m-b-20 text-muted\">Please try again</p>\r\n                <a class=\"btn btn-primary btn-block btn-lg\" [routerLink]=\"['/login']\"> Log In</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/auth/message/message.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/message/message.component.ts ***!
  \***************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MessageComponent = class MessageComponent {
    constructor() { }
    ngOnInit() { }
};
MessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/message/message.component.html")).default
    })
], MessageComponent);



/***/ }),

/***/ "./src/app/auth/message/message.module.ts":
/*!************************************************!*\
  !*** ./src/app/auth/message/message.module.ts ***!
  \************************************************/
/*! exports provided: MessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return MessageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.component */ "./src/app/auth/message/message.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");






const routes = [
    {
        path: '',
        component: _message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"],
    },
];
let MessageModule = class MessageModule {
};
MessageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [
            src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        ]
    })
], MessageModule);



/***/ })

}]);
//# sourceMappingURL=auth-message-message-module-es2015.js.map