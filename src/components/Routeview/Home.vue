<template >
  <div class="home">
    <head-nav></head-nav>
    <div >
      <left-menu  ></left-menu>
      <div class="right-content">
        <div class="content" :style="{marginLeft:$store.state.leftmenu.width}">
           <!-- <tabs></tabs> -->
          <bread></bread> 
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // 组件已经全局注册了
  export default {
    data () {
      return {
        
      }
    },
    methods: {
      
    },
    created () {
      
    },
    mounted () {

    }
  }
</script>
<style scoped lang='less'>
.home{
    .content {
      //margin-top: 60px;
      //background: #f1f2f7;
      height:100%;
      background: #FFF;
      padding: 0 16px;
      transition: .3s linear; 
    }
   
    .right-content {
      margin-bottom: 60px ;    
    }
}
 
</style>
