(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(4),a=n.n(s),u=(n(9),n(2)),l=(n(10),[{short:"EUR",name:"Euro",rate:4.5316},{short:"USD",name:"Dollar ameryka\u0144ski",rate:3.7374},{short:"GPB",name:"Funt brytyjski",rate:5.2571}]),i=l,o=(n(11),n(0)),j=function(e){var t=e.result;return Object(o.jsx)("p",{className:"result",children:void 0!==t&&Object(o.jsxs)(o.Fragment,{children:[t.sourceAmount.toFixed(2),"\xa0PLN\xa0="," ",Object(o.jsxs)("strong",{children:[t.targetAmount.toFixed(2),"\xa0",t.currency]})]})})},b=(n(13),function(e){var t=e.calculateResult,n=e.result,c=Object(r.useState)(l[0].short),s=Object(u.a)(c,2),a=s[0],i=s[1],b=Object(r.useState)(""),d=Object(u.a)(b,2),h=d[0],O=d[1];return Object(o.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(a,h),O("")},children:[Object(o.jsxs)("fieldset",{className:"form__fieldset",children:[Object(o.jsx)("legend",{className:"form__legend",children:"Przelicznik walut"}),Object(o.jsx)("p",{children:Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:" Kwota w PLN*: "}),Object(o.jsx)("input",{value:h,onChange:function(e){var t=e.target;return O(t.value)},placeholder:"Wpisz kwot\u0119 w PLN",type:"number",step:"0.01",required:!0})]})}),Object(o.jsx)("p",{children:Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Wybierz walut\u0119: "}),Object(o.jsx)("select",{value:a,onChange:function(e){var t=e.target;return i(t.value)},children:l.map((function(e){return Object(o.jsx)("option",{value:e.short,children:e.name},e.short)}))})]})})]}),Object(o.jsxs)("p",{className:"form__result",children:["Otrzymasz:",Object(o.jsx)("strong",{children:Object(o.jsx)(j,{result:n})})]}),Object(o.jsx)("p",{children:Object(o.jsx)("button",{type:"submit",className:"form__button",children:"Przelicz"})})]})});var d=function(){var e=Object(r.useState)(),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(b,{result:n,calculateResult:function(e,t){var n=i.find((function(t){return t.short===e})).rate;c({sourceAmount:+t,targetAmount:t/n,currency:e})}})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),h()}],[[14,1,2]]]);
//# sourceMappingURL=main.086bb587.chunk.js.map