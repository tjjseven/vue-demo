import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

/*使用常量替代 Mutation 事件类型*/
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

const store = new Vuex.Store({
  // 定义状态
  state: {
    author: 'A.Q.I',//作者
    listData : '',//index列表信息
    listAjax : true,//判断是否发送ajax
    posState : '',//位置信息
    user: JSON.parse(sessionStorage.getItem('user')) || {},//用户信息
    commitList : [],//评论列表信息
    headerFlag : false,
    headerRI : '#icon-zhankai'
  },
  /*mutations更改state并保存到state*/
  mutations: {
    /*保存位置*/
    SAVE_POSITION (state, position) {
      state.posState = position
    },
    /*保存数据*/
    SAVE_LISTDATA(state ,listData){
      state.listData = listData
    },
    SAVE_COMMIT(state,commitList ){
      state.commitList.unshift(commitList)
    },
    /*登录*/
    // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [USER_LOGIN](state,user){
      sessionStorage.setItem('user',JSON.stringify(user));
      /*深度复制对象，保存user信息到state*/
      Object.assign(state.user, user)
    },
    /*登出*/
    [USER_LOGOUT](state){
      sessionStorage.removeItem('user');
      /*删除user*/
      Object.keys(state.user).forEach(k => Vue.delete(state.user, k))
    },
  },
  /*actions实际上是提交mutation,可异步*/
  actions:{
    /*登录*/
    [USER_LOGIN]({commit}, user){
      commit(USER_LOGIN, user)
    },
    /*登出*/
    [USER_LOGOUT]({commit}){
      commit(USER_LOGOUT)
    }
  }

});

export default store
