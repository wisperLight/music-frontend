import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/global.css'
import './assets/css/style.css'
import './plugins/element.js'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
