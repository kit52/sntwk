(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{286:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__1Dcow",dialog:"Dialogs_dialog__2rlRZ",messages:"Dialogs_messages__38Mk_",dialogs_title:"Dialogs_dialogs_title__1_0em"}},287:function(e,s,a){e.exports={dialogs:"DialogItem_dialogs__1Ogsw",dialogsItems:"DialogItem_dialogsItems__16DK3",dialog:"DialogItem_dialog__oHWe6",messages:"DialogItem_messages__1aLd7",selectedItem:"DialogItem_selectedItem__3K81j",avatar:"DialogItem_avatar__1asPg",dialogItem_content:"DialogItem_dialogItem_content__23NF8"}},288:function(e,s,a){e.exports={dialogs:"Message_dialogs__TZWUb",dialogsItems:"Message_dialogsItems__1vPxM",dialog:"Message_dialog__3wqyg",messages:"Message_messages__2akbG",message_rigth:"Message_message_rigth__1X4m5",message_left:"Message_message_left__2efCH",message__avatar:"Message_message__avatar__2wyDT",messageName:"Message_messageName__2OJIF",message__item:"Message_message__item__2ycCy",message__text:"Message_message__text__1T0oB",message__form:"Message_message__form__3LnmN",message_btn:"Message_message_btn__1EuVA",preloader_null:"Message_preloader_null__1uMc9",preloader:"Message_preloader__zqanY"}},289:function(e,s,a){"use strict";a.r(s);var t=a(30),o=a(31),n=a(33),r=a(32),i=a(2),l=a.n(i),c=a(77);function g(e,s){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=Object(c.a)(e))||s&&e&&"number"===typeof e.length){a&&(e=a);var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r=!0,i=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return r=e.done,e},e:function(e){i=!0,n=e},f:function(){try{r||null==a.return||a.return()}finally{if(i)throw n}}}}var d=a(286),m=a.n(d),u=a(287),p=a.n(u),_=a(24),h=a(1),j=function(e){return Object(h.jsx)("div",{className:e.path=="/Dialogs/".concat(e.id)?p.a.dialog+" "+p.a.selectedItem:p.a.dialog,children:Object(h.jsx)(_.b,{to:"/Dialogs/"+e.id,children:Object(h.jsxs)("div",{className:p.a.dialogItem_content,children:[Object(h.jsx)("img",{className:p.a.avatar,src:e.photo,alt:"icon"}),e.name]})})})},b=a(42),f=a(288),O=a.n(f),v=a(132),y=a(133),w=a(103),x=a(47),I=a(17),M=a(131),D=a(34),N=(a.p,function(e){Object(n.a)(a,e);var s=Object(r.a)(a);function a(){var e;Object(t.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=s.call.apply(s,[this].concat(n))).onSubmit=function(s){e.props.sendMessage(s.newMessage,e.props.interlocutor.userId,e.props.isOwner,e.props.ownerName)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.loadMessages(this.props.interlocutor.userId,this.props.isOwner,20)}},{key:"componentDidUpdate",value:function(e){e.path!=this.props.path&&this.props.loadMessages(this.props.interlocutor.userId,this.props.isOwner,20)}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(k,{sendMessage:this.props.sendMessage,isOwner:this.props.isOwner,ownerName:this.props.ownerName,ownerPhoto:this.props.ownerPhoto,loadMessages:this.props.loadMessages,interlocutor:this.props.interlocutor,message:this.props.message}),Object(h.jsx)(U,{onSubmit:this.onSubmit})]})}}]),a}(l.a.Component)),k=function(e){Object(n.a)(a,e);var s=Object(r.a)(a);function a(e){var o;return Object(t.a)(this,a),(o=s.call(this,e)).myRef=l.a.createRef(),o}return Object(o.a)(a,[{key:"scrollHandler",value:function(){this.myRef.current.scrollIntoView({block:"end",inline:"nearest"})}},{key:"componentDidMount",value:function(){this.scrollHandler()}},{key:"componentDidUpdate",value:function(){this.scrollHandler()}},{key:"render",value:function(){var e=this,s=[];return this.props.message[this.props.interlocutor.userId]&&this.props.message[this.props.interlocutor.userId].length>0?Object(b.a)(this.props.message[this.props.interlocutor.userId]).map((function(a){var t=Object(h.jsxs)("div",{className:a.userId===e.props.isOwner?O.a.message_rigth:O.a.message_left,children:[Object(h.jsxs)("div",{className:O.a.message__item,children:[Object(h.jsx)("img",{src:a.userId==e.props.isOwner?e.props.ownerPhoto:e.props.interlocutor.photoURL,alt:"icon",className:O.a.message__avatar}),Object(h.jsx)("p",{className:O.a.messageName,children:a.name})]},a.data+a.userId),Object(h.jsx)("div",{className:O.a.message__text,children:a.message})]});s.push(t)})):s.push(Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{children:["\u0412\u044b \u0435\u0449\u0435 \u043d\u0435 \u043e\u0431\u0449\u0430\u043b\u0438\u0441\u044c \u0441 ",this.props.interlocutor.displayName]}),Object(h.jsxs)("p",{children:["\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u043e\u0437\u0434\u0430\u0440\u043e\u0432\u0430\u0439\u0442\u0435\u0441\u044c \u0441 ",this.props.interlocutor.displayName]})]})),Object(h.jsxs)("div",{className:O.a.dialog,children:[Object(h.jsx)(P,{messageElem:s}),Object(h.jsx)("div",{ref:this.myRef,children:"x"})]})}}]),a}(l.a.Component),P=function(e){return Object(h.jsx)(h.Fragment,{children:e.messageElem})},S=Object(w.a)(50),U=Object(y.a)({form:"newMessage"})((function(e){return Object(h.jsx)("div",{className:O.a.message__form,children:Object(h.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(h.jsx)(v.a,{component:x.b,contenteditable:"true",placeholder:"Enter your message here",name:"newMessage",validate:[w.b,S]}),Object(h.jsx)("div",{className:O.a.message_btn,children:Object(h.jsx)(D.a,{text:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})})]})})})),R=Object(I.b)((function(e){return{isOwner:e.auth.isOwner,ownerName:e.auth.ownerName,ownerPhoto:e.auth.photoOwner,message:e.dialogsPage.messageData}}),{sendMessage:M.c,loadMessages:M.b,setIsFetchingStatus:M.d})(N),A=function(e){var s,a=e.props,t=[],o=g(a.followingInUserId);try{for(o.s();!(s=o.n()).done;){var n,r=s.value,i=g(a.users);try{for(i.s();!(n=i.n()).done;){var l=n.value;r==l.userId&&t.push(l)}}catch(_){i.e(_)}finally{i.f()}}}catch(_){o.e(_)}finally{o.f()}var c=t.map((function(e){return Object(h.jsx)(j,{photo:e.photoURL,name:e.displayName,id:e.userId,path:a.location.pathname},e.userId)})),d=a.location.pathname.slice(9),u=a.users.findIndex((function(e){if(e.userId===d)return e})),p=a.users[u];return Object(h.jsxs)("div",{children:["/Dialogs"===a.location.pathname?Object(h.jsx)("div",{className:m.a.dialogs_title,children:c.length>0?"\u0412\u044b\u0431e\u0440\u0438\u0442\u0435 \u0434\u0438\u0430\u043b\u043e\u0433":"\u0423 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442\u0443 \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0434\u0440\u0443\u0433\u0430. \u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0434\u0438\u0430\u043b\u043e\u0433, \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0437\u0430\u0438\u043c\u043d\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0433\u043e  \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430"}):null,Object(h.jsxs)("div",{className:m.a.dialogs,children:[Object(h.jsx)("div",{className:m.a.dialogsItems,children:c}),"/Dialogs"!==a.location.pathname?Object(h.jsx)(R,{path:a.location.pathname,interlocutor:p}):null]})]})},F=a(48),C=a(25),E=a(79),H=a(15),L=a(14),T=function(e){Object(n.a)(a,e);var s=Object(r.a)(a);function a(){return Object(t.a)(this,a),s.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.getAllUsers(),this.props.getFollowers(this.props.isOwner)}},{key:"render",value:function(){return Object(h.jsx)(A,{props:this.props})}}]),a}(l.a.Component);s.default=Object(H.compose)(Object(I.b)((function(e){return{dialogsData:e.dialogsPage.dialogsData,messageBody:e.dialogsPage.newMessageBody,messageData:e.dialogsPage.messageData,followingInUserId:Object(F.c)(e),users:e.userPage.users,isOwner:e.auth.isOwner}}),{getFollowers:C.d,getAllUsers:C.c}),L.f,E.a)(T)}}]);
//# sourceMappingURL=3.27e84c2f.chunk.js.map