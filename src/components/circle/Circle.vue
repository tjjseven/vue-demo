<template>
  <div class="circle">
    <ul class="circle_ul" flex="box:mean">
      <li @click="changeDiv(msg.news)" flex="main:center cross:center"
      :style="{color : display==msg.news ? '#ffa6a6' : '#000',
      borderBottomColor : display==msg.news ? '#ffa6a6' : '#e6e6e6'}">
        {{msg.news}}
      </li>
      <li @click="changeDiv(msg.hot)" flex="main:center cross:center"
      :style="{color : display==msg.hot ? '#ffa6a6' : '#000',
      borderBottomColor : display==msg.hot ? '#ffa6a6' : '#e6e6e6'}">
        {{msg.hot}}
      </li>
      <li @click="changeDiv(msg.care)" flex="main:center cross:center"
      :style="{color : display==msg.care ? '#ffa6a6' : '#000',
      borderBottomColor : display==msg.care ? '#ffa6a6' : '#e6e6e6'}">
        {{msg.care}}</li>
    </ul>
    <div v-show="display==msg.news" class="news_div">
      <p v-if="newCommit" flex="main:center">没有最新...</p>
      <ul class="commit_list">
        <li>
          <div flex class="com_top">
            <img class="author_pic" src="" alt="">
            <div class="com_author">
              <h2>木子李</h2>
              <p>1991</p>
            </div>
            <div class="con_about">
              <p>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dianzan"></use>
                </svg>
                <span>点赞</span>
              </p>
              <p>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-comment-pen"></use>
                </svg>
                <span>评论</span>
              </p>
            </div>
          </div>
          <div class="com_btm">
            <p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p>
            <div class="com_btm_reply">
              <div class="three_title"></div>
              <p>我是回复</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="display==msg.hot" class="hot_div">
      <p v-if="!countFlag" flex="main:center">没有喜欢...</p>
      <ul v-else class="hot_ul">
        <li v-for="(loveList, index) in orderList" :key="index" flex>
          <img :src="loveList.image" alt="">
          <div class="hot_right">
            <p>{{loveList.constellation}}</p>
            <p>{{loveList.province}}</p>
            <span>{{loveList.count}}人觉得很赞</span>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="display==msg.care" class="care_div">
      <p v-if="!followFlag" flex="main:center">没有关注...</p>
      <ul v-else class="care_ul">
        <li v-for="(followList, index) in followList" :key="index" flex>
          <img :src="followList.image" alt="">
          <div class="care_right">
            <p>{{followList.constellation}}</p>
            <span>{{followList.province}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Circle',
  data () {
    return {
      msg: {
        news: "最新",
        hot: "热门",
        care: "关注"
      },
      display : "最新",
      circleData : this.$store.state.listData,
      newCommit : ''
    }
  },
  computed:{
    followList(){
      return this.circleData.filter(function (item) {
        return item.follow
      })
    },
    loveList(){
      return this.circleData.filter(function (item) {
        return item.count
      })
    },
    orderList(){
        return this.myFilter.orderBy(this.loveList, 'count',-1 )
    },
    countFlag() {
      for (var i = 0; i < this.circleData.length; i++) {
        if (this.circleData[i].count) {
          return true
        } else {
          return false
        }
      }
    },
    followFlag(){
      for (var i = 0; i < this.circleData.length; i++) {
        if (this.circleData[i].follow) {
          return true
        } else {
          return false
        }
      }
    }
  },
  methods:{
    changeDiv(arg){
      this.display=arg;
    }
  },
  directives : {


  },
  mounted(){
//    console.log(this.$route);

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .circle{
    background: #fff;
  }
  .circle_ul>li{
    height: 2.5rem;
    font-size: .7rem;
    border-bottom:1px solid #e6e6e6;
  }
  ul.care_ul>li,ul.hot_ul>li{
    padding: .5rem .5rem;
    border-bottom: 1px solid #e4e4e4;
  }
  ul.care_ul>li>img,ul.hot_ul>li>img{
    margin-right: .2rem;
    width: 20%;
    height: 20%;
  }
  .hot_right{
    position: relative;
    flex: 1;
  }
  .hot_right>span{
    position: absolute;
    top:.3rem;
    right: 1rem;
    color: #ffa6a6;
  }
  .hot_div>p,.care_div>p,.news_div>p{
    padding: 1rem;
  }
  .commit_list{
    padding:.5rem ;
  }
  .com_author{
    flex: 1;
  }
  .com_author>p{
    margin-top: .2rem;
  }
  .con_about>p{
    padding-right: .5rem;
    display: inline-block;
  }
  .com_btm{
    margin: .8rem 0 0 2.5rem;
  }
  .com_btm_reply{
    background-color: #e7e7e7;
    border-radius: .2rem;
    padding: 3%;
    position: relative;
    margin-top: .5rem;
  }
  .three_title{
    position: absolute;
    top: -.9rem;
    left: 1rem;
    width: 0;
    height: 0;
    border-top: .5rem solid transparent;
    border-right: .5rem solid transparent;
    border-bottom: .5rem solid #e7e7e7;
    border-left: .5rem solid transparent;
  }
</style>
