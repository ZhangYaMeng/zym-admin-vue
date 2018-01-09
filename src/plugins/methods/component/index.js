import Vue from 'vue';
// 可以考虑使用webpack的去中心化函数通过正则加载 组件
let componentsArr = require.context('@/components/Common', true, /.vue$/);

let component = function() {
    return ((target, source) => {
        source.keys().forEach(element => {
            let componentName = element.substring(2, element.length - 4);
            //全局注册的组件
            target.component(componentName, source(element).default);
        });
    })(Vue, componentsArr)
}
export default component