<template>
  <swiper>
    <swiper-item v-for="m in banners">
      <a :href="m.link">
        <img :src="m.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper"
  export default {
    name: "ShopSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
  }
  }
</script>

<style scoped>

</style>