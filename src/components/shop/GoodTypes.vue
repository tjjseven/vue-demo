<template>
  <div class="good_types">
    <Scroll/>
  </div>
</template>

<script>
  import Scroll from './Scroll'
  export default {
  name: 'good_types',
  data () {
    return {
      msg: '商店1'
    }
  },
  components:{
    Scroll
  },
  /*
  * beforecreated：el 和 data 并未初始化
   created:完成了 data 数据的初始化，el没有
   beforeMount：完成了 el 和 data 初始化
   mounted ：完成挂载
  * */
  created: function() {
    var id = this.$route.query.id;
    console.log("query:"+id)
    var pa = this.$route.params;
    console.log("params:",pa)
    this.msg = this.$store.state.author
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.good_types{
  height: 100%;
  width: 100%;
}
</style>
