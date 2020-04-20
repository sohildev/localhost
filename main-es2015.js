(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- *ngIf=\"is_authenticated\"\r\n*ngIf=\"customConfig?.showHeader\"\r\n-->\r\n<app-header *ngIf=\"customConfig?.showHeader\"></app-header>\r\n<main role=\"main\" style=\"margin-top: 60px; height: 100%;\">\r\n  <router-outlet></router-outlet>\r\n</main>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/dashboard-box/dashboard-box.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/dashboard-box/dashboard-box.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card {{classGradient}}\">\r\n    <div class=\"card-body\">\r\n    <h4 class=\"text-white mb-1\">{{currentCompany?.currency?.label }} {{totalAmt}}</h4>\r\n      <h6 class=\"text-white\">{{totalText}}</h6>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/notifications/notifications.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/notifications/notifications.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"notification-dropdown\">\r\n    <h5 class=\"card-title px-3 pt-2 mb-0\">Notifications</h5>\r\n    <div class=\"p-3\">\r\n        <div class=\"timeline timeline-border\">\r\n            <div class=\"timeline-list\">\r\n                <div class=\"timeline-info\">\r\n                    <small class=\"text-muted\" title=\"Profile\">PM</small>\r\n                </div>\r\n            </div>\r\n            <div class=\"timeline-list timeline-border timeline-primary\">\r\n                <div class=\"timeline-info\">\r\n                    <div>Skype call with development team</div><small class=\"text-muted\">07/07/18, 1:00\r\n                        PM</small>\r\n                </div>\r\n            </div>\r\n            <div class=\"timeline-list  timeline-border timeline-accent\">\r\n                <div class=\"timeline-info\">\r\n                    <div>Programming control system</div><small class=\"text-muted\">07/09/18, 10:00 AM -\r\n                        6:00\r\n                        PM</small>\r\n                </div>\r\n            </div>\r\n            <div class=\"timeline-list  timeline-border timeline-success\">\r\n                <div class=\"timeline-info\">\r\n                    <div>Lunch with Peter Higgs</div><small class=\"text-muted\">07/10/18, 12:00\r\n                        PM</small>\r\n                </div>\r\n            </div>\r\n            <div class=\"timeline-list  timeline-border timeline-warning\">\r\n                <div class=\"timeline-info\">\r\n                    <div><a href=\"#\"><strong>Approve Request</strong></a> for new training material by\r\n                    </div>\r\n                    <small class=\"text-muted\">07/11/18, 9:00 AM</small>\r\n                </div>\r\n            </div>\r\n            <div class=\"timeline-list  timeline-border timeline-info\">\r\n                <div class=\"timeline-info\">\r\n                    <div><a href=\"#\"><strong>RSVP</strong></a> for this year's hackathon.</div><small\r\n                        class=\"text-muted\">07/11/18, 1:30 PM</small>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/profile-drop/profile-drop.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/profile-drop/profile-drop.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div class=\"dropdown-header pb-3\">\r\n    <div class=\"media d-user\">\r\n      <span class=\"bg-white rounded-circle p-2 font-weight-bold mr-2\" style=\"width: 35px; height: 35px;\r\n            background-color: #e4e3f3 !important;\">\r\n        {{currentUserDetail?.first_name.charAt(0)}}{{currentUserDetail?.last_name.charAt(0)}}\r\n      </span>\r\n      <div class=\"media-body\">\r\n        <h5 class=\"mt-0 mb-0\">{{currentUserDetail?.first_name}} {{currentUserDetail?.last_name}}</h5>\r\n        <span>{{currentUserDetail?.email}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <a class=\"dropdown-item d-flex align-items-center\" routerLink=\"/profile\" title=\"My Profile\"><i\r\n      class=\"la la-user fa-2x mr-2\"></i> My Profile </a>\r\n  <a  *ngIf=\"isCompanySelected\" class=\"dropdown-item d-flex align-items-center\" routerLink=\"/setting\" title=\"Setting\"><i\r\n      class=\"la la-cog fa-2x mr-2\"></i> Setting </a>\r\n  \r\n  <div class=\"dropdown-divider\"></div>\r\n  <a class=\"dropdown-item d-flex align-items-center\" routerLink=\"/profile/change-password\" title=\"Change Password\"><i\r\n      class=\"la la-lock fa-2x mr-2\"></i> Change Password </a>\r\n  <a class=\"dropdown-item d-flex align-items-center\" *ngIf=\"currentUserDetail?.is_superuser && isCompanySelected\"\r\n    (click)=\"removeCompany()\" title=\"Go to My Console\"><i class=\"la la-eye fa-2x mr-2\"></i> Go to My Console </a>\r\n  <a class=\"dropdown-item d-flex align-items-center\" (click)=\"onLogOut()\" title=\"Sign Out\"><i\r\n      class=\"la la-sign-out fa-2x mr-2\"></i> Sign Out</a>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\r\n  <a class=\"navbar-brand text-white\" routerLink=\"/\">{{brandTitle}}</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\r\n    aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n    <ul class=\"navbar-nav mx-auto\">\r\n      <li class=\"nav-item\" routerLinkActive=\"active\" *ngFor=\"let navLink of navLink\"\r\n        [ngClass]=\"{'dropdown' : navLink?.subNav }\">\r\n        <a class=\"nav-link\" [routerLink]=\"navLink?.r_navUrl\" href=\"{{navLink?.navUrl}}\" class=\"nav-link\"\r\n          [ngClass]=\"{'dropdown-toggle' : navLink?.subNav}\" id=\"navbarDropdown_{{navLink?.navId}}\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\r\n          {{navLink?.navText}}\r\n          <i *ngIf=\"navLink?.subNav\" class=\"la la-angle-down\" style=\"font-size: 12px;\"></i>\r\n        </a>\r\n        <div class=\"dropdown-menu\" attr.aria-label=\"attr.navbarDropdown_{{navLink?.navId}}\" *ngIf=\"navLink?.subNav\">\r\n          <a class=\"dropdown-item\" routerLink=\"{{sub.navUrl}}\" routerLinkActive=\"active\"\r\n            [routerLinkActiveOptions]=\"{exact: true}\" *ngFor=\"let sub of navLink?.subNav\">{{sub.navLink}}</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"navbar-nav nav-right0\">\r\n      <li *ngIf=\"isCompanySelected\" class=\"nav-item\">\r\n        <a class=\"nav-link text-primary p-0 btn-manage\" routerLink=\"/manage/brand\" title=\"Manage\">\r\n          <i class=\"la la-cog\"></i>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link text-primary dropdown-toggle p-0 btn-notification\" title=\"Notification\" href=\"#\"\r\n          id=\"notification\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"la la-bell\" style=\"font-size: 26px; color: #f0f7fd !important;\"></i>\r\n          <!-- <fa name=\"bell\" style=\"font-size: 21px; color: #7c92a7 !important;\"></fa> -->\r\n        </a>\r\n        <!-- Notification Popup -->\r\n        <app-notifications class=\"dropdown-menu drop-menu-right\" aria-labelledby=\"notification\">\r\n        </app-notifications>\r\n      </li>\r\n      <li class=\"nav-item dropdown user-prof-box\">\r\n        <button role=\"button\" type=\"button\" class=\"btn dropdown shadow-none p-0\" id=\"profileDrop\" data-toggle=\"dropdown\">\r\n          <span class=\"bg-primary text-white rounded-circle p-2 font-weight-bold\"\r\n          style=\"width: 40px; height: 40px; line-height: 26px; display: block;\">\r\n            {{currentUserDetail?.first_name.charAt(0)}}{{currentUserDetail?.last_name.charAt(0)}}</span>\r\n          <!-- <img [src]=\"currentUserDetail?.image ? currentUserDetail?.image :'assets/no_image.png'\" alt=\"\"> -->\r\n\r\n        </button>\r\n        <!-- Profile Dropdown -->\r\n        <app-profile-drop class=\"dropdown-menu drop-menu-right\" aria-labelledby=\"profileDrop\">\r\n        </app-profile-drop>\r\n\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/_guards */ "./src/app/service/_guards/index.ts");




const routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | auth-login-login-module */[__webpack_require__.e("default~auth-forgot-password-forgot-password-module~auth-login-login-module~auth-reset-password-rese~b21af0a8"), __webpack_require__.e("common"), __webpack_require__.e("auth-login-login-module")]).then(__webpack_require__.bind(null, /*! ./auth/login/login.module */ "./src/app/auth/login/login.module.ts")).then(m => m.LoginModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["LoginRedirect"]],
        data: { title: 'login' },
    },
    // {
    //   path: 'signup',
    //   loadChildren: () => import('./auth/signup/signup.module').then(m => m.SignupModule),
    //   canActivate: [LoginRedirect],
    //   data: { title: 'singup' },
    // },
    {
        path: 'forgot-password',
        loadChildren: () => Promise.all(/*! import() | auth-forgot-password-forgot-password-module */[__webpack_require__.e("default~auth-forgot-password-forgot-password-module~auth-login-login-module~auth-reset-password-rese~b21af0a8"), __webpack_require__.e("common"), __webpack_require__.e("auth-forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null, /*! ./auth/forgot-password/forgot-password.module */ "./src/app/auth/forgot-password/forgot-password.module.ts")).then(m => m.ForgotPasswordModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["LoginRedirect"]],
        data: { title: 'forgot_password' },
    },
    {
        path: 'reset-password/:token',
        loadChildren: () => Promise.all(/*! import() | auth-reset-password-reset-password-module */[__webpack_require__.e("default~auth-forgot-password-forgot-password-module~auth-login-login-module~auth-reset-password-rese~b21af0a8"), __webpack_require__.e("common"), __webpack_require__.e("auth-reset-password-reset-password-module")]).then(__webpack_require__.bind(null, /*! ./auth/reset-password/reset-password.module */ "./src/app/auth/reset-password/reset-password.module.ts")).then(m => m.ResetPasswordModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["LoginRedirect"]],
        data: { title: 'reset_password' },
    },
    {
        path: 'link-expired',
        loadChildren: () => Promise.all(/*! import() | auth-message-message-module */[__webpack_require__.e("common"), __webpack_require__.e("auth-message-message-module")]).then(__webpack_require__.bind(null, /*! ./auth/message/message.module */ "./src/app/auth/message/message.module.ts")).then(m => m.MessageModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["LoginRedirect"]],
        data: { title: 'link_expired' },
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-dashboard-dashboard-module */ "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./pages/dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts")).then(m => m.DashboardModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards__WEBPACK_IMPORTED_MODULE_3__["IsCompanySelected"]],
        data: { title: 'dashboard' },
    },
    {
        path: 'company',
        loadChildren: () => Promise.all(/*! import() | pages-company-company-list-company-list-module */[__webpack_require__.e("default~auth-forgot-password-forgot-password-module~auth-login-login-module~auth-reset-password-rese~b21af0a8"), __webpack_require__.e("default~pages-company-company-list-company-list-module~pages-inbound-inbound-module~pages-master-mas~9cad3811"), __webpack_require__.e("common"), __webpack_require__.e("pages-company-company-list-company-list-module")]).then(__webpack_require__.bind(null, /*! ./pages/company/company-list/company-list.module */ "./src/app/pages/company/company-list/company-list.module.ts")).then(m => m.CompanyListModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards__WEBPACK_IMPORTED_MODULE_3__["CompanyRedirectService"]],
        data: { title: 'company_list', module: 'company', action: 'list' },
    },
    {
        path: 'manage',
        loadChildren: () => Promise.all(/*! import() | pages-master-master-module */[__webpack_require__.e("default~auth-forgot-password-forgot-password-module~auth-login-login-module~auth-reset-password-rese~b21af0a8"), __webpack_require__.e("default~add-configuration-add-configuration-module~add-order-add-order-module~add-put-away-add-put-a~5fe00dad"), __webpack_require__.e("default~pages-company-company-list-company-list-module~pages-inbound-inbound-module~pages-master-mas~9cad3811"), __webpack_require__.e("common"), __webpack_require__.e("pages-master-master-module")]).then(__webpack_require__.bind(null, /*! ./pages/master/master.module */ "./src/app/pages/master/master.module.ts")).then(m => m.MasterModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards__WEBPACK_IMPORTED_MODULE_3__["IsCompanySelected"]],
    },
    {
        path: 'inbound',
        loadChildren: () => Promise.all(/*! import() | pages-inbound-inbound-module */[__webpack_require__.e("default~auth-forgot-password-forgot-password-module~auth-login-login-module~auth-reset-password-rese~b21af0a8"), __webpack_require__.e("default~pages-company-company-list-company-list-module~pages-inbound-inbound-module~pages-master-mas~9cad3811"), __webpack_require__.e("default~add-sales-order-add-sales-order-module~generate-generate-module~generate-pick-list-generate-~f3681f3e"), __webpack_require__.e("common"), __webpack_require__.e("pages-inbound-inbound-module")]).then(__webpack_require__.bind(null, /*! ./pages/inbound/inbound.module */ "./src/app/pages/inbound/inbound.module.ts")).then(m => m.InboundModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards__WEBPACK_IMPORTED_MODULE_3__["IsCompanySelected"]],
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() | pages-profile-profile-module */[__webpack_require__.e("default~auth-forgot-password-forgot-password-module~auth-login-login-module~auth-reset-password-rese~b21af0a8"), __webpack_require__.e("common"), __webpack_require__.e("pages-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./pages/profile/profile.module */ "./src/app/pages/profile/profile.module.ts")).then(m => m.ProfileModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"]],
    },
    {
        path: 'setting',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-company-setting-company-setting-view-company-setting-view-module */ "pages-company-setting-company-setting-view-company-setting-view-module").then(__webpack_require__.bind(null, /*! ./pages/company-setting/company-setting-view/company-setting-view.module */ "./src/app/pages/company-setting/company-setting-view/company-setting-view.module.ts")).then(m => m.CompanySettingViewModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards__WEBPACK_IMPORTED_MODULE_3__["IsCompanySelected"]],
    },
    {
        path: 'stock',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-operation-operation-module */ "pages-operation-operation-module").then(__webpack_require__.bind(null, /*! ./pages/operation/operation.module */ "./src/app/pages/operation/operation.module.ts")).then(m => m.OperationModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards__WEBPACK_IMPORTED_MODULE_3__["IsCompanySelected"]],
    },
    {
        path: 'outbound',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-outbound-outbound-module */ "pages-outbound-outbound-module").then(__webpack_require__.bind(null, /*! ./pages/outbound/outbound.module */ "./src/app/pages/outbound/outbound.module.ts")).then(m => m.OutboundModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards__WEBPACK_IMPORTED_MODULE_3__["IsCompanySelected"]],
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _service_jwt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/jwt.service */ "./src/app/service/jwt.service.ts");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm2015/add/operator/mergeMap.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messages */ "./src/app/messages.ts");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/common.service */ "./src/app/service/common.service.ts");













let AppComponent = class AppComponent {
    constructor(renderer, router, activatedRoute, titleService, jwtService, configService, dataService, commonService) {
        this.renderer = renderer;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.jwtService = jwtService;
        this.configService = configService;
        this.dataService = dataService;
        this.commonService = commonService;
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                if (this.previousUrl) {
                    this.renderer.removeClass(document.body, this.previousUrl);
                }
                const currentUrlSlug = event.url.slice(1);
                if (currentUrlSlug) {
                    this.renderer.addClass(document.body, currentUrlSlug);
                }
                this.previousUrl = currentUrlSlug;
            }
        });
        if (this.jwtService.getToken()) {
            this.getProfile();
            this.router.events.filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]).map(() => this.activatedRoute).
                map((route) => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }).map((route) => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }).
                filter((route) => route.outlet === 'primary').mergeMap((route) => route.data).subscribe((event) => {
                // You only receive NavigationEnd events
                // console.log('current route ', this.router.url);
                // console.log(event['title']);
                // setting page title
                this.titleService.setTitle(_messages__WEBPACK_IMPORTED_MODULE_11__["pageTitles"][event.title]);
                if (this.isAuthenticated && this.isCompanySelected) {
                    this.dataService.permission.subscribe((role) => {
                        if (role && event['module'] && event['action']) {
                            const checkPerms = role[event['module']] ? role[event['module']][event['action']] : false;
                            if (!checkPerms) {
                                this.router.navigateByUrl('/dashboard');
                                return;
                            }
                        }
                    });
                }
                else {
                    // console.log('inside else');
                    this.dataService.isAuthenticated.subscribe((isLoggedIn) => {
                        this.isAuthenticated = isLoggedIn;
                        this.dataService.permission.subscribe((role) => {
                            if (role && event['module'] && event['action']) {
                                const checkPerms = role[event['module']] ? role[event['module']][event['action']] : false;
                                if (!checkPerms) {
                                    this.router.navigateByUrl('/dashboard');
                                    return;
                                }
                            }
                        });
                        this.dataService.isCompanySelected.subscribe((response) => {
                            this.isCompanySelected = response;
                        });
                    });
                }
            });
        }
        else {
            // this.dataService.checkDomain();
            this.router.events.filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]).subscribe((event) => {
                // setting page title
                //this.titleService.setTitle(pageTitles[this.activatedRoute.snapshot.children[0].firstChild.data['title']]);
            });
        }
    }
    getProfile() {
        this.commonService.getProfile().subscribe((response) => {
            if (response.success) {
                this.dataService.setAuth(response.data);
            }
        });
    }
    ngOnInit() {
        // this._config.config = { showLoader: false };
        // Subscribe to config changes
        this.configService.config.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(0)).subscribe((config) => {
            // console.log(config);
            this.customConfig = config;
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
    { type: _service_jwt_service__WEBPACK_IMPORTED_MODULE_7__["JwtService"] },
    { type: src_app_service_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _service_common_service__WEBPACK_IMPORTED_MODULE_12__["CommonService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _service_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/_helpers */ "./src/app/service/_helpers/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _common_module_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common-module/notifications/notifications.module */ "./src/app/common-module/notifications/notifications.module.ts");
/* harmony import */ var _common_module_profile_drop_profile_drop_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common-module/profile-drop/profile-drop.module */ "./src/app/common-module/profile-drop/profile-drop.module.ts");
/* harmony import */ var _common_module_dashboard_box_dashboard_box_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common-module/dashboard-box/dashboard-box.module */ "./src/app/common-module/dashboard-box/dashboard-box.module.ts");















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _layout_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
            _common_module_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_12__["NotificationsModule"],
            _common_module_profile_drop_profile_drop_module__WEBPACK_IMPORTED_MODULE_13__["ProfileDropModule"],
            _common_module_dashboard_box_dashboard_box_module__WEBPACK_IMPORTED_MODULE_14__["DashboardBoxModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _service_helpers__WEBPACK_IMPORTED_MODULE_7__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _service_helpers__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"], multi: true },
            { provide: _service_config_service__WEBPACK_IMPORTED_MODULE_9__["CUSTOM_CONFIG"], useValue: _config__WEBPACK_IMPORTED_MODULE_8__["WMS_CONFIG"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common-module/dashboard-box/dashboard-box.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/common-module/dashboard-box/dashboard-box.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1tb2R1bGUvZGFzaGJvYXJkLWJveC9kYXNoYm9hcmQtYm94LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/common-module/dashboard-box/dashboard-box.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/common-module/dashboard-box/dashboard-box.component.ts ***!
  \************************************************************************/
/*! exports provided: DashboardBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardBoxComponent", function() { return DashboardBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");



let DashboardBoxComponent = class DashboardBoxComponent {
    constructor(dataservice) {
        this.dataservice = dataservice;
    }
    ngOnInit() {
        this.dataservice.currentCompany.subscribe((response) => {
            this.currentCompany = response;
        });
    }
};
DashboardBoxComponent.ctorParameters = () => [
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DashboardBoxComponent.prototype, "totalAmt", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DashboardBoxComponent.prototype, "totalText", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DashboardBoxComponent.prototype, "classGradient", void 0);
DashboardBoxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-box',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/dashboard-box/dashboard-box.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard-box.component.css */ "./src/app/common-module/dashboard-box/dashboard-box.component.css")).default]
    })
], DashboardBoxComponent);



/***/ }),

/***/ "./src/app/common-module/dashboard-box/dashboard-box.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/common-module/dashboard-box/dashboard-box.module.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardBoxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardBoxModule", function() { return DashboardBoxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dashboard_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-box.component */ "./src/app/common-module/dashboard-box/dashboard-box.component.ts");




let DashboardBoxModule = class DashboardBoxModule {
};
DashboardBoxModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_box_component__WEBPACK_IMPORTED_MODULE_3__["DashboardBoxComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _dashboard_box_component__WEBPACK_IMPORTED_MODULE_3__["DashboardBoxComponent"]
        ]
    })
], DashboardBoxModule);



/***/ }),

/***/ "./src/app/common-module/notifications/notifications.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/common-module/notifications/notifications.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".notification-dropdown{\r\n    max-height: 300px;\r\n    overflow-y: auto;\r\n}\r\n.timeline, .timeline .timeline-list {\r\n    position: relative;\r\n    border-color: #e5ebf8;\r\n}\r\n.timeline-border {\r\n    border-left: 1px solid #e5ebf8;\r\n}\r\n.timeline, .timeline .timeline-list {\r\n    position: relative;\r\n    border-color: #e5ebf8;\r\n}\r\n.timeline .timeline-list {\r\n    padding-bottom: 1px;\r\n}\r\n.timeline .timeline-list:after {\r\n    display: table;\r\n    position: absolute;\r\n    top: 18px;\r\n    left: 0;\r\n    width: 12px;\r\n    height: 12px;\r\n    margin-left: -6px;\r\n    content: \"\";\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: inherit;\r\n    border-radius: 10px;\r\n    background-color: #fff;\r\n    box-shadow: 0 0 0 3px #e5ebf8 inset;\r\n}\r\n.timeline .timeline-list .timeline-info {\r\n    margin-top: 0px;\r\n    margin-bottom: 15px;\r\n    margin-left: 20px;\r\n    font-size: 0.9rem;\r\n}\r\n.timeline-primary {\r\n    border-color: #635ebe!important;\r\n}\r\n.timeline-info {\r\n    border-color: #399AF2!important;\r\n}\r\n.timeline-success {\r\n    border-color: #2fbfa0!important;\r\n}\r\n.timeline-warning {\r\n    border-color: #FFCE67!important;\r\n}\r\n.timeline-accent {\r\n    border-color: #F64A91!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLW1vZHVsZS9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsbUNBQW1DO0FBQ3ZDO0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksK0JBQStCO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLW1vZHVsZS9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpZmljYXRpb24tZHJvcGRvd257XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLnRpbWVsaW5lLCAudGltZWxpbmUgLnRpbWVsaW5lLWxpc3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTVlYmY4O1xyXG59XHJcbi50aW1lbGluZS1ib3JkZXIge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTVlYmY4O1xyXG59XHJcbi50aW1lbGluZSwgLnRpbWVsaW5lIC50aW1lbGluZS1saXN0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1jb2xvcjogI2U1ZWJmODtcclxufVxyXG4udGltZWxpbmUgLnRpbWVsaW5lLWxpc3Qge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcclxufVxyXG4udGltZWxpbmUgLnRpbWVsaW5lLWxpc3Q6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE4cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTZweDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAjZTVlYmY4IGluc2V0O1xyXG59XHJcblxyXG4udGltZWxpbmUgLnRpbWVsaW5lLWxpc3QgLnRpbWVsaW5lLWluZm8ge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuLnRpbWVsaW5lLXByaW1hcnkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNjM1ZWJlIWltcG9ydGFudDtcclxufVxyXG4udGltZWxpbmUtaW5mbyB7XHJcbiAgICBib3JkZXItY29sb3I6ICMzOTlBRjIhaW1wb3J0YW50O1xyXG59XHJcbi50aW1lbGluZS1zdWNjZXNzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzJmYmZhMCFpbXBvcnRhbnQ7XHJcbn1cclxuLnRpbWVsaW5lLXdhcm5pbmcge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRkZDRTY3IWltcG9ydGFudDtcclxufVxyXG4udGltZWxpbmUtYWNjZW50IHtcclxuICAgIGJvcmRlci1jb2xvcjogI0Y2NEE5MSFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/common-module/notifications/notifications.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/common-module/notifications/notifications.component.ts ***!
  \************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NotificationsComponent = class NotificationsComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/notifications/notifications.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notifications.component.css */ "./src/app/common-module/notifications/notifications.component.css")).default]
    })
], NotificationsComponent);



/***/ }),

/***/ "./src/app/common-module/notifications/notifications.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/common-module/notifications/notifications.module.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.component */ "./src/app/common-module/notifications/notifications.component.ts");




let NotificationsModule = class NotificationsModule {
};
NotificationsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"]
        ]
    })
], NotificationsModule);



/***/ }),

/***/ "./src/app/common-module/profile-drop/profile-drop.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/common-module/profile-drop/profile-drop.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProfileDropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDropComponent", function() { return ProfileDropComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let ProfileDropComponent = class ProfileDropComponent {
    constructor(router, dataService, commonService) {
        this.router = router;
        this.dataService = dataService;
        this.commonService = commonService;
        this.currentUserDetail = null;
        this.currentCompanyDetail = null;
        this.permission = [];
        this.permissionObject = null;
        this.dataService.currentUser.subscribe((response) => {
            this.currentUserDetail = response;
        });
        this.dataService.isCompanySelected.subscribe((response) => {
            this.isCompanySelected = response;
        });
    }
    ngOnInit() {
    }
    checkPermission(module, action = "list") {
        const perm_module = this.permission[module];
        return (perm_module != undefined && (perm_module[action] !== undefined && perm_module[action] === true) || false);
    }
    onLogOut() {
        this.commonService.logout().subscribe((response) => {
            this.dataService.purgeAuth();
            this.router.navigateByUrl('/login');
        }, (err) => {
            this.dataService.purgeAuth();
            this.router.navigateByUrl('/login');
        });
    }
    removeCompany() {
        this.commonService.unSelectCompany().subscribe((response) => {
            if (response.success) {
                this.dataService.purgeCompany();
                this.dataService.saveToken(response.data.token);
                this.router.navigateByUrl('/company');
            }
        });
    }
};
ProfileDropComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
];
ProfileDropComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-drop',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-drop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/profile-drop/profile-drop.component.html")).default,
    })
], ProfileDropComponent);



/***/ }),

/***/ "./src/app/common-module/profile-drop/profile-drop.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/common-module/profile-drop/profile-drop.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileDropModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDropModule", function() { return ProfileDropModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _profile_drop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-drop.component */ "./src/app/common-module/profile-drop/profile-drop.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let ProfileDropModule = class ProfileDropModule {
};
ProfileDropModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_profile_drop_component__WEBPACK_IMPORTED_MODULE_3__["ProfileDropComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        exports: [
            _profile_drop_component__WEBPACK_IMPORTED_MODULE_3__["ProfileDropComponent"]
        ]
    })
], ProfileDropModule);



/***/ }),

/***/ "./src/app/common.ts":
/*!***************************!*\
  !*** ./src/app/common.ts ***!
  \***************************/
/*! exports provided: encryptValue, decryptValue, validateEmail, isMobileNumber, setCookie, getCookie, deleteCookie, generateRandomPaymentReferenceNumber, CommonFunction, validateEmailFormControl, PasswordValidation, generateRandomAlphaNumericeString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encryptValue", function() { return encryptValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decryptValue", function() { return decryptValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobileNumber", function() { return isMobileNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCookie", function() { return deleteCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomPaymentReferenceNumber", function() { return generateRandomPaymentReferenceNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonFunction", function() { return CommonFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmailFormControl", function() { return validateEmailFormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomAlphaNumericeString", function() { return generateRandomAlphaNumericeString; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);

/*
 * General utils for managing cookies in Typescript.
 */


const rawEncryptionKey = '#572@/.&';
function encryptValue(value) {
    const ciphertext = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].encrypt(value, rawEncryptionKey);
    return ciphertext;
}
function decryptValue(value) {
    const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].decrypt(value.toString(), rawEncryptionKey);
    const plaintext = bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8);
    return plaintext;
}
function validateEmail(email) {
    const re = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return re.test(String(email).toLowerCase());
}
function isMobileNumber(number) {
    const phoneRe = /^[+]*[(]{0,1}[6-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    return phoneRe.test(number);
}
function setCookie(name, val, type = null, time = 30) {
    const date = new Date();
    const value = encryptValue(val);
    // Set it expire in 7 days
    if (type === 'mins') {
        date.setTime(date.getTime() + (time * 60 * 1000));
    }
    else if (type === 'hrs') {
        date.setTime(date.getTime() + (time * 60 * 60 * 1000));
    }
    else if (type === 'days') {
        date.setTime(date.getTime() + (time * 24 * 60 * 60 * 1000));
    }
    // Set it
    document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
}
function getCookie(name) {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length == 2) {
        return decryptValue(parts.pop().split(';').shift());
    }
}
function deleteCookie(name) {
    const date = new Date();
    // Set it expire in -1 days
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
    // Set it
    document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/';
}
function generateRandomPaymentReferenceNumber() {
    return Math.floor(Math.random() * 1000000000);
}
class CommonFunction {
}
/* This is made for setting errors of invalid form fields dynamically */
CommonFunction._setErrMsgs = (control, errorsObj, field, validationMessages) => {
    if (control && control.invalid) {
        if (validationMessages !== undefined && validationMessages !== null && validationMessages !== '') {
            const messages = validationMessages[field];
            if (messages !== undefined && messages !== null && messages !== '') {
                for (const key in control.errors) {
                    if (control.errors.hasOwnProperty(key)) {
                        errorsObj[field] = messages[key] + '<br>';
                        return;
                    }
                }
            }
        }
        else {
            for (const key in control.errors) {
                if (control.errors.hasOwnProperty(key)) {
                    errorsObj[field] = true;
                    return;
                }
            }
        }
    }
};
CommonFunction.resetForm = (control, formError = null) => {
    control.reset();
    control.markAsUntouched();
    control.markAsPristine();
    jquery__WEBPACK_IMPORTED_MODULE_2__('form').removeClass('submitted');
    jquery__WEBPACK_IMPORTED_MODULE_2__('.ng2-flatpickr-input').val('');
    if (formError !== null) {
        for (const field in formError) {
            if (formError.hasOwnProperty(field)) {
                formError[field] = '';
            }
        }
    }
};
CommonFunction.formatDateTime = (date) => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate;
    const year = d.getFullYear();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    let hours = d.getHours();
    const minutes = d.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return [day, month, year].join('-') + ' ' + hours + ':' + minutes + ' ' + ampm;
};
CommonFunction.changedateFormate = (date) => {
    let today;
    if (date) {
        today = date;
    }
    else {
        today = new Date();
    }
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    // 2020-02-04 00:00:00
    let finaldate = `${yyyy}-${mm}-${dd} 00:00:00`;
    return finaldate;
};
CommonFunction.formatDate = (date) => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    return [day, month, year].join('-');
};
CommonFunction.datetoTimestamp = (date) => {
    return new Date(date).getTime() / 1000;
};
function validateEmailFormControl(c) {
    // tslint:disable:max-line-length
    // tslint:disable:prefer-const
    let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (c.value) {
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: false
        };
    }
    return null;
}
class PasswordValidation {
    static passwordValidation() {
        return (AC) => {
            let password = AC.get('new_password').value;
            let confirmpassword = AC.get('confirm_password').value;
            if (password !== confirmpassword) {
                return AC.get('confirm_password').setErrors({ validatePassword: true });
            }
        };
    }
}
function _getRandomByte() {
    // http://caniuse.com/#feat=getrandomvalues
    let result = null;
    if (window.crypto && window.crypto.getRandomValues) {
        result = new Uint8Array(1);
        window.crypto.getRandomValues(result);
        return result[0];
    }
    else {
        return Math.floor(Math.random() * 256);
    }
}
function generateRandomAlphaNumericeString() {
    let result;
    const length = 8;
    const _pattern = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;
    const str = Array.apply(null, { 'length': length }).map(function () {
        while (true) {
            result = String.fromCharCode(_getRandomByte());
            if (_pattern.test(result)) {
                return result;
            }
        }
    }, this).join('');
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
    return regex.test(str) ? str : generateRandomAlphaNumericeString();
}


/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: WMS_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WMS_CONFIG", function() { return WMS_CONFIG; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const WMS_CONFIG = {
    showLoader: false,
    showHeader: true
};


/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.subNavShow = false;
        this.brandTitle = "WMS";
        this.navLink = [];
        this.isCompanySelected = false;
        this.dataService.isCompanySelected.subscribe((response) => {
            this.isCompanySelected = response;
            if (this.isCompanySelected) {
                this.navLink = [
                    {
                        navId: 'dashboard',
                        navText: 'Dashboard',
                        r_navUrl: '/'
                    },
                    {
                        navId: 'inbound',
                        navText: 'Inbound',
                        navUrl: 'javascript:void(0)',
                        subNav: [
                            {
                                navLink: 'Order',
                                navUrl: '/inbound/order'
                            },
                            {
                                navLink: 'Unload',
                                navUrl: '/inbound/unload',
                            },
                            {
                                navLink: 'Product Registeration',
                                navUrl: '/inbound/registeration'
                            },
                            {
                                navLink: 'Put Away',
                                navUrl: '/inbound/put-away'
                            }
                        ]
                    },
                    {
                        navId: 'operation',
                        navText: 'Operation',
                        navUrl: 'javascript:void(0)',
                        subNav: [
                            {
                                navLink: 'Product Stock',
                                navUrl: '/stock/search-product'
                            },
                            {
                                navLink: 'Bin Transfer',
                                navUrl: '/stock/add-bin-transfer'
                            },
                            {
                                navLink: 'Transfer Order',
                                navUrl: '/stock/transfer-order'
                            }
                        ]
                    },
                    {
                        navId: 'outbound',
                        navText: 'Outbound',
                        navUrl: 'javascript:void(0)',
                        subNav: [
                            {
                                navLink: 'Sales Orders',
                                navUrl: '/outbound/sales-order'
                            },
                            {
                                navLink: 'Picking Products',
                                navUrl: '/outbound/pick-list'
                            },
                            {
                                navLink: 'Packing Products',
                                navUrl: '/outbound/sales-order'
                            },
                            {
                                navLink: 'Shipping Products',
                                navUrl: '/outbound/sales-order'
                            }
                        ]
                    },
                    {
                        navId: 'report',
                        navText: 'Report',
                        r_navUrl: '/'
                    },
                ];
            }
            else {
                this.navLink = [
                    {
                        navId: 'company',
                        navText: 'Company',
                        r_navUrl: '/'
                    }
                ];
            }
        });
        this.dataService.currentUser.subscribe((response) => {
            this.currentUserDetail = response;
        });
    }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html")).default,
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/messages.ts":
/*!*****************************!*\
  !*** ./src/app/messages.ts ***!
  \*****************************/
/*! exports provided: APP_NAME, DATEFORMAT, TIMEFORMAT, DATE_TIME_FORMAT, DATE_FORMAT, DATERANGE_FORMAT, TIME_FORMAT, pageTitles, errorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_NAME", function() { return APP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATEFORMAT", function() { return DATEFORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMEFORMAT", function() { return TIMEFORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_TIME_FORMAT", function() { return DATE_TIME_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_FORMAT", function() { return DATE_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATERANGE_FORMAT", function() { return DATERANGE_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIME_FORMAT", function() { return TIME_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageTitles", function() { return pageTitles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMessage", function() { return errorMessage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const APP_NAME = window.localStorage['__wms__cmp_nm'] ? window.localStorage['__wms__cmp_nm'] : 'WMS';
const DATEFORMAT = 'd-m-Y';
const TIMEFORMAT = 'h:i K';
const DATE_TIME_FORMAT = {
    dateFormat: DATEFORMAT + ' ' + TIMEFORMAT,
    enableTime: true,
};
const DATE_FORMAT = {
    dateFormat: DATEFORMAT,
    enableTime: false,
};
const DATERANGE_FORMAT = {
    dateFormat: DATEFORMAT,
    mode: 'range'
};
const TIME_FORMAT = {
    dateFormat: TIMEFORMAT,
    time_24hr: false,
    enableTime: true,
    noCalendar: true,
    defaultDate: new Date()
};
const pageTitles = {
    login: `Log In | ${APP_NAME}`,
    signup: `Sign Up with ${APP_NAME}`,
    otp: `OTP | ${APP_NAME}`,
    forgot_password: `Forgot Password | ${APP_NAME}`,
    reset_password: `Reset Password | ${APP_NAME}`,
    change_password: `Change Password | ${APP_NAME}`,
    view_profile: `Profile | ${APP_NAME}`,
    edit_profile: `Edit Profile | ${APP_NAME}`,
    home: `${APP_NAME}`,
    dashboard: `${APP_NAME}`,
    company_list: `Company List | ${APP_NAME}`,
    add_company: `Add Company | ${APP_NAME}`,
    edit_company: `Edit Company | ${APP_NAME}`,
    order_list: `Order List | ${APP_NAME}`,
    add_order: `Add Order | ${APP_NAME}`,
    edit_order: `Edit Order | ${APP_NAME}`,
    view_order: `View Order | ${APP_NAME}`,
    product_register_list: `Product Register List | ${APP_NAME}`,
    add_product_register: `Add Product Register | ${APP_NAME}`,
    edit_product_register: `Edit Product Register | ${APP_NAME}`,
    unload_list: `Unload List | ${APP_NAME}`,
    add_unload: `Add Unload | ${APP_NAME}`,
    edit_unload: `Edit Unload | ${APP_NAME}`,
    view_unload: `View Unload | ${APP_NAME}`,
    level_list: `Level List | ${APP_NAME}`,
    add_level: `Add Level | ${APP_NAME}`,
    edit_level: `Edit Level | ${APP_NAME}`,
    view_level: `View Level | ${APP_NAME}`,
    brand_list: `Brand List | ${APP_NAME}`,
    category_list: `Category List | ${APP_NAME}`,
    add_category: `Add Category | ${APP_NAME}`,
    edit_category: `Edit Category | ${APP_NAME}`,
    product_list: `Product List | ${APP_NAME}`,
    add_product: `Add Product | ${APP_NAME}`,
    edit_product: `Edit Product | ${APP_NAME}`,
    suppliers_list: `Suppliers List | ${APP_NAME}`,
    add_suppliers: `Add Suppliers | ${APP_NAME}`,
    edit_suppliers: `Edit Suppliers | ${APP_NAME}`,
    client_list: `Client List | ${APP_NAME}`,
    add_client: `Add Client | ${APP_NAME}`,
    edit_client: `Edit Client | ${APP_NAME}`,
    warehouse_list: `Warehouse List | ${APP_NAME}`,
    add_warehouse: `Add Warehouse | ${APP_NAME}`,
    edit_warehouse: `Edit Warehouse | ${APP_NAME}`,
    aisle_list: `Aisle List | ${APP_NAME}`,
    add_aisle: `Add Aisle | ${APP_NAME}`,
    edit_aisle: `Edit Aisle | ${APP_NAME}`,
    view_aisle: `View Aisle | ${APP_NAME}`,
    area_list: `Area List | ${APP_NAME}`,
    add_area: `Add Area | ${APP_NAME}`,
    edit_area: `Edit Area | ${APP_NAME}`,
    view_area: `View Area | ${APP_NAME}`,
    bin_list: `Bin List | ${APP_NAME}`,
    add_bin: `Add Bin | ${APP_NAME}`,
    edit_bin: `Edit Bin | ${APP_NAME}`,
    bay_list: `Bay List | ${APP_NAME}`,
    add_bay: `Add Bay | ${APP_NAME}`,
    edit_bay: `Edit Bay | ${APP_NAME}`,
    view_bay: `View Bay | ${APP_NAME}`,
    carrier_list: `Carrier List | ${APP_NAME}`,
    add_carrier: `Add Carrier | ${APP_NAME}`,
    edit_carrier: `Edit Carrier | ${APP_NAME}`,
    view_carrier: `View Carrier | ${APP_NAME}`,
    order_type_list: `Order Type List | ${APP_NAME}`,
    add_order_type: `Add Order Type | ${APP_NAME}`,
    edit_order_type: `Edit Order Type | ${APP_NAME}`,
    view_order_type: `View Order Type | ${APP_NAME}`,
    shipping_address_list: `Shipping Address List | ${APP_NAME}`,
    add_shipping_address: `Add Shipping Address | ${APP_NAME}`,
    edit_shipping_address: `Edit Shipping Address | ${APP_NAME}`,
    pick_list_list: `PickList List | ${APP_NAME}`,
    add_pick_list: `Add PickList | ${APP_NAME}`,
    edit_pick_list: `Edit PickList | ${APP_NAME}`,
    view_pick_list: `View PickList | ${APP_NAME}`,
    unit_list: `Unit List | ${APP_NAME}`,
    add_unit: `Add Unit | ${APP_NAME}`,
    edit_unit: `Edit Unit | ${APP_NAME}`,
    tag_list: `Tag List | ${APP_NAME}`,
    add_tag: `Add Tag | ${APP_NAME}`,
    edit_tag: `Edit Tag | ${APP_NAME}`,
};
const errorMessage = {
    change_password_success: 'Your password changed Successfully',
    delete_dialogue_type: 'error',
    delete_header_text: 'Are you sure you want to delete?',
    delete_confirm_button: 'Yes, Delete it!',
    delete_cancel_button: 'No, Keep it',
    delete_smalll_text: 'You will not be able to recover this!',
    not_delete_dialogue_type: 'error',
    not_delete_header_text: `You can't delete this`,
    not_delete_confirm_button: 'Yes, Delete it!',
    not_delete_cancel_button: 'No, Keep it',
    not_delete_smalll_text: ' This Threshold Attached With Profile',
    unassign_dialogue_type: 'error',
    unassign_header_text: 'Are you sure want to un-assign?',
    unassign_confirm_button: 'Yes, Un-Assign it!',
    unassign_cancel_button: 'No, Keep it',
    unassign_smalll_text: 'You will not be able to recover this!',
    accept_installment_request_dialogue_type: 'success',
    accept_installment_request_header_text: 'Are you sure want to Accept?',
    accept_installment_request_confirm_button: 'Yes, Accept it!',
    accept_installment_request_cancel_button: 'No, Keep it',
    accept_installment_request_smalll_text: 'You will not be able to recover this!',
    reject_installment_request_dialogue_type: 'success',
    reject_installment_request_header_text: 'Are you sure want to Reject?',
    reject_installment_request_confirm_button: 'Yes, Reject it!',
    reject_installment_request_cancel_button: 'No, Keep it',
    reject_installment_request_smalll_text: 'You will not be able to recover this!',
    status_change_dialogue_type: 'warning',
    status_change_header_text: 'Are you sure want to change?',
    status_change_confirm_button: 'Yes',
    status_change_cancel_button: 'No, Keep it',
    status_change_smalll_text: '',
};


/***/ }),

/***/ "./src/app/service/_guards/company-redirect.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/_guards/company-redirect.service.ts ***!
  \*************************************************************/
/*! exports provided: CompanyRedirectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRedirectService", function() { return CompanyRedirectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let CompanyRedirectService = class CompanyRedirectService {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('__wms__cmp')) {
            this.router.navigateByUrl('/dashboard');
            return false;
        }
        else {
            return true;
        }
    }
};
CompanyRedirectService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CompanyRedirectService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CompanyRedirectService);



/***/ }),

/***/ "./src/app/service/_guards/company-selected.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/_guards/company-selected.service.ts ***!
  \*************************************************************/
/*! exports provided: IsCompanySelected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsCompanySelected", function() { return IsCompanySelected; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let IsCompanySelected = class IsCompanySelected {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('__wms__cmp')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/company');
            return false;
        }
    }
};
IsCompanySelected.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IsCompanySelected = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IsCompanySelected);



/***/ }),

/***/ "./src/app/service/_guards/ensure-authenticated.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/service/_guards/ensure-authenticated.service.ts ***!
  \*****************************************************************/
/*! exports provided: EnsureAuthenticated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureAuthenticated", function() { return EnsureAuthenticated; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let EnsureAuthenticated = class EnsureAuthenticated {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (localStorage.getItem('_auth_wms')) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { next: encodeURI(state.url) } });
        return false;
    }
};
EnsureAuthenticated.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EnsureAuthenticated = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EnsureAuthenticated);



/***/ }),

/***/ "./src/app/service/_guards/index.ts":
/*!******************************************!*\
  !*** ./src/app/service/_guards/index.ts ***!
  \******************************************/
/*! exports provided: CompanyRedirectService, IsCompanySelected, EnsureAuthenticated, LoginRedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _company_redirect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-redirect.service */ "./src/app/service/_guards/company-redirect.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyRedirectService", function() { return _company_redirect_service__WEBPACK_IMPORTED_MODULE_1__["CompanyRedirectService"]; });

/* harmony import */ var _company_selected_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-selected.service */ "./src/app/service/_guards/company-selected.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsCompanySelected", function() { return _company_selected_service__WEBPACK_IMPORTED_MODULE_2__["IsCompanySelected"]; });

/* harmony import */ var _ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ensure-authenticated.service */ "./src/app/service/_guards/ensure-authenticated.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnsureAuthenticated", function() { return _ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"]; });

/* harmony import */ var _login_redirect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-redirect.service */ "./src/app/service/_guards/login-redirect.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginRedirect", function() { return _login_redirect_service__WEBPACK_IMPORTED_MODULE_4__["LoginRedirect"]; });








/***/ }),

/***/ "./src/app/service/_guards/login-redirect.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/service/_guards/login-redirect.service.ts ***!
  \***********************************************************/
/*! exports provided: LoginRedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRedirect", function() { return LoginRedirect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let LoginRedirect = class LoginRedirect {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('_auth_wms')) {
            return false;
        }
        else {
            return true;
        }
    }
};
LoginRedirect.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginRedirect = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginRedirect);



/***/ }),

/***/ "./src/app/service/_helpers/error.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/service/_helpers/error.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let ErrorInterceptor = class ErrorInterceptor {
    constructor(dateService, router) {
        this.dateService = dateService;
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            if (error.status === 401) {
                // auto logout if 401 response returned from api
                this.dateService.purgeAuth();
                this.router.navigateByUrl('/login');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/service/_helpers/index.ts":
/*!*******************************************!*\
  !*** ./src/app/service/_helpers/index.ts ***!
  \*******************************************/
/*! exports provided: JwtInterceptor, ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/service/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/service/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorInterceptor"]; });






/***/ }),

/***/ "./src/app/service/_helpers/jwt.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/_helpers/jwt.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jwt.service */ "./src/app/service/jwt.service.ts");
/* harmony import */ var src_app_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common */ "./src/app/common.ts");




let JwtInterceptor = class JwtInterceptor {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        // console.log("request", request)
        // console.log("request URL", request.url)
        //  request.body && request.body
        if (request.body && request.body.open_api && request.body.token) {
            // console.log("request URL", request.url)
            // if (request.body.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Token ${request.body.token}`
                }
            });
            // }
        }
        else {
            // console.log("request URL", request.iurl)
            const token = this.jwtService.getToken();
            if (token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Token ${Object(src_app_common__WEBPACK_IMPORTED_MODULE_3__["decryptValue"])(this.jwtService.getToken())}`
                    }
                });
            }
        }
        // console.log("request Header set", request)
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _jwt_service__WEBPACK_IMPORTED_MODULE_2__["JwtService"] }
];
JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/service/common.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/common.service.ts ***!
  \*******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let CommonService = class CommonService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    commonListApi() {
        return this.http.get(`${this.API_URL}/common-list`);
    }
    getProfile() {
        return this.http.get(`${this.API_URL}/auth/profile`);
    }
    unSelectCompany() {
        return this.http.get(`${this.API_URL}/company/deselect`);
    }
    logout() {
        return this.http.get(`${this.API_URL}/auth/logout`);
    }
    getCountryList() {
        return this.http.get(`${this.API_URL}/cms/country_list`);
    }
    getGenerateBarcode() {
        return this.http.get(`${this.API_URL}/generate-barcode`, { responseType: 'blob' });
    }
};
CommonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CommonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ "./src/app/service/config.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/config.service.ts ***!
  \*******************************************/
/*! exports provided: CUSTOM_CONFIG, ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_CONFIG", function() { return CUSTOM_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






const CUSTOM_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('customConfig');
let ConfigService = class ConfigService {
    constructor(_router, _config) {
        this._router = _router;
        this._config = _config;
        // Set the default config from the user provided config (from forRoot)
        this._defaultConfig = _config;
        // Initialize the service
        this._init();
    }
    set config(value) {
        // Get the value from the behavior subject
        let config = this._configSubject.getValue();
        // Merge the new config
        config = lodash__WEBPACK_IMPORTED_MODULE_5__["merge"]({}, config, value);
        // Notify the observers
        this._configSubject.next(config);
    }
    get config() {
        return this._configSubject.asObservable();
    }
    get defaultConfig() {
        return this._defaultConfig;
    }
    _init() {
        // Set the config from the default config
        this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this._defaultConfig));
        // Reload the default layout config on every RoutesRecognized event
        // if the current layout config is different from the default one
        this._router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ResolveEnd"])).subscribe(() => {
            if (!lodash__WEBPACK_IMPORTED_MODULE_5__["isEqual"](this._configSubject.getValue().layout, this._defaultConfig.layout)) {
                // Clone the current config
                const config = lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this._configSubject.getValue());
                // Reset the layout from the default config
                config.layout = lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this._defaultConfig.layout);
                // Set the config
                this._configSubject.next(config);
            }
        });
    }
    setConfig(value, opts = { emitEvent: true }) {
        // Get the value from the behavior subject
        let config = this._configSubject.getValue();
        // Merge the new config
        config = lodash__WEBPACK_IMPORTED_MODULE_5__["merge"]({}, config, value);
        // If emitEvent option is true...
        if (opts.emitEvent === true) {
            // Notify the observers
            this._configSubject.next(config);
        }
    }
    getConfig() {
        return this._configSubject.asObservable();
    }
    resetToDefaults() {
        // Set the config from the default config
        this._configSubject.next(lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this._defaultConfig));
    }
};
ConfigService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [CUSTOM_CONFIG,] }] }
];
ConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(CUSTOM_CONFIG))
], ConfigService);



/***/ }),

/***/ "./src/app/service/data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm2015/add/operator/distinctUntilChanged.js");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.service */ "./src/app/service/jwt.service.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./src/app/common.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common.service */ "./src/app/service/common.service.ts");







let DataService = class DataService {
    constructor(jwtService, commonService) {
        this.jwtService = jwtService;
        this.commonService = commonService;
        // for storing current user details
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();
        // for checking user is authneticated or not
        this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
        // for storing current company details
        this.currentCompanySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.currentCompany = this.currentCompanySubject.asObservable().distinctUntilChanged();
        // for checking company is selected or not
        this.isCompanySelectedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isCompanySelected = this.isCompanySelectedSubject.asObservable();
        // for storing common lists details
        this.commonListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.commonList = this.commonListSubject.asObservable().distinctUntilChanged();
        // for storing current user permission details
        this.userPermissionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.permission = this.userPermissionSubject.asObservable().distinctUntilChanged();
        // Order view Page Detils
        this.OrderDetailsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.OrderDetails = this.OrderDetailsSubject.asObservable();
        // Order view Page Detils
        this.SalesOrderDetailsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.SalesOrderDetails = this.SalesOrderDetailsSubject.asObservable();
    }
    saveToken(token) {
        this.jwtService.saveToken(Object(_common__WEBPACK_IMPORTED_MODULE_5__["encryptValue"])(token));
    }
    saveCommonList(data) {
        this.commonListSubject.next(data);
    }
    setAuth(user) {
        this.saveToken(user.Token['token']);
        this.updateAuth(user.User);
        this.updatePermission(user.Permission);
        if (user.Company && user.Company.company_id) {
            this.updateCompany(user.Company);
        }
    }
    updateAuth(data) {
        this.currentUserSubject.next(data);
        this.isAuthenticatedSubject.next(true);
    }
    updatePermission(data) {
        this.userPermissionSubject.next(data);
    }
    purgeAuth() {
        this.jwtService.destroyToken();
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
        this.currentUserSubject.next(null);
        this.userPermissionSubject.next([]);
        this.purgeCompany();
    }
    updateCompany(data) {
        this.currentCompanySubject.next(data);
        this.jwtService.saveCompanyId(data.company_id);
        this.jwtService.saveCompanyName(data.company_name);
        this.isCompanySelectedSubject.next(true);
    }
    purgeCompany() {
        this.jwtService.destroyCompanyId();
        this.jwtService.destroyCompanyName();
        this.currentCompanySubject.next(null);
        this.isCompanySelectedSubject.next(false);
    }
};
DataService.ctorParameters = () => [
    { type: _jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"] },
    { type: _common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/service/jwt.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/jwt.service.ts ***!
  \****************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let JwtService = class JwtService {
    getToken() {
        return window.localStorage['_auth_wms'];
    }
    saveToken(token) {
        window.localStorage['_auth_wms'] = token;
    }
    destroyToken() {
        window.localStorage.removeItem('_auth_wms');
    }
    getCompanyId() {
        return window.localStorage['__wms__cmp']; // string('4bf735e97269421a80b82359e7dc2288');
    }
    saveCompanyId(id) {
        window.localStorage['__wms__cmp'] = id;
    }
    destroyCompanyId() {
        window.localStorage.removeItem('__wms__cmp');
    }
    getCompanyName() {
        return window.localStorage['__wms__cmp_nm'];
    }
    saveCompanyName(name) {
        window.localStorage['__wms__cmp_nm'] = name;
    }
    destroyCompanyName() {
        window.localStorage.removeItem('__wms__cmp_nm');
    }
    getGoogleToken() {
        return String('AIzaSyCGc_953CXwgs8gzIwJsJ4yj7rz-vgl5ww'); // window.localStorage['google_token'];
    }
    saveValue(name, value) {
        window.localStorage[name] = value;
    }
    destroyValue(name) {
        window.localStorage.removeItem(name);
    }
    getValue(name) {
        return window.localStorage[name]; // window.localStorage['google_token'];
    }
};
JwtService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], JwtService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    // APIEndpoint: 'http://192.168.1.138:9005/api',
    APIEndpoint: 'https://e750a35f.ngrok.io/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Work -For-Home\wms\wms-angular\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map