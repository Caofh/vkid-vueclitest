webpackJsonp([3],{"5OHe":function(e,t){},Dcy1:function(e,t,o){"use strict";var n=o("lC5x"),r=o.n(n),i=o("J0Oq"),a=o.n(i),c=o("rVsN"),u=o.n(c),p=o("aozt"),s=o.n(p),d=o("tgrj"),l=o("s9Ai");function f(e){var t="http://upload.qiniu.com/putb64/-1/key/"+e.path,o={};return(o=s.a.create({timeout:1e4,headers:{"Content-Type":e.contentType,Authorization:e.authorization}})).interceptors.request.use(function(e){return e},function(e){return u.a.reject(e)}),o.interceptors.response.use(function(e){return e.data},function(e){var t=e;return u.a.reject(t)}),o.post(t,e.dataURL)}var v={name:"App",props:["beforeCrop","uploadSuccess","cropClick","boxMoveSuccess","option"],data:function(){return{imgAddress:""}},components:{VueCropper:d.VueCropper},created:function(){},mounted:function(){console.log(window["vue-cropper"])},methods:{changeFile:function(e){var t=this,o=e.target.files[0];"false"!=String(this.beforeCrop(o))&&this.imgToBase64(o).then(function(e){var o=e.target.result;t.option.img=o,t.$refs.imgUpload.value=""})},cropButton:function(){var e=this;this.getCropBase64().then(function(t){var o={imgUrl:t,imgWidth:e.$refs.cropper.cropW,imgHeight:e.$refs.cropper.cropH};e.cropClick&&e.cropClick(o),e.uploadSuccess&&e.uploadQiNiu(t)})},uploadQiNiu:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return a()(r.a.mark(function o(){var n,i,a,c,u,p,s,d,v,h,g;return r.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return n=(new Date).getTime(),i="teacher_abc_text/image/183455/detail/183455_detail_"+n,o.prev=2,o.next=5,Object(l.a)(i);case 5:return a=o.sent,c=a.token,u=window.btoa(i.split(".").pop()),p=t.replace(/^data[\S]+;base64,/,""),s={path:u,dataURL:p,contentType:"application/octet-stream",authorization:"UpToken "+c},o.prev=10,o.next=13,f(s);case 13:d=o.sent,v=d.key||"",h=e.getCloudUrl(v),g={imgUrl:h,imgWidth:e.$refs.cropper.cropW,imgHeight:e.$refs.cropper.cropH},e.uploadSuccess&&e.uploadSuccess(g),o.next=23;break;case 20:o.prev=20,o.t0=o.catch(10),console.log(o.t0);case 23:o.next=28;break;case 25:o.prev=25,o.t1=o.catch(2),console.log(o.t1);case 28:case"end":return o.stop()}},o,e,[[2,25],[10,20]])}))()},getCropBase64:function(){var e=this;return new u.a(function(t,o){e.$refs.cropper.getCropData(function(e){t(e)})})},getCloudUrl:function(){return"http://file.sayabc.com/"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")},boxMove:function(e){var t={e:e,boxWidth:this.$refs.cropper.cropW,boxHeight:this.$refs.cropper.cropH};this.boxMoveSuccess&&this.boxMoveSuccess(t)},imgToBase64:function(e){return new u.a(function(t,o){var n=new FileReader;n.readAsDataURL(e),n.onload=function(e){t(e)}})}}},h={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",[e._v('基于vue的图片裁剪插件-"vue-image-crop-upload"调研')]),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("div",{attrs:{id:"crop2"}},[o("p",[e._v("例子")]),e._v(" "),o("div",{staticClass:"cut"},[o("vue-cropper",{ref:"cropper",attrs:{img:e.option.img,fixed:e.option.fixed,"output-size":e.option.size,"output-type":e.option.outputType,info:!0,full:e.option.full,"can-move":e.option.canMove,"can-move-box":e.option.canMoveBox,"fixed-box":e.option.fixedBox,original:e.option.original,"auto-crop":e.option.autoCrop,"auto-crop-width":e.option.autoCropWidth,"auto-crop-height":e.option.autoCropHeight,"center-box":e.option.centerBox,high:e.option.high},on:{cropMoving:e.boxMove}})],1)]),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("div",[e._v("\n        上传图片\n        "),o("input",{ref:"imgUpload",attrs:{type:"file"},on:{change:function(t){e.changeFile(t)}}})]),e._v(" "),o("div",{on:{click:e.cropButton}},[e._v("\n        裁剪图片\n    ")])])},staticRenderFns:[]};var g=o("C7Lr")(v,h,!1,function(e){o("XWeY")},"data-v-3e85e6d6",null);t.a=g.exports},L8d8:function(e,t,o){"use strict";var n=o("rVsN"),r=o.n(n),i=o("aozt"),a=o.n(i);o("9k1S");t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t={};return(t=a.a.create({baseURL:e,timeout:1e4})).interceptors.request.use(function(e){return e},function(e){return r.a.reject(e)}),t.interceptors.response.use(function(e){return e.data},function(e){var t=e;return r.a.reject(t)}),t},o.d(t,"b",function(){return c});var c=function(e){var t=new FormData;for(var o in e)t.append(o,e[o]);return t}},XWeY:function(e,t){},blSh:function(e,t){},s9Ai:function(e,t,o){"use strict";t.a=function(e){return u.get("/uploader-dev-9098/api/v1/qiniu/upload/token?"+e)},t.b=function(e){var t="http://upload.qiniu.com/putb64/-1/key/"+e.path,o={};return(o=c.a.create({timeout:1e4,headers:{"Content-Type":e.contentType,Authorization:e.authorization}})).interceptors.request.use(function(e){return e},function(e){return r.a.reject(e)}),o.interceptors.response.use(function(e){return e.data},function(e){var t=e;return r.a.reject(t)}),o.post(t,e.dataURL)};var n=o("rVsN"),r=o.n(n),i=o("L8d8"),a=o("aozt"),c=o.n(a),u=Object(i.a)("http://gateway-dev.sayabc.com:8000")},yd0w:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});o("5OHe");var n=o("bghU"),r=o.n(n),i=o("IvJb"),a=o("N7LD"),c=o.n(a),u={name:"App",data:function(){return{option:{img:"",size:1,full:!1,outputType:"png",canMove:!0,fixed:!0,fixedBox:!1,original:!0,canMoveBox:!0,autoCrop:!0,autoCropWidth:200,autoCropHeight:200,centerBox:!1,high:!0}}},created:function(){},components:{crop:o("Dcy1").a},methods:{beforeCrop:function(e){return console.log(e),!0},uploadSuccess:function(e){console.log(e)},cropClick:function(e){console.log(e)},boxMoveSuccess:function(e){console.log(e)}},mounted:function(){var e=new BMap.Map("container"),t=new BMap.Point(116.404,39.915);e.centerAndZoom(t,15),e.enableScrollWheelZoom(!0);var o=new BMap.Marker(t);e.addOverlay(o);var n=new BMap.TrafficLayer;e.addTileLayer(n),window.setTimeout(function(){e.panTo(new BMap.Point(116.409,39.918))},2e3),setTimeout(function(){c()(".BMap_cpyCtrl").css({display:"none"}),c()('[title="到百度地图查看此区域"]').css({display:"none"})},300)}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"container"}}),this._v(" "),t("crop",{attrs:{beforeCrop:this.beforeCrop,uploadSuccess:this.uploadSuccess,cropClick:this.cropClick,boxMoveSuccess:this.boxMoveSuccess,option:this.option}})],1)},staticRenderFns:[]};var s=o("C7Lr")(u,p,!1,function(e){o("blSh")},"data-v-fc37a4d0",null).exports;i.default.use(r.a),i.default.config.productionTip=!1,new i.default({el:"#app",components:{App:s},template:"<App/>"})}},["yd0w"]);
//# sourceMappingURL=map.d698104639f85a869fa6.js.map