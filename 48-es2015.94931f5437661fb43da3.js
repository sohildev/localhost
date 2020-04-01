(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{CHsW:function(t,e,r){"use strict";r.r(e);var i=r("FasR"),a=r("fXoL"),o=r("c8VH"),d=r("AytR"),n=r("tk/3");let c=(()=>{class t{constructor(t){this.http=t,this.API_URL=d.a.APIEndpoint}getProductList(t){return this.http.get(`${this.API_URL}/product`,{params:t})}addProduct(t){return this.http.post(`${this.API_URL}/product`,t)}editProduct(t,e){return this.http.put(`${this.API_URL}/product/${t}`,e)}getProductById(t,e=null){return this.http.get(`${this.API_URL}/product/${t}`,{params:e})}getProductMasterData(){return this.http.get(`${this.API_URL}/product/master-data`)}}return t.\u0275fac=function(e){return new(e||t)(a.Wb(n.b))},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac}),t})();var s=r("jTkZ"),l=r("Eb8l"),b=r("LPFR"),u=r("ofXK"),p=r("Pbud");function h(t,e){if(1&t){const t=a.Tb();a.Sb(0,"pagination",11),a.ac("onPageChange",(function(e){return a.tc(t),a.cc().getPage(e)})),a.Rb()}if(2&t){const t=a.cc();a.ic("paginationList",t.pagination)("currentPage",t.currentPage)}}let m=(()=>{class t{constructor(t,e){this.paginationService=t,this.productService=e,this.PageTitle="Manage Product",this.loadform=!1,this.loadingState=!0,this.objectArray=[],this.pagination=null,this.searchText=null,this.currentPage=1,this.permissionObject=null,this.showPagination=!1,this.headerData=[]}ngOnInit(){this.loadform=!1,this.setHeaderData(),this.getObjects()}setHeaderData(){this.headerData.push(new i.f({label:"Product Name",key:"product_name"}),new i.f({label:"Product Code",key:"product_code"}),new i.f({label:"Sku No",key:"sku_no"}),new i.f({label:"Category",key:"category.label"}),new i.f({label:"Brand\t",key:"brand.label"}));let t=new i.a({edit:{path:"/manage/product/edit/",id:"product_id"},delete:{path:"product/",id:"product_id"}});this.headerData.push(t)}getObjects(){const t={page:this.currentPage};this.searchText&&(t.search=this.searchText),this.productService.getProductList(t).subscribe(t=>{this.loadingState=!1,t.success?(this.objectArray=t.data.list,this.showPagination=!0,this.pagination=this.paginationService.getPager(t.data.pagination.total_page,this.currentPage)):(this.objectArray=[],this.pagination=null)},t=>{this.loadingState=!1,this.objectArray=[],this.pagination=null})}getPage(t){this.currentPage=t,this.getObjects()}searchObject(t){this.searchText=t,this.currentPage=1,this.getObjects()}onReloadEvent(){this.getObjects()}}return t.\u0275fac=function(e){return new(e||t)(a.Mb(o.a),a.Mb(c))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-product-list"]],decls:13,vars:7,consts:[[1,"side-container"],[1,"page-header"],[1,"row","m-0"],[1,"mr-auto"],[1,"ml-3"],[3,"placeholder","text"],[3,"btnName","editData"],[1,"card"],[1,"card-body"],[3,"headerData","rawData","reloadEvent"],[3,"paginationList","currentPage","onPageChange",4,"ngIf"],[3,"paginationList","currentPage","onPageChange"]],template:function(t,e){1&t&&(a.Sb(0,"div",0),a.Sb(1,"div",1),a.Sb(2,"div",2),a.Sb(3,"h2",3),a.Bc(4),a.Rb(),a.Sb(5,"div",4),a.Sb(6,"search-box",5),a.ac("text",(function(t){return e.searchObject(t)})),a.Rb(),a.Rb(),a.Sb(7,"div",4),a.Nb(8,"app-btn-add",6),a.Rb(),a.Rb(),a.Rb(),a.Sb(9,"div",7),a.Sb(10,"div",8),a.Sb(11,"app-table-list",9),a.ac("reloadEvent",(function(){return e.onReloadEvent()})),a.Rb(),a.zc(12,h,1,2,"pagination",10),a.Rb(),a.Rb(),a.Rb()),2&t&&(a.zb(4),a.Cc(e.PageTitle),a.zb(2),a.ic("placeholder","Search Here..."),a.zb(2),a.ic("btnName","Add Product")("editData","/manage/product/add"),a.zb(3),a.ic("headerData",e.headerData)("rawData",e.objectArray),a.zb(1),a.ic("ngIf",e.showPagination))},directives:[s.a,l.a,b.a,u.l,p.a],encapsulation:2}),t})();var g=r("3Pt+"),v=r("tyNb"),f=r("HOh6"),S=r("UaFz"),R=r("ZOsW"),_=r("/SVk");function y(t,e){if(1&t&&a.Nb(0,"span",42),2&t){const t=a.cc();a.ic("innerHTML",t.formErrors.product_code,a.uc)}}const P=function(t){return{"has-error":t}};let w=(()=>{class t{constructor(t,e,r,i){this.router=t,this.activatedRoute=e,this.fb=r,this.productService=i,this.PageTitle="Product",this.editImageUrl=null,this.addNewRadio=!1,this.categoryListArray=[],this.brandListArray=[],this.unitListArray=[],this.loadingState=!1,this.showLoader=!1,this.formErrors={product_code:null,apierror:null},this.isEditing=!1,this.editId=null,this.activatedRoute.snapshot.paramMap.get("id")&&(this.isEditing=!0,this.editId=this.activatedRoute.snapshot.paramMap.get("id")),this.addForm=this.fb.group({product_name:[null,g.t.compose([g.t.required])],product_code:[null,g.t.compose([g.t.required])],category_id:[null,g.t.compose([g.t.required])],description:[null],barcode:[null,g.t.compose([g.t.required])],sku_no:[null,g.t.compose([g.t.required])],brand_id:[null,g.t.compose([g.t.required])],height:[null,g.t.compose([g.t.required])],width:[null,g.t.compose([g.t.required])],depth:[null,g.t.compose([g.t.required])],unit:["cm",g.t.compose([g.t.required])],product_unit:[null,g.t.compose([g.t.required])],total_volume:[0]})}ngOnInit(){this.getMasterData(),this.isEditing&&this.getEditObject()}getMasterData(){this.productService.getProductMasterData().subscribe(t=>{t.success&&(this.categoryListArray=t.data.category,this.brandListArray=t.data.brand,this.unitListArray=t.data.unit)})}getEditObject(){this.productService.getProductById(this.editId).subscribe(t=>{t.success?(this.editImageUrl=t.data.image,this.addForm.patchValue({product_name:t.data.product_name,category_id:t.data.category_id,description:t.data.description,product_code:t.data.product_code,brand_id:t.data.brand_id,barcode:t.data.barcode,sku_no:t.data.sku_no,width:t.data.volume.width,height:t.data.volume.height,depth:t.data.volume.depth,unit:t.data.volume.unit,product_unit:t.data.product_unit,total_volume:t.data.volume.total_volume})):this.router.navigateByUrl("/manage/product")})}fileChangeEvent(t){if(!t.target.files[0].name.match(/(.*?)\.(jpg|jpeg|png|gif|giff)$/))return swal.fire("Invalid File!","Please select valid file ","error"),this.removeFile(),!1;this.removeFile(),this.selectedFile=t.target.files[0]}removeFile(){this.selectedFile=null}submitForm(t){if(t.valid){this.showLoader=!0;const e=new FormData;e.append("product_name",t.value.product_name),e.append("product_unit",t.value.product_unit),e.append("product_code",t.value.product_code),e.append("category_id",t.value.category_id?t.value.category_id:""),e.append("brand_id",t.value.brand_id?t.value.brand_id:""),e.append("description",t.value.description),e.append("barcode",t.value.barcode),e.append("sku_no",t.value.sku_no),e.append("volume",JSON.stringify({width:t.value.width,unit:t.value.unit,height:t.value.height,depth:t.value.depth,total_volume:t.value.total_volume})),this.selectedFile&&e.append("file",this.selectedFile),this.isEditing?this.productService.editProduct(this.editId,e).subscribe(t=>{this.showLoader=!1,t.success?this.router.navigateByUrl("/manage/product"):t.error.map(e=>{e.hasOwnProperty("product_code")?this.formErrors.product_code=e.product_code:this.formErrors.apierror=`* ${t.error}`})},t=>{this.showLoader=!1}):this.productService.addProduct(e).subscribe(t=>{this.showLoader=!1,t.success?this.router.navigateByUrl("/manage/product"):t.error.map(e=>{e.hasOwnProperty("product_code")?this.formErrors.product_code=e.product_code:this.formErrors.apierror=`* ${t.error}`})},t=>{this.showLoader=!1})}}volumeCal(){let t=parseInt(this.addForm.value.height?this.addForm.value.height:1)*parseInt(this.addForm.value.width?this.addForm.value.width:1)*parseInt(this.addForm.value.depth?this.addForm.value.depth:1);this.addForm.patchValue({total_volume:t||0})}}return t.\u0275fac=function(e){return new(e||t)(a.Mb(v.e),a.Mb(v.a),a.Mb(g.e),a.Mb(c))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-add-product"]],decls:106,vars:23,consts:[[1,"side-container"],[1,"page-header"],[1,"row"],[1,"col"],[1,"mr-auto"],[1,"card"],["role","form",3,"formGroup","ngSubmit"],[1,"card-body"],[1,"col-4"],[1,"clearfix"],["data-provides","fileinput",1,"fileinput","text-center","fileinput-new"],[1,"btn-file","mt-3"],[1,"thumbnail","fileinput-new","uploaded-user-image","rounded-circle",2,"width","150px","height","150px"],["alt","",3,"src"],[1,"fileinput-new","btn","btn-dark","btn-sm","btn-file","mt-3"],["id","myimg","accept","image/x-png,image/jpeg","type","file","file-model","myFile",3,"change"],[1,"fileinput-preview","fileinput-exists","thumbnail","uploaded-user-image","rounded-circle",2,"width","150px","height","150px"],[1,"text-center"],["data-dismiss","fileinput",1,"btn","btn-link","btn-sm","fileinput-exists","mt-3",3,"click"],[1,"clearfix","mt-3"],[1,"upload-img-label","text-muted","font-size-12"],[1,"col-8"],[1,"col-6"],[1,"form-group"],[1,"control-label","text-md-right"],[1,""],["type","text","placeholder","",1,"form-control",3,"formControl"],[1,"",3,"ngClass"],["class","help-block",3,"innerHTML",4,"ngIf"],["bindLabel","label","bindValue","value","placeholder","Select Category",3,"formControl","items"],["bindLabel","label","bindValue","value","placeholder","Select Brand",3,"formControl","items"],["number","","type","text","placeholder","Height",1,"form-control",3,"formControl","change"],["aria-hidden","true",1,"la","la-times","mt-2"],["number","","type","text","placeholder","Width",1,"form-control",3,"formControl","change"],["number","","type","text","placeholder","Depth",1,"form-control",3,"formControl","change"],[1,"la","la-equals","mt-2"],["number","","type","text","placeholder","","disabled","",1,"form-control",3,"formControl"],["bindLabel","label","bindValue","value","placeholder","Select Unit",3,"formControl","items"],["rows","2",1,"form-control",3,"formControl"],[1,"text-right","border-top","py-4","mt-5","card-footer"],["type","button","routerLink","/manage/product",1,"btn","btn-light"],["type","submit",1,"btn","btn-secondary","ml-2"],[1,"help-block",3,"innerHTML"]],template:function(t,e){1&t&&(a.Sb(0,"div",0),a.Sb(1,"div",1),a.Sb(2,"div",2),a.Sb(3,"div",3),a.Sb(4,"h2",4),a.Bc(5),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(6,"div",5),a.Sb(7,"form",6),a.ac("ngSubmit",(function(){return e.submitForm(e.addForm)})),a.Sb(8,"div",7),a.Sb(9,"div"),a.Sb(10,"div",2),a.Sb(11,"div",8),a.Sb(12,"div",9),a.Sb(13,"div",10),a.Sb(14,"div",11),a.Sb(15,"div",12),a.Nb(16,"img",13),a.Rb(),a.Nb(17,"div",9),a.Sb(18,"button",14),a.Bc(19," Browse Image "),a.Rb(),a.Sb(20,"input",15),a.ac("change",(function(t){return e.fileChangeEvent(t)})),a.Rb(),a.Nb(21,"div",16),a.Rb(),a.Sb(22,"div",17),a.Sb(23,"a",18),a.ac("click",(function(){return e.removeFile()})),a.Bc(24,"Remove"),a.Rb(),a.Rb(),a.Sb(25,"div",19),a.Sb(26,"p",20),a.Bc(27,"*Recommended Size:"),a.Nb(28,"br"),a.Bc(29,"Minimum 250 * 250"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(30,"div",21),a.Sb(31,"div",2),a.Sb(32,"div",22),a.Sb(33,"div",23),a.Sb(34,"label",24),a.Bc(35,"Product Name "),a.Sb(36,"em"),a.Bc(37,"*"),a.Rb(),a.Rb(),a.Sb(38,"div",25),a.Nb(39,"input",26),a.Rb(),a.Rb(),a.Rb(),a.Sb(40,"div",22),a.Sb(41,"div",23),a.Sb(42,"label",24),a.Bc(43,"Product Code "),a.Sb(44,"em"),a.Bc(45,"*"),a.Rb(),a.Rb(),a.Sb(46,"div",27),a.Nb(47,"input",26),a.zc(48,y,1,1,"span",28),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(49,"div",2),a.Sb(50,"div",22),a.Sb(51,"div",23),a.Sb(52,"label",24),a.Bc(53,"Category "),a.Sb(54,"em"),a.Bc(55,"*"),a.Rb(),a.Rb(),a.Nb(56,"ng-select",29),a.Rb(),a.Rb(),a.Sb(57,"div",22),a.Sb(58,"div",23),a.Sb(59,"label",24),a.Bc(60,"Brand "),a.Sb(61,"em"),a.Bc(62,"*"),a.Rb(),a.Rb(),a.Nb(63,"ng-select",30),a.Rb(),a.Rb(),a.Rb(),a.Sb(64,"div",2),a.Sb(65,"div",22),a.Sb(66,"div",23),a.Sb(67,"label",24),a.Bc(68,"Barcode"),a.Rb(),a.Sb(69,"div",25),a.Nb(70,"input",26),a.Rb(),a.Rb(),a.Rb(),a.Sb(71,"div",22),a.Sb(72,"div",23),a.Sb(73,"label",24),a.Bc(74,"SKU No "),a.Sb(75,"em"),a.Bc(76,"*"),a.Rb(),a.Rb(),a.Sb(77,"div",25),a.Nb(78,"input",26),a.Rb(),a.Rb(),a.Rb(),a.Sb(79,"div",23),a.Sb(80,"label",24),a.Bc(81,"Volume(cm)"),a.Rb(),a.Sb(82,"div",3),a.Sb(83,"div",2),a.Sb(84,"div",3),a.Sb(85,"input",31),a.ac("change",(function(){return e.volumeCal()})),a.Rb(),a.Rb(),a.Nb(86,"i",32),a.Sb(87,"div",3),a.Sb(88,"input",33),a.ac("change",(function(){return e.volumeCal()})),a.Rb(),a.Rb(),a.Nb(89,"i",32),a.Sb(90,"div",3),a.Sb(91,"input",34),a.ac("change",(function(){return e.volumeCal()})),a.Rb(),a.Rb(),a.Nb(92,"i",35),a.Sb(93,"div",3),a.Nb(94,"input",36),a.Rb(),a.Sb(95,"div",3),a.Nb(96,"ng-select",37),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(97,"div",23),a.Sb(98,"label",24),a.Bc(99,"Description"),a.Rb(),a.Nb(100,"textarea",38),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(101,"div",39),a.Sb(102,"button",40),a.Bc(103,"Cancel"),a.Rb(),a.Sb(104,"button",41),a.Bc(105,"Submit"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb()),2&t&&(a.zb(5),a.Ec("",e.isEditing?"Update":"Create"," ",e.PageTitle,""),a.zb(2),a.ic("formGroup",e.addForm),a.zb(9),a.ic("src",e.editImageUrl?e.editImageUrl:"assets/no_image.png",a.vc),a.zb(23),a.ic("formControl",e.addForm.controls.product_name),a.zb(7),a.ic("ngClass",a.mc(21,P,e.formErrors.product_code)),a.zb(1),a.ic("formControl",e.addForm.controls.product_code),a.zb(1),a.ic("ngIf",e.formErrors.product_code),a.zb(8),a.ic("formControl",e.addForm.controls.category_id)("items",e.categoryListArray),a.zb(7),a.ic("formControl",e.addForm.controls.brand_id)("items",e.brandListArray),a.zb(7),a.ic("formControl",e.addForm.controls.barcode),a.zb(8),a.ic("formControl",e.addForm.controls.sku_no),a.zb(7),a.ic("formControl",e.addForm.controls.height),a.zb(3),a.ic("formControl",e.addForm.controls.width),a.zb(3),a.ic("formControl",e.addForm.controls.depth),a.zb(3),a.ic("formControl",e.addForm.controls.total_volume),a.zb(2),a.ic("formControl",e.addForm.controls.product_unit)("items",e.unitListArray),a.zb(4),a.ic("formControl",e.addForm.controls.description))},directives:[g.v,g.p,f.a,g.j,g.c,g.o,g.g,S.a,u.j,u.l,R.a,_.a,v.f],encapsulation:2}),t})();var C=r("g3N6"),F=r("uq2c"),L=r("OTx7"),B=r("PCNd"),I=r("Vr6k"),N=r("KUiO"),x=r("QSzr");r.d(e,"ProductModule",(function(){return k}));const z=[{path:"",component:m,data:{title:"product_list"}},{path:"add",component:w,data:{title:"add_product"}},{path:"edit/:id",component:w,data:{title:"edit_product"}}];let k=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},providers:[c],imports:[[u.b,v.i.forChild(z),L.a,C.a,F.a,g.l,g.s,I.a,B.a,x.a,N.a,R.b]]}),t})()}}]);