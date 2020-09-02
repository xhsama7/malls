<template>
  <div id="shop">
    <nav-bar class="shop-nav"><div slot="center">购物街</div></nav-bar>
    <shop-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行','新款','潮流']"></tab-control>

  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import ShopSwiper from "./childComps/ShopSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";
  import TabControl from "../../components/content/tabControl/TabControl";

  import {getShopMultidata} from "network/shop";
  import {getHomeGoods} from "network/shop";


  export default {
    name: "Shop",
    components:{
      NavBar,
      ShopSwiper,
      RecommendView,
      FeatureView,
      TabControl
    },
    data(){
      return{
        //创建变量保存数据
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'news':{page:0,list:[]},
          'sell':{page:0,list:[]}
        }
      }
    },
    created() {
      //创建时执行网络请求
      getShopMultidata().then(res => {
        //将传递的数据保存至变量中，防止内存回收
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
      })
      getHomeGoods('pop',1).then(res => {
        console.log(res)
      })
    }
  }
</script>

<style scoped>
  #shop{
    padding-top: 44px;
  }
  .shop-nav{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top:44px;
  }
</style>