function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,a,t){return a&&_defineProperties(e.prototype,a),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"19WJ":function(e,a,t){"use strict";t.r(a);var n,i=t("ofXK"),o=t("FasR"),c=t("fXoL"),r=t("tyNb"),l=t("c8VH"),s=t("Q05f"),d=t("AwSQ"),u=t("jTkZ"),p=t("Eb8l"),h=t("LPFR"),b=((n=function(){function e(a,t,n,i){_classCallCheck(this,e),this.router=a,this.paginationService=t,this.companyService=n,this.dataService=i,this.loadform=!1,this.loadingState=!0,this.objectArray=[],this.pagination=null,this.searchText=null,this.currentPage=1,this.permissionObject=null,this.PageTitle="Company",this.headerData=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.loadform=!1,this.setHeaderData(),this.getObjects()}},{key:"setHeaderData",value:function(){this.headerData.push(new o.e({label:"Company Name",key:"company_name",viewUrl:{path:"/company/edit/",id:"company_id"}}),new o.f({label:"Company Email",key:"company_email"}));var e=new o.a({edit:{path:"/company/edit/",id:"company_id"},view:{path:"/company/view/",id:"company_id"}});this.headerData.push(e)}},{key:"getObjects",value:function(){var e=this,a={page:this.currentPage};this.searchText&&(a.search=this.searchText),this.companyService.getCompanyList(a).subscribe((function(a){e.loadingState=!1,a.success?(e.objectArray=a.data.list,e.pagination=e.paginationService.getPager(a.data.pagination.total_page,e.currentPage)):(e.objectArray=[],e.pagination=null)}),(function(a){e.loadingState=!1,e.objectArray=[],e.pagination=null}))}},{key:"getPage",value:function(e){this.currentPage=e,this.getObjects()}},{key:"searchObject",value:function(e){this.searchText=e,this.currentPage=1,this.getObjects()}},{key:"onReloadEvent",value:function(){this.getObjects()}},{key:"onClickEvent",value:function(e){this.onCompanySelect(e)}},{key:"onCompanySelect",value:function(e){var a=this;this.companyService.selectCompany(e.company_id).subscribe((function(e){e.success?(a.dataService.saveToken(e.data.Token.token),a.dataService.updateCompany(e.data.Company),a.router.navigateByUrl("/dashboard")):(a.objectArray=[],a.pagination=null)}))}}]),e}()).\u0275fac=function(e){return new(e||n)(c.Mb(r.e),c.Mb(l.a),c.Mb(s.a),c.Mb(d.a))},n.\u0275cmp=c.Gb({type:n,selectors:[["app-company-list"]],decls:13,vars:6,consts:[[1,"container-fluid"],[1,"page-header"],[1,"row"],[1,"col","d-flex"],[1,"mr-auto"],[1,"ml-3"],[3,"placeholder","text"],[3,"btnName","editData"],[1,"card"],[1,"card-body"],[3,"headerData","rawData","reloadEvent","clickEvent"]],template:function(e,a){1&e&&(c.Sb(0,"div",0),c.Sb(1,"div",1),c.Sb(2,"div",2),c.Sb(3,"div",3),c.Sb(4,"h2",4),c.Cc(5),c.Rb(),c.Sb(6,"div",5),c.Sb(7,"search-box",6),c.ac("text",(function(e){return a.searchObject(e)})),c.Rb(),c.Rb(),c.Sb(8,"div",5),c.Nb(9,"app-btn-add",7),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(10,"div",8),c.Sb(11,"div",9),c.Sb(12,"app-table-list",10),c.ac("reloadEvent",(function(){return a.onReloadEvent()}))("clickEvent",(function(e){return a.onClickEvent(e)})),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&e&&(c.zb(5),c.Dc(a.PageTitle),c.zb(2),c.jc("placeholder","Search Here..."),c.zb(2),c.jc("btnName","Add Company")("editData","/company/add"),c.zb(3),c.jc("headerData",a.headerData)("rawData",a.objectArray))},directives:[u.a,p.a,h.a],encapsulation:2}),n),y=t("KUiO"),m=t("uq2c"),f=t("g3N6"),v=t("OTx7");t.d(a,"CompanyListModule",(function(){return S}));var g,C=[{path:"",component:b,data:{title:"company_list"}},{path:"add",loadChildren:function(){return Promise.all([t.e(1),t.e(0),t.e(6)]).then(t.bind(null,"SFaS")).then((function(e){return e.CompanyAddModule}))},data:{title:"add_company"}},{path:"edit/:id",loadChildren:function(){return Promise.all([t.e(1),t.e(0),t.e(6)]).then(t.bind(null,"SFaS")).then((function(e){return e.CompanyAddModule}))},data:{title:"edit_company"}},{path:"view/:id",loadChildren:function(){return t.e(34).then(t.bind(null,"ChnI")).then((function(e){return e.CompanyViewModule}))},data:{title:"company_list"}}],S=((g=function e(){_classCallCheck(this,e)}).\u0275mod=c.Kb({type:g}),g.\u0275inj=c.Jb({factory:function(e){return new(e||g)},imports:[[i.b,f.a,m.a,y.a,v.a,r.i.forChild(C)]]}),g)}}]);