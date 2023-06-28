import Vue from "vue"
import App from '../LandingPage.vue'
import DK from '../components/About.vue'
import ATtable from '../components/ATtable.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect:'/home',
    },
    {
        path: '*',
        redirect: '/home',
    },
    {
        path:'/home',
        name: 'Home',
        component: App //app la LandingPage
    },
    {
        path:'/about',
        name:'About',
        component: DK
    },
    {
        path:'/table',
        name:'Table',
        component: ATtable
    }
]

const router = new VueRouter({
    mode: process.env.IS_ELECTRON ? 'hash' : 'history',
    base: process.env.BASE_URL,
    routes
})

export default router