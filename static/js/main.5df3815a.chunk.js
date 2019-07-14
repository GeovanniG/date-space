(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(27);var o=a(18),i=a(6),s=a(2),u=a(21),m=function(e,t){switch(t.type){case"REMOVE_CARD":return e.filter(function(e){return e.title!==t.title});case"ADD_CARD":return[].concat(Object(u.a)(e),[t.card]);default:return e}},p=[],d=r.a.createContext(p),b=function(e){var t=Object(n.useReducer)(m,p),a=Object(s.a)(t,2),c=a[0],l=a[1];return r.a.createElement(d.Provider,{value:[c,l]},e.children)},v=(a(28),function(e){var t=e.media_type,a=e.url,c=e.title,l=e.explanation,o=Object(n.useContext)(d),i=Object(s.a)(o,2)[1],u=Object(n.useState)(!1),m=Object(s.a)(u,2),p=m[0],b=m[1],v=p?"":"hide-text",f=p?"hide-btn":"",E=p?"":"hide-btn";return r.a.createElement("div",{className:"card my-3",style:{width:"18rem"}},"image"===t&&r.a.createElement("img",{src:a,className:"card-img-top",alt:"space"}),"video"===t&&r.a.createElement("iframe",{title:"space",src:a}),r.a.createElement("div",{className:"card-body ".concat(v)},c&&r.a.createElement("h5",{className:"card-title"},c),l&&r.a.createElement("p",{className:"card-text"},l)),r.a.createElement("div",{className:"btn-group",role:"group",onClick:function(e){var t=e.target.textContent;console.log("here",e.target),"Remove"===t?i({type:"REMOVE_CARD",title:c}):"Show More"===t?b(!0):"Show Less"===t&&b(!1)}},r.a.createElement("button",{type:"button",className:"btn btn-light"},"Remove"),r.a.createElement("button",{type:"button",className:"btn btn-light ".concat(f)},"Show More"),r.a.createElement("button",{type:"button",className:"btn btn-light ".concat(E)},"Show Less")))}),f=function(){var e=Object(n.useContext)(d),t=Object(s.a)(e,1)[0];return r.a.createElement("div",{className:"d-flex flex-wrap justify-content-around align-items-start"},t.map(function(e){var t=e.media_type,a=e.url,n=e.title,c=e.explanation;return r.a.createElement(v,{media_type:t,url:a,title:n,explanation:c,key:a})}))},E=a(10),h=a.n(E),y=a(17),g=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(s.a)(l,2),i=o[0],u=o[1],m=Object(n.useState)(""),p=Object(s.a)(m,2),b=p[0],v=p[1],f=Object(n.useState)("Enter a date and receive a picture or video"),E=Object(s.a)(f,2),g=E[0],N=E[1],w=Object(n.useContext)(d),j=Object(s.a)(w,2)[1],x=function(){var e=Object(y.a)(h.a.mark(function e(t,a,n){var r,c,l,o,i,s,u,m,p;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new Date(t,a-1,n).toJSON().split("T")[0],c="https://api.nasa.gov/planetary/apod?api_key=KlW1riylQ5ITY3IL2JaW0H045rpSJduLfqvaHd0i&date=".concat(r),e.next=5,fetch(c);case 5:return l=e.sent,e.next=8,l.json();case 8:return o=e.sent,i=o.media_type,s=o.url,u=o.title,m=o.explanation,j({type:"ADD_CARD",card:p={media_type:i,url:s,title:u,explanation:m}}),e.abrupt("return",p);case 18:e.prev=18,e.t0=e.catch(0),N("Unable to make request, server issues. Please try again later or tomorrow");case 21:case"end":return e.stop()}},e,null,[[0,18]])}));return function(t,a,n){return e.apply(this,arguments)}}(),O=function(){var e="",t=parseInt((new Date).getFullYear()),n=parseInt(a),r=(new Date).getMonth()+1,c=(new Date).getDate();return""===a||""===i||""===b?e="Missing input":isNaN(a)||isNaN(i)||isNaN(b)?e="Wrong format, use YYYY/MM/DD":a<1996||a>2019?e="Year must be within ".concat(1996," and ").concat(2019):i<1||i>12?e="Month must be within ".concat(1," and ").concat(12):b<1||b>30?e="Day must be within ".concat(1," and ").concat(30):n===t&&(i>r||b>c)&&(e="Date must not lie in the future"),N(e),!e},D=function(){c(""),u(""),v(""),N("")};return r.a.createElement("div",{className:"mt-3"},r.a.createElement("form",null,r.a.createElement("h3",{className:"mb-3"},"Astronomy Fun Facts"),g&&r.a.createElement("p",null,g),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-4 col-md-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"YYYY",value:a,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"col-4 col-md-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"MM",value:i,onChange:function(e){return u(e.target.value)}})),r.a.createElement("div",{className:"col-4 col-md-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"DD",value:b,onChange:function(e){return v(e.target.value)}})),r.a.createElement("div",{className:"col-md-3 d-flex justify-content-center mt-3 mt-md-0"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){O()&&(x(a,i,b),D(""))}},"Submit"),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:D},"Cancel"))))))},N=function(){return r.a.createElement(b,null,r.a.createElement(g,null),r.a.createElement(f,null))},w=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(N,null))},j=function(){return r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:w,exact:!0})))};l.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.5df3815a.chunk.js.map