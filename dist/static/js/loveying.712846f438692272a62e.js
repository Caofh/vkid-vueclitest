webpackJsonp([7],{GLi0:function(i,t){},IRaM:function(i,t){},MSAu:function(i,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=s("IvJb"),n=s("L7Pj"),a=s.n(n),c=(s("y1s1"),s("tCoB")),r={name:"Love",data:function(){return{windowHeight:""}},created:function(){this.windowHeight=window.innerHeight},mounted:function(){var i=document.getElementById("audio");a()("html").on("touchstart",function(){i.play()}),this.$nextTick(function(){new c.a(".swiper-container",{effect:"cube",grabCursor:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},initialSlide:1,pagination:{el:".swiper-pagination"},on:{transitionEnd:function(i){console.log(this.activeIndex),a()(".container-content").hide().eq(this.activeIndex).fadeIn()}}}).slideTo(0);new c.a(".swiper-container1",{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:{el:".swiper-pagination"},on:{transitionEnd:function(i){console.log(this.activeIndex),a()(".container-content-1 span").eq(this.activeIndex).fadeIn()}}}),new c.a(".swiper-container3",{effect:"flip",grabCursor:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new c.a(".swiper-container4",{direction:"vertical",initialSlide:1,pagination:{el:".swiper-pagination",clickable:!0}}).slideTo(0)})},methods:{}},d={render:function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"love-ying"},[t("div",{staticClass:"swiper-container4",style:[{height:this.windowHeight+"px"}]},[this._m(0),this._v(" "),t("div",{staticClass:"swiper-pagination"})])])},staticRenderFns:[function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide"},[s("audio",{staticStyle:{display:"none"},attrs:{id:"audio",autoplay:"autoplay",src:"http://118.190.207.166:8000/loveying/redShoes.mp3"}}),i._v(" "),s("div",{staticClass:"swiper-container"},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide"}),i._v(" "),s("div",{staticClass:"swiper-slide"}),i._v(" "),s("div",{staticClass:"swiper-slide"}),i._v(" "),s("div",{staticClass:"swiper-slide"})])]),i._v(" "),s("div",{staticClass:"container-content"},[i._v("\n          坐标：河内"),s("br"),i._v("\n          读万卷书，行万里路。走的路越多，人就会越美。看，这个小美女是谁？\n        ")]),i._v(" "),s("div",{staticClass:"container-content"},[i._v("看，我可以托起一座山！")]),i._v(" "),s("div",{staticClass:"container-content"},[i._v("越南的建筑风格原来是这样的！")]),i._v(" "),s("div",{staticClass:"container-content"},[i._v("我是颖宝，我斜着拍也好看！")])]),i._v(" "),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"swiper-container1"},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide"}),i._v(" "),s("div",{staticClass:"swiper-slide"}),i._v(" "),s("div",{staticClass:"swiper-slide"}),i._v(" "),s("div",{staticClass:"swiper-slide"}),i._v(" "),s("div",{staticClass:"swiper-slide"}),i._v(" "),s("div",{staticClass:"swiper-slide"}),i._v(" "),s("div",{staticClass:"swiper-slide"}),i._v(" "),s("div",{staticClass:"swiper-slide"}),i._v(" "),s("div",{staticClass:"swiper-slide"})])]),i._v(" "),s("div",{staticClass:"container-content-1"},[s("span",[i._v("今天是颖宝的生日")]),i._v(" "),s("span",[i._v("，很幸运能够遇见颖宝")]),i._v(" "),s("span",[i._v("，虽然认识的时间不长（快一年了好吗）")]),i._v(" "),s("span",[i._v("，但是从心底里觉得颖宝是一个")]),i._v(" "),s("span",[i._v("可爱，幽默，贤惠的姑娘")]),i._v(" "),s("span",[i._v("，那么今天是颖宝的生日，祝愿颖宝每天都快乐！")]),i._v(" "),s("span",[i._v("可以遇见自己的白马王子")]),i._v(" "),s("span",[i._v("！被宠成小公主！")]),i._v(" "),s("span",[i._v("有可能幸福就在身边哦😄！")])])]),i._v(" "),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"swiper-container3"},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide"}),i._v(" "),s("div",{staticClass:"swiper-slide"}),i._v(" "),s("div",{staticClass:"swiper-slide"}),i._v(" "),s("div",{staticClass:"swiper-slide"}),i._v(" "),s("div",{staticClass:"swiper-slide"}),i._v(" "),s("div",{staticClass:"swiper-slide"})])]),i._v(" "),s("div",{staticClass:"container-content-3"},[i._v("\n          颖宝，无需证明给所有人看，只得到了一个明白的人就够了。做自己喜欢做的事，喜欢喜欢的人，你就是人生的主角。\n          在你人生这部剧里，相信是有主角光环的，如此秀美、俏丽非凡的小主必将成为颜高腿长有内涵的终极女神！\n        ")])])])}]};var o={name:"App",components:{Love:s("C7Lr")(r,d,!1,function(i){s("dn5O")},"data-v-0b076cb5",null).exports}},l={render:function(){var i=this.$createElement,t=this._self._c||i;return t("div",{attrs:{id:"app"}},[t("Love")],1)},staticRenderFns:[]};var v=s("C7Lr")(o,l,!1,function(i){s("GLi0")},null,null).exports;s("IRaM");e.default.config.productionTip=!1,new e.default({el:"#app",components:{App:v},template:"<App/>"})},dn5O:function(i,t){},y1s1:function(i,t){var s,e;s=document.documentElement,(e=function(){var i=document.documentElement.clientWidth||document.getBoundingClientRect().width;s.style.fontSize=i/10+"px",i=null})(),window.addEventListener("resize",function(){e()}),window.addEventListener("orientationchange",function(){e()})}},["MSAu"]);
//# sourceMappingURL=loveying.712846f438692272a62e.js.map