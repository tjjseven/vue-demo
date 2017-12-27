<template>
  <div class="commit">
    <div class="author" flex>
      <img class="author_pic" src="" alt="">
      <div class="author_left">
        <h2>{{commits.comAuthor}}</h2>
        <p>人喜欢，人关注</p>
      </div>
    </div>
    <p>说说你的心情</p>
    <textarea name="comTextarea" id="comTextarea" placeholder="请输入内容" v-model="commits.comContent"></textarea>
    <div class="pic">
      <input type="file" id="" value="上传图片">
    </div>
    <input type="submit" id="comSub" value="确定发布" @click="subCom">
  </div>
</template>

<script>
  import pubVue from '../../assets/js/pubVue'
  export default {
    name: 'Commit',
    data () {
      return {
        commits : {
          comAuthor : this.$store.state.user.username,
          comContent : '',
          comTime : '',
          comReply : "回复"
        }
      }
    },
    methods:{
      subCom(){
        /*向circle传递数据*/
//        方法一
        pubVue.$emit("commitInfo",this.commits.comContent);

        var date=new Date();
        var year=date.getFullYear();
        var month=date.getMonth()+1;
        var day=date.getDate();
        this.commits.comTime = year+"年"+month+"月"+day+"日";
//        方法二
        this.$store.commit('SAVE_COMMIT', this.commits);
        this.$router.replace({path:"/circle"})

      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
//       通过 `vm` 访问组件实例
        vm.$emit("listenVue","说说")
      })
    },
//    beforeRouteUpdate (to, from, next) {
//
//      console.log(vm)
//    },
//    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
//      console.log(this)
//    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .commit{
    background: #fff;
    padding: .6rem;
  }
  .commit>p{
    margin: 1rem 0 .5rem;
  }
  .author_left>p{
    margin-top: .2rem;
  }
  textarea{
    width: 100%;
    margin: 0 auto;
    resize: none;
    border-radius: .2rem;
    height: 3rem;
    border: 1px solid #ccc;
    padding: .5rem;
    outline: none;
    box-sizing: border-box;
  }
  input{
    display: block;
    width: 90%;
    background: #ffa6a6;
    padding: .5rem;
    border: none;
    border-radius: .2rem;
    margin: 5% auto;
    font-size: .7rem;
    color: #fff;
  }
</style>
