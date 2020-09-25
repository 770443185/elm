import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// rem 适配
import './utils/rem'
// // 第三方组件
// import * as viewDesign from 'view-design'
// Vue.use(viewDesign)
import 'view-design/dist/styles/iview.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
