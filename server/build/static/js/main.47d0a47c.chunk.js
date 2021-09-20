(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(n,e,t){},30:function(n,e,t){},35:function(n,e,t){},54:function(n,e,t){"use strict";t.r(e);var a,r,i=t(0),c=t.n(i),s=t(20),o=t.n(s),l=(t(29),t(30),t(5)),d=t(2),u=t(3),b=t(1),p=u.a.button(a||(a=Object(d.a)(["\n  font-family: 'Lato',sans-serif;\n  border: none;\n  margin: 0.5em;\n  background: var(--moss);\n  width: 23%;\n  height: 13%;\n  border-radius: 15px;\n  color: rgb(255 255 255);\n  font-size: 1em;\n  &:hover {\n    background: none;\n    border: solid 1.5px var(--moss);\n  }\n"]))),h=u.a.div(r||(r=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--khaki);\n  height: 500px;\n  border-radius: 3em 1em 3em 1em;\n"])));var j,g,m,x,f=function(n){var e=n.getParagraphs,t=n.btnDisplay;return Object(b.jsxs)(h,{className:"SetTimerBtn",id:t?null:"hidden",children:[Object(b.jsx)(p,{onClick:function(){return e(1)},children:"1 Minute"}),Object(b.jsx)(p,{onClick:function(){return e(3)},children:"3 Minutes"}),Object(b.jsx)(p,{onClick:function(){return e(5)},children:"5 Minutes"})]})},O=(t(35),u.a.section(j||(j=Object(d.a)(["\n  background: var(--khaki);\n  border-radius: 3em 1em 3em 1em;\n  height: 500px\n"])))),v=u.a.div(g||(g=Object(d.a)(["\n  height: 420px;\n  width: 85%;\n  margin: 0 auto;\n  font-size: 1.5em;\n  overflow-y: scroll;\n  overflow: hidden;\n  grid-column: 1;\n  grid-row: 1;\n  text-align: left;\n  line-height: 48px;\n  font-family: 'Be Vietnam Pro', sans-serif;\n  color: rgb(61 61 61);\n}\n"]))),y=u.a.textarea(m||(m=Object(d.a)(["\n  height: 420px;\n  margin: 0 auto;\n  width: 85%;\n  letter-spacing: 6px;\n  /* height: 50px; */\n  font-size: 1.5em;\n  resize: none;\n  opacity: 0;\n  cursor: default;\n  grid-column: 1;\n  grid-row: 1;\n  font-family: 'Be Vietnam Pro', sans-serif;\n  line-height: 1.8em;\n"]))),k=u.a.span(x||(x=Object(d.a)(["\n  border-radius: 3px;\n  border: 1px solid var(--khaki);\n  padding: 0 2px;\n"])));var S,w,T=function(n){var e=n.paragraphs,t=n.userInput,a=n.typingDisplay,r=n.handleUserInput;return n.handleStartCountdown,Object(b.jsxs)(O,{className:"game-container",id:a?null:"hidden",children:[Object(b.jsx)(v,{className:"paragraphs",children:e.map((function(n,e){var a="";return e<t.length&&(a=n===t[e]?"rgb(165 213 148)":"rgb(254 139 139)"),Object(b.jsx)(k,{className:"letter",style:{backgroundColor:a},children:n},e+n)}))}),Object(b.jsx)(y,{className:"text-input",onChange:r})]})},C=u.a.div(S||(S=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  color: var(--moss);\n  font-size: 1.3em;\n  width: 50%;\n  gap: 10px;\n  margin: 22px auto;\n  letter-spacing: 3px;\n  border-top: 1px solid var(--moss);\n  border-bottom: 1px solid var(--moss);\n  padding: 0.5em;\n"]))),D=u.a.p(w||(w=Object(d.a)(["\n  color: var(--moss);\n"])));var z,M,I,N,P,B=function(n){var e=n.seconds,t=(n.isTimerOn,Math.floor(e/60)),a=e%60;return Object(b.jsxs)(C,{children:[Object(b.jsx)(D,{children:"Timer "}),Object(b.jsxs)(D,{children:["0",t,":",0===a?"00":a]})]})},F=t(24),E=t.n(F),A=u.a.h2(z||(z=Object(d.a)(["\n  color: var(--moss);\n  margin: 0;\n  font-size: 5em;\n  font-family: 'Abril Fatface';\n"]))),L=u.a.div(M||(M=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  background: var(--khaki);\n  border-radius: 3em 1em 3em 1em;\n  color: rgb(255 255 255);\n  height: 500px;\n  padding: 30px;\n  flex-direction: column;\n"]))),U=u.a.input(I||(I=Object(d.a)(["\n  width: 200px;\n  align-self: center;\n  padding: 10px;\n  border: none;\n  border-radius: 16px;\n  background: var(--beige);\n  height: 20px;\n  width: 362px;\n  text-align: center;\n  font-size: 1.2em;\n  padding: 17px;\n  ::placeholder {\n    color: rgb(145, 170, 157);\n  }\n"]))),q=u.a.button(N||(N=Object(d.a)(["\n  font-family: 'Lato',sans-serif;\n  border: none;\n  margin: 0.5em;\n  background: var(--moss);\n  width: 12em;\n  height: 3em;\n  border-radius: 15px;\n  color: rgb(255 255 255);\n  font-size: 1em;\n  align-self: center;\n  &:hover {\n    background: none;\n    border: solid 1.5px var(--moss);\n  }\n"]))),J=u.a.span(P||(P=Object(d.a)(["\n  color: var(--chocolate);\n  border: none;\n  font-size: 1.5em;\n"])));var R,V=function(n){var e=n.statistics,t=n.statsDisplay,a=n.setMinutesDisplay,r=n.setStatsDisplay,i=e.accuracy<1?e.accuracy.toFixed(2).slice(2):100,c="bob";return 0!=e.wpm&&(c="User_".concat(Math.floor(4e3*Math.random()))),Object(b.jsxs)(L,{id:t?null:"hidden",children:[Object(b.jsx)(A,{children:"Time's up!"}),Object(b.jsxs)("p",{children:["You typed with ",Object(b.jsx)(J,{children:e.wpm})," WPM with ",Object(b.jsxs)(J,{children:[i,"%"]})," accuracy."]}),Object(b.jsx)(U,{className:"username",placeholder:c}),Object(b.jsxs)("span",{children:[Object(b.jsx)(q,{onClick:function(){},children:"Submit your score"}),Object(b.jsx)(q,{onClick:function(){a(!0),r(!1)},children:"Try again"})]})]})},Y=u.a.h1(R||(R=Object(d.a)(["\n  color: var(--chocolate);\n  margin: 40px 0 20px 0;\n  font-size: 3.5em;\n  font-family: 'Abril Fatface';\n"])));var G=function(){var n=Object(i.useState)([]),e=Object(l.a)(n,2),t=e[0],a=e[1],r=Object(i.useState)([]),c=Object(l.a)(r,2),s=c[0],o=c[1],d=Object(i.useState)(!0),u=Object(l.a)(d,2),p=u[0],h=u[1],j=Object(i.useState)(!1),g=Object(l.a)(j,2),m=g[0],x=g[1],O=Object(i.useState)(!1),v=Object(l.a)(O,2),y=v[0],k=v[1],S=Object(i.useState)(0),w=Object(l.a)(S,2),C=w[0],D=w[1],z=Object(i.useState)(null),M=Object(l.a)(z,2),I=M[0],N=M[1],P=Object(i.useState)(0),F=Object(l.a)(P,2),A=F[0],L=F[1],U=Object(i.useState)(!1),q=Object(l.a)(U,2),J=q[0],R=q[1],G=Object(i.useState)(null),W=Object(l.a)(G,2),_=W[0],H=W[1],K=Object(i.useState)({wpm:0,accuracy:0}),Q=Object(l.a)(K,2),X=Q[0],Z=Q[1];return null!=_&&0===I&&(clearInterval(_),H(null),R(!1),N(null),a([]),o([]),D(0),Z({wpm:s.length/5/A,accuracy:(s.length-C)/s.length}),k(!0),x(!1),L(0)),Object(b.jsxs)("div",{className:"TypingSpeed",children:[Object(b.jsx)(Y,{children:"TYPING SPEED TEST"}),Object(b.jsx)(B,{seconds:I,isTimerOn:J}),Object(b.jsx)(f,{getParagraphs:function(n){E.a.get("/api/paragraphs/".concat({1:15,3:30,5:50}[n])).then((function(n){var e=n.data.map((function(n){return n.paragraph}));a(e.join(" ").split(""))})).then(h(!1),x(!0)).then(N(60*n),L(n))},btnDisplay:p}),Object(b.jsx)(T,{paragraphs:t,userInput:s,typingDisplay:m,handleUserInput:function(n){var e=n.target.value.split("");o(e);var a=I;if(!J&&I>0){var r=setInterval((function(){a--,N(a)}),1e3);R(!0),H(r)}e.forEach((function(e,a){"insertText"===n.nativeEvent.inputType&&(e!==t[a]?D(C+1):D(C))}));var i=document.querySelectorAll(".letter");i[s.length].getBoundingClientRect().right>i[s.length+1].getBoundingClientRect().right&&(document.querySelector(".paragraphs").scrollTop+=46)},inaccuracteCount:C}),Object(b.jsx)(V,{statistics:X,statsDisplay:y,setMinutesDisplay:h,setStatsDisplay:k})]})};var W=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(G,{})})},_=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,55)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),a(n),r(n),i(n),c(n)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(W,{})}),document.getElementById("root")),_()}},[[54,1,2]]]);
//# sourceMappingURL=main.47d0a47c.chunk.js.map