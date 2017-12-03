<template>
  <ul class="header" >
    <li v-if="headerC=='说说' || headerC=='饼干'|| headerC=='面包'|| headerC=='茶点'|| headerC=='点心'||headerC=='详情'"
        flex="main:center cross:center">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-disclosureindicator"></use>
      </svg>
      <a :style="{color:'#fff'}" @click="goBack">返回</a>
    </li>
    <li v-else flex="main:center cross:center">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-svg36"></use>
      </svg>
    </li>
    <li flex="main:center cross:center">{{headerC}}</li>
    <li v-if="headerC=='圈子'" flex="main:center cross:center" @click="commit">
      <router-link to="/circle/commit" :style="{color:'#fff'}">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-iconjia"></use>
        </svg>
      </router-link>
    </li>
    <li v-else flex="main:center cross:center" @click="changeHeaderC">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="headerR"></use>
      </svg>
      <transition name="expand">
        <ol v-if="!flag">
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shaixuan"></use>
            </svg>
            <span @click="isTop=!isTop">筛选</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-sousuo"></use>
            </svg>
            <span @click="isLeft=!isLeft">搜索</span>
          </li>
        </ol>
      </transition>
    </li>
    <TransToLeft :isLeft="isLeft" @listenLeft="getLeftMsg"/>
    <TransToTop :isTop="isTop" @listenTop="getTopMsg"/>
  </ul>
</template>

<script>
import TransToLeft from './transToLeft.vue'
import TransToTop from './transToTop.vue'
export default {
  name: 'Header',
  components:{
    TransToLeft,
    TransToTop
  },
  data () {
    return {
      headerL :"#icon-svg36",
      headerR:"#icon-zhankai",
      flag : true,
      isLeft : false,
      isTop : false
    }
  },
  props : ["headerC"],
  methods: {
    changeHeaderC(){
      if(this.flag){
        this.headerR = "#icon-zhedie";
        this.flag = false;
      }else {
        this.flag = true;
        this.headerR = "#icon-zhankai";
      }
    },
    commit(){
      this.headerL = "#icon-disclosureindicator";
      this.$emit("listenHeader","说说")
    },
    goBack(){
      console.log(this.headerC);
      this.$router.go(-1);

      this.$emit("listenHeader",this.oldHeaderC)

    },
    getLeftMsg(data){
      this.isLeft = data
    },
    getTopMsg(data){
      this.isTop = data
    },
  },
  created(){
    this.$watch('headerC', function(newVal, oldVal){
//      console.log("新值"+newVal+"，旧值"+oldVal);//这里再感受下值拿到了没
      this.oldHeaderC = oldVal
      this.newHeaderC = newVal
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    background: #ffa6a6;
    color: #fff;
    /*position: relative;*/
  }

  ul>li {
    flex: auto;
    height: 2rem;
  }
  ul>li:nth-child(2){
    flex: 10;
  }
  ol{
    position: absolute;
    top:2rem;
    right: 0;
    width: 4rem;
    z-index: 111;
    background: #fff;
    color: #000;
    border-radius: .3rem;
    height: 4rem;
  }
  ol>li{
    height: 2rem;
    line-height: 2rem;
    text-align: center;
  }
  ol>li:last-of-type{
    border-top: 1px solid #e9e9e9;
  }
  .expand-enter,.expand-leave-to{
    height: 0;
  }
  .expand-enter-active,.expand-leave-active{
    transition: all .2s ease;
    overflow: hidden;
  }
</style>
