<template>
  <div class="login">
    <div class="user_name">
      <div class="input_div">
        <svg class="icon user_icon" aria-hidden="true">
          <use xlink:href="#icon-xingmingyonghumingnicheng"></use>
        </svg>
        <input type="text" placeholder="用户名" v-model="user.username">
      </div>
    </div>
    <div class="user_password">
      <div class="input_div">
        <svg class="icon user_icon" aria-hidden="true">
          <use xlink:href="#icon-mima"></use>
        </svg>
        <input type="password" placeholder="密码" v-model="user.password">
      </div>
    </div>
    <input type="submit" id="sub" value="登录" @click="subData">
  </div>
</template>

<script>
  import {USER_LOGIN} from '../vuex/store'
  export default {
    name: 'Login',
    data () {
      return {
        user : {
          username : '',
          password : ''
        }

      }
    },
    methods:{
      subData(){
        this.$store.dispatch(USER_LOGIN,this.user);
        /*跳转到登录之前的页面*/
        this.$router.replace({ path: this.$route.query.redirect })
      }
    },
    computed:{
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
//       通过 `vm` 访问组件实例
        vm.$emit("listenVue","登录")
      })
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    width: 100%;
    background: #fff;
    min-height: 100%;
  }
  .user_name,.user_password{
    position: relative;
    margin:0 auto;
    width: 70%;
    height: 2rem;
    color: #999;
  }
  .user_name{
    padding-top:5rem ;
  }
  .user_password{
    padding-top: 1rem;
  }
  .input_div{
    margin:0 auto;
    width: 98%;
    height: 90%;
    border:1px solid #999;
    border-top: none;
  }
  .user_icon{
    position: absolute;
    width: 1rem;
    height: 1rem;
    z-index: 99;
    left: .5rem;
    bottom: .8rem;
  }
  input{
    position: absolute;
    left: 0;
    width: 100%;
    height:1.5rem;
    text-indent: 2.5em;
    border: none;
    outline: none;
    padding: 0;
    font-size: .9rem;
    color: #999;
  }
  input::-webkit-input-placeholder{
    color: #999;
  }
  input#sub{
    text-indent: 0;
    width: 70%;
    margin: 2rem auto 0;
    position: static;
    display: block;
    background: #ffa6a6;
    color: #fff;
    height: 2rem;
    border-radius: .2rem;
  }
</style>
