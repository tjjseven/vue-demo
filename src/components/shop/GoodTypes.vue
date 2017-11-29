<template>
  <div class="good_types">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: 'good_types',
  data () {
    return {
      msg: '商店'
    }
  },
  /*
  * beforecreated：el 和 data 并未初始化
   created:完成了 data 数据的初始化，el没有
   beforeMount：完成了 el 和 data 初始化
   mounted ：完成挂载
  * */
  created: function() {
    var id = this.$route.query.id;
//    console.log(id)
    this.msg = this.$store.state.author
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
