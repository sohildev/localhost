(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"Pd/b":function(t,e,a){"use strict";a.r(e);var i=a("ofXK"),n=a("tyNb"),r=a("g3N6"),s=a("uq2c"),o=a("OTx7"),d=a("QSzr"),c=a("PCNd"),h=a("FasR"),l=a("fXoL"),b=a("c8VH"),u=a("Fg9w"),g=a("jTkZ"),p=a("Eb8l"),w=a("LPFR"),y=a("Pbud");function P(t,e){if(1&t){const t=l.Tb();l.Sb(0,"pagination",12),l.ac("onPageChange",(function(e){return l.uc(t),l.cc().getPage(e)})),l.Rb()}if(2&t){const t=l.cc();l.jc("paginationList",t.pagination)("currentPage",t.currentPage)}}let f=(()=>{class t{constructor(t,e){this.paginationService=t,this.putawayService=e,this.PageTitle="Manage Putaway",this.loadform=!1,this.loadingState=!0,this.objectArray=[],this.pagination=null,this.searchText=null,this.currentPage=1,this.permissionObject=null,this.showPagination=!1,this.headerData=[]}ngOnInit(){this.loadform=!1,this.setHeaderData(),this.getObjects()}setHeaderData(){this.headerData.push(new h.e({label:"Order Number",key:"order.po_no"}),new h.e({label:"Transfer Order No",key:"transfer_order_no"}),new h.e({label:"SKU",key:"sku_no.sku_no"}),new h.e({label:"Bin Code",key:"put_away.bin_code"}),new h.e({label:"Bin Tag Id",key:"put_away.bin_tag_id"}),new h.e({label:"Putaway Qty",key:"put_away.put_away_qty"}));let t=new h.a({edit:{path:"/inbound/put-away/edit/",id:"transfer_order_id"},delete:{path:"transfer-order/",id:"transfer_order_id"}});this.headerData.push(t)}getObjects(){const t={page:this.currentPage};this.searchText&&(t.search=this.searchText),this.putawayService.getPutAwayList(t).subscribe(t=>{this.loadingState=!1,t.success?(this.objectArray=t.data.list?t.data.list:[],this.showPagination=!0,this.pagination=this.paginationService.getPager(t.data.pagination.total_page,this.currentPage)):(this.objectArray=[],this.pagination=null)},t=>{this.loadingState=!1,this.objectArray=[],this.pagination=null})}getPage(t){this.currentPage=t,this.getObjects()}searchObject(t){this.searchText=t,this.currentPage=1,this.getObjects()}onReloadEvent(){this.getObjects()}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(b.a),l.Mb(u.a))},t.\u0275cmp=l.Gb({type:t,selectors:[["app-put-away"]],decls:14,vars:7,consts:[[1,"container-fluid"],[1,"page-header"],[1,"row"],[1,"col","d-flex"],[1,"mr-auto"],[1,"ml-3"],[3,"placeholder","text"],[3,"btnName","editData"],[1,"card"],[1,"card-body"],[3,"headerData","rawData","reloadEvent"],[3,"paginationList","currentPage","onPageChange",4,"ngIf"],[3,"paginationList","currentPage","onPageChange"]],template:function(t,e){1&t&&(l.Sb(0,"div",0),l.Sb(1,"div",1),l.Sb(2,"div",2),l.Sb(3,"div",3),l.Sb(4,"h2",4),l.Cc(5),l.Rb(),l.Sb(6,"div",5),l.Sb(7,"search-box",6),l.ac("text",(function(t){return e.searchObject(t)})),l.Rb(),l.Rb(),l.Sb(8,"div",5),l.Nb(9,"app-btn-add",7),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(10,"div",8),l.Sb(11,"div",9),l.Sb(12,"app-table-list",10),l.ac("reloadEvent",(function(){return e.onReloadEvent()})),l.Rb(),l.Ac(13,P,1,2,"pagination",11),l.Rb(),l.Rb(),l.Rb()),2&t&&(l.zb(5),l.Dc(e.PageTitle),l.zb(2),l.jc("placeholder","Search Here..."),l.zb(2),l.jc("btnName","Add Putaway")("editData","/inbound/put-away/add"),l.zb(3),l.jc("headerData",e.headerData)("rawData",e.objectArray),l.zb(1),l.jc("ngIf",e.showPagination))},directives:[g.a,p.a,w.a,i.l,y.a],encapsulation:2}),t})();a.d(e,"PutAwayModule",(function(){return _}));const S=[{path:"",component:f,data:{title:"product_register_list"}},{path:"add",loadChildren:()=>Promise.all([a.e(1),a.e(0),a.e(8)]).then(a.bind(null,"Sg2+")).then(t=>t.AddPutAwayModule),data:{title:"add_product_register"}},{path:"edit",loadChildren:()=>Promise.all([a.e(1),a.e(0),a.e(8)]).then(a.bind(null,"Sg2+")).then(t=>t.AddPutAwayModule),data:{title:"edit_product_register"}}];let _=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(e){return new(e||t)},providers:[u.a],imports:[[i.b,n.i.forChild(S),o.a,r.a,s.a,d.a,c.a]]}),t})()}}]);