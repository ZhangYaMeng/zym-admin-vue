<style scoped lang="less">
    .head-nav{
        display: block;
        min-width: 1090px;
        width:100%;
        height: 60px;
        line-height: 60px;
        background: #3e3f41;
        position: fixed;
        top: 0px;
        // left: 0px;
        //z-index: 99;
         color: #FFF;
         border-bottom: 1px solid #000;      
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
           min-width: 203px;
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
        .headmenu{
            min-width: 409px;
        }
        .clock {
                font-size: 18px;
                text-align: center;
                min-width: 243px;
            }
        .user-info {
            height:60px;
            text-align: left;
            .el-dropdown{
            height:60px;
            width:100%;
            }           
            .el-dropdown-link{
                display: inline-block;
                width:100%;
                height:100%;   
                .user-head {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: inline-block;
                    margin: 10px;
                    float: left;                
                }
                .user-limitauto{
                    width:120px;
                    height:60px;
                    //width:100%;
                    display: inline-block;
                    white-space:nowrap;
                    overflow:hidden;
                    //text-overflow:ellipsis;
                    .user-name{
                        font-size:16px;
                        color:#fff;
                    }
                } 
            }
                     
        }
        .logon-out {
            // height: 60px;
            // text-align: left;
            //min-width: 134px;
            .el-dropdown-link{
                display: inline-block;
                width:100%;
                height:100%;   
                .user-head {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: inline-block;
                    margin: 10px;
                    float: left;                
                }               
                    .user-name{
                        font-size:16px;
                        color:#fff;
                    }                
            }
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
                <el-col :span="1" class="hidemenu" >
                    <span @click='toggleMenu' :class="'el-icon-d-arrow-'+ ($store.state.leftmenu.menu_flag ?'left':'right')" ></span>
                    
                </el-col>
                <el-col :span="1" class="hidemenu" >
                    <span @click="toggleScreen" class="fa fa-arrows-alt"></span>
                </el-col>
                <el-col :span="8" class="headmenu">
                    <el-menu 
                    theme="dark"  
                    :default-active="$route.matched[0]['path']"
                    mode="horizontal" unique-opened router>
                    <!-- v-if='!item.hidden && (($store.state.user.userinfo.access_status===1 && $store.state.user.userinfo.web_routers[item.path]) || $store.state.user.userinfo.access_status!==1)' -->
                        <el-menu-item
                            v-for='(item,index) in this.$router.options.routes'
                            :index="item.path"
                            :key='item.path'
                            v-if='!item.hidden'>
                            {{item.name}}<!-- {{item.path}} -->
                        </el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :span="4" class="clock">
                    {{sysDate}}
                </el-col>
                <el-col :span="4" class="user-info">
                    <el-dropdown menu-align="start" trigger="click">
                        <span class="el-dropdown-link">
                            <img style="float:left;" class="user-head" src="../../assets/default_user.png"/>
                            <span style="float:left;" class="user-limitauto">                           
                                    <marquee style="width:120px;" class="user-name">{{sysUserName}}</marquee>                                                
                            </span>
                        </span>
                    </el-dropdown>
                </el-col>
                
                <el-col :span="2"  class="logon-out">
                    <span class="el-dropdown-link" @click='logout'>
                        <img class="user-head" src="../../assets/default_close.png"/>
                        <span  class="user-name" >退出登录</span>
                    </span>
                </el-col>
                
            </el-row>
        </header>
    </div>
</template>

<script>
   	import screenfull from 'screenfull'
    export default {      
        data() {
            return {
                sysDate:'',
                clockTimer: null,
                sysUserName:"开发部门-张亚蒙"
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
            toggleMenu(){
                this.$store.dispatch(this.$store.state.leftmenu.menu_flag ? 'set_menu_close' : 'set_menu_open')
            },
            toggleScreen(){
                if (!screenfull.enabled) {
					this.$message({
					message: 'you browser can not work',
					type: 'warning'
					})
					return false
				}
				screenfull.toggle()
            },
            	
            /**
             * 退出登录
             */
            logout () {
                this.$confirm('你确定退出登录么?', '确认退出', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //this.$store.dispatch('remove_userinfo')
                    this.$router.push('/login')
                })
            },
        },
        beforeDestroy(){
            clearInterval(this.clockTimer);
        },
        computed: {}
    }
</script>
