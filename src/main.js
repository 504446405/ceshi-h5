import Vue from 'vue'
import App from './App'
import store from './store'
import momentjs from './common/moment.js'
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$timeFormat = (res) => {
  return momentjs(res).format("YYYY-MM-DD HH:mm:ss")
}
App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
