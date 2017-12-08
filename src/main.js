// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Cube from 'cube-ui'
// import Confirm from './components/common/confirm/Confirm'
import UIPlugins from './components/index'

Vue.config.productionTip = false

Vue.use(UIPlugins)
// Vue.component(Confirm.name, Confirm)
// Vue.prototype.$confirm = Confirm

// Vue.use(Cube)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
