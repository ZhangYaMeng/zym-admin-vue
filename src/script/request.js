import { ajax } from 'utils/';
let request = {
    // 登录模块
    LoginModule: {
        login(data) {
            return ajax("get", "/login", data);
        },
        // getRouterMenu(data) {
        //     return ajax("get", "/menu", data);
        // }
    },
    // 系统管理模块
    SystemModule: {

    },
    //内容管理模块
    ContentManage: {

    }
}
export default request