(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6d35"],{"73cf":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex",staticStyle:{height:"100vh",overflow:"hidden background-image: url(https://media.istockphoto.com/photos/white-texture-background-picture-id926993450?b=1&k=20&m=926993450&s=170667a&w=0&h=vxWViBkXgTQnSO4UTtU26hLlscn9FTKYS1Jx6f-_slI=)"}},[t._m(0),s("div",{staticClass:"col-6 d-flex flex-column justify-content-center align-items-center",staticStyle:{height:"100vh"}},[s("form",{staticClass:"d-flex flex-column justify-content-center align-items-center p-5",staticStyle:{border:"1px solid black","border-radius":"20px","background-color":"#2C2828",color:"#EEEEEE"},on:{submit:function(e){return e.preventDefault(),t.onRegister.apply(null,arguments)}}},[s("label",{staticClass:"mb-2",staticStyle:{"font-size":"40px"},attrs:{for:"email"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"mb-2 p-2",staticStyle:{width:"20vw","font-size":"20px"},attrs:{type:"email",id:"email",name:"email",placeholder:"Email here..."},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),s("label",{staticClass:"mb-2",staticStyle:{"font-size":"40px"},attrs:{for:"password"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"mb-2 p-2",staticStyle:{width:"20vw","font-size":"20px"},attrs:{type:"password",id:"password",name:"password",placeholder:"Password here..."},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("label",{staticClass:"mb-2",staticStyle:{"font-size":"40px"},attrs:{for:"Role"}},[t._v("Role")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.role,expression:"role"}],staticClass:"form-select mb-4 p-2",staticStyle:{width:"20vw","font-size":"20px"},attrs:{id:"Role"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.role=e.target.multiple?s:s[0]}}},[s("option",{attrs:{selected:""}},[t._v("Open this select menu")]),s("option",{attrs:{value:"customer"}},[t._v("Customer")]),s("option",{attrs:{value:"architect"}},[t._v("Architects")])]),s("button",{staticClass:"btn btn-outline-light mb-3",staticStyle:{width:"20vw","font-size":"20px"},attrs:{type:"submit"}},[t._v("Sign Up")]),s("h1",{staticClass:"h2 mb-3"},[t._v("Already have account?")]),s("button",{staticClass:"btn btn-outline-light mb-3",staticStyle:{width:"20vw","font-size":"20px"},attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.toLogin.apply(null,arguments)}}},[t._v("Sign In")])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6 p-0",staticStyle:{height:"100vh"}},[s("img",{staticStyle:{height:"100vh",width:"50vw"},attrs:{src:"https://www.arkitecture.org/wp-content/uploads/2018/07/Hi-resolusion-pic-of-Harbin-Opera-House-by-MAD-Architects-of-Harbin-in-China-02.jpg"}})])}],o={name:"Register",data:function(){return{email:"",password:"",role:""}},methods:{onRegister:function(){var t=this,e={email:this.email,password:this.password,role:this.role};this.$store.dispatch("onRegister",e).then((function(){t.$router.push({path:"/login"})}))},toLogin:function(){this.$router.push("/login")}}},l=o,n=s("2877"),r=Object(n["a"])(l,i,a,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0d6d35.63ee6ef0.js.map