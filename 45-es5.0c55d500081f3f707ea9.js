function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"L+yV":function(e,t,i){"use strict";i.r(t);var a,n=i("ofXK"),r=i("tyNb"),o=i("g3N6"),c=i("uq2c"),l=i("OTx7"),d=i("ZOsW"),s=i("PCNd"),b=i("Vr6k"),u=i("3Pt+"),m=i("KUiO"),p=i("FasR"),h=i("fXoL"),f=i("c8VH"),v=i("AytR"),g=i("tk/3"),S=((a=function(){function e(t){_classCallCheck(this,e),this.http=t,this.API_URL=v.a.APIEndpoint}return _createClass(e,[{key:"getClientList",value:function(e){return this.http.get("".concat(this.API_URL,"/client"),{params:e})}},{key:"addClient",value:function(e){return this.http.post("".concat(this.API_URL,"/client"),e)}},{key:"editClient",value:function(e,t){return this.http.put("".concat(this.API_URL,"/client/").concat(e),t)}},{key:"getClientById",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.http.get("".concat(this.API_URL,"/client/").concat(e),{params:t})}}]),e}()).\u0275fac=function(e){return new(e||a)(h.Wb(g.b))},a.\u0275prov=h.Ib({token:a,factory:a.\u0275fac}),a),R=i("jTkZ"),_=i("Eb8l"),y=i("LPFR"),C=i("Pbud");function w(e,t){if(1&e){var i=h.Tb();h.Sb(0,"pagination",11),h.ac("onPageChange",(function(e){return h.tc(i),h.cc().getPage(e)})),h.Rb()}if(2&e){var a=h.cc();h.ic("paginationList",a.pagination)("currentPage",a.currentPage)}}var k,P=((k=function(){function e(t,i){_classCallCheck(this,e),this.paginationService=t,this.clientService=i,this.PageTitle="Manage Client",this.loadform=!1,this.loadingState=!0,this.objectArray=[],this.pagination=null,this.searchText=null,this.currentPage=1,this.permissionObject=null,this.showPagination=!1,this.headerData=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.loadform=!1,this.setHeaderData(),this.getObjects()}},{key:"setHeaderData",value:function(){this.headerData.push(new p.f({label:"Client Name",key:"client_name"}),new p.f({label:"Client Code",key:"client_code"}),new p.f({label:"Email",key:"user.email"}),new p.f({label:"Phone Number",key:"user.phone_number"}),new p.f({label:"Address\t",key:"address.country_name"}));var e=new p.a({edit:{path:"/manage/client/edit/",id:"client_id"},delete:{path:"client/",id:"client_id"}});this.headerData.push(e)}},{key:"getObjects",value:function(){var e=this,t={page:this.currentPage};this.searchText&&(t.search=this.searchText),this.clientService.getClientList(t).subscribe((function(t){e.loadingState=!1,t.success?(e.objectArray=t.data.list,e.showPagination=!0,e.pagination=e.paginationService.getPager(t.data.pagination.total_page,e.currentPage)):(e.objectArray=[],e.pagination=null)}),(function(t){e.loadingState=!1,e.objectArray=[],e.pagination=null}))}},{key:"getPage",value:function(e){this.currentPage=e,this.getObjects()}},{key:"searchObject",value:function(e){this.searchText=e,this.currentPage=1,this.getObjects()}},{key:"onReloadEvent",value:function(){this.getObjects()}}]),e}()).\u0275fac=function(e){return new(e||k)(h.Mb(f.a),h.Mb(S))},k.\u0275cmp=h.Gb({type:k,selectors:[["app-client-list"]],decls:13,vars:7,consts:[[1,"side-container"],[1,"page-header"],[1,"row","m-0"],[1,"mr-auto"],[1,"ml-3"],[3,"placeholder","text"],[3,"btnName","editData"],[1,"card"],[1,"card-body"],[3,"headerData","rawData","reloadEvent"],[3,"paginationList","currentPage","onPageChange",4,"ngIf"],[3,"paginationList","currentPage","onPageChange"]],template:function(e,t){1&e&&(h.Sb(0,"div",0),h.Sb(1,"div",1),h.Sb(2,"div",2),h.Sb(3,"h2",3),h.Bc(4),h.Rb(),h.Sb(5,"div",4),h.Sb(6,"search-box",5),h.ac("text",(function(e){return t.searchObject(e)})),h.Rb(),h.Rb(),h.Sb(7,"div",4),h.Nb(8,"app-btn-add",6),h.Rb(),h.Rb(),h.Rb(),h.Sb(9,"div",7),h.Sb(10,"div",8),h.Sb(11,"app-table-list",9),h.ac("reloadEvent",(function(){return t.onReloadEvent()})),h.Rb(),h.zc(12,w,1,2,"pagination",10),h.Rb(),h.Rb(),h.Rb()),2&e&&(h.zb(4),h.Cc(t.PageTitle),h.zb(2),h.ic("placeholder","Search Here..."),h.zb(2),h.ic("btnName","Add Client")("editData","/manage/client/add"),h.zb(3),h.ic("headerData",t.headerData)("rawData",t.objectArray),h.zb(1),h.ic("ngIf",t.showPagination))},directives:[R.a,_.a,y.a,n.l,C.a],encapsulation:2}),k),B=i("8cFx"),x=i("HOh6"),F=i("UaFz"),L=i("/SVk");function N(e,t){if(1&e&&h.Nb(0,"span",37),2&e){var i=h.cc();h.ic("innerHTML",i.formErrors.client_code,h.uc)}}var z,E=function(e){return{"has-error":e}},I=((z=function(){function e(t,i,a,n,r){_classCallCheck(this,e),this.router=t,this.activatedRoute=i,this.fb=a,this.clientService=n,this.commonService=r,this.PageTitle="Client",this.editImageUrl=null,this.addNewRadio=!1,this.categoryListArray=[],this.brandListArray=[],this.loadingState=!1,this.showLoader=!1,this.formErrors={client_code:null,apierror:null},this.isEditing=!1,this.editId=null,this.countryListArray=[],this.activatedRoute.snapshot.paramMap.get("id")&&(this.isEditing=!0,this.editId=this.activatedRoute.snapshot.paramMap.get("id")),this.addForm=this.fb.group({client_name:[null,u.t.compose([u.t.required])],client_code:[null,u.t.compose([u.t.required])],phone_number:[null,u.t.compose([u.t.required])],dial_code:[null,u.t.compose([u.t.required])],email:[null,u.t.compose([u.t.required,u.t.email])],address:[null],country_name:[null],first_name:[null,u.t.compose([u.t.required])],last_name:[null,u.t.compose([u.t.required])],country_id:[null,u.t.compose([u.t.required])],tax_id:[null,u.t.compose([u.t.required])],state:[null,u.t.compose([u.t.required])],city:[null,u.t.compose([u.t.required])],street_address:[null,u.t.compose([u.t.required])]})}return _createClass(e,[{key:"ngOnInit",value:function(){this.getCountryList(),this.isEditing&&this.getEditObject()}},{key:"getCountryList",value:function(){var e=this;this.commonService.getCountryList().subscribe((function(t){t.success&&(e.countryListArray=t.data.country_list)}))}},{key:"getEditObject",value:function(){var e=this;this.clientService.getClientById(this.editId).subscribe((function(t){t.success?(e.editImageUrl=t.data.image,e.addForm.patchValue({client_name:t.data.client_name,category_id:t.data.category_id,dial_code:t.data.user.dial_code,client_code:t.data.client_code,tax_id:t.data.tax_id,first_name:t.data.user.first_name,last_name:t.data.user.last_name,phone_number:t.data.user.phone_number,email:t.data.user.email,country_name:t.data.address.country_name,country_id:t.data.address.country_id,state:t.data.address.state,city:t.data.address.city,street_address:t.data.address.street_address?t.data.address.street_address:""})):e.router.navigateByUrl("/manage/client")}))}},{key:"fileChangeEvent",value:function(e){if(!e.target.files[0].name.match(/(.*?)\.(jpg|jpeg|png|gif|giff)$/))return swal.fire("Invalid File!","Please select valid file ","error"),this.removeFile(),!1;this.removeFile(),this.selectedFile=e.target.files[0]}},{key:"removeFile",value:function(){this.selectedFile=null}},{key:"getCountryName",value:function(e){this.addForm.patchValue({country_name:e.label})}},{key:"submitForm",value:function(e){var t=this;if(e.valid){this.showLoader=!0;var i=new FormData;i.append("client_name",e.value.client_name),i.append("client_code",e.value.client_code),i.append("phone_number",e.value.phone_number),i.append("first_name",e.value.first_name),i.append("last_name",e.value.last_name),i.append("dial_code",e.value.dial_code),i.append("email",e.value.email),i.append("tax_id",e.value.tax_id),i.append("address",JSON.stringify({country_id:e.value.country_id,country_name:e.value.country_name,state:e.value.state,city:e.value.city,street_address:e.value.street_address})),this.selectedFile&&i.append("file",this.selectedFile),this.isEditing?this.clientService.editClient(this.editId,i).subscribe((function(e){t.showLoader=!1,e.success?t.router.navigateByUrl("/manage/client"):e.error.map((function(i){i.hasOwnProperty("client_code")?t.formErrors.client_code=i.client_code:t.formErrors.apierror="* ".concat(e.error)}))}),(function(e){t.showLoader=!1})):this.clientService.addClient(i).subscribe((function(e){t.showLoader=!1,e.success?t.router.navigateByUrl("/manage/client"):e.error.map((function(i){i.hasOwnProperty("client_code")?t.formErrors.client_code=i.client_code:t.formErrors.apierror="* ".concat(e.error)}))}),(function(e){t.showLoader=!1}))}}}]),e}()).\u0275fac=function(e){return new(e||z)(h.Mb(r.e),h.Mb(r.a),h.Mb(u.e),h.Mb(S),h.Mb(B.a))},z.\u0275cmp=h.Gb({type:z,selectors:[["app-add-client"]],decls:125,vars:21,consts:[[1,"side-container"],[1,"page-header"],[1,"row","m-0"],[1,"col"],[1,"mr-auto"],[1,"card"],["role","form",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"card-body"],[1,"row"],[1,"col-4"],[1,"clearfix"],["data-provides","fileinput",1,"fileinput","text-center","fileinput-new"],[1,"btn-file","mt-3"],[1,"thumbnail","fileinput-new","uploaded-user-image","rounded-circle",2,"width","150px","height","150px"],["alt","",3,"src"],[1,"fileinput-new","btn","btn-dark","btn-sm","btn-file","mt-3"],["accept","image/x-png,image/jpeg","type","file","file-model","myFile",3,"change"],[1,"fileinput-preview","fileinput-exists","thumbnail","uploaded-user-image","rounded-circle",2,"width","150px","height","150px"],[1,"text-center"],["data-dismiss","fileinput",1,"btn","btn-link","btn-sm","fileinput-exists","mt-3",3,"click"],[1,"clearfix","mt-3"],[1,"upload-img-label","text-muted","font-size-12"],[1,"col-8"],[1,"col-6"],[1,"form-group"],[1,"control-label","text-md-right"],[1,""],["type","text","placeholder","",1,"form-control",3,"formControl"],[1,"",3,"ngClass"],["class","help-block",3,"innerHTML",4,"ngIf"],["bindLabel","label","bindValue","value","placeholder","Select Country",3,"formControl","items","change"],[1,"d-flex"],["number","","type","text","placeholder","Enter dial number",1,"form-control","mr-2",2,"width","100px",3,"formControl"],["number","","type","text","placeholder","Enter phone number",1,"form-control",3,"formControl"],[1,"text-right","border-top","py-4","mt-5","card-footer"],["type","button","routerLink","/manage/client",1,"btn","btn-light"],["type","submit",1,"btn","btn-secondary","ml-2"],[1,"help-block",3,"innerHTML"]],template:function(e,t){1&e&&(h.Sb(0,"div",0),h.Sb(1,"div",1),h.Sb(2,"div",2),h.Sb(3,"div",3),h.Sb(4,"h2",4),h.Bc(5),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Sb(6,"div",5),h.Sb(7,"form",6),h.ac("ngSubmit",(function(){return t.submitForm(t.addForm)})),h.Sb(8,"div",7),h.Sb(9,"div"),h.Sb(10,"div",8),h.Sb(11,"div",9),h.Sb(12,"div",10),h.Sb(13,"div",11),h.Sb(14,"div",12),h.Sb(15,"div",13),h.Nb(16,"img",14),h.Rb(),h.Nb(17,"div",10),h.Sb(18,"button",15),h.Bc(19," Browse Image "),h.Rb(),h.Sb(20,"input",16),h.ac("change",(function(e){return t.fileChangeEvent(e)})),h.Rb(),h.Nb(21,"div",17),h.Rb(),h.Sb(22,"div",18),h.Sb(23,"a",19),h.ac("click",(function(){return t.removeFile()})),h.Bc(24,"Remove"),h.Rb(),h.Rb(),h.Sb(25,"div",20),h.Sb(26,"p",21),h.Bc(27,"*Recommended Size:"),h.Nb(28,"br"),h.Bc(29,"Minimum 250 * 250"),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Sb(30,"div",22),h.Sb(31,"div",8),h.Sb(32,"div",23),h.Sb(33,"div",24),h.Sb(34,"label",25),h.Bc(35,"First Name "),h.Sb(36,"em"),h.Bc(37,"*"),h.Rb(),h.Rb(),h.Sb(38,"div",26),h.Nb(39,"input",27),h.Rb(),h.Rb(),h.Rb(),h.Sb(40,"div",23),h.Sb(41,"div",24),h.Sb(42,"label",25),h.Bc(43,"Last Name "),h.Sb(44,"em"),h.Bc(45,"*"),h.Rb(),h.Rb(),h.Sb(46,"div",26),h.Nb(47,"input",27),h.Rb(),h.Rb(),h.Rb(),h.Sb(48,"div",23),h.Sb(49,"div",24),h.Sb(50,"label",25),h.Bc(51,"Client Name "),h.Sb(52,"em"),h.Bc(53,"*"),h.Rb(),h.Rb(),h.Sb(54,"div",26),h.Nb(55,"input",27),h.Rb(),h.Rb(),h.Rb(),h.Sb(56,"div",23),h.Sb(57,"div",24),h.Sb(58,"label",25),h.Bc(59,"Client Code "),h.Sb(60,"em"),h.Bc(61,"*"),h.Rb(),h.Rb(),h.Sb(62,"div",28),h.Nb(63,"input",27),h.zc(64,N,1,1,"span",29),h.Rb(),h.Rb(),h.Rb(),h.Sb(65,"div",23),h.Sb(66,"div",24),h.Sb(67,"label",25),h.Bc(68,"Country "),h.Sb(69,"em"),h.Bc(70,"*"),h.Rb(),h.Rb(),h.Sb(71,"div",26),h.Sb(72,"ng-select",30),h.ac("change",(function(e){return t.getCountryName(e)})),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Sb(73,"div",23),h.Sb(74,"div",24),h.Sb(75,"label",25),h.Bc(76,"State "),h.Sb(77,"em"),h.Bc(78,"*"),h.Rb(),h.Rb(),h.Sb(79,"div",26),h.Nb(80,"input",27),h.Rb(),h.Rb(),h.Rb(),h.Sb(81,"div",23),h.Sb(82,"div",24),h.Sb(83,"label",25),h.Bc(84,"City "),h.Sb(85,"em"),h.Bc(86,"*"),h.Rb(),h.Rb(),h.Sb(87,"div",26),h.Nb(88,"input",27),h.Rb(),h.Rb(),h.Rb(),h.Sb(89,"div",23),h.Sb(90,"div",24),h.Sb(91,"label",25),h.Bc(92,"Street Address "),h.Sb(93,"em"),h.Bc(94,"*"),h.Rb(),h.Rb(),h.Sb(95,"div",26),h.Nb(96,"input",27),h.Rb(),h.Rb(),h.Rb(),h.Sb(97,"div",23),h.Sb(98,"div",24),h.Sb(99,"label",25),h.Bc(100,"Tax "),h.Sb(101,"em"),h.Bc(102,"*"),h.Rb(),h.Rb(),h.Sb(103,"div",26),h.Nb(104,"input",27),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Sb(105,"div",24),h.Sb(106,"label",25),h.Bc(107,"Phone Number "),h.Sb(108,"em"),h.Bc(109,"*"),h.Rb(),h.Rb(),h.Sb(110,"div",31),h.Nb(111,"input",32),h.Nb(112,"input",33),h.Rb(),h.Rb(),h.Sb(113,"div",24),h.Sb(114,"label",25),h.Bc(115,"Email "),h.Sb(116,"em"),h.Bc(117,"*"),h.Rb(),h.Rb(),h.Sb(118,"div",26),h.Nb(119,"input",27),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Sb(120,"div",34),h.Sb(121,"button",35),h.Bc(122,"Cancel"),h.Rb(),h.Sb(123,"button",36),h.Bc(124,"Submit"),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Rb()),2&e&&(h.zb(5),h.Ec("",t.isEditing?"Update":"Create"," ",t.PageTitle,""),h.zb(2),h.ic("formGroup",t.addForm),h.zb(9),h.ic("src",t.editImageUrl?t.editImageUrl:"assets/no_image.png",h.vc),h.zb(23),h.ic("formControl",t.addForm.controls.first_name),h.zb(8),h.ic("formControl",t.addForm.controls.last_name),h.zb(8),h.ic("formControl",t.addForm.controls.client_name),h.zb(7),h.ic("ngClass",h.mc(19,E,t.formErrors.client_code)),h.zb(1),h.ic("formControl",t.addForm.controls.client_code),h.zb(1),h.ic("ngIf",t.formErrors.client_code),h.zb(8),h.ic("formControl",t.addForm.controls.country_id)("items",t.countryListArray),h.zb(8),h.ic("formControl",t.addForm.controls.state),h.zb(8),h.ic("formControl",t.addForm.controls.city),h.zb(8),h.ic("formControl",t.addForm.controls.street_address),h.zb(8),h.ic("formControl",t.addForm.controls.tax_id),h.zb(7),h.ic("formControl",t.addForm.controls.dial_code),h.zb(1),h.ic("formControl",t.addForm.controls.phone_number),h.zb(7),h.ic("formControl",t.addForm.controls.email))},directives:[u.v,u.p,x.a,u.j,u.c,u.o,u.g,F.a,n.j,n.l,d.a,L.a,r.f],encapsulation:2}),z),j=i("QSzr");i.d(t,"ClientModule",(function(){return T}));var A,O=[{path:"",component:P,data:{title:"client_list"}},{path:"add",component:I,data:{title:"add_client"}},{path:"edit/:id",component:I,data:{title:"edit_client"}}],T=((A=function e(){_classCallCheck(this,e)}).\u0275mod=h.Kb({type:A}),A.\u0275inj=h.Jb({factory:function(e){return new(e||A)},providers:[S],imports:[[n.b,r.i.forChild(O),l.a,o.a,c.a,u.l,u.s,b.a,s.a,m.a,j.a,d.b]]}),A)}}]);