<template>
  <div id="app" >
    <input v-model="url" placeholder="请输入地址">
    <button @click="direction(url)">跳转</button>
  </div>
  
</template>

<script>
import router from 'vue-router';

debugger
export default {
     name: 'Index',
     data:function(){
      return {url:"www.baidu.com"} 
     },
     methods:{
         direction:function(a){
             this.$router.push('mylist');
         }
     }
     

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>