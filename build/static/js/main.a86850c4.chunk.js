(this.webpackJsonpyufanw=this.webpackJsonpyufanw||[]).push([[0],{26:function(n,t,e){n.exports=e(38)},31:function(n,t,e){},38:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e.n(r),a=e(17),o=e.n(a),c=(e(31),e(1)),u=e(2),l=[{dark:"#513252",mid:"#7A4069",midLight:"#CA4E79",light:"#FFC18E"},{dark:"#355C7D",mid:"#6C5B7B",midLight:"#C06C84",light:"#F67280"},{dark:"#046582",mid:"#6E7582",midLight:"#BB8082",light:"#F39189"},{dark:"#BE8ABF",mid:"#EA9ABB",midLight:"#FEA5AD",light:"#F8C3AF"},{dark:"#2D4059",mid:"#EA5455",midLight:"#F07B3F",light:"#FFD460"}];function d(){var n=Object(c.a)(["\n    @font-face {\n        font-family: 'Titillium Web', sans-serif;\n    }\n"]);return d=function(){return n},n}var f=Object(u.a)(d()),h=e(20),m=e(7),b=e(23);function g(){var n=Object(c.a)(["\n  height: 160px;\n  position: absolute;\n  top: 40%;\n  left: 28%;\n"]);return g=function(){return n},n}function p(){var n=Object(c.a)(["\n  background: #FA9494;\n  width: 160px;\n  height: 160px:\n  min-width: 160px;\n  min-height: 160px;\n  border-radius: 50%;\n"]);return p=function(){return n},n}function v(){var n=Object(c.a)(["\n  position: absolute;\n  z-index: 10;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: ",";\n"]);return v=function(){return n},n}function s(){var n=Object(c.a)(["\n  position: absolute;\n  z-index: 2;\n  left: 0;\n  height: 100%;\n  width: 100%;\n"]);return s=function(){return n},n}function x(){var n=Object(c.a)(["\n  height: 40%;\n  background: ",";\n  width: 100%;\n  z-index: 100;\n  position: relative;\n"]);return x=function(){return n},n}function E(){var n=Object(c.a)(["\n  height: 60%;\n  background: ",";\n"]);return E=function(){return n},n}function w(){var n=Object(c.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n"]);return w=function(){return n},n}var C=u.b.div(w()),j=u.b.div(E(),(function(n){var t=n.colors;return"linear-gradient(0, ".concat(t.midLight," 0%, ").concat(t.mid," 50%, ").concat(t.dark," 88%)")})),F=u.b.div(x(),"#355C7D"),O=u.b.div(s()),k=u.b.div(v(),(function(n){var t=n.colors;return"linear-gradient(0, ".concat(t.dark," 0%, ").concat(t.mid," 30%, ").concat(t.midLight," 56%, ").concat(t.light," 78%)")})),A=u.b.div(p()),B=u.b.div(g());var y=function(){var n=Object(r.useState)(1),t=Object(b.a)(n,2),e=t[0],a=t[1];return i.a.createElement(C,{onClick:function(){for(var n=Math.floor(Math.random()*l.length);n===e;)n=Math.floor(Math.random()*l.length);a(n)}},i.a.createElement(j,{colors:l[e]},i.a.createElement(B,null,i.a.createElement(A,null))),i.a.createElement(F,null,i.a.createElement(O,null),i.a.createElement(k,{colors:l[e]})))};function z(){var n=Object(c.a)(["\n  color: ",";\n  text-decoration: none;\n  font-size: 12px;\n  :hover {\n    color: ",";\n    text-decoration: underline;\n  }\n"]);return z=function(){return n},n}function L(){var n=Object(c.a)(["\n  position: fixed;\n  z-index: 10000;\n  bottom: 0px;\n  right: 0px;\n  color: ",";\n  padding: 5px 5px 2px 5px;\n  font-size: 14px;\n"]);return L=function(){return n},n}function D(){var n=Object(c.a)(["\n  padding: 0 20px;\n  margin: 0;\n"]);return D=function(){return n},n}function M(){var n=Object(c.a)(["\n  font-size: 32px;\n  letter-spacing: 8px;\n  padding: 20px;\n  margin: 0;\n"]);return M=function(){return n},n}function W(){var n=Object(c.a)(["\n  height: 500px;\n  max-width: 700px;\n  position: relative;\n  padding: 20px;\n"]);return W=function(){return n},n}function J(){var n=Object(c.a)(["\n  height: 100%;\n  width: 100%;\n  position: relative;\n"]);return J=function(){return n},n}var T=u.b.div(J()),Y=u.b.div(W()),I=u.b.h1(M()),S=u.b.div(D()),q=u.b.div(L(),"#C1C7C9"),G=u.b.a(z(),"#C1C7C9","#F67280");var H=function(){var n=(new Date).getFullYear();return i.a.createElement(T,null,i.a.createElement(Y,null,i.a.createElement(y,null)),i.a.createElement(I,null,"yufan wang"),i.a.createElement(S,null,"senior engineer"),i.a.createElement(q,null,"\xa9 YW ",n," ",i.a.createElement(G,{href:"https://www.linkedin.com/in/yufan-wang-web/",rel:"noopener noreferrer nofollow"},"Contact Me")))},K=function(){return i.a.createElement(h.a,{basename:""},i.a.createElement(m.c,null,i.a.createElement(m.a,{exact:!0,path:"/",component:H})))};function N(){var n=Object(c.a)(["\n  background: #FFF;\n  color: ",";\n  height: 100vh;\n  width: 100%;\n  position: relative;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 20px;\n  background: ",";\n"]);return N=function(){return n},n}var P=u.b.div(N(),"#C1C7C9","rgb(26, 27, 31)"),Q=function(){return i.a.createElement(P,null,i.a.createElement(f,null),i.a.createElement(K,null))};o.a.render(i.a.createElement(Q,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.a86850c4.chunk.js.map