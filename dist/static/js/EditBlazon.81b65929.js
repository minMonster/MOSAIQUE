(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["EditBlazon"],{1512:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edit-blazon"},[n("div",{staticClass:"edition-center"},[n("div",{staticClass:"left",staticStyle:{position:"relative"}},[2===t.status?n("el-image",{staticClass:"minted-image",staticStyle:{width:"431px",position:"relative"},attrs:{src:t.mintedImage}}):t._e(),t._v(" "),0===t.status||1===t.status?n("el-image",{ref:"master",staticStyle:{width:"431px",position:"relative"},attrs:{src:t.masterSrc}}):t._e(),t._v(" "),0===t.status||1===t.status?n("el-image",{directives:[{name:"drag",rawName:"v-drag",value:0===t.status,expression:"status===0"}],ref:"blazon",staticStyle:{left:"0",top:"230px",position:"absolute",width:"431px"},style:{transform:"scale("+t.blazonZoom+") rotateZ("+t.blazonDeg+"deg)"},attrs:{src:t.blazonSrc},on:{mousemove:t.bMousemove}}):t._e(),t._v(" "),0===t.status?n("div",{staticClass:"options"},[n("i",{staticClass:"el-icon-circle-plus",on:{click:function(e){return t.optionClick("plus")}}}),t._v(" "),n("i",{staticClass:"el-icon-remove",on:{click:function(e){return t.optionClick("remove")}}}),t._v(" "),n("i",{staticClass:"el-icon-caret-left",on:{click:function(e){return t.optionClick("left")}}}),t._v(" "),n("i",{staticClass:"el-icon-caret-right",on:{click:function(e){return t.optionClick("right")}}}),t._v(" "),n("i",{staticClass:"el-icon-caret-bottom",on:{click:function(e){return t.optionClick("bottom")}}}),t._v(" "),n("i",{staticClass:"el-icon-caret-top",on:{click:function(e){return t.optionClick("top")}}}),t._v(" "),n("i",{staticClass:"el-icon-refresh-right",on:{click:function(e){return t.optionClick("refresh-right")}}}),t._v(" "),n("i",{staticClass:"el-icon-refresh-left",on:{click:function(e){return t.optionClick("refresh-left")}}})]):t._e(),t._v(" "),2===t.status?n("div",{staticClass:"dow",style:{top:t.画板高度+230+"px"}},[n("p",{staticClass:"title-tip"},[t._v("Minted!")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)]):t._e()],1),t._v(" "),n("div",{staticClass:"right"},[0===t.status?n("div",{staticClass:"right-mint-box"},[n("p",{staticClass:"return-icon",on:{click:function(e){return t.$route.go(-1)}}},[n("img",{attrs:{src:a("46b7"),alt:""}})]),t._v(" "),n("div",{staticClass:"set-message"},[n("p",{staticClass:"title"},[t._v("Edit Blazon")]),t._v(" "),n("p",{staticClass:"label"},[t._v("Master")]),t._v(" "),n("p",{staticClass:"introduce"},[t._v("The NFT Song")]),t._v(" "),n("p",{staticClass:"label"},[t._v("Blazon")]),t._v(" "),n("p",{staticClass:"introduce"},[t._v("Pot")]),t._v(" "),n("p",{staticClass:"label"},[t._v("Coordinate")]),t._v(" "),n("div",{staticClass:"coordinate-mess"},[n("div",{staticClass:"itme"},[n("span",{staticStyle:{"margin-right":"10px"}},[t._v("X")]),t._v(" "),n("el-input",{attrs:{value:t.blazonX,size:"small"},on:{input:t.xChange}})],1),t._v(" "),n("div",{staticClass:"itme"},[n("span",{staticStyle:{"margin-left":"10px","margin-right":"10px"}},[t._v("Y")]),t._v(" "),n("el-input",{attrs:{value:t.blazonY,size:"small"},on:{input:t.yChange}})],1)]),t._v(" "),n("p",{staticClass:"label"},[t._v("Size")]),t._v(" "),n("div",{staticClass:"coordinate-mess size-itme"},[n("div",{staticClass:"itme"},[n("el-input",{attrs:{size:"small"},model:{value:t.blazonZoom,callback:function(e){t.blazonZoom=e},expression:"blazonZoom"}}),n("span",{staticStyle:{"margin-left":"10px"}},[t._v("\n                %")])],1)]),t._v(" "),n("p",{staticClass:"label",staticStyle:{"margin-top":"20px"}},[t._v("Rotate")]),t._v(" "),n("div",{staticClass:"coordinate-mess size-itme"},[n("div",{staticClass:"itme"},[n("el-input",{attrs:{size:"small"},model:{value:t.blazonDeg,callback:function(e){t.blazonDeg=e},expression:"blazonDeg"}}),n("span",{staticStyle:{"margin-left":"10px"}},[t._v("\n                °")])],1)]),t._v(" "),t._m(4),t._v(" "),n("p",{staticClass:"label",staticStyle:{"margin-top":"55px","margin-bottom":"17px","font-weight":"bold"}},[t._v("\n            Estimated Gas\n          ")]),t._v(" "),n("p",{staticStyle:{"font-size":"14px","font-weight":"bold"}},[t._v("\n            0.0245 ETH (about $54.53)\n          ")]),t._v(" "),n("p",{staticClass:"btn",on:{click:t.download}},[t._v("Mint")])])]):t._e(),t._v(" "),1===t.status?[n("el-image",{staticStyle:{"margin-top":"300px"},attrs:{src:a("82e0")}})]:t._e(),t._v(" "),2===t.status?n("div",{staticClass:"minted-btn",on:{click:function(t){}}},[t._v("\n        Imprint another one\n      ")]):t._e()],2)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"item-info"},[a("label",[t._v("Time")]),t._v("2021.04.19,08:15pm EST")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"item-info"},[a("label",[t._v("Collection")]),t._v("Imprint Rarible"),a("span",[t._v("(0x79544b2341067e9bb314a67f6d7495908b047e)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"item-info"},[a("label",[t._v("Token ID")]),t._v("23456")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"item-info"},[a("label",[t._v("# of Imprints")]),t._v("1")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon-box"},[n("img",{attrs:{src:a("24af"),alt:""}}),t._v(" "),n("img",{attrs:{src:a("2351"),alt:""}})])}],s=(a("c5f6"),a("6107"),a("408b")),o={name:"EditButton",data:function(){return{blazonZoom:1,blazonDeg:0,blazonX:0,blazonY:230,masterSrc:"",blazonSrc:"",masterIndex:0,blazonIndex:0,cropperDom:null,masterWidth:431,blazonWidth:431,"画板高度":0,status:0,mintedImage:""}},created:function(){var t=this.$route.query,e=t.master,a=t.blazon,n=new Image,i=this;n.src=e,n.onload=function(){i.masterSrc=e,i.masterWidth=this.width};var s=new Image;s.src=a,s.onload=function(){i.blazonSrc=a,i.blazonWidth=this.width}},mounted:function(){this.cropperDom=this.$refs.cropper},methods:{xChange:function(t){var e=this.$refs["blazon"];e.$el.style.left=parseInt(t||0)+"px",this.blazonX=parseInt(e.$el.style.left)},yChange:function(t){var e=this.$refs["blazon"];e.$el.style.top=parseInt(t||0)+"px",this.blazonY=parseInt(e.$el.style.top)},bMousemove:function(){var t=this.$refs["blazon"];this.blazonX=parseInt(t.$el.style.left),this.blazonY=parseInt(t.$el.style.top)},download:function(){var t=this,e=this.$refs["blazon"].$el.getBoundingClientRect(),a=this.$refs["master"].$el.getBoundingClientRect(),n=e.left,i=e.top,o=e.width,r=e.height,c=a.left,l=a.top,p=a.width,u=a.height,f=n<c?n:c,m=i<l?i:l,b=(n+o>c+p?n+o:c+p)-f,v=(i+r>l+u?i+r:l+u)-m;this.画板高度=v;var d=p/this.masterWidth,_=431/this.blazonWidth*this.blazonZoom;console.log("zoom: ".concat(d,", bZoom: ").concat(_,"  画板宽度: ").concat(b/d," 画板高度: ").concat(v/d," zoom: ").concat(this.blazonZoom/d,", mX: ").concat((c-f)/d,", mY: ").concat((l-m)/d," mW: ").concat(p/d,",mH: ").concat(u/d,", bX: ").concat((n-f)/d,", bY: ").concat((i-m)/d," ")),this.status=1,s["c"]({drawing_board_width:Number(b/d).toFixed(0)+"",drawing_board_height:Number(v/d).toFixed(0)+"",master_contract:this.masterSrc,master_tokenid:"2106",master_x:Number((c-f)/d).toFixed(0)+"",master_y:Number((l-m)/d).toFixed(0)+"",blazen_contract:this.blazonSrc,blazen_tokenid:"928",blazen_x:Number((n-f)/d).toFixed(0)+"",blazen_y:Number((i-m)/d).toFixed(0)+"",blazen_rotate:Number(this.blazonDeg).toFixed(0)+"",blazen_scale:Number(_/d).toFixed(3)+"",jsoninfo:"7b0a20202020227469746c65223a202262756c6c222c0a2020202022696d6167655f75726c223a202268747470733a2f2f696d67312e6d706179732e696f2f6d7061792f696d672f616e696d616c2f636174746c652f62756c6c2e706e67220a7d"}).then((function(e){t.status=2,t.mintedImage=e.data.compose_image}))},optionClick:function(t){var e=this.$refs["blazon"];switch(t){case"plus":this.blazonZoom+=.1;break;case"remove":this.blazonZoom-=.1;break;case"left":e.$el.style.left=parseInt(e.$el.style.left||0)-10+"px",this.blazonX=parseInt(e.$el.style.left);break;case"right":e.$el.style.left=parseInt(e.$el.style.left||0)+10+"px",this.blazonX=parseInt(e.$el.style.left);break;case"bottom":e.$el.style.top=parseInt(e.$el.style.top||0)+10+"px",this.blazonY=parseInt(e.$el.style.top);break;case"top":e.$el.style.top=parseInt(e.$el.style.top||0)-10+"px",this.blazonY=parseInt(e.$el.style.top);break;case"refresh-right":this.blazonDeg+=45;break;case"refresh-left":this.blazonDeg-=45;break}},ready:function(){this.cropperDom.relativeZoom(-2),this.optionClick()},cropmove:function(){this.optionClick()},zoom:function(){this.optionClick()}}},r=o,c=(a("93c6"),a("2877")),l=Object(c["a"])(r,n,i,!1,null,null,null);e["default"]=l.exports},2351:function(t,e,a){t.exports=a.p+"static/img/icon-2.124ffdfa.png"},"24af":function(t,e,a){t.exports=a.p+"static/img/icon-3.b0f453c4.png"},"408b":function(t,e,a){"use strict";var n=a("bc3a"),i=a.n(n),s=i.a.create({baseURL:"/nin/mosai/",timeout:4e4,withCredentials:!0});s.interceptors.request.use((function(t){return t.headers["Accept"]="application/vnd.sd.v2+json",t}),(function(t){Promise.reject(t)})),s.interceptors.response.use((function(t){return t}));var o=s;function r(){return o({url:"pbgpm.do",method:"post",data:{keyinfo:"oss_image"}})}function c(t){return o({url:"pbttm.do",method:"post",data:t})}function l(t){return o({url:"pbttd.do",method:"post",data:t})}a.d(e,"a",(function(){return r})),a.d(e,"c",(function(){return c})),a.d(e,"b",(function(){return l}))},"46b7":function(t,e,a){t.exports=a.p+"static/img/return.c1430e4a.png"},"5dbc":function(t,e,a){var n=a("d3f4"),i=a("8b97").set;t.exports=function(t,e,a){var s,o=e.constructor;return o!==a&&"function"==typeof o&&(s=o.prototype)!==a.prototype&&n(s)&&i&&i(t,s),t}},6107:function(t,e,a){},"82e0":function(t,e,a){t.exports=a.p+"static/img/Loading_20210708.31344e8f.gif"},"8b97":function(t,e,a){var n=a("d3f4"),i=a("cb7c"),s=function(t,e){if(i(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,a){return s(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:s}},"93c6":function(t,e,a){"use strict";var n=a("b12c"),i=a.n(n);i.a},aa77:function(t,e,a){var n=a("5ca1"),i=a("be13"),s=a("79e5"),o=a("fdef"),r="["+o+"]",c="​",l=RegExp("^"+r+r+"*"),p=RegExp(r+r+"*$"),u=function(t,e,a){var i={},r=s((function(){return!!o[t]()||c[t]()!=c})),l=i[t]=r?e(f):o[t];a&&(i[a]=l),n(n.P+n.F*r,"String",i)},f=u.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(p,"")),t};t.exports=u},b12c:function(t,e,a){},c5f6:function(t,e,a){"use strict";var n=a("7726"),i=a("69a8"),s=a("2d95"),o=a("5dbc"),r=a("6a99"),c=a("79e5"),l=a("9093").f,p=a("11e9").f,u=a("86cc").f,f=a("aa77").trim,m="Number",b=n[m],v=b,d=b.prototype,_=s(a("2aeb")(d))==m,h="trim"in String.prototype,g=function(t){var e=r(t,!1);if("string"==typeof e&&e.length>2){e=h?e.trim():f(e,3);var a,n,i,s=e.charCodeAt(0);if(43===s||45===s){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var o,c=e.slice(2),l=0,p=c.length;l<p;l++)if(o=c.charCodeAt(l),o<48||o>i)return NaN;return parseInt(c,n)}}return+e};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof b&&(_?c((function(){d.valueOf.call(a)})):s(a)!=m)?o(new v(g(e)),a,b):g(e)};for(var C,z=a("9e1e")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;z.length>x;x++)i(v,C=z[x])&&!i(b,C)&&u(b,C,p(v,C));b.prototype=d,d.constructor=b,a("2aba")(n,m,b)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);