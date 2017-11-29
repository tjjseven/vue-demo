<template>
  <div class="list">
    <p v-if="listData==='loading'">loading...</p>
    <div v-else class="list_item" v-for="(listItem, index) in this.$store.state.listData" :key="index">
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
    </div>

  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        listData: 'loading'
      }
    },
    mounted(){
      this.$ajax({
        method: 'get',
        url: 'http://mockjs',
      }).then(function(res){
//        console.log(res);
        this.listData = res.data.result;
        this.$store.state.listData = res.data.result
      }.bind(this))
        .catch(function(err){
        console.log(err)
      });
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
  .list_item>img{
    border-top-right-radius: .2rem;
    border-top-left-radius:.2rem ;
  }
  .list_item>p{
    margin: .5rem 0;
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
