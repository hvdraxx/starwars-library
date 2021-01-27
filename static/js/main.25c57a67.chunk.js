(this["webpackJsonpstar-wars-lib"]=this["webpackJsonpstar-wars-lib"]||[]).push([[0],{23:function(n,t,e){},24:function(n,t,e){"use strict";e.r(t);var a=e(0),i=e(1),r=e.n(i),o=e(10),d=e.n(o),c=e(4),l=e(2),s=e(3);function u(){var n=Object(l.a)(["\n  font-size: 40px;\n  letter-spacing: 8px;\n  color: var(--white);\n\n  @media all and (max-width: 1440px) {\n    font-size: 1.8vw;\n  }\n\n  @media all and (max-width: 1024px) {\n    order: 1;\n    font-size: 3.8vw;\n    line-height: 1.5;\n  }\n\n  @media all and (max-width: 768px) {\n    line-height: 1.6;\n    letter-spacing: 5px;\n  }\n"]);return u=function(){return n},n}function p(){var n=Object(l.a)(["\n  line-height: 0.35;\n\n  @media all and (max-width: 1024px) {\n    margin-right: 18px;\n    line-height: 1;\n  }\n\n  @media all and (max-width: 425px) {\n    margin-right: 10px;\n  }\n"]);return p=function(){return n},n}function x(){var n=Object(l.a)(["\n  line-height: 0.7;\n  font-size: 180px;\n  transform-style: preserve-3d;\n  transform: perspective(8cm) rotateX(40deg) rotateY(0);\n\n  @media all and (min-width: 2000px) {\n    line-height: 0.75;\n    font-size: 8vw;\n  }\n\n  @media all and (max-width: 1440px) {\n    line-height: 6.4vw;\n    font-size: 9.5vw;\n  }\n\n  @media all and (max-width: 1024px) {\n    margin-right: 0.8vw;\n    line-height: 1;\n  }\n"]);return x=function(){return n},n}function h(){var n=Object(l.a)(['\n  & > * {\n    font-family: "Star Jedi", sans-serif;\n    text-align: center;\n    user-select: none;\n  }\n\n  @media all and (max-width: 1024px) {\n    display: flex;\n    align-items: flex-end;\n    margin-bottom: 40px;\n  }\n\n  @media all and (max-width: 425px) {\n    margin-bottom: 15px;\n  }\n']);return h=function(){return n},n}var m=s.a.div(h()),f=s.a.h1(x()),b=Object(s.a)(f)(p()),j=s.a.h2(u());function g(){return Object(a.jsxs)(m,{children:[Object(a.jsx)(f,{children:"star"}),Object(a.jsx)(j,{children:"library"}),Object(a.jsx)(b,{children:"wars"})]})}var v=e(8),w=e.n(v),O=e(14);function y(){var n=Object(l.a)(["\n  width: 100%;\n  border: 2px solid var(--white);\n  margin-bottom: 20px;\n  padding: 10px;\n  color: var(--white);\n  background-color: transparent;\n  transition: 0.3s;\n\n  &::placeholder {\n    font-family: 'Open sans', serif;\n    color: rgba(255, 255, 255, 0.6);\n    transition: 0.3s;\n  }\n\n  &:focus {\n    border-color: var(--white);\n    outline: none;\n    box-shadow: 0 0 10px white;\n  }\n\n  &:focus&::placeholder {\n    color: var(--white);\n  }\n\n  &:hover {\n    box-shadow: 0 0 10px white;\n  }\n\n  @media all and (max-width: 425px) {\n    margin-bottom: 15px;\n    padding: 7px;\n    font-size: 16px;\n  }\n"]);return y=function(){return n},n}function k(){var n=Object(l.a)(["\n  width: 100%;\n  padding: 0 25px;\n\n  @media all and (max-width: 1024px) {\n    padding: 0;\n  }\n"]);return k=function(){return n},n}var z=s.a.div(k()),S=s.a.input(y()),I=function(n){return Object(a.jsx)(z,{children:Object(a.jsx)(S,{type:"text",placeholder:"e. g. Skywalker",id:"inputSearch",autoComplete:"off",onChange:n.handleValue,onMouseEnter:function(n){n.target.focus()},value:n.value})})};function R(){var n=Object(l.a)(["\n  font-size: 24px;\n\n  &:hover {\n    cursor: pointer;\n    color: var(--white);\n    text-decoration: underline;\n  }\n\n  &:focus {\n    color: var(--white);\n    text-decoration: underline;\n  }\n\n  @media all and (max-width: 1440px) {\n    font-size: 1.6vw;\n  }\n\n  @media all and (max-width: 1024px) {\n    font-size: 2.5vw;\n  }\n\n  @media all and (max-width: 425px) {\n    font-size: 14px;\n  }\n"]);return R=function(){return n},n}function M(){var n=Object(l.a)(["\n  display: none;\n\n  &:checked ~ * {\n    color: var(--white);\n    text-decoration: underline;\n  }\n"]);return M=function(){return n},n}var C=s.a.input(M()),F=s.a.label(R()),J=function(n){return Object(a.jsxs)("div",{children:[Object(a.jsx)(C,{type:"radio",name:"option",id:n.value,defaultChecked:n.checked}),Object(a.jsx)(F,{htmlFor:n.value,onClick:function(){n.handleOption(n.value)},children:n.value})]})};function A(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-around;\n  padding: 0 120px;\n  margin-bottom: 30px;\n\n  @media all and (max-width: 1440px) {\n    padding: 0 25px;\n  }\n\n  @media all and (max-width: 1024px) {\n    padding: 0 75px;\n    margin-bottom: 1.2vw;\n  }\n\n  @media all and (max-width: 425px) {\n    padding: 0 25px;\n    margin-bottom: 8px;\n  }\n"]);return A=function(){return n},n}var D=s.a.div(A()),E=function(n){return Object(a.jsxs)(D,{children:[Object(a.jsx)(J,{value:"people",handleOption:n.handleOption,checked:!0}),Object(a.jsx)(J,{value:"planets",handleOption:n.handleOption}),Object(a.jsx)(J,{value:"starships",handleOption:n.handleOption})]})};function P(){var n=Object(l.a)(['\n  width: 100%;\n  border: 2px solid rgba(255,232,31, 0.2);\n  padding: 2px;\n  font-family: "Star Jedi";\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: 2px;\n  color: var(--black);\n  background-color: rgba(255,232,31, 0.8);\n  cursor: pointer;\n  transition: 0.3s;\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 10px rgba(255,232,31, 0.6);\n  }\n\n  &:hover {\n    background-color: var(--yellow);\n    box-shadow: 0 0 10px rgba(255,232,31, 0.6);\n  }\n\n  @media all and (max-width: 1024px) {\n    width: 200px;\n  }\n\n  @media all and (max-width: 425px) {\n    width: 160px;\n    padding: 0;\n    font-size: 18px;\n  }\n']);return P=function(){return n},n}function V(){var n=Object(l.a)(["\n  width: 100%;\n  padding: 0 25px;\n\n  @media all and (max-width: 1024px) {\n    display: flex;\n    justify-content: center;\n  }\n"]);return V=function(){return n},n}var _=s.a.div(V()),q=s.a.button(P()),B=function(){return Object(a.jsx)(_,{children:Object(a.jsx)(q,{type:"submit",children:"Find"})})};function N(){var n=Object(l.a)(["\n  font-size: 30px;\n  font-weight: bold;\n  word-spacing: 3px;\n  letter-spacing: 1px;\n  text-align: center;\n  margin-bottom: 15px;\n\n  @media all and (max-width: 1200px) {\n    font-size: 2.3vw;\n  }\n\n  @media all and (max-width: 1024px) {\n    margin-bottom: 2vw;\n    font-size: 3vw;\n    text-transform: uppercase;\n  }\n\n  @media all and (max-width: 425px) {\n    font-size: 13px;\n  }\n"]);return N=function(){return n},n}function T(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);return T=function(){return n},n}var X=s.a.form(T()),Y=s.a.h3(N()),G=function(n){var t=Object(i.useState)(""),e=Object(c.a)(t,2),r=e[0],o=e[1],d=Object(i.useState)("people"),l=Object(c.a)(d,2),s=l[0],u=l[1],p=function(){var t=Object(O.a)(w.a.mark((function t(e){var a,i,d,c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),""!==r){t.next=6;break}n.setResponseStatus("empty"),n.triggerModal(),t.next=23;break;case 6:return a="https://swapi.dev/api/".concat(s,"/?search=").concat(r),t.next=9,fetch(a);case 9:if(200===(i=t.sent).status){t.next=16;break}n.setResponseStatus(i.status),n.triggerModal(),n.setSelectedItem([]),t.next=23;break;case 16:return t.next=18,i.json();case 18:d=t.sent,c=d.results,n.setResponse(c),n.setResponseStatus(i.status),200===i.status&&0===c.length&&(n.setResponseStatus("notFound"),n.triggerModal(),n.setSelectedItem([]));case 23:o("");case 24:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(a.jsxs)(X,{onSubmit:p,children:[Object(a.jsx)(Y,{children:"what would you like to find?"}),Object(a.jsx)(E,{handleOption:function(n){u(n)}}),Object(a.jsx)(I,{handleValue:function(n){o(n.target.value)},value:r}),Object(a.jsx)(B,{})]})};function H(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 38%;\n\n  @media all and (max-width: 1024px) {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    justify-content: start;\n    width: 100%;\n    margin-bottom: 25px;\n    padding: 0 25px; \n  }\n  \n  @media all and (max-width: 425px) {\n    padding: 0 10px;\n  }\n"]);return H=function(){return n},n}var K=s.a.div(H()),L=function(n){return Object(a.jsxs)(K,{children:[Object(a.jsx)(g,{}),Object(a.jsx)(G,{setResponse:n.setResponse,setResponseStatus:n.setResponseStatus,setSelectedItem:n.setSelectedItem,triggerModal:n.triggerModal})]})};function Q(){var n=Object(l.a)(["\n  display: none;\n\n  &:checked ~ * {\n    outline: none;\n    border-color: var(--white);\n    border-radius: none;\n    background-color: var(--white);\n    color: var(--black);\n  }\n"]);return Q=function(){return n},n}function U(){var n=Object(l.a)(["\n  display: block;\n  padding: 10px 0;\n  border: 1px solid var(--yellow);\n  text-align: center;\n  background-color: transparent;\n  cursor: pointer;\n  transition: 0.2s;\n\n  &:hover {\n    border-color: var(--white);\n    color: var(--white);\n  }\n\n  @media all and (max-width: 1200px) {\n    font-size: 1.6vw;\n  }\n\n  @media all and (max-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media all and (max-width: 425px) {\n    padding: 4px 6px;\n  }\n"]);return U=function(){return n},n}function W(){var n=Object(l.a)(["\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n\n  @media all and (max-width: 1024px) {\n    &:not(:last-child) {\n      margin-bottom: 18px;\n    }\n  }\n"]);return W=function(){return n},n}var Z=s.a.li(W()),$=s.a.label(U()),nn=s.a.input(Q()),tn=function(n){return Object(a.jsxs)(Z,{children:[Object(a.jsx)(nn,{type:"radio",name:"item",id:n.item.name}),Object(a.jsx)($,{htmlFor:n.item.name,onClick:function(){n.selectItem(n.item)},children:n.item.name})]})};function en(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  padding: 0 50px;\n\n  @media all and (max-width: 1440px) {\n    padding: 0 25px;\n  }\n\n  @media all and (max-width: 1024px) {\n    height: auto;\n    padding: 0 12.5px 0 25px;\n  }\n\n  @media all and (max-width: 425px) {\n    padding: 0 5px 0 10px;\n  }\n"]);return en=function(){return n},n}var an=s.a.ul(en()),rn=function(n){var t=n.items.map((function(t){return Object(a.jsx)(tn,{item:t,selectItem:n.selectItem},t.name)})),e=document.querySelectorAll("input[name=item]");return Object.values(e).map((function(n){n.checked&&(n.checked=!1)})),Object(a.jsx)(an,{children:t})};function on(){var n=Object(l.a)(["\n  width: 31%;\n\n  @media all and (max-width: 1024px) {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    width: 100%;\n    heigh: 100vh;\n  }\n"]);return on=function(){return n},n}var dn=s.a.div(on()),cn=function(n){return Object(a.jsx)(dn,{children:0!==n.items.length?Object(a.jsx)(rn,{items:n.items,selectItem:n.selectItem}):null})};function ln(){var n=Object(l.a)(["\n  color: var(--white)\n"]);return ln=function(){return n},n}function sn(){var n=Object(l.a)(["\n  @media all and (max-width: 1200px) {\n    font-size: 1.6vw;\n  }\n\n  @media all and (max-width: 768px) {\n    font-size: 14px;\n  }\n"]);return sn=function(){return n},n}function un(){var n=Object(l.a)(["\n  padding: 8px;\n  border: 1px solid var(--white);\n\n  &:not(:last-child) {\n    margin-bottom: 18px;\n  }\n\n  @media all and (max-width: 1200px) {\n    font-size: 1.4vw;\n  }\n\n  @media all and (max-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media all and (max-width: 425px) {\n    padding: 4px 6px;\n  }\n"]);return un=function(){return n},n}var pn=s.a.li(un()),xn=s.a.span(sn()),hn=Object(s.a)(xn)(ln()),mn=function(n){return Object(a.jsxs)(pn,{children:[Object(a.jsx)(xn,{children:n.property}),": ",Object(a.jsx)(hn,{children:n.value})]})};function fn(){var n=Object(l.a)(["\n  width: 100%;\n  padding: 0 50px;\n\n  @media all and (max-width: 1440px) {\n    padding: 0 25px;\n  }\n\n  @media all and (max-width: 1024px) {\n    height: auto;\n    padding: 0 25px 0 12.5px;\n  }\n\n  @media all and (max-width: 425px) {\n    padding: 0 10px 0 5px;\n  }\n"]);return fn=function(){return n},n}var bn=s.a.ul(fn()),jn=function(n){var t=n.item;Object.entries(t).map((function(n){var e=Object(c.a)(n,2),a=e[0],i=e[1];return""===i||"url"===a||"created"===a||"edited"===a||"homeworld"===a||Array.isArray(i)?delete t[a]:void(a.includes("_")&&(Object.defineProperty(t,a.replace("_"," "),Object.getOwnPropertyDescriptor(t,a)),delete t[a]))}));var e=Object.entries(t).map((function(n){var t=Object(c.a)(n,2),e=t[0],i=t[1];return Object(a.jsx)(mn,{property:e,value:i},e)}));return Object(a.jsx)(bn,{children:e})};function gn(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 31%;\n\n  @media all and (max-width: 1024px) {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    width: 100%;\n    align-items: start;\n  }\n"]);return gn=function(){return n},n}var vn=s.a.div(gn()),wn=function(n){return Object(a.jsx)(vn,{children:0!==Object.keys(n.item).length?Object(a.jsx)(jn,{item:n.item}):null})};function On(){var n=Object(l.a)(["\n  margin-bottom: 0;\n  font-family: 'Star Jedi';\n  font-size: 30px !important;\n  line-height: 1;\n"]);return On=function(){return n},n}function yn(){var n=Object(l.a)(["\n  text-align: center;\n\n  & p {\n    color: var(--black);\n    font-size: 26px;\n    font-weight: bold;\n    word-spacing: 3px;\n  }\n"]);return yn=function(){return n},n}function kn(){var n=Object(l.a)(["\n  margin-bottom: 25px;\n  color: var(--black);\n  font-size: 26px;\n  font-weight: bold;\n  word-spacing: 3px;\n\n  @media all and (max-width: 767px) {\n    font-size: 20px;\n    text-align: center;\n  }\n"]);return kn=function(){return n},n}var zn=s.a.p(kn()),Sn=s.a.p(yn()),In=Object(s.a)(zn)(On()),Rn=function(n){return Object(a.jsx)(zn,{children:"string"!==typeof n.status?Object(a.jsxs)(Sn,{children:[Object(a.jsx)("p",{children:"Something went wrong."}),Object(a.jsx)(In,{children:"Try again"})]}):"empty"===n.status?"Input field should not be empty":"notFound"===n.status?"Nothing Found":void 0})};function Mn(){var n=Object(l.a)(["\n  padding: 10px 35px;\n  border: 1px solid var(--black);\n  background-color: var(--black);\n  cursor: pointer;\n  transition: 0.3s;\n\n  &:hover {\n    color: var(--black);\n    background-color: var(--white);\n    box-shadow: 0 0 7px 0 var(--black);\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);return Mn=function(){return n},n}function Cn(){var n=Object(l.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 30px 100px;\n  background-color: var(--yellow);\n\n  @media all and (max-width: 767px) {\n    width: 90%;\n    height: auto;\n    padding: 30px 25px;\n  }\n"]);return Cn=function(){return n},n}function Fn(){var n=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.9);\n  z-index: 9;\n"]);return Fn=function(){return n},n}var Jn=s.a.div(Fn()),An=s.a.div(Cn()),Dn=s.a.button(Mn()),En=function(n){return Object(a.jsx)(Jn,{children:Object(a.jsxs)(An,{children:[Object(a.jsx)(Rn,{status:n.status}),Object(a.jsx)(Dn,{onClick:n.triggerModal,children:"close"})]})})};function Pn(){var n=Object(l.a)(["\n  display: flex;\n  width: 100%;\n  height: auto;\n  min-height: 100vh;\n  padding: 25px 0;\n\n  @media all and (max-width: 1440px) {\n    padding: 25px 0;\n  }\n\n  @media all and (max-width: 1024px) {\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-template-rows: auto auto;\n    height: unset;\n    min-height: unset;\n  }\n\n  @media all and (max-width: 425px) {\n    padding: 10px 0;\n  }\n"]);return Pn=function(){return n},n}var Vn=s.a.div(Pn()),_n=function(){var n=Object(i.useState)([]),t=Object(c.a)(n,2),e=t[0],r=t[1],o=Object(i.useState)(void 0),d=Object(c.a)(o,2),l=d[0],s=d[1],u=Object(i.useState)({}),p=Object(c.a)(u,2),x=p[0],h=p[1],m=Object(i.useState)(!1),f=Object(c.a)(m,2),b=f[0],j=f[1];return Object(a.jsxs)(Vn,{children:[b?Object(a.jsx)(En,{status:l,triggerModal:function(){j(!b)}}):null,Object(a.jsx)(cn,{items:e,selectItem:function(n){h(n)}}),Object(a.jsx)(L,{setResponse:function(n){r(n)},setResponseStatus:function(n){s(n)},setSelectedItem:function(n){h(n)},triggerModal:function(){j(!b)}}),Object(a.jsx)(wn,{item:x})]})};e(23);d.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(_n,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.25c57a67.chunk.js.map