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
        this.$emit('tabClick',index)
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
  .tab-control-m span{
    padding: 5px;
  }
  .active{
    color:var(--color-high-text)
  }
  .active span{
    border-botton:3px solid var(--color-tint);
  }
</style>