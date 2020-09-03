<template>
  <div id="shop">
    <nav-bar class="shop-nav"><div slot="center">购物街</div></nav-bar>
    <shop-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行','新款','潮流']"></tab-control>
    <goods-list :goods="goods['pop'].list"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import ShopSwiper from "./childComps/ShopSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import {getShopMultidata} from "network/shop";
  import {getShopGoods} from "network/shop";


  export default {
    name: "Shop",
    components:{
      NavBar,
      ShopSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList
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
        }
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
    methods:{
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
        })
      }
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