//路由配置文件
import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index/Index'
import Circle from '@/components/circle/Circle'
import Shop from '@/components/shop/Shop'
import About from '@/components/about/About'
import GoodTypes from '@/components/shop/GoodTypes'
import Commit from '@/components/circle/Commit'
import Details from '@/components/Details'

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'actClass',
  routes: [
    {
      path: '/vue-demo',
      // redirect: '/vue-demo',
      name: 'Index',
      component: Index,
      meta: {
        keepAlive: true // 需要被缓存
      }
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
      //   }
      // ]
      meta: {
        keepAlive: true // 需要被缓存
      }
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
    {
      path: '/details',
      name: 'Details',
      component: Details,
      meta: {
        keepAlive: false // 不需要被缓存
      }
    },
    // { path:"*", redirect:"/home" }
  ]
})
