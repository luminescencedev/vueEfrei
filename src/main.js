import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router';

import Home from './page/Home.vue'
import Login from './page/Login.vue'
import Logout from './page/Logout.vue'

const routes = [ 
    {
        path:'/',
        component: Home
    }, {
        path:'/login',
        component: Login
    }, {
        path:'/logout',
        component: Logout 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router).mount('#app')