import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { NavBar, Col, Row } from 'vant'

import './assets/base.scss'

Vue.use(NavBar).use(Col).use(Row)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
