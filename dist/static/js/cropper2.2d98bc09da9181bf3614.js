webpackJsonp([5],{"5OHe":function(e,t){},Dcy1:function(e,t,o){"use strict";var n=o("lC5x"),r=o.n(n),i=o("J0Oq"),a=o.n(i),c=o("rVsN"),u=o.n(c),p=o("aozt"),s=o.n(p),d=o("tgrj"),f=o("s9Ai");function v(e){var t="http://upload.qiniu.com/putb64/-1/key/"+e.path,o={};return(o=s.a.create({timeout:1e4,headers:{"Content-Type":e.contentType,Authorization:e.authorization}})).interceptors.request.use(function(e){return e},function(e){return u.a.reject(e)}),o.interceptors.response.use(function(e){return e.data},function(e){var t=e;return u.a.reject(t)}),o.post(t,e.dataURL)}var l={name:"App",props:["beforeCrop","uploadSuccess","cropClick","boxMoveSuccess","option"],data:function(){return{imgAddress:""}},components:{VueCropper:d.VueCropper},created:function(){},mounted:function(){console.log(window["vue-cropper"])},methods:{changeFile:function(e){var t=this,o=e.target.files[0];"false"!=String(this.beforeCrop(o))&&this.imgToBase64(o).then(function(e){var o=e.target.result;t.option.img=o,t.$refs.imgUpload.value=""})},cropButton:function(){var e=this;this.getCropBase64().then(function(t){var o={imgUrl:t,imgWidth:e.$refs.cropper.cropW,imgHeight:e.$refs.cropper.cropH};e.cropClick&&e.cropClick(o),e.uploadSuccess&&e.uploadQiNiu(t)})},uploadQiNiu:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return a()(r.a.mark(function o(){var n,i,a,c,u,p,s,d,l,h,g;return r.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return n=(new Date).getTime(),i="teacher_abc_text/image/183455/detail/183455_detail_"+n,o.prev=2,o.next=5,Object(f.a)(i);case 5:return a=o.sent,c=a.token,u=window.btoa(i.split(".").pop()),p=t.replace(/^data[\S]+;base64,/,""),s={path:u,dataURL:p,contentType:"application/octet-stream",authorization:"UpToken "+c},o.prev=10,o.next=13,v(s);case 13:d=o.sent,l=d.key||"",h=e.getCloudUrl(l),g={imgUrl:h,imgWidth:e.$refs.cropper.cropW,imgHeight:e.$refs.cropper.cropH},e.uploadSuccess&&e.uploadSuccess(g),o.next=23;break;case 20:o.prev=20,o.t0=o.catch(10),console.log(o.t0);case 23:o.next=28;break;case 25:o.prev=25,o.t1=o.catch(2),console.log(o.t1);case 28:case"end":return o.stop()}},o,e,[[2,25],[10,20]])}))()},getCropBase64:function(){var e=this;return new u.a(function(t,o){e.$refs.cropper.getCropData(function(e){t(e)})})},getCloudUrl:function(){return"http://file.sayabc.com/"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")},boxMove:function(e){var t={e:e,boxWidth:this.$refs.cropper.cropW,boxHeight:this.$refs.cropper.cropH};this.boxMoveSuccess&&this.boxMoveSuccess(t)},imgToBase64:function(e){return new u.a(function(t,o){var n=new FileReader;n.readAsDataURL(e),n.onload=function(e){t(e)}})}}},h={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",[e._v('基于vue的图片裁剪插件-"vue-image-crop-upload"调研')]),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("div",{attrs:{id:"crop2"}},[o("p",[e._v("例子")]),e._v(" "),o("div",{staticClass:"cut"},[o("vue-cropper",{ref:"cropper",attrs:{img:e.option.img,fixed:e.option.fixed,"output-size":e.option.size,"output-type":e.option.outputType,info:!0,full:e.option.full,"can-move":e.option.canMove,"can-move-box":e.option.canMoveBox,"fixed-box":e.option.fixedBox,original:e.option.original,"auto-crop":e.option.autoCrop,"auto-crop-width":e.option.autoCropWidth,"auto-crop-height":e.option.autoCropHeight,"center-box":e.option.centerBox,high:e.option.high},on:{cropMoving:e.boxMove}})],1)]),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("div",[e._v("\n        上传图片\n        "),o("input",{ref:"imgUpload",attrs:{type:"file"},on:{change:function(t){e.changeFile(t)}}})]),e._v(" "),o("div",{on:{click:e.cropButton}},[e._v("\n        裁剪图片\n    ")])])},staticRenderFns:[]};var g=o("C7Lr")(l,h,!1,function(e){o("XWeY")},"data-v-3e85e6d6",null);t.a=g.exports},L8d8:function(e,t,o){"use strict";var n=o("rVsN"),r=o.n(n),i=o("aozt"),a=o.n(i);o("9k1S");t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"node",o={},n={baseURL:e,timeout:1e4};n.headers="node"===t?{"content-type":"application/json;charset=UTF-8"}:{"content-type":"application/x-www-form-urlencoded"};return(o=a.a.create(n)).interceptors.request.use(function(e){return e},function(e){return r.a.reject(e)}),o.interceptors.response.use(function(e){return e.data},function(e){var t=e;return r.a.reject(t)}),o},o.d(t,"b",function(){return c});var c=function(e){var t=new FormData;for(var o in e)t.append(o,e[o]);return t}},XWeY:function(e,t){},g6mz:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("5OHe"),r=(o.n(n),o("bghU")),i=o.n(r),a=o("IvJb"),c=o("Dcy1");a.default.use(i.a),a.default.config.productionTip=!1,new a.default({el:"#app",components:{App:c.a},template:"<App/>"})},s9Ai:function(e,t,o){"use strict";t.a=function(e){return u.get("/uploader-dev-9098/api/v1/qiniu/upload/token?"+e)},t.b=function(e){var t="http://upload.qiniu.com/putb64/-1/key/"+e.path,o={};return(o=c.a.create({timeout:1e4,headers:{"Content-Type":e.contentType,Authorization:e.authorization}})).interceptors.request.use(function(e){return e},function(e){return r.a.reject(e)}),o.interceptors.response.use(function(e){return e.data},function(e){var t=e;return r.a.reject(t)}),o.post(t,e.dataURL)};var n=o("rVsN"),r=o.n(n),i=o("L8d8"),a=o("aozt"),c=o.n(a),u=Object(i.a)("http://gateway-dev.sayabc.com:8000")}},["g6mz"]);
//# sourceMappingURL=cropper2.2d98bc09da9181bf3614.js.map