import { ajax } from 'utils/';
const ContentManage = {
    one(data) {
        return ajax("get", "/login", data);
    },
    // getRouterMenu(data) {
    //     return ajax("get", "/menu", data);
    // }
}
export default ContentManage