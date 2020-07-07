(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["packing-packing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/packing/packing.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/packing/packing.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col d-flex\">\r\n                <h2 class=\"mr-auto\">Packing</h2>\r\n                <div class=\"ml-auto d-flex\">\r\n                    <ng-select style=\"width: 180px;\" placeholder=\"Select Status\" [items]=\"statusPacking\"\r\n                        bindLabel=\"status\" bindValue=\"value\" class=\"mr-2\" (change)=\"onSelect($event)\">\r\n                    </ng-select>\r\n\r\n                    <a href=\"/outbound/packing/add-packing\" class=\"btn btn-secondary\"> Add Packing</a>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                    <thead class=\"thead-dark\">\r\n                        <tr>\r\n                            <th width=\"5%\">No</th>\r\n                            <th width=\"10%\">Order Date</th>\r\n                            <th width=\"10%\">Product Code</th>\r\n                            <th width=\"45%\">Product Name</th>\r\n                            <th width=\"10%\">Delivery Date</th>\r\n                            <th width=\"10%\">Status</th>\r\n                            <th width=\"10%\" style=\"text-align: right;\">Action</th>\r\n                        </tr>\r\n\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let packList of packingList; let i = index\">\r\n                            <td>{{i + 1}}</td>\r\n                            <td>{{packList.orderDate}}</td>\r\n                            <td>{{packList.prodCode}}</td>\r\n                            <td>{{packList.prodName}}</td>\r\n                            <td>{{packList.deliveryDate}}</td>\r\n                            <td><span class=\"badge\" [ngClass]=\"{\r\n                                'badge-danger': packList.prodStatus === 'Pending',\r\n                                'badge-success': packList.prodStatus === 'Completed',\r\n                                'badge-info': packList.prodStatus === 'In Proccess'\r\n                            }\">{{packList.prodStatus}}</span></td>\r\n                            <td style=\"text-align: right;\">\r\n                                <div class=\"action-drop dropdown text-right\">\r\n                                    <a href=\"#\" data-toggle=\"dropdown\" title=\"\"\r\n                                        class=\"btn btn-default btn-sm btn-icon-only shadow-none\"><i\r\n                                            class=\"fa fa-ellipsis-h\"></i></a>\r\n                                    <div class=\"dropdown-menu dropdown-icon-menu drop-menu-right action-dropdown\"\r\n                                        style=\"width: 100px;\">\r\n                                        <a class=\"dropdown-item\" href=\"/outbound/packing/add-packing\"\r\n                                            *ngIf=\"packList.prodStatus==='Completed'\">\r\n                                            <i class=\"fa fa-eye font-size16 text-primary\"></i> View </a>\r\n                                        <a class=\"dropdown-item\" href=\"/outbound/packing/add-packing\"\r\n                                            *ngIf=\"packList.prodStatus==='Pending'\">\r\n                                            <i class=\"fa fa-spinner font-size16 text-primary\"></i> Proccess </a>\r\n                                        <a class=\"dropdown-item\" href=\"#\"><i\r\n                                                class=\"fa fa-edit font-size16 text-primary\"></i> Edit </a>\r\n                                        <a class=\"dropdown-item\"><i class=\"fa fa-trash font-size16 text-primary\"></i>\r\n                                            Delete</a>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n\r\n                        <!-- <tr>\r\n                            <td>1</td>\r\n                            <td>15/06/2020</td>\r\n                            <td>S01384</td>\r\n                            <td>John Doe</td>\r\n                            <td>15/06/2020</td>\r\n                            <td><span class=\"badge badge-danger\">Pending</span> </td>\r\n                            <td style=\"text-align: right;\">\r\n                                <div class=\"action-drop dropdown text-right\">\r\n                                    <a href=\"#\" data-toggle=\"dropdown\" title=\"\"\r\n                                        class=\"btn btn-default btn-sm btn-icon-only shadow-none\"><i\r\n                                            class=\"fa fa-ellipsis-h\"></i></a>\r\n                                    <div class=\"dropdown-menu dropdown-icon-menu drop-menu-right action-dropdown\"\r\n                                        style=\"width: 100px;\"><a class=\"dropdown-item\"\r\n                                            href=\"/outbound/pick-list/pick-list-new/pick-view\">\r\n                                            <i class=\"fa fa-eye font-size16 text-primary\"></i> View </a>\r\n                                        <a class=\"dropdown-item\" href=\"#\"><i\r\n                                                class=\"fa fa-edit font-size16 text-primary\"></i> Edit </a>\r\n                                        <a class=\"dropdown-item\"><i class=\"fa fa-trash font-size16 text-primary\"></i>\r\n                                            Delete</a>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>1</td>\r\n                            <td>15/06/2020</td>\r\n                            <td>S01384</td>\r\n                            <td>John Doe</td>\r\n                            <td>15/06/2020</td>\r\n                            <td><span class=\"badge badge-danger\">Pending</span> </td>\r\n                            <td style=\"text-align: right;\">\r\n                                <div class=\"action-drop dropdown text-right\">\r\n                                    <a href=\"#\" data-toggle=\"dropdown\" title=\"\"\r\n                                        class=\"btn btn-default btn-sm btn-icon-only shadow-none\"><i\r\n                                            class=\"fa fa-ellipsis-h\"></i></a>\r\n                                    <div class=\"dropdown-menu dropdown-icon-menu drop-menu-right action-dropdown\"\r\n                                        style=\"width: 100px;\"><a class=\"dropdown-item\"\r\n                                            href=\"/outbound/pick-list/pick-list-new/pick-view\">\r\n                                            <i class=\"fa fa-eye font-size16 text-primary\"></i> View </a>\r\n                                        <a class=\"dropdown-item\" href=\"#\"><i\r\n                                                class=\"fa fa-edit font-size16 text-primary\"></i> Edit </a>\r\n                                        <a class=\"dropdown-item\"><i class=\"fa fa-trash font-size16 text-primary\"></i>\r\n                                            Delete</a>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>1</td>\r\n                            <td>15/06/2020</td>\r\n                            <td>S01384</td>\r\n                            <td>John Doe</td>\r\n                            <td>15/06/2020</td>\r\n                            <td><span class=\"badge badge-success\">completed</span> </td>\r\n                            <td style=\"text-align: right;\">\r\n                                <div class=\"action-drop dropdown text-right\">\r\n                                    <a href=\"#\" data-toggle=\"dropdown\" title=\"\"\r\n                                        class=\"btn btn-default btn-sm btn-icon-only shadow-none\"><i\r\n                                            class=\"fa fa-ellipsis-h\"></i></a>\r\n                                    <div class=\"dropdown-menu dropdown-icon-menu drop-menu-right action-dropdown\"\r\n                                        style=\"width: 100px;\"><a class=\"dropdown-item\"\r\n                                            href=\"/outbound/pick-list/pick-list-new/pick-view\">\r\n                                            <i class=\"fa fa-eye font-size16 text-primary\"></i> View </a>\r\n                                        <a class=\"dropdown-item\" href=\"#\"><i\r\n                                                class=\"fa fa-edit font-size16 text-primary\"></i> Edit </a>\r\n                                        <a class=\"dropdown-item\"><i class=\"fa fa-trash font-size16 text-primary\"></i>\r\n                                            Delete</a>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                        </tr> -->\r\n\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <!-- <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\r\n        </app-table-list>\r\n        <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\r\n          (onPageChange)=\"getPage($event)\">\r\n        </pagination> -->\r\n        </div>\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "./src/app/pages/outbound/packing/packing.component.css":
/*!**************************************************************!*\
  !*** ./src/app/pages/outbound/packing/packing.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL291dGJvdW5kL3BhY2tpbmcvcGFja2luZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/outbound/packing/packing.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/outbound/packing/packing.component.ts ***!
  \*************************************************************/
/*! exports provided: PackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackingComponent", function() { return PackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PackingComponent = class PackingComponent {
    constructor() {
        this.statusPacking = [
            {
                value: '1',
                status: 'Pending'
            },
            {
                value: '2',
                status: 'In Process'
            },
            {
                value: '3',
                status: 'Completed'
            }
        ];
        this.packingList = [
            {
                id: 1, orderDate: '15/06/2020', prodCode: '05284', prodName: 'ddsf 45454 ddf', deliveryDate: '15/06/2020', prodStatus: 'Pending',
                value: '1'
            },
            {
                id: 2, orderDate: '15/06/2020', prodCode: '05284', prodName: 'ddsf 45454 ddf', deliveryDate: '15/06/2020', prodStatus: 'Completed',
                value: '3'
            },
            {
                id: 3, orderDate: '15/06/2020', prodCode: '05284', prodName: 'ddsf 45454 ddf', deliveryDate: '15/06/2020', prodStatus: 'In Proccess',
                value: '2'
            },
            {
                id: 4, orderDate: '15/06/2020', prodCode: '05284', prodName: 'ddsf 45454 ddf', deliveryDate: '15/06/2020', prodStatus: 'Completed',
                value: '3'
            },
            {
                id: 5, orderDate: '15/06/2020', prodCode: '05284', prodName: 'ddsf 45454 ddf', deliveryDate: '15/06/2020', prodStatus: 'Completed',
                value: '3'
            },
        ];
    }
    ngOnInit() {
    }
    getObject() {
        this.packingList = this.packingList.filter(record => record.value);
        console.log("Data show", this.packingList);
    }
    onSelect(e) {
        //this.getObject()
        console.log("select value", e.value);
        this.packingList = this.packingList.filter(record => record.value == e.value);
        console.log("check Data", this.packingList);
    }
};
PackingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-packing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./packing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/packing/packing.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./packing.component.css */ "./src/app/pages/outbound/packing/packing.component.css")).default]
    })
], PackingComponent);



/***/ }),

/***/ "./src/app/pages/outbound/packing/packing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/outbound/packing/packing.module.ts ***!
  \**********************************************************/
/*! exports provided: PackingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackingModule", function() { return PackingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _packing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./packing.component */ "./src/app/pages/outbound/packing/packing.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







const routes = [
    {
        path: '',
        component: _packing_component__WEBPACK_IMPORTED_MODULE_3__["PackingComponent"]
    },
    {
        path: 'add-packing',
        loadChildren: () => __webpack_require__.e(/*! import() | add-packing-add-packing-module */ "add-packing-add-packing-module").then(__webpack_require__.bind(null, /*! ./add-packing/add-packing.module */ "./src/app/pages/outbound/packing/add-packing/add-packing.module.ts")).then(m => m.AddPackingModule)
    }
];
let PackingModule = class PackingModule {
};
PackingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_packing_component__WEBPACK_IMPORTED_MODULE_3__["PackingComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]
    })
], PackingModule);



/***/ })

}]);
//# sourceMappingURL=packing-packing-module-es2015.js.map