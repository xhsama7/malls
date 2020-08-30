<template>
  <tab-bar>
    <tab-bar-item link="/shop">
      <img slot="icon" src="~assets/img/tabbar/shop.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/shop_active.svg" alt="">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <img slot="icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart">
      <img slot="icon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/my">
      <img slot="icon" src="~assets/img/tabbar/my.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/my_active.svg" alt="">
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

  <script>
    import TabBar from 'components/common/tabbar/TabBar'
    import TabBarItem from 'components/common/tabbar/TabBarItem'

    export default {
      name: "MainTabBar",
      components: {
        TabBar, TabBarItem
      }
    }
  </script>

<style scoped>

</style>
