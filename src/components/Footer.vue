<template>
  <ul class="footer" >
    <li @click="sendMsg(footMsg.findex)" flex="main:center cross:center">
      <router-link to="/vue-demo">{{footMsg.findex}}</router-link>
    </li>
    <li @click="sendMsg(footMsg.fcircle)" flex="main:center cross:center">
      <router-link to="/circle">{{footMsg.fcircle}}</router-link>
    </li>
    <li @click="sendMsg(footMsg.fshop)" flex="main:center cross:center">
      <router-link to="/shop">{{footMsg.fshop}}</router-link>
    </li>
    <li @click="sendMsg(footMsg.fabout)" flex="main:center cross:center">
      <router-link to="/about">{{footMsg.fabout}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footMsg : {
        findex : '主页',
        fcircle : '圈子',
        fshop : '商店',
        fabout : '关于'
      }
    }
  },
  methods : {
    sendMsg(arg){
      this.$emit("listenMsg",arg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


ul {
  background: #f8f8f8;
}

li {
  height: 2rem;
}


</style>
