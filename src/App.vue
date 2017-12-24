<!--默认主页文件-->
<template>
  <div id="app" flex="dir:top">
    <!--<img src="./assets/logo.png">-->
    <Headers :headerC="headerC" @listenHeader="headerMsg"/>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <div class="content" id="content">
      <!--<keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们-->
      <!--<keep-alive>-->
        <!--<router-view @listenVue="vueMsg"/>-->
      <!--</keep-alive>-->

      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" @listenVue="vueMsg"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" @listenVue="vueMsg"></router-view>


    </div>

    <!--公共页脚-->
    <Foot @listenMsg="onMsg"/>

  </div>
</template>

<script>
import Headers from '@/components/Header'
import Foot from '@/components/Footer'
export default {
  name: 'app',
  components: {
    Headers,
    Foot
  },
  data(){
    return {
      headerC :"Vue"
    }
  },
  methods : {
    onMsg(data){
      this.headerC = data
    },
    vueMsg(data){
      this.headerC = data;
//      console.log(data)
    },
    headerMsg(data){
      this.headerC = data;
    }
  },
  created(){
//    console.log()
//    this.headerC = this.$root.id
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  font-size: .6rem;
}
body,html,#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
body{
  background:url('assets/img/1.jpg') no-repeat;
}
body,ul,ol,li,p,h1,h2,h3,h4{
  padding: 0;
  margin: 0;
  list-style-type: none;
}
h1, h2 {
  font-weight: normal;
}
img{
  width: 100%;
  display: block;
}
#app{
  min-height: 100vh;
}
.content{
  flex: 1;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
a{
  text-decoration: none;
  color: #42b983;
}
a.actClass{
  color:#ffa6a6;
}
/*author*/
.author_pic{
  width: 2rem;
  height: 2rem;
  border: 1px solid #ffa6a6;
  border-radius: 50%;
  margin-right: .5rem;
}
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
/*遮罩*/
.shade{
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.6);
  z-index: 998;
  transition: display .3s;
}
/*loading*/
@keyframes rotate-forever {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.spinner {
  margin: 1rem auto .5rem;
  -webkit-animation: rotate-forever 1s infinite linear;
  animation: rotate-forever 1s infinite linear;
  height: 30px;
  width: 30px;
  border: 4px solid #b6b6b6;
  border-right-color: transparent;
  border-radius: 50%;
}
</style>
