<style scoped lang="less">
    .head-nav{
        width: 100%;
        height: 60px;
        line-height: 60px;
        background: #3e3f41;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 99;
        color: #FFF;
        border-bottom: 1px solid #1F2D3D;
        
        .el-menu {
            background: #3e3f41;
            
            .el-menu-item {
                //color: #ffffff;
                &:hover{
                    background-color:#444B51;
                }
            }       
        }
        .logo-container {
           height: 60px;
            .logo-img{
                height: 50px;
                width: auto;
                margin-left: 10px;
                margin-top: 5px;
            }
        }
        .hidemenu{  
            font-size:20px;           
            span:hover {
                    color: red;
                  }
            
        } 
        .clock {
                font-size: 18px;
                text-align: center;
            }
    }
</style>

<template>
    <div>
        <header class="head-nav">
            <el-row >
                <el-col :span="3" class="logo-container">
                    <img class="logo-img" src="../../assets/logohome.png"  />
                </el-col>
                <el-col :span="1" class="hidemenu">
                    <span class='el-icon-d-arrow-right el-icon-d-arrow-left' ></span>
                </el-col>
                <el-col :span="9" class="clock">
                    <el-menu theme="dark"  
                    :default-active="$route.matched[0]['path']"
                            mode="horizontal" unique-opened router>
                    <!-- v-if='!item.hidden && (($store.state.user.userinfo.access_status===1 && $store.state.user.userinfo.web_routers[item.path]) || $store.state.user.userinfo.access_status!==1)' -->
                        <el-menu-item
                            v-for='(item,index) in $router.options.routes'
                            :index="item.path"
                            :key='item.path'
                            v-if='!item.hidden'>
                            {{item.name}}<!-- {{item.path}} -->
                        </el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :span="4" class="user-info">
                    {{sysDate}}
                </el-col>
                <el-col :span="2" class="user-info">
                </el-col>
            </el-row>
        </header>
    </div>
</template>

<script>
    export default {        
        data() {
            return {
                sysDate:'',
                clockTimer: null,
            }
        },
        created() {
            //设置定时器，每一秒更新一次时间
            this.sysDate = new Date().Format(`yyyy-MM-dd  ${this.week()}  hh:mm:ss`);
            this.clockTimer = setInterval(()=>{
                this.sysDate = new Date().Format(`yyyy-MM-dd  ${this.week()}  hh:mm:ss`);
            }, 1000);
        },
        mounted() {
            //console.log(this.$route)
        },        
        methods: {
            week() {
                let day = new Date().getDay();
                let str = "星期";
                switch (day){
                    case 0:
                        str += "日";
                        break;
                    case 1:
                        str += "一";
                        break;
                    case 2:
                        str += "二";
                        break;
                    case 3:
                        str += "三";
                        break;
                    case 4:
                        str += "四";
                        break;
                    case 5:
                        str += "五";
                        break;
                    case 6:
                        str += "六";
                        break;
                }
                return str;
            },
        },
        beforeDestroy(){
            clearInterval(this.clockTimer);
        },
        computed: {}
    }
</script>
