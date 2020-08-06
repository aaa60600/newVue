// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import Vue from 'vue/dist/vue.esm.js'
import App from './App'
import router from './router'//引入路由配置
import ElementUI from 'element-ui'


//建立和掛載根例項，通過router 配置引數注入路由，從而讓整個應用都有路由功能

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  renfer: h =>(App)
})