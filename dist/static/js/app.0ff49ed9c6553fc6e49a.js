webpackJsonp([0],[,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var i=n(1),a=n(127),s=n(100),r=(n.n(s),n(105)),o=n.n(r),l=n(107),u=(n.n(l),n(106)),c=n.n(u),p=n(108),d=n.n(p),f=n(110),v=n.n(f),h=n(104),m=n.n(h),y=n(109),g=n.n(y),b=n(103);n.n(b);i.default.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Home",component:o.a},{path:"/text",name:"text",component:g.a},{path:"/pic",name:"pic",component:c.a},{path:"/music",name:"music",component:d.a},{path:"/video",name:"video",component:v.a},{path:"/user-park",name:"user-park",component:c.a},{path:"/other-list",name:"otherList",component:c.a},{path:"/about-web",name:"about-web",component:m.a},{path:"/about-person",name:"about-person",component:m.a},{path:"*",component:o.a}]})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){function i(t){n(77)}var a=n(0)(n(32),n(115),i,null,null);t.exports=a.exports},,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(27),a=n.n(i);e.default={props:{narrow:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!1},showlrc:{type:Number,default:0},mutex:{type:Boolean,default:!1},theme:{type:String,default:"#b7daff"},mode:{type:String,default:"circulation"},preload:{type:String,default:"auto"},listmaxheight:String,music:{type:[Object,Array],required:!0,validator:function(t){var e=void 0;e=t instanceof Array?t:[t];for(var n=0;n<e.length;n++){var i=e[n];if(!i.url||!i.title||!i.author)return i.title=i.title||"Untitled",i.author=i.author||"Unknown",!1}return!0}}},data:function(){return{control:null}},watch:{music:function(t){this.control.option.music=t,this.control.setMusic(0),this.autoplay&&this.control.play(),this.$emit("change",t)}},mounted:function(){var t=this,e=this.control=new a.a({element:this.$el,narrow:this.narrow,autoplay:this.autoplay,showlrc:this.showlrc,mutex:this.mutex,theme:this.theme,preload:this.preload,mode:this.mode,listmaxheight:this.listmaxheight,music:this.music});e.on("play",function(){t.$emit("play")}),e.on("pause",function(){t.$emit("pause")}),e.on("canplay",function(){t.$emit("canplay")}),e.on("playing",function(){t.$emit("playing")}),e.on("ended",function(){t.$emit("ended")}),e.on("error",function(){t.$emit("error")})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=n(15)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&i){delete t.options.notNextTick;var e=!1;for(var n in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(n)&&t.options[n]&&(e=!0,t.defaultSwiperClasses[n]=t.options[n]);var a=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(a):a()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(45),a=n.n(i);window.videojs=n(16),videojs=videojs.default||videojs,e.default={name:"video-player",props:{options:{type:Object,required:!0},start:{type:Number,default:function(){return 0}},playsinline:{type:Boolean,default:function(){return!1}},customEventName:{type:String,default:function(){return"statechanged"}}},mounted:function(){this.player||this.initialize()},beforeDestroy:function(){this.player&&this.dispose()},methods:{initialize:function(){var t=this;this.player=null;var e=a()({autoplay:!1,controls:!0,preload:"auto",fluid:!1,muted:!1,width:"100%",height:"360",language:"en",controlBar:{remainingTimeDisplay:!1,playToggle:{},progressControl:{},fullscreenToggle:{},volumeMenuButton:{inline:!1,vertical:!0}},techOrder:["html5"],plugins:{}},this.options),n=this.playsinline;n&&(this.$el.children[0].setAttribute("playsinline",n),this.$el.children[0].setAttribute("webkit-playsinline",n));var i=function(e,n){if(e&&t.$emit(e,t.player),n){var i={};i[e]=n,t.$emit(t.customEventName,i)}};e.plugins&&delete e.plugins.__ob__,this.player=videojs(this.$el.children[0],e,function(){var e=this;t.$emit("ready",t.player);for(var n=["loadeddata","canplay","canplaythrough","play","pause","waiting","playing","ended"],a=0;a<n.length;a++)!function(t){e.on(t,function(){i(t,!0)})}(n[a]);this.on("timeupdate",function(){i("timeupdate",this.currentTime())})})},dispose:function(){if(this.player&&videojs){if(this.player.pause&&this.player.pause(),videojs(this.$el.children[0]).dispose(),!this.$el.children.length){var t=document.createElement("video");t.className="video-js",this.$el.appendChild(t)}this.player=null}}},watch:{options:{deep:!0,handler:function(t,e){this.dispose(),t&&t.sources&&t.sources.length&&this.initialize()}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{msg:"Copyright © 2016 Your Company - More Templates  - Collect from "}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{title:"这是Header",theme:"light"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{playerOptions:{muted:!0,language:"en",playbackRates:[.7,1,1.5,2],sources:[{type:"video/mp4",src:"https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"}],poster:"/public/img/full_image.jpg"}}},props:{fff:Object},mounted:function(){var t=this;setTimeout(function(){t.player.muted(!1)},2e3)},computed:{player:function(){return this.$refs.videoPlayer.player}},methods:{onPlayerPlay:function(t){},onPlayerPause:function(t){},onPlayerEnded:function(t){},onPlayerLoadeddata:function(t){},onPlayerWaiting:function(t){},onPlayerPlaying:function(t){},onPlayerTimeupdate:function(t){},onPlayerCanplay:function(t){},onPlayerCanplaythrough:function(t){},playerStateChanged:function(t){},playerReadied:function(t){t.currentTime(10)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{msg:"这是about页面"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(102),a=n.n(i),s=n(101),r=n.n(s);e.default={data:function(){return{title:"彭洋的网站-终于上线了",dec:"人生中的一道道门槛，迈过了就是门，迈不过就是坎",msg:"这是首页"}},components:{MyHeader:a.a,MyFooter:r.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{msg:"这是目录list"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{msg:"这是目录list",columns1:[{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"地址",key:"address"}],data1:[{name:"王小明",age:18,address:"北京市朝阳区芍药居"},{name:"张小刚",age:25,address:"北京市海淀区西二旗"}]}},created:function(){this.$http.post("/api/exerciseapi/monitordetail",{userName:"ershenyuan",password:"123"}).then(function(t){},function(t){})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(96),a=n.n(i);e.default={data:function(){return{msg:"hello music",arr:["","","",""],tabNum:0,musicData:{title:"Preparation",author:"彭洋",url:"http://devtest.qiniudn.com/Preparation.mp3",pic:"http://devtest.qiniudn.com/Preparation.jpg",lrc:"[00:00.00]lrc here\n[00:01.00]aplayer"}}},methods:{tab:function(t){this.tabNum=t}},components:{VueAplayer:a.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(8);n.n(i);e.default={data:function(){return{msg:"hello world",swiperOption:{setWrapperSize:!0,paginationClickable:!0,mousewheelControl:!1,observeParents:!0,prevButton:".swiper-button-prev",nextButton:".swiper-button-next",loop:!0},swiperSlides:[1,2,3,4,5]}},methods:{changeStar:function(t){console.log(t)}},components:{swiper:i.swiper,swiperSlide:i.swiperSlide}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{playerOptions:{poster:"/public/img/full_image.jpg"}}},props:{},mounted:function(){},computed:{},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=n(24),s=n.n(a),r=n(17),o=n(23),l=n.n(o),u=n(18),c=(n.n(u),n(25)),p=n(22),d=(n.n(p),n(20)),f=(n.n(d),n(21)),v=(n.n(f),n(19)),h=(n.n(v),n(26)),m=n.n(h),y=n(8),g=n.n(y);i.default.use(m.a),i.default.use(g.a),i.default.config.productionTip=!1,i.default.use(l.a),i.default.use(c.a),new i.default({el:"#app",router:r.a,template:"<App/>",components:{App:s.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"},function(t,e,n){t.exports=n.p+"static/img/full_image.996c8b3.jpg"},function(t,e,n){t.exports=n.p+"static/img/text_info.46b09e8.jpg"},,,,,function(t,e,n){var i=n(0)(n(28),n(124),null,null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(29),n(123),null,null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(30),n(116),null,null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(31),n(120),null,null,null);t.exports=i.exports},function(t,e,n){function i(t){n(79)}var a=n(0)(n(33),n(121),i,"data-v-764a8d59",null);t.exports=a.exports},function(t,e,n){function i(t){n(78)}var a=n(0)(n(34),n(117),i,"data-v-44b41a32",null);t.exports=a.exports},function(t,e,n){function i(t){n(73)}var a=n(0)(n(35),n(111),i,"data-v-024f524e",null);t.exports=a.exports},function(t,e,n){function i(t){n(82)}var a=n(0)(n(36),n(126),i,"data-v-e8af7108",null);t.exports=a.exports},function(t,e,n){var i=n(0)(n(37),n(119),null,null,null);t.exports=i.exports},function(t,e,n){function i(t){n(76)}var a=n(0)(n(38),n(114),i,"data-v-32c9ee79",null);t.exports=a.exports},function(t,e,n){var i=n(0)(n(39),n(118),null,null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(40),n(125),null,null,null);t.exports=i.exports},function(t,e,n){function i(t){n(81),n(80)}var a=n(0)(n(41),n(122),i,"data-v-7bd7f00a",null);t.exports=a.exports},function(t,e,n){function i(t){n(75)}var a=n(0)(n(42),n(113),i,"data-v-13f267c7",null);t.exports=a.exports},function(t,e,n){function i(t){n(74)}var a=n(0)(n(43),n(112),i,"data-v-0b73d95e",null);t.exports=a.exports},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"header"}},[i("Menu",{attrs:{mode:"horizontal",theme:t.theme,"active-name":"1"}},[i("Row",[i("Col",{staticStyle:{"padding-left":"15px"},attrs:{span:"12"}},[i("div",{staticStyle:{"border-bottom":"0","box-sizing":"border-box",background:"none"}},[i("img",{staticStyle:{height:"30px","margin-top":"15px"},attrs:{src:n(89)}})])]),t._v(" "),i("Col",{staticStyle:{"padding-right":"15px","border-bottom":"0"},attrs:{span:"12"}},[i("Submenu",{staticStyle:{float:"right","border-bottom":"0","border-left":"1px solid #fff"},attrs:{name:"2"}},[i("template",{slot:"title"},[i("Icon",{attrs:{type:"stats-bars"}}),t._v("\n                        简介\n                    ")],1),t._v(" "),i("router-link",{attrs:{to:"about-web"}},[i("Menu-item",{attrs:{name:"3-1"}},[t._v("网站简介")])],1),t._v(" "),i("router-link",{attrs:{to:"about-person"}},[i("Menu-item",{attrs:{name:"3-1"}},[t._v("个人简介")])],1),t._v(" "),i("router-link",{attrs:{to:"about-other"}},[i("Menu-item",{attrs:{name:"3-1"}},[t._v("其他简介")])],1)],2),t._v(" "),i("Submenu",{staticStyle:{float:"right","border-bottom":"0","border-left":"1px solid #fff"},attrs:{name:"2"}},[i("template",{slot:"title"},[i("router-link",{attrs:{to:"list"}},[i("Icon",{attrs:{type:"stats-bars"}}),t._v("\n                            目录\n                        ")],1)],1),t._v(" "),i("Menu-group",{attrs:{title:"常见列表"}},[i("router-link",{attrs:{to:"text"}},[i("Menu-item",{attrs:{name:"3-1"}},[t._v("文章")])],1),t._v(" "),i("router-link",{attrs:{to:"pic"}},[i("Menu-item",{attrs:{name:"3-1"}},[t._v("图片")])],1),t._v(" "),i("router-link",{attrs:{to:"music"}},[i("Menu-item",{attrs:{name:"3-1"}},[t._v("音乐")])],1),t._v(" "),i("router-link",{attrs:{to:"video"}},[i("Menu-item",{attrs:{name:"3-1"}},[t._v("视频")])],1)],1),t._v(" "),i("Menu-group",{attrs:{title:"其他"}},[i("router-link",{attrs:{to:"user-park"}},[i("Menu-item",{attrs:{name:"3-1"}},[t._v("用户社区")])],1),t._v(" "),i("router-link",{attrs:{to:"other-list"}},[i("Menu-item",{attrs:{name:"3-1"}},[t._v("其他")])],1)],1)],2),t._v(" "),i("Menu-item",{staticStyle:{float:"right","border-bottom":"0","border-left":"1px solid #fff"},attrs:{name:"1"}},[i("Icon",{attrs:{type:"ios-people"}}),t._v("\n                    首页                        \n                ")],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",{staticClass:"video_example"},[t._v("\n      视频示例图片\n    ")]),t._v(" "),n("div",{staticClass:"vidoe_list"},[n("div",[n("h3"),t._v(" "),n("Row",t._l(4,function(e){return n("Col",{attrs:{span:"6"}},[n("div",[n("img",{attrs:{src:"http://devtest.qiniudn.com/Preparation.jpg",alt:"",width:"100%;"}})]),t._v(" "),n("div",[n("h3",[t._v("示例名称")]),t._v(" "),n("div",[t._v("这是一段描述")]),t._v(" "),n("p",[t._v("这是一段描述这是一段描述这是一段描述")])])])}))],1)])])])},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("div",{staticStyle:{height:"230px",background:"#b7bbbf"}},[i("swiper",{staticStyle:{height:"100%"},attrs:{options:t.swiperOption}},[i("swiperSlide",{staticStyle:{background:"#4bb5ff"}},[t._v("I'm Slide 111")]),t._v(" "),i("swiperSlide",{staticStyle:{background:"#f00"}},[t._v("I'm Slide 222")]),t._v(" "),i("swiperSlide",{staticStyle:{background:"orange"}},[t._v("I'm Slide 333")]),t._v(" "),i("swiperSlide",{staticStyle:{background:"pink"}},[t._v("I'm Slide 444")]),t._v(" "),i("div",{staticClass:"swiper-button-prev",slot:"button-prev"}),t._v(" "),i("div",{staticClass:"swiper-button-next",slot:"button-next"})],1)],1),t._v(" "),i("div",{staticClass:"list_content",staticStyle:{position:"relative","z-index":"4"}},[i("Card",{staticClass:"nav_blank",attrs:{bordered:!1}},[i("Row",[i("Col",{attrs:{span:"10"}},[i("p",[t._v("按方向")]),t._v(" "),t._l(12,function(e){return i("Button",{key:e,staticStyle:{"margin-bottom":"10px","margin-right":"10px"},attrs:{type:"ghost"}},[t._v("分类"+t._s(e))])})],2),t._v(" "),i("Col",{attrs:{span:"14"}},[i("p",[t._v("热门分类")]),t._v(" "),t._l(12,function(e){return i("Button",{key:e,staticStyle:{"margin-bottom":"10px","margin-right":"10px"},attrs:{type:"ghost"}},[t._v("热门分类"+t._s(e))])})],2)],1)],1),t._v(" "),i("div",[i("Row",t._l(12,function(e){return i("Col",{key:e,staticClass:"text_box",attrs:{span:"6"}},[i("div",{staticClass:"text_box_info"},[i("div",{staticClass:"img_box"},[i("img",{attrs:{width:"100%",src:n(91),alt:""}})]),t._v(" "),i("div",{staticClass:"info_box"},[i("h3",[t._v("这是一段标题")]),t._v(" "),i("p",[t._v("这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述")]),t._v(" "),i("div",{staticClass:"border_title"},[i("p",[t._v("中级！123人学习")]),t._v(" "),i("Rate",{attrs:{"show-text":"","allow-half":"",value:"2.5"},on:{"on-change":t.changeStar}},[i("span",{staticStyle:{color:"#f5a623"}},[t._v("2.5")])])],1)])])])}))],1),t._v(" "),i("div",{staticStyle:{"text-align":"center","padding-top":"25px"}},[i("Page",{attrs:{total:100}})],1)],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("MyHeader"),t._v(" "),n("div",{staticClass:"home_box"},[n("div",{staticClass:"null_height"}),t._v(" "),n("div",{staticClass:"home_content"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("h3",[t._v(t._s(t.dec))])]),t._v(" "),n("div",{staticClass:"btn_box"},[n("Button",{staticClass:"btn_nav",attrs:{type:"success",shape:"circle",size:"large"}},[n("Icon",{attrs:{type:"power"}}),t._v(" 目录")],1),t._v("   \n            "),n("Button",{staticClass:"btn_nav",staticStyle:{background:"#00ADB5"},attrs:{type:"success",shape:"circle",size:"large"}},[n("Icon",{attrs:{type:"ios-paw"}}),t._v(" 简介")],1)],1)]),t._v(" "),n("MyFooter")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer_box"},[n("h3",[t._v(t._s(t.msg))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n    "+t._s(t.msg)+"\n    \n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n    "+t._s(t.msg)+"\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video-player"},[n("video",{staticClass:"video-js"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"music_box"},[n("div",{staticClass:"music_content center"},[n("div",{staticStyle:{height:"200px",background:"#4bb5ff"}}),t._v(" "),n("div",{staticStyle:{display:"inline-block",width:"90%",padding:"20px"}},[n("h3",{staticClass:"center music_sort"},[n("Row",t._l(6,function(e,i){return n("Col",{key:i,attrs:{span:"4"}},[n("div",{class:{sort_title:i===t.tabNum,sort_title_default:!0},on:{click:function(e){t.tab(i)}}},[n("img",{staticStyle:{width:"50%"},attrs:{src:"http://devtest.qiniudn.com/Preparation.jpg",alt:""}}),t._v(" "),n("h3",[t._v("全部")])])])}))],1),t._v(" "),n("Row",t._l(10,function(e,i){return n("Col",{key:i,staticStyle:{padding:"5px"},attrs:{span:"6"}},[n("div",{staticClass:"audio_box"},[n("VueAplayer",{attrs:{music:t.musicData}})],1)])}))],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"aplayer"})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    "+t._s(t.msg)+"\n    "),n("Table",{attrs:{columns:t.columns1,data:t.data1}})],1)},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("div",{staticClass:"md-subhead"},[i("h3",{staticClass:"center video_title"},[i("Icon",{attrs:{type:"ios-videocam"}}),t._v(" 视频列表\n      ")],1)])]),t._v(" "),i("div",[i("div",{staticClass:"item"},[i("div",{staticClass:"player"},[i("video-player",{ref:"videoPlayer",staticClass:"vjs-custom-skin",attrs:{options:t.playerOptions,playsinline:!0},on:{play:function(e){t.onPlayerPlay(e)},pause:function(e){t.onPlayerPause(e)},ended:function(e){t.onPlayerEnded(e)},loadeddata:function(e){t.onPlayerLoadeddata(e)},waiting:function(e){t.onPlayerWaiting(e)},playing:function(e){t.onPlayerPlaying(e)},timeupdate:function(e){t.onPlayerTimeupdate(e)},canplay:function(e){t.onPlayerCanplay(e)},canplaythrough:function(e){t.onPlayerCanplaythrough(e)},ready:t.playerReadied,statechanged:function(e){t.playerStateChanged(e)}}})],1)]),t._v(" "),i("div",[i("Row",[i("Col",{attrs:{span:"6"}},[i("img",{staticStyle:{width:"100%"},attrs:{src:n(90),alt:"图片"}})]),t._v(" "),i("Col",{attrs:{span:"18"}},[i("p",[t._v("视频简介")]),t._v(" "),i("p",[t._v("时长：2223")]),t._v(" "),i("p",[t._v("内容：阿发是方式发送大")])])],1)],1),t._v(" "),i("div",[i("Row",t._l(4,function(e){return i("Col",{attrs:{span:"6"}},[i("h3",[t._v("推荐视频")]),t._v(" "),i("div",[i("p",[t._v("\n                奥发哦是否好石佛暗示法奥是否按时佛奥石佛asofo啊是\n              ")])])])}))],1)])])},staticRenderFns:[]}},,,,,function(t,e){},function(t,e){}],[44]);
//# sourceMappingURL=app.0ff49ed9c6553fc6e49a.js.map