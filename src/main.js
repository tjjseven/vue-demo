// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口文件
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
import store from './vuex/store'
Vue.use(Vuex);


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
  // alert("路由变化");


  // console.log(to.meta.keepAlive)
  if(to.meta.keepAlive===false){
    // document.querySelector("#content").scrollTop=0

  }
  next()
});

