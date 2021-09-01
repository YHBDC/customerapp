import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import mylist from '@/components/List/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: [HelloWorld,Index,mylist]
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      name: 'list',
      component: mylist
    }

  ]
})
