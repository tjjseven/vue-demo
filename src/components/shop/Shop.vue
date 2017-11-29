<template>
  <div class="shop">
    <Navs @listenNav="indexMsg"/>
    <List/>
  </div>
</template>

<script>
import Navs from '../Nav'
import List from '../List'
export default {
  name: 'Shop',
  components : {
    Navs,
    List
  },
  data () {
    return {
      msg: '商店'
    }
  },
  methods :{
    indexMsg(data){
      this.$emit("listenVue",data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
