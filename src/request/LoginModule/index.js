import { ajax } from '@/utils/';
// 登录模块
const LoginModule = {
    login(data) {
        return ajax("get", "/login", data);
    },
    // getRouterMenu(data) {
    //     return ajax("get", "/menu", data);
    // }
}
export default LoginModule