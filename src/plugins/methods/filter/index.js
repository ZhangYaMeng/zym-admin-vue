import Vue from 'vue';
let filter = function() {
    return (function(target) {
        /**
         * 格式化日期的过滤器
         * (yyyy-MM-dd)
         */
        target.filter('date-filter', function(time) {
            return new Date(time).Format("yyyy-MM-dd");
        });
        /**
         * 格式化日期+时间的过滤器
         * (yyyy-MM-dd hh:mm)
         */
        target.filter('date-time-filter', function(time) {
            return new Date(time).Format("yyyy-MM-dd hh:mm");
        });
    })(Vue);
}
export default filter