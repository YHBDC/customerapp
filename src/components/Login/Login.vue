<template>
  <div id="form">
      <div>
          <label v-text="账号:">
              <input placeholder="请输入账号" v-model="username">
      </div>
    
        <div>
              <label v-text="密码:">
              <input placeholder="请输入密码"  v-model="password">
        </div>
        <div>
            <button @click="login" v-text="登录">
        </div>
  </div>
  
</template>

<script>
//import Vue from 'vue'
//import Component from 'vue-class-component'
//import routerHelper from '../../service/routerHelper';
export default {
  name: "login",
  data: function () {
    return {
      username: null,
      password: null,
    };
  },
  methods:{
      login:function(){
        debugger;
        
      }
  }
};
// @Component({
    
// })
// export default class login extends Vue{
//       login(){
//         debugger;
//         routerHelper.To('mylist');
//       }

// }
</script>

<style>
</style>