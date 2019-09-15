import Vue from 'vue'
import Router from 'vue-router'
// @是src目录
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
