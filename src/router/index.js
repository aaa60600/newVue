import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import NewAccount from '../views/NewAccount.vue'

//步驟1. 建立頁面且引用
import pageExample from '../views/pageExample.vue'
=======
import Home from './../components/Home.vue';

>>>>>>> 0a749e5eba20553b0ded83feb35425c152b13236
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
<<<<<<< HEAD
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
=======
>>>>>>> 0a749e5eba20553b0ded83feb35425c152b13236
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
