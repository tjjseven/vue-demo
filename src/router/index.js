//路由配置文件
import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index/Index'
import Circle from '@/components/circle/Circle'
import Shop from '@/components/shop/Shop'
import About from '@/components/about/About'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/vue-demo',
      name: 'Index',
      component: Index
    },
    {
      path: '/circle',
      name: 'Circle',
      component: Circle
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
