// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//全局安装promise (一个支持es6 promise的垫片)
import { install } from 'promise-es6'
install();

//应用全局样式重置样式 去除默认样式的影响
import './style/reset.less';
// element-ui
import 'element-ui/lib/theme-default/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

import App from '@/App'
import router from '@/router'
import store from '@/store/'
import plugins from '@/plugins/'
Vue.use(plugins)
    // 关闭生产模式下给出的提示2.22新增
Vue.config.productionTip = false
    //判断是否是生产环境，生产环境下，将console方法重写
if (process.env.NODE_ENV === 'production') {
    window.console.log = () => {};
    window.console.info = () => {};
    window.console.error = () => {};
}

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})