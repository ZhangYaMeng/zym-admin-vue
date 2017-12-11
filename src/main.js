// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 给axios添加一个语法糖
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

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
import store from '@/util/store';
import gbs from '@/config';
// 兄弟组件通信的一个存贮机制
Vue.prototype.bus = new Vue();
Vue.prototype.store = store;

// 关闭生产模式下给出的提示2.22新增
Vue.config.productionTip = false
    //判断是否是生产环境，生产环境下，将console方法重写
if (process.env.NODE_ENV === 'development') {
    Vue.prototype.INTERFACE = gbs.dev_path
} else if (process.env.NODE_ENV === 'production') {
    Vue.prototype.INTERFACE = gbs.prod_path
}
// 图片的地址
Vue.prototype.IMAGE_PATH = gbs.image_path;
// 上传 文件图片的 地址
Vue.prototype.UPLOAD_IMAGE = gbs.upload_path;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})