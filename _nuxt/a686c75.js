(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{311:function(t,e,n){"use strict";var r=n(9),o=n(654),c=n.n(o);r.default.use(c.a)},312:function(t,e,n){"use strict";n(26);e.a=function(t){var e=t.$axios;e.onRequest((function(t){})),e.onResponse((function(t){var e;return 200===t.status?!0===(null===(e=t.data)||void 0===e?void 0:e.success)?{data:{success:!0,data:t.data.data}}:(5===t.data.code&&(document.cookie="token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",window.location.reload()),{data:{success:!1,data:t.data}}):{data:{success:!1,data:t.data}}})),e.onError((function(t){return Promise.resolve({data:{success:!1,data:t.response.data}})}))}},313:function(t,e,n){"use strict";n.r(e);n(710);var r=n(55),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"centered"},[n("a-card",{staticClass:"card"},[t._t("default")],2)],1)}),[],!1,null,"59a33fc7",null);e.default=component.exports},350:function(t,e,n){var content=n(711);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(126).default)("481887db",content,!0,{sourceMap:!1})},351:function(t,e,n){var content=n(713);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(126).default)("1066a126",content,!0,{sourceMap:!1})},658:function(t,e,n){"use strict";n(57),n(41),n(56),n(26),n(74),n(48),n(75);var r=n(19),o=n(31),c=(n(65),n(45),n(79));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{Box:n(313).default},data:function(){return{gettingLocation:!0}},computed:l(l({},Object(c.c)("app/location",["getAllowLocation"])),{},{currentRouteName:function(){return this.$route.name}}),mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getUserLocation();case 2:t.gettingLocation=!1;case 3:case"end":return e.stop()}}),e)})))()},methods:l(l({},Object(c.b)("app/location",["getUserLocation"])),{},{handleLogoutClick:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}})},j=(n(712),n(55)),component=Object(j.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.getAllowLocation?n("div",["login"!==t.currentRouteName?n("a-row",{staticClass:"header",attrs:{type:"flex",justify:"space-between"}},[n("a-col",{attrs:{span:12}},[n("h2",[t._v("FVC")])]),t._v(" "),n("a-col",{attrs:{span:4}},[n("a-button",{staticClass:"stick-right",attrs:{type:"secondary"},on:{click:t.handleLogoutClick}},[t._v("Đăng xuất")])],1)],1):t._e(),t._v(" "),n("Nuxt")],1):n("div",[n("box",[n("div",{staticClass:"center"},[t.gettingLocation?n("div",[n("a-spin"),t._v(" "),n("h2",[t._v("Đang lấy vị trí")])],1):n("h2",[t._v("Vui lòng mở định vị trước khi sử dụng")])])])],1)])}),[],!1,null,"b24c196e",null);e.a=component.exports},659:function(t,e,n){n(660),t.exports=n(661)},687:function(t,e,n){"use strict";n.r(e),e.default=function(t){t.store.dispatch("auth/initAuth")}},710:function(t,e,n){"use strict";n(350)},711:function(t,e,n){var r=n(125)(!1);r.push([t.i,".centered[data-v-59a33fc7]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.card[data-v-59a33fc7]{width:50vw}@media only screen and (max-width:768px){.card[data-v-59a33fc7]{width:100vw}}",""]),t.exports=r},712:function(t,e,n){"use strict";n(351)},713:function(t,e,n){var r=n(125)(!1);r.push([t.i,".center[data-v-b24c196e]{text-align:center}.header[data-v-b24c196e]{padding:1rem;border:1px solid #ebedf0}.stick-right[data-v-b24c196e]{position:absolute;right:1rem}",""]),t.exports=r},714:function(t,e){},715:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return l})),n.d(e,"mutations",(function(){return f})),n.d(e,"actions",(function(){return j})),n.d(e,"getters",(function(){return m}));n(57),n(41),n(56),n(26),n(74),n(48),n(75);var r=n(31),o=n(19);n(65);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=function(){return{accessToken:""}},f={setToken:function(t,e){t.accessToken=e}},j={initAuth:function(t){(0,t.commit)("setToken",this.$cookies.get("token"))},login:function(t,data){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,o,c,l,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,o=t.dispatch,n.next=3,o("app/location/getUserLocation",null,{root:!0});case 3:return c=n.sent,e.$axios.setToken(!1),n.next=7,e.$axios.$post("/login",d(d({},data),c));case 7:return(l=n.sent).success&&(f=l.data.token,r("setToken",f),e.$cookies.set("token",f,{path:"/"}),e.$axios.setToken(f,"Bearer","common")),n.abrupt("return",l);case 10:case"end":return n.stop()}}),n)})))()},logout:function(t){var e=t.commit;this.$cookies.remove("token"),e("setToken","")}},m={isLogin:function(t){return!!t.accessToken}}},716:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return l})),n.d(e,"getters",(function(){return f})),n.d(e,"mutations",(function(){return j})),n.d(e,"actions",(function(){return m}));n(57),n(41),n(56),n(26),n(74),n(48),n(75);var r=n(31),o=n(19);n(65);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=function(){return{mode:"main",result:!1,phone:""}},f={getAppMode:function(t){return t.mode},getResult:function(t){return t.result},getPhone:function(t){return t.phone}},j={setAppModeMain:function(t){t.mode="main"},setAppModeZalo:function(t,e){t.mode="zalo",t.result=e},setAppModePhone:function(t,e){var n=e.result,r=e.phone;n?(t.phone=r,t.mode="phone-submit"):t.mode="phone-check"}},m={backToMain:function(t){(0,t.commit)("setAppModeMain")},callZaloApi:function(t,data){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,o,c,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,o=t.dispatch,n.next=3,o("app/location/getUserLocation",null,{root:!0});case 3:return c=n.sent,n.next=6,e.$axios.$post("/zalo",d(d({},data),c));case 6:return l=n.sent,r("setAppModeZalo",l.success),n.abrupt("return",l);case 9:case"end":return n.stop()}}),n)})))()},callCheckPhoneApi:function(t,data){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,o,c,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,o=t.dispatch,n.next=3,o("app/location/getUserLocation",null,{root:!0});case 3:return c=n.sent,n.next=6,e.$axios.$post("/phone-check",d(d({},data),c));case 6:return l=n.sent,r("setAppModePhone",{result:l.success,phone:data.phone}),n.abrupt("return",l);case 9:case"end":return n.stop()}}),n)})))()},callSubmitPhoneApi:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,c,l,f,j;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,c=t.state,l=t.dispatch,r.next=3,l("app/location/getUserLocation",null,{root:!0});case 3:return f=r.sent,r.next=6,n.$axios.$post("/phone-submit",d({valid:e,phone:c.phone},f));case 6:return j=r.sent,o("setAppModeMain"),r.abrupt("return",j);case 9:case"end":return r.stop()}}),r)})))()}}},717:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return d})),n.d(e,"getters",(function(){return l}));var r=n(19),o=(n(26),n(718),n(45),n(65),function(){return{allowLocation:!1,province:{loading:!1,data:[],selected:-1},district:{loading:!1,data:[],selected:-1},ward:{loading:!1,data:[],selected:-1}}}),c={loadingProvince:function(t){t.province.loading=!0},loadingDistrict:function(t){t.district.loading=!0},loadingWard:function(t){t.ward.loading=!0},setProvince:function(t,data){t.province.loading=!1,t.province.data=data},setDistrict:function(t,data){t.district.loading=!1,t.district.data=data},setWard:function(t,data){t.ward.loading=!1,t.ward.data=data},setSelectedProvince:function(t,e){t.province.selected=e},setSelectedDistrict:function(t,e){t.district.selected=e},setSelectedWard:function(t,e){t.ward.selected=e},setAllowLocation:function(t,e){t.allowLocation=e}},d={fetchProvince:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(r=t.commit)("loadingProvince"),n.next=4,e.$axios.get("/province");case 4:o=n.sent,c=o.data.data.items,r("setProvince",c);case 7:case"end":return n.stop()}}),n)})))()},setProvince:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,d,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.state,(c=t.commit)("setSelectedProvince",e),c("loadingDistrict"),r.next=5,n.$axios.get("/district",{params:{province_id:o.province.selected}});case 5:d=r.sent,l=d.data.data.items,c("setDistrict",l);case 8:case"end":return r.stop()}}),r)})))()},setDistrict:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,d,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.state,(c=t.commit)("setSelectedDistrict",e),c("loadingWard"),r.next=5,n.$axios.get("/ward",{params:{province_id:o.province.selected,district_id:o.district.selected}});case 5:d=r.sent,l=d.data.data.items,c("setWard",l);case 8:case"end":return r.stop()}}),r)})))()},setWard:function(t,e){(0,t.commit)("setSelectedWard",e)},getUserLocation:function(t){var e=t.commit;return new Promise((function(t,n){navigator.geolocation.getCurrentPosition((function(n){var r=n.coords.latitude,c=n.coords.longitude;e("setAllowLocation",!0),o.allowLocation=!0,t({lat:r,long:c})}),(function(n){e("setAllowLocation",!1),console.log(n),t({})}))}))}},l={getProvince:function(t){return t.province},getDistrict:function(t){return t.district},getWard:function(t){return t.ward},getLocationInfo:function(t){var e,n,r;return{province_name:(null===(e=t.province.data.find((function(p){return p.id===t.province.selected})))||void 0===e?void 0:e.name)||"",district_name:(null===(n=t.district.data.find((function(e){return e.id===t.district.selected})))||void 0===n?void 0:n.name)||"",ward_name:(null===(r=t.ward.data.find((function(e){return e.id===t.ward.selected})))||void 0===r?void 0:r.name)||""}},getAllowLocation:function(t){return t.allowLocation}}},919:function(t,e,n){var map={"./af":420,"./af.js":420,"./ar":421,"./ar-dz":422,"./ar-dz.js":422,"./ar-kw":423,"./ar-kw.js":423,"./ar-ly":424,"./ar-ly.js":424,"./ar-ma":425,"./ar-ma.js":425,"./ar-sa":426,"./ar-sa.js":426,"./ar-tn":427,"./ar-tn.js":427,"./ar.js":421,"./az":428,"./az.js":428,"./be":429,"./be.js":429,"./bg":430,"./bg.js":430,"./bm":431,"./bm.js":431,"./bn":432,"./bn-bd":433,"./bn-bd.js":433,"./bn.js":432,"./bo":434,"./bo.js":434,"./br":435,"./br.js":435,"./bs":436,"./bs.js":436,"./ca":437,"./ca.js":437,"./cs":438,"./cs.js":438,"./cv":439,"./cv.js":439,"./cy":440,"./cy.js":440,"./da":441,"./da.js":441,"./de":442,"./de-at":443,"./de-at.js":443,"./de-ch":444,"./de-ch.js":444,"./de.js":442,"./dv":445,"./dv.js":445,"./el":446,"./el.js":446,"./en-au":447,"./en-au.js":447,"./en-ca":448,"./en-ca.js":448,"./en-gb":449,"./en-gb.js":449,"./en-ie":450,"./en-ie.js":450,"./en-il":451,"./en-il.js":451,"./en-in":452,"./en-in.js":452,"./en-nz":453,"./en-nz.js":453,"./en-sg":454,"./en-sg.js":454,"./eo":455,"./eo.js":455,"./es":456,"./es-do":457,"./es-do.js":457,"./es-mx":458,"./es-mx.js":458,"./es-us":459,"./es-us.js":459,"./es.js":456,"./et":460,"./et.js":460,"./eu":461,"./eu.js":461,"./fa":462,"./fa.js":462,"./fi":463,"./fi.js":463,"./fil":464,"./fil.js":464,"./fo":465,"./fo.js":465,"./fr":466,"./fr-ca":467,"./fr-ca.js":467,"./fr-ch":468,"./fr-ch.js":468,"./fr.js":466,"./fy":469,"./fy.js":469,"./ga":470,"./ga.js":470,"./gd":471,"./gd.js":471,"./gl":472,"./gl.js":472,"./gom-deva":473,"./gom-deva.js":473,"./gom-latn":474,"./gom-latn.js":474,"./gu":475,"./gu.js":475,"./he":476,"./he.js":476,"./hi":477,"./hi.js":477,"./hr":478,"./hr.js":478,"./hu":479,"./hu.js":479,"./hy-am":480,"./hy-am.js":480,"./id":481,"./id.js":481,"./is":482,"./is.js":482,"./it":483,"./it-ch":484,"./it-ch.js":484,"./it.js":483,"./ja":485,"./ja.js":485,"./jv":486,"./jv.js":486,"./ka":487,"./ka.js":487,"./kk":488,"./kk.js":488,"./km":489,"./km.js":489,"./kn":490,"./kn.js":490,"./ko":491,"./ko.js":491,"./ku":492,"./ku.js":492,"./ky":493,"./ky.js":493,"./lb":494,"./lb.js":494,"./lo":495,"./lo.js":495,"./lt":496,"./lt.js":496,"./lv":497,"./lv.js":497,"./me":498,"./me.js":498,"./mi":499,"./mi.js":499,"./mk":500,"./mk.js":500,"./ml":501,"./ml.js":501,"./mn":502,"./mn.js":502,"./mr":503,"./mr.js":503,"./ms":504,"./ms-my":505,"./ms-my.js":505,"./ms.js":504,"./mt":506,"./mt.js":506,"./my":507,"./my.js":507,"./nb":508,"./nb.js":508,"./ne":509,"./ne.js":509,"./nl":510,"./nl-be":511,"./nl-be.js":511,"./nl.js":510,"./nn":512,"./nn.js":512,"./oc-lnc":513,"./oc-lnc.js":513,"./pa-in":514,"./pa-in.js":514,"./pl":515,"./pl.js":515,"./pt":516,"./pt-br":517,"./pt-br.js":517,"./pt.js":516,"./ro":518,"./ro.js":518,"./ru":519,"./ru.js":519,"./sd":520,"./sd.js":520,"./se":521,"./se.js":521,"./si":522,"./si.js":522,"./sk":523,"./sk.js":523,"./sl":524,"./sl.js":524,"./sq":525,"./sq.js":525,"./sr":526,"./sr-cyrl":527,"./sr-cyrl.js":527,"./sr.js":526,"./ss":528,"./ss.js":528,"./sv":529,"./sv.js":529,"./sw":530,"./sw.js":530,"./ta":531,"./ta.js":531,"./te":532,"./te.js":532,"./tet":533,"./tet.js":533,"./tg":534,"./tg.js":534,"./th":535,"./th.js":535,"./tk":536,"./tk.js":536,"./tl-ph":537,"./tl-ph.js":537,"./tlh":538,"./tlh.js":538,"./tr":539,"./tr.js":539,"./tzl":540,"./tzl.js":540,"./tzm":541,"./tzm-latn":542,"./tzm-latn.js":542,"./tzm.js":541,"./ug-cn":543,"./ug-cn.js":543,"./uk":544,"./uk.js":544,"./ur":545,"./ur.js":545,"./uz":546,"./uz-latn":547,"./uz-latn.js":547,"./uz.js":546,"./vi":548,"./vi.js":548,"./x-pseudo":549,"./x-pseudo.js":549,"./yo":550,"./yo.js":550,"./zh-cn":551,"./zh-cn.js":551,"./zh-hk":552,"./zh-hk.js":552,"./zh-mo":553,"./zh-mo.js":553,"./zh-tw":554,"./zh-tw.js":554};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=919}},[[659,10,1,11]]]);