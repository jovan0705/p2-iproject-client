(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex",staticStyle:{height:"100vh",overflow:"hidden","background-image":"url(https://media.istockphoto.com/photos/white-texture-background-picture-id926993450?b=1&k=20&m=926993450&s=170667a&w=0&h=vxWViBkXgTQnSO4UTtU26hLlscn9FTKYS1Jx6f-_slI=)"}},[s("div",{staticClass:"col-6 d-flex flex-column justify-content-center align-items-center",staticStyle:{height:"100vh"}},[s("form",{staticClass:"d-flex flex-column justify-content-center align-items-center p-5",staticStyle:{border:"1px solid black","border-radius":"20px","background-color":"#2C2828",color:"#EEEEEE"},on:{submit:function(e){return e.preventDefault(),t.onLogin.apply(null,arguments)}}},[s("label",{staticClass:"mb-2",staticStyle:{"font-size":"40px"},attrs:{for:"email"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"mb-2 p-2",staticStyle:{width:"20vw","font-size":"20px"},attrs:{type:"email",id:"email",name:"email",placeholder:"Email here..."},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),s("label",{staticClass:"mb-2",staticStyle:{"font-size":"40px"},attrs:{for:"password"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"mb-4 p-2",staticStyle:{width:"20vw","font-size":"20px"},attrs:{type:"password",id:"password",name:"password",placeholder:"Password here..."},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("button",{staticClass:"btn btn-outline-light mb-3",staticStyle:{width:"20vw","font-size":"20px"},attrs:{type:"submit"}},[t._v("Sign In")]),s("h1",{staticClass:"h2 mb-3"},[t._v("Doesn't have account yet?")]),s("button",{staticClass:"btn btn-outline-light mb-3",staticStyle:{width:"20vw","font-size":"20px"},attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.toRegister.apply(null,arguments)}}},[t._v("Sign Up")])])]),t._m(0)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6",staticStyle:{height:"100vh"}},[s("img",{staticStyle:{height:"100vh",width:"50vw"},attrs:{src:"https://i.pinimg.com/originals/7e/55/11/7e551131bef5a7c79240789345013b3b.jpg"}})])}],o={name:"Login",data:function(){return{email:"",password:""}},created:function(){var t=this,e=this.$route.query.validate;e&&this.$store.dispatch("onValidate",e).then((function(){t.$router.push("/login")}))},methods:{onLogin:function(){var t=this,e={email:this.email,password:this.password};this.$store.dispatch("onLogin",e).then((function(){"customer"===localStorage.getItem("role")?t.$router.push("/customer"):"architect"===localStorage.getItem("role")&&t.$router.push("/architect")})).catch((function(t){console.log(t.response)}))},toRegister:function(){this.$router.push("/register")}}},n=o,l=s("2877"),r=Object(l["a"])(n,i,a,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d2086b7.4fe3ce28.js.map