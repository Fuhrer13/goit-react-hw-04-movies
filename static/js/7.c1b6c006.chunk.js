(this.webpackJsonphomework04=this.webpackJsonphomework04||[]).push([[7],{110:function(t,e,n){"use strict";n.r(e);var r=n(107),a=n(0),c=n.n(a),u=n(52),o=n(60),i=n(106),s=(n(90),n(17));e.default=function(){var t=Object(a.useState)([]),e=Object(r.a)(t,2),n=e[0],f=e[1],p=Object(a.useState)(!1),l=Object(r.a)(p,2),m=l[0],d=l[1],h=Object(a.useState)(!1),b=Object(r.a)(h,2),v=b[0],g=b[1];return Object(a.useEffect)((function(){Object(u.e)().then((function(t){f(t)})).catch((function(t){return g(t)})).finally((function(t){return d(!1)}))}),[]),c.a.createElement(c.a.Fragment,null,v&&i.a.error("Something went wrong!"),m&&c.a.createElement(s.a,null),n&&!v&&!m&&c.a.createElement("div",{className:!0},c.a.createElement("p",{className:!0},"Trending today"),c.a.createElement(o.a,{movies:n})))}},52:function(t,e,n){"use strict";n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return p})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return m})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return h})),n.d(e,"g",(function(){return b}));var r=n(57),a=n.n(r),c=n(58),u=n(59),o=n.n(u),i="https://api.themoviedb.org/3",s="758852d8d40687fc46ebff7df308c64e",f=function(){var t=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat(i,"/trending/movie/day?api_key=").concat(s)).then((function(t){return t.data.results}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat(i,"/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(t){return t.data.results}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(s)).then((function(t){return t.data.cast}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1")).then((function(t){return t.data.results}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h="https://image.tmdb.org/t/p/w342",b="https://image.tmdb.org/t/p/w92"},60:function(t,e,n){"use strict";var r=n(0),a=n.n(r),c=n(2),u=n(10);e.a=function(t){var e=t.movies,n=Object(c.f)();return a.a.createElement("ul",null,!!e.length&&e.map((function(t){var e=t.id,r=t.title;return a.a.createElement("li",{key:e},a.a.createElement(u.b,{to:{pathname:"/movies/".concat(e),state:{from:n}}},r))})))}}}]);
//# sourceMappingURL=7.c1b6c006.chunk.js.map