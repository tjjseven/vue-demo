<template>
  <div class="circle">
    <ul>
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
    <div v-show="display==msg.news">new</div>
    <div v-show="display==msg.hot">hot</div>
    <div v-show="display==msg.care">care</div>
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
      display : "最新"
    }
  },
  methods:{
    changeDiv(arg){
      this.display=arg;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .circle{
    background: #fff;
  }
  li{
    height: 2.5rem;
    font-size: .7rem;
    border-bottom:1px solid #e6e6e6;
  }
</style>
