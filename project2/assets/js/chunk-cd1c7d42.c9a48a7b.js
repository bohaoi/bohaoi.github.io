(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd1c7d42"],{"11b2":function(e,t,o){},7101:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{padding:"20px"}},[o("el-form",{attrs:{model:e.form,"label-width":"120"}},[o("el-form-item",{attrs:{label:"用户名"}},[o("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),o("el-form-item",{attrs:{label:"密码"}},[o("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),o("el-form-item",{attrs:{align:"center"}},[o("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")])],1)],1)],1)},n=[],a={data:function(){return{form:{username:"",password:""}}},methods:{login:function(){var e=this;this.$http.post("api/permission/getMenu",this.form).then((function(t){t=t.data,2e4===t.code?(e.$store.commit("clearMenu"),e.$store.commit("setMenu",t.data.menu),e.$store.commit("setToken",t.data.token),e.$store.commit("addMenu",e.$router),e.$router.push({name:"home"})):e.$message.warning(t.data.message)}))}}},s=a,i=(o("ecef"),o("2877")),m=Object(i["a"])(s,r,n,!1,null,"914d955c",null);t["default"]=m.exports},ecef:function(e,t,o){"use strict";var r=o("11b2"),n=o.n(r);n.a}}]);
//# sourceMappingURL=chunk-cd1c7d42.c9a48a7b.js.map