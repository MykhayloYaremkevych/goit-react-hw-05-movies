"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{9396:function(n,t,r){r.d(t,{Df:function(){return s},Pg:function(){return f},tx:function(){return v},zi:function(){return h},zv:function(){return p}});var e=r(5861),c=r(4687),a=r.n(c),u="https://api.themoviedb.org/",i="f68a95841909bbb245d2b540e82c3a85",o=function(){var n=(0,e.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.ok){n.next=2;break}throw new Error("Oops... something went wrong...");case 2:return n.abrupt("return",t.json());case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"3/trending/all/day?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",o(t));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"3/movie/").concat(t,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",o(r));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"3/movie/").concat(t,"/credits?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",o(r));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"3/movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",o(r));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"3/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",o(r));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3387:function(n,t,r){r.r(t),r.d(t,{default:function(){return l}});var e,c=r(5861),a=r(9439),u=r(4687),i=r.n(u),o=r(7689),s=r(2791),f=r(9396),p=r(168),v=r(5706).Z.img(e||(e=(0,p.Z)(["\n  width: 100px;\n  height: 150px;\n"]))),h=r(184);function l(){var n=(0,s.useState)({}),t=(0,a.Z)(n,2),r=t[0],e=t[1],u=(0,o.UO)().movieId;(0,s.useEffect)((function(){var n=function(){var n=(0,c.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.zv)(u);case 3:t=n.sent,e(t),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[u]);var p=function(n,t){return(0,h.jsx)("ul",{children:n.map((function(n){var r=n.name,e=n.id,c=n.profile_path,a=n.character,u=n.job,i=c?"https://image.tmdb.org/t/p/original".concat(c):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";return(0,h.jsxs)("li",{children:[(0,h.jsx)(v,{src:i,alt:r}),(0,h.jsx)("p",{children:r}),(0,h.jsx)("p",{children:t?a:u})]},e)}))})};return(0,h.jsxs)(h.Fragment,{children:[r.cast&&p(r.cast,!0),r.crew&&p(r.crew,!1)]})}},5861:function(n,t,r){function e(n,t,r,e,c,a,u){try{var i=n[a](u),o=i.value}catch(s){return void r(s)}i.done?t(o):Promise.resolve(o).then(e,c)}function c(n){return function(){var t=this,r=arguments;return new Promise((function(c,a){var u=n.apply(t,r);function i(n){e(u,c,a,i,o,"next",n)}function o(n){e(u,c,a,i,o,"throw",n)}i(void 0)}))}}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=387.b7f4cb7d.chunk.js.map