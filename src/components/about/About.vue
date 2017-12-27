<template>
  <div class="about">
    <div class="about_tie" flex>
      <img class="author_pic" src="" alt="123">
      <div class="about_author">
        <h2>{{this.$store.state.user.username}}</h2>
        <p>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dianzan"></use>
          </svg>
          <span>25</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xihuan"></use>
          </svg>
          <span>25</span>
        </p>
        <p>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huiyuan"></use>
          </svg>
          <span>开通会员</span>
        </p>
      </div>
      <p>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-comment-pen"></use>
        </svg>
        <span>签到处</span>
      </p>
    </div>
    <ul flex="box:mean">
      <li flex="main:center cross:center">关注(7)</li>
      <li flex="main:center cross:center">粉丝(7)</li>
      <li flex="main:center cross:center">收藏(7)</li>
    </ul>
    <div class="about_list" v-for="about in aboutList">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="about.aboutIcon"></use>
      </svg>
      <span>{{about.aboutName}}</span>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-you1"></use>
      </svg>
    </div>
    <p flex="main:center" class="logout" @click="logOut">退出</p>
  </div>
</template>

<script>
  import {USER_LOGOUT} from '../../vuex/store'
  export default {
  name: 'About',
  data () {
    return {
      aboutList : [
        {aboutIcon:"#icon-dingdan",aboutName:"我的订单"},
        {aboutIcon:"#icon-gouwuche",aboutName:"购物车"},
        {aboutIcon:"#icon-7",aboutName:"收货地址"},
        {aboutIcon:"#icon-activity",aboutName:"我的活动"},
        {aboutIcon:"#icon-huiyuan",aboutName:"会员俱乐部"},
        {aboutIcon:"#icon-settings",aboutName:"设置"},
      ]
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
//       通过 `vm` 访问组件实例
      vm.$emit("listenVue","关于")
    })
  },
  methods:{
    logOut(){
      this.$store.dispatch(USER_LOGOUT);
      this.$router.replace({path : "/login"})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about_tie,.about_list,ul,.logout{
    background: #fff;
    margin-bottom: .7rem;
  }
  .about_author{
    flex: 1;
  }
  .about_author p{
    margin-top: .5rem;
  }
  .about_author span{
    margin-right: 1rem;
  }
  .about_list,.about_tie,.logout{
    padding: .6rem;
  }
  .about_list>span{
    display: inline-block;
    width: 80%;
    padding-left: .5rem;
  }
  ul{
    height: 2rem;
  }
  li:nth-child(2){
    border-left:1px solid #e7e7e7;
    border-right:1px solid #e7e7e7;
  }
  /*img未指定src时，不显示img标签的边框*/
  img[src=""],img:not([src]){opacity:0;}
</style>
