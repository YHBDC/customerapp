import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import mylist from '@/components/List/List'

// const originalPush = Router.prototype.push

// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
Vue.use(Router)
export const routers=[
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/mylist',
      name: 'mylist',
      component: mylist
    }

  ]


export default new Router({
  mode: 'history',
  // base: '/screen/',
  scrollBehavior: () => ({ y: 0 }),
  routes: routers
})