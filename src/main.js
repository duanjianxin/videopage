import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import TouchEmulator from 'hammer-touchemulator/touch-emulator.js'
import 'normalize.css'
import 'animate.css'
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'
import router from './route/index.js'
Vue.use(VueFullpage)
TouchEmulator()
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')