import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  // 定义状态
  state: {
    author: 'A.Q.I',
    listData : '',
    listAjax : true,
    posState : ''
  },
  mutations: {
    SAVE_POSITION (state, payload) {
      state.posState = payload
    },
    SAVE_LISTDATA(state ,payload){
      state.listData = payload
    }
  }
});

export default store
