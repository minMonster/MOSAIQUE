(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["EditBlazon"],{1512:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edit-blazon"},[s("div",{staticClass:"edition-center"},[s("div",{staticClass:"left",staticStyle:{position:"relative"}},[2===t.status?s("el-image",{staticClass:"minted-image",staticStyle:{width:"431px",position:"relative"},attrs:{src:t.mintedImage}}):t._e(),t._v(" "),0===t.status||1===t.status?s("el-image",{ref:"master",staticStyle:{width:"431px",position:"relative"},attrs:{src:t.masterSrc}}):t._e(),t._v(" "),0===t.status||1===t.status?s("el-image",{directives:[{name:"drag",rawName:"v-drag",value:0===t.status,expression:"status===0"}],ref:"blazon",staticStyle:{left:"0",top:"230px",position:"absolute",width:"431px"},style:{transform:"scale("+t.blazonZoom+") rotateZ("+t.blazonDeg+"deg)"},attrs:{src:t.blazonSrc},on:{mousemove:t.bMousemove}}):t._e(),t._v(" "),0===t.status?s("div",{staticClass:"options"},[s("i",{staticClass:"el-icon-circle-plus",on:{click:function(e){return t.optionClick("plus")}}}),t._v(" "),s("i",{staticClass:"el-icon-remove",on:{click:function(e){return t.optionClick("remove")}}}),t._v(" "),s("i",{staticClass:"el-icon-caret-left",on:{click:function(e){return t.optionClick("left")}}}),t._v(" "),s("i",{staticClass:"el-icon-caret-right",on:{click:function(e){return t.optionClick("right")}}}),t._v(" "),s("i",{staticClass:"el-icon-caret-bottom",on:{click:function(e){return t.optionClick("bottom")}}}),t._v(" "),s("i",{staticClass:"el-icon-caret-top",on:{click:function(e){return t.optionClick("top")}}}),t._v(" "),s("i",{staticClass:"el-icon-refresh-right",on:{click:function(e){return t.optionClick("refresh-right")}}}),t._v(" "),s("i",{staticClass:"el-icon-refresh-left",on:{click:function(e){return t.optionClick("refresh-left")}}})]):t._e(),t._v(" "),2===t.status?s("div",{staticClass:"dow",style:{top:t.画板高度+230+"px"}},[s("p",{staticClass:"title-tip"},[t._v("Minted!")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)]):t._e()],1),t._v(" "),s("div",{staticClass:"right"},[0===t.status?s("div",{staticClass:"right-mint-box"},[s("p",{staticClass:"return-icon",on:{click:function(e){return t.$route.go(-1)}}},[s("img",{attrs:{src:n("46b7"),alt:""}})]),t._v(" "),s("div",{staticClass:"set-message"},[s("p",{staticClass:"title"},[t._v("Edit Blazon")]),t._v(" "),s("p",{staticClass:"label"},[t._v("Master")]),t._v(" "),s("p",{staticClass:"introduce"},[t._v("The NFT Song")]),t._v(" "),s("p",{staticClass:"label"},[t._v("Blazon")]),t._v(" "),s("p",{staticClass:"introduce"},[t._v("Pot")]),t._v(" "),s("p",{staticClass:"label"},[t._v("Coordinate")]),t._v(" "),s("div",{staticClass:"coordinate-mess"},[s("div",{staticClass:"itme"},[s("span",{staticStyle:{"margin-right":"10px"}},[t._v("X")]),t._v(" "),s("el-input",{attrs:{value:t.blazonX,size:"small"},on:{input:t.xChange}})],1),t._v(" "),s("div",{staticClass:"itme"},[s("span",{staticStyle:{"margin-left":"10px","margin-right":"10px"}},[t._v("Y")]),t._v(" "),s("el-input",{attrs:{value:t.blazonY,size:"small"},on:{input:t.yChange}})],1)]),t._v(" "),s("p",{staticClass:"label"},[t._v("Size")]),t._v(" "),s("div",{staticClass:"coordinate-mess size-itme"},[s("div",{staticClass:"itme"},[s("el-input",{attrs:{size:"small"},model:{value:t.blazonZoom,callback:function(e){t.blazonZoom=e},expression:"blazonZoom"}}),s("span",{staticStyle:{"margin-left":"10px"}},[t._v("\n                %")])],1)]),t._v(" "),s("p",{staticClass:"label",staticStyle:{"margin-top":"20px"}},[t._v("Rotate")]),t._v(" "),s("div",{staticClass:"coordinate-mess size-itme"},[s("div",{staticClass:"itme"},[s("el-input",{attrs:{size:"small"},model:{value:t.blazonDeg,callback:function(e){t.blazonDeg=e},expression:"blazonDeg"}}),s("span",{staticStyle:{"margin-left":"10px"}},[t._v("\n                °")])],1)]),t._v(" "),t._m(4),t._v(" "),s("p",{staticClass:"label",staticStyle:{"margin-top":"55px","margin-bottom":"17px","font-weight":"bold"}},[t._v("\n            Estimated Gas\n          ")]),t._v(" "),s("p",{staticStyle:{"font-size":"14px","font-weight":"bold"}},[t._v("\n            0.0245 ETH (about $54.53)\n          ")]),t._v(" "),s("p",{staticClass:"btn",on:{click:t.submit}},[t._v("Print")])])]):t._e(),t._v(" "),-1===t.status?[s("el-image",{staticStyle:{"margin-top":"300px"},attrs:{src:n("82e0")}})]:t._e(),t._v(" "),1===t.status?s("div",{staticClass:"minted-btn",on:{click:t.mint}},[t._v("\n        Mint\n      ")]):t._e(),t._v(" "),2===t.status?s("div",{staticClass:"minted-btn"},[t._v("\n        Imprint another one\n      ")]):t._e()],2)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"item-info"},[n("label",[t._v("Time")]),t._v("2021.04.19,08:15pm EST")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"item-info"},[n("label",[t._v("Collection")]),t._v("Imprint Rarible"),n("span",[t._v("(0x79544b2341067e9bb314a67f6d7495908b047e)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"item-info"},[n("label",[t._v("Token ID")]),t._v("23456")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"item-info"},[n("label",[t._v("# of Imprints")]),t._v("1")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icon-box"},[s("img",{attrs:{src:n("24af"),alt:""}}),t._v(" "),s("img",{attrs:{src:n("2351"),alt:""}})])}],i=(n("8e6e"),n("ac6a"),n("456d"),n("96cf"),n("3b8d")),r=(n("c5f6"),n("bd86")),o=(n("6107"),n("408b")),l=n("2f62"),c=n("d06f"),u=n("5991");function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"EditButton",data:function(){return{blazonZoom:1,blazonDeg:0,blazonX:0,blazonY:230,masterSrc:"",blazonSrc:"",cropperDom:null,masterWidth:431,blazonWidth:431,"画板高度":0,status:0,mintedImage:"",resultNewtokenUrl:null,masterImageItem:null,blazonImageItem:null}},computed:p({},Object(l["c"])({contractAddress:function(t){return t.contract["contractAddress"]},mosaique:function(t){return t.contract["CollectionContract"].mosaique},userAddress:function(t){return t.walletAccount["userAddress"]},formatEth:function(t){return t.walletAccount.formatEth},imageItems:function(t){return t.nft.userNfts}})),created:function(){var t=this.$route.query,e=t.mImage,n=t.mToken_id,s=t.mContractAddress,a=t.bImage,i=t.bToken_id,r=t.bContractAddress;this.masterImageItem={image:e,token_id:Number(n),contractAddress:s},this.blazonImageItem={image:a,token_id:Number(i),contractAddress:r};var o=new Image,l=this;o.src=this.masterImageItem.image,o.onload=function(){l.masterSrc=l.masterImageItem.image,l.masterWidth=this.width};var c=new Image;c.src=this.blazonImageItem.image,c.onload=function(){l.blazonSrc=l.blazonImageItem.image,l.blazonWidth=this.width}},mounted:function(){this.cropperDom=this.$refs.cropper},methods:{xChange:function(t){var e=this.$refs["blazon"];e.$el.style.left=parseInt(t||0)+"px",this.blazonX=parseInt(e.$el.style.left)},yChange:function(t){var e=this.$refs["blazon"];e.$el.style.top=parseInt(t||0)+"px",this.blazonY=parseInt(e.$el.style.top)},bMousemove:function(){var t=this.$refs["blazon"];this.blazonX=parseInt(t.$el.style.left),this.blazonY=parseInt(t.$el.style.top)},compose_image:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n,s,a,i,r,l,c,u,m,p,f,d,b,h,g,v,_=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$refs["blazon"].$el.getBoundingClientRect(),n=this.$refs["master"].$el.getBoundingClientRect(),s=e.left,a=e.top,i=e.width,r=e.height,l=n.left,c=n.top,u=n.width,m=n.height,p=s<l?s:l,f=a<c?a:c,d=(s+i>l+u?s+i:l+u)-p,b=(a+r>c+m?a+r:c+m)-f,this.画板高度=b,h=u/this.masterWidth,g=431/this.blazonWidth*this.blazonZoom,this.status=-1,t.next=20,o["g"]({drawing_board_width:Number(d/h).toFixed(0)+"",drawing_board_height:Number(b/h).toFixed(0)+"",master_contract:this.masterImageItem.contractAddress,master_tokenid:this.masterImageItem.token_id,master_x:Number((l-p)/h).toFixed(0)+"",master_y:Number((c-f)/h).toFixed(0)+"",blazen_contract:this.blazonImageItem.contractAddress,blazen_tokenid:this.blazonImageItem.token_id,blazen_x:Number((s-p)/h).toFixed(0)+"",blazen_y:Number((a-f)/h).toFixed(0)+"",blazen_rotate:Number(this.blazonDeg).toFixed(0)+"",blazen_scale:Number(g/h).toFixed(3)+""}).then((function(t){return _.mintedImage=t.data.compose_image,t})).catch((function(t){return _.status=0,console.log(t),_.$message.error(t.message||t.msg),t}));case 20:return v=t.sent,t.abrupt("return",v);case 22:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),erc721transfer:function(){var t=this,e=u["b"](this.contractAddress,this.userAddress,this.userAddress,this.mosaique,this.masterImageItem.token_id).on("transactionHash",(function(e){console.log(e,"reject"),t.loadingTransferHash(e,1)}));return e},loadingTransferHash:function(t,e){var n=this;return console.log("loadingTransferHash"),c["a"].getTransactionReceipt(t).then((function(s){if(console.log(s,"res"),null!==s&&0!==s)return n.status=e,!0;setTimeout((function(){return n.loadingTransferHash(t,e)}),1e3)})).catch((function(t){return console.log(t),!1}))},submit:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.compose_image();case 2:this.resultNewtokenUrl=t.sent,this.erc721transfer();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),sign:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n,s,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=this.blazonImageItem,console.log("sign => resultNewtokenUrl",e),s=e.master_nft_mid,a=e.token_uri,i=null,!s){t.next=8;break}return t.next=7,u["e"]([s,n.contractAddress,n.token_id,a],["bytes32","address","uint256","string"]);case 7:i=t.sent;case 8:return console.log(i,"signature"),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),mint:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n,s,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("mint"),this.status=-1,e=this.resultNewtokenUrl.data,t.next=5,this.sign(e);case 5:if(n=t.sent,s=this.blazonImageItem,!n){t.next=10;break}return t.next=10,o["l"]({master_nft_mid:e.master_nft_mid,blazen_contract:s.contractAddress,blazen_tokenid:s.token_id,new_token_uri:e.token_uri,owner:this.userAddress,signature:n}).then((function(t){a.status=2,console.log(t)})).catch((function(t){a.loadingTransferHash(t.transaction_hash,2)}));case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),optionClick:function(t){var e=this.$refs["blazon"];switch(t){case"plus":this.blazonZoom+=.1;break;case"remove":this.blazonZoom-=.1;break;case"left":e.$el.style.left=parseInt(e.$el.style.left||0)-10+"px",this.blazonX=parseInt(e.$el.style.left);break;case"right":e.$el.style.left=parseInt(e.$el.style.left||0)+10+"px",this.blazonX=parseInt(e.$el.style.left);break;case"bottom":e.$el.style.top=parseInt(e.$el.style.top||0)+10+"px",this.blazonY=parseInt(e.$el.style.top);break;case"top":e.$el.style.top=parseInt(e.$el.style.top||0)-10+"px",this.blazonY=parseInt(e.$el.style.top);break;case"refresh-right":this.blazonDeg+=45;break;case"refresh-left":this.blazonDeg-=45;break}},ready:function(){this.cropperDom.relativeZoom(-2),this.optionClick()},cropmove:function(){this.optionClick()},zoom:function(){this.optionClick()}}},d=f,b=(n("93c6"),n("2877")),h=Object(b["a"])(d,s,a,!1,null,null,null);e["default"]=h.exports},2351:function(t,e,n){t.exports=n.p+"static/img/icon-2.124ffdfa.png"},"24af":function(t,e,n){t.exports=n.p+"static/img/icon-3.b0f453c4.png"},"46b7":function(t,e,n){t.exports=n.p+"static/img/return.c1430e4a.png"},6107:function(t,e,n){},"82e0":function(t,e,n){t.exports=n.p+"static/img/Loading_20210708.31344e8f.gif"},"93c6":function(t,e,n){"use strict";var s=n("b12c"),a=n.n(s);a.a},b12c:function(t,e,n){}}]);