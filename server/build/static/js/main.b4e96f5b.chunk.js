(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(n,e,t){},30:function(n,e,t){},53:function(n,e,t){"use strict";t.r(e);var a,r,i=t(0),c=t.n(i),o=t(20),s=t.n(o),l=(t(29),t(5)),u=t(2),d=(t(30),t(3)),p=t(1),b=d.a.button(a||(a=Object(u.a)(["\n  font-family: 'Lato',sans-serif;\n  border: none;\n  margin: 0.5em;\n  background: var(--moss);\n  width: 200px;\n  height: 80px;\n  border-radius: 15px;\n  color: rgb(255 255 255);\n  font-size: 1em;\n  font-weight: 600;\n  transition: 0.35s;\n  &:hover {\n    background: var(--darkmoss);\n  }\n"]))),h=d.a.div(r||(r=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--khaki);\n  height: 610px;\n  border-radius: 3em 1em 3em 1em;\n  width: 600px;\n  flex-direction: column;\n  margin: 0 auto;\n"])));var j,g,m,x,f=function(n){var e=n.getParagraphs,t=n.btnDisplay;return Object(p.jsxs)(h,{className:"SetTimerBtn",id:t?null:"hidden",children:[Object(p.jsx)(b,{onClick:function(){return e(1)},children:"ONE MINUTE"}),Object(p.jsx)(b,{onClick:function(){return e(3)},children:"THREE MINUTES"}),Object(p.jsx)(b,{onClick:function(){return e(5)},children:"FIVE MINUTES"})]})},O=d.a.section(j||(j=Object(u.a)(["\n  background: var(--khaki);\n  border-radius: 3em 1em 3em 1em;\n  height: 610px;\n  width: 600px;\n  margin: 0 auto;\n"]))),v=d.a.div(g||(g=Object(u.a)(["\n  width: 70%;\n  height: 480px;\n  margin: 0 auto;\n  font-size: 1.5em;\n  overflow-y: scroll;\n  overflow: hidden;\n  grid-column: 1;\n  grid-row: 1;\n  text-align: left;\n  line-height: 48px;\n  font-family: 'Be Vietnam Pro', sans-serif;\n  color: rgb(121 85 72);\n"]))),y=d.a.textarea(m||(m=Object(u.a)(["\n  height: 480px;\n  margin: 0 auto;\n  width: 85%;\n  letter-spacing: 6px;\n  /* height: 50px; */\n  font-size: 1.5em;\n  resize: none;\n  opacity: 0;\n  cursor: default;\n  grid-column: 1;\n  grid-row: 1;\n  font-family: 'Be Vietnam Pro', sans-serif;\n  line-height: 1.8em;\n"]))),w=d.a.span(x||(x=Object(u.a)(["\n  border-radius: 4px;\n  border: 1px solid var(--khaki);\n  padding: 0 2px;\n"])));var k,S,T=function(n){var e=n.paragraphs,t=n.userInput,a=n.typingDisplay,r=n.handleUserInput;return Object(p.jsxs)(O,{className:"game-container",id:a?null:"hidden",children:[Object(p.jsx)(v,{className:"paragraphs",children:e.map((function(n,e){var a="";return e<t.length&&(a=n===t[e]?"rgb(189 223 177)":"rgb(252 186 164)"),Object(p.jsx)(w,{className:"letter",style:{backgroundColor:a},children:n},e+n)}))}),Object(p.jsx)(y,{className:"text-input",onChange:r})]})},I=d.a.div(k||(k=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  color: var(--moss);\n  font-size: 1.3em;\n  width: 50%;\n  gap: 10px;\n  margin: 22px auto;\n  letter-spacing: 3px;\n  border-top: 1px solid var(--moss);\n  border-bottom: 1px solid var(--moss);\n  padding: 0.5em;\n  position: relative;\n  top: -80px;\n"]))),C=d.a.p(S||(S=Object(u.a)(["\n  color: var(--moss);\n"])));var E,D,N,z,F=function(n){var e=n.seconds,t=(n.isTimerOn,Math.floor(e/60)),a=e%60;return Object(p.jsxs)(I,{children:[Object(p.jsx)(C,{children:"Timer "}),Object(p.jsxs)(C,{children:["0",t,":",0===a?"00":a]})]})},P=t(24),B=t.n(P),M=d.a.h2(E||(E=Object(u.a)(["\n  color: var(--moss);\n  margin: 0;\n  font-size: 5em;\n  font-family: 'Abril Fatface';\n"]))),A=d.a.div(D||(D=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  background: var(--khaki);\n  color: rgb(255 255 255);\n  height: 610px;\n  border-radius: 3em 1em 3em 1em;\n  width: 600px;\n  flex-direction: column;\n  margin: 0 auto;\n"]))),U=d.a.button(N||(N=Object(u.a)(["\n  font-family: 'Lato',sans-serif;\n  border: none;\n  margin: 0.5em;\n  background: var(--moss);\n  width: 200px;\n  height: 80px;\n  border-radius: 15px;\n  color: rgb(255 255 255);\n  font-size: 1em;\n  font-weight: 600;\n  align-self: center;\n  transition: 0.35s;\n  &:hover {\n    background: var(--darkmoss);\n  }\n"]))),q=d.a.span(z||(z=Object(u.a)(["\n  color: var(--chocolate);\n  border: none;\n  font-size: 1.5em;\n"])));var L,R,V,Y,G,J=function(n){var e=n.statistics,t=n.statsDisplay,a=n.setMinutesDisplay,r=n.setStatsDisplay,i=e.accuracy<1?e.accuracy.toFixed(2).slice(2):100,c=e.wpm%1===0?e.wpm:e.wpm.toFixed(1);return Object(p.jsxs)(A,{id:t?null:"hidden",children:[Object(p.jsx)(M,{children:"Time's up!"}),Object(p.jsxs)("p",{children:["You typed with ",Object(p.jsx)(q,{children:c})," WPM with ",Object(p.jsxs)(q,{children:[i,"%"]})," accuracy."]}),Object(p.jsx)(U,{onClick:function(){a(!0),r(!1)},children:"TRY AGAIN"})]})},H=d.a.section(L||(L=Object(u.a)(["\n  text-align: -webkit-center;\n  position: relative;\n  top: -60px;\n"]))),W=d.a.h1(R||(R=Object(u.a)(["\n  color: var(--chocolate);\n  margin: 0;\n  font-size: 17em;\n  font-family: 'Abril Fatface';\n  font-weight: 200;\n"]))),K=d.a.h2(V||(V=Object(u.a)(["\n  color: var(--chocolate);\n  margin: 0;\n  font-size: 4em;\n  font-family: 'Abril Fatface';\n  font-weight: 200;\n  letter-spacing: 49px;\n  position: relative;\n  top: -70px;\n"]))),Q=d.a.div(Y||(Y=Object(u.a)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 260px;\n"]))),X=d.a.div(G||(G=Object(u.a)(["\n  position: relative;\n  left: 0;\n  right: 0;\n  bottom: -350px;\n  z-index: -1;\n"])));var Z=function(){var n=Object(i.useState)([]),e=Object(l.a)(n,2),t=e[0],a=e[1],r=Object(i.useState)([]),c=Object(l.a)(r,2),o=c[0],s=c[1],u=Object(i.useState)({wpm:0,accuracy:0}),d=Object(l.a)(u,2),b=d[0],h=d[1],j=Object(i.useState)(!0),g=Object(l.a)(j,2),m=g[0],x=g[1],O=Object(i.useState)(!1),v=Object(l.a)(O,2),y=v[0],w=v[1],k=Object(i.useState)(!1),S=Object(l.a)(k,2),I=S[0],C=S[1],E=Object(i.useState)(0),D=Object(l.a)(E,2),N=D[0],z=D[1],P=Object(i.useState)(null),M=Object(l.a)(P,2),A=M[0],U=M[1],q=Object(i.useState)(0),L=Object(l.a)(q,2),R=L[0],V=L[1],Y=Object(i.useState)(!1),G=Object(l.a)(Y,2),Z=G[0],$=G[1],_=Object(i.useState)(null),nn=Object(l.a)(_,2),en=nn[0],tn=nn[1];return null!=en&&0===A&&(clearInterval(en),tn(null),$(!1),U(null),a([]),s([]),z(0),document.querySelector("textarea").value=null,h({wpm:o.length/5/R,accuracy:(o.length-N)/o.length}),C(!0),w(!1),V(0)),Object(p.jsxs)(H,{children:[Object(p.jsx)(W,{children:"TYPING"}),Object(p.jsxs)(Q,{className:"content-container",children:[Object(p.jsx)(f,{getParagraphs:function(n){B.a.get("/api/paragraphs/".concat({1:5,3:20,5:30}[n])).then((function(n){var e=n.data.map((function(n){return n.paragraph}));a(e.join(" ").split(""))})).then(x(!1),w(!0)).then(U(60*n),V(n))},btnDisplay:m}),Object(p.jsx)(T,{paragraphs:t,userInput:o,typingDisplay:y,handleUserInput:function(n){var e=n.target.value.split("");s(e);var a=A;if(!Z&&A>0){var r=setInterval((function(){a--,U(a)}),1e3);$(!0),tn(r)}var i=n.nativeEvent.inputType;e.forEach((function(n,e){"insertText"===i&&(n!==t[e]?z(N+1):z(N))}));var c=document.querySelectorAll(".letter"),l=c[o.length].getBoundingClientRect().right,u=c[o.length+1].getBoundingClientRect().right;"deleteContentBackward"===i&&l>u?document.querySelector(".paragraphs").scrollTop-=46:l>u&&(document.querySelector(".paragraphs").scrollTop+=46)},inaccuracteCount:N}),Object(p.jsx)(J,{statistics:b,statsDisplay:I,setMinutesDisplay:x,setStatsDisplay:C})]}),Object(p.jsxs)(X,{children:[Object(p.jsx)(W,{children:"SPEED"}),Object(p.jsx)(K,{children:"TEST"}),Object(p.jsx)(F,{seconds:A,isTimerOn:Z})]})]})},$=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,54)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),a(n),r(n),i(n),c(n)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(Z,{})}),document.getElementById("root")),$()}},[[53,1,2]]]);
//# sourceMappingURL=main.b4e96f5b.chunk.js.map