(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{286:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__1Dcow",dialog:"Dialogs_dialog__2rlRZ",messages:"Dialogs_messages__38Mk_",dialogs_title:"Dialogs_dialogs_title__1_0em"}},287:function(e,s,a){e.exports={dialogs:"DialogItem_dialogs__1Ogsw",dialogsItems:"DialogItem_dialogsItems__16DK3",dialog:"DialogItem_dialog__oHWe6",messages:"DialogItem_messages__1aLd7",selectedItem:"DialogItem_selectedItem__3K81j",avatar:"DialogItem_avatar__1asPg",dialogItem_content:"DialogItem_dialogItem_content__23NF8"}},288:function(e,s,a){e.exports={dialogs:"Message_dialogs__TZWUb",dialogsItems:"Message_dialogsItems__1vPxM",dialog:"Message_dialog__3wqyg",messages:"Message_messages__2akbG",message_rigth:"Message_message_rigth__1X4m5",message_left:"Message_message_left__2efCH",message__avatar:"Message_message__avatar__2wyDT",messageName:"Message_messageName__2OJIF",message__item:"Message_message__item__2ycCy",message__text:"Message_message__text__1T0oB",message__form:"Message_message__form__3LnmN",message_btn:"Message_message_btn__1EuVA",preloader_null:"Message_preloader_null__1uMc9",preloader:"Message_preloader__zqanY"}},289:function(e,s,a){"use strict";a.r(s);var t=a(30),o=a(31),r=a(33),n=a(32),i=a(2),l=a.n(i),c=a(77);function g(e,s){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=Object(c.a)(e))||s&&e&&"number"===typeof e.length){a&&(e=a);var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n=!0,i=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return n=e.done,e},e:function(e){i=!0,r=e},f:function(){try{n||null==a.return||a.return()}finally{if(i)throw r}}}}var d=a(286),u=a.n(d),m=a(287),_=a.n(m),p=a(24),j=a(1),h=function(e){return Object(j.jsx)("div",{className:e.path=="/Dialogs/".concat(e.id)?_.a.dialog+" "+_.a.selectedItem:_.a.dialog,children:Object(j.jsx)(p.b,{to:"/Dialogs/"+e.id,children:Object(j.jsxs)("div",{className:_.a.dialogItem_content,children:[Object(j.jsx)("img",{className:_.a.avatar,src:e.photo,alt:"icon"}),e.name]})})})},b=a(42),f=a(62),O=a(288),v=a.n(O),w=a(132),x=a(133),I=a(103),y=a(47),M=a(17),N=a(131),D=a(34),S=a.p+"static/media/Loader.193097d2.svg",E=function(e){Object(r.a)(a,e);var s=Object(n.a)(a);function a(){var e;Object(t.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=s.call.apply(s,[this].concat(r))).onSubmit=function(s){e.props.sendMessage(s.newMessage,e.props.interlocutor.userId,e.props.isOwner,e.props.ownerName)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.loadMessages(this.props.interlocutor.userId,this.props.isOwner,20)}},{key:"componentDidUpdate",value:function(e){e.path!=this.props.path&&this.props.loadMessages(this.props.interlocutor.userId,this.props.isOwner,20)}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(P,{sendMessage:this.props.sendMessage,isOwner:this.props.isOwner,ownerName:this.props.ownerName,ownerPhoto:this.props.ownerPhoto,loadMessages:this.props.loadMessages,interlocutor:this.props.interlocutor,message:this.props.message}),Object(j.jsx)(U,{onSubmit:this.onSubmit})]})}}]),a}(l.a.Component),P=function(e){var s=Object(i.useState)(20),a=Object(f.a)(s,2),t=a[0],o=a[1],r=Object(i.useState)(!1),n=Object(f.a)(r,2),l=n[0],c=n[1],g=Object(i.useRef)(),d=Object(i.useRef)();Object(i.useEffect)((function(){g.current.scrollIntoView({block:"center"})}),[]),Object(i.useEffect)((function(){var e=d.current;return e.addEventListener("scroll",u),function(){e.removeEventListener("scroll",u)}}));var u=function(e){e.target.scrollTop<40&&(c(!0),o(t+=12))};Object(i.useEffect)((function(){l&&(e.loadMessages(e.interlocutor.userId,e.isOwner,t),c(!1))}),[l]),Object(i.useEffect)((function(){o(20)}),[e.interlocutor.userId]);var m=[];e.message[e.interlocutor.userId]&&e.message[e.interlocutor.userId].length>0?Object(b.a)(e.message[e.interlocutor.userId]).map((function(s){var a=Object(j.jsxs)("div",{className:s.userId===e.isOwner?v.a.message_rigth:v.a.message_left,children:[Object(j.jsxs)("div",{className:v.a.message__item,children:[Object(j.jsx)("img",{src:s.userId==e.isOwner?e.ownerPhoto:e.interlocutor.photoURL,alt:"icon",className:v.a.message__avatar}),Object(j.jsx)("p",{className:v.a.messageName,children:s.name})]}),Object(j.jsx)("div",{className:v.a.message__text,children:s.message})]});m.push(a)})):m.push(Object(j.jsxs)("div",{children:[Object(j.jsxs)("h2",{children:["\u0412\u044b \u0435\u0449\u0435 \u043d\u0435 \u043e\u0431\u0449\u0430\u043b\u0438\u0441\u044c \u0441 ",e.interlocutor.displayName]}),Object(j.jsxs)("p",{children:["\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u043e\u0437\u0434\u0430\u0440\u043e\u0432\u0430\u0439\u0442\u0435\u0441\u044c \u0441 ",e.interlocutor.displayName]})]}));var _=function(e){return Object(j.jsx)(j.Fragment,{children:e.messageElem})};return Object(j.jsxs)("div",{className:v.a.dialog,ref:d,children:[l?Object(j.jsx)("img",{src:S,alt:"preloader",className:v.a.preloader}):Object(j.jsx)("div",{className:v.a.preloader_null}),Object(j.jsx)(_,{messageElem:m}),Object(j.jsx)("div",{ref:g})]})},k=Object(I.a)(50),U=Object(x.a)({form:"newMessage"})((function(e){return Object(j.jsx)("div",{className:v.a.message__form,children:Object(j.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(j.jsx)(w.a,{component:y.b,contenteditable:"true",placeholder:"Enter your message here",name:"newMessage",validate:[I.b,k]}),Object(j.jsx)("div",{className:v.a.message_btn,children:Object(j.jsx)(D.a,{text:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})})]})})})),L=Object(M.b)((function(e){return{isOwner:e.auth.isOwner,ownerName:e.auth.ownerName,ownerPhoto:e.auth.photoOwner,message:e.dialogsPage.messageData}}),{sendMessage:N.c,loadMessages:N.b,setIsFetchingStatus:N.d})(E),A=function(e){var s,a=e.props,t=[],o=g(a.followingInUserId);try{for(o.s();!(s=o.n()).done;){var r,n=s.value,i=g(a.users);try{for(i.s();!(r=i.n()).done;){var l=r.value;n==l.userId&&t.push(l)}}catch(p){i.e(p)}finally{i.f()}}}catch(p){o.e(p)}finally{o.f()}var c=t.map((function(e){return Object(j.jsx)(h,{photo:e.photoURL,name:e.displayName,id:e.userId,path:a.location.pathname})})),d=a.location.pathname.slice(9),m=a.users.findIndex((function(e){if(e.userId===d)return e})),_=a.users[m];return Object(j.jsxs)("div",{children:["/Dialogs"===a.location.pathname?Object(j.jsx)("div",{className:u.a.dialogs_title,children:c.length>0?"\u0412\u044b\u0431e\u0440\u0438\u0442\u0435 \u0434\u0438\u0430\u043b\u043e\u0433":"\u0423 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442\u0443 \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0434\u0440\u0443\u0433\u0430. \u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0434\u0438\u0430\u043b\u043e\u0433, \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0437\u0430\u0438\u043c\u043d\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0433\u043e  \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430"}):null,Object(j.jsxs)("div",{className:u.a.dialogs,children:[Object(j.jsx)("div",{className:u.a.dialogsItems,children:c}),"/Dialogs"!==a.location.pathname?Object(j.jsx)(L,{path:a.location.pathname,interlocutor:_}):null]})]})},F=a(48),R=a(25),T=a(79),C=a(14),B=a(13),J=function(e){Object(r.a)(a,e);var s=Object(n.a)(a);function a(){return Object(t.a)(this,a),s.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.getAllUsers(),this.props.getFollowers(this.props.isOwner)}},{key:"render",value:function(){return Object(j.jsx)(A,{props:this.props})}}]),a}(l.a.Component);s.default=Object(C.compose)(Object(M.b)((function(e){return{dialogsData:e.dialogsPage.dialogsData,messageBody:e.dialogsPage.newMessageBody,messageData:e.dialogsPage.messageData,followingInUserId:Object(F.c)(e),users:e.userPage.users,isOwner:e.auth.isOwner}}),{getFollowers:R.d,getAllUsers:R.c}),B.f,T.a)(J)}}]);
//# sourceMappingURL=3.f5bda5ff.chunk.js.map