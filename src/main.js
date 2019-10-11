// 入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/reset.css'
// 移动端1px问题：在高倍屏中1px被显示成多px
import './assets/styles/border.css'
// 300ms问题：某些机型某些浏览器触发click事件会延迟300ms，npm install fastclick --save,引入，绑定在body
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
