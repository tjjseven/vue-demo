<template>
  <ul class="footer" >
    <li flex="main:center cross:center"><router-link to="/vue-demo">主页</router-link></li>
    <li flex="main:center cross:center"><router-link to="/circle">圈子</router-link></li>
    <li flex="main:center cross:center"><router-link to="/shop">商店</router-link></li>
    <li flex="main:center cross:center"><router-link to="/about">关于</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


ul {
  display: flex;
  background: #f8f8f8;
}

li {
  flex: 1;
  height: 2rem;
  font-size: .6rem;
}

a {
  color: #42b983;
}
</style>
