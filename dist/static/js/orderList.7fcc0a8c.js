(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["orderList"],{6511:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"edition-center"},[s("div",{staticClass:"Blazon same",on:{click:function(e){return t.goRouter("select-blazon")}}},[s("p",{staticClass:"title"},[t._v("Blazon")]),t._v(" "),s("p",[t._v("Suggest to add text description")])]),t._v(" "),s("div",{staticClass:"Inscription same",on:{click:function(e){return t.goRouter("select-Inscription")}}},[s("p",{staticClass:"title"},[t._v("Inscription")]),t._v(" "),s("p",[t._v("Suggest to add text description")])]),t._v(" "),t.isNotWallets?s("div",[s("testing-wallet"),t._v(" "),s("div",{staticClass:"marking"})],1):t._e()])])},i=[],a=s("5530"),o=s("b390"),c=s("2f62"),l={name:"Home",components:{TestingWallet:o["a"]},computed:Object(a["a"])({},Object(c["c"])({imageItems:function(t){return t.app.imageItems}})),data:function(){return{isNotWallets:!1}},created:function(){},mounted:function(){},methods:{goRouter:function(t){0!==this.imageItems.length?this.$router.push({path:t}):this.$message("Please link Wallet")}}},r=l,u=(s("a318"),s("2877")),d=Object(u["a"])(r,n,i,!1,null,null,null);e["default"]=d.exports},a318:function(t,e,s){"use strict";s("b420")},b420:function(t,e,s){}}]);