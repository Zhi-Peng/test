import Vue from 'vue'
import App from './App.vue'
import element from './components/element'
import router from './router'
import util from './util'
import Http from './request'
import 'element-ui/lib/theme-chalk/index.css'
import './style/base.css'

Vue.use(element)
Vue.config.productionTip = false

Vue.prototype.$http = new Http()
Vue.prototype.$util = util
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
