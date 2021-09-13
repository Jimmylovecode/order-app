// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import {routes} from './routes'
import axios from 'axios'
import {store} from './store/store'
Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.prototype.http = axios

axios.defaults.baseURL = "https://order-app-a7e37-default-rtdb.firebaseio.com/"
/* eslint-disable no-new */
const router = new VueRouter({
  routes:routes,
  mode:"history",
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition
    }else{
      return {x:0,y:0}
    }
  }
})

new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
