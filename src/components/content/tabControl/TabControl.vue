<template>
  <div class="tab-control">
    <div v-for="(m, index) in titles"
         class="tab-control-m"
         :class="{active: index === currentIndex}" @click="mClick(index)">
      <span>{{m}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex: 0
      }
    },
    methods:{
      mClick(index){
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
  .tab-control-m{
    flex: 1;
  }
  .active{
    color:var(--color-high-text)
  }
</style>