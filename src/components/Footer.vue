<template>
  <ul class="footer" flex="box:mean">
    <li @click="sendMsg(footMsg.findex)">
      <router-link to="/" flex="main:center cross:center">{{footMsg.findex}}</router-link>
    </li>
    <li @click="sendMsg(footMsg.fcircle)">
      <router-link to="/circle" flex="main:center cross:center">{{footMsg.fcircle}}</router-link>
    </li>
    <li @click="sendMsg(footMsg.fshop)">
      <router-link to="/shop" flex="main:center cross:center">{{footMsg.fshop}}</router-link>
    </li>
    <li @click="sendMsg(footMsg.fabout)">
      <router-link to="/about" flex="main:center cross:center">{{footMsg.fabout}}</router-link>
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
ul.footer>li>a{
  width: 100%;
  height:100%;
}

</style>
