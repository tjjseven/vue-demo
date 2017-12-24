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
      component: About,
      meta: {
        keepAlive: false, // 不需要被缓存
        auth: false
      }
    },
    {
      path: '/details',
      name: 'Details',
      component: Details,
      meta: {
        keepAlive: false // 不需要被缓存
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
      // document.querySelector("#content").scrollTop=this.$store.state.posState;
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

