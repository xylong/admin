import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import Login from '@/pages/login/Login'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Todo',
        component: Todo
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }]
})
