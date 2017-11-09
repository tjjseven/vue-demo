<!--默认主页文件-->
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->

    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view />
    <!--公共页脚-->
    <Foot />

  </div>
</template>

<script>
import Foot from '@/components/Footer'
export default {
  name: 'app',
  components: {
    Foot
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
