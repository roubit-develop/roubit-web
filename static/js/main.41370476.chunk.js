(this["webpackJsonproubit-coupon"]=this["webpackJsonproubit-coupon"]||[]).push([[0],{63:function(e,t,n){},65:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(4),s=n(53),r=n.n(s),i=(n(63),n(25)),o=n.n(i),j=n(38),b=n(30),l=n(39),u=n(40),d=n(54),p=(n(65),n(20)),h=n(55),O=n.n(h);function m(){var e=Object(d.a)([" mutation validateCoupon($name:String!,$birthday:DateTime!,$coupon:String!){ validateCoupon(name:$name,birthday:$birthday,coupon:$coupon)\n  }"]);return m=function(){return e},e}var x=function(){var e=Object(p.gql)(m()),t=Object(c.useState)({name:"",birthday:"",coupon:""}),n=Object(u.a)(t,2),s=n[0],r=n[1],i=Object(p.useMutation)(e),d=Object(u.a)(i,2),h=d[0],x=(d[1].loading,s.name),v=s.birthday,f=s.coupon,g=function(e){var t=e.target,n=t.value,a=t.name;r(Object(l.a)(Object(l.a)({},s),{},Object(b.a)({},a,n)))},N=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h({variables:{name:x,birthday:new Date(O()(v).format("YYYY-MM-DD")).toDateString(),coupon:f}});case 2:return t=e.sent,n=t.data,console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(8!=v.length||14!=f.length){e.next=7;break}return e.next=3,N();case 3:t=e.sent,alert(null===t||void 0===t?void 0:t.validateCoupon),e.next=8;break;case 7:alert("\ucfe0\ud3f0 \ub610\ub294 \uc0dd\ub144\uc6d4\uc77c \uc785\ub825\uc774 \uc798\ubabb \ub418\uc5c8\uc2b5\ub2c8\ub2e4.");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"AppHeader",children:[Object(a.jsx)("img",{src:"https://roubitdev.s3.ap-northeast-2.amazonaws.com/filepath/logo.png",alt:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc2e4\ud328 "}),Object(a.jsx)("li",{children:"ROUBIT"})]}),Object(a.jsxs)("div",{className:"AppBody",children:[Object(a.jsxs)("div",{className:"valid_Body",children:[Object(a.jsx)("h1",{className:"Input_description",children:"\ucfe0\ud3f0\ubc88\ud638 \uc785\ub825"}),Object(a.jsxs)("div",{className:"name",children:[Object(a.jsx)("span",{className:"sname",children:"\ub2c9\ub124\uc784"}),Object(a.jsx)("input",{className:"name_input",name:"name",onChange:g,value:x})]}),Object(a.jsxs)("div",{className:"birthday",children:[Object(a.jsx)("span",{className:"sbirth",children:"\uc0dd\ub144\uc6d4\uc77c"}),Object(a.jsx)("input",{className:"birthday_input",name:"birthday",onChange:g,value:v,placeholder:"YYYYMMDD"})]}),Object(a.jsx)("div",{className:"birthday_description",children:Object(a.jsx)("div",{children:"*\ub2c9\ub124\uc784,\uc0dd\ub144\uc6d4\uc77c \ud655\uc778\ubc29\ubc95: [\uc571 - \uc124\uc815\ud0ed - \ub9c8\uc774\ud398\uc774\uc9c0 - \ud68c\uc6d0\uc815\ubcf4\uc218\uc815]"})}),Object(a.jsx)("hr",{})]}),Object(a.jsxs)("div",{className:"valid_Coupon",children:[Object(a.jsxs)("div",{className:"coupon",children:[Object(a.jsx)("span",{className:"scoupon",children:"\ucfe0\ud3f0\ubc88\ud638"})," ",Object(a.jsx)("input",{className:"coupon_input",name:"coupon",onChange:g,value:f})]}),Object(a.jsx)("div",{className:"submit_div",children:Object(a.jsx)("button",{className:"submit_btn",onClick:y,children:"\uc801\uc6a9\ud558\uae30"})})]}),Object(a.jsxs)("div",{className:"attention",children:[Object(a.jsx)("h1",{children:"\uc774\uc6a9\uad8c \uc548\ub0b4"}),Object(a.jsxs)("p",{className:"attention-Body",children:["1. \uc0dd\ub144\uc6d4\uc77c\uc774 \uc77c\uce58\ud574\uc57c \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4.",Object(a.jsx)("br",{}),"\uc0dd\ub144\uc6d4\uc77c\uc744 \ud68c\uc6d0\uac00\uc785 \uc2dc \uc785\ub825\ud558\uc9c0 \uc54a\uc558\ub2e4\uba74 \uc785\ub825\ud574 \uc8fc\uc138\uc694. ",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"[\uc571 - \uc124\uc815 \ud0ed - \ub9c8\uc774\ud398\uc774\uc9c0 - \ud68c\uc6d0\uc815\ubcf4 \uc218\uc815]",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"2. \uc774\uc6a9\uad8c \uc801\uc6a9\uc774 \uc548\ub418\uac70\ub098 \uc774\uc6a9 \uc911 \ubb38\uc81c\uac00 \uc0dd\uacbc\ub2e4\uba74 ",Object(a.jsx)("a",{href:"https://open.kakao.com/o/gc3XuKlc",children:"\ubb38\uc758 \ub9c1\ud06c"}),"\ub85c \ubb38\uc758 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"3. \uad6c\uae00 \uc815\uae30\uacb0\uc81c, \ubb34\ub8cc\uccb4\ud5d8 \uc911\uc5d0\ub294 \uc774\uc6a9\uad8c \uc801\uc6a9\uc774 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4. ",Object(a.jsx)("br",{}),"\uc815\uae30\uacb0\uc81c \ud574\uc81c \ud6c4 \uc801\uc6a9\ud574 \uc8fc\uc138\uc694.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"\u203b\uc774 \ud398\uc774\uc9c0\ub294 \ubaa8\ubc14\uc77c \ud658\uacbd\uc5d0 \ucd5c\uc801\ud654\ub418\uc5b4\uc788\uc2b5\ub2c8\ub2e4."]})]})]})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},f=new p.ApolloClient({uri:"https://dev.roubitdev.shop/graphql",cache:new p.InMemoryCache});r.a.render(Object(a.jsx)(p.ApolloProvider,{client:f,children:Object(a.jsx)(x,{})}),document.getElementById("root")),v()}},[[75,1,2]]]);
//# sourceMappingURL=main.41370476.chunk.js.map