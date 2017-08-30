import './v/common.js'

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 扩展全局组件
Vue.component('vToast', require('./v/toast.vue'))
Vue.component('vButton', require('./v/button.vue'))
Vue.component('vLoading', require('./v/loading.vue'))
Vue.component('vMenu', require('./v/menu/index.vue'))
Vue.component('vHeader', require('./v/header.vue'))
Vue.component('vLogin', require('./login/index.vue'))


// 扩展过滤器
Vue.filter('formatNumber', formatNumber)
Vue.filter('formatDate', formatDate)
Vue.filter('up', str => str.toLocaleUpperCase())


const routes = [{
    path: '/',
    component: require('./index/index.vue')
},{
    path: '/history',
    component: require('./history/index.vue')
},{
    path: '/bind',
    component: require('./bind/index.vue')
},{
    path: '/bind/view',
    component: require('./bind/view.vue')
},{
    path: '/login',
    component: require('./login/index.vue')
},{
    path: '/upload',
    component: require('./upload/index.vue')
},{
    path: '/upload/view',
    component: require('./upload/view.vue')
},{
    path: '/center',
    component: require('./center/index.vue')
},{
    path: '/repay',
    component: require('./repay/index.vue')
},{
    path: '/result',
    component: require('./index/result.vue')
}]


const router = new VueRouter({ routes })

const app = new Vue({
    router,
    el: '#main'
})

router.beforeEach((to, from, next) => {
    config.load.status = 1
    config.menu.index = -1
    window.scrollTo(0, 0)
    next()
})