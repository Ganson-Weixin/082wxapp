(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/paotuiyuan/add-or-update"],{"1c3f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,r,a,u){try{var o=t[a](u),s=o.value}catch(c){return void n(c)}o.done?e(s):Promise.resolve(s).then(i,r)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var u=t.apply(e,n);function o(t){a(u,i,r,o,s,"next",t)}function s(t){a(u,i,r,o,s,"throw",t)}o(void 0)}))}}var o=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("b29f"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{ruleForm:{zhanghao:"",mima:"",xingming:"",nianling:"",xingbie:"",shouji:"",zhaopian:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{zhanghao:!1,mima:!1,xingming:!1,nianling:!1,xingbie:!1,shouji:!1,zhaopian:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var e=u(i.default.mark((function e(n){var r,a,u,o;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(a=e.sent,this.user=a.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=t.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=t.getStorageSync("nickname")),!n.id){e.next=14;break}return this.ruleForm.id=n.id,e.next=12,this.$api.info("paotuiyuan",this.ruleForm.id);case 12:a=e.sent,this.ruleForm=a.data;case 14:if(!n.cross){e.next=49;break}u=t.getStorageSync("crossObj"),e.t0=i.default.keys(u);case 17:if((e.t1=e.t0()).done){e.next=49;break}if(o=e.t1.value,"zhanghao"!=o){e.next=23;break}return this.ruleForm.zhanghao=u[o],this.ro.zhanghao=!0,e.abrupt("continue",17);case 23:if("mima"!=o){e.next=27;break}return this.ruleForm.mima=u[o],this.ro.mima=!0,e.abrupt("continue",17);case 27:if("xingming"!=o){e.next=31;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,e.abrupt("continue",17);case 31:if("nianling"!=o){e.next=35;break}return this.ruleForm.nianling=u[o],this.ro.nianling=!0,e.abrupt("continue",17);case 35:if("xingbie"!=o){e.next=39;break}return this.ruleForm.xingbie=u[o],this.ro.xingbie=!0,e.abrupt("continue",17);case 39:if("shouji"!=o){e.next=43;break}return this.ruleForm.shouji=u[o],this.ro.shouji=!0,e.abrupt("continue",17);case 43:if("zhaopian"!=o){e.next=47;break}return this.ruleForm.zhaopian=u[o],this.ro.zhaopian=!0,e.abrupt("continue",17);case 47:e.next=17;break;case 49:this.styleChange();case 50:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(t){this.xingbieIndex=t.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},zhaopianTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.zhaopian=t.$base.url+"upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=u(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.zhanghao){t.next=3;break}return this.$utils.msg("账号不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(this.ruleForm.xingming){t.next=9;break}return this.$utils.msg("姓名不能为空"),t.abrupt("return");case 9:if(this.ruleForm.nianling){t.next=12;break}return this.$utils.msg("年龄不能为空"),t.abrupt("return");case 12:if(!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){t.next=15;break}return this.$utils.msg("年龄应输入整数"),t.abrupt("return");case 15:if(this.ruleForm.shouji){t.next=18;break}return this.$utils.msg("手机不能为空"),t.abrupt("return");case 18:if(!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){t.next=21;break}return this.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 21:if(!this.ruleForm.id){t.next=26;break}return t.next=24,this.$api.update("paotuiyuan",this.ruleForm);case 24:t.next=28;break;case 26:return t.next=28,this.$api.add("paotuiyuan",this.ruleForm);case 28:this.$utils.msgBack("提交成功");case 29:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,n=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},toggleTab:function(t){this.$refs[t].show()}}};e.default=s}).call(this,n("543d")["default"])},"4c5c":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"519a":function(t,e,n){},"51b6":function(t,e,n){"use strict";var i=n("519a"),r=n.n(i);r.a},"9aae":function(t,e,n){"use strict";n.r(e);var i=n("1c3f"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},a88e:function(t,e,n){"use strict";n.r(e);var i=n("4c5c"),r=n("9aae");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("51b6");var u,o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"21324456",null,!1,i["a"],u);e["default"]=s.exports},bb66:function(t,e,n){"use strict";(function(t){n("5f2d"),n("921b");i(n("66fd"));var e=i(n("a88e"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["bb66","common/runtime","common/vendor"]]]);