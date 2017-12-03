<template>
  <div class="shop">
    <Navs @listenNav="indexMsg"/>
    <!--<List/>-->
    <keep-alive include="List">
      <component :is="currentView" @listenList="indexMsg"></component>
    </keep-alive>
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
      msg: '商店',
      currentView: 'List'
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
