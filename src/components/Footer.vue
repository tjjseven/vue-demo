<template>
  <div class="footer">
    <router-link to="/">主页</router-link>
    <router-link to="/circle">圈子</router-link>
    <router-link to="/shop">商店</router-link>
    <router-link to="/about">关于</router-link>
  </div>
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
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
