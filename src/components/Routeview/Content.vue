<template>
  <div class="" :style="{'height':win_size.height}">
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
  export default {
    data () {
      return {
         win_size: {
                height: ''
            },
      }
    },
    methods: {
      setSize() {
        this.win_size.height = document.documentElement.clientHeight + 'px'
      }
    },
    created () {
      this.setSize();
    },
    mounted () {

    }
  }
</script>

<style scoped lang='less'>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
