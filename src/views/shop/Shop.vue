<template>
  <div id="shop">
    <nav-bar class="shop-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getShopMultidata} from "network/shop";

  export default {
    name: "Shop",
    components:{
      NavBar
    },
    data(){
      return{
        banners:[],
        recommends:[]
      }
    },
    created() {
      getShopMultidata().then(res => {
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