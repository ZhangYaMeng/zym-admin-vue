import Vue from 'vue';

// 动态设置本地和线上接口域名
Vue.axios.defaults.baseURL = Vue.prototype.INTERFACE;
// 规定post请求用什么格式进行提交
Vue.axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
Vue.axios.defaults.timeout = 2500;
export default function(type, url, data) {
    // 分发显示加载样式任务
    //this.$store.dispatch('show_loading');
    if (type === 'get') {
        var datas = {
            params: data
        };
    } else {
        var datas = data;
    }
    Vue.axios[type](url, datas).then((res) => {
        // res是上一个promise对象包含所有的响应 包括响应头 响应体
        if (res.data.status === 200) {
            return res.data;
        } else if (res.data.status !== 401) {
            this.$message({
                showClose: true,
                message: '返回错误：' + res.data.message,
                type: 'error'
            });
        } else {
            // this.$store.dispatch('remove_userinfo').then(() => {
            //     this.$alert(res.data.status + ',' + res.data.message + '！', '登录错误', {
            //         confirmButtonText: '确定',
            //         callback: action => {
            //             this.$router.push('/login');
            //         }
            //     });
            // });
        }
        //this.$store.dispatch('hide_loading');
    }).catch((err) => {
        //相应头错误
        //this.$store.dispatch('hide_loading');
        this.$message({
            showClose: true,
            message: '请求错误：' + err.response.status + ',' + err.response.statusText,
            type: 'error'
        });
    });
};