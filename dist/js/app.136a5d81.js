(function(t){function e(e){for(var i,o,l=e[0],r=e[1],c=e[2],f=0,d=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,l=1;l<s.length;l++){var r=s[l];0!==a[r]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},a={app:0},n=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"39e1":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("d3b7");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Main")],1)},n=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[t._m(0),t._m(1),s("div",{staticClass:"container searchBar"},[s("div",{staticClass:"row align-items-center justify-content-evenly "},[s("div",{staticClass:"col-10 col-sm-10 col-md-4 col-lg-4"},[s("div",{staticClass:"searchBox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userPubId,expression:"userPubId"}],staticClass:"searchInput",attrs:{type:"text",name:"",placeholder:"Type your id, Hint: alejandroreyespena"},domProps:{value:t.userPubId},on:{input:function(e){e.target.composing||(t.userPubId=e.target.value)}}}),s("button",{staticClass:"searchButton",on:{click:function(e){return t.searchPublicId(t.userPubId)}}},[s("i",{staticClass:"material-icons"},[t._v(" search ")])])])])])]),s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-center justify-content-evenly"},[s("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6 profile"},[s("p",[t._v(t._s(t.chargeMsg1))])])])]),s("div",{staticClass:"row justify-content-around userInfoContent",style:{display:t.showUserData}},[s("div",{staticClass:"profileData col-11 col-sm-11 col-md-5 col-lg-5"},[s("div",{staticClass:"row d-flex align-items-center justify-content-center"},[s("div",{staticClass:"col-10 col-sm-10 col-md-10 col-lg-10 imgCol"},[s("img",{staticClass:"profileImg",attrs:{src:t.urlUserPic,alt:""}})]),s("div",{staticClass:"row d-flex align-items-center justify-content-end"},[s("div",{staticClass:"col-1 col-sm-1 col-md-1 col-lg-1"},[s("a",{attrs:{href:t.urlTorreProfile,target:"_blank"}},[t._m(2)])])]),s("div",{staticClass:"col-12 col-sm-12 col-md-9 col-lg-9 descCol"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-11 col-sm-11 col-md-11 col-lg-11"},[s("h3",[t._v(t._s(t.userName))]),s("h6",[t._v(t._s(t.userHeadline))]),s("p",{staticClass:"iconAndText"},[s("i",{staticClass:"material-icons iconText"},[t._v("public")]),t._v(t._s(t.userLocation)+" ")]),s("p",{staticClass:"iconAndText"},[s("i",{staticClass:"material-icons iconText"},[t._v("line_weight")]),t._v("Profile weight: "+t._s(t.userWeight)+" ")])])])])])]),s("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6 interests profileRowInter2"},[t._m(3),s("span",{},[t._v("These are your proficient skills, click on any skill")]),s("hr"),s("div",{staticClass:"container"},[s("div",{staticClass:"d-flex flex-wrap align-items-center justify-content-between"},t._l(t.userStrengthsData,(function(e){return s("div",{key:e.name},[s("button",{staticClass:"btn btn-secondary buttonSkill",attrs:{type:"button"},on:{click:function(s){return t.getSkillInfo(e.id)}}},[t._v(" "+t._s(e.name))])])})),0)])])]),s("hr"),s("b-modal",{ref:"my-modal",attrs:{size:"xl","hide-footer":"",title:"","header-bg-variant":t.headerBgVariant,"body-bg-variant":t.bodyBgVariant}},[s("InfoSkill",{attrs:{skillInfo:t.skillInfo}})],1),t._m(4)],1)},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid navigation"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 d-flex justify-content-center align-items-center"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("h2",[s("b",[t._v("Skills")]),t._v(" "),s("span",{staticClass:"minimalLetter"},[t._v("from")]),t._v(" "),s("span",{staticClass:"torre"},[t._v("Torre.co")])])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row align-items-center justify-content-evenly indications"},[s("div",{staticClass:"col-10 col-sm-10 col-md-6 col-lg-6"},[s("p",[t._v(" Enter for your profile, and get your id in the browser, like this: ")]),s("div",{staticClass:"infoUser"},[s("p",{staticClass:"infoDesc"},[t._v("https://torre.co/en/"),s("b",[t._v("alejandroreyespena")])])]),s("p",[t._v(" Let's see your profile skills at Torre.co ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"linkButton"},[s("i",{staticClass:"material-icons"},[t._v("link")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h4",[t._v("Your profile "),s("b",[t._v("Skills")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"container-fluid"},[s("div",{staticClass:"footerMain"},[s("div",{staticClass:"row d-flex align-items-center justify-content-around"},[s("div",{staticClass:"col-6 col-sm-6 col-md-6 col-lg-6"},[s("div",{staticClass:"el-contact"},[s("p",[t._v("Alejandro Reyes P.")])])]),s("div",{staticClass:"col-6 col-sm-6 col-md-6 col-lg-6"},[s("div",{staticClass:"el-contact"},[s("p",[t._v("Github")])])])])])])}],r=(s("b0c0"),s("b680"),s("a9e3"),s("159b"),s("bc3a")),c=s.n(r),u={headers:{"Access-Control-Allow-Origin":"*"}},f={getUserInfo:function(t,e){return c.a.get(e+t,u)},getSkillInfo:function(t,e,s){return c.a.get(s+t+"/"+e,u)}},d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"containerSkillsSpec"},[s("div",{staticClass:"row d-flex align-items-center justify-content-center"},[s("div",{staticClass:"col-4 col-sm-4 col-md-4 col-lg-4"},[s("p",{staticClass:"iconTextTitle"},[s("i",{staticClass:"material-icons iconText"},[t._v("fact_check")]),t._v("Skill: "+t._s(t.skillInfo.skillName)+" ")])])]),s("div",{staticClass:"skillData",style:{display:t.showNoDataSkill}},[t._m(0)]),t._l(t.skillData,(function(e){return s("div",{key:e.id,staticClass:"skillData"},[s("div",{staticClass:"row d-flex align-items-center justify-content-around"},[s("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-6"},[s("p",{staticClass:"iconText"},[s("i",{staticClass:"material-icons iconText"},[t._v("work")]),t._v("Job Profile: "+t._s(e.name)+" ")])]),s("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-6"},[s("p",{staticClass:"iconText"},[s("i",{staticClass:"material-icons iconText"},[t._v("task_alt")]),t._v("Verifications: "+t._s(e.verifications)+" ")])])]),s("div",{staticClass:"row d-flex align-items-center justify-content-around"},t._l(e.organizations,(function(e){return s("div",{key:e.name,staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[s("p",{staticClass:"iconText"},[s("i",{staticClass:"material-icons iconText"},[t._v("corporate_fare")]),t._v(t._s(e.name)+" ")])])})),0),s("div",{staticClass:"row d-flex align-items-center justify-content-around"},[s("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[s("p",{staticClass:"iconTextInfo"},[s("i",{staticClass:"material-icons iconText"},[t._v("info")]),t._v("Additional Info: "+t._s(""==e.additionalInfo?"No aditional info":e.additionalInfo)+" ")])])])])}))],2)},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row d-flex align-items-center justify-content-around"},[s("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-6"},[s("p",{staticClass:"iconText"},[s("i",{staticClass:"material-icons iconText"},[t._v("warning_amber")]),t._v(" There´s no related experience to this skill, please select another one. ")])])])}],p={name:"InfoSkill",props:["skillInfo"],data:function(){return{skillData:[],showNoDataSkill:"flex"}},methods:{prepareData:function(){this.skillData=JSON.parse(this.skillInfo.relatedExperience),0==this.skillData.length?this.showNoDataSkill="flex":this.showNoDataSkill="none"}},mounted:function(){this.prepareData()}},m=p,v=(s("aa81"),s("2877")),g=Object(v["a"])(m,d,h,!1,null,"14617a21",null),_=g.exports,C={name:"Main",components:{InfoSkill:_},data:function(){return{apiRootUrl:"",refCount:0,isLoading:!1,userPubId:"",errors:[],showUserData:"none",chargeMsg1:"",userData:null,userName:"",userLocation:"",userHeadline:"",userWeight:"",urlUserPic:"",urlTorreProfile:"",userStrengthsData:[],torreUrl:"",skillInfo:{skillName:"",relatedExperience:""},headerBgVariant:"dark",bodyBgVariant:"dark"}},methods:{setLoading:function(t){t?(this.chargeMsg1="Wait a few seconds ...",this.refCount++,this.isLoading=!0):this.refCount>0&&(this.refCount--,this.isLoading=this.refCount>0)},searchPublicId:function(t){var e=this;""!=this.userPubId?(this.setLoading(!0),f.getUserInfo(t,this.apiRootUrl).then((function(t){e.setLoading(!1),"Not found"==t.data.response?(e.showUserData="none",e.chargeMsg1="We didn't found your profile"):(e.showUserData="flex",e.userData=t.data.response,e.chargeMsg1="So here's part of your profile in Torre",e.prepareDataUser(e.userData))})).catch((function(t){e.setLoading(!1),e.errors.push(t)}))):this.chargeMsg1="You haven't enter your profile name"},prepareDataUser:function(t){this.userWeight=0,this.userName=t.name,this.urlUserPic=t.picture,this.userLocation=t.locationName,this.userHeadline=t.professionalHeadline,this.userWeight=this.formatToNumber(t.weight),this.urlTorreProfile=this.torreUrl+this.userPubId,this.userStrengthsData=this.filterSkills(JSON.parse(t.strengths))},formatToNumber:function(t){return Number(t).toFixed(0)},filterSkills:function(t){var e=[];return t.forEach((function(t){"proficient"==t.proficiency&&e.push(t)})),e},showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide()},getSkillInfo:function(t){var e=this;f.getSkillInfo(this.userPubId,t,this.$config.URL_API_ROOT).then((function(t){var s=t.data.response;"OK"==t.data.status&&(e.skillInfo.skillName=s.skillName,e.skillInfo.relatedExperience=s.relatedExperience,e.showModal())})).catch((function(t){e.errors.push(t)}))}},mounted:function(){this.apiRootUrl=this.$config.URL_API_ROOT,this.torreUrl=this.$config.URL_TORRE}},b=C,y=(s("fa9e"),Object(v["a"])(b,o,l,!1,null,"052f9140",null)),k=y.exports,w={name:"App",components:{Main:k}},x=w,I=(s("034f"),Object(v["a"])(x,a,n,!1,null,null,null)),T=I.exports,j=s("5f5b");s("f9e3"),s("2dd8");i["default"].use(j["a"]),i["default"].config.productionTip=!1,fetch("/config.json").then((function(t){return t.json()})).then((function(t){i["default"].prototype.$config=t,new i["default"]({render:function(t){return t(T)}}).$mount("#app")}))},"85ec":function(t,e,s){},aa81:function(t,e,s){"use strict";s("c405")},c405:function(t,e,s){},fa9e:function(t,e,s){"use strict";s("39e1")}});
//# sourceMappingURL=app.136a5d81.js.map