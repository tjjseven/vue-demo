<!--默认主页文件-->
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->

    <!-- 路由匹配到的组件将渲染在这里 -->
    <div class="content">
       <router-view />
    </div>

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

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body,ul,li{
  padding: 0;
  margin: 0;
  list-style-type: none;
}
#app{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.content{
  flex: 1;
}
a{
  text-decoration: none;
}
</style>
