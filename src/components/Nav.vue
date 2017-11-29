<template>
  <ul class="nav" >
    <li @click="navMsg('饼干')">
      <router-link :to="{path:'/shop/biscuit',query:{id:'饼干'}}">
        <img src="../assets/img/bg_03.png" alt="">
        <p flex="main:center">饼干</p>
      </router-link>
    </li>
    <li @click="navMsg('面包')">
      <router-link to="/shop/bread">
        <img src="../assets/img/cd_03.png" alt="">
        <p flex="main:center">面包</p>
      </router-link>
    </li>
    <li @click="navMsg('茶点')">
      <router-link to="/shop/tea">
        <img src="../assets/img/dg_03.png" alt="">
        <p flex="main:center">茶点</p>
      </router-link>
    </li>
    <li @click="navMsg('点心')">
      <router-link to="/shop/pastry">
        <img src="../assets/img/mb_03.png" alt="">
        <p flex="main:center">点心</p>
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'nav',
    data () {
      return {
        msg: ''
      }
    },
    created: function() {
//      this.$root.id =id;
//      console.log(this.$root)
    },
    methods:{
      navMsg(data){
        this.$emit("listenNav",data)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  ul {
    background: #fff;
    padding: .8rem 0 .5rem;
  }

  li {
    padding: 0 .6rem;
  }


</style>
