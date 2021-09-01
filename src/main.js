// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Index from  './components/Index'
import http from "./common/http.js"
//import login from './components/Login/Login'
//import mylist from  '@/components/List/List'

Vue.config.productionTip = false

Vue.prototype.request=http
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Index },
  template: '<Index/>'
})
