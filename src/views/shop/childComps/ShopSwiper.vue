<template>
  <swiper>
    <swiper-item v-for="m in banners">
      <a :href="m.link">
        <img :src="m.image" alt="" @load="imageLoad">
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
  },
    data(){
      return{
        isLoad:false
      }
    },
    methods:{
      imageLoad(){
        if (!this.isLoad){
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

</style>