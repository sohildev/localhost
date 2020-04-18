(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transfer-order-transfer-order-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/search/search.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/search/search.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"input-group search-box\">\r\n  <input type=\"text\" class=\"form-control\" #search (keyup.enter)=\"searchAction(search.value)\" name=\"search\"\r\n    autocomplete=\"off\" placeholder=\"{{placeholder}}\">\r\n  <div class=\"input-group-append\">\r\n    <button type=\"button\" (click)=\"searchAction(search.value)\" class=\"input-group-text pointer\"><i\r\n        class=\"la la-search\"></i></button>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<style>\r\n  .search-box {\r\n    width: 280px;\r\n  }\r\n\r\n  .search-box .form-control {\r\n    background-color: white;\r\n    border: none;\r\n  }\r\n\r\n  .search-box .input-group-text {\r\n    background-color: #a5a2e2;\r\n    border: 1px solid white;\r\n    color: white;\r\n    border-radius: 0 3px 3px 0;\r\n  }\r\n</style>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/transfer-order/bin-transfer-orders/add-bin-transfer/add-bin-transfer.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/transfer-order/bin-transfer-orders/add-bin-transfer/add-bin-transfer.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <form class=\"form-horizontal\" role=\"form\">\r\n                    <div class=\"mt-2\">\r\n    \r\n                        <div class=\"form-group row\">\r\n                            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Transfer Order No.</label>\r\n                            <div class=\"col-md-5\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"control-label text-md-right col-md-4 col-lg-3\">From Bin <em>*</em></label>\r\n                            <div class=\"col-md-5\">\r\n                                <select class=\"form-control\">\r\n                                    <option>Select Bin</option>\r\n                                    <option>B1</option>\r\n                                    <option>B2</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"control-label text-md-right col-md-4 col-lg-3\">SKU <em>*</em></label>\r\n                            <div class=\"col-md-5\">\r\n                                <select class=\"form-control\">\r\n                                    <option>Select Product</option>\r\n                                    <option>Zone A</option>\r\n                                    <option>Zone B</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n    \r\n                        <div class=\"form-group row\">\r\n                            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Total Quantity <em>*</em></label>\r\n                            <div class=\"col-md-5\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"control-label text-md-right col-md-4 col-lg-3\">To Bin <em>*</em></label>\r\n                            <div class=\"col-md-5\">\r\n                                <select class=\"form-control\">\r\n                                    <option>Select Product</option>\r\n                                    <option>Zone A</option>\r\n                                    <option>Zone B</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Location <em>*</em></label>\r\n                            <div class=\"col-md-5\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"\" disabled>\r\n                            </div>\r\n                        </div>\r\n    \r\n                    </div>\r\n                    <div class=\"text-right border-top pt-4 mt-5 mb-3\">\r\n                        <button type=\"button\" class=\"btn btn-light\"\r\n                            routerLink=\"/stock/transfer-order/bin-transfer-list\">Cancel</button>\r\n                        <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/transfer-order/bin-transfer-orders/bin-transfer-orders.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/transfer-order/bin-transfer-orders/bin-transfer-orders.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row m-0\">\r\n            <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n            <div class=\"ml-3\">\r\n                <!-- <app-search></app-search> -->\r\n            </div>\r\n            <div class=\"ml-3\">\r\n                <app-btn-add [btnName]=\"'Add Bin Transfer Order'\"\r\n                    [editData]=\"'/stock/transfer-order/bin-transfer-list/add-bin-transfer'\"></app-btn-add>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link \" data-toggle=\"tab\" routerLink=\"/stock/transfer-order\" role=\"tab\"\r\n                                aria-controls=\"Pending\" aria-selected=\"true\">Putaway Transfer Orders</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\"\r\n                                routerLink=\"/stock/transfer-order/pickaway-list\" role=\"tab\" aria-controls=\"Unloading\"\r\n                                aria-selected=\"false\">Pickaway Transfer Orders</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link active\" id=\"contact-tab\" data-toggle=\"tab\"\r\n                                routerLink=\"/stock/transfer-order/bin-transfer-list\" role=\"tab\" aria-controls=\"contact\"\r\n                                aria-selected=\"false\">Bin Transfer Order</a>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"table-responsive-md mt-3\">\r\n                <table class=\"table\">\r\n                    <thead class=\"thead-dark\">\r\n                        <tr>\r\n                            <th>Transfer Order No</th>\r\n                            <th>SKU No</th>\r\n                            <th class=\"text-center\">Total Qty</th>\r\n                            <th class=\"text-center\">From Bin</th>\r\n                            <th class=\"text-center\">To Bin</th>\r\n                            <th>Location</th>\r\n                            <th class=\"text-right\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>MC-1579177</td>\r\n                            <td>5482</td>\r\n                            <td class=\"text-center\">25</td>\r\n                            <td class=\"text-center\">200</td>\r\n                            <td class=\"text-center\">287</td>\r\n                            <td>Johnberg</td>\r\n                            <td>\r\n                                <div class=\"action-drop dropdown text-right\">\r\n\r\n                                    <a href=\"#\" data-toggle=\"dropdown\"\r\n                                        class=\"btn shadow-none btn-default btn-sm btn-icon-only\" title=\"\">\r\n                                        <i class=\"fa fa-ellipsis-h\"></i>\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu dropdown-icon-menu drop-menu-right action-dropdown\"\r\n                                        style=\"width: 100px;\">\r\n\r\n                                        <a class=\"dropdown-item\" href=\"\"><i class=\"fa fa-edit fa-fw text-primary\">\r\n                                            </i> Edit</a>\r\n                                        <a class=\"dropdown-item\" routerLink=\"javascript:void(0);\"><i\r\n                                                class=\"fa fa-trash fa-fw text-primary\">\r\n                                            </i> Delete</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n\r\n\r\n\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/transfer-order/pickaway-transfer-orders/pickaway-transfer-orders.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/transfer-order/pickaway-transfer-orders/pickaway-transfer-orders.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row m-0\">\r\n            <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n            <div class=\"ml-3\">\r\n                <!-- <app-search></app-search> -->\r\n            </div>\r\n            <div class=\"ml-3\">\r\n                <app-btn-add [btnName]=\"'Add Pickaway Transfer Order'\" [editData]=\"'/stock/transfer-order/add'\">\r\n                </app-btn-add>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link \" data-toggle=\"tab\" routerLink=\"/stock/transfer-order\" role=\"tab\"\r\n                                aria-controls=\"Pending\" aria-selected=\"true\">Putaway Transfer Orders</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link active\" id=\"profile-tab\" data-toggle=\"tab\"\r\n                                routerLink=\"/stock/transfer-order/pickaway-list\" role=\"tab\" aria-controls=\"Unloading\"\r\n                                aria-selected=\"false\">Pickaway Transfer Orders</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\"\r\n                                routerLink=\"/stock/transfer-order/bin-transfer-list\" role=\"tab\" aria-controls=\"contact\"\r\n                                aria-selected=\"false\">Bin Transfer Order</a>\r\n                        </li>\r\n    \r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"table-responsive-md mt-3\">\r\n                <table class=\"table\">\r\n                    <thead class=\"thead-dark\">\r\n                        <tr>\r\n                            <th>Transfer Order No</th>\r\n                            <th>Order No</th>\r\n                            <th>SKU No</th>\r\n                            <th>Case No</th>\r\n                            <th class=\"text-center\">Total Qty</th>\r\n                            <th class=\"text-center\">Putaway Qty</th>\r\n                            <th class=\"text-center\">No Of Putaway</th>\r\n                            <th>Location</th>\r\n                            <th class=\"text-right\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>MC-1579177</td>\r\n                            <td>00584</td>\r\n                            <td>5482</td>\r\n                            <td>500</td>\r\n                            <td class=\"text-center\">25</td>\r\n                            <td class=\"text-center\">200</td>\r\n                            <td class=\"text-center\">287</td>\r\n                            <td>Johnberg</td>\r\n                            <td>\r\n                                <div class=\"action-drop dropdown text-right\">\r\n    \r\n                                    <a href=\"#\" data-toggle=\"dropdown\" class=\"btn shadow-none btn-default btn-sm btn-icon-only\"\r\n                                        title=\"\">\r\n                                        <i class=\"fa fa-ellipsis-h\"></i>\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu dropdown-icon-menu drop-menu-right action-dropdown\"\r\n                                        style=\"width: 100px;\">\r\n    \r\n                                        <a class=\"dropdown-item\" href=\"\"><i class=\"fa fa-edit fa-fw text-primary\">\r\n                                            </i> Edit</a>\r\n                                        <a class=\"dropdown-item\" routerLink=\"javascript:void(0);\"><i\r\n                                                class=\"fa fa-trash fa-fw text-primary\">\r\n                                            </i> Delete</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n    \r\n    \r\n    \r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/transfer-order/putaway-transfer-orders/add-putaway-transfer-order/add-putaway-transfer-order.component.html":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/transfer-order/putaway-transfer-orders/add-putaway-transfer-order/add-putaway-transfer-order.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <form class=\"form-horizontal\" role=\"form\">\r\n            <div class=\"card-body\">\r\n                <div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Order Number <em>*</em></label>\r\n                        <div class=\"col-md-5\">\r\n                            <select class=\"form-control\">\r\n                                <option>Select Order Number</option>\r\n                                <option>01</option>\r\n                                <option>02</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Transfer Order No.</label>\r\n                        <div class=\"col-md-5\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Case No.</label>\r\n                        <div class=\"col-md-5\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">SKU <em>*</em></label>\r\n                        <div class=\"col-md-5\">\r\n                            <select class=\"form-control\">\r\n                                <option>Select Product</option>\r\n                                <option>Zone A</option>\r\n                                <option>Zone B</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Bin <em>*</em></label>\r\n                        <div class=\"col-md-5\">\r\n                            <select class=\"form-control\">\r\n                                <option>Select Bin</option>\r\n                                <option>B1</option>\r\n                                <option>B2</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Location</label>\r\n                        <div class=\"col-md-5\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"\" disabled>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Total Quantity\r\n                            <em>*</em></label>\r\n                        <div class=\"col-md-5\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"\" disabled>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Open Quantity\r\n                            <em>*</em></label>\r\n                        <div class=\"col-md-5\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"\" disabled>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Putaway Quantity\r\n                            <em>*</em></label>\r\n                        <div class=\"col-md-2\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">No of Putaway\r\n                            <em>*</em></label>\r\n                        <div class=\"col-md-2\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n                <button type=\"button\" class=\"btn btn-light\" routerLink=\"/stock/transfer-order\">Cancel</button>\r\n                <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n            </div>\r\n        </form>\r\n        \r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/transfer-order/putaway-transfer-orders/putaway-transfer-orders.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/transfer-order/putaway-transfer-orders/putaway-transfer-orders.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row m-0\">\r\n            <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n            <div class=\"ml-3\">\r\n                <!-- <app-search></app-search> -->\r\n            </div>\r\n            <div class=\"ml-3\">\r\n                <app-btn-add [btnName]=\"'Add Putaway Transfer Order'\" [editData]=\"'/stock/transfer-order/add'\">\r\n                </app-btn-add>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link active\" data-toggle=\"tab\" routerLink=\"/stock/transfer-order\" role=\"tab\"\r\n                        aria-controls=\"Pending\" aria-selected=\"true\">Putaway Transfer Orders</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\"\r\n                        routerLink=\"/stock/transfer-order/pickaway-list\" role=\"tab\" aria-controls=\"Unloading\"\r\n                        aria-selected=\"false\">Pickaway Transfer Orders</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\"\r\n                        routerLink=\"/stock/transfer-order/bin-transfer-list\" role=\"tab\" aria-controls=\"contact\"\r\n                        aria-selected=\"false\">Bin Transfer Order</a>\r\n                </li>\r\n\r\n            </ul>\r\n            <div class=\"table-responsive-md mt-3\">\r\n                <table class=\"table\">\r\n                    <thead class=\"thead-dark\">\r\n                        <tr>\r\n                            <th>Transfer Order No</th>\r\n                            <th>Order No</th>\r\n                            <th>SKU No</th>\r\n                            <th>Case No</th>\r\n                            <th class=\"text-center\">Total Qty</th>\r\n                            <th class=\"text-center\">Putaway Qty</th>\r\n                            <th class=\"text-center\">No Of Putaway</th>\r\n                            <th>Location</th>\r\n                            <th class=\"text-right\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>MC-1579177</td>\r\n                            <td>00584</td>\r\n                            <td>5482</td>\r\n                            <td>500</td>\r\n                            <td class=\"text-center\">25</td>\r\n                            <td class=\"text-center\">200</td>\r\n                            <td class=\"text-center\">287</td>\r\n                            <td>Johnberg</td>\r\n                            <td>\r\n                                <div class=\"action-drop dropdown text-right\">\r\n\r\n                                    <a href=\"#\" data-toggle=\"dropdown\"\r\n                                        class=\"btn shadow-none btn-default btn-sm btn-icon-only\" title=\"\">\r\n                                        <i class=\"fa fa-ellipsis-h\"></i>\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu dropdown-icon-menu drop-menu-right action-dropdown\"\r\n                                        style=\"width: 100px;\">\r\n\r\n                                        <a class=\"dropdown-item\" href=\"\"><i class=\"fa fa-edit fa-fw text-primary\">\r\n                                            </i> Edit</a>\r\n                                        <a class=\"dropdown-item\" routerLink=\"javascript:void(0);\"><i\r\n                                                class=\"fa fa-trash fa-fw text-primary\">\r\n                                            </i> Delete</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n\r\n\r\n\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>\r\n");

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

/***/ "./src/app/common-module/search/search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/common-module/search/search.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SearchComponent = class SearchComponent {
    constructor() {
        this.text = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    searchAction(text) {
        this.text.emit(text);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchComponent.prototype, "text", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchComponent.prototype, "placeholder", void 0);
SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'search-box',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/search/search.component.html")).default
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/common-module/search/search.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/common-module/search/search.module.ts ***!
  \*******************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.component */ "./src/app/common-module/search/search.component.ts");




let SearchModule = class SearchModule {
};
SearchModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
        ]
    })
], SearchModule);



/***/ }),

/***/ "./src/app/pages/operation/transfer-order/bin-transfer-orders/add-bin-transfer/add-bin-transfer.component.css":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/operation/transfer-order/bin-transfer-orders/add-bin-transfer/add-bin-transfer.component.css ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wZXJhdGlvbi90cmFuc2Zlci1vcmRlci9iaW4tdHJhbnNmZXItb3JkZXJzL2FkZC1iaW4tdHJhbnNmZXIvYWRkLWJpbi10cmFuc2Zlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/operation/transfer-order/bin-transfer-orders/add-bin-transfer/add-bin-transfer.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/operation/transfer-order/bin-transfer-orders/add-bin-transfer/add-bin-transfer.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: AddBinTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBinTransferComponent", function() { return AddBinTransferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AddBinTransferComponent = class AddBinTransferComponent {
    constructor() {
        this.PageTitle = "Generate Bin Transfer Order";
    }
    ngOnInit() {
    }
};
AddBinTransferComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-bin-transfer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-bin-transfer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/transfer-order/bin-transfer-orders/add-bin-transfer/add-bin-transfer.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-bin-transfer.component.css */ "./src/app/pages/operation/transfer-order/bin-transfer-orders/add-bin-transfer/add-bin-transfer.component.css")).default]
    })
], AddBinTransferComponent);



/***/ }),

/***/ "./src/app/pages/operation/transfer-order/bin-transfer-orders/bin-transfer-orders.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/operation/transfer-order/bin-transfer-orders/bin-transfer-orders.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wZXJhdGlvbi90cmFuc2Zlci1vcmRlci9iaW4tdHJhbnNmZXItb3JkZXJzL2Jpbi10cmFuc2Zlci1vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/operation/transfer-order/bin-transfer-orders/bin-transfer-orders.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/operation/transfer-order/bin-transfer-orders/bin-transfer-orders.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: BinTransferOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinTransferOrdersComponent", function() { return BinTransferOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BinTransferOrdersComponent = class BinTransferOrdersComponent {
    constructor() {
        this.PageTitle = "Bin Transfer Orders";
    }
    ngOnInit() {
    }
};
BinTransferOrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bin-transfer-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bin-transfer-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/transfer-order/bin-transfer-orders/bin-transfer-orders.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bin-transfer-orders.component.css */ "./src/app/pages/operation/transfer-order/bin-transfer-orders/bin-transfer-orders.component.css")).default]
    })
], BinTransferOrdersComponent);



/***/ }),

/***/ "./src/app/pages/operation/transfer-order/pickaway-transfer-orders/pickaway-transfer-orders.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/operation/transfer-order/pickaway-transfer-orders/pickaway-transfer-orders.component.css ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wZXJhdGlvbi90cmFuc2Zlci1vcmRlci9waWNrYXdheS10cmFuc2Zlci1vcmRlcnMvcGlja2F3YXktdHJhbnNmZXItb3JkZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/operation/transfer-order/pickaway-transfer-orders/pickaway-transfer-orders.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/operation/transfer-order/pickaway-transfer-orders/pickaway-transfer-orders.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PickawayTransferOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickawayTransferOrdersComponent", function() { return PickawayTransferOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PickawayTransferOrdersComponent = class PickawayTransferOrdersComponent {
    constructor() {
        this.PageTitle = "Pickaway Transfer Orders";
    }
    ngOnInit() {
    }
};
PickawayTransferOrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pickaway-transfer-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pickaway-transfer-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/transfer-order/pickaway-transfer-orders/pickaway-transfer-orders.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pickaway-transfer-orders.component.css */ "./src/app/pages/operation/transfer-order/pickaway-transfer-orders/pickaway-transfer-orders.component.css")).default]
    })
], PickawayTransferOrdersComponent);



/***/ }),

/***/ "./src/app/pages/operation/transfer-order/putaway-transfer-orders/add-putaway-transfer-order/add-putaway-transfer-order.component.css":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/operation/transfer-order/putaway-transfer-orders/add-putaway-transfer-order/add-putaway-transfer-order.component.css ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wZXJhdGlvbi90cmFuc2Zlci1vcmRlci9wdXRhd2F5LXRyYW5zZmVyLW9yZGVycy9hZGQtcHV0YXdheS10cmFuc2Zlci1vcmRlci9hZGQtcHV0YXdheS10cmFuc2Zlci1vcmRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/operation/transfer-order/putaway-transfer-orders/add-putaway-transfer-order/add-putaway-transfer-order.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/operation/transfer-order/putaway-transfer-orders/add-putaway-transfer-order/add-putaway-transfer-order.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: AddPutawayTransferOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPutawayTransferOrderComponent", function() { return AddPutawayTransferOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AddPutawayTransferOrderComponent = class AddPutawayTransferOrderComponent {
    constructor() {
        this.PageTitle = "Generate Putaway Transfer Order";
    }
    ngOnInit() {
    }
};
AddPutawayTransferOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-putaway-transfer-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-putaway-transfer-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/transfer-order/putaway-transfer-orders/add-putaway-transfer-order/add-putaway-transfer-order.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-putaway-transfer-order.component.css */ "./src/app/pages/operation/transfer-order/putaway-transfer-orders/add-putaway-transfer-order/add-putaway-transfer-order.component.css")).default]
    })
], AddPutawayTransferOrderComponent);



/***/ }),

/***/ "./src/app/pages/operation/transfer-order/putaway-transfer-orders/putaway-transfer-orders.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/operation/transfer-order/putaway-transfer-orders/putaway-transfer-orders.component.css ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wZXJhdGlvbi90cmFuc2Zlci1vcmRlci9wdXRhd2F5LXRyYW5zZmVyLW9yZGVycy9wdXRhd2F5LXRyYW5zZmVyLW9yZGVycy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/operation/transfer-order/putaway-transfer-orders/putaway-transfer-orders.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/operation/transfer-order/putaway-transfer-orders/putaway-transfer-orders.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PutawayTransferOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutawayTransferOrdersComponent", function() { return PutawayTransferOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PutawayTransferOrdersComponent = class PutawayTransferOrdersComponent {
    constructor() {
        this.PageTitle = "Putaway Transfer Orders";
    }
    ngOnInit() {
    }
};
PutawayTransferOrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-putaway-transfer-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./putaway-transfer-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/transfer-order/putaway-transfer-orders/putaway-transfer-orders.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./putaway-transfer-orders.component.css */ "./src/app/pages/operation/transfer-order/putaway-transfer-orders/putaway-transfer-orders.component.css")).default]
    })
], PutawayTransferOrdersComponent);



/***/ }),

/***/ "./src/app/pages/operation/transfer-order/transfer-order.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/operation/transfer-order/transfer-order.module.ts ***!
  \*************************************************************************/
/*! exports provided: TransferOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferOrderModule", function() { return TransferOrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _putaway_transfer_orders_putaway_transfer_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./putaway-transfer-orders/putaway-transfer-orders.component */ "./src/app/pages/operation/transfer-order/putaway-transfer-orders/putaway-transfer-orders.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var _putaway_transfer_orders_add_putaway_transfer_order_add_putaway_transfer_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./putaway-transfer-orders/add-putaway-transfer-order/add-putaway-transfer-order.component */ "./src/app/pages/operation/transfer-order/putaway-transfer-orders/add-putaway-transfer-order/add-putaway-transfer-order.component.ts");
/* harmony import */ var _pickaway_transfer_orders_pickaway_transfer_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pickaway-transfer-orders/pickaway-transfer-orders.component */ "./src/app/pages/operation/transfer-order/pickaway-transfer-orders/pickaway-transfer-orders.component.ts");
/* harmony import */ var _bin_transfer_orders_bin_transfer_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bin-transfer-orders/bin-transfer-orders.component */ "./src/app/pages/operation/transfer-order/bin-transfer-orders/bin-transfer-orders.component.ts");
/* harmony import */ var _bin_transfer_orders_add_bin_transfer_add_bin_transfer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bin-transfer-orders/add-bin-transfer/add-bin-transfer.component */ "./src/app/pages/operation/transfer-order/bin-transfer-orders/add-bin-transfer/add-bin-transfer.component.ts");











const routes = [
    {
        path: '',
        component: _putaway_transfer_orders_putaway_transfer_orders_component__WEBPACK_IMPORTED_MODULE_3__["PutawayTransferOrdersComponent"]
    },
    {
        path: 'add',
        component: _putaway_transfer_orders_add_putaway_transfer_order_add_putaway_transfer_order_component__WEBPACK_IMPORTED_MODULE_7__["AddPutawayTransferOrderComponent"]
    },
    {
        path: 'pickaway-list',
        component: _pickaway_transfer_orders_pickaway_transfer_orders_component__WEBPACK_IMPORTED_MODULE_8__["PickawayTransferOrdersComponent"]
    },
    {
        path: 'bin-transfer-list',
        component: _bin_transfer_orders_bin_transfer_orders_component__WEBPACK_IMPORTED_MODULE_9__["BinTransferOrdersComponent"]
    },
    {
        path: 'bin-transfer-list/add-bin-transfer',
        component: _bin_transfer_orders_add_bin_transfer_add_bin_transfer_component__WEBPACK_IMPORTED_MODULE_10__["AddBinTransferComponent"]
    }
];
let TransferOrderModule = class TransferOrderModule {
};
TransferOrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_putaway_transfer_orders_putaway_transfer_orders_component__WEBPACK_IMPORTED_MODULE_3__["PutawayTransferOrdersComponent"], _putaway_transfer_orders_add_putaway_transfer_order_add_putaway_transfer_order_component__WEBPACK_IMPORTED_MODULE_7__["AddPutawayTransferOrderComponent"], _pickaway_transfer_orders_pickaway_transfer_orders_component__WEBPACK_IMPORTED_MODULE_8__["PickawayTransferOrdersComponent"], _bin_transfer_orders_bin_transfer_orders_component__WEBPACK_IMPORTED_MODULE_9__["BinTransferOrdersComponent"], _bin_transfer_orders_add_bin_transfer_add_bin_transfer_component__WEBPACK_IMPORTED_MODULE_10__["AddBinTransferComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_5__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_6__["BtnAddModule"]
        ]
    })
], TransferOrderModule);



/***/ })

}]);
//# sourceMappingURL=transfer-order-transfer-order-module-es2015.js.map