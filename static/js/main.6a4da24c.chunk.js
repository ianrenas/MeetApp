(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{30:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(23),s=n.n(o),c=(n(30),n(1)),i=n.n(c),u=n(8),l=n(4),d=n(5),h=n(7),p=n(6),f=n(0),m=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={event:{},collapsed:!0},e.handleClick=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.event,t=this.state.collapsed;return Object(f.jsxs)("div",{className:"event",children:[Object(f.jsx)("h2",{className:"summary",children:e.summary}),Object(f.jsxs)("p",{className:"start-date",children:[e.start.dateTime," (",e.start.timeZone,")"]}),Object(f.jsx)("br",{}),Object(f.jsxs)("p",{className:"location",children:["@",e.summary," | ",e.location]}),!t&&Object(f.jsxs)("div",{className:"extra-details ".concat(this.state.collapsed?"hide":"show"),children:[Object(f.jsx)("h3",{children:"About Event"}),Object(f.jsx)("a",{href:e.htmlLink,role:"noopener",target:"_blank",children:"See details on Google calendar"}),Object(f.jsx)("p",{className:"event-description",children:e.description})]}),Object(f.jsx)("button",{className:"".concat(t?"show":"hide","-details-btn"),onClick:this.handleClick,children:t?"Show Details":"Hide Details"})]})}}]),n}(a.Component),v=m,b=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(f.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(v,{event:e})},e.id)}))})}}]),n}(a.Component),j=b,w=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"CitySearch",children:[Object(f.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(f.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(f.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),g=w,y=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.updateEventNumber=function(t){var n=t.target.value;e.setState({numberOfEvents:n})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{className:"NumberOfEvents",children:Object(f.jsx)("input",{type:"text",className:"number-of-events",value:this.props.numberOfEvents,onChange:function(t){return e.props.updateEventCount(t)}})})}}]),n}(a.Component),O=y,k=n(25),x=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],S=n(13),C=n.n(S),E=n(11),T=n.n(E),Z=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,M(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,C.a.get("https://fo3jdyed01.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&N(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://fo3jdyed01.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(e){var t=e.map((function(e){return e.location}));return Object(k.a)(new Set(t))},M=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return T.a.done(),e.abrupt("return",x);case 4:return e.next=6,Z();case 6:if(t=e.sent,n=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},!t){e.next=17;break}return n(),a="https://fo3jdyed01.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+t,e.next=13,C.a.get(a);case 13:return(r=e.sent).data&&(o=I(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),T.a.done(),e.abrupt("return",r.data.events);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=(n(50),n(51),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],currentLocation:"all",numberOfEvents:32},e.updateEvents=function(){var t=Object(u.a)(i.a.mark((function t(n){var a=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.length>1&&void 0!==a[1]?a[1]:null,q().then((function(t){var a="all"===n?t:t.filter((function(e){return e.location===n})),r=e.state.numberOfEvents;e.setState({events:a.slice(0,r)})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.updateEventCount=function(){var t=Object(u.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n.target.value,e.setState({numberOfEvents:a}),e.updateEvents(e.state.currentLocation,e.state.numberOfEvents);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.mounted=!0,q().then((function(e){t.mounted&&t.setState({events:e,locations:I(e)})}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state.numberOfEvents;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(g,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(f.jsx)(O,{numberOfEvents:e,updateEventCount:this.updateEventCount}),Object(f.jsx)(j,{events:this.state.events})]})}}]),n}(a.Component)),W=A;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(24).config("24cd2d25b98c4ceab041c9fd36352dff").install(),s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(W,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),B()}},[[53,1,2]]]);
//# sourceMappingURL=main.6a4da24c.chunk.js.map