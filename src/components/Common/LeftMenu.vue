
<template>
	<div class="left-menu" :style="{width:$store.state.leftmenu.width}">
		<!--导航菜单-->
		<el-row class='tac'
			v-for="(route,index) in this.$router.options.routes"
			:key='route.path'
			v-if='!route.hidden && $route.matched.length && $route.matched[0].path===route.path'>
			<el-col :span="24">
				<el-menu     				
					class="el-menu-vertical-demo"
					theme="dark"
					background-color="#545c64"
					:default-active="$route.path"
					unique-opened
					router>
					<!-- v-if="!item.hidden && (($store.state.user.userinfo.access_status===1 && $store.state.user.userinfo.web_routers[route.path+'/'+item.path]) || $store.state.user.userinfo.access_status!==1)" -->
					<template
					v-for="(item,index) in route.children"
					v-if="!item.hidden" >
					<el-submenu
						:index="item.path">
						<template
						slot="title">
						<el-tooltip
							class="item"
							effect="dark"
							placement="right"
							:content="item.name">
							<i :class="'fa fa-'+item.icon"></i>
						</el-tooltip>
						<span
							class='menu-name'
							>{{item.name}}
							<!-- {{route.path+'/'+item.path}} --></span>
						</template>
						<!-- v-if="!child.hidden && (($store.state.user.userinfo.access_status===1 && $store.state.user.userinfo.web_routers[route.path+'/'+item.path+'/'+child.path]) || $store.state.user.userinfo.access_status!==1)" -->
						<el-menu-item
						v-for='(child,cindex) in item.children'
						:key='child.path'
						v-if="!child.hidden "
						:index='$route.path'>
						<el-tooltip
							class="item"
							effect="dark"
							placement="right"
							:content="child.name">
							<i :class="'fa fa-'+child.icon"></i>
						</el-tooltip>
						<span class='menu-name'> {{child.name}}  </span>
						</el-menu-item>
					</el-submenu>
					</template>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>

<script>
    export default {
        data() {
            return {
				leftRouter:[]
              
            }
        },

        created(){   
			          
        },

        mounted() {        
		// let addroutes = this.store.get("routes");   
        //   this.leftRouter = addroutes;
        },

        beforeDestroy(){
           
        },

        methods: {
          
        }
    }
</script>
<style scoped lang="less" > 
.left-menu {
    position: fixed;
    float: left;
	top: 61px;
	height:100%; 
    transition: .3s linear;
    //width:200px;
    // margin-right:-190px;   
    background: #3e3f41;
        //position: relative;
        overflow-x: hidden;
        .el-menu {          
            .el-submenu{
               background: #3e3f41;
            }          
        }
}
  
</style>
