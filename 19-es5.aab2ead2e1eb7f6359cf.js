function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"5Uo4":function(t,e,n){"use strict";n.r(e);var a,r,i,o,c=n("ofXK"),l=n("tyNb"),u=n("fXoL"),s=n("Eb8l"),d=function(){return["active"]},b=function(){return{exact:!0}},h=function(){return["unloading"]},p=function(t){return{match:t}},v=function(){return["sorting"]},f=function(){return["put-away"]},y=function(){return["completed"]},g=((a=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=u.Gb({type:a,selectors:[["app-order-tab"]],decls:16,vars:28,consts:[["id","myTab","role","tablist",1,"nav","nav-tabs"],[1,"nav-item"],["data-toggle","tab","routerLink","/inbound/order","role","tab","aria-controls","Pending","aria-selected","true",1,"nav-link",3,"routerLinkActive","routerLinkActiveOptions"],["id","unloading-tab","data-toggle","tab","routerLink","/inbound/order/unloading","role","tab","aria-controls","Unloading","aria-selected","false",1,"nav-link",3,"routerLinkActive","routerLinkActiveOptions"],["id","sorting-tab","data-toggle","tab","routerLink","/inbound/order/sorting","role","tab","aria-controls","Sorting","aria-selected","false",1,"nav-link",3,"routerLinkActive","routerLinkActiveOptions"],["id","putaway-tab","data-toggle","tab","routerLink","/inbound/order/put-away","role","tab","aria-controls","Putaway","aria-selected","false",1,"nav-link",3,"routerLinkActive","routerLinkActiveOptions"],["id","completed-tab","data-toggle","tab","routerLink","/inbound/order/completed","role","tab","aria-controls","Completed","aria-selected","false",1,"nav-link",3,"routerLinkActive","routerLinkActiveOptions"]],template:function(t,e){1&t&&(u.Sb(0,"ul",0),u.Sb(1,"li",1),u.Sb(2,"a",2),u.Bc(3,"Pending"),u.Rb(),u.Rb(),u.Sb(4,"li",1),u.Sb(5,"a",3),u.Bc(6,"Unloading"),u.Rb(),u.Rb(),u.Sb(7,"li",1),u.Sb(8,"a",4),u.Bc(9,"Sorting"),u.Rb(),u.Rb(),u.Sb(10,"li",1),u.Sb(11,"a",5),u.Bc(12,"Putaway"),u.Rb(),u.Rb(),u.Sb(13,"li",1),u.Sb(14,"a",6),u.Bc(15,"Completed"),u.Rb(),u.Rb(),u.Rb()),2&t&&(u.zb(2),u.ic("routerLinkActive",u.lc(10,d))("routerLinkActiveOptions",u.lc(11,b)),u.zb(3),u.ic("routerLinkActive",u.lc(12,d))("routerLinkActiveOptions",u.mc(14,p,u.lc(13,h))),u.zb(3),u.ic("routerLinkActive",u.lc(16,d))("routerLinkActiveOptions",u.mc(18,p,u.lc(17,v))),u.zb(3),u.ic("routerLinkActive",u.lc(20,d))("routerLinkActiveOptions",u.mc(22,p,u.lc(21,f))),u.zb(3),u.ic("routerLinkActive",u.lc(24,d))("routerLinkActiveOptions",u.mc(26,p,u.lc(25,y))))},directives:[l.h,l.g],encapsulation:2}),a),k=[{path:"",component:(r=function(){function t(){_classCallCheck(this,t),this.PageTitle="Manage Order"}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=u.Gb({type:r,selectors:[["app-order-layout"]],decls:16,vars:3,consts:[[1,"container-fluid"],[1,"page-header"],[1,"row","m-0"],[1,"mr-auto"],[1,"ml-3"],[3,"btnName","editData"],[1,"card"],[1,"card-body"],[1,"row"],[1,"col"],[1,"col","mt-1"]],template:function(t,e){1&t&&(u.Sb(0,"div",0),u.Sb(1,"div",1),u.Sb(2,"div",2),u.Sb(3,"h2",3),u.Bc(4),u.Rb(),u.Nb(5,"div",4),u.Sb(6,"div",4),u.Nb(7,"app-btn-add",5),u.Rb(),u.Rb(),u.Rb(),u.Sb(8,"div",6),u.Sb(9,"div",7),u.Sb(10,"div",8),u.Sb(11,"div",9),u.Nb(12,"app-order-tab"),u.Rb(),u.Rb(),u.Sb(13,"div",8),u.Sb(14,"div",10),u.Nb(15,"router-outlet"),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb()),2&t&&(u.zb(4),u.Cc(e.PageTitle),u.zb(3),u.ic("btnName","Add Order")("editData","/inbound/order/add"))},directives:[s.a,g,l.j],encapsulation:2}),r),children:[{path:"",loadChildren:function(){return Promise.all([n.e(0),n.e(33)]).then(n.bind(null,"JKNh")).then((function(t){return t.PendingModule}))},data:{title:"order_list"}},{path:"unloading",loadChildren:function(){return Promise.all([n.e(0),n.e(36)]).then(n.bind(null,"I8N6")).then((function(t){return t.UnloadingModule}))},data:{title:"order_list"}},{path:"sorting",loadChildren:function(){return Promise.all([n.e(0),n.e(35)]).then(n.bind(null,"kA+i")).then((function(t){return t.SortingModule}))},data:{title:"order_list"}},{path:"put-away",loadChildren:function(){return Promise.all([n.e(0),n.e(34)]).then(n.bind(null,"vhXc")).then((function(t){return t.PutAwayModule}))},data:{title:"order_list"}},{path:"completed",loadChildren:function(){return Promise.all([n.e(0),n.e(32)]).then(n.bind(null,"ECqM")).then((function(t){return t.CompletedModule}))},data:{title:"order_list"}}]},{path:"add",loadChildren:function(){return Promise.all([n.e(1),n.e(0),n.e(7)]).then(n.bind(null,"2snN")).then((function(t){return t.AddOrderModule}))},data:{title:"add_order"}},{path:"edit/:id",loadChildren:function(){return Promise.all([n.e(1),n.e(0),n.e(7)]).then(n.bind(null,"2snN")).then((function(t){return t.AddOrderModule}))},data:{title:"edit_order"}},{path:"view/:id",loadChildren:function(){return Promise.resolve().then(n.bind(null,"PPij")).then((function(t){return t.OrderViewModule}))},data:{title:"view_order"}}],A=((i=function t(){_classCallCheck(this,t)}).\u0275mod=u.Kb({type:i}),i.\u0275inj=u.Jb({factory:function(t){return new(t||i)},imports:[[l.i.forChild(k)],l.i]}),i),R=n("g3N6"),S=n("uq2c"),m=((o=function t(){_classCallCheck(this,t)}).\u0275mod=u.Kb({type:o}),o.\u0275inj=u.Jb({factory:function(t){return new(t||o)},imports:[[c.b,l.i]]}),o),P=n("Jvtu"),w=n("PPij");n.d(e,"OrderModule",(function(){return _}));var L,_=((L=function t(){_classCallCheck(this,t)}).\u0275mod=u.Kb({type:L}),L.\u0275inj=u.Jb({factory:function(t){return new(t||L)},imports:[[c.b,A,R.a,S.a,m,P.b,w.OrderViewModule]]}),L)},CKYL:function(t,e,n){"use strict";n.r(e);var a,r=n("ofXK"),i=n("tyNb"),o=n("fXoL"),c=[{path:"order",loadChildren:function(){return Promise.resolve().then(n.bind(null,"5Uo4")).then((function(t){return t.OrderModule}))},data:{title:"order_list"}},{path:"unload",loadChildren:function(){return Promise.resolve().then(n.bind(null,"UQLU")).then((function(t){return t.UnloadModule}))}},{path:"registeration",loadChildren:function(){return Promise.all([n.e(0),n.e(38)]).then(n.bind(null,"LYfm")).then((function(t){return t.RegisterationModule}))}},{path:"put-away",loadChildren:function(){return Promise.all([n.e(0),n.e(37)]).then(n.bind(null,"Pd/b")).then((function(t){return t.PutAwayModule}))}}],l=((a=function t(){_classCallCheck(this,t)}).\u0275mod=o.Kb({type:a}),a.\u0275inj=o.Jb({factory:function(t){return new(t||a)},imports:[[i.i.forChild(c)],i.i]}),a),u=n("5Uo4"),s=n("UQLU"),d=n("Jvtu");n.d(e,"InboundModule",(function(){return h}));var b,h=((b=function t(){_classCallCheck(this,t)}).\u0275mod=o.Kb({type:b}),b.\u0275inj=o.Jb({factory:function(t){return new(t||b)},imports:[[r.b,l,u.OrderModule,s.UnloadModule,d.b]]}),b)},Fg9w:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n("AytR"),r=n("fXoL"),i=n("tk/3"),o=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e,this.API_URL=a.a.APIEndpoint}return _createClass(t,[{key:"getPutAwayList",value:function(t){return this.http.get("".concat(this.API_URL,"/transfer-order"),{params:t})}},{key:"addPutAway",value:function(t){return this.http.post("".concat(this.API_URL,"/transfer-order"),t)}},{key:"editPutAway",value:function(t,e){return this.http.put("".concat(this.API_URL,"/transfer-order/").concat(t),e)}},{key:"getPutAwayById",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.http.get("".concat(this.API_URL,"/transfer-order/").concat(t),{params:e})}},{key:"getMasterData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.http.get("".concat(this.API_URL,"/transfer-order/master-data"),{params:t})}},{key:"getProductByOrderId",value:function(t){return this.http.get("".concat(this.API_URL,"/transfer-order/product/").concat(t))}},{key:"getTransferOrderListById",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.http.get("".concat(this.API_URL,"/transfer-order/list/").concat(t),{params:e})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Wb(i.b))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t}()},HNGx:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n("AytR"),r=n("fXoL"),i=n("tk/3"),o=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e,this.API_URL=a.a.APIEndpoint}return _createClass(t,[{key:"getUnloadList",value:function(t){return this.http.get("".concat(this.API_URL,"/unload/generate"),{params:t})}},{key:"addUnloadGenerate",value:function(t){return this.http.post("".concat(this.API_URL,"/unload/generate"),t)}},{key:"getUnloadGenerateListById",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.http.get("".concat(this.API_URL,"/unload/generate-list/").concat(t),{params:e})}},{key:"getUnloadGeneratedListById",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.http.get("".concat(this.API_URL,"/unload/generated-list/").concat(t),{params:e})}},{key:"getUnloadGeneratedViewById",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.http.get("".concat(this.API_URL,"/unload/generated-view/").concat(t),{params:e})}},{key:"getUnloadReportsDetails",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.http.get("".concat(this.API_URL,"/unload/submit-reports/").concat(t),{params:e})}},{key:"getUnloadSubmitReports",value:function(t,e){return this.http.put("".concat(this.API_URL,"/unload/submit-reports/").concat(t),e)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Wb(i.b))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t}()},PPij:function(t,e,n){"use strict";n.r(e);var a,r=n("ofXK"),i=n("tyNb"),o=n("fXoL"),c=n("jhRr"),l=n("AwSQ"),u=function(){return["active"]},s=function(){return{exact:!0}},d=function(t){return["/inbound/order/view",t]},b=function(){return["unloading"]},h=function(t){return{match:t}},p=function(){return["sorting"]},v=function(){return["putaway"]},f=((a=function(){function t(e,n,a){_classCallCheck(this,t),this.orderService=e,this.dataService=n,this.activatedRoute=a,this.PageTitle="Order Detail ",this.active=!0,this.activatedRoute.snapshot.paramMap.get("id")&&(this.viewId=this.activatedRoute.snapshot.paramMap.get("id"))}return _createClass(t,[{key:"ngOnInit",value:function(){this.getOrderDetails()}},{key:"getOrderDetails",value:function(){var t=this;this.orderService.getOrderViewById(this.viewId).subscribe((function(e){e.success&&e.data&&(t.objectArray=e.data,t.PageTitle=t.PageTitle+"".concat(t.objectArray.po_no),t.dataService.OrderDetailsSubject.next(t.objectArray))}))}},{key:"onPrint",value:function(){window.print()}}]),t}()).\u0275fac=function(t){return new(t||a)(o.Mb(c.a),o.Mb(l.a),o.Mb(i.a))},a.\u0275cmp=o.Gb({type:a,selectors:[["app-order-view"]],decls:30,vars:26,consts:[[1,"container-fluid"],[1,"page-header"],[1,"row","m-0"],[1,"mr-auto"],[1,"ml-3"],["routerLink","/inbound/order",1,"btn","shadow-none","btn-link"],[1,"fa","fa-chevron-left","mr-2","mt-1"],[1,"btn","btn-light",3,"click"],[1,"fa","fa-file-pdf-o","mr-2","mt-1"],[1,"card"],[1,"card-body"],["id","myTab","role","tablist",1,"nav","nav-tabs"],[1,"nav-item"],["id","details-tab","data-toggle","tab","role","tab","aria-controls","details","aria-selected","true",1,"nav-link",3,"routerLinkActive","routerLinkActiveOptions","routerLink"],["id","unloading-tab","data-toggle","tab","routerLink","unloading","role","tab","aria-controls","unloading","aria-selected","false",1,"nav-link",3,"routerLinkActive","routerLinkActiveOptions"],["id","sorting-tab","data-toggle","tab","routerLink","sorting","role","tab","aria-controls","sorting","aria-selected","false",1,"nav-link",3,"routerLinkActive","routerLinkActiveOptions"],["id","putaway-tab","data-toggle","tab","routerLink","putaway","role","tab","aria-controls","putaway","aria-selected","false",1,"nav-link",3,"routerLinkActive","routerLinkActiveOptions"],[1,"tab-content"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"div",2),o.Sb(3,"h2",3),o.Bc(4),o.Rb(),o.Sb(5,"div",4),o.Sb(6,"a",5),o.Nb(7,"i",6),o.Bc(8,"Back to list "),o.Rb(),o.Rb(),o.Sb(9,"div",4),o.Sb(10,"a",7),o.ac("click",(function(){return e.onPrint()})),o.Nb(11,"i",8),o.Bc(12,"Generate PDF "),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(13,"div",9),o.Sb(14,"div",10),o.Sb(15,"ul",11),o.Sb(16,"li",12),o.Sb(17,"a",13),o.Bc(18,"Details"),o.Rb(),o.Rb(),o.Sb(19,"li",12),o.Sb(20,"a",14),o.Bc(21,"Unloading"),o.Rb(),o.Rb(),o.Sb(22,"li",12),o.Sb(23,"a",15),o.Bc(24,"Sorting"),o.Rb(),o.Rb(),o.Sb(25,"li",12),o.Sb(26,"a",16),o.Bc(27,"Putaway"),o.Rb(),o.Rb(),o.Rb(),o.Sb(28,"div",17),o.Nb(29,"router-outlet"),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&t&&(o.zb(4),o.Cc(e.PageTitle),o.zb(13),o.ic("routerLinkActive",o.lc(10,u))("routerLinkActiveOptions",o.lc(11,s))("routerLink",o.mc(12,d,e.viewId)),o.zb(3),o.ic("routerLinkActive",o.lc(14,u))("routerLinkActiveOptions",o.mc(16,h,o.lc(15,b))),o.zb(3),o.ic("routerLinkActive",o.lc(18,u))("routerLinkActiveOptions",o.mc(20,h,o.lc(19,p))),o.zb(3),o.ic("routerLinkActive",o.lc(22,u))("routerLinkActiveOptions",o.mc(24,h,o.lc(23,v))))},directives:[i.h,i.g,i.j],encapsulation:2}),a),y=n("FasR"),g=n("c8VH"),k=n("LPFR"),A=n("Pbud");function R(t,e){if(1&t&&(o.Sb(0,"span"),o.Bc(1),o.Rb()),2&t){var n=o.cc();o.zb(1),o.Dc(" ",null==n.objectArray?null:null==n.objectArray.supplier?null:null==n.objectArray.supplier.address?null:n.objectArray.supplier.address.street_address,", ")}}function S(t,e){if(1&t&&(o.Sb(0,"span"),o.Bc(1),o.Rb()),2&t){var n=o.cc();o.zb(1),o.Dc(" ",null==n.objectArray?null:null==n.objectArray.supplier?null:null==n.objectArray.supplier.address?null:n.objectArray.supplier.address.city,", ")}}function m(t,e){if(1&t&&(o.Sb(0,"span"),o.Bc(1),o.Rb()),2&t){var n=o.cc();o.zb(1),o.Dc(" ",null==n.objectArray?null:null==n.objectArray.supplier?null:null==n.objectArray.supplier.address?null:n.objectArray.supplier.address.state," ")}}function P(t,e){if(1&t&&(o.Sb(0,"span"),o.Bc(1),o.Rb()),2&t){var n=o.cc();o.zb(1),o.Dc("(",null==n.objectArray?null:null==n.objectArray.supplier?null:null==n.objectArray.supplier.address?null:n.objectArray.supplier.address.country_name,") ")}}function w(t,e){if(1&t&&(o.Sb(0,"span"),o.Bc(1),o.Rb()),2&t){var n=o.cc();o.zb(1),o.Dc(" ",null==n.objectArray?null:null==n.objectArray.client?null:null==n.objectArray.client.address?null:n.objectArray.client.address.street_address,", ")}}function L(t,e){if(1&t&&(o.Sb(0,"span"),o.Bc(1),o.Rb()),2&t){var n=o.cc();o.zb(1),o.Dc(" ",null==n.objectArray?null:null==n.objectArray.client?null:null==n.objectArray.client.address?null:n.objectArray.client.address.city,", ")}}function _(t,e){if(1&t&&(o.Sb(0,"span"),o.Bc(1),o.Rb()),2&t){var n=o.cc();o.zb(1),o.Dc(" ",null==n.objectArray?null:null==n.objectArray.client?null:null==n.objectArray.client.address?null:n.objectArray.client.address.state," ")}}function j(t,e){if(1&t&&(o.Sb(0,"span"),o.Bc(1),o.Rb()),2&t){var n=o.cc();o.zb(1),o.Dc("(",null==n.objectArray?null:null==n.objectArray.client?null:null==n.objectArray.client.address?null:n.objectArray.client.address.country_name,") ")}}var C,O=((C=function(){function t(e,n,a,r){_classCallCheck(this,t),this.activatedRoute=e,this.orderService=n,this.dataService=a,this.paginationService=r,this.orderProductListArray=[],this.headerData=[],this.loadingState=!1,this.currentPage=1,this.activatedRoute.snapshot.paramMap.get("id")&&(this.viewId=this.activatedRoute.snapshot.paramMap.get("id"))}return _createClass(t,[{key:"ngOnInit",value:function(){this.getOrderDetails(),this.setHeaderData(),this.getOrderProductList()}},{key:"setHeaderData",value:function(){this.headerData.push(new y.f({label:"SKU No #",key:"sku_no"}),new y.f({label:"Product",key:"product_name"}),new y.f({label:"Order Qty",key:"qty"}))}},{key:"getOrderDetails",value:function(){var t=this;this.subscription=this.dataService.OrderDetails.subscribe((function(e){e&&(t.objectArray=e)}))}},{key:"getPage",value:function(t){this.currentPage=t,this.currentPage=1,this.getOrderProductList()}},{key:"getOrderProductList",value:function(){var t=this;this.orderService.getOrderProductList({order_id:this.viewId}).subscribe((function(e){e.success&&e.data?(t.orderProductListArray=e.data.list,t.pagination=t.paginationService.getPager(e.data.pagination.total_page,t.currentPage)):(t.orderProductListArray=[],t.loadingState=!1,t.pagination=null)}),(function(e){t.orderProductListArray=[],t.loadingState=!1,t.pagination=null}))}},{key:"ngOnDestroy",value:function(){this.subscription&&this.subscription.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||C)(o.Mb(i.a),o.Mb(c.a),o.Mb(l.a),o.Mb(g.a))},C.\u0275cmp=o.Gb({type:C,selectors:[["app-order-details"]],decls:76,vars:18,consts:[["id","details","role","tabpanel","aria-labelledby","details-tab",1,"tab-pane","fade","show","active"],[1,"row","mt-4"],[1,"col-md-4"],[1,"text-muted","mb-1","font-weight-bold"],[1,"row"],[1,"col"],[1,"mt-5","border-bottom","pb-2"],[1,"row","mt-3"],[1,"col-md-7"],[4,"ngIf"],[1,"row","mt-2"],[1,"col-md-12","mb-3"],[3,"headerData","rawData"],[3,"paginationList","currentPage","onPageChange"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"div",2),o.Sb(3,"label",3),o.Bc(4,"Purchase Order Number"),o.Rb(),o.Sb(5,"div"),o.Bc(6),o.Rb(),o.Rb(),o.Sb(7,"div",2),o.Sb(8,"label",3),o.Bc(9,"PO Date"),o.Rb(),o.Sb(10,"div"),o.Bc(11),o.dc(12,"date"),o.Rb(),o.Rb(),o.Sb(13,"div",2),o.Sb(14,"label",3),o.Bc(15,"Receiving Date & Time"),o.Rb(),o.Sb(16,"div"),o.Bc(17,"-"),o.Rb(),o.Rb(),o.Rb(),o.Sb(18,"div",1),o.Sb(19,"div",2),o.Sb(20,"label",3),o.Bc(21,"MO"),o.Rb(),o.Sb(22,"div"),o.Bc(23,"-"),o.Rb(),o.Rb(),o.Sb(24,"div",2),o.Sb(25,"label",3),o.Bc(26,"Case #"),o.Rb(),o.Sb(27,"div"),o.Bc(28,"-"),o.Rb(),o.Rb(),o.Rb(),o.Sb(29,"div",4),o.Sb(30,"div",5),o.Sb(31,"div",6),o.Sb(32,"h5"),o.Bc(33,"Supplier Details"),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(34,"div",7),o.Sb(35,"div",2),o.Sb(36,"label",3),o.Bc(37,"Supplier Name"),o.Rb(),o.Sb(38,"div"),o.Bc(39),o.Rb(),o.Rb(),o.Sb(40,"div",8),o.Sb(41,"label",3),o.Bc(42,"Address"),o.Rb(),o.Sb(43,"div"),o.zc(44,R,2,1,"span",9),o.zc(45,S,2,1,"span",9),o.zc(46,m,2,1,"span",9),o.zc(47,P,2,1,"span",9),o.Rb(),o.Rb(),o.Rb(),o.Sb(48,"div",4),o.Sb(49,"div",5),o.Sb(50,"div",6),o.Sb(51,"h5"),o.Bc(52,"Client Details"),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(53,"div",10),o.Sb(54,"div",2),o.Sb(55,"label",3),o.Bc(56,"Client Name"),o.Rb(),o.Sb(57,"div"),o.Bc(58),o.Rb(),o.Rb(),o.Sb(59,"div",8),o.Sb(60,"label",3),o.Bc(61,"Address"),o.Rb(),o.Sb(62,"div"),o.zc(63,w,2,1,"span",9),o.zc(64,L,2,1,"span",9),o.zc(65,_,2,1,"span",9),o.zc(66,j,2,1,"span",9),o.Rb(),o.Rb(),o.Rb(),o.Sb(67,"div",4),o.Sb(68,"div",5),o.Sb(69,"div",6),o.Sb(70,"h5"),o.Bc(71,"Order Product List"),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(72,"div",10),o.Sb(73,"div",11),o.Nb(74,"app-table-list",12),o.Sb(75,"pagination",13),o.ac("onPageChange",(function(t){return e.getPage(t)})),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&t&&(o.zb(6),o.Cc(null==e.objectArray?null:e.objectArray.po_no),o.zb(5),o.Cc(o.ec(12,16,null==e.objectArray?null:e.objectArray.po_date)),o.zb(28),o.Cc(null==e.objectArray?null:null==e.objectArray.supplier?null:e.objectArray.supplier.supplier_name),o.zb(5),o.ic("ngIf",null==e.objectArray?null:null==e.objectArray.supplier?null:null==e.objectArray.supplier.address?null:e.objectArray.supplier.address.street_address),o.zb(1),o.ic("ngIf",null==e.objectArray?null:null==e.objectArray.supplier?null:null==e.objectArray.supplier.address?null:e.objectArray.supplier.address.city),o.zb(1),o.ic("ngIf",null==e.objectArray?null:null==e.objectArray.supplier?null:null==e.objectArray.supplier.address?null:e.objectArray.supplier.address.state),o.zb(1),o.ic("ngIf",null==e.objectArray?null:null==e.objectArray.supplier?null:null==e.objectArray.supplier.address?null:e.objectArray.supplier.address.country_name),o.zb(11),o.Cc(null==e.objectArray?null:null==e.objectArray.client?null:e.objectArray.client.client_name),o.zb(5),o.ic("ngIf",null==e.objectArray?null:null==e.objectArray.supplier?null:null==e.objectArray.supplier.address?null:e.objectArray.supplier.address.street_address),o.zb(1),o.ic("ngIf",null==e.objectArray?null:null==e.objectArray.client?null:null==e.objectArray.client.address?null:e.objectArray.client.address.city),o.zb(1),o.ic("ngIf",null==e.objectArray?null:null==e.objectArray.client?null:null==e.objectArray.client.address?null:e.objectArray.client.address.state),o.zb(1),o.ic("ngIf",null==e.objectArray?null:null==e.objectArray.client?null:null==e.objectArray.client.address?null:e.objectArray.client.address.country_name),o.zb(8),o.ic("headerData",e.headerData)("rawData",e.orderProductListArray),o.zb(1),o.ic("paginationList",e.pagination)("currentPage",e.currentPage))},directives:[r.l,k.a,A.a],pipes:[r.d],encapsulation:2}),C),D=n("HNGx"),I=function(t){return["/inbound/unload/generate/",t]};function U(t,e){if(1&t&&(o.Sb(0,"button",4),o.Bc(1," Generate Unloading"),o.Rb()),2&t){var n=o.cc();o.ic("routerLink",o.mc(1,I,n.viewId))}}var M,z,B,N,G,T=((M=function(){function t(e,n,a,r,i){var o=this;_classCallCheck(this,t),this.dataService=e,this.paginationService=n,this.unloadService=a,this.location=r,this.activatedRoute=i,this.orderProductListArray=[],this.headerData=[],this.loadingState=!1,this.isGenerate=!1,this.currentPage=1,this.activatedRoute.parent.params.subscribe((function(t){o.viewId=t.id})),this.subscription=this.dataService.OrderDetails.subscribe((function(t){t&&(o.objectArray=t)}))}return _createClass(t,[{key:"ngOnInit",value:function(){this.setHeaderData(),this.getOrderProductList()}},{key:"back",value:function(){this.location.back()}},{key:"setHeaderData",value:function(){this.headerData.push(new y.f({label:"UN NO",key:"unload_index"}),new y.f({label:"SKU no",key:"sku_no"}),new y.f({label:"Product",key:"product_name"}),new y.f({label:"Order Qty",key:"order_qty"}),new y.f({label:"Receive Qty",key:"received_qty"}),new y.f({label:"Damaged Qty",key:"damaged_qty"}),new y.f({label:"Missing Qty",key:"missing_qty"}),new y.f({label:"Status",key:"status.label"}));var t=new y.a({edit:{path:"/inbound/unload/view/",id:"unload_id",class:"fa-eye",showText:"View"},view:{path:"/inbound/unload/generate-unloading/",id:"unload_id",class:"fa-file-pdf-o",showText:"Submit Report"}});this.headerData.push(t)}},{key:"onReloadEvent",value:function(){this.getOrderProductList()}},{key:"getOrderProductList",value:function(){var t=this;this.unloadService.getUnloadGeneratedListById(this.viewId).subscribe((function(e){e.success&&e.data?(t.orderProductListArray=e.data.list?e.data.list:[],t.isGenerate=e.data.is_generate):(t.orderProductListArray=[],t.loadingState=!1,t.isGenerate=!1,t.pagination=null)}),(function(e){t.orderProductListArray=[],t.isGenerate=!1,t.loadingState=!1,t.pagination=null}))}},{key:"ngOnDestroy",value:function(){this.subscription&&this.subscription.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||M)(o.Mb(l.a),o.Mb(g.a),o.Mb(D.a),o.Mb(r.h),o.Mb(i.a))},M.\u0275cmp=o.Gb({type:M,selectors:[["app-order-unloding"]],decls:4,vars:3,consts:[[1,"row","mt-4"],[1,"col"],["class","btn btn-primary",3,"routerLink",4,"ngIf"],[3,"headerData","rawData","reloadEvent"],[1,"btn","btn-primary",3,"routerLink"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.zc(2,U,2,3,"button",2),o.Rb(),o.Rb(),o.Sb(3,"app-table-list",3),o.ac("reloadEvent",(function(){return e.onReloadEvent()})),o.Rb()),2&t&&(o.zb(2),o.ic("ngIf",e.isGenerate),o.zb(1),o.ic("headerData",e.headerData)("rawData",e.orderProductListArray))},directives:[r.l,k.a,i.f],encapsulation:2}),M),E=n("Sodd"),x=((z=function(){function t(e,n,a,r,i){var o=this;_classCallCheck(this,t),this.dataService=e,this.paginationService=n,this.ProductRegistrationService=a,this.location=r,this.activatedRoute=i,this.orderProductListArray=[],this.headerData=[],this.loadingState=!1,this.isGenerate=!1,this.currentPage=1,this.activatedRoute.parent.params.subscribe((function(t){o.viewId=t.id})),this.subscription=this.dataService.OrderDetails.subscribe((function(t){t&&(o.objectArray=t)}))}return _createClass(t,[{key:"ngOnInit",value:function(){this.setHeaderData(),this.getOrderProductList()}},{key:"back",value:function(){this.location.back()}},{key:"setHeaderData",value:function(){this.headerData.push(new y.f({label:"SKU no",key:"sku_no"}),new y.f({label:"Product Name",key:"product_name"}),new y.f({label:"Receive Qty",key:"received_qty"}),new y.f({label:"Pending Qty",key:"missing_qty"}));var t=new y.a({view:{path:"/inbound/registeration/add/",id:"order_id",showText:"Register Product"}});this.headerData.push(t)}},{key:"onReloadEvent",value:function(){this.getOrderProductList()}},{key:"getOrderProductList",value:function(){var t=this;this.ProductRegistrationService.getSortingList(this.viewId).subscribe((function(e){e.success&&e.data?(t.orderProductListArray=e.data.list?e.data.list:[],t.setOrderId(),t.isGenerate=e.data.is_generate):(t.orderProductListArray=[],t.loadingState=!1,t.isGenerate=!1,t.pagination=null)}),(function(e){t.orderProductListArray=[],t.isGenerate=!1,t.loadingState=!1,t.pagination=null}))}},{key:"setOrderId",value:function(){var t=this;this.orderProductListArray.filter((function(e){e.order_id=t.viewId}))}},{key:"ngOnDestroy",value:function(){this.subscription&&this.subscription.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||z)(o.Mb(l.a),o.Mb(g.a),o.Mb(E.a),o.Mb(r.h),o.Mb(i.a))},z.\u0275cmp=o.Gb({type:z,selectors:[["app-order-sorting"]],decls:5,vars:2,consts:[[1,"row","mt-4"],[1,"col"],["routerLink","",1,"btn","btn-primary"],[3,"headerData","rawData","reloadEvent"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"button",2),o.Bc(3," Generate Sorting List"),o.Rb(),o.Rb(),o.Rb(),o.Sb(4,"app-table-list",3),o.ac("reloadEvent",(function(){return e.onReloadEvent()})),o.Rb()),2&t&&(o.zb(4),o.ic("headerData",e.headerData)("rawData",e.orderProductListArray))},directives:[i.f,k.a],encapsulation:2}),z),K=n("Fg9w"),H=function(t){return["/inbound/put-away/add",t]},Q=[{path:"",component:f,children:[{path:"",component:O,data:{title:"view_order"}},{path:"unloading",component:T,data:{title:"view_order"}},{path:"sorting",component:x,data:{title:"view_order"}},{path:"putaway",component:(N=function(){function t(e,n,a,r,i){var o=this;_classCallCheck(this,t),this.dataService=e,this.paginationService=n,this.PutAwayService=a,this.location=r,this.activatedRoute=i,this.orderProductListArray=[],this.headerData=[],this.loadingState=!1,this.isGenerate=!1,this.currentPage=1,this.activatedRoute.parent.params.subscribe((function(t){o.viewId=t.id})),this.subscription=this.dataService.OrderDetails.subscribe((function(t){t&&(o.objectArray=t)}))}return _createClass(t,[{key:"ngOnInit",value:function(){this.setHeaderData(),this.getOrderProductList()}},{key:"back",value:function(){this.location.back()}},{key:"setHeaderData",value:function(){this.headerData.push(new y.f({label:"Transfer Order No",key:"transfer_order_no"}),new y.f({label:"Case No",key:"case_no"}),new y.f({label:"Location",key:""}),new y.f({label:"Article",key:""}),new y.f({label:"Putaway Quantity",key:"put_away.put_away_qty"}),new y.f({label:"Pick Quantity",key:"put_away.pick_qty"}),new y.f({label:"Status",key:"status.label"}))}},{key:"onReloadEvent",value:function(){this.getOrderProductList()}},{key:"getOrderProductList",value:function(){var t=this;this.PutAwayService.getTransferOrderListById(this.viewId).subscribe((function(e){e.success&&e.data.length>0?(t.orderProductListArray=e.data?e.data:[],t.orderProductListArray.length>0&&t.setOrderId(),t.isGenerate=e.data.is_generate):(t.orderProductListArray=[],t.loadingState=!1,t.isGenerate=!1,t.pagination=null)}),(function(e){t.orderProductListArray=[],t.isGenerate=!1,t.loadingState=!1,t.pagination=null}))}},{key:"setOrderId",value:function(){var t=this;this.orderProductListArray.filter((function(e){e.order_id=t.viewId}))}},{key:"ngOnDestroy",value:function(){this.subscription&&this.subscription.unsubscribe()}}]),t}(),N.\u0275fac=function(t){return new(t||N)(o.Mb(l.a),o.Mb(g.a),o.Mb(K.a),o.Mb(r.h),o.Mb(i.a))},N.\u0275cmp=o.Gb({type:N,selectors:[["app-order-putaway"]],decls:5,vars:5,consts:[[1,"row","mt-4"],[1,"col"],[1,"btn","btn-primary",3,"routerLink"],[3,"headerData","rawData","reloadEvent"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"button",2),o.Bc(3,"Generate Transfer Order"),o.Rb(),o.Rb(),o.Rb(),o.Sb(4,"app-table-list",3),o.ac("reloadEvent",(function(){return e.onReloadEvent()})),o.Rb()),2&t&&(o.zb(2),o.ic("routerLink",o.mc(3,H,e.viewId)),o.zb(2),o.ic("headerData",e.headerData)("rawData",e.orderProductListArray))},directives:[i.f,k.a],encapsulation:2}),N),data:{title:"view_order"}},{path:"completed",component:(B=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),B.\u0275fac=function(t){return new(t||B)},B.\u0275cmp=o.Gb({type:B,selectors:[["app-order-completed"]],decls:2,vars:0,template:function(t,e){1&t&&(o.Sb(0,"p"),o.Bc(1,"order-completed works!"),o.Rb())},encapsulation:2}),B),data:{title:"view_order"}}]}],J=((G=function t(){_classCallCheck(this,t)}).\u0275mod=o.Kb({type:G}),G.\u0275inj=o.Jb({factory:function(t){return new(t||G)},imports:[[i.i.forChild(Q)],i.i]}),G),X=n("QSzr"),q=n("Jvtu"),V=n("OTx7");n.d(e,"OrderViewModule",(function(){return W}));var F,W=((F=function t(){_classCallCheck(this,t)}).\u0275mod=o.Kb({type:F}),F.\u0275inj=o.Jb({factory:function(t){return new(t||F)},providers:[c.a,E.a,K.a],imports:[[r.b,J,q.b,X.a,V.a]]}),F)},Sodd:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n("AytR"),r=n("fXoL"),i=n("tk/3"),o=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e,this.API_URL=a.a.APIEndpoint}return _createClass(t,[{key:"getProductRegistrationList",value:function(t){return this.http.get("".concat(this.API_URL,"/sorting"),{params:t})}},{key:"addProductRegistration",value:function(t){return this.http.post("".concat(this.API_URL,"/sorting"),t)}},{key:"editProductRegistration",value:function(t,e){return this.http.put("".concat(this.API_URL,"/sorting/").concat(t),e)}},{key:"getProductRegistrationById",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.http.get("".concat(this.API_URL,"/sorting/").concat(t),{params:e})}},{key:"getMasterData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.http.get("".concat(this.API_URL,"/sorting/drop-down"),{params:t})}},{key:"getSortingList",value:function(t){return this.http.get("".concat(this.API_URL,"/sorting/get-list/").concat(t))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Wb(i.b))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t}()},UQLU:function(t,e,n){"use strict";n.r(e);var a=n("ofXK"),r=n("FasR"),i=n("fXoL"),o=n("c8VH"),c=n("HNGx"),l=n("jTkZ"),u=n("Eb8l"),s=n("LPFR"),d=n("Pbud");function b(t,e){if(1&t){var n=i.Tb();i.Sb(0,"pagination",12),i.ac("onPageChange",(function(t){return i.tc(n),i.cc().getPage(t)})),i.Rb()}if(2&t){var a=i.cc();i.ic("paginationList",a.pagination)("currentPage",a.currentPage)}}var h,p=((h=function(){function t(e,n){_classCallCheck(this,t),this.paginationService=e,this.UnloadService=n,this.PageTitle="Manage Unload",this.loadform=!1,this.loadingState=!0,this.objectArray=[],this.pagination=null,this.searchText=null,this.currentPage=1,this.permissionObject=null,this.showPagination=!1,this.headerData=[]}return _createClass(t,[{key:"ngOnInit",value:function(){this.loadform=!1,this.setHeaderData(),this.getObjects()}},{key:"setHeaderData",value:function(){this.headerData.push(new r.f({label:"Order No",key:"order.po_no"}),new r.f({label:"Client Name",key:"client.label"}),new r.f({label:"Supplier Name",key:"supplier_id.label"}),new r.c({label:"Order Date",key:"order.po_date"}),new r.c({label:"Receipt Date",key:"receipt_date"}),new r.f({label:"Delievery Name",key:"delivery_name"}),new r.f({label:"Receipt Name",key:"receiver_name"}));var t=new r.a({edit:{path:"/inbound/unload/generate/",id:"unload_id"},view:{path:"/inbound/unload/view/",id:"unload_id"},delete:{path:"unload/generate/",id:"unload_id"}});this.headerData.push(t)}},{key:"getObjects",value:function(){var t=this,e={page:this.currentPage};this.searchText&&(e.search=this.searchText),this.UnloadService.getUnloadList(e).subscribe((function(e){t.loadingState=!1,e.success?(t.objectArray=e.data.list?e.data.list:[],t.showPagination=!0,t.pagination=t.paginationService.getPager(e.data.pagination.total_page,t.currentPage)):(t.objectArray=[],t.pagination=null)}),(function(e){t.loadingState=!1,t.objectArray=[],t.pagination=null}))}},{key:"getPage",value:function(t){this.currentPage=t,this.getObjects()}},{key:"searchObject",value:function(t){this.searchText=t,this.currentPage=1,this.getObjects()}},{key:"onReloadEvent",value:function(){this.getObjects()}}]),t}()).\u0275fac=function(t){return new(t||h)(i.Mb(o.a),i.Mb(c.a))},h.\u0275cmp=i.Gb({type:h,selectors:[["app-unload"]],decls:14,vars:7,consts:[[1,"container-fluid"],[1,"page-header"],[1,"row"],[1,"col","d-flex"],[1,"mr-auto"],[1,"ml-3"],[3,"placeholder","text"],[3,"btnName","editData"],[1,"card"],[1,"card-body"],[3,"headerData","rawData","reloadEvent"],[3,"paginationList","currentPage","onPageChange",4,"ngIf"],[3,"paginationList","currentPage","onPageChange"]],template:function(t,e){1&t&&(i.Sb(0,"div",0),i.Sb(1,"div",1),i.Sb(2,"div",2),i.Sb(3,"div",3),i.Sb(4,"h2",4),i.Bc(5),i.Rb(),i.Sb(6,"div",5),i.Sb(7,"search-box",6),i.ac("text",(function(t){return e.searchObject(t)})),i.Rb(),i.Rb(),i.Sb(8,"div",5),i.Nb(9,"app-btn-add",7),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Sb(10,"div",8),i.Sb(11,"div",9),i.Sb(12,"app-table-list",10),i.ac("reloadEvent",(function(){return e.onReloadEvent()})),i.Rb(),i.zc(13,b,1,2,"pagination",11),i.Rb(),i.Rb(),i.Rb()),2&t&&(i.zb(5),i.Cc(e.PageTitle),i.zb(2),i.ic("placeholder","Search Here..."),i.zb(2),i.ic("btnName","Add Unload")("editData","/inbound/unload/generate"),i.zb(3),i.ic("headerData",e.headerData)("rawData",e.objectArray),i.zb(1),i.ic("ngIf",e.showPagination))},directives:[l.a,u.a,s.a,a.l,d.a],encapsulation:2}),h),v=n("g3N6"),f=n("uq2c"),y=n("tyNb"),g=n("QSzr"),k=n("OTx7");n.d(e,"UnloadModule",(function(){return S}));var A,R=[{path:"",component:p,data:{title:"unload_list"}},{path:"generate",loadChildren:function(){return n.e(39).then(n.bind(null,"X8pz")).then((function(t){return t.GenerateModule}))},data:{title:"add_unload"}},{path:"view",loadChildren:function(){return n.e(40).then(n.bind(null,"9RdM")).then((function(t){return t.UnloadingViewModule}))},data:{title:"view_unload"}},{path:"generate-unloading",loadChildren:function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,"LhZO")).then((function(t){return t.GenerateUnloadingModule}))},data:{title:"add_unload"}}],S=((A=function t(){_classCallCheck(this,t)}).\u0275mod=i.Kb({type:A}),A.\u0275inj=i.Jb({factory:function(t){return new(t||A)},providers:[c.a],imports:[[a.b,v.a,f.a,g.a,k.a,y.i.forChild(R)]]}),A)}}]);