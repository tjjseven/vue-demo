<template>
  <div class="details">
    <div class="details_info">
      <img :src="dsDate[num].image" alt="">
      <div class="det_title">
        <h2>{{dsDate[num].text}}</h2>
        <p class="det_tag">{{dsDate[num].age}}</p>
        <p class="det_time">创建于{{dsDate[num].date}}<span>原创</span></p>
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

  </div>
</template>

<script>
  export default {
    name: 'details',
    data () {
      return {
        num : '',
        dsDate : this.$store.state.listData
      }
    },
    props:[""],
    directives : {
      '' : function(value) {
      }
    },
    methods:{

    },
    created(){
      this.num = this.$route.query.details-1;
      console.log(this.num)
      console.log(this.dsDate)
    }

  }

</script>

<style scoped lang="less">
  @size:1rem;
  .det_title{
    background: #fff;
    padding:.5rem 1rem;
    p{
      padding-top: .3rem;
    }
    span{
      padding-left: .2rem;
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
    background: #fff;
    display:block;
    li{
      border-bottom: 1px solid #e3e3e3;
      padding: 1rem;
    }
  }
</style>
