import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from '@/view/Login'
import Home from '@/components/Routeview/Home'
import Content from '@/components/Routeview/Content'

//静态演示
import FunctionEcharts from '@/view/Function/Open/Echarts'
//  完整交互
import DemoList from '@/view/Demo/Article/List'
// 封装组件
import ComponentsInput from '@/view/Components/Form/Input'
// 高级实战
import AdvList from '@/view/Adv/Article/List'

//import Usermanage from '@/view/SystemManage/Usermanage'

export default new Router({
        routes: [{
                path: '/',
                name: 'Hello',
                hidden: true,
                redirect(to) {
                    return 'login'
                }
            }, {
                path: '/login',
                name: '登录',
                hidden: true,
                component: Login
            }, { // 静态演示
                path: '/function',
                name: '静态演示',
                icon: 'inbox',
                component: Home,
                redirect: '/function/open',
                children: [{
                    path: 'open',
                    name: '公共内容',
                    icon: 'inbox',
                    component: Content,
                    redirect: '/function/open/echarts',
                    children: [{
                        path: 'echarts',
                        name: '图表',
                        icon: 'bar-chart',
                        component: FunctionEcharts
                    }]
                }]
            }, { // 完整交互
                path: '/demo',
                name: '完整交互',
                icon: 'inbox',
                component: Home,
                redirect: '/demo/article',
                children: [{
                    path: 'article',
                    name: '文章管理',
                    icon: 'inbox',
                    component: Content,
                    redirect: '/demo/article/list',
                    children: [{
                        path: 'list',
                        name: '文章列表',
                        icon: 'reorder',
                        component: DemoList
                    }]
                }]
            }, { // 组装封装
                path: '/components',
                name: '组件封装',
                icon: 'inbox',
                component: Home,
                redirect: '/components/form',
                children: [{
                    path: 'form',
                    name: '表单组件',
                    icon: 'inbox',
                    component: Content,
                    redirect: '/components/form/input',
                    children: [{
                        path: 'input',
                        name: 'input框',
                        icon: 'reorder',
                        component: ComponentsInput
                    }]
                }]
            },
            /* { //高级实战
                           path: '/adv',
                           name: '高级实战',
                           icon: 'inbox',
                           component: Home,
                           redirect: '/adv/article',
                           children: [{
                               path: 'article',
                               name: 'article-manager',
                               icon: 'inbox',
                               component: Content,
                               redirect: '/adv/article/list',
                               children: [{
                                   path: 'list',
                                   name: 'article-list',
                                   icon: 'reorder',
                                   component: AdvList
                               }]
                           }]
                       }, */
            {
                path: '/404',
                name: '404',
                hidden: true,
                component: Login
            }

        ]
    })
    /* {
                    path: '/',
                    redirect: to => {
                        return 'login'
                    }
                }, {
                    path: '/login',
                    component: Login,
                }, {
                    path: '/home',
                    component: Home,
                    children: [{
                        path: '',
                        redirect: to => {
                            return 'user'
                        }
                    }, {
                        path: 'user',
                        name: '用户管理',
                        component: Usermanage
                    }],
                }, {
                    path: '*',
                    component: null,
                    redirect: '/login'
                } */