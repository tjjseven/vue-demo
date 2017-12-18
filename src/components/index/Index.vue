<template>
  <div class="index">
    <Carousel/>
    <Navs @listenNav="indexMsg"/>
    <!--单个组件加载两次缓存好像不行-->
    <!--<keep-alive include="List">-->
      <!--<component :is="currentView" @listenList="indexMsg"></component>-->
      <List @listenList="indexMsg"/>
    <!--</keep-alive>-->
  </div>
</template>

<script>
import Carousel from './Carousel';
import Navs from '../Nav'
import List from '../List'
export default {
  name: 'index',
  components : {
    Carousel,
    Navs,
    List
  },
  data () {
    return {
//      currentView: 'List'
    }
  },
  methods :{
    indexMsg(data){
      this.$emit("listenVue",data)
    }
  },
  beforeRouteLeave(to, from, next){
    console.log(history.state)
    console.log("离开index路由");
    let position = document.querySelector("#content").scrollTop;
    this.$store.commit('SAVE_POSITION', position); //离开路由时把位置存起来
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
