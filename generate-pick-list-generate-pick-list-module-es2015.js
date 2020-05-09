(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["generate-pick-list-generate-pick-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list/generate-pick-list/generate-pick-list.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list/generate-pick-list/generate-pick-list.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"page-header border-b\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal pb-4\" role=\"form\">\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-7 pl-3\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">PO Date <em>*</em></label>\r\n                  <div class=\"\">\r\n                    <input type=\"text\" class=\"form-control\"\r\n                      [value]=\"orderDetails?.sales_order_date |date:date_format :timezone\" disabled>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">Date of Receipt <em>*</em></label>\r\n                  <div class=\"date-picker\">\r\n                    <ng2-flatpickr disabled [setDate]=\"orderDetails?.receipt_date\" [config]=\"exampleOptions\">\r\n                    </ng2-flatpickr>\r\n                    <span class=\"date-picker-icon\">\r\n                      <span class=\"fa fa-calendar\"></span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">Notes</label>\r\n                  <textarea [formControl]=\"addForm.controls['notes']\" class=\"form-control\" rows=\"2\"></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-4\">\r\n          <div class=\"col\">\r\n            <h5>Items</h5>\r\n            <div class=\"table-responsive-md mt-3\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>No.</th>\r\n                    <th>SKU no</th>\r\n                    <th>Product</th>\r\n                    <th class=\"text-center\">Product Qty</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody formArrayName=\"unload_detail\">\r\n\r\n                  <tr *ngFor=\"let item of addForm['controls'].unload_detail['controls']; let i = index; last as last;\"\r\n                    [formGroupName]=\"i\">\r\n\r\n                    <td>\r\n                      <div class=\"p-1\">{{i+1}}</div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"p-1\">\r\n                        {{ item?.value?.sku_no }}\r\n                        <!-- <input type=\"text\" class=\"input_formarray form-control\" formControlName='sku_no' disabled> -->\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"p-1\">\r\n                        {{ item?.value?.product_name }}\r\n                        <!-- <input type=\"text\" class=\"input_formarray form-control\" formControlName='product_name' disabled> -->\r\n                      </div>\r\n                    </td>\r\n\r\n                    <td class=\"text-center\">\r\n                      <div class=\"p-1\">\r\n                        {{ item?.value?.product_qty }}\r\n                        <!-- <input type=\"text\" class=\"input_formarray form-control\" formControlName='product_qty' disabled> -->\r\n                      </div>\r\n                    </td>\r\n\r\n\r\n                  </tr>\r\n\r\n\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-4 border border-left-0 border-right-0 pt-4 pb-2\">\r\n          <div class=\"col-md-6\">\r\n            <h5>Picked By</h5>\r\n            <!-- <div class=\"row mt-3\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">Name <em>*</em></label>\r\n                  <div class=\"\">\r\n                    <input [formControl]=\"addForm.controls['delivery_name']\" type=\"text\" class=\"form-control\"\r\n                      placeholder=\"\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">Phone No. <em>*</em></label>\r\n                  <div class=\"\">\r\n                    <input number [formControl]=\"addForm.controls['delivery_phone']\" type=\"text\" class=\"form-control\"\r\n                      placeholder=\"\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n            <div class=\"row mt-2\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">Picked by. <em>*</em></label>\r\n                  <div class=\"\">\r\n                    <input [formControl]=\"addForm.controls['picked_by']\" type=\"text\" class=\"form-control\"\r\n                      placeholder=\"\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"col-md-6\">\r\n            <h5>Received By</h5>\r\n            <div class=\"row mt-3\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">Name <em>*</em></label>\r\n                  <div class=\"\">\r\n                    <input [formControl]=\"addForm.controls['receiver_name']\" type=\"text\" class=\"form-control\"\r\n                      placeholder=\"\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label text-md-right\">Phone No. <em>*</em></label>\r\n                  <div class=\"\">\r\n                    <input number [formControl]=\"addForm.controls['receiver_phone']\" type=\"text\" class=\"form-control\"\r\n                      placeholder=\"\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n  \r\n          </div> -->\r\n        </div>\r\n\r\n\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col\">\r\n            <div class=\"text-right\">\r\n              <button type=\"button\" class=\"btn btn-light\" (click)=\"back()\">Cancel</button>\r\n              <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<style>\r\n  .input_formarray {\r\n    width: 80%;\r\n  }\r\n</style>");

/***/ }),

/***/ "./src/app/pages/outbound/pick-list/generate-pick-list/generate-pick-list.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/outbound/pick-list/generate-pick-list/generate-pick-list.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: GeneratePickListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratePickListComponent", function() { return GeneratePickListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_service_pick_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/pick-list.service */ "./src/app/service/pick-list.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var src_app_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/messages */ "./src/app/messages.ts");








let GeneratePickListComponent = class GeneratePickListComponent {
    constructor(activatedRoute, pickListService, location, fb, router, dataService) {
        this.activatedRoute = activatedRoute;
        this.pickListService = pickListService;
        this.location = location;
        this.fb = fb;
        this.router = router;
        this.dataService = dataService;
        this.PageTitle = "Genrate PickList ";
        this.exampleOptions = {
            defaultDate: new Date(),
            dateFormat: src_app_messages__WEBPACK_IMPORTED_MODULE_7__["DATEFORMAT"] + ' ' + src_app_messages__WEBPACK_IMPORTED_MODULE_7__["TIMEFORMAT"],
            noCalendar: true,
        };
        this.orderDetails = {};
        this.productList = [];
        this.date_format = "M/d/yy";
        this.addForm = this.fb.group({
            picked_by: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            notes: [null],
            unload_detail: this.fb.array([]),
        });
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.viewId = this.activatedRoute.snapshot.paramMap.get('id');
        }
    }
    ngOnInit() {
        this.dataService.currentCompany.subscribe((response) => {
            if (response) {
                this.timezone = String(response.timezone.format);
                ;
                this.time_format = response.time_format.label;
                this.date_format = response.date_format.label;
                this.currentCompany = response;
            }
        });
        this.getObject();
    }
    back() {
        this.location.back();
    }
    getObject() {
        this.pickListService.getPickListReportsDetails(this.viewId).subscribe((response) => {
            if (response.success) {
                this.orderDetails = response.data.order_detail;
                this.productList = response.data.product;
                this.setData();
                // this.pagination = this.paginationService.getPager(response.data.pagination['total_page'], this.currentPage);
            }
            else {
                this.orderDetails = {};
                this.productList = [];
            }
        }, (error) => {
            this.orderDetails = {};
            this.productList = [];
        });
    }
    setData() {
        this.addForm.patchValue({
            notes: this.orderDetails.notes,
            picked_by: this.orderDetails.picked_by,
        });
        if (this.productList.length > 0) {
            const control = this.addForm.get('unload_detail');
            for (let i = 0; i <= control.length + 1; i++) {
                control.removeAt(i);
            }
            this.productList.forEach((obj, i) => {
                control.push(this.fb.group({
                    pick_list_id: obj.pick_list_id,
                    sku_no: obj.sku_no,
                    product_name: obj.product_name,
                    product_qty: obj.product_qty,
                }));
            });
        }
    }
    submitForm(formData) {
        if (formData.valid) {
            this.showLoader = true;
            const data = new FormData();
            data.append('picked_by', formData.value.picked_by);
            // data.append('unload_detail', JSON.stringify(formData.value.unload_detail));
            // data.append('notes', formData.value.notes ? formData.value.notes : '');
            this.pickListService.getPickListSubmitReports(this.viewId, data).subscribe((response) => {
                this.showLoader = false;
                if (response.success) {
                    this.back();
                }
            }, (error) => {
                this.showLoader = false;
            });
        }
    }
    addNewRow() {
        const control = this.addForm.get('unload_detail');
        control.push(this.initRows());
    }
    initRows() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            pick_list_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            sku_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            product_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            product_qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
        });
    }
};
GeneratePickListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_pick_list_service__WEBPACK_IMPORTED_MODULE_5__["PickListService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }
];
GeneratePickListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-generate-pick-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./generate-pick-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list/generate-pick-list/generate-pick-list.component.html")).default
    })
], GeneratePickListComponent);



/***/ }),

/***/ "./src/app/pages/outbound/pick-list/generate-pick-list/generate-pick-list.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/outbound/pick-list/generate-pick-list/generate-pick-list.module.ts ***!
  \******************************************************************************************/
/*! exports provided: GeneratePickListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratePickListModule", function() { return GeneratePickListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-flatpickr */ "./node_modules/ng2-flatpickr/__ivy_ngcc__/fesm2015/ng2-flatpickr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _generate_pick_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./generate-pick-list.component */ "./src/app/pages/outbound/pick-list/generate-pick-list/generate-pick-list.component.ts");









const routes = [
    {
        path: ':id',
        component: _generate_pick_list_component__WEBPACK_IMPORTED_MODULE_8__["GeneratePickListComponent"]
    },
];
let GeneratePickListModule = class GeneratePickListModule {
};
GeneratePickListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_generate_pick_list_component__WEBPACK_IMPORTED_MODULE_8__["GeneratePickListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ng2_flatpickr__WEBPACK_IMPORTED_MODULE_4__["Ng2FlatpickrModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__["FormValidationModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ]
    })
], GeneratePickListModule);



/***/ })

}]);
//# sourceMappingURL=generate-pick-list-generate-pick-list-module-es2015.js.map