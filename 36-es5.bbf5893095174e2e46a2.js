function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{X8pz:function(e,t,a){"use strict";a.r(t);var o=a("ofXK"),r=a("tyNb"),n=a("3Pt+"),i=a("Lw2Y"),c=a("FasR"),d=a("fXoL"),s=a("5eHb"),b=a("HNGx"),l=a("c8VH"),u=a("Jvtu"),p=a("LPFR");function h(e,t){if(1&e&&(d.Sb(0,"div",19),d.Sb(1,"div",20),d.Sb(2,"div",2),d.Sb(3,"div",21),d.Sb(4,"div",22),d.Sb(5,"label",23),d.Cc(6,"PO Date "),d.Sb(7,"em"),d.Cc(8,"*"),d.Rb(),d.Rb(),d.Sb(9,"div",24),d.Nb(10,"input",25),d.Rb(),d.Rb(),d.Rb(),d.Sb(11,"div",21),d.Sb(12,"div",22),d.Sb(13,"label",23),d.Cc(14,"Date of Receipt"),d.Rb(),d.Sb(15,"div",26),d.Nb(16,"ng2-flatpickr",27),d.Sb(17,"span",28),d.Nb(18,"span",29),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb()),2&e){var a=d.cc();d.zb(10),d.jc("formControl",a.addForm.controls.po_date),d.zb(6),d.jc("formControl",a.addForm.controls.receipt_date)("config",a.exampleOptions)}}function f(e,t){if(1&e){var a=d.Tb();d.Qb(0),d.Sb(1,"div",19),d.Sb(2,"div",3),d.Sb(3,"app-table-list",30),d.ac("checkBoxSelectEvent",(function(e){return d.uc(a),d.cc().checkBoxSelectEvent(e)}))("reloadEvent",(function(){return d.uc(a),d.cc().onReloadEvent()})),d.Rb(),d.Rb(),d.Rb(),d.Pb()}if(2&e){var o=d.cc();d.zb(3),d.jc("headerData",o.headerData)("rawData",o.productList)}}var v,m=function(e){return{"qt-loader qt-loader-mini qt-loader-left":e}},S=((v=function(){function e(t,a,o,r,i,c,d){_classCallCheck(this,e),this.location=t,this.toastr=a,this.unloadService=o,this.paginationService=r,this.activatedRoute=i,this.fb=c,this.router=d,this.PageTitle="Genrate Unloading",this.objectDetails=!1,this.productList=[],this.productItems=[],this.headerData=[],this.showLoader=!1,this.formErrors={apierror:null},this.exampleOptions={defaultDate:new Date},this.activatedRoute.snapshot.paramMap.get("id")&&(this.orderId=this.activatedRoute.snapshot.paramMap.get("id"),this.orderId&&this.getUnloadGenerateListById()),this.addForm=this.fb.group({receipt_date:[null,n.t.compose([n.t.required])],po_date:[null,n.t.compose([n.t.required])]})}return _createClass(e,[{key:"ngOnInit",value:function(){this.addForm.patchValue({receipt_date:new Date}),this.setHeaderData()}},{key:"setHeaderData",value:function(){this.headerData.push(new c.b({class:"align-items-center d-flex",key:"product_id"}),new c.e({label:"SKU",key:"sku_no"}),new c.e({label:"Product",key:"product_name"}),new c.e({label:"Order Quantity",key:"order_quantity"}))}},{key:"back",value:function(){this.location.back()}},{key:"getUnloadGenerateListById",value:function(){var e=this;this.unloadService.getUnloadGenerateListById(this.orderId).subscribe((function(t){t.success?(e.objectDetails=t.data.po_detail?t.data.po_detail:{},e.productList=t.data.product_list?t.data.product_list:[],e.setData()):(e.objectDetails=null,e.productList=[],e.pagination=null)}))}},{key:"setData",value:function(){this.searchText=this.objectDetails.po_no,this.addForm.patchValue({po_date:this.objectDetails.po_date,receipt_date:new Date})}},{key:"submitForm",value:function(e){var t=this;if(e.valid){this.showLoader=!0;var a=new FormData;a.append("receipt_date",i.a.changedateFormate(e.value.receipt_date[0])),a.append("po_id",this.orderId),a.append("supplier_id",this.objectDetails.supplier_id),a.append("to_details",this.objectDetails.client_id),a.append("product",JSON.stringify(this.productItems)),this.isEditing||this.unloadService.addUnloadGenerate(a).subscribe((function(e){setTimeout((function(){t.showLoader=!1}),700),e.success?t.back():e.error.filter((function(e){e.hasOwnProperty("product")&&t.toastr.error("","Please Select a Product...!")}))}),(function(e){t.showLoader=!1}))}}},{key:"getPage",value:function(e){this.currentPage=e}},{key:"searchObject",value:function(){console.log("searchObject",this.searchText)}},{key:"onReloadEvent",value:function(){this.getUnloadGenerateListById()}},{key:"checkBoxSelectEvent",value:function(e){var t=this;this.productItems=[],e&&e.length>0&&e.filter((function(e){var a=new Object;a.product_id=e.product_id,a.order_qty=e.order_quantity,a.sku_no=e.sku_no,a.product_name=e.product_name,t.productItems.push(a)}))}}]),e}()).\u0275fac=function(e){return new(e||v)(d.Mb(o.h),d.Mb(s.b),d.Mb(b.a),d.Mb(l.a),d.Mb(r.a),d.Mb(n.e),d.Mb(r.e))},v.\u0275cmp=d.Gb({type:v,selectors:[["app-generate"]],decls:32,vars:9,consts:[[1,"container-fluid"],[1,"page-header"],[1,"row"],[1,"col"],[1,"mr-auto"],[1,"card"],[1,"card-body"],[1,"form-group","row"],[1,"control-label","text-md-right","col-md-3","mt-2"],[1,"d-flex"],["type","text","placeholder","",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-primary","ml-2",3,"click"],["role","form",1,"form-horizontal",3,"formGroup","ngSubmit"],["class","row mt-3",4,"ngIf"],[1,"row","mt-4"],[4,"ngIf"],[1,"text-right","border-top","pt-4","mt-5","mb-3"],["type","button",1,"btn","btn-light",3,"click"],["type","submit",1,"btn","btn-secondary","ml-2",3,"ngClass","disabled"],[1,"row","mt-3"],[1,"col-7","pl-3"],[1,"col-6"],[1,"form-group"],[1,"control-label","text-md-right"],[1,""],["value","addForm.value.po_date|date","type","text","placeholder","","disabled","",1,"form-control",3,"formControl"],[1,"date-picker"],[3,"formControl","config"],[1,"date-picker-icon"],[1,"fa","fa-calendar"],[3,"headerData","rawData","checkBoxSelectEvent","reloadEvent"]],template:function(e,t){1&e&&(d.Sb(0,"div",0),d.Sb(1,"div",1),d.Sb(2,"div",2),d.Sb(3,"div",3),d.Sb(4,"h2",4),d.Cc(5),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(6,"div",5),d.Sb(7,"div",6),d.Sb(8,"div",7),d.Sb(9,"label",8),d.Cc(10,"Order Number "),d.Sb(11,"em"),d.Cc(12,"*"),d.Rb(),d.Rb(),d.Sb(13,"div",9),d.Sb(14,"input",10),d.ac("ngModelChange",(function(e){return t.searchText=e})),d.Rb(),d.Sb(15,"button",11),d.ac("click",(function(){return t.searchObject()})),d.Cc(16,"Search"),d.Rb(),d.Rb(),d.Rb(),d.Sb(17,"form",12),d.ac("ngSubmit",(function(){return t.submitForm(t.addForm)})),d.Ac(18,h,19,3,"div",13),d.Sb(19,"div",14),d.Sb(20,"div",3),d.Sb(21,"h5"),d.Cc(22,"Product"),d.Rb(),d.Rb(),d.Rb(),d.Sb(23,"div"),d.Ac(24,f,4,2,"ng-container",15),d.Sb(25,"div",2),d.Sb(26,"div",3),d.Sb(27,"div",16),d.Sb(28,"button",17),d.ac("click",(function(){return t.back()})),d.Cc(29,"Cancel"),d.Rb(),d.Sb(30,"button",18),d.Cc(31,"Generate"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb()),2&e&&(d.zb(5),d.Dc(t.PageTitle),d.zb(9),d.jc("ngModel",t.searchText),d.zb(3),d.jc("formGroup",t.addForm),d.zb(1),d.jc("ngIf",t.objectDetails),d.zb(6),d.jc("ngIf",t.productList.length>0),d.zb(6),d.jc("ngClass",d.nc(7,m,t.showLoader))("disabled",t.showLoader))},directives:[n.c,n.o,n.q,n.v,n.p,n.j,o.l,o.j,n.g,u.a,p.a],encapsulation:2}),v),g=a("OTx7");a.d(t,"GenerateModule",(function(){return y}));var R,_=[{path:"",component:S},{path:":id",component:S}],y=((R=function e(){_classCallCheck(this,e)}).\u0275mod=d.Kb({type:R}),R.\u0275inj=d.Jb({factory:function(e){return new(e||R)},imports:[[o.b,u.b,n.l,n.s,g.a,r.i.forChild(_)]]}),R)}}]);