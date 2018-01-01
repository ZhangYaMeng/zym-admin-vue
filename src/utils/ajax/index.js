import Vue from 'vue';
import gbs from 'config/'
import { store } from 'utils/'
// 给axios添加一个语法糖
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
let ajax = (type, url, data) => {
    // 动态设置本地和线上接口域名
    axios.defaults.baseURL = gbs.json_path;
    let userinfo = store.get('userinfo');
    if (userinfo) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${userinfo.token}`;
    }
    // 规定post请求用什么格式进行提交
    axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
    axios.defaults.timeout = 2500;

    // 分发显示加载样式任务
    //this.$store.dispatch('show_loading');
    if (type === 'get') {
        var datas = {
            params: data
        };
    } else {
        var datas = data;
    }
    return axios[type](url, datas = {}).then((res) => {
        // res是上一个promise对象包含所有的响应 包括响应头 响应体
        if (res.data.status === 200) {
            return res.data;
        } else if (res.data.status !== 401) {
            Vue.prototype.$message({
                showClose: true,
                message: '返回错误：' + res.data.message,
                type: 'error'
            });
        } else {
            // 返回401错误再从新登录
            // this.$store.dispatch('remove_userinfo').then(() => {
            //     this.$alert(res.data.status + ',' + res.data.message + '！', '登录错误', {
            //         confirmButtonText: '确定',
            //         callback: action => {
            //             this.$router.push('/login');
            //         }
            //     });
            // });
            return res.data;
        }
        //this.$store.dispatch('hide_loading');
    }).catch((err) => {
        //相应头错误
        //this.$store.dispatch('hide_loading');
        Vue.prototype.$message({
            showClose: true,
            message: '请求错误：' + err.response.status + ',' + err.response.statusText,
            type: 'error'
        });
    });
};
export default ajax;