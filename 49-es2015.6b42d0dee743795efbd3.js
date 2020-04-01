(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"/rvd":function(t,e,i){"use strict";i.r(e);var a=i("ofXK"),r=i("tyNb"),s=i("g3N6"),n=i("uq2c"),o=i("OTx7"),d=i("PCNd"),c=i("Vr6k"),b=i("3Pt+"),l=i("QSzr"),p=i("FasR"),h=i("fXoL"),u=i("c8VH"),g=i("AytR"),m=i("tk/3");let S=(()=>{class t{constructor(t){this.http=t,this.API_URL=g.a.APIEndpoint}getShippingAddressList(t){return this.http.get(`${this.API_URL}/shipping-address`,{params:t})}addShippingAddress(t){return this.http.post(`${this.API_URL}/shipping-address`,t)}editShippingAddress(t,e){return this.http.put(`${this.API_URL}/shipping-address/${t}`,e)}getShippingAddressById(t,e=null){return this.http.get(`${this.API_URL}/shipping-address/${t}`,{params:e})}getMasterData(){return this.http.get(`${this.API_URL}/shipping-address/master-data`)}}return t.\u0275fac=function(e){return new(e||t)(h.Wb(m.b))},t.\u0275prov=h.Ib({token:t,factory:t.\u0275fac}),t})();var f=i("jTkZ"),v=i("Eb8l"),y=i("LPFR"),R=i("Pbud");function _(t,e){if(1&t){const t=h.Tb();h.Sb(0,"pagination",11),h.ac("onPageChange",(function(e){return h.tc(t),h.cc().getPage(e)})),h.Rb()}if(2&t){const t=h.cc();h.ic("paginationList",t.pagination)("currentPage",t.currentPage)}}let C=(()=>{class t{constructor(t,e){this.paginationService=t,this.shippingaddressService=e,this.PageTitle="Manage Shipping Address",this.loadform=!1,this.loadingState=!0,this.objectArray=[],this.pagination=null,this.searchText=null,this.currentPage=1,this.permissionObject=null,this.showPagination=!1,this.headerData=[]}ngOnInit(){this.loadform=!1,this.setHeaderData(),this.getObjects()}setHeaderData(){this.headerData.push(new p.f({label:"Client",key:"client.label"}),new p.f({label:"City",key:"city"}),new p.f({label:"State",key:"state"}),new p.f({label:"Pincode",key:"pin_code"}),new p.f({label:"Country",key:"country_name"}),new p.f({label:"Is Default",key:"is_default"}));let t=new p.a({edit:{path:"/manage/shipping-address/edit/",id:"shipping_address_id"},delete:{path:"shipping-address/",id:"shipping_address_id"}});this.headerData.push(t)}getObjects(){const t={page:this.currentPage};this.searchText&&(t.search=this.searchText),this.shippingaddressService.getShippingAddressList(t).subscribe(t=>{this.loadingState=!1,t.success?(this.objectArray=t.data.list,this.showPagination=!0,this.pagination=this.paginationService.getPager(t.data.pagination.total_page,this.currentPage)):(this.objectArray=[],this.pagination=null)},t=>{this.loadingState=!1,this.objectArray=[],this.pagination=null})}getPage(t){this.currentPage=t,this.getObjects()}searchObject(t){this.searchText=t,this.currentPage=1,this.getObjects()}onReloadEvent(){this.getObjects()}}return t.\u0275fac=function(e){return new(e||t)(h.Mb(u.a),h.Mb(S))},t.\u0275cmp=h.Gb({type:t,selectors:[["app-shipping-address-list"]],decls:13,vars:7,consts:[[1,"side-container"],[1,"page-header"],[1,"row","m-0"],[1,"mr-auto"],[1,"ml-3"],[3,"placeholder","text"],[3,"btnName","editData"],[1,"card"],[1,"card-body"],[3,"headerData","rawData","reloadEvent"],[3,"paginationList","currentPage","onPageChange",4,"ngIf"],[3,"paginationList","currentPage","onPageChange"]],template:function(t,e){1&t&&(h.Sb(0,"div",0),h.Sb(1,"div",1),h.Sb(2,"div",2),h.Sb(3,"h2",3),h.Bc(4),h.Rb(),h.Sb(5,"div",4),h.Sb(6,"search-box",5),h.ac("text",(function(t){return e.searchObject(t)})),h.Rb(),h.Rb(),h.Sb(7,"div",4),h.Nb(8,"app-btn-add",6),h.Rb(),h.Rb(),h.Rb(),h.Sb(9,"div",7),h.Sb(10,"div",8),h.Sb(11,"app-table-list",9),h.ac("reloadEvent",(function(){return e.onReloadEvent()})),h.Rb(),h.zc(12,_,1,2,"pagination",10),h.Rb(),h.Rb(),h.Rb()),2&t&&(h.zb(4),h.Cc(e.PageTitle),h.zb(2),h.ic("placeholder","Search Here..."),h.zb(2),h.ic("btnName","Add Shipping Address")("editData","/manage/shipping-address/add"),h.zb(3),h.ic("headerData",e.headerData)("rawData",e.objectArray),h.zb(1),h.ic("ngIf",e.showPagination))},directives:[f.a,v.a,y.a,a.l,R.a],encapsulation:2}),t})();var w=i("8cFx"),P=i("HOh6"),L=i("ZOsW"),A=i("UaFz"),k=i("/SVk");function B(t,e){if(1&t&&h.Nb(0,"span",25),2&t){const t=h.cc();h.ic("innerHTML",t.formErrors.state,h.uc)}}const z=function(t){return{"has-error":t}},E=function(t){return{"qt-loader qt-loader-mini qt-loader-left":t}};let I=(()=>{class t{constructor(t,e,i,a,r){this.router=t,this.activatedRoute=e,this.fb=i,this.shippingaddressService=a,this.commonservice=r,this.PageTitle="Shipping Address",this.loadingState=!1,this.showLoader=!1,this.formErrors={state:null,apierror:null},this.isEditing=!1,this.editId=null,this.countryListArray=[],this.clientListArray=[],this.activatedRoute.snapshot.paramMap.get("id")&&(this.isEditing=!0,this.editId=this.activatedRoute.snapshot.paramMap.get("id")),this.addForm=this.fb.group({city:[null,b.t.compose([b.t.required])],state:[null,b.t.compose([b.t.required])],street_address:[null],country_name:[""],country_id:[null,b.t.compose([b.t.required])],pin_code:[null,b.t.compose([b.t.required])],is_default:[!1,b.t.compose([b.t.required])],client_id:[null,b.t.compose([b.t.required])]})}ngOnInit(){this.getCountryList(),this.getMasterData(),this.isEditing&&this.getEditObject()}getCountryList(){this.commonservice.getCountryList().subscribe(t=>{t.success&&(this.countryListArray=t.data.country_list)})}getMasterData(){this.shippingaddressService.getMasterData().subscribe(t=>{t.success&&(this.clientListArray=t.data.client)})}getEditObject(){this.shippingaddressService.getShippingAddressById(this.editId).subscribe(t=>{t.success?this.addForm.patchValue(t.data):this.router.navigateByUrl("/manage/shipping-address")})}getCountryName(t){this.addForm.patchValue({country_name:t.label})}submitForm(t){if(t.valid){this.showLoader=!0;const e=new FormData;e.append("client_id",t.value.client_id),e.append("city",t.value.city),e.append("state",t.value.state),e.append("country_name",t.value.country_name),e.append("country_id",t.value.country_id),e.append("pin_code",t.value.pin_code),e.append("street_address",t.value.street_address),e.append("is_default",t.value.is_default),e.append("order_type_code",t.value.order_type_code),this.isEditing?this.shippingaddressService.editShippingAddress(this.editId,e).subscribe(t=>{this.showLoader=!1,t.success?this.router.navigateByUrl("/manage/shipping-address"):t.error.map(e=>{e.hasOwnProperty("state")?this.formErrors.state=e.state:this.formErrors.apierror=`* ${t.error}`})},t=>{this.showLoader=!1}):this.shippingaddressService.addShippingAddress(e).subscribe(t=>{this.showLoader=!1,t.success?this.router.navigateByUrl("/manage/shipping-address"):t.error.map(e=>{e.hasOwnProperty("state")?this.formErrors.state=e.state:this.formErrors.apierror=`* ${t.error}`})},t=>{this.showLoader=!1})}}}return t.\u0275fac=function(e){return new(e||t)(h.Mb(r.e),h.Mb(r.a),h.Mb(b.e),h.Mb(S),h.Mb(w.a))},t.\u0275cmp=h.Gb({type:t,selectors:[["app-shipping-address-add"]],decls:68,vars:20,consts:[[1,"side-container"],[1,"page-header"],[1,"row"],[1,"col"],[1,"mr-auto"],[1,"card"],["role","form",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"card-body"],[1,"form-group","row","align-items-center"],[1,"control-label","text-md-right","col-md-4","col-lg-3","mb-0"],[1,"col-md-5"],["bindLabel","label","bindValue","value","placeholder","Select Client",3,"formControl","items"],["bindLabel","label","bindValue","value","placeholder","Select Country",3,"formControl","items","change"],[1,"col-md-5",3,"ngClass"],["type","text","placeholder","",1,"form-control",3,"formControl"],["class","help-block",3,"innerHTML",4,"ngIf"],["number","","type","text","placeholder","",1,"form-control",3,"formControl"],[1,"form-check","form-check-inline","mr-0"],[1,"checkbox-container","mt-2"],["type","checkbox","value","all",1,"form-check-input",3,"formControl"],[1,"checkmark"],["rows","2",1,"form-control",3,"formControl"],[1,"text-right","border-top","pt-4","mt-5","card-footer"],["type","button","routerLink","/manage/shipping-address",1,"btn","btn-light"],["type","submit",1,"btn","btn-secondary","ml-2",3,"ngClass","disabled"],[1,"help-block",3,"innerHTML"]],template:function(t,e){1&t&&(h.Sb(0,"div",0),h.Sb(1,"div",1),h.Sb(2,"div",2),h.Sb(3,"div",3),h.Sb(4,"h2",4),h.Bc(5),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Sb(6,"div",5),h.Sb(7,"form",6),h.ac("ngSubmit",(function(){return e.submitForm(e.addForm)})),h.Sb(8,"div",7),h.Sb(9,"div"),h.Sb(10,"div",8),h.Sb(11,"label",9),h.Bc(12," Client "),h.Sb(13,"em"),h.Bc(14,"*"),h.Rb(),h.Rb(),h.Sb(15,"div",10),h.Nb(16,"ng-select",11),h.Rb(),h.Rb(),h.Sb(17,"div",8),h.Sb(18,"label",9),h.Bc(19," Country "),h.Sb(20,"em"),h.Bc(21,"*"),h.Rb(),h.Rb(),h.Sb(22,"div",10),h.Sb(23,"ng-select",12),h.ac("change",(function(t){return e.getCountryName(t)})),h.Rb(),h.Rb(),h.Rb(),h.Sb(24,"div",8),h.Sb(25,"label",9),h.Bc(26,"State "),h.Sb(27,"em"),h.Bc(28,"*"),h.Rb(),h.Rb(),h.Sb(29,"div",13),h.Nb(30,"input",14),h.zc(31,B,1,1,"span",15),h.Rb(),h.Rb(),h.Sb(32,"div",8),h.Sb(33,"label",9),h.Bc(34," Pincode "),h.Sb(35,"em"),h.Bc(36,"*"),h.Rb(),h.Rb(),h.Sb(37,"div",10),h.Nb(38,"input",16),h.Rb(),h.Rb(),h.Sb(39,"div",8),h.Sb(40,"label",9),h.Bc(41," City "),h.Sb(42,"em"),h.Bc(43,"*"),h.Rb(),h.Rb(),h.Sb(44,"div",10),h.Nb(45,"input",14),h.Rb(),h.Rb(),h.Sb(46,"div",8),h.Sb(47,"label",9),h.Bc(48," is Default "),h.Sb(49,"em"),h.Bc(50,"*"),h.Rb(),h.Rb(),h.Sb(51,"div",10),h.Sb(52,"div",17),h.Sb(53,"div",18),h.Nb(54,"input",19),h.Nb(55,"span",20),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Sb(56,"div",8),h.Sb(57,"label",9),h.Bc(58," Address "),h.Sb(59,"em"),h.Bc(60,"*"),h.Rb(),h.Rb(),h.Sb(61,"div",10),h.Nb(62,"textarea",21),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Sb(63,"div",22),h.Sb(64,"button",23),h.Bc(65,"Cancel"),h.Rb(),h.Sb(66,"button",24),h.Bc(67,"Submit"),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Rb()),2&t&&(h.zb(5),h.Ec("",e.isEditing?"Update":"Create"," ",e.PageTitle,""),h.zb(2),h.ic("formGroup",e.addForm),h.zb(9),h.ic("formControl",e.addForm.controls.client_id)("items",e.clientListArray),h.zb(7),h.ic("formControl",e.addForm.controls.country_id)("items",e.countryListArray),h.zb(6),h.ic("ngClass",h.mc(16,z,e.formErrors.state)),h.zb(1),h.ic("formControl",e.addForm.controls.state),h.zb(1),h.ic("ngIf",e.formErrors.state),h.zb(7),h.ic("formControl",e.addForm.controls.pin_code),h.zb(7),h.ic("formControl",e.addForm.controls.city),h.zb(9),h.ic("formControl",e.addForm.controls.is_default),h.zb(8),h.ic("formControl",e.addForm.controls.street_address),h.zb(4),h.ic("ngClass",h.mc(18,E,e.showLoader))("disabled",e.showLoader))},directives:[b.v,b.p,P.a,b.j,L.a,b.o,b.g,A.a,a.j,b.c,a.l,k.a,b.a,r.f],encapsulation:2}),t})();i.d(e,"ShippingAddressModule",(function(){return D}));const j=[{path:"",component:C,data:{title:"shipping_address_list"}},{path:"add",component:I,data:{title:"add_shipping_address"}},{path:"edit/:id",component:I,data:{title:"edit_shipping_address"}}];let D=(()=>{class t{}return t.\u0275mod=h.Kb({type:t}),t.\u0275inj=h.Jb({factory:function(e){return new(e||t)},providers:[S],imports:[[a.b,r.i.forChild(j),o.a,s.a,n.a,b.l,b.s,c.a,l.a,d.a,L.b]]}),t})()}}]);