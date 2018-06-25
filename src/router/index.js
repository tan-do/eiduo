import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

const LoginPage = () => import ('../page/LoginPage.vue')
const IndexPage = () => import ('../page/IndexPage.vue')
const ReportPage = () => import ('../page/ReportPage.vue')
const AnswerPage = () => import ('../page/AnswerPage.vue')

const DuoPage = () => import ('../page/DuoPage.vue')
const VipPage = () => import ('../page/VipPage.vue')
const AgreePage = () => import ('../page/AgreePage.vue')

const MyPage = () => import ('../page/MyPage.vue')
const MyOrder = () => import ('../page/MyOrder.vue')
const MyPassword = () => import ('../page/MyPassword.vue')
const MyPhone= () => import ('../page/MyPhone.vue')
const MySuggest = () => import ('../page/MySuggest.vue')
const MyAbout = () => import ('../page/MyAbout.vue')

const PasswordPage = () => import ('../page/PasswordPage.vue')
const ForgetPage = () => import ('../page/ForgetPage.vue')



const FootComponent = () => import ('../components/FootComponent.vue')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            components: {
                default: IndexPage,
                tabbar: FootComponent,
            },
            meta: { requiresAuth: true }
        },
        {
            path: '/report',
            component:ReportPage,
            meta: { requiresAuth: true }
        },
        {
            path: '/answer/:id',
            component: AnswerPage,
            meta: { requiresAuth: true }
        },

        {
            path: '/duo',
            components: {
                default: DuoPage,
                tabbar: FootComponent,
            },
            meta: { requiresAuth: true }
        },

        {
            path: '/vip',
            component : VipPage,
            meta: { requiresAuth: true }
        },
        {
            path: '/agree',
            component:AgreePage,
            meta: { requiresAuth: true }
        },

        {
            path: '/my',
            components: {
                default: MyPage,
                tabbar: FootComponent,
            },
            meta: { requiresAuth: true }
        },
        {
            path: '/myorder',
            component : MyOrder,
            meta: { requiresAuth: true }
        },
        {
            path: '/mypassword',
            component : MyPassword,
            meta: { requiresAuth: true }
        },
        {
            path: '/myphone',
            component : MyPhone,
            meta: { requiresAuth: true }
        },
        {
            path: '/mysuggest',
            component : MySuggest,
            meta: { requiresAuth: true }
        },
        {
            path: '/myabout',
            component : MyAbout,
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            component: LoginPage,
        },

        {
            path: '/password',
            component:PasswordPage,
        },

        {
            path: '/forget',
            component:  ForgetPage,
        }



    ]
})
