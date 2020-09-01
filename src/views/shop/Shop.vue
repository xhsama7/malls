<template>
  <div id="shop">
    <nav-bar class="shop-nav"><div slot="center">购物街</div></nav-bar>
    <shop-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import ShopSwiper from "./childComps/ShopSwiper";
  import RecommendView from "./childComps/RecommendView";
  import {getShopMultidata} from "network/shop";



  export default {
    name: "Shop",
    components:{
      NavBar,
      ShopSwiper,
      RecommendView
    },
    data(){
      return{
        //创建变量保存数据
        banners:[],
        recommends:[]
      }
    },
    created() {
      //创建时执行网络请求
      getShopMultidata().then(res => {
        //将传递的数据保存至变量中，防止内存回收
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .shop-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>