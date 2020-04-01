(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{PrgP:function(e,t,a){"use strict";a.r(t);var r=a("ofXK"),s=a("FasR"),i=a("fXoL"),d=a("c8VH"),n=a("n+qO"),l=a("Eb8l"),o=a("LPFR"),h=a("Pbud");let c=(()=>{class e{constructor(e,t){this.paginationService=e,this.salesOrderService=t,this.PageTitle="Manage Sales Order",this.loadform=!1,this.loadingState=!0,this.objectArray=[],this.headerData=[],this.pagination=null,this.searchText=null,this.currentPage=1,this.permissionObject=null}ngOnInit(){this.setHeaderData(),this.loadform=!1,this.getObjects()}setHeaderData(){this.headerData.push(new s.g({label:"Sales Order No",key:"sales_order_no",viewUrl:{path:"/outbound/sales-order/view/",id:"sales_order_id"}}),new s.f({label:"Transfer Order No",key:""}),new s.c({label:"Order Date",key:"sales_order_date"}),new s.f({label:"Client Name",key:"client.label"}),new s.c({label:"Picking Date",key:"sales_order_date"}),new s.d({label:"Status",key:""}));let e=new s.a({edit:{path:"/outbound/sales-order/edit/",id:"sales_order_id"},view:{path:"/outbound/sales-order/view/",id:"sales_order_id"},delete:{path:"sales-order/",id:"sales_order_id"}});this.headerData.push(e)}getObjects(){const e={page:this.currentPage};this.searchText&&(e.search=this.searchText),this.salesOrderService.getSalesOrderList(e).subscribe(e=>{this.loadingState=!1,e.success&&e.data?(this.objectArray=e.data.list,this.pagination=this.paginationService.getPager(e.data.pagination.total_page,this.currentPage)):(this.objectArray=[],this.pagination=null)},e=>{this.loadingState=!1,this.objectArray=[],this.pagination=null})}getPage(e){this.currentPage=e,this.getObjects()}onReloadEvent(){this.getObjects()}searchObject(e){this.searchText=e,this.currentPage=1,this.getObjects()}ngAfterViewChecked(){}}return e.\u0275fac=function(t){return new(t||e)(i.Mb(d.a),i.Mb(n.a))},e.\u0275cmp=i.Gb({type:e,selectors:[["app-sales-order"]],decls:12,vars:7,consts:[[1,"container-fluid"],[1,"page-header"],[1,"row","m-0"],[1,"mr-auto"],[1,"ml-3"],[3,"btnName","editData"],[1,"card"],[1,"card-body"],[3,"headerData","rawData","reloadEvent"],[3,"paginationList","currentPage","onPageChange"]],template:function(e,t){1&e&&(i.Sb(0,"div",0),i.Sb(1,"div",1),i.Sb(2,"div",2),i.Sb(3,"h2",3),i.Bc(4),i.Rb(),i.Nb(5,"div",4),i.Sb(6,"div",4),i.Nb(7,"app-btn-add",5),i.Rb(),i.Rb(),i.Rb(),i.Sb(8,"div",6),i.Sb(9,"div",7),i.Sb(10,"app-table-list",8),i.ac("reloadEvent",(function(){return t.onReloadEvent()})),i.Rb(),i.Sb(11,"pagination",9),i.ac("onPageChange",(function(e){return t.getPage(e)})),i.Rb(),i.Rb(),i.Rb(),i.Rb()),2&e&&(i.zb(4),i.Cc(t.PageTitle),i.zb(3),i.ic("btnName","Add Sales Order")("editData","/outbound/sales-order/add"),i.zb(3),i.ic("headerData",t.headerData)("rawData",t.objectArray),i.zb(1),i.ic("paginationList",t.pagination)("currentPage",t.currentPage))},directives:[l.a,o.a,h.a],encapsulation:2}),e})();var u=a("g3N6"),b=a("uq2c"),p=a("tyNb"),g=a("OTx7"),P=a("QSzr");a.d(t,"SalesOrderModule",(function(){return O}));const S=[{path:"",component:c},{path:"add",loadChildren:()=>Promise.all([a.e(1),a.e(3),a.e(0),a.e(11)]).then(a.bind(null,"6X4u")).then(e=>e.AddSalesOrderModule)},{path:"edit/:id",loadChildren:()=>Promise.all([a.e(1),a.e(3),a.e(0),a.e(11)]).then(a.bind(null,"6X4u")).then(e=>e.AddSalesOrderModule)},{path:"view/:id",loadChildren:()=>Promise.all([a.e(0),a.e(55)]).then(a.bind(null,"ZhrF")).then(e=>e.SalesOrderViewModule)}];let O=(()=>{class e{}return e.\u0275mod=i.Kb({type:e}),e.\u0275inj=i.Jb({factory:function(t){return new(t||e)},providers:[n.a],imports:[[r.b,u.a,b.a,g.a,P.a,p.i.forChild(S)]]}),e})()},"n+qO":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a("AytR"),s=a("fXoL"),i=a("tk/3");let d=(()=>{class e{constructor(e){this.http=e,this.API_URL=r.a.APIEndpoint}getSalesOrderList(e){return this.http.get(`${this.API_URL}/sales-order`,{params:e})}addSalesOrder(e){return this.http.post(`${this.API_URL}/sales-order`,e)}editSalesOrder(e,t){return this.http.put(`${this.API_URL}/sales-order/${e}`,t)}getSalesOrderById(e,t=null){return this.http.get(`${this.API_URL}/sales-order/${e}`,{params:t})}getSalesOrderViewById(e){return this.http.get(`${this.API_URL}/sales-order/${e}/view`)}getSalesOrderMasterData(){return this.http.get(`${this.API_URL}/sales-order/master-data`)}deleteSalesOrder(e){return this.http.delete(`${this.API_URL}/sales-order/${e}`)}getSalesOrderProductList(e=null){return this.http.get(`${this.API_URL}/sales-order-detail`,{params:e})}getSalesOrderProductMasterData(e=null){return this.http.get(`${this.API_URL}/sales-order-detail/master-data`,{params:e})}editSalesOrderProduct(e,t){return this.http.put(`${this.API_URL}/sales-order-detail/${e}`,t)}addSalesOrderProduct(e){return this.http.post(`${this.API_URL}/sales-order-detail`,e)}deleteSalesOrderProduct(e){return this.http.delete(`${this.API_URL}/sales-order-detail/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(s.Wb(i.b))},e.\u0275prov=s.Ib({token:e,factory:e.\u0275fac}),e})()}}]);