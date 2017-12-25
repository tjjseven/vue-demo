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
import Login from '@/components/Login'

Vue.use(Router);

export default new Router({
  // mode: 'history',//HBuilder打包app不能使用
  linkActiveClass: 'actClass',
  saveScrollPosition: true,
  routes: [
    {
      // path: '/vue-demo',
      path:'/',
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
      component: Circle,
      meta: {
        auth: false // 不需要登录
      }
    },
    {
      path:'/circle/commit',
      name:'Commit',
      component:Commit,
      meta: {
        auth: true // 需要登录
      }
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
        keepAlive: true, // 需要被缓存
        auth: false // 不需要登录
      }
    },
    {
      path: '/shop/:id',
      name:'GoodTypes',
      component: GoodTypes,
      meta: {
        auth: false // 不需要登录
      },
      props: (route) => ({ query: route.query.id })
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        keepAlive: false, // 不需要被缓存
        auth: true // 需要登录
      }
    },
    {
      path: '/details',
      name: 'Details',
      component: Details,
      meta: {
        keepAlive: false, // 不需要被缓存
        auth: false // 不需要登录
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    { path:"*", redirect:"/login" }
  ],
  scrollBehavior (to, from, savedPosition) {
    // console.log(to)
    if (!savedPosition){
      document.querySelector("#content").scrollTop=0;
      // console.log("无值"+savedPosition)
    }else{
      // console.log("返回有值")
    }

    // if (savedPosition) {
    //   return savedPosition
    //
    // } else {
    //   return { x: 0, y: 0 }
    // }
  //作为单页面来说并没有发生页面切换，所以scroll的位置是不变的

  }
})

