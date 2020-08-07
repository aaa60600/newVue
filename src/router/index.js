import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import NewAccount from '../views/NewAccount.vue'
import resetInput from '../views/resetInput.vue'
import success from '../views/success.vue'

//步驟1. 建立頁面且引用
import pageExample from '../views/pageExample.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //步驟2. 建立路由物件
  // 以下示範
  // {
  //   path: '/pageExample',
  //   name: 'pageExample',
  //   component: pageExample
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/NewAccount', //加入會員
    name: 'NewAccount',
    component: () => import('../views/NewAccount.vue')
  },
  {
    path: '/success',// 註冊成功
    name: 'success',
    component: () => import('../views/success.vue')
  },
  {
    path: '/resetInput',// 忘記密碼
    name: 'resetInput',
    component: () => import('../views/resetInput.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
