import Vue from 'vue';
import gbs from 'config/';
/*引入moment*/
import Moment from 'moment'
import { ajax, store } from 'utils/';
let stateObj = {
    bus: new Vue(), // 兄弟组件通信的
    INTERFACE: gbs.json_path, // 请求路径 
    IMAGE_PATH: gbs.image_path, // 加载的图片路径
    UPLOAD_IMAGE: gbs.upload_path, // 文件上传路径
    store: store, // 存贮的 插入到vue中
    moment: Moment // 处理时间格式
}
let state = function() {
    return (function(target, source) {
        for (var k in source) {
            target.prototype[k] = source[k];
        }
    })(Vue, stateObj)
}
export default state