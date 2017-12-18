<template>
  <div class="shop">
    <Navs @listenNav="indexMsg"/>
    <!--<List @listenList="indexMsg"/>-->
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
  },
  beforeRouteLeave(to, from, next){
    console.log("离开shop路由");
    let position = document.querySelector("#content").scrollTop;
    this.$store.commit('SAVE_POSITION', position); //离开路由时把位置存起来
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
