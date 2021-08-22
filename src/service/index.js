import axios from 'axios'
import store from '@/store'
import * as api from '@/service/api'
// import { reject } from 'any-promise'
import { eth, web3 } from '@/connector'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: '/nin/mosai/', // 请求地址
  timeout: 40000, // request timeout
  withCredentials: true
})

/**
 * 对pbsui进行拦截，修改用户信息的时候需要token
 */
// request interceptor 拦截器
service.interceptors.request.use(async(config) => {
  config.headers['Accept'] = 'application/vnd.sd.v2+json'
  if (config.url === 'pbsui.do') {
    const token = store.state.walletAccount.user_token
    const userAddress = store.state.walletAccount.userAddress
    if (token) {
      config.headers['smid'] = token
    } else {
      console.log('无法获取token')
      const nonce = await getModifySignData().catch(err => console.log(err))
      if (nonce) {
        let signature = ''
        const message = `Welcome to Mosaique!\n\nI accept the Mosaique Terms of Service: https://mosaique.pro\n\nWallet address:\n${userAddress}\n\nNonce:\n${nonce}`
        await eth.personal.sign(web3.utils.fromUtf8(message), userAddress, (e, i) => {
          if (e && e.code === 4001) {
            // Message.error(e.message)
          }
          signature = i
        })
        if (signature) {
          const params = {
            address: userAddress,
            signature,
            message
          }
          const token = await getModifyToken(params).catch(err => console.log(err))
          console.log('--------token------', token)
          if (token) {
            store.commit('walletAccount/set_user_token', token)
            // const token = store.state.walletAccount.user_token
            config.headers['smid'] = token
          }
        }
      }
    }
  }
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    console.log(response, 'response')
    if (response.data.err_code !== 1) {
      return Promise.reject(response.data)
    }
    return response
  }
)

// 获取钱包签名的nonce
const getModifySignData = () => {
  const params = {
    address: store.state.walletAccount.userAddress
  }
  return new Promise((resolve, reject) => {
    api.getModifyParams(params).then(res => {
      console.log('--------nonce-------', res)
      if (res.data.nonce) {
        return resolve(res.data.nonce)
      }
    }, reject)
  })
}
// 获取Token
const getModifyToken = (params) => {
  return new Promise((resolve, reject) => {
    api.getModifyToken(params).then(res => {
      console.log('--------token-------', res)
      if (res.data.token) {
        return resolve(res.data.token)
      }
    }, reject)
  })
}
export default service
