import Vue from 'vue';

// 通过正则匹配加载 
export default {
    install(Vue, options) {
        (r => {
            return r.keys().forEach(key => r(key).default());
        })(require.context('./methods', true, /index.js$/))
    }
}