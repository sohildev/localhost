(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-bin-transfer-add-bin-transfer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n            <div class=\"card-body\">\r\n                <div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Transfer Order No. <em>*</em></label>\r\n                        <div class=\"col-md-5\">\r\n                            <input [formControl]=\"addForm.controls['transfer_order_no']\" type=\"text\" class=\"form-control\"\r\n                                placeholder=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">From Bin <em>*</em></label>\r\n                        <div class=\"col-md-5\">\r\n                            <ng-select [formControl]=\"addForm.controls['from_location_bin']\" [items]=\"fromLocationBinArray\"\r\n                                bindLabel=\"label\" bindValue=\"value\" (change)=\"getSkuDropDownData()\" placeholder=\"Select location bin\">\r\n                            </ng-select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">SKU <em>*</em></label>\r\n                        <div class=\"col-md-5\">\r\n                            <ng-select [formControl]=\"addForm.controls['sku_no']\" [items]=\"skuArray\"\r\n                                bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select sku\">\r\n                            </ng-select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Total Quantity\r\n                            <em>*</em></label>\r\n                        <div class=\"col-md-5\">\r\n                            <input number [formControl]=\"addForm.controls['qty']\" type=\"text\" class=\"form-control\"\r\n                                placeholder=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">To Bin <em>*</em></label>\r\n                        <div class=\"col-md-5\">\r\n                            <ng-select [formControl]=\"addForm.controls['to_location_bin']\" [items]=\"toLocationBinArray\"\r\n                            bindLabel=\"label\" bindValue=\"value\"  (change)=\"setBinData()\" placeholder=\"Select location bin\">\r\n                        </ng-select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Location</label>\r\n                        <div class=\"col-md-5\">\r\n                            <input [formControl]=\"addForm.controls['location']\" type=\"text\" class=\"form-control\"\r\n                                placeholder=\"\" readonly>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"back()\">Cancel</button>\r\n                <button type=\"submit\" class=\"btn btn-secondary ml-2\"\r\n                    [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\"\r\n                    [disabled]=\"showLoader\">Submit</button>\r\n            </div>\r\n        </form>\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddBinTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBinTransferComponent", function() { return AddBinTransferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_service_bin_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/bin-transfer.service */ "./src/app/service/bin-transfer.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





let AddBinTransferComponent = class AddBinTransferComponent {
    constructor(fb, location, binTransferService) {
        this.fb = fb;
        this.location = location;
        this.binTransferService = binTransferService;
        this.PageTitle = "Generate Bin Transfer Order";
        this.loadingState = false;
        this.fromLocationBinArray = [];
        this.skuArray = [];
        this.toLocationBinArray = [];
        this.showLoader = false;
        this.formErrors = {
            from_location_bin: null,
            apierror: null,
        };
        this.addForm = this.fb.group({
            transfer_order_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            from_location_bin: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            sku_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            qty: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            to_location_bin: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            location: [null],
            bin_id: [null],
            level_id: [null],
            bay_id: [null],
            aisle_id: [null],
            area_id: [null]
        });
    }
    ngOnInit() {
        this.getMasterData();
    }
    getMasterData() {
        this.binTransferService.getBinTransferMasterData().subscribe(res => {
            if (res.success) {
                this.fromLocationBinArray = res.data.from_bin;
                this.toLocationBinArray = res.data.to_bin;
            }
        });
    }
    getSkuDropDownData() {
        this.binTransferService.getSkuDropDownData(this.addForm.value.from_location_bin).subscribe(res => {
            if (res.success) {
                this.skuArray = res.data.sku;
                this.addForm.patchValue({ location: res.data.location });
            }
        });
    }
    setBinData() {
        this.binTransferService.getBinData(this.addForm.value.to_location_bin).subscribe(res => {
            if (res.success) {
                this.addForm.patchValue({
                    location: res.data.location,
                    aisle_id: res.data.to_location_bin.aisle_id,
                    area_id: res.data.to_location_bin.area_id,
                    bay_id: res.data.to_location_bin.bay_id,
                    bin_id: res.data.to_location_bin.bin_id,
                    level_id: res.data.to_location_bin.level_id
                });
            }
        });
    }
    submitForm(formData) {
        if (formData.valid) {
            this.showLoader = true;
            const data = new FormData();
            data.append('transfer_order_no', formData.value.transfer_order_no);
            data.append('from_location_bin', formData.value.from_location_bin);
            data.append('sku_no', formData.value.sku_no);
            data.append('qty', formData.value.qty);
            data.append('to_location_bin', JSON.stringify({
                'area_id': formData.value.area_id,
                'bay_id': formData.value.bay_id,
                'bin_id': formData.value.bin_id,
                'level_id': formData.value.level_id,
                'aisle_id': formData.value.aisle_id,
            }));
            data.append('location', formData.value.location);
            this.binTransferService.addBinTransfer(data).subscribe((response) => {
                this.showLoader = false;
                if (response.success) {
                    this.back();
                }
                else {
                    response.error.map(obj => {
                        if (obj.hasOwnProperty('from_location_bin')) {
                            this.formErrors['from_location_bin'] = obj['from_location_bin'];
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
    back() {
        this.location.back();
    }
};
AddBinTransferComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: src_app_service_bin_transfer_service__WEBPACK_IMPORTED_MODULE_3__["BinTransferService"] }
];
AddBinTransferComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-bin-transfer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-bin-transfer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.html")).default,
    })
], AddBinTransferComponent);



/***/ }),

/***/ "./src/app/pages/operation/add-bin-transfer/add-bin-transfer.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/operation/add-bin-transfer/add-bin-transfer.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AddBinTransferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBinTransferModule", function() { return AddBinTransferModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_bin_transfer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-bin-transfer.component */ "./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_service_bin_transfer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/bin-transfer.service */ "./src/app/service/bin-transfer.service.ts");










const routes = [
    {
        path: '',
        component: _add_bin_transfer_component__WEBPACK_IMPORTED_MODULE_4__["AddBinTransferComponent"],
        data: { title: 'bin_tranfer_add' },
    }
];
let AddBinTransferModule = class AddBinTransferModule {
};
AddBinTransferModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_bin_transfer_component__WEBPACK_IMPORTED_MODULE_4__["AddBinTransferComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__["FormValidationModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"]
        ],
        providers: [src_app_service_bin_transfer_service__WEBPACK_IMPORTED_MODULE_9__["BinTransferService"]]
    })
], AddBinTransferModule);



/***/ }),

/***/ "./src/app/service/bin-transfer.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/bin-transfer.service.ts ***!
  \*************************************************/
/*! exports provided: BinTransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinTransferService", function() { return BinTransferService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let BinTransferService = class BinTransferService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    addBinTransfer(data) {
        return this.http.post(`${this.API_URL}/bin-transfer`, data);
    }
    getBinTransferMasterData() {
        return this.http.get(`${this.API_URL}/bin-transfer/master-data`);
    }
    getSkuDropDownData(id) {
        return this.http.get(`${this.API_URL}/bin-transfer/sku/${id}`);
    }
    getBinData(id) {
        return this.http.get(`${this.API_URL}/bin-transfer/to-bin-location/${id}`);
    }
};
BinTransferService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BinTransferService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], BinTransferService);



/***/ })

}]);
//# sourceMappingURL=add-bin-transfer-add-bin-transfer-module-es2015.js.map