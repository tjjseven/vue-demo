// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口文件
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
import store from './vuex/store'
Vue.use(Vuex);

//引入自定义js过滤方法文件
// var myFilter = require('./assets/js/filter.js')
import myFilter from './assets/js/filter.js'
//注册全局
Vue.prototype.myFilter = myFilter;

import '../static/mock/mock.js';
import 'flex.css';

import axios from 'axios';
Vue.prototype.$ajax = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  watch:{
    '$route':function(to,from){
        // console.log("路由变化")
    }
  }
});
router.beforeEach((to, from, next) => {
  if(store.state.headerFlag){
    store.state.headerFlag = false;
  }
  if(store.state.headerRI==='#icon-zhedie'){
    store.state.headerRI='#icon-zhankai'
  }
  var auth = to.meta.auth;//标记是否需要登录
  var isLogin = Boolean(store.state.user.username); //true用户已登录， false用户未登录
  if (auth && !isLogin && to.path !== '/login') {
    return next({
      path: '/login',
      query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    })

  }
  next()
});

