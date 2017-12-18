<template>
  <div class="about">
    <div class="about_tie">
      <img src="" alt="">
      <div>
        <p>签到</p>
      </div>
    </div>
    <ul>
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

  </div>
</template>

<script>
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
        {aboutIcon:"#icon-settings",aboutName:"设置"},
        {aboutIcon:"#icon-settings",aboutName:"设置"},
        {aboutIcon:"#icon-settings",aboutName:"设置"},
        {aboutIcon:"#icon-settings",aboutName:"设置"},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about_tie,.about_list,ul{
    background: #fff;
    margin-bottom: .7rem;
  }
  .about_list{
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
</style>
