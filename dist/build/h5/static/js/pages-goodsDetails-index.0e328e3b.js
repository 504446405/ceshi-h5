(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goodsDetails-index"],{"01a7":function(t,e,n){"use strict";var i=n("4ea4");n("99af"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("1da1")),o=n("d084"),a={data:function(){return{goodsDetails:{detailVideo:"",displayImages:[],name:"",description:"",price:"",productDetail:""}}},onLoad:function(t){this.goodsId=t.id,this.number=t.number,this.deviceId=t.deviceId},onShow:function(){this.list()},computed:{},onShareAppMessage:function(){},methods:{list:function(){var t=this,e={id:this.goodsId,number:this.number,deviceId:this.deviceId},n="/quxia/api/public/products/detail";(0,o.getGoodsDetails)(n,e).then((function(e){if(e){if(e.productDetail){var n=new RegExp("<img","gi");e.productDetail=e.productDetail.replace(n,'<img style="max-width: 100%;"')}else e.productDetail='<p><img src="'.concat(e.detailImage,'" style="max-width: 100%" /></p>');e.displayImages||(e.displayImages=[e.image]),t.goodsDetails=e}}))},buyGoods:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n,i,r,a,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,i={deviceId:n.deviceId,products:[{id:n.goodsId,quantity:1,number:n.number}]},r="/cityfx/order/notify",a="pages/paySuccess/index",c="pages/payFail/index",e.next=7,(0,o.getPlaceAnOrderId)(i);case 7:s=e.sent,(0,o.getPlaceAnOrderData)(i).then((function(t){var e={partner_id:"",out_trade_no:s.id,goods_name:t.products.name,buy_num:t.totalQuantity,cost_price:t.products.price,sales_price:t.products.price,total_fee:t.subTotal,device_no:n.deviceId,gate_no:t.products.number,notify_url:r,successful_jump:a,fail_jump:c};jWeixin.miniProgram.getEnv((function(t){jWeixin.miniProgram.redirectTo({url:"/pages/index/index?partner_id=".concat("&out_trade_no=",s.id,"&goods_name=").concat(t.products.name,"&buy_num=").concat(t.totalQuantity,"&cost_price=").concat(t.products.price,"&sales_price=").concat(t.products.price,"&total_fee=").concat(t.subTotal,"&device_no=").concat(n.deviceId,"&gate_no=").concat(t.products.number,"&notify_url=").concat(r,"&successful_jump=").concat(a,"&fail_jump=").concat(c)}),jWeixin.miniProgram.postMessage({data:e})}))}));case 9:case"end":return e.stop()}}),e)})))()},goHome:function(){uni.redirectTo({url:"/pages/index/index"})}}};e.default=a},"1da1":function(t,e,n){"use strict";function i(t,e,n,i,r,o,a){try{var c=t[o](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(i,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){i(a,r,o,c,s,"next",t)}function s(t){i(a,r,o,c,s,"throw",t)}c(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"6ab9":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.goodsDetails[data-v-4835cc79]{padding-bottom:%?117?%}.footer[data-v-4835cc79]{position:fixed;left:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%}.footer .home[data-v-4835cc79]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?100?%;line-height:%?100?%;text-align:center;background:#fff;box-shadow:%?0?% %?-1?% %?6?% hsla(0,0%,52.2%,.16)}.footer .home uni-text[data-v-4835cc79]{font-size:%?66?%}.footer .buy[data-v-4835cc79]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?100?%;line-height:%?100?%;text-align:center;background:#ff5f5f;box-shadow:%?0?% %?-1?% %?6?% hsla(0,0%,52.2%,.16);font-size:%?28?%;font-weight:400;color:#fff}.slideshow[data-v-4835cc79]{width:100%;height:%?750?%}.slideshow uni-image[data-v-4835cc79]{width:100%}.slideshow .swiper[data-v-4835cc79],\n.slideshow uni-swiper-item[data-v-4835cc79]{width:100%;height:%?750?%}.slideshow .swiper uni-image[data-v-4835cc79],\n.slideshow uni-swiper-item uni-image[data-v-4835cc79]{width:100%;height:%?750?%}.goods-content[data-v-4835cc79]{padding:%?24?% %?30?%;border-bottom:%?20?% solid #f9f9f9}.goods-content .title[data-v-4835cc79]{font-size:%?30?%;font-family:Source Han Sans CN;font-weight:400;color:#0c0c0c;margin-bottom:%?20?%;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.goods-content .text[data-v-4835cc79]{font-size:%?24?%;font-family:PingFang SC;font-weight:300;color:#7d7d7d;margin-bottom:%?30?%;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.goods-content .price-num[data-v-4835cc79]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.goods-content .price-num .price[data-v-4835cc79]{font-size:%?40?%;font-weight:700;color:#ff5f5f}.goods-presentation .title[data-v-4835cc79]{width:100%;height:%?86?%;line-height:%?86?%;text-align:center;font-size:%?32?%;font-weight:400;color:#1a1a1a;background-color:#fff}.goods-presentation uni-image[data-v-4835cc79]{width:100%}',""]),t.exports=e},9230:function(t,e,n){"use strict";n.r(e);var i=n("eb67"),r=n("9cbf");for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("e345");var a,c=n("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"4835cc79",null,!1,i["a"],a);e["default"]=s.exports},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,r=i.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=b;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={},g={};g[a]=function(){return this};var m=Object.getPrototypeOf,w=m&&m(m(S([])));w&&w!==i&&r.call(w,a)&&(g=w);var y=L.prototype=_.prototype=Object.create(g);k.prototype=y.constructor=L,L.constructor=k,L[s]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(y),t},l.awrap=function(t){return{__await:t}},j(E.prototype),E.prototype[c]=function(){return this},l.AsyncIterator=E,l.async=function(t,e,n,i){var r=new E(b(t,e,n,i));return l.isGeneratorFunction(e)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},j(y),y[s]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},l.values=S,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,r){return c.type="throw",c.arg=t,e.next=i,r&&(e.method="next",e.arg=n),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;I(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:S(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,i){var r=e&&e.prototype instanceof _?e:_,o=Object.create(r.prototype),a=new C(i||[]);return o._invoke=O(t,n,a),o}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function _(){}function k(){}function L(){}function j(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(n,i,o,a){var c=x(t[n],t,i);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(u).then((function(t){s.value=t,o(s)}),(function(t){return e("throw",t,o,a)}))}a(c.arg)}var n;function i(t,i){function r(){return new Promise((function(n,r){e(t,i,n,r)}))}return n=n?n.then(r,r):r()}this._invoke=i}function O(t,e,n){var i=d;return function(r,o){if(i===h)throw new Error("Generator is already running");if(i===p){if("throw"===r)throw o;return q()}n.method=r,n.arg=o;while(1){var a=n.delegate;if(a){var c=P(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===d)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=h;var s=x(t,e,n);if("normal"===s.type){if(i=n.done?p:f,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(i=p,n.method="throw",n.arg=s.arg)}}}function P(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,P(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var r=x(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,v;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){while(++i<t.length)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:q}}function q(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9cbf":function(t,e,n){"use strict";n.r(e);var i=n("01a7"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},d084:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getGoodsDetails=r,e.getOrdersCalculateTotal=o,e.getPlaceAnOrderData=a,e.getPlaceAnOrderId=c;var i=n("f52e");function r(t,e){return(0,i.request)({url:t,data:e})}function o(t){return(0,i.request)({url:"/quxia/api/public/checkout/calculatePrice",method:"POST",data:t})}function a(t){return(0,i.request)({url:"/quxia/api/public/checkout/info",method:"POST",data:t})}function c(t){return(0,i.request)({url:"/quxia/api/public/checkout",method:"POST",data:t})}},db49:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;var i="https://quxiaapi.renqilai.com";e.baseUrl=i},e345:function(t,e,n){"use strict";var i=n("ea38"),r=n.n(i);r.a},ea38:function(t,e,n){var i=n("6ab9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("0a92a603",i,!0,{sourceMap:!1,shadowMode:!1})},eb67:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"goodsDetails"},[n("v-uni-view",{staticClass:"slideshow"},[n("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-active-color":"#FF4A4A","indicator-dots":!0,autoplay:!0,circular:!0}},[t.goodsDetails.detailVideo?n("v-uni-swiper-item",[n("v-uni-video",{staticStyle:{width:"100%",height:"750rpx"},attrs:{src:t.goodsDetails.detailVideo,autoplay:!0}})],1):t._e(),t._l(t.goodsDetails.displayImages,(function(t,e){return n("v-uni-swiper-item",{key:e},[n("v-uni-image",{attrs:{src:t}})],1)}))],2)],1),n("v-uni-view",{staticClass:"goods-content"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.goodsDetails.name))]),n("v-uni-view",{staticClass:"text"},[t._v(t._s(t.goodsDetails.description))]),n("v-uni-view",{staticClass:"price-num"},[n("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(t.goodsDetails.price||0))])],1)],1),n("v-uni-view",{staticClass:"goods-presentation"},[n("v-uni-view",{staticClass:"title"},[t._v("商品详情")]),n("v-uni-rich-text",{attrs:{nodes:t.goodsDetails.productDetail}})],1),n("v-uni-view",{staticClass:"footer"},[n("v-uni-view",{staticClass:"home",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goHome.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont iconzhuye"})],1),n("v-uni-view",{staticClass:"buy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.buyGoods.apply(void 0,arguments)}}},[t._v("立即购买")])],1)],1)},o=[]},f52e:function(t,e,n){"use strict";var i=n("4ea4");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.request=void 0;var r=i(n("5530")),o=n("db49"),a=0,c=function(t){var e=(0,r.default)({},t.header);a++;var n=o.baseUrl;return new Promise((function(i,o){uni.showLoading({title:"加载中"}),uni.request((0,r.default)((0,r.default)({},t),{},{header:e,url:n+t.url,success:function(t){200==t.statusCode||0==t.data.code?i(t.data.data):0!==t.data.code&&o(t.data.msg)},fail:function(t){o(t)},complete:function(){a--,a<=0&&uni.hideLoading(),i(0)}}))}))};e.request=c}}]);