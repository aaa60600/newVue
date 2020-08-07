import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//步驟1. 建立頁面且引用
import pageExample from '../views/pageExample.vue';
// import Home from './../components/Home.vue';

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
    path: '/NewAccount',
    name: 'NewAccount',
    component: () => import('../views/NewAccount.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
