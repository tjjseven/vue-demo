import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  // 定义状态
  state: {
    author: 'A.Q.I',
    listData : '',
    listMount : true,
  }
});

export default store
