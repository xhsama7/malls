<template>
<!--  ref -> 获取元素对象或组件对象  -->
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data(){
      return{
        scroll:null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:3,
        click:true,
      })
    }
  }
</script>

<style scoped>

</style>