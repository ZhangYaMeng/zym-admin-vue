import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '@/view/Login'

export default new Router({
    routes: [{
        path: '/',
        redirect: to => {
            return 'login';
        }
    }, {
        path: '/login',
        component: Login,
    }, {
        path: '*',
        component: null,
        redirect: to => {
            return 'login';
        }
    }]
})