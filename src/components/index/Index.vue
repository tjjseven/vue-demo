<template>
  <div class="index">
    <Carousel/>
    <Navs @listenNav="indexMsg"/>
    <keep-alive include="List">
      <!--<component :is="currentView"></component>-->
      <List @listenList="indexMsg"/>
    </keep-alive>
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
