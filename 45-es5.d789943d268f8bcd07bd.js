function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"L+yV":function(e,t,i){"use strict";i.r(t);var a,n=i("ofXK"),r=i("tyNb"),o=i("g3N6"),c=i("uq2c"),l=i("OTx7"),d=i("ZOsW"),s=i("PCNd"),b=i("Vr6k"),u=i("3Pt+"),m=i("KUiO"),h=i("FasR"),p=i("fXoL"),f=i("c8VH"),v=i("AytR"),g=i("tk/3"),S=((a=function(){function e(t){_classCallCheck(this,e),this.http=t,this.API_URL=v.a.APIEndpoint}return _createClass(e,[{key:"getClientList",value:function(e){return this.http.get("".concat(this.API_URL,"/client"),{params:e})}},{key:"addClient",value:function(e){return this.http.post("".concat(this.API_URL,"/client"),e)}},{key:"editClient",value:function(e,t){return this.http.put("".concat(this.API_URL,"/client/").concat(e),t)}},{key:"getClientById",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.http.get("".concat(this.API_URL,"/client/").concat(e),{params:t})}}]),e}()).\u0275fac=function(e){return new(e||a)(p.Wb(g.b))},a.\u0275prov=p.Ib({token:a,factory:a.\u0275fac}),a),R=i("jTkZ"),_=i("Eb8l"),C=i("LPFR"),y=i("Pbud");function w(e,t){if(1&e){var i=p.Tb();p.Sb(0,"pagination",11),p.ac("onPageChange",(function(e){return p.uc(i),p.cc().getPage(e)})),p.Rb()}if(2&e){var a=p.cc();p.jc("paginationList",a.pagination)("currentPage",a.currentPage)}}var j,k=((j=function(){function e(t,i){_classCallCheck(this,e),this.paginationService=t,this.clientService=i,this.PageTitle="Manage Client",this.loadform=!1,this.loadingState=!0,this.objectArray=[],this.pagination=null,this.searchText=null,this.currentPage=1,this.permissionObject=null,this.showPagination=!1,this.headerData=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.loadform=!1,this.setHeaderData(),this.getObjects()}},{key:"setHeaderData",value:function(){this.headerData.push(new h.h({label:"Client Name",key:"client_name"}),new h.h({label:"Client Code",key:"client_code"}),new h.h({label:"Email",key:"user.email"}),new h.h({label:"Phone Number",key:"user.phone_number"}),new h.h({label:"Address\t",key:"address.country_name"}));var e=new h.a({edit:{path:"/manage/client/edit/",id:"client_id"},delete:{path:"client/",id:"client_id"}});this.headerData.push(e)}},{key:"getObjects",value:function(){var e=this,t={page:this.currentPage};this.searchText&&(t.search=this.searchText),this.clientService.getClientList(t).subscribe((function(t){e.loadingState=!1,t.success?(e.objectArray=t.data.list,e.showPagination=!0,e.pagination=e.paginationService.getPager(t.data.pagination.total_page,e.currentPage)):(e.objectArray=[],e.pagination=null)}),(function(t){e.loadingState=!1,e.objectArray=[],e.pagination=null}))}},{key:"getPage",value:function(e){this.currentPage=e,this.getObjects()}},{key:"searchObject",value:function(e){this.searchText=e,this.currentPage=1,this.getObjects()}},{key:"onReloadEvent",value:function(){this.getObjects()}}]),e}()).\u0275fac=function(e){return new(e||j)(p.Mb(f.a),p.Mb(S))},j.\u0275cmp=p.Gb({type:j,selectors:[["app-client-list"]],decls:13,vars:7,consts:[[1,"side-container"],[1,"page-header"],[1,"row","m-0"],[1,"mr-auto"],[1,"ml-3"],[3,"placeholder","text"],[3,"btnName","editData"],[1,"card"],[1,"card-body"],[3,"headerData","rawData","reloadEvent"],[3,"paginationList","currentPage","onPageChange",4,"ngIf"],[3,"paginationList","currentPage","onPageChange"]],template:function(e,t){1&e&&(p.Sb(0,"div",0),p.Sb(1,"div",1),p.Sb(2,"div",2),p.Sb(3,"h2",3),p.Cc(4),p.Rb(),p.Sb(5,"div",4),p.Sb(6,"search-box",5),p.ac("text",(function(e){return t.searchObject(e)})),p.Rb(),p.Rb(),p.Sb(7,"div",4),p.Nb(8,"app-btn-add",6),p.Rb(),p.Rb(),p.Rb(),p.Sb(9,"div",7),p.Sb(10,"div",8),p.Sb(11,"app-table-list",9),p.ac("reloadEvent",(function(){return t.onReloadEvent()})),p.Rb(),p.Ac(12,w,1,2,"pagination",10),p.Rb(),p.Rb(),p.Rb()),2&e&&(p.zb(4),p.Dc(t.PageTitle),p.zb(2),p.jc("placeholder","Search Here..."),p.zb(2),p.jc("btnName","Add Client")("editData","/manage/client/add"),p.zb(3),p.jc("headerData",t.headerData)("rawData",t.objectArray),p.zb(1),p.jc("ngIf",t.showPagination))},directives:[R.a,_.a,C.a,n.l,y.a],encapsulation:2}),j),P=i("8cFx"),F=i("HOh6"),x=i("UaFz"),L=i("/SVk");function N(e,t){if(1&e&&p.Nb(0,"span",37),2&e){var i=p.cc();p.jc("innerHTML",i.formErrors.client_code,p.vc)}}var E,z=function(e){return{"has-error":e}},I=((E=function(){function e(t,i,a,n,r){_classCallCheck(this,e),this.router=t,this.activatedRoute=i,this.fb=a,this.clientService=n,this.commonService=r,this.PageTitle="Client",this.editImageUrl=null,this.addNewRadio=!1,this.categoryListArray=[],this.brandListArray=[],this.loadingState=!1,this.showLoader=!1,this.formErrors={client_code:null,apierror:null},this.isEditing=!1,this.editId=null,this.countryListArray=[],this.activatedRoute.snapshot.paramMap.get("id")&&(this.isEditing=!0,this.editId=this.activatedRoute.snapshot.paramMap.get("id")),this.addForm=this.fb.group({client_name:[null,u.t.compose([u.t.required])],client_code:[null,u.t.compose([u.t.required])],phone_number:[null,u.t.compose([u.t.required])],dial_code:[null,u.t.compose([u.t.required])],email:[null,u.t.compose([u.t.required,u.t.email])],address:[null],country_name:[null],first_name:[null,u.t.compose([u.t.required])],last_name:[null,u.t.compose([u.t.required])],country_id:[null,u.t.compose([u.t.required])],tax_id:[null,u.t.compose([u.t.required])],state:[null,u.t.compose([u.t.required])],city:[null,u.t.compose([u.t.required])],street_address:[null,u.t.compose([u.t.required])]})}return _createClass(e,[{key:"ngOnInit",value:function(){this.getCountryList(),this.isEditing&&this.getEditObject()}},{key:"getCountryList",value:function(){var e=this;this.commonService.getCountryList().subscribe((function(t){t.success&&(e.countryListArray=t.data.country_list)}))}},{key:"getEditObject",value:function(){var e=this;this.clientService.getClientById(this.editId).subscribe((function(t){t.success?(e.editImageUrl=t.data.image,e.addForm.patchValue({client_name:t.data.client_name,category_id:t.data.category_id,dial_code:t.data.user.dial_code,client_code:t.data.client_code,tax_id:t.data.tax_id,first_name:t.data.user.first_name,last_name:t.data.user.last_name,phone_number:t.data.user.phone_number,email:t.data.user.email,country_name:t.data.address.country_name,country_id:t.data.address.country_id,state:t.data.address.state,city:t.data.address.city,street_address:t.data.address.street_address?t.data.address.street_address:""})):e.router.navigateByUrl("/manage/client")}))}},{key:"fileChangeEvent",value:function(e){if(!e.target.files[0].name.match(/(.*?)\.(jpg|jpeg|png|gif|giff)$/))return swal.fire("Invalid File!","Please select valid file ","error"),this.removeFile(),!1;this.removeFile(),this.selectedFile=e.target.files[0]}},{key:"removeFile",value:function(){this.selectedFile=null}},{key:"getCountryName",value:function(e){this.addForm.patchValue({country_name:e.label})}},{key:"submitForm",value:function(e){var t=this;if(e.valid){this.showLoader=!0;var i=new FormData;i.append("client_name",e.value.client_name),i.append("client_code",e.value.client_code),i.append("phone_number",e.value.phone_number),i.append("first_name",e.value.first_name),i.append("last_name",e.value.last_name),i.append("dial_code",e.value.dial_code),i.append("email",e.value.email),i.append("tax_id",e.value.tax_id),i.append("address",JSON.stringify({country_id:e.value.country_id,country_name:e.value.country_name,state:e.value.state,city:e.value.city,street_address:e.value.street_address})),this.selectedFile&&i.append("file",this.selectedFile),this.isEditing?this.clientService.editClient(this.editId,i).subscribe((function(e){t.showLoader=!1,e.success?t.router.navigateByUrl("/manage/client"):e.error.map((function(i){i.hasOwnProperty("client_code")?t.formErrors.client_code=i.client_code:t.formErrors.apierror="* ".concat(e.error)}))}),(function(e){t.showLoader=!1})):this.clientService.addClient(i).subscribe((function(e){t.showLoader=!1,e.success?t.router.navigateByUrl("/manage/client"):e.error.map((function(i){i.hasOwnProperty("client_code")?t.formErrors.client_code=i.client_code:t.formErrors.apierror="* ".concat(e.error)}))}),(function(e){t.showLoader=!1}))}}}]),e}()).\u0275fac=function(e){return new(e||E)(p.Mb(r.e),p.Mb(r.a),p.Mb(u.e),p.Mb(S),p.Mb(P.a))},E.\u0275cmp=p.Gb({type:E,selectors:[["app-add-client"]],decls:125,vars:21,consts:[[1,"side-container"],[1,"page-header"],[1,"row","m-0"],[1,"col"],[1,"mr-auto"],[1,"card"],["role","form",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"card-body"],[1,"row"],[1,"col-4"],[1,"clearfix"],["data-provides","fileinput",1,"fileinput","text-center","fileinput-new"],[1,"btn-file","mt-3"],[1,"thumbnail","fileinput-new","uploaded-user-image","rounded-circle",2,"width","150px","height","150px"],["alt","",3,"src"],[1,"fileinput-new","btn","btn-dark","btn-sm","btn-file","mt-3"],["accept","image/x-png,image/jpeg","type","file","file-model","myFile",3,"change"],[1,"fileinput-preview","fileinput-exists","thumbnail","uploaded-user-image","rounded-circle",2,"width","150px","height","150px"],[1,"text-center"],["data-dismiss","fileinput",1,"btn","btn-link","btn-sm","fileinput-exists","mt-3",3,"click"],[1,"clearfix","mt-3"],[1,"upload-img-label","text-muted","font-size-12"],[1,"col-8"],[1,"col-6"],[1,"form-group"],[1,"control-label","text-md-right"],[1,""],["type","text","placeholder","",1,"form-control",3,"formControl"],[1,"",3,"ngClass"],["class","help-block",3,"innerHTML",4,"ngIf"],["bindLabel","label","bindValue","value","placeholder","Select Country",3,"formControl","items","change"],[1,"d-flex"],["number","","type","text","placeholder","Enter dial number",1,"form-control","mr-2",2,"width","100px",3,"formControl"],["number","","type","text","placeholder","Enter phone number",1,"form-control",3,"formControl"],[1,"text-right","border-top","py-4","mt-5","card-footer"],["type","button","routerLink","/manage/client",1,"btn","btn-light"],["type","submit",1,"btn","btn-secondary","ml-2"],[1,"help-block",3,"innerHTML"]],template:function(e,t){1&e&&(p.Sb(0,"div",0),p.Sb(1,"div",1),p.Sb(2,"div",2),p.Sb(3,"div",3),p.Sb(4,"h2",4),p.Cc(5),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Sb(6,"div",5),p.Sb(7,"form",6),p.ac("ngSubmit",(function(){return t.submitForm(t.addForm)})),p.Sb(8,"div",7),p.Sb(9,"div"),p.Sb(10,"div",8),p.Sb(11,"div",9),p.Sb(12,"div",10),p.Sb(13,"div",11),p.Sb(14,"div",12),p.Sb(15,"div",13),p.Nb(16,"img",14),p.Rb(),p.Nb(17,"div",10),p.Sb(18,"button",15),p.Cc(19," Browse Image "),p.Rb(),p.Sb(20,"input",16),p.ac("change",(function(e){return t.fileChangeEvent(e)})),p.Rb(),p.Nb(21,"div",17),p.Rb(),p.Sb(22,"div",18),p.Sb(23,"a",19),p.ac("click",(function(){return t.removeFile()})),p.Cc(24,"Remove"),p.Rb(),p.Rb(),p.Sb(25,"div",20),p.Sb(26,"p",21),p.Cc(27,"*Recommended Size:"),p.Nb(28,"br"),p.Cc(29,"Minimum 250 * 250"),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Sb(30,"div",22),p.Sb(31,"div",8),p.Sb(32,"div",23),p.Sb(33,"div",24),p.Sb(34,"label",25),p.Cc(35,"First Name "),p.Sb(36,"em"),p.Cc(37,"*"),p.Rb(),p.Rb(),p.Sb(38,"div",26),p.Nb(39,"input",27),p.Rb(),p.Rb(),p.Rb(),p.Sb(40,"div",23),p.Sb(41,"div",24),p.Sb(42,"label",25),p.Cc(43,"Last Name "),p.Sb(44,"em"),p.Cc(45,"*"),p.Rb(),p.Rb(),p.Sb(46,"div",26),p.Nb(47,"input",27),p.Rb(),p.Rb(),p.Rb(),p.Sb(48,"div",23),p.Sb(49,"div",24),p.Sb(50,"label",25),p.Cc(51,"Client Name "),p.Sb(52,"em"),p.Cc(53,"*"),p.Rb(),p.Rb(),p.Sb(54,"div",26),p.Nb(55,"input",27),p.Rb(),p.Rb(),p.Rb(),p.Sb(56,"div",23),p.Sb(57,"div",24),p.Sb(58,"label",25),p.Cc(59,"Client Code "),p.Sb(60,"em"),p.Cc(61,"*"),p.Rb(),p.Rb(),p.Sb(62,"div",28),p.Nb(63,"input",27),p.Ac(64,N,1,1,"span",29),p.Rb(),p.Rb(),p.Rb(),p.Sb(65,"div",23),p.Sb(66,"div",24),p.Sb(67,"label",25),p.Cc(68,"Country "),p.Sb(69,"em"),p.Cc(70,"*"),p.Rb(),p.Rb(),p.Sb(71,"div",26),p.Sb(72,"ng-select",30),p.ac("change",(function(e){return t.getCountryName(e)})),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Sb(73,"div",23),p.Sb(74,"div",24),p.Sb(75,"label",25),p.Cc(76,"State "),p.Sb(77,"em"),p.Cc(78,"*"),p.Rb(),p.Rb(),p.Sb(79,"div",26),p.Nb(80,"input",27),p.Rb(),p.Rb(),p.Rb(),p.Sb(81,"div",23),p.Sb(82,"div",24),p.Sb(83,"label",25),p.Cc(84,"City "),p.Sb(85,"em"),p.Cc(86,"*"),p.Rb(),p.Rb(),p.Sb(87,"div",26),p.Nb(88,"input",27),p.Rb(),p.Rb(),p.Rb(),p.Sb(89,"div",23),p.Sb(90,"div",24),p.Sb(91,"label",25),p.Cc(92,"Street Address "),p.Sb(93,"em"),p.Cc(94,"*"),p.Rb(),p.Rb(),p.Sb(95,"div",26),p.Nb(96,"input",27),p.Rb(),p.Rb(),p.Rb(),p.Sb(97,"div",23),p.Sb(98,"div",24),p.Sb(99,"label",25),p.Cc(100,"Tax "),p.Sb(101,"em"),p.Cc(102,"*"),p.Rb(),p.Rb(),p.Sb(103,"div",26),p.Nb(104,"input",27),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Sb(105,"div",24),p.Sb(106,"label",25),p.Cc(107,"Phone Number "),p.Sb(108,"em"),p.Cc(109,"*"),p.Rb(),p.Rb(),p.Sb(110,"div",31),p.Nb(111,"input",32),p.Nb(112,"input",33),p.Rb(),p.Rb(),p.Sb(113,"div",24),p.Sb(114,"label",25),p.Cc(115,"Email "),p.Sb(116,"em"),p.Cc(117,"*"),p.Rb(),p.Rb(),p.Sb(118,"div",26),p.Nb(119,"input",27),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Sb(120,"div",34),p.Sb(121,"button",35),p.Cc(122,"Cancel"),p.Rb(),p.Sb(123,"button",36),p.Cc(124,"Submit"),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Rb()),2&e&&(p.zb(5),p.Fc("",t.isEditing?"Update":"Create"," ",t.PageTitle,""),p.zb(2),p.jc("formGroup",t.addForm),p.zb(9),p.jc("src",t.editImageUrl?t.editImageUrl:"assets/no_image.png",p.wc),p.zb(23),p.jc("formControl",t.addForm.controls.first_name),p.zb(8),p.jc("formControl",t.addForm.controls.last_name),p.zb(8),p.jc("formControl",t.addForm.controls.client_name),p.zb(7),p.jc("ngClass",p.nc(19,z,t.formErrors.client_code)),p.zb(1),p.jc("formControl",t.addForm.controls.client_code),p.zb(1),p.jc("ngIf",t.formErrors.client_code),p.zb(8),p.jc("formControl",t.addForm.controls.country_id)("items",t.countryListArray),p.zb(8),p.jc("formControl",t.addForm.controls.state),p.zb(8),p.jc("formControl",t.addForm.controls.city),p.zb(8),p.jc("formControl",t.addForm.controls.street_address),p.zb(8),p.jc("formControl",t.addForm.controls.tax_id),p.zb(7),p.jc("formControl",t.addForm.controls.dial_code),p.zb(1),p.jc("formControl",t.addForm.controls.phone_number),p.zb(7),p.jc("formControl",t.addForm.controls.email))},directives:[u.v,u.p,F.a,u.j,u.c,u.o,u.g,x.a,n.j,n.l,d.a,L.a,r.f],encapsulation:2}),E),A=i("QSzr");i.d(t,"ClientModule",(function(){return M}));var O,T=[{path:"",component:k,data:{title:"client_list"}},{path:"add",component:I,data:{title:"add_client"}},{path:"edit/:id",component:I,data:{title:"edit_client"}}],M=((O=function e(){_classCallCheck(this,e)}).\u0275mod=p.Kb({type:O}),O.\u0275inj=p.Jb({factory:function(e){return new(e||O)},providers:[S],imports:[[n.b,r.i.forChild(T),l.a,o.a,c.a,u.l,u.s,b.a,s.a,m.a,A.a,d.b]]}),O)}}]);