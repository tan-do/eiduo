// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import $ from "jquery";

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)


/* 全局登录拦截 */
router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('token')
    if (to.matched.some(record => record.meta.requiresAuth) && (!token || token === null)) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //使用vuex
  components: { App },
  template: '<App/>'
})
