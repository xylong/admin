import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import Login from '@/pages/login/Login'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: 'router-link-active',
    linkExactActiveClass: 'router-link-exact-active',
    scrollBehavior (to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 }
    },
    routes: [{
        path: '/',
        name: 'todo',
        component: Todo
    }, {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: 'login',
            describe: 'this is login page'
        }
    }]
})
