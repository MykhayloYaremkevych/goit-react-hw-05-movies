"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[784],{9396:function(n,t,r){r.d(t,{Df:function(){return s},Pg:function(){return f},tx:function(){return v},zi:function(){return h},zv:function(){return p}});var e=r(5861),c=r(4687),a=r.n(c),u="https://api.themoviedb.org/",o="f68a95841909bbb245d2b540e82c3a85",i=function(){var n=(0,e.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.ok){n.next=2;break}throw new Error("Oops... something went wrong...");case 2:return n.abrupt("return",t.json());case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"3/trending/all/day?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",i(t));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"3/movie/").concat(t,"?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",i(r));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"3/movie/").concat(t,"/credits?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",i(r));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"3/movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",i(r));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"3/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",i(r));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3784:function(n,t,r){r.r(t),r.d(t,{default:function(){return x}});var e,c,a=r(5861),u=r(9439),o=r(4687),i=r.n(o),s=r(2791),f=r(9396),p=r(7689),v=r(168),h=r(5706),l=r(1087),d=(0,h.Z)(l.rU)(e||(e=(0,v.Z)(["\n  text-decoration: none;\n  color: black;\n  &:hover {\n    color: #3eac9c;\n  }\n"]))),w=h.Z.li(c||(c=(0,v.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n"]))),m=r(184);function x(){var n=(0,s.useState)([]),t=(0,u.Z)(n,2),r=t[0],e=t[1],c=(0,p.TH)();(0,s.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.Df)();case 3:t=n.sent,e(t.results),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]);return(0,m.jsx)("ul",{children:r.map((function(n){var t=n.title,r=n.name,e=n.id,a=r||t;return(0,m.jsx)(w,{children:(0,m.jsx)(d,{to:"/movies/".concat(e),state:{from:c},children:a})},e)}))})}},5861:function(n,t,r){function e(n,t,r,e,c,a,u){try{var o=n[a](u),i=o.value}catch(s){return void r(s)}o.done?t(i):Promise.resolve(i).then(e,c)}function c(n){return function(){var t=this,r=arguments;return new Promise((function(c,a){var u=n.apply(t,r);function o(n){e(u,c,a,o,i,"next",n)}function i(n){e(u,c,a,o,i,"throw",n)}o(void 0)}))}}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=784.50952277.chunk.js.map