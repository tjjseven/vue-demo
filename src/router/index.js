//路由配置文件
import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index/Index'
import Circle from '@/components/circle/Circle'
import Shop from '@/components/shop/Shop'
import About from '@/components/about/About'
import GoodTypes from '@/components/shop/GoodTypes'
import Commit from '@/components/circle/Commit'

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'actClass',
  routes: [
    {
      path: '/vue-demo',
      // redirect: '/vue-demo',
      name: 'Index',
      component: Index
    },
    {
      path: '/circle',
      name: 'Circle',
      component: Circle
    },
    {
      path:'/circle/commit',
      name:'Commit',
      component:Commit
    },
    {
      path: '/shop',
      name:'Shop',
      component: Shop,
      // children: [
      //   {
      //     path: 'biscuit',
      //     component: GoodTypes
      //   },
      //   {
      //     path: 'bread',
      //     component: GoodTypes
      //   },
      //   {
      //     path: 'tea',
      //     component: GoodTypes
      //   },
      //   {
      //     path: 'pastry',
      //     component: GoodTypes
      //   },
      // ]
    },
    {
      path: '/shop/:id',
      name:'GoodTypes',
      component: GoodTypes,
      props: (route) => ({ query: route.query.id })
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    // { path:"*", redirect:"/home" }
  ]
})
