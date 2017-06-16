// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/js/response'
import './assets/main.less'
import 'less'
import 'less-loader'
import router from './router'
import store from './vuex/store'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: './assets/image/list_img.png',//这个是请求失败后显示的图片
  // error: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',
  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',//这个是加载的loading过渡效果
  attempt: 1,
  try: 2 // 这个是加载图片数量
})

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
