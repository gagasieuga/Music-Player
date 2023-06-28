import Vue from 'vue'
//router
import BasePage from './BasePage.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(BasePage),
}).$mount('#app')

