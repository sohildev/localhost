(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"6dEI":function(e,t,a){"use strict";a.r(t);var r=a("ofXK"),o=a("tyNb"),s=a("g3N6"),i=a("uq2c"),n=a("OTx7"),c=a("PCNd"),d=a("Vr6k"),h=a("3Pt+"),u=a("QSzr"),b=a("ZOsW"),l=a("FasR"),m=a("fXoL"),p=a("c8VH"),g=a("AytR"),w=a("tk/3");let S=(()=>{class e{constructor(e){this.http=e,this.API_URL=g.a.APIEndpoint}getWarehouseList(e){return this.http.get(`${this.API_URL}/warehouse`,{params:e})}addWarehouse(e){return this.http.post(`${this.API_URL}/warehouse`,e)}editWarehouse(e,t){return this.http.put(`${this.API_URL}/warehouse/${e}`,t)}getWarehouseById(e,t=null){return this.http.get(`${this.API_URL}/warehouse/${e}`,{params:t})}}return e.\u0275fac=function(t){return new(t||e)(m.Wb(w.b))},e.\u0275prov=m.Ib({token:e,factory:e.\u0275fac}),e})();var f=a("jTkZ"),v=a("Eb8l"),R=a("LPFR"),y=a("Pbud");function _(e,t){if(1&e){const e=m.Tb();m.Sb(0,"pagination",11),m.ac("onPageChange",(function(t){return m.tc(e),m.cc().getPage(t)})),m.Rb()}if(2&e){const e=m.cc();m.ic("paginationList",e.pagination)("currentPage",e.currentPage)}}let P=(()=>{class e{constructor(e,t){this.paginationService=e,this.warehouseService=t,this.PageTitle="Manage Warehouse",this.loadform=!1,this.loadingState=!0,this.objectArray=[],this.pagination=null,this.searchText=null,this.currentPage=1,this.permissionObject=null,this.showPagination=!1,this.headerData=[]}ngOnInit(){this.loadform=!1,this.setHeaderData(),this.getObjects()}setHeaderData(){this.headerData.push(new l.f({label:"Warehouse Name",key:"warehouse_name"}),new l.f({label:"Warehouse Code",key:"warehouse_code"}),new l.f({label:"Address",key:"address.country_name"}));let e=new l.a({edit:{path:"/manage/warehouse/edit/",id:"warehouse_id"},delete:{path:"warehouse/",id:"warehouse_id"}});this.headerData.push(e)}getObjects(){const e={page:this.currentPage};this.searchText&&(e.search=this.searchText),this.warehouseService.getWarehouseList(e).subscribe(e=>{this.loadingState=!1,e.success?(this.objectArray=e.data.list,this.showPagination=!0,this.pagination=this.paginationService.getPager(e.data.pagination.total_page,this.currentPage)):(this.objectArray=[],this.pagination=null)},e=>{this.loadingState=!1,this.objectArray=[],this.pagination=null})}getPage(e){this.currentPage=e,this.getObjects()}searchObject(e){this.searchText=e,this.currentPage=1,this.getObjects()}onReloadEvent(){this.getObjects()}}return e.\u0275fac=function(t){return new(t||e)(m.Mb(p.a),m.Mb(S))},e.\u0275cmp=m.Gb({type:e,selectors:[["app-warehouse-list"]],decls:13,vars:7,consts:[[1,"side-container"],[1,"page-header"],[1,"row","m-0"],[1,"mr-auto"],[1,"ml-3"],[3,"placeholder","text"],[3,"btnName","editData"],[1,"card"],[1,"card-body"],[3,"headerData","rawData","reloadEvent"],[3,"paginationList","currentPage","onPageChange",4,"ngIf"],[3,"paginationList","currentPage","onPageChange"]],template:function(e,t){1&e&&(m.Sb(0,"div",0),m.Sb(1,"div",1),m.Sb(2,"div",2),m.Sb(3,"h2",3),m.Bc(4),m.Rb(),m.Sb(5,"div",4),m.Sb(6,"search-box",5),m.ac("text",(function(e){return t.searchObject(e)})),m.Rb(),m.Rb(),m.Sb(7,"div",4),m.Nb(8,"app-btn-add",6),m.Rb(),m.Rb(),m.Rb(),m.Sb(9,"div",7),m.Sb(10,"div",8),m.Sb(11,"app-table-list",9),m.ac("reloadEvent",(function(){return t.onReloadEvent()})),m.Rb(),m.zc(12,_,1,2,"pagination",10),m.Rb(),m.Rb(),m.Rb()),2&e&&(m.zb(4),m.Cc(t.PageTitle),m.zb(2),m.ic("placeholder","Search Here..."),m.zb(2),m.ic("btnName","Add Warehouse")("editData","/manage/warehouse/add"),m.zb(3),m.ic("headerData",t.headerData)("rawData",t.objectArray),m.zb(1),m.ic("ngIf",t.showPagination))},directives:[f.a,v.a,R.a,r.l,y.a],encapsulation:2}),e})();var C=a("8cFx"),L=a("HOh6"),E=a("UaFz");function B(e,t){if(1&e&&m.Nb(0,"span",22),2&e){const e=m.cc();m.ic("innerHTML",e.formErrors.warehouse_code,m.uc)}}const z=function(e){return{"has-error":e}};let I=(()=>{class e{constructor(e,t,a,r,o){this.router=e,this.activatedRoute=t,this.fb=a,this.warehouseService=r,this.commonService=o,this.PageTitle="Warehouse",this.addNewRadio=!1,this.loadingState=!1,this.showLoader=!1,this.formErrors={warehouse_code:null,apierror:null},this.isEditing=!1,this.editId=null,this.countryListArray=[],this.activatedRoute.snapshot.paramMap.get("id")&&(this.isEditing=!0,this.editId=this.activatedRoute.snapshot.paramMap.get("id")),this.addForm=this.fb.group({warehouse_name:[null,h.t.compose([h.t.required])],warehouse_code:[null,h.t.compose([h.t.required])],address:[null],description:[null],country_name:[null],country_id:[null,h.t.compose([h.t.required])],state:[null,h.t.compose([h.t.required])],city:[null,h.t.compose([h.t.required])],street_address:[null,h.t.compose([h.t.required])]})}ngOnInit(){this.getCountryList(),this.isEditing&&this.getEditObject()}getCountryList(){this.commonService.getCountryList().subscribe(e=>{e.success&&(this.countryListArray=e.data.country_list)})}getCountryName(e){this.addForm.patchValue({country_name:e.label})}getEditObject(){this.warehouseService.getWarehouseById(this.editId).subscribe(e=>{e.success?this.addForm.patchValue({warehouse_name:e.data.warehouse_name,warehouse_code:e.data.warehouse_code,description:e.data.description,country_id:e.data.address.country_id,country_name:e.data.address.country_name,state:e.data.address.state,city:e.data.address.city,street_address:e.data.address.street_address?e.data.address.street_address:""}):this.router.navigateByUrl("/manage/warehouse")})}submitForm(e){if(e.valid){this.showLoader=!0;const t=new FormData;t.append("warehouse_name",e.value.warehouse_name),t.append("warehouse_code",e.value.warehouse_code),t.append("description",e.value.description),t.append("address",JSON.stringify({country_id:e.value.country_id,country_name:e.value.country_name,state:e.value.state,city:e.value.city,street_address:e.value.street_address})),this.isEditing?this.warehouseService.editWarehouse(this.editId,t).subscribe(e=>{this.showLoader=!1,e.success?this.router.navigateByUrl("/manage/warehouse"):e.error.map(t=>{t.hasOwnProperty("warehouse_code")?this.formErrors.warehouse_code=t.warehouse_code:this.formErrors.apierror=`* ${e.error}`})},e=>{this.showLoader=!1}):this.warehouseService.addWarehouse(t).subscribe(e=>{this.showLoader=!1,e.success?this.router.navigateByUrl("/manage/warehouse"):e.error.map(t=>{t.hasOwnProperty("warehouse_code")?this.formErrors.warehouse_code=t.warehouse_code:this.formErrors.apierror=`* ${e.error}`})},e=>{this.showLoader=!1})}}}return e.\u0275fac=function(t){return new(t||e)(m.Mb(o.e),m.Mb(o.a),m.Mb(h.e),m.Mb(S),m.Mb(C.a))},e.\u0275cmp=m.Gb({type:e,selectors:[["app-add-warehouse"]],decls:63,vars:15,consts:[[1,"side-container"],[1,"page-header"],[1,"row"],[1,"col"],[1,"mr-auto"],[1,"card"],["role","form",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"card-body"],[1,"form-group","row","align-items-center"],[1,"control-label","text-md-right","col-md-4","col-lg-3","mb-0"],[1,"col-md-5"],["type","text","placeholder","",1,"form-control",3,"formControl"],["bindLabel","label","bindValue","value","placeholder","Select Country",3,"formControl","items","change"],["placeholder","",1,"form-control",3,"formControl"],[1,"col-md-5",3,"ngClass"],["class","help-block",3,"innerHTML",4,"ngIf"],[1,"form-group","row"],[1,"control-label","text-md-right","col-md-4","col-lg-3"],["rows","2",1,"form-control",3,"formControl"],[1,"text-right","border-top","py-4","mt-5","card-footer"],["type","button","routerLink","/manage/warehouse",1,"btn","btn-light"],["type","submit",1,"btn","btn-secondary","ml-2"],[1,"help-block",3,"innerHTML"]],template:function(e,t){1&e&&(m.Sb(0,"div",0),m.Sb(1,"div",1),m.Sb(2,"div",2),m.Sb(3,"div",3),m.Sb(4,"h2",4),m.Bc(5),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(6,"div",5),m.Sb(7,"form",6),m.ac("ngSubmit",(function(){return t.submitForm(t.addForm)})),m.Sb(8,"div",7),m.Sb(9,"div"),m.Sb(10,"div",8),m.Sb(11,"label",9),m.Bc(12,"Warehouse Name "),m.Sb(13,"em"),m.Bc(14,"*"),m.Rb(),m.Rb(),m.Sb(15,"div",10),m.Nb(16,"input",11),m.Rb(),m.Rb(),m.Sb(17,"div",8),m.Sb(18,"label",9),m.Bc(19,"Country "),m.Sb(20,"em"),m.Bc(21,"*"),m.Rb(),m.Rb(),m.Sb(22,"div",10),m.Sb(23,"ng-select",12),m.ac("change",(function(e){return t.getCountryName(e)})),m.Rb(),m.Rb(),m.Rb(),m.Sb(24,"div",8),m.Sb(25,"label",9),m.Bc(26,"State "),m.Sb(27,"em"),m.Bc(28,"*"),m.Rb(),m.Rb(),m.Sb(29,"div",10),m.Nb(30,"input",11),m.Rb(),m.Rb(),m.Sb(31,"div",8),m.Sb(32,"label",9),m.Bc(33,"City "),m.Sb(34,"em"),m.Bc(35,"*"),m.Rb(),m.Rb(),m.Sb(36,"div",10),m.Nb(37,"input",11),m.Rb(),m.Rb(),m.Sb(38,"div",8),m.Sb(39,"label",9),m.Bc(40,"Street Address "),m.Sb(41,"em"),m.Bc(42,"*"),m.Rb(),m.Rb(),m.Sb(43,"div",10),m.Nb(44,"input",13),m.Rb(),m.Rb(),m.Sb(45,"div",8),m.Sb(46,"label",9),m.Bc(47,"Warehouse Code "),m.Sb(48,"em"),m.Bc(49,"*"),m.Rb(),m.Rb(),m.Sb(50,"div",14),m.Nb(51,"input",11),m.Rb(),m.zc(52,B,1,1,"span",15),m.Rb(),m.Sb(53,"div",16),m.Sb(54,"label",17),m.Bc(55,"Description"),m.Rb(),m.Sb(56,"div",10),m.Nb(57,"textarea",18),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(58,"div",19),m.Sb(59,"button",20),m.Bc(60,"Cancel"),m.Rb(),m.Sb(61,"button",21),m.Bc(62,"Submit"),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb()),2&e&&(m.zb(5),m.Ec("",t.isEditing?"Update":"Create"," ",t.PageTitle,""),m.zb(2),m.ic("formGroup",t.addForm),m.zb(9),m.ic("formControl",t.addForm.controls.warehouse_name),m.zb(7),m.ic("formControl",t.addForm.controls.country_id)("items",t.countryListArray),m.zb(7),m.ic("formControl",t.addForm.controls.state),m.zb(7),m.ic("formControl",t.addForm.controls.city),m.zb(7),m.ic("formControl",t.addForm.controls.street_address),m.zb(6),m.ic("ngClass",m.mc(13,z,t.formErrors.warehouse_code)),m.zb(1),m.ic("formControl",t.addForm.controls.warehouse_code),m.zb(1),m.ic("ngIf",t.formErrors.warehouse_code),m.zb(5),m.ic("formControl",t.addForm.controls.description))},directives:[h.v,h.p,L.a,h.j,h.c,h.o,h.g,E.a,b.a,r.j,r.l,o.f],encapsulation:2}),e})();a.d(t,"WarehouseModule",(function(){return F}));const j=[{path:"",component:P,data:{title:"warehouse_list"}},{path:"add",component:I,data:{title:"add_warehouse"}},{path:"edit/:id",component:I,data:{title:"edit_warehouse"}}];let F=(()=>{class e{}return e.\u0275mod=m.Kb({type:e}),e.\u0275inj=m.Jb({factory:function(t){return new(t||e)},providers:[S],imports:[[r.b,o.i.forChild(j),n.a,s.a,i.a,h.l,h.s,d.a,u.a,c.a,b.b]]}),e})()}}]);