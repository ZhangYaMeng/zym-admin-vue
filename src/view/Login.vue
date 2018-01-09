<style lang="less">
	.login {
		.el-form-item {
			padding: 0 36px;
		}
		.el-input__inner {
			text-indent: 20px;
			height: 50px;
		}
		.publicInput .el-input__icon {
			left: 0;
		}
		.el-checkbox__input.is-checked .el-checkbox__inner {
			background-color: #f18270;
			border-color: #f18270;
		}
	}
</style>
<style scoped lang="less">
	.login {
		min-width: 1000px;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background:url(../../static/img/background_1.jpg) no-repeat center;
		background-size: cover;
		overflow: auto;
	}
	.login>img {
		position: absolute;
		width: 245px;
		height: 85px;
		font-size: 0;
		border: none;
		top: 100px;
		left: 60%;
		margin-left: 40px;
	}
	.login-container {
		position: absolute;
		left: 60%;
		top: 220px;
		margin-bottom: 100px;
		border-radius: 5px;
		box-sizing: border-box;
		background-clip: padding-box;
		width: 340px;
		background: #fff;
		box-shadow: 0 0 25px #100404;
		.ui_icon {
			position: absolute;
			width: 35px;
			height: 100%;
			left: 0;
			top: 0;
			text-align: center;
			z-index: 999;
			color: #bfcbd9;
		}
		.ui_user {
			background: url(../assets/username.png) center no-repeat;
		}
		.ui_password {
			background: url(../assets/password.png) center no-repeat;
		}
		.title {
			margin: 20px auto 20px auto;
			text-align: center;
			color: #f18270;
			font-size: 28px;
		}
		.remember {
			margin: 0px 0px 10px 36px;
		}
		.loginBtn {
			background: #f18270;
			color: #fff;
			height: 42px;
			width: 190px;
			margin: 0 auto;
		}
		.messageTitle {
			width: 100%;
			height: 70px;
			background: #56596a;
			color: #aab5ee;
			font-size: 18px;
			text-align: center;
			line-height: 70px;
		}
	}
</style>

<template>
	<div ref="login" class="login" >
		<img src="../../static/img/logo_black.png">
		<el-form :model="form" :rules="rules" ref="form" label-position="left" label-width="0px" class="demo-ruleForm login-container">
			<h3 class="title">登录</h3>
			<el-form-item prop="account">
				<i class="ui_icon ui_user"></i>
				<el-input type="text" @keyup.enter="submit" v-model="form.username" placeholder="账号或手机号：" class="publicInput">
				</el-input>
			</el-form-item>
			<el-form-item prop="checkPass">
				<i class="ui_icon ui_password"></i>
				<el-input type="password" @keyup.enter="submit" v-model="form.password" placeholder="密码："></el-input>
			</el-form-item>
			<el-checkbox v-model="remember" class="remember">记住账号</el-checkbox>
			<div style="width:100%;text-align:center;margin-bottom:16px;">
				<el-button class="loginBtn" :loading="loading" @click="submit">登录</el-button>
			</div>
			<div class="messageTitle">中信国安家管理系统</div>
		</el-form>
	</div>
</template>

<script>

 	import Home from '@/components/Routeview/Home'
	import Content from '@/components/Routeview/Content'
// import md5 from 'md5';
	export default {
		data() {
			return {
				loading: false,
				form: {
					username: '',
					password: ''
				},
				rules: {
					username: [
						{ required: true,message: '请输入账号',trigger: 'blur'}
					],
					password: [
						{ required: true,message: '请输入密码',trigger: 'blur' } 
					]
				},
				remember: true
			};
		},
		created() {
			
		},
		mounted() {
		},
		methods: {
			submit() {

				this.loading = true;
				this.$refs.form.validate((valid) => {
					if (valid) {						
						this.$$login(this.form).then( (res)=>{
							// 存储用户信息
							this.store.set("userinfo",res.data);

						
					let viewsArr = require.context('@/view', true, /.vue$/);
	let tepmrout = [{ //高级实战
                           path: '/adv',
                           name: '高级实战',
                           icon: 'inbox',
                           component: 'Home',
                           redirect: '/adv/article',
                           children: [{
                               path: 'article',
                               name: 'article-manager',
                               icon: 'inbox',
                               component: 'Content',
                               redirect: '/adv/article/list',
                               children: [{
                                   path: 'list',
                                   name: 'article-list',
                                   icon: 'reorder',
                                   component: "List"
                               }]
                           }]
                       }];	 
	 let arr = tepmrout.map( ele =>{
		  			if(ele.component === "Home"){
						ele.component = Home								
					}
					 ele.children.map( elesub =>{
						if(elesub.component === "Content"){
							elesub.component = Content								
						}
						elesub.children.map( elechild =>{							
							viewsArr.keys().forEach(element => {          
								let viewsName = element.substring(2, element.length - 4);
								let tempArr = viewsName.split("/");
								viewsName = tempArr[tempArr.length-1]
								if(viewsName === elechild.component){
								 	elechild.component = viewsArr(element).default								
								}
							});
						})
					})
					return ele
				})	

				// 先把要添加重复判断
				this.$router.addRoutes(tepmrout);
				this.$router.options.routes = this.$router.options.routes.concat(tepmrout);
				
				var res = [];
				var json = {};
				this.$router.options.routes.forEach( (ele)=>{
					if(!json[ele.name]){
						res.push(ele);
						json[ele.name] = 1;
					}
				})
				this.$router.options.routes = res;
               //console.log(this.$router.options.routes)
					//let routerTemp = this.$router.options.routes.concat(tepmrout);
					
					this.store.set("routes",res);
						//console.log(this.$router.options.routes);
							// 所有请求都请求完了再取消加载样式
							this.loading = false; 
							this.$router.push('/adv/article/list')
							
						})						
					} else {
						this.loading = false;
						return false;
					}
				})
			}
		},
		computed: {
			// backgroundImage() {
			// 	return {
			// 		backgroundImage: `url(${this.backgroundUrl})`
			// 	}
			// }
		}
	}
</script>
