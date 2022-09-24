import {createWebHistory, createRouter} from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'
import PageNotFound from './components/PageNotFound.vue'

const routes =[
    {
        name:'home',
        path:'/', 
        component: Home
    },
    {
        name:'login',
        path:'/login', 
        component: Login
    },
    {
        name:'profile',
        path:'/profile/:name', 
        component: Profile
    },
    
    {
        name:'PageNotFound',
        path:'/:pathMatch(.*)*', 
        component: PageNotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router ;