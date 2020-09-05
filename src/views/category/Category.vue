<template>
  <div class="wrapper">
    <ul class="content">
      <li>分类列表1</li>
      <li>分类列表2</li>
      <li>分类列表3</li>
      <li>分类列表4</li>
      <li>分类列表5</li>
      <li>分类列表6</li>
      <li>分类列表7</li>
      <li>分类列表8</li>
      <li>分类列表9</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Cartgory",
    data(){
      return{
        scroll:null
      }
    },
    mounted() {
      //利用better-scroll进行滚动
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
       //侦测，值为0,1时都是侦测实时位置
        //值为2：在手指滚动过程中侦测，手指离开后的惯性滚动过程中不侦测
        //值为3：只要是滚动，都侦测
        probeType:3,
        click:true, //元素可触发点击事件
        // scrollX:false, //横向可滑动，默认为false
        // scrollY:true, //纵向可滑动，默认为true
        // bounce:false, //当滚动超过边缘的时候无回弹动画
        // snap:{ //滑动切换的一些配置
        //   speed:800, //滑动切换的速度
        //   easing:{ //滑动切换的动画效果
        //     style:'ease-in'
        //   }
        // },
        // threshold:0.5, //滑动超过一半时切换到下一屏
        // stepX:window.innerWidth, //横向切换距离为窗口宽度
        // stepY:window.innerHeight, //纵向切换距离为窗口高度
        // pullUpLoad:true //上拉加载更多(boolean / object)
        })

        //默认情况下better-scroll是不可以实时监听滚动位置
        BScroll.on('scroll',(position) => {
          console.log(position)
      })

      BScroll.on('pullingUp',() => {
        //发送网络请求，请求更多页的数据
        //等待数据加载完成，并且将新的数据展示出来
        setTimeout( () => {
          BScroll.finishPullUp()
        }, 2000)
      })
    }
  }
</script>

<style scoped>
.wrapper{
  height: 150px;
  background-color: red;
  overflow: hidden;
  /* 原生滚动方式 */
  /*overflow-y: scroll;*/
}
</style>