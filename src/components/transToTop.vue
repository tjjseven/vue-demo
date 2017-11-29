<template>
  <div>
    <div class="shade" @click="topMsg(false)" :style="{display : isTop ? 'block' : 'none'}"></div>
    <div class="trans_to_top" :style="{transform: isTop ? 'translateY(0)' : 'translateY(100%)' }">
      <p>浏览"购买原料"的教程</p>
      <p>浏览"购买成品"的教程</p>
      <p>"购买原料"和"购买成品"的教程</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'trans_to_top',
    data () {
      return {


      }
    },
    props:["isTop"],
    methods : {
      topMsg(data){
        this.$emit('listenTop',data)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .trans_to_top{
    width:100%;
    background: #f5f5f5;
    transform: translateY(100%);
    position: absolute;
    left: 0;
    bottom:0;
    z-index: 999;
    transition:all .2s ease;
  }
  .trans_to_top>p{
    padding: .5rem;
    margin: .5rem;
    color: #000;
    background: #ffa6a6;
    text-align: center;
    border-radius: .2rem;
  }
</style>
