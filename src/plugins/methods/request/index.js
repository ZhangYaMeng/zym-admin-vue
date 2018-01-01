import Vue from 'vue';

let Obj = {};
// 正则加载目录去中心化不用再配置反射对象了
(r => {
    return r.keys().forEach(key => Object.assign(Obj, r(key).default));
})(require.context('@/request', true, /.js$/));

let request = function() {
    return (function installAjax(target, source) {
        for (var k in source) {
            if (typeof source[k] === 'object') {
                installAjax(target, source[k]);
            } else {
                target.prototype['$$' + k] = source[k];
            }
        }
    })(Vue, Obj)
}
export default request