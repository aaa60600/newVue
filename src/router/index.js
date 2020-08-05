import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
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
    path: '/pageExample',
    name: 'pageExample',
    component: pageExample
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
