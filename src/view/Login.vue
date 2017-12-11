<template>
    <div class="home">
        <div class="contant">
            <router-view></router-view>    
        </div>
    </div>
</template>

<script>


  import HeadNav from '../components/public/HeadNav.vue';
  import ButtomForm from '../components/public/ButtomForm.vue';
    export default {
         data() {
            return {
        			
            }
        },
        components:{
            HeadNav,
            ButtomForm
            }
    }

</script>

<style  scoped lang='less'>
.contant{
    margin-top: 60px;
    text-align: center;
}

</style>
