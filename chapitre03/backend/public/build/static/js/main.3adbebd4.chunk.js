(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(14),i=n.n(a),o=(n(21),n(8)),r=n(2),d=(n(22),n(23),n(1)),l=function(){return Object(d.jsxs)("nav",{children:[Object(d.jsx)("div",{className:"brand",children:"Simple form"}),Object(d.jsx)(o.b,{className:"link",exact:!0,to:"/students/add",activeClassName:"active-link",children:"Home"}),Object(d.jsx)(o.b,{className:"link",exact:!0,to:"/",activeClassName:"active-link",children:"Formulaire"})]})},j=n(13),u=(n(33),function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)([]),o=Object(j.a)(i,2),l=o[0],u=o[1],b=Object(r.f)();Object(c.useEffect)((function(){fetch("http://localhost:8080/students").then((function(e){return console.log("res :>> ",e),e.json()})).then((function(e){console.log("resJson :>> ",e),u(e)}))}),[]);return console.log("studentList :>> ",l),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container-view-form",children:[Object(d.jsxs)("div",{className:"wrapper-list",children:[Object(d.jsx)("h1",{children:"Students list"}),Object(d.jsx)("ul",{children:l.map((function(e){return Object(d.jsx)("li",{children:e})}))})]}),Object(d.jsx)("div",{className:"separation"}),Object(d.jsxs)("div",{className:"wrapper-form",children:[Object(d.jsx)("h1",{children:"Add students"}),Object(d.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),console.log("event :>> ",e.target.value),fetch("http://localhost:8080/students",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({student:s})}),b.push("/students/add",s)},children:[Object(d.jsx)("label",{htmlFor:"Student-name",children:"Student name"}),Object(d.jsx)("input",{id:"Student-name",className:"input-form",type:"text",name:"student",value:s,autoComplete:"off",onChange:function(e){return t=e.target.value,void a(t);var t}}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"btn-form",type:"submit",children:"Add student"})]})]})]})})}),b=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Added student"}),Object(d.jsxs)("p",{children:["Student ",Object(d.jsxs)("b",{children:["[",e.history.location.state,"]"]})," has been added"]}),Object(d.jsx)("a",{href:"http://localhost:3000/",children:"goBack"})]})},h=function(){return Object(d.jsx)(o.a,{children:Object(d.jsxs)("div",{className:"container-principal",children:[Object(d.jsx)(l,{}),Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(d.jsx)(r.a,{exact:!0,path:"/students/add",component:b})]})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),O()}},[[34,1,2]]]);
//# sourceMappingURL=main.3adbebd4.chunk.js.map