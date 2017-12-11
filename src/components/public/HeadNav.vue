<template>
    <header class="head-nav">
        <el-row type="flex" justify="space-between">
            <el-col :span="4" class='logo-name'>
                <img class="jiuma-logo" src="../../assets/jiumalogo.png"/>
            </el-col>
            <el-col :span="16" class="nav-name">
                <div class="nav-name-right"> 
                    <el-menu :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        router>
                        <el-menu-item index="/home/firstpage">首页</el-menu-item>
                        <el-menu-item index="2">九马业务</el-menu-item>
                        <el-menu-item index="/home/productshow">产品展示</el-menu-item>
                        <el-menu-item index="4">关于九马</el-menu-item>
                        <el-menu-item index="5">联系我们</el-menu-item>
                    </el-menu>                 
                </div>               
            </el-col>        
        </el-row>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                 activeIndex: ''
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                //this.router = key;
               // console.log(key, keyPath);
            }
        },
         created() {
                this.activeIndex = this.$route.path;
               // console.log(this.$route.path);
            }
    }
</script>

<style scoped lang='less'>
    .head-nav {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 9999;
        color: #ffffff;
        font-size: 14px;
        background-color: #1F212E;
        .el-col {
            height: 60px;
            line-height: 60px;
            
                .nav-name-right{
                    margin-right: 80px;
                    float:right;
                }
            
           
            .jiuma-logo{
                margin-left:30px;
                margin-top:-8px;
                height:60px;
            }
            .el-menu-demo{               
                background-color: #1F212E;
               .el-menu-item{ 
                   color:#fff;
                   border:none;
                   &:hover{
                        background-color: #1F212E;
                   }
                   
               } 
               .is-active{
                   color:#B3A319;
               }
            }
        }
    }
</style>
