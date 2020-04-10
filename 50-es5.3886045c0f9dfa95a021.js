function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{j9E3:function(e,t,i){"use strict";i.r(t);var r,a=i("ofXK"),n=i("tyNb"),o=i("g3N6"),s=i("uq2c"),l=i("OTx7"),c=i("ZOsW"),d=i("PCNd"),u=i("Vr6k"),p=i("3Pt+"),b=i("KUiO"),h=i("FasR"),m=i("fXoL"),f=i("c8VH"),g=i("AytR"),v=i("tk/3"),S=((r=function(){function e(t){_classCallCheck(this,e),this.http=t,this.API_URL=g.a.APIEndpoint}return _createClass(e,[{key:"getSuppliersList",value:function(e){return this.http.get("".concat(this.API_URL,"/supplier"),{params:e})}},{key:"addSuppliers",value:function(e){return this.http.post("".concat(this.API_URL,"/supplier"),e)}},{key:"editSuppliers",value:function(e,t){return this.http.put("".concat(this.API_URL,"/supplier/").concat(e),t)}},{key:"getSuppliersById",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.http.get("".concat(this.API_URL,"/supplier/").concat(e),{params:t})}},{key:"getSuppliersMasterData",value:function(){return this.http.get("".concat(this.API_URL,"/supplier/master-data"))}}]),e}()).\u0275fac=function(e){return new(e||r)(m.Wb(v.b))},r.\u0275prov=m.Ib({token:r,factory:r.\u0275fac}),r),y=i("jTkZ"),R=i("Eb8l"),_=i("LPFR"),C=i("Pbud");function w(e,t){if(1&e){var i=m.Tb();m.Sb(0,"pagination",11),m.ac("onPageChange",(function(e){return m.uc(i),m.cc().getPage(e)})),m.Rb()}if(2&e){var r=m.cc();m.jc("paginationList",r.pagination)("currentPage",r.currentPage)}}var j,k=((j=function(){function e(t,i){_classCallCheck(this,e),this.paginationService=t,this.supplierService=i,this.PageTitle="Manage Suppliers",this.loadform=!1,this.loadingState=!0,this.objectArray=[],this.pagination=null,this.searchText=null,this.currentPage=1,this.permissionObject=null,this.headerData=[],this.showPagination=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.loadform=!1,this.setHeaderData(),this.getObjects()}},{key:"setHeaderData",value:function(){this.headerData.push(new h.h({label:"Supplier Name",key:"supplier_name"}),new h.h({label:"Supplier Code",key:"supplier_code"}),new h.h({label:"Email",key:"email"}),new h.h({label:"Phone Number",key:"phone_number"}),new h.h({label:"Address\t",key:"address.country_name"}));var e=new h.a({edit:{path:"/manage/suppliers/edit/",id:"supplier_id"},delete:{path:"supplier/",id:"supplier_id"}});this.headerData.push(e)}},{key:"getObjects",value:function(){var e=this,t={page:this.currentPage};this.searchText&&(t.search=this.searchText),this.supplierService.getSuppliersList(t).subscribe((function(t){e.loadingState=!1,t.success?(e.objectArray=t.data.list,e.showPagination=!0,e.pagination=e.paginationService.getPager(t.data.pagination.total_page,e.currentPage)):(e.objectArray=[],e.pagination=null)}),(function(t){e.loadingState=!1,e.objectArray=[],e.pagination=null}))}},{key:"getPage",value:function(e){this.currentPage=e,this.getObjects()}},{key:"searchObject",value:function(e){this.searchText=e,this.currentPage=1,this.getObjects()}},{key:"onReloadEvent",value:function(){this.getObjects()}}]),e}()).\u0275fac=function(e){return new(e||j)(m.Mb(f.a),m.Mb(S))},j.\u0275cmp=m.Gb({type:j,selectors:[["app-suppliers-list"]],decls:13,vars:7,consts:[[1,"side-container"],[1,"page-header"],[1,"row","m-0"],[1,"mr-auto"],[1,"ml-3"],[3,"placeholder","text"],[3,"btnName","editData"],[1,"card"],[1,"card-body"],[3,"headerData","rawData","reloadEvent"],[3,"paginationList","currentPage","onPageChange",4,"ngIf"],[3,"paginationList","currentPage","onPageChange"]],template:function(e,t){1&e&&(m.Sb(0,"div",0),m.Sb(1,"div",1),m.Sb(2,"div",2),m.Sb(3,"h2",3),m.Cc(4),m.Rb(),m.Sb(5,"div",4),m.Sb(6,"search-box",5),m.ac("text",(function(e){return t.searchObject(e)})),m.Rb(),m.Rb(),m.Sb(7,"div",4),m.Nb(8,"app-btn-add",6),m.Rb(),m.Rb(),m.Rb(),m.Sb(9,"div",7),m.Sb(10,"div",8),m.Sb(11,"app-table-list",9),m.ac("reloadEvent",(function(){return t.onReloadEvent()})),m.Rb(),m.Ac(12,w,1,2,"pagination",10),m.Rb(),m.Rb(),m.Rb()),2&e&&(m.zb(4),m.Dc(t.PageTitle),m.zb(2),m.jc("placeholder","Search Here..."),m.zb(2),m.jc("btnName","Add Supplier")("editData","/manage/suppliers/add"),m.zb(3),m.jc("headerData",t.headerData)("rawData",t.objectArray),m.zb(1),m.jc("ngIf",t.showPagination))},directives:[y.a,R.a,_.a,a.l,C.a],encapsulation:2}),j),P=i("8cFx"),F=i("HOh6"),L=i("UaFz"),E=i("/SVk");function x(e,t){if(1&e&&m.Nb(0,"span",37),2&e){var i=m.cc();m.jc("innerHTML",i.formErrors.supplier_code,m.vc)}}var N,I=function(e){return{"has-error":e}},z=((N=function(){function e(t,i,r,a,n){_classCallCheck(this,e),this.router=t,this.activatedRoute=i,this.fb=r,this.supplierService=a,this.commonService=n,this.PageTitle="Suppliers",this.editImageUrl=null,this.addNewRadio=!1,this.categoryListArray=[],this.brandListArray=[],this.loadingState=!1,this.showLoader=!1,this.formErrors={supplier_code:null,apierror:null},this.isEditing=!1,this.editId=null,this.countryListArray=[],this.activatedRoute.snapshot.paramMap.get("id")&&(this.isEditing=!0,this.editId=this.activatedRoute.snapshot.paramMap.get("id")),this.addForm=this.fb.group({supplier_name:[null,p.t.compose([p.t.required])],supplier_code:[null,p.t.compose([p.t.required])],phone_number:[null,p.t.compose([p.t.required])],dial_code:[null,p.t.compose([p.t.required])],email:[null,p.t.compose([p.t.required,p.t.email])],address:[null],country_name:[null],country_id:[null,p.t.compose([p.t.required])],state:[null,p.t.compose([p.t.required])],city:[null,p.t.compose([p.t.required])],street_address:[null,p.t.compose([p.t.required])]})}return _createClass(e,[{key:"ngOnInit",value:function(){this.getCountryList(),this.isEditing&&this.getEditObject()}},{key:"getCountryList",value:function(){var e=this;this.commonService.getCountryList().subscribe((function(t){t.success&&(e.countryListArray=t.data.country_list)}))}},{key:"getCountryName",value:function(e){this.addForm.patchValue({country_name:e.label})}},{key:"getEditObject",value:function(){var e=this;this.supplierService.getSuppliersById(this.editId).subscribe((function(t){t.success?(e.editImageUrl=t.data.image,e.addForm.patchValue({supplier_name:t.data.supplier_name,category_id:t.data.category_id,dial_code:t.data.dial_code,supplier_code:t.data.supplier_code,phone_number:t.data.phone_number,email:t.data.email,country_id:t.data.address.country_id,country_name:t.data.address.country_name,state:t.data.address.state,city:t.data.address.city,street_address:t.data.address.street_address?t.data.address.street_address:""})):e.router.navigateByUrl("/manage/suppliers")}))}},{key:"fileChangeEvent",value:function(e){if(!e.target.files[0].name.match(/(.*?)\.(jpg|jpeg|png|gif|giff)$/))return swal.fire("Invalid File!","Please select valid file ","error"),this.removeFile(),!1;this.removeFile(),this.selectedFile=e.target.files[0]}},{key:"removeFile",value:function(){this.selectedFile=null}},{key:"submitForm",value:function(e){var t=this;if(e.valid){this.showLoader=!0;var i=new FormData;i.append("supplier_name",e.value.supplier_name),i.append("supplier_code",e.value.supplier_code),i.append("phone_number",e.value.phone_number),i.append("dial_code",e.value.dial_code),i.append("email",e.value.email),i.append("address",JSON.stringify({country_id:e.value.country_id,country_name:e.value.country_name,state:e.value.state,city:e.value.city,street_address:e.value.street_address})),this.selectedFile&&i.append("file",this.selectedFile),this.isEditing?this.supplierService.editSuppliers(this.editId,i).subscribe((function(e){t.showLoader=!1,e.success?t.router.navigateByUrl("/manage/suppliers"):e.error.map((function(i){i.hasOwnProperty("supplier_code")?t.formErrors.supplier_code=i.supplier_code:t.formErrors.apierror="* ".concat(e.error)}))}),(function(e){t.showLoader=!1})):this.supplierService.addSuppliers(i).subscribe((function(e){t.showLoader=!1,e.success?t.router.navigateByUrl("/manage/suppliers"):e.error.map((function(i){i.hasOwnProperty("supplier_code")?t.formErrors.supplier_code=i.supplier_code:t.formErrors.apierror="* ".concat(e.error)}))}),(function(e){t.showLoader=!1}))}}}]),e}()).\u0275fac=function(e){return new(e||N)(m.Mb(n.e),m.Mb(n.a),m.Mb(p.e),m.Mb(S),m.Mb(P.a))},N.\u0275cmp=m.Gb({type:N,selectors:[["app-add-suppliers"]],decls:101,vars:18,consts:[[1,"side-container"],[1,"page-header"],[1,"row","m-0"],[1,"col"],[1,"mr-auto"],[1,"card"],["role","form",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"card-body"],[1,"row"],[1,"col-4"],[1,"clearfix"],["data-provides","fileinput",1,"fileinput","text-center","fileinput-new"],[1,"btn-file","mt-3"],[1,"thumbnail","fileinput-new","uploaded-user-image","rounded-circle",2,"width","150px","height","150px"],["alt","",3,"src"],[1,"fileinput-new","btn","btn-dark","btn-sm","btn-file","mt-3"],["accept","image/x-png,image/jpeg","type","file","file-model","myFile",3,"change"],[1,"fileinput-preview","fileinput-exists","thumbnail","uploaded-user-image","rounded-circle",2,"width","150px","height","150px"],[1,"text-center"],["data-dismiss","fileinput",1,"btn","btn-link","btn-sm","fileinput-exists","mt-3",3,"click"],[1,"clearfix","mt-3"],[1,"upload-img-label","text-muted","font-size-12"],[1,"col-8"],[1,"col-6"],[1,"form-group"],[1,"control-label","text-md-right"],[1,""],["type","text","placeholder","",1,"form-control",3,"formControl"],[1,"",3,"ngClass"],["class","help-block",3,"innerHTML",4,"ngIf"],["bindLabel","label","bindValue","value","placeholder","Select Country",3,"formControl","items","change"],[1,"d-flex"],["number","","type","text","placeholder","Enter dial number",1,"form-control","mr-2",2,"width","100px",3,"formControl"],["number","","type","text","placeholder","Enter phone number",1,"form-control",3,"formControl"],[1,"text-right","border-top","py-4","mt-5","card-footer"],["type","button","routerLink","/manage/suppliers",1,"btn","btn-light"],["type","submit",1,"btn","btn-secondary","ml-2"],[1,"help-block",3,"innerHTML"]],template:function(e,t){1&e&&(m.Sb(0,"div",0),m.Sb(1,"div",1),m.Sb(2,"div",2),m.Sb(3,"div",3),m.Sb(4,"h2",4),m.Cc(5),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(6,"div",5),m.Sb(7,"form",6),m.ac("ngSubmit",(function(){return t.submitForm(t.addForm)})),m.Sb(8,"div",7),m.Sb(9,"div"),m.Sb(10,"div",8),m.Sb(11,"div",9),m.Sb(12,"div",10),m.Sb(13,"div",11),m.Sb(14,"div",12),m.Sb(15,"div",13),m.Nb(16,"img",14),m.Rb(),m.Nb(17,"div",10),m.Sb(18,"button",15),m.Cc(19," Browse Image "),m.Rb(),m.Sb(20,"input",16),m.ac("change",(function(e){return t.fileChangeEvent(e)})),m.Rb(),m.Nb(21,"div",17),m.Rb(),m.Sb(22,"div",18),m.Sb(23,"a",19),m.ac("click",(function(){return t.removeFile()})),m.Cc(24,"Remove"),m.Rb(),m.Rb(),m.Sb(25,"div",20),m.Sb(26,"p",21),m.Cc(27,"*Recommended Size:"),m.Nb(28,"br"),m.Cc(29,"Minimum 250 * 250"),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(30,"div",22),m.Sb(31,"div",8),m.Sb(32,"div",23),m.Sb(33,"div",24),m.Sb(34,"label",25),m.Cc(35,"Supplier Name "),m.Sb(36,"em"),m.Cc(37,"*"),m.Rb(),m.Rb(),m.Sb(38,"div",26),m.Nb(39,"input",27),m.Rb(),m.Rb(),m.Rb(),m.Sb(40,"div",23),m.Sb(41,"div",24),m.Sb(42,"label",25),m.Cc(43,"Supplier Code "),m.Sb(44,"em"),m.Cc(45,"*"),m.Rb(),m.Rb(),m.Sb(46,"div",28),m.Nb(47,"input",27),m.Ac(48,x,1,1,"span",29),m.Rb(),m.Rb(),m.Rb(),m.Sb(49,"div",23),m.Sb(50,"div",24),m.Sb(51,"label",25),m.Cc(52,"Country "),m.Sb(53,"em"),m.Cc(54,"*"),m.Rb(),m.Rb(),m.Sb(55,"div",26),m.Sb(56,"ng-select",30),m.ac("change",(function(e){return t.getCountryName(e)})),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(57,"div",23),m.Sb(58,"div",24),m.Sb(59,"label",25),m.Cc(60,"State "),m.Sb(61,"em"),m.Cc(62,"*"),m.Rb(),m.Rb(),m.Sb(63,"div",26),m.Nb(64,"input",27),m.Rb(),m.Rb(),m.Rb(),m.Sb(65,"div",23),m.Sb(66,"div",24),m.Sb(67,"label",25),m.Cc(68,"City "),m.Sb(69,"em"),m.Cc(70,"*"),m.Rb(),m.Rb(),m.Sb(71,"div",26),m.Nb(72,"input",27),m.Rb(),m.Rb(),m.Rb(),m.Sb(73,"div",23),m.Sb(74,"div",24),m.Sb(75,"label",25),m.Cc(76,"Street Address "),m.Sb(77,"em"),m.Cc(78,"*"),m.Rb(),m.Rb(),m.Sb(79,"div",26),m.Nb(80,"input",27),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(81,"div",24),m.Sb(82,"label",25),m.Cc(83,"Phone Number "),m.Sb(84,"em"),m.Cc(85,"*"),m.Rb(),m.Rb(),m.Sb(86,"div",31),m.Nb(87,"input",32),m.Nb(88,"input",33),m.Rb(),m.Rb(),m.Sb(89,"div",24),m.Sb(90,"label",25),m.Cc(91,"Email "),m.Sb(92,"em"),m.Cc(93,"*"),m.Rb(),m.Rb(),m.Sb(94,"div",26),m.Nb(95,"input",27),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(96,"div",34),m.Sb(97,"button",35),m.Cc(98,"Cancel"),m.Rb(),m.Sb(99,"button",36),m.Cc(100,"Submit"),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb()),2&e&&(m.zb(5),m.Fc("",t.isEditing?"Update":"Create"," ",t.PageTitle,""),m.zb(2),m.jc("formGroup",t.addForm),m.zb(9),m.jc("src",t.editImageUrl?t.editImageUrl:"assets/no_image.png",m.wc),m.zb(23),m.jc("formControl",t.addForm.controls.supplier_name),m.zb(7),m.jc("ngClass",m.nc(16,I,t.formErrors.supplier_code)),m.zb(1),m.jc("formControl",t.addForm.controls.supplier_code),m.zb(1),m.jc("ngIf",t.formErrors.supplier_code),m.zb(8),m.jc("formControl",t.addForm.controls.country_id)("items",t.countryListArray),m.zb(8),m.jc("formControl",t.addForm.controls.state),m.zb(8),m.jc("formControl",t.addForm.controls.city),m.zb(8),m.jc("formControl",t.addForm.controls.street_address),m.zb(7),m.jc("formControl",t.addForm.controls.dial_code),m.zb(1),m.jc("formControl",t.addForm.controls.phone_number),m.zb(7),m.jc("formControl",t.addForm.controls.email))},directives:[p.v,p.p,F.a,p.j,p.c,p.o,p.g,L.a,a.j,a.l,c.a,E.a,n.f],encapsulation:2}),N),A=i("QSzr");i.d(t,"SuppliersModule",(function(){return U}));var O,M=[{path:"",component:k,data:{title:"suppliers_list"}},{path:"add",component:z,data:{title:"add_suppliers"}},{path:"edit/:id",component:z,data:{title:"edit_suppliers"}}],U=((O=function e(){_classCallCheck(this,e)}).\u0275mod=m.Kb({type:O}),O.\u0275inj=m.Jb({factory:function(e){return new(e||O)},providers:[S],imports:[[a.b,n.i.forChild(M),l.a,o.a,s.a,p.l,p.s,u.a,d.a,A.a,b.a,c.b]]}),O)}}]);