import Vue from 'vue'
// import * as contract from '@/contract'
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
// svg 全局图标组件
import '@/icons'
import '@/directive/drag'

import _ from 'lodash'
Vue.prototype.$_ = _

Vue.use(ElementUI)
// import eth from './eth'

// eth.getWeb3().then(web3 => {
//   web3.eth.getAccounts().then(address => {
//     // web3.eth.getBalance(address[0]).then(console.log)
//     // contract.getERC20Balance('0xcc5586aaa2a22cb4e98866dbe8ecd01af6fad6b3', 18, address[0])
//     // 从链中，查询 nft 资产，也就是我对应的 图片资产
//     contract.getERC721Balance('0xcC445E7389Ca3fe659C565239cf0DF3864fa4A21', address[0])
//     // * @param {*} contractAddress erc721合约地址
//     // * @param {*} address 操作地址
//     // * @param {*} from erc721转出方
//     // * @param {*} to erc721接收方
//     // * @param {*} tokenId erc721 tokenId
//     // contract.erc721transfer('0xcC445E7389Ca3fe659C565239cf0DF3864fa4A21', address[0], address[0], '0xA7264347B7494B8eDc541C42691f17b2c18eae84', 1)
//   })
// })

// 全局混合器
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
