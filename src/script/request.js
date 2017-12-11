import ajax from '@/util/ajax';
let request = {
    // 登录模块
    LoginModule: {
        login(data) {
            return ajax("post", "/auth/login", data);
        },
    },
    // 系统管理模块
    SystemModule: {

    },
    //内容管理模块
    ContentManage: {

    }
}
export default request