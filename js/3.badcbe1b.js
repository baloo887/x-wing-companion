(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"q-pa-md"},[t("q-layout",{staticClass:"shadow-2 rounded-borders",attrs:{view:"hHh Lpr lff"}},[t("q-header",{attrs:{elevated:""}},[t("q-toolbar",[t("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){a.leftDrawerOpen=!a.leftDrawerOpen}}}),t("q-toolbar-title",[a._v("X-Wing companion")])],1)],1),t("q-drawer",{attrs:{"show-if-above":"",width:300,breakpoint:500,bordered:"","content-class":"bg-grey-3"},model:{value:a.leftDrawerOpen,callback:function(e){a.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[t("q-scroll-area",{staticClass:"fit"},[t("q-card",[t("q-card-section",[t("div",{staticClass:"text-h6"},[a._v("Load your squadron")])]),t("q-card-section",[a._v("\n            Enter your squadron id: "),t("br"),t("q-input",{attrs:{label:"Id"},model:{value:a.id,callback:function(e){a.id=e},expression:"id"}}),t("br"),t("q-select",{attrs:{options:a.languages,label:"Language","emit-value":""},model:{value:a.language,callback:function(e){a.language=e},expression:"language"}}),t("br"),t("q-btn",{attrs:{color:"primary","icon-right":"send",label:"Load squad"},on:{click:function(e){return a.getSquadron({id:a.id,language:a.language})}}})],1)],1)],1)],1),t("q-page-container",{staticClass:"container-scroll"},[t("router-view")],1)],1)],1)},r=[],o=t("ded3"),l=t.n(o),d=t("2f62"),s={name:"MainLayout",components:{},methods:l()({},Object(d["b"])({getSquadron:"currentSquadron/getSquadron",getMetadata:"metadata/getMetadata"})),computed:l()({},Object(d["c"])({languages:"metadata/getLanguages"})),data(){return{id:"",language:"en",leftDrawerOpen:!1}},mounted(){this.getMetadata()}},c=s,i=(t("89d3"),t("2877")),u=t("4d5a"),g=t("e359"),b=t("65c6"),p=t("9c40"),f=t("6ac5"),q=t("9404"),w=t("4983"),m=t("f09f"),v=t("a370"),h=t("27f9"),Q=t("ddd8"),O=t("09e3"),k=t("eebe"),C=t.n(k),y=Object(i["a"])(c,n,r,!1,null,null,null);e["default"]=y.exports;C()(y,"components",{QLayout:u["a"],QHeader:g["a"],QToolbar:b["a"],QBtn:p["a"],QToolbarTitle:f["a"],QDrawer:q["a"],QScrollArea:w["a"],QCard:m["a"],QCardSection:v["a"],QInput:h["a"],QSelect:Q["a"],QPageContainer:O["a"]})},"89d3":function(a,e,t){"use strict";var n=t("e87e"),r=t.n(n);r.a},e87e:function(a,e,t){}}]);