<template>
  <div class="list">
    <div v-if="!this.$store.state.listData" :style="{textAlign:'center',width:'100%'}">
      <div class="spinner"></div>
      <span :style="{color:'#fff'}">loading...</span>
    </div>
    <div v-else @click="ListMsg(listDetails)" class="list_item" v-for="(listItem, index) in this.$store.state.listData" :key="index">
      <!--router-link中链接如果是‘/’开始就是从根路由开始，如果开始不带‘/’，则从当前路由开始-->
      <router-link :to="{path:'/details',query:{details:listItem.id}}" tag="div" class="routerDiv" >
        <img :src="listItem.image" alt="">
        <p flex="main:center">{{listItem.constellation}}</p>
        <div class="commitDiv" flex="corss:center">
          <img :src="listItem.image" alt="">
          <span>{{listItem.province}}</span>
        </div>
        <div class="commitLove">
            <svg class="icon" aria-hidden="true" :style="{color:listItem.follow  ? '#ffa6a6' : '#000'}">
              <use xlink:href="#icon-xihuan"></use>
            </svg>
          <span v-if="listItem.follow" :style="{color:'#ffa6a6'}">已关注</span>
          <span v-else>未关注</span>
        </div>
      </router-link>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'List',
    data () {
      return {
        listDetails : "详情",
      }
    },
//    created(){
//
//    },
    mounted(){
      console.log("mounted");
      /*keep-alive下 如果list组件只加载一次，无需if*/
      if(this.$store.state.listAjax)
      this.$ajax({
        method: 'get',
        url: 'http://mockjs',
      }).then(function(res){
//        this.$store.state.listData = res.data.result;
//        console.log(this.$store.state.listData)
        this.$store.commit('SAVE_LISTDATA', res.data.result);
      }.bind(this))
        .catch(function(err){
          console.log(err)
        });
      this.$store.state.listAjax=false;

    },
    /*keep-alive组件激活*/
    activated(){
      console.log("activated");
    },
    methods:{
      ListMsg(data){
        this.$emit("listenList",data);
      }
    },
    computed:{
      followState(){
        console.log("计算属性");
//        此处如何获取当前index？？
//        var follow = this.$store.state.listData[this.$store.state.listData.id].follow

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .list{
    display: flex;
    width: 88%;
    flex-wrap:wrap;
    justify-content: space-between;
    margin: 0 auto;
  }
  .list_item{
    width: 46%;
    margin-top:1rem;
    background: #fff;
    border-radius:.25rem;
  }
  .list_item>.routerDiv>img,.routerDiv{
    border-top-right-radius: .25rem;
    border-top-left-radius:.25rem ;
  }
  .routerDiv>p{
    margin: .3rem 0;
  }
  .commitDiv{
    padding-left: .3rem;
    line-height: 1.1rem;
    padding-bottom: .2rem;
  }
  .commitDiv>img{
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    display: inline-block;
  }
  .commitDiv>span{
    margin-left: .3rem;
  }
  .commitLove{
    padding:.2rem 1rem;
    border-top:1px solid #e4e4e4;
  }
  .commitLove>span{
    margin-left: 1rem;
  }
</style>
