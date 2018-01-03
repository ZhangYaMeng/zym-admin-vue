<template >
  <div class="home">
    <head-nav ></head-nav>
    <div >
      <left-menu class="left-menu" :style="{width:$store.state.leftmenu.width}"></left-menu>
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
  //已经全局注册了
  // import HeadNav from '../Common/HeadNav.vue'
  // import LeftMenu from '../Common/LeftMenu.vue'
  // import Bread from '../Common/Bread.vue'
  // import Tabs from '../tabs/Tabs.vue';

  export default {
    name: 'home',
    // components: {
    //   HeadNav, LeftMenu , Bread 
    // }
  }
</script>
<style scoped lang='less'>
.home{
    .content {
      //margin-top: 60px;
      //background: #f1f2f7;
      background: #FFF;
      padding: 0 16px;
      transition: .3s linear; 
    }
      .left-menu{
        
        transition: .3s linear;   
      }
    .right-content {
      margin-bottom: 60px ;
      
    }
}
 
</style>
