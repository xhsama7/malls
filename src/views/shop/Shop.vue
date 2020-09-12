<template>
  <div id="shop">
    <nav-bar class="shop-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','潮流']"
                 @tabClick="tabClick"
                 ref="tabControl1"
                 class="tab-control"
                 v-show="isTabFixed"
    ></tab-control>
    <scroll class="content"
           ref="scroll"
           :probe-type="3"
           @scroll="contentScroll"
           :pull-up-load="true"
           @pullingUp="loadMore()">
     <shop-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
     <recommend-view :recommends="recommends"/>
     <feature-view/>
     <tab-control :titles="['流行','新款','潮流']"
                  @tabClick="tabClick"
                  ref="tabControl"
     ></tab-control>
     <goods-list :goods="showGoods"/>
   </scroll>
<!--  修饰符native -> 监听组件点击原生事件  -->
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import ShopSwiper from "./childComps/ShopSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";


  import {getShopMultidata} from "network/shop";
  import {getShopGoods} from "network/shop";
  import {debounce} from "common/utils";


  export default {
    name: "Shop",
    components:{
      NavBar,
      ShopSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data(){
      return{
        //创建变量保存数据
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        isShowBackTop:false,
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:0
      }
    },
    created() {
      //创建时执行网络请求
     this.getShopMultidata();
     //请求商品数据
     this.getShopGoods('pop');
     this.getShopGoods('new');
     this.getShopGoods('sell');

    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 500)
      //监听item中图片加载完成 -> 事件总线
      this.$bus.$on('itemImageLoad', () => {
        refresh()
      })

    },
    methods:{
      //事件监听相关方法
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl.currentIndex = index
        this.$refs.tabControl1.currentIndex = index
      },


      //网络请求相关方法
      getShopMultidata(){
        getShopMultidata().then(res => {
          //将传递的数据保存至变量中，防止内存回收
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list
        })
      },
      getShopGoods(type){
        const page = this.goods[type].page + 1;
        getShopGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list); //将数据保存至list中
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
        })
      },
      backClick(){
        this.$refs.scroll.scrollTo(0, 0);
      },
      contentScroll(position){
        this.isShowBackTop = (-position.y) > 1000 //判断何时需要回到顶部操作

        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore(){
        this.getShopGoods(this.currentType) //上拉时获取新一页数据
        this.$refs.scroll.refresh()
      },
      swiperImageLoad(){
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh();
    },
    deactivated() {
      //保存离开首页时的位置信息
      this.saveY = this.$refs.scroll.getScrollY()
      console.log(this.saveY)
    }
  }
</script>

<style scoped>
  #shop{
    /* vh(viewport height) -> 视口 */
    height: 100vh;
    position: relative;
  }
  .shop-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
</style>