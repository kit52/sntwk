(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{347:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__1Dcow",dialog:"Dialogs_dialog__2rlRZ",messages:"Dialogs_messages__38Mk_"}},348:function(e,s,t){e.exports={dialogs:"DialogItem_dialogs__1Ogsw",dialogsItems:"DialogItem_dialogsItems__16DK3",dialog:"DialogItem_dialog__oHWe6",messages:"DialogItem_messages__1aLd7",selectedItem:"DialogItem_selectedItem__3K81j",avatar:"DialogItem_avatar__1asPg"}},349:function(e,s,t){e.exports={dialogs:"Message_dialogs__TZWUb",dialogsItems:"Message_dialogsItems__1vPxM",dialog:"Message_dialog__3wqyg",messages:"Message_messages__2akbG",message_rigth:"Message_message_rigth__1X4m5",message_left:"Message_message_left__2efCH",message__avatar:"Message_message__avatar__2wyDT",messageName:"Message_messageName__2OJIF",message__item:"Message_message__item__2ycCy",message__text:"Message_message__text__1T0oB",message__form:"Message_message__form__3LnmN"}},350:function(e,s,t){"use strict";t.r(s);var a=t(26),o=t(27),r=t(30),n=t(29),i=t(1),c=t.n(i),l=t(85);function u(e,s){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=Object(l.a)(e))||s&&e&&"number"===typeof e.length){t&&(e=t);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n=!0,i=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return n=e.done,e},e:function(e){i=!0,r=e},f:function(){try{n||null==t.return||t.return()}finally{if(i)throw r}}}}var g=t(347),d=t.n(g),m=t(348),p=t.n(m),_=t(28),h=t(2),j=function(e){return Object(h.jsx)("div",{className:e.path=="/Dialogs/".concat(e.id)?p.a.dialog+" "+p.a.selectedItem:p.a.dialog,children:Object(h.jsx)(_.b,{to:"/Dialogs/"+e.id,children:Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:p.a.avatar,src:e.photo,alt:"icon"}),e.name]})})})},b=t(47),f=t(349),O=t.n(f),v=t(158),x=t(159),y=t(114),I=t(40),w=t(16),M=t(157),D=function(e){Object(r.a)(t,e);var s=Object(n.a)(t);function t(){return Object(a.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.loadMessages(this.props.interlocutor.userId,this.props.isOwner)}},{key:"componentDidUpdate",value:function(e){e.path!=this.props.path&&this.props.loadMessages(this.props.interlocutor.userId,this.props.isOwner)}},{key:"render",value:function(){return Object(h.jsx)(N,{props:this.props,interlocutorPhoto:this.props.interlocutor.photoURL,message:this.props.message[this.props.interlocutor.userId],interlocutorName:this.props.interlocutor.name?this.props.interlocutor.name:this.props.interlocutor.displayName})}}]),t}(c.a.Component),N=function(e){var s=e.props;console.log(s);var t=Object(i.useRef)(null);Object(i.useEffect)((function(){t.current.scrollIntoView({behavior:"smooth"})}));var a=[];return s.message[s.interlocutor.userId]&&s.message[s.interlocutor.userId].length>0?(console.log(s.message[s.interlocutor.userId]),Object(b.a)(s.message[s.interlocutor.userId]).reverse().map((function(e){var t=Object(h.jsxs)("div",{className:e.userId===s.isOwner?O.a.message_rigth:O.a.message_left,children:[Object(h.jsxs)("div",{className:O.a.message__item,children:[Object(h.jsx)("img",{src:e.userId==s.isOwner?s.ownerPhoto:s.interlocutor.photoURL,alt:"icon",className:O.a.message__avatar}),Object(h.jsx)("p",{className:O.a.messageName,children:e.name})]}),Object(h.jsx)("div",{className:O.a.message__text,children:e.message})]});a.push(t)}))):a.push(Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{children:["\u0412\u044b \u0435\u0449\u0435 \u043d\u0435 \u043e\u0431\u0449\u0430\u043b\u0438\u0441\u044c \u0441 ",s.interlocutor.displayName]}),Object(h.jsxs)("p",{children:["\u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u043e\u0437\u0434\u0430\u0440\u043e\u0432\u0430\u0439\u0442\u0435\u0441\u044c \u0441 ",s.interlocutor.displayName]})]})),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:O.a.dialog,children:[a,Object(h.jsx)("div",{ref:t})]}),Object(h.jsx)(k,{onSubmit:function(e){s.sendMessage(e.newMessage,s.interlocutor.userId,s.isOwner,s.ownerName,s.ownerPhoto)}})]})},P=Object(y.a)(50),k=Object(x.a)({form:"newMessage"})((function(e){return Object(h.jsx)("div",{className:O.a.message__form,children:Object(h.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(h.jsx)(v.a,{component:I.b,contenteditable:"true",placeholder:"Enter your message here",name:"newMessage",validate:[y.b,P]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Send message"})})]})})})),U=Object(w.b)((function(e){return{isOwner:e.auth.isOwner,users:e.userPage.users,ownerName:e.auth.profile.displayName,ownerPhoto:e.auth.photoOwner,message:e.dialogsPage.messageData,state:e}}),{sendMessage:M.c,loadMessages:M.b})(D),S=function(e){var s,t=e.props,a=[],o=u(t.followingInUserId);try{for(o.s();!(s=o.n()).done;){var r,n=s.value,i=u(t.users);try{for(i.s();!(r=i.n()).done;){var c=r.value;n==c.userId&&a.push(c)}}catch(_){i.e(_)}finally{i.f()}}}catch(_){o.e(_)}finally{o.f()}var l=a.map((function(e){return Object(h.jsx)(j,{photo:e.photoURL,name:e.displayName,id:e.userId,path:t.location.pathname})})),g=t.location.pathname.slice(9),m=t.users.findIndex((function(e){if(e.userId===g)return e})),p=t.users[m];return Object(h.jsxs)("div",{className:d.a.dialogs,children:[Object(h.jsx)("div",{className:d.a.dialogsItems,children:l}),Object(h.jsx)("div",{children:"/Dialogs"===t.location.pathname?Object(h.jsx)("div",{children:"\u0412\u044b\u0431\u0438\u0440\u0438\u0442\u0435 \u0434\u0438\u0430\u043b\u043e\u0433"}):Object(h.jsx)(U,{path:t.location.pathname,interlocutor:p})})]})},L=t(54),R=t(31),A=t(87),C=t(15),T=t(13),B=function(e){Object(r.a)(t,e);var s=Object(n.a)(t);function t(){return Object(a.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getAllUsers(),this.props.getFollowers(this.props.isOwner)}},{key:"render",value:function(){return Object(h.jsx)(S,{props:this.props})}}]),t}(c.a.Component);s.default=Object(C.d)(Object(w.b)((function(e){return{dialogsData:e.dialogsPage.dialogsData,messageBody:e.dialogsPage.newMessageBody,messageData:e.dialogsPage.messageData,followingInUserId:Object(L.c)(e),users:e.userPage.users,isOwner:e.auth.isOwner}}),{getFollowers:R.d,getAllUsers:R.c}),T.f,A.a)(B)}}]);
//# sourceMappingURL=3.6e47f01d.chunk.js.map