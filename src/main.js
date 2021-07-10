import Vue from 'vue'

// css 重置替代方案
import 'normalize.css/normalize.css'
import './libs/animate/new.css'

// 全量引入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import store from './store'
import router from './router'
import '@/libs/rem'
console.log('etst')
// svg 全局图标组件
import '@/icons'

import '@/directive/drag'

Vue.use(ElementUI)

// 全局混合器
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
