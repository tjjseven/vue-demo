<template>
  <div class="list">
    <p v-if="!this.$store.state.listData">loading...</p>
    <div v-else @click="ListMsg(listDetails)" class="list_item" v-for="(listItem, index) in this.$store.state.listData" :key="index">
      <!--router-link中链接如果是‘/’开始就是从根路由开始，如果开始不带‘/’，则从当前路由开始-->
      <router-link :to="{path:'/details',query:{details:listItem.id}}" tag="div" class="routerDiv" >
        <img :src="listItem.image" alt="">
        <p flex="main:center">{{listItem.text}}</p>
        <div class="commitDiv" flex="corss:center">
          <img :src="listItem.image" alt="">
          <span>{{listItem.province}}</span>
        </div>
        <div class="commitLove">
          <i></i>
          <span>取消关注</span>
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
        listData: 'loading',
        listDetails : "详情"
      }
    },
    created(){

    },
    mounted(){
      console.log(this.$store.state.listMount);
      if(this.$store.state.listMount)
      this.$ajax({
        method: 'get',
        url: 'http://mockjs',
      }).then(function(res){
//        console.log(res);
        this.listData = res.data.result;
        this.$store.state.listData = res.data.result;
//        console.log(this.$store.state.listData)
      }.bind(this))
        .catch(function(err){
        console.log(err)
      });
      this.$store.state.listMount=false;
    },
    activated(){

    },
    methods:{
      ListMsg(data){
        this.$emit("listenList",data)
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
    padding:.2rem;
    border-top:1px solid #e4e4e4;
  }
  .commitLove>span{
    margin-left: 3rem;
  }
</style>
