(this["webpackJsonproubit-coupon"]=this["webpackJsonproubit-coupon"]||[]).push([[0],{63:function(e,t,n){},65:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(4),r=n(55),i=n.n(r),s=(n(63),n(17)),o=n(18),b=n.n(o),u=n(25),d=n(24),j=n(26),l=n(27),p=(n(65),n(12)),h=n(28),m=n.n(h);function O(){var e=Object(l.a)(["mutation addCoupon($name:String!,$birthday:DateTime!,$coupon:String!)\n{ addCoupon(name:$name,birthday:$birthday,coupon:$coupon)}"]);return O=function(){return e},e}function v(){var e=Object(l.a)([" mutation validateCoupon($name:String!,$birthday:DateTime!,$coupon:String!)\n{ validateCoupon(name:$name,birthday:$birthday,coupon:$coupon)}"]);return v=function(){return e},e}var x=Object(p.gql)(v()),f=Object(p.gql)(O());var g=function(){var e=Object(c.useState)({name:"",birthday:"",coupon:""}),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(p.useMutation)(x),o=Object(s.a)(i,2),l=o[0],h=(o[1].loading,Object(p.useMutation)(f)),O=Object(s.a)(h,2),v=O[0],g=(O[1].addloading,n.name),y=n.birthday,N=n.coupon,w=function(e){var t=e.target,a=t.value,c=t.name;r(Object(j.a)(Object(j.a)({},n),{},Object(d.a)({},c,a)))},C=function(){var e=Object(u.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l({variables:{name:g,birthday:new Date(m()(y).format("YYYY-MM-DD")).toDateString(),coupon:N}});case 2:return t=e.sent,n=t.data,console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(b.a.mark((function e(){var t,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(8!==y.length||6!==N.length){e.next=23;break}return e.next=3,C();case 3:if("\uc774\ubbf8 \ub4f1\ub85d\ub41c \ucfe0\ud3f0\uc774 \uc788\uc74c."!==(null===(t=e.sent)||void 0===t?void 0:t.validateCoupon)){e.next=19;break}if(!window.confirm("\ucfe0\ud3f0\uc744 \ucd94\uac00\ub85c \ub4f1\ub85d \ud558\uc2dc\uaca0\uc2b5\ub2c8\ub2e4?")){e.next=15;break}return e.next=8,v({variables:{name:g,birthday:new Date(m()(y).format("YYYY-MM-DD")).toDateString(),coupon:N}});case 8:n=e.sent,a=n.data,console.log(a),alert(null===a||void 0===a?void 0:a.addCoupon),r({name:"",birthday:"",coupon:""}),e.next=17;break;case 15:alert("\ucd94\uac00 \ub4f1\ub85d\uc744 \ucde8\uc18c\ud558\uc600\uc2b5\ub2c8\ub2e4."),r({name:"",birthday:"",coupon:""});case 17:e.next=21;break;case 19:alert(null===t||void 0===t?void 0:t.validateCoupon),r({name:"",birthday:"",coupon:""});case 21:e.next=24;break;case 23:alert("\ucfe0\ud3f0 \ub610\ub294 \uc0dd\ub144\uc6d4\uc77c \uc785\ub825\uc774 \uc798\ubabb \ub418\uc5c8\uc2b5\ub2c8\ub2e4.");case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"AppHeader",children:Object(a.jsx)("img",{src:"https://roubitdev.s3.ap-northeast-2.amazonaws.com/filepath/roubitSigniture.png",alt:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc2e4\ud328 "})}),Object(a.jsxs)("div",{className:"AppBody",children:[Object(a.jsxs)("div",{className:"valid_Body",children:[Object(a.jsx)("h1",{className:"Input_description",children:"\ucfe0\ud3f0\ubc88\ud638 \uc785\ub825"}),Object(a.jsxs)("div",{className:"name",children:[Object(a.jsx)("span",{className:"sname",children:"\ub2c9\ub124\uc784"}),Object(a.jsx)("input",{className:"name_input",name:"name",onChange:w,value:g})]}),Object(a.jsxs)("div",{className:"birthday",children:[Object(a.jsx)("span",{className:"sbirth",children:"\uc0dd\ub144\uc6d4\uc77c"}),Object(a.jsx)("input",{className:"birthday_input",name:"birthday",onChange:w,value:y,placeholder:"YYYYMMDD"})]}),Object(a.jsx)("div",{className:"birthday_description",children:Object(a.jsx)("div",{children:"*\ub2c9\ub124\uc784,\uc0dd\ub144\uc6d4\uc77c \ud655\uc778\ubc29\ubc95: [\uc571 - \uc124\uc815\ud0ed - \ub9c8\uc774\ud398\uc774\uc9c0 - \ud68c\uc6d0\uc815\ubcf4\uc218\uc815]"})}),Object(a.jsx)("hr",{})]}),Object(a.jsxs)("div",{className:"valid_Coupon",children:[Object(a.jsxs)("div",{className:"coupon",children:[Object(a.jsx)("span",{className:"scoupon",children:"\ucfe0\ud3f0\ubc88\ud638"})," ",Object(a.jsx)("input",{className:"coupon_input",name:"coupon",placeholder:"AAAAAA",onChange:w,value:N})]}),Object(a.jsx)("div",{className:"submit_div",children:Object(a.jsx)("button",{className:"submit_btn",onClick:D,children:"\uc801\uc6a9\ud558\uae30"})})]}),Object(a.jsxs)("div",{className:"attention",children:[Object(a.jsx)("h1",{children:"\uc774\uc6a9\uad8c \uc548\ub0b4"}),Object(a.jsxs)("p",{className:"attention-Body",children:["1. \uc0dd\ub144\uc6d4\uc77c\uc774 \uc77c\uce58\ud574\uc57c \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4.",Object(a.jsx)("br",{}),"\uc0dd\ub144\uc6d4\uc77c\uc744 \ud68c\uc6d0\uac00\uc785 \uc2dc \uc785\ub825\ud558\uc9c0 \uc54a\uc558\ub2e4\uba74 \uc785\ub825\ud574 \uc8fc\uc138\uc694. ",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"[\uc571 - \uc124\uc815 \ud0ed - \ub9c8\uc774\ud398\uc774\uc9c0 - \ud68c\uc6d0\uc815\ubcf4 \uc218\uc815]",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"2. \uc774\uc6a9\uad8c \uc801\uc6a9\uc774 \uc548\ub418\uac70\ub098 \uc774\uc6a9 \uc911 \ubb38\uc81c\uac00 \uc0dd\uacbc\ub2e4\uba74 ",Object(a.jsx)("a",{href:"https://open.kakao.com/o/sM8zJpQc",children:"\ubb38\uc758 \ub9c1\ud06c"}),"\ub85c \ubb38\uc758 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"3. \uad6c\uae00 \uc815\uae30\uacb0\uc81c, \ubb34\ub8cc\uccb4\ud5d8 \uc911\uc5d0\ub294 \uc774\uc6a9\uad8c \uc801\uc6a9\uc774 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4. ",Object(a.jsx)("br",{}),"\uc815\uae30\uacb0\uc81c \ud574\uc81c \ud6c4 \uc801\uc6a9\ud574 \uc8fc\uc138\uc694.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"\u203b\uc774 \ud398\uc774\uc9c0\ub294 \ubaa8\ubc14\uc77c \ud658\uacbd\uc5d0 \ucd5c\uc801\ud654\ub418\uc5b4\uc788\uc2b5\ub2c8\ub2e4."]})]})]})]})};n(74);function y(){var e=Object(l.a)(["mutation addCoupon($name:String!,$birthday:DateTime!,$coupon:String!)\n{ addCoupon(name:$name,birthday:$birthday,coupon:$coupon)}"]);return y=function(){return e},e}function N(){var e=Object(l.a)([" mutation validateCoupon($name:String!,$birthday:DateTime!,$coupon:String!)\n{ validateCoupon(name:$name,birthday:$birthday,coupon:$coupon)}"]);return N=function(){return e},e}var w=Object(p.gql)(N()),C=Object(p.gql)(y());var D=function(){var e=Object(c.useState)({name:"",birthday:"",coupon:""}),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(p.useMutation)(w),o=Object(s.a)(i,2),l=o[0],h=(o[1].loading,Object(p.useMutation)(C)),O=Object(s.a)(h,2),v=O[0],x=(O[1].addloading,n.name),f=n.birthday,g=n.coupon,y=function(e){var t=e.target,a=t.value,c=t.name;r(Object(j.a)(Object(j.a)({},n),{},Object(d.a)({},c,a)))},N=function(){var e=Object(u.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l({variables:{name:x,birthday:new Date(m()(f).format("YYYY-MM-DD")).toDateString(),coupon:g}});case 2:return t=e.sent,n=t.data,console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(b.a.mark((function e(){var t,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(8!==f.length||6!==g.length){e.next=23;break}return e.next=3,N();case 3:if("\uc774\ubbf8 \ub4f1\ub85d\ub41c \ucfe0\ud3f0\uc774 \uc788\uc74c."!==(null===(t=e.sent)||void 0===t?void 0:t.validateCoupon)){e.next=19;break}if(!window.confirm("\ucfe0\ud3f0\uc744 \ucd94\uac00\ub85c \ub4f1\ub85d \ud558\uc2dc\uaca0\uc2b5\ub2c8\ub2e4?")){e.next=15;break}return e.next=8,v({variables:{name:x,birthday:new Date(m()(f).format("YYYY-MM-DD")).toDateString(),coupon:g}});case 8:n=e.sent,a=n.data,console.log(a),alert(null===a||void 0===a?void 0:a.addCoupon),r({name:"",birthday:"",coupon:""}),e.next=17;break;case 15:alert("\ucd94\uac00 \ub4f1\ub85d\uc744 \ucde8\uc18c\ud558\uc600\uc2b5\ub2c8\ub2e4."),r({name:"",birthday:"",coupon:""});case 17:e.next=21;break;case 19:alert(null===t||void 0===t?void 0:t.validateCoupon),r({name:"",birthday:"",coupon:""});case 21:e.next=24;break;case 23:alert("\ucfe0\ud3f0 \ub610\ub294 \uc0dd\ub144\uc6d4\uc77c \uc785\ub825\uc774 \uc798\ubabb \ub418\uc5c8\uc2b5\ub2c8\ub2e4.");case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"Pc",children:[Object(a.jsx)("div",{className:"PcHeader",children:Object(a.jsx)("img",{src:"https://roubitdev.s3.ap-northeast-2.amazonaws.com/filepath/roubitSigniture.png",alt:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc2e4\ud328 "})}),Object(a.jsxs)("div",{className:"PcBody",children:[Object(a.jsxs)("div",{className:"valid_Body",children:[Object(a.jsx)("h1",{className:"Input_description",children:"\ucfe0\ud3f0\ubc88\ud638 \uc785\ub825"}),Object(a.jsxs)("div",{className:"name",children:[Object(a.jsx)("span",{className:"sname",children:"\ub2c9\ub124\uc784"}),Object(a.jsx)("input",{className:"name_input",name:"name",onChange:y,value:x})]}),Object(a.jsxs)("div",{className:"birthday",children:[Object(a.jsx)("span",{className:"sbirth",children:"\uc0dd\ub144\uc6d4\uc77c"}),Object(a.jsx)("input",{className:"birthday_input",name:"birthday",onChange:y,value:f,placeholder:"YYYYMMDD"})]}),Object(a.jsx)("div",{className:"birthday_description",children:Object(a.jsx)("div",{children:"*\ub2c9\ub124\uc784,\uc0dd\ub144\uc6d4\uc77c \ud655\uc778\ubc29\ubc95: [\uc571 - \uc124\uc815\ud0ed - \ub9c8\uc774\ud398\uc774\uc9c0 - \ud68c\uc6d0\uc815\ubcf4\uc218\uc815]"})}),Object(a.jsx)("hr",{})]}),Object(a.jsxs)("div",{className:"valid_Coupon",children:[Object(a.jsxs)("div",{className:"coupon",children:[Object(a.jsx)("span",{className:"scoupon",children:"\ucfe0\ud3f0\ubc88\ud638"})," ",Object(a.jsx)("input",{className:"coupon_input",name:"coupon",placeholder:"AAAAAA",onChange:y,value:g})]}),Object(a.jsx)("div",{className:"submit_div",children:Object(a.jsx)("button",{className:"submit_btn",onClick:D,children:"\uc801\uc6a9\ud558\uae30"})})]}),Object(a.jsxs)("div",{className:"attention",children:[Object(a.jsx)("h1",{children:"\uc774\uc6a9\uad8c \uc548\ub0b4"}),Object(a.jsxs)("p",{className:"attention-Body",children:["1. \uc0dd\ub144\uc6d4\uc77c\uc774 \uc77c\uce58\ud574\uc57c \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4.",Object(a.jsx)("br",{}),"\uc0dd\ub144\uc6d4\uc77c\uc744 \ud68c\uc6d0\uac00\uc785 \uc2dc \uc785\ub825\ud558\uc9c0 \uc54a\uc558\ub2e4\uba74 \uc785\ub825\ud574 \uc8fc\uc138\uc694. ",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"[\uc571 - \uc124\uc815 \ud0ed - \ub9c8\uc774\ud398\uc774\uc9c0 - \ud68c\uc6d0\uc815\ubcf4 \uc218\uc815]",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"2. \uc774\uc6a9\uad8c \uc801\uc6a9\uc774 \uc548\ub418\uac70\ub098 \uc774\uc6a9 \uc911 \ubb38\uc81c\uac00 \uc0dd\uacbc\ub2e4\uba74 ",Object(a.jsx)("a",{href:"https://open.kakao.com/o/sM8zJpQc",children:"\ubb38\uc758 \ub9c1\ud06c"}),"\ub85c \ubb38\uc758 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"3. \uad6c\uae00 \uc815\uae30\uacb0\uc81c, \ubb34\ub8cc\uccb4\ud5d8 \uc911\uc5d0\ub294 \uc774\uc6a9\uad8c \uc801\uc6a9\uc774 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4. ",Object(a.jsx)("br",{}),"\uc815\uae30\uacb0\uc81c \ud574\uc81c \ud6c4 \uc801\uc6a9\ud574 \uc8fc\uc138\uc694.",Object(a.jsx)("br",{})]})]})]})]})};var k=function(){var e=Object(c.useState)(window.innerWidth),t=Object(s.a)(e,2),n=t[0],r=t[1];return console.log(n),console.log(window.innerWidth),Object(c.useEffect)((function(){r(window.innerWidth)}),[window.innerWidth]),Object(a.jsx)("div",{children:n>=500?Object(a.jsx)(D,{}):Object(a.jsx)(g,{})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},$=new p.ApolloClient({uri:"https://dev.roubitdev.shop/graphql",cache:new p.InMemoryCache});i.a.render(Object(a.jsx)(p.ApolloProvider,{client:$,children:Object(a.jsx)(k,{})}),document.getElementById("root")),Y()}},[[76,1,2]]]);
//# sourceMappingURL=main.3e4cb34c.chunk.js.map