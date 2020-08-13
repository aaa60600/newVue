import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeCopy from '../views/HomeCopy.vue'
import Login from '../views/Login.vue'
import NewAccount from '../views/NewAccount.vue'
import Forget from '../views/Forget.vue'
import success from '../views/success.vue'
import Resetpass from '../views/Resetpass.vue'

//步驟1. 建立頁面且引用
import pageExample from '../views/pageExample.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/HomeCopy',
    name: 'HomeCopy',
    component: HomeCopy
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
    path: '/Forget',// 忘記密碼
    name: 'Forget',
    component: () => import('../views/Forget.vue')
  },
  {
    path: '/pageExample',// 返回首頁
    name: 'pageExample',
    component: () => import('../views/pageExample.vue')
  },
  {
    path: '/Resetpass',// 設定新密碼
    name: 'Resetpass',
    component: () => import('../views/Resetpass.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
