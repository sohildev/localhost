function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,a,t){return a&&_defineProperties(e.prototype,a),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{uxlB:function(e,a,t){"use strict";t.r(a);var i,n=t("ofXK"),r=t("tyNb"),o=t("g3N6"),c=t("uq2c"),b=t("OTx7"),s=t("3Pt+"),d=t("fXoL"),l=t("AytR"),u=t("tk/3"),h=((i=function(){function e(a){_classCallCheck(this,e),this.http=a,this.API_URL=l.a.APIEndpoint}return _createClass(e,[{key:"getBayList",value:function(e){return this.http.get("".concat(this.API_URL,"/bay"),{params:e})}},{key:"addBay",value:function(e){return this.http.post("".concat(this.API_URL,"/bay"),e)}},{key:"editBay",value:function(e,a){return this.http.put("".concat(this.API_URL,"/bay/").concat(e),a)}},{key:"getBayById",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.http.get("".concat(this.API_URL,"/bay/").concat(e),{params:a})}},{key:"getMasterData",value:function(){return this.http.get("".concat(this.API_URL,"/bay/master-data"))}}]),e}()).\u0275fac=function(e){return new(e||i)(d.Wb(u.b))},i.\u0275prov=d.Ib({token:i,factory:i.\u0275fac}),i),y=t("8cFx"),p=t("HOh6"),v=t("UaFz"),g=t("ZOsW");function m(e,a){if(1&e&&d.Nb(0,"span",20),2&e){var t=d.cc();d.jc("innerHTML",t.formErrors.bay_code,d.vc)}}function f(e,a){if(1&e&&(d.Qb(0),d.Nb(1,"img",21),d.Pb()),2&e){var t=d.cc();d.zb(1),d.jc("src",t.barCodeFile,d.wc)}}function R(e,a){1&e&&d.Nb(0,"img",22)}var _,S=function(e){return{"has-error":e}},w=function(e){return{"qt-loader qt-loader-mini qt-loader-left":e}},C=((_=function(){function e(a,t,i,n,r){_classCallCheck(this,e),this.router=a,this.activatedRoute=t,this.fb=i,this.bayservice=n,this.commonservice=r,this.PageTitle="Bay",this.aisleListArray=[],this.addNewRadio=!1,this.loadingState=!1,this.showLoader=!1,this.formErrors={bay_code:null,apierror:null},this.isEditing=!1,this.editId=null,this.activatedRoute.snapshot.paramMap.get("id")&&(this.isEditing=!0,this.editId=this.activatedRoute.snapshot.paramMap.get("id")),this.addForm=this.fb.group({bay_name:[null,s.t.compose([s.t.required])],bay_code:[null,s.t.compose([s.t.required])],aisle_id:[null,s.t.compose([s.t.required])],bay_bar_code:[null]})}return _createClass(e,[{key:"ngOnInit",value:function(){this.getMasterData(),this.isEditing?this.getEditObject():this.getAreaBarcode()}},{key:"getMasterData",value:function(){var e=this;this.bayservice.getMasterData().subscribe((function(a){a.success&&(e.aisleListArray=a.data.aisle)}))}},{key:"getAreaBarcode",value:function(){var e=this;this.commonservice.getGenerateBarcode().subscribe((function(a){e.addForm.patchValue({bay_bar_code:a.type});var t=window.URL||window.webkitURL;document.getElementById("barCodeShow").src=t.createObjectURL(a),e.selectedFile=new File([a],"noname.jpeg",{type:"image/jpeg"})}))}},{key:"getEditObject",value:function(){var e=this;this.bayservice.getBayById(this.editId).subscribe((function(a){a.success?(e.addForm.patchValue(a.data),e.barCodeFile=a.data.bay_bar_code_image):e.router.navigateByUrl("/manage/bay")}))}},{key:"submitForm",value:function(e){var a=this;if(e.valid){this.showLoader=!0;var t=new FormData;t.append("bay_name",e.value.bay_name),t.append("bay_code",e.value.bay_code),t.append("aisle_id",e.value.aisle_id),t.append("bay_bar_code",e.value.bay_bar_code),this.selectedFile&&t.append("file",this.selectedFile),this.isEditing?this.bayservice.editBay(this.editId,t).subscribe((function(e){a.showLoader=!1,e.success?a.router.navigateByUrl("/manage/bay"):e.error.map((function(t){t.hasOwnProperty("bay_code")?a.formErrors.bay_code=t.bay_code:a.formErrors.apierror="* ".concat(e.error)}))}),(function(e){a.showLoader=!1})):this.bayservice.addBay(t).subscribe((function(e){a.showLoader=!1,e.success?a.router.navigateByUrl("/manage/bay"):e.error.map((function(t){t.hasOwnProperty("bay_code")?a.formErrors.bay_code=t.bay_code:a.formErrors.apierror="* ".concat(e.error)}))}),(function(e){a.showLoader=!1}))}}}]),e}()).\u0275fac=function(e){return new(e||_)(d.Mb(r.e),d.Mb(r.a),d.Mb(s.e),d.Mb(h),d.Mb(y.a))},_.\u0275cmp=d.Gb({type:_,selectors:[["app-add-bay"]],decls:43,vars:17,consts:[[1,"side-container"],[1,"page-header"],[1,"row"],[1,"col"],[1,"mr-auto"],[1,"card"],["role","form",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"card-body"],[1,"form-group","row","align-items-center"],[1,"control-label","text-md-right","col-md-4","col-lg-3","mb-0"],[1,"col-md-5"],["type","text","placeholder","",1,"form-control",3,"formControl"],[1,"col-md-5",3,"ngClass"],["class","help-block",3,"innerHTML",4,"ngIf"],["bindLabel","label","bindValue","value","placeholder","Select Aisle",3,"formControl","items"],[4,"ngIf","ngIfElse"],["elseTemplate",""],[1,"text-right","border-top","pt-4","mt-5","card-footer"],["type","button","routerLink","/manage/bay",1,"btn","btn-light"],["type","submit",1,"btn","btn-secondary","ml-2",3,"ngClass","disabled"],[1,"help-block",3,"innerHTML"],["alt","","sizes","","srcset","",1,"bcode",3,"src"],["id","barCodeShow","alt","","sizes","","srcset","",1,"bcode"]],template:function(e,a){if(1&e&&(d.Sb(0,"div",0),d.Sb(1,"div",1),d.Sb(2,"div",2),d.Sb(3,"div",3),d.Sb(4,"h2",4),d.Cc(5),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(6,"div",5),d.Sb(7,"form",6),d.ac("ngSubmit",(function(){return a.submitForm(a.addForm)})),d.Sb(8,"div",7),d.Sb(9,"div"),d.Sb(10,"div",8),d.Sb(11,"label",9),d.Cc(12,"Bay Name "),d.Sb(13,"em"),d.Cc(14,"*"),d.Rb(),d.Rb(),d.Sb(15,"div",10),d.Nb(16,"input",11),d.Rb(),d.Rb(),d.Sb(17,"div",8),d.Sb(18,"label",9),d.Cc(19,"Bay Code "),d.Sb(20,"em"),d.Cc(21,"*"),d.Rb(),d.Rb(),d.Sb(22,"div",12),d.Nb(23,"input",11),d.Ac(24,m,1,1,"span",13),d.Rb(),d.Rb(),d.Sb(25,"div",8),d.Sb(26,"label",9),d.Cc(27," Aisle Name "),d.Sb(28,"em"),d.Cc(29,"*"),d.Rb(),d.Rb(),d.Sb(30,"div",10),d.Nb(31,"ng-select",14),d.Rb(),d.Rb(),d.Sb(32,"div",8),d.Nb(33,"label",9),d.Sb(34,"div",10),d.Ac(35,f,2,1,"ng-container",15),d.Ac(36,R,1,0,"ng-template",null,16,d.Bc),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(38,"div",17),d.Sb(39,"button",18),d.Cc(40,"Cancel"),d.Rb(),d.Sb(41,"button",19),d.Cc(42,"Submit"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb()),2&e){var t=d.sc(37);d.zb(5),d.Fc("",a.isEditing?"Update":"Create"," ",a.PageTitle,""),d.zb(2),d.jc("formGroup",a.addForm),d.zb(9),d.jc("formControl",a.addForm.controls.bay_name),d.zb(6),d.jc("ngClass",d.nc(13,S,a.formErrors.bay_code)),d.zb(1),d.jc("formControl",a.addForm.controls.bay_code),d.zb(1),d.jc("ngIf",a.formErrors.bay_code),d.zb(7),d.jc("formControl",a.addForm.controls.aisle_id)("items",a.aisleListArray),d.zb(4),d.jc("ngIf",a.isEditing)("ngIfElse",t),d.zb(6),d.jc("ngClass",d.nc(15,w,a.showLoader))("disabled",a.showLoader)}},directives:[s.v,s.p,p.a,s.j,s.c,s.o,s.g,v.a,n.j,n.l,g.a,r.f],encapsulation:2}),_),j=t("FasR"),P=t("c8VH"),k=t("jTkZ"),A=t("Eb8l"),B=t("LPFR"),L=t("Pbud");function I(e,a){if(1&e){var t=d.Tb();d.Sb(0,"pagination",11),d.ac("onPageChange",(function(e){return d.uc(t),d.cc().getPage(e)})),d.Rb()}if(2&e){var i=d.cc();d.jc("paginationList",i.pagination)("currentPage",i.currentPage)}}var E,z,N=((E=function(){function e(a,t){_classCallCheck(this,e),this.paginationService=a,this.bayservice=t,this.loadform=!1,this.loadingState=!0,this.objectArray=[],this.pagination=null,this.searchText=null,this.currentPage=1,this.permissionObject=null,this.showPagination=!1,this.PageTitle="Manage Bay",this.headerData=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.loadform=!1,this.setHeaderData(),this.getObjects()}},{key:"setHeaderData",value:function(){this.headerData.push(new j.h({label:"Bay Name",key:"bay_name"}),new j.h({label:"Bay Code",key:"bay_code"}),new j.h({label:"Bar Code No",key:"bay_bar_code"}));var e=new j.a({edit:{path:"/manage/bay/edit/",id:"bay_id"},view:{path:"/manage/bay/view/",id:"bay_id"},delete:{path:"bay/",id:"bay_id"}});this.headerData.push(e)}},{key:"getObjects",value:function(){var e=this,a={page:this.currentPage};this.searchText&&(a.search=this.searchText),this.bayservice.getBayList(a).subscribe((function(a){e.loadingState=!1,a.success?(e.objectArray=a.data.list,e.showPagination=!0,e.pagination=e.paginationService.getPager(a.data.pagination.total_page,e.currentPage)):(e.objectArray=[],e.pagination=null)}),(function(a){e.loadingState=!1,e.objectArray=[],e.pagination=null}))}},{key:"getPage",value:function(e){this.currentPage=e,this.getObjects()}},{key:"searchObject",value:function(e){this.searchText=e,this.currentPage=1,this.getObjects()}},{key:"onReloadEvent",value:function(){this.getObjects()}}]),e}()).\u0275fac=function(e){return new(e||E)(d.Mb(P.a),d.Mb(h))},E.\u0275cmp=d.Gb({type:E,selectors:[["app-bay-list"]],decls:13,vars:7,consts:[[1,"side-container"],[1,"page-header"],[1,"row","m-0"],[1,"mr-auto"],[1,"ml-3"],[3,"placeholder","text"],[3,"btnName","editData"],[1,"card"],[1,"card-body"],[3,"headerData","rawData","reloadEvent"],[3,"paginationList","currentPage","onPageChange",4,"ngIf"],[3,"paginationList","currentPage","onPageChange"]],template:function(e,a){1&e&&(d.Sb(0,"div",0),d.Sb(1,"div",1),d.Sb(2,"div",2),d.Sb(3,"h2",3),d.Cc(4),d.Rb(),d.Sb(5,"div",4),d.Sb(6,"search-box",5),d.ac("text",(function(e){return a.searchObject(e)})),d.Rb(),d.Rb(),d.Sb(7,"div",4),d.Nb(8,"app-btn-add",6),d.Rb(),d.Rb(),d.Rb(),d.Sb(9,"div",7),d.Sb(10,"div",8),d.Sb(11,"app-table-list",9),d.ac("reloadEvent",(function(){return a.onReloadEvent()})),d.Rb(),d.Ac(12,I,1,2,"pagination",10),d.Rb(),d.Rb(),d.Rb()),2&e&&(d.zb(4),d.Dc(a.PageTitle),d.zb(2),d.jc("placeholder","Search Here..."),d.zb(2),d.jc("btnName","Add Bay")("editData","/manage/bay/add"),d.zb(3),d.jc("headerData",a.headerData)("rawData",a.objectArray),d.zb(1),d.jc("ngIf",a.showPagination))},directives:[k.a,A.a,B.a,n.l,L.a],encapsulation:2}),E),D=t("PCNd"),F=t("Vr6k"),M=t("QSzr"),O=((z=function(){function e(a,t){_classCallCheck(this,e),this.activatedRoute=a,this.bayservice=t,this.activatedRoute.snapshot.paramMap.get("id")&&(this.viewId=this.activatedRoute.snapshot.paramMap.get("id"))}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.bayservice.getBayById(this.viewId).subscribe((function(a){a.success&&(e.objectArray=a.data)}))}},{key:"VoucherSourcetoPrint",value:function(){var e,a,t;return"\n              <html>\n              <head>\n                <script>\n                  function step1() {\n                    setTimeout('step2()', 10);\n                  }\n                  function step2() {\n                    window.print(); window.close()\n                  }\n                <\/script>\n              </head>\n\n              <body onload='step1()'>\n                <h3>Bay Name:- ".concat(null===(e=this.objectArray)||void 0===e?void 0:e.bay_name,"</h3>\n                <h3>Bay Code:- ").concat(null===(a=this.objectArray)||void 0===a?void 0:a.bay_code,"</h3>\n                <img src='").concat(null===(t=this.objectArray)||void 0===t?void 0:t.bay_bar_code_image,"' />\n              </body>\n              </html>\n        ")}},{key:"VoucherPrint",value:function(){window.print()}}]),e}()).\u0275fac=function(e){return new(e||z)(d.Mb(r.a),d.Mb(h))},z.\u0275cmp=d.Gb({type:z,selectors:[["app-bay-view"]],decls:32,vars:4,consts:[[1,"side-container"],[1,"page-header"],[1,"row","m-0"],[1,"mr-auto"],[1,"ml-3"],[1,"btn","btn-secondary",3,"click"],[1,"card"],[1,"card-body"],["id","details","role","tabpanel","aria-labelledby","details-tab",1,"tab-pane","fade","show","active"],[1,"row","mt-4"],[1,"col-md-4"],[1,"text-muted","mb-1","font-weight-bold"],[1,"col"],["alt","",3,"src"]],template:function(e,a){1&e&&(d.Sb(0,"div",0),d.Sb(1,"div",1),d.Sb(2,"div",2),d.Sb(3,"h2",3),d.Cc(4,"Aisle Details"),d.Rb(),d.Nb(5,"div",4),d.Sb(6,"div",4),d.Sb(7,"button",5),d.ac("click",(function(){return a.VoucherPrint()})),d.Cc(8,"Print"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(9,"div",6),d.Sb(10,"div",7),d.Sb(11,"div",8),d.Sb(12,"div",9),d.Sb(13,"div",10),d.Sb(14,"label",11),d.Cc(15,"Bay Name"),d.Rb(),d.Sb(16,"div"),d.Cc(17),d.Rb(),d.Rb(),d.Sb(18,"div",10),d.Sb(19,"label",11),d.Cc(20,"Bay Code"),d.Rb(),d.Sb(21,"div"),d.Cc(22),d.Rb(),d.Rb(),d.Sb(23,"div",10),d.Sb(24,"label",11),d.Cc(25,"Bar code No"),d.Rb(),d.Sb(26,"div"),d.Cc(27),d.Rb(),d.Rb(),d.Rb(),d.Sb(28,"div",9),d.Sb(29,"div",12),d.Sb(30,"div"),d.Nb(31,"img",13),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb()),2&e&&(d.zb(17),d.Dc(null==a.objectArray?null:a.objectArray.bay_name),d.zb(5),d.Dc(null==a.objectArray?null:a.objectArray.bay_code),d.zb(5),d.Dc(null==a.objectArray?null:a.objectArray.bay_bar_code),d.zb(4),d.jc("src",null==a.objectArray?null:a.objectArray.bay_bar_code_image,d.wc))},encapsulation:2}),z);t.d(a,"BayModule",(function(){return U}));var T,x=[{path:"",component:N,data:{title:"bay_list"}},{path:"add",component:C,data:{title:"add_bay"}},{path:"edit/:id",component:C,data:{title:"edit_bay"}},{path:"view/:id",component:O,data:{title:"view_bay"}}],U=((T=function e(){_classCallCheck(this,e)}).\u0275mod=d.Kb({type:T}),T.\u0275inj=d.Jb({factory:function(e){return new(e||T)},providers:[h],imports:[[n.b,r.i.forChild(x),b.a,o.a,c.a,s.l,s.s,F.a,D.a,g.b,M.a]]}),T)}}]);