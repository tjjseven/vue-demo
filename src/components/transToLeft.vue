<template>
  <div>
    <div class="shade" @click="leftMsg(false)" :style="{display : isLeft ? 'block' : 'none'}"></div>
    <div class="trans_to_left" :style="{transform: isLeft ? 'translateX(0)' : 'translateX(100%)' }">
      <div class="sub_search" style="margin:1rem .5rem 0;">
        <input type="text" placeholder="请输入内容">
        <button type="submit" class="">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
        </button>
      </div>
      <ul class="sub_content">
        <li>搜索内容</li>
        <li>搜索内容</li>
        <li>搜索内容</li>
        <li>搜索内容</li>
        <li>搜索内容</li>
      </ul>
      <div v-is-left="isLeft"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'trans_to_left',
    data () {
      return {


      }
    },
    props:["isLeft"],
    directives : {
      'is-left' : function(el) {
        console.log(el)
      }
    },
    methods:{
      /*阻止事件冒泡*/
//      stopBubble(e){
//          if (e && e.stopPropagation)
//            e.stopPropagation();
//          else
//            window.event.cancelBubble=true
//
//      },
      leftMsg(data){
        this.$emit('listenLeft',data)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .trans_to_left{
    width:80%;
    height:100%;
    background: #f5f5f5;
    /*transform: translateX(100%);*/
    position: absolute;
    top:0;
    right: 0;
    z-index: 999;
    transition:all .2s ease;
  }
  input,button{
    height: 40px;
    line-height: 40px;
    border: 1px solid #ccc;
    float: left;
    outline: none;
    box-sizing: border-box;
  }
  input {
    width: 80%;
    border-right: none;
    padding-left: 5%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  button{
    width: 20%;
    border-left: none;
    background: #fff;
    position: static;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .sub_search{
    height: 40px;
  }
  .sub_content {
    margin-top: 1rem;
    border-top: 1px solid #e7e7e7;
    color: #000;
    padding: 0 1rem;
  }
  .sub_content>li{
    padding-top: 1rem;
  }
</style>
