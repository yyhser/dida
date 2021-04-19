import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'
import '../src/assets/css/index.css'
import '../src/assets/icon/iconfont.css'
import MpvueRouterPatch from 'mpvue-router-patch'
Vue.use(MpvueRouterPatch)
const app = new Vue(App)
app.$mount()
