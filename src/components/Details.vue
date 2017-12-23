<template>
  <div class="details">
    <div class="details_info">
      <img :src="dsDate[num].image" alt="">
      <div class="det_title">
        <h2>{{dsDate[num].constellation}}</h2>
        <p class="det_tag">{{dsDate[num].province}}</p>
        <p class="det_time">创建于{{dsDate[num].nowDate}}<span>原创</span></p>
        <div class="det_followMe" @click="followMe" :class="{'is_follow': !follow, 'no_follow': follow}">
          {{followMsg}}</div>
      </div>
      <div class="det_con">
        <img :src="dsDate[num].dataImage" alt="">
        <h3>{{dsDate[num].userName}}</h3>
        <p>{{dsDate[num].content}}</p>
      </div>
    </div>
    <ul class="details_classify">
      <li class="difficulty"><h3>难度</h3></li>
      <li class="classify_time"><h3>时间</h3></li>
      <li class="temperature"><h3>温度</h3></li>
      <li class="weight"><h3>分量</h3></li>
      <li class="ingredients"><h3>食材</h3></li>
    </ul>
    <div class="details_step"></div>
    <div class="details_commit"></div>
    <div class="details_other"></div>
    <div class="details_like"><p @click="saveCount"><span v-if="count">{{count}}</span>赞</p></div>

  </div>
</template>

<script>
  export default {
    name: 'details',
    data () {
      return {
        num : '',
        dsDate : this.$store.state.listData,
        count : '',
        follow : '',
        followMsg : ''
      }
    },
    props:[""],
    created(){
      this.num = this.$route.query.details;
      this.count = this.dsDate[this.num].count || ''*1;
//      console.log(this.dsDate[this.num].count)
      this.follow = this.dsDate[this.num].follow || false;

      this.followMsg = this.follow ? "取消关注" : "+ 我关注";
    },

    methods:{
      followMe(){
        this.follow = !this.follow;
        this.followMsg = this.follow ? "取消关注" : "+ 我关注";
        /*向数组index对象中添加新的属性，不能更新视图*/
        /*this.dsDate[this.num].follow = this.follow;*/
        /*使用$set可更新*/
        this.$set(this.dsDate[this.num],'follow',this.follow)
      },
      saveCount(){
        this.count += 1;
//        this.dsDate[this.num].count = this.count;
        this.$set(this.dsDate[this.num],'count',this.count)
      }
    },
    beforeRouteLeave(to, from, next){
      console.log("离开详情路由");
      setTimeout(function () {
        document.querySelector("#content").scrollTop=this.$store.state.posState;
        console.log(document.querySelector("#content").scrollTop+"设置位置");
      }.bind(this),0)
        next()
    }

  }

</script>

<style scoped lang="less">
  @size:1rem;
  .det_background{
    background: #fff;
  }
  .details{
    .det_background
  }
  .det_title{
    position: relative;
    .det_background;
    padding:.5rem 1rem;
    p{
      padding-top: .3rem;
    }
    span{
      padding-left: .2rem;
    }
    .det_followMe{
      position: absolute;
      top:1rem;
      right: 1rem;
      padding:.3rem;
      border-radius: .2rem;
    }
    .is_follow{
      border:1px solid #42b983;
      color: #42b983;
    }
    .no_follow{
      border:1px solid #ffa6a6;
      background: #ffa6a6;
      color: #fff;
    }
  }
  .det_con{
    background: #F3F3F3;
    padding:.1*@size 0;
    h3{
      text-align:center;
    }
    img{
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      margin: .5rem auto;
    }
    p{
      padding: @size;
      text-align: left;
    }
  }
  ul.details_classify{
  .det_background;
    display:block;
    li{
      border-bottom: 1px solid #e3e3e3;
      padding: 1rem;
    }
  }
  .details_like{
    width: 100%;
    text-align:center;
    line-height: 2rem;
    padding:1rem 0;
    span{
      margin-right:.5rem;
    }
    p{
      width: 5rem;
      height: 2rem;
      background: #e21313;
      display: inline-block;
      color: #fff;
      border-radius: 15rem;
    }
  }
</style>
