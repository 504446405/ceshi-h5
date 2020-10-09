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
if (window.location && window.location.search) {
  let url = window.location.search;
  let theRequest = url.split("=");
  store.commit('setDeviceId', theRequest[1])
}
store.commit('setDeviceId', 4903906721058310)
const app = new Vue({
  ...App,
  store
})
app.$mount()
