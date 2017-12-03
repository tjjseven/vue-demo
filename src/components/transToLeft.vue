<template>
  <div>
    <div class="shade" @click="leftMsg(false)" :style="{display : isLeft ? 'block' : 'none'}"></div>
    <div class="trans_to_left" :style="{transform: isLeft ? 'translateX(0)' : 'translateX(100%)' }">
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
      'is-left' : function(value) {
//        console.log(value)
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

</style>
