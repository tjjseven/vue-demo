<template>
  <!--滑动区域-->
  <div id="mescroll" class="mescroll">
    <!--您的项目如果是在微信,QQ,Safari等等iOS浏览器访问的,则需再嵌套<div class="mescroll-bounce"><div>,可解决列表顶部下拉和底部上拉露出浏览器灰色背景和卡顿2秒的问题,可避免数据不满屏下拉刷新dom元素可能不渲染的问题-->
    <div class="mescroll-bounce">
      <!--展示上拉加载的数据列表-->
      <ul id="dataList" class="data-list">
        <li v-for="pd in pdlist" flex>
          <img :src="pd.dataImage" alt="">
           <div class="dataList_right">
             <p>{{pd.longText}}</p>
             <span>{{pd.province+pd.email}}</span>
           </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script >
  import 'mescroll.js/mescroll.min.css'
  import MeScroll from 'mescroll.js'
export default{
  name : "scroll",
  data(){
    return {
      mescroll: null,
      pdlist: []
    }
  },
  mounted() {
    //创建MeScroll对象,down可以不用配置,因为内部已默认开启下拉刷新,重置列表数据为第一页
    //解析: 下拉回调默认调用mescroll.resetUpScroll(); 而resetUpScroll会将page.num=1,再执行up.callback,从而实现刷新列表数据为第一页;
    var self = this;
    self.mescroll = new MeScroll("mescroll", {
      up: {
        callback: self.upCallback, //上拉回调,设置mescroll父元素高度，不然上拉不正常
        //以下参数可删除,不配置
        //page:{size:8}, //可配置每页8条数据,默认10
        toTop:{ //配置回到顶部按钮
          src : "dist/static/img/totop.jpg", //默认滚动到1000px显示,可配置offset修改
          //offset : 1000
        },
        empty:{ //配置列表无任何数据的提示
          warpId:"dataList",
          icon : "../res/img/mescroll-empty.png" ,
//						  	tip : "亲,暂无相关数据哦~" ,
//						  	btntext : "去逛逛 >" ,
//						  	btnClick : function() {
//						  		alert("点击了去逛逛按钮");
//						  	}
        }
      }
    });

    //初始化vue后,显示vue模板布局
    document.getElementById("dataList").style.display="block";
  },
  methods: {
    //上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback(page) {
      //联网加载数据
      var self = this;
      console.log(self)
      getListDataFromNet(page.num, page.size, function(curPageData) {
//        curPageData=[]; //打开本行注释,可演示列表无任何数据empty的配置

        //如果是第一页需手动制空列表
        if(page.num == 1) self.pdlist = [];

        //更新列表数据
        self.pdlist = self.pdlist.concat(curPageData);
        console.log(self.pdlist)
        //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
        //mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
        console.log("page.num="+page.num+", page.size="+page.size+", curPageData.length="+curPageData.length+", self.pdlist.length==" + self.pdlist.length);

        //方法一(推荐): 后台接口有返回列表的总页数 totalPage
        //self.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)

        //方法二(推荐): 后台接口有返回列表的总数据量 totalSize
//        self.mescroll.endBySize(curPageData.length, 20); //必传参数(当前页的数据个数, 总数据量)

        //方法三(推荐): 您有其他方式知道是否有下一页 hasNext
        self.mescroll.endSuccess(curPageData.length, true); //必传参数(当前页的数据个数, 是否有下一页true/false)

        //方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.
//        self.mescroll.endSuccess(curPageData.length);

      }, function() {
        //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
        self.mescroll.endErr();
      });
      function getListDataFromNet(pageNum,pageSize,successCallback,errorCallback) {
        //延时一秒,模拟联网
//    setTimeout(function () {
        self.$ajax.get("http://mockjs", {
//          params: {
//            num: pageNum, //页码
//            size: pageSize //每页长度
//          }
          })
          .then(function(response) {
            var data=response.data.result; // 模拟数据: ../res/pdlist1.js
            var listData=[];//模拟分页数据
            for (var i = (pageNum-1)*pageSize; i < pageNum*pageSize; i++) {
              if(i==data.length) break;
              listData.push(data[i]);
            }
            successCallback&&successCallback(listData);//成功回调
          })
          .catch(function(error) {
            errorCallback&&errorCallback();//失败回调
          });
//    },500)
      }

    },

  }

}
  /*联网加载列表数据*/
//禁止PC浏览器拖拽图片,避免与下拉刷新冲突;如果仅在移动端使用,可删除
//document.ondragstart=function() {return false;}
</script>

<style scoped lang="less">
  .mescroll{
    background: #fff;
  }
  ul>li{
    padding: .5rem .5rem;
    /*display: flex;*/
    /*align-items: flex-start;*/
    border-bottom: 1px solid #e4e4e4;
  }
  li>img{
    margin-right: .2rem;
    width: 20%;
    height: 20%;
  }
  .dataList_right{
    /*flex: 1;*/
    p{
      margin-bottom: .3rem;
    }
  }

</style>
