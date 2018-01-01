import { ajax } from 'utils/';
const SystemModule = {
    two(data) {
        return ajax("get", "/login", data);
    },
    // getRouterMenu(data) {
    //     return ajax("get", "/menu", data);
    // }
}

export default SystemModule