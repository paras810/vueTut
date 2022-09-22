import {createWebHistory, createRouter} from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'

const routes =[
    {
        name:'',
        path:'/', 
        component: Home
    },
    {
        name:'login',
        path:'/login', 
        component: Login
    },
    {
        name:'Home',
        path:'/profile', 
        component: Profile
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router ;