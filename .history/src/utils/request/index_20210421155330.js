import axios from 'axios'
import { getToken } from '@/utils/auth'
import { LIGHT } from '@/utils/console'
import Loading from './loading'
import errorHandle from './errorHandler'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 15000 // request timeout
})

const loading = new Loading()

// 请求拦截器 - header
service.interceptors.request.use(
  config => {
    // loading
    loading.showLoading()

    // header
    joinHeaders(config)

    return config
  },
  error => {
    // 请求失败 !
    console.log('%c请求失败!!!', LIGHT.red)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  // 成功处理
  (response) => {
    loading.hideLoading()
    return response.data
  },
  // 失败处理
  error => {
    loading.hideLoading()

    console.log('%c服务器错误!!!', LIGHT.red)
    console.log({
      // 请求信息
      ...error,
      // 错误信息
      message: error.message
    })

    errorHandle(error)

    return Promise.reject(error)
  }
)

export default service

function joinHeaders(config) {
  // 加入 token 消息头
  if (store.getters.token) {
    config.headers['Access-Token'] = getToken()
  }
  // 修改 content-type 为 text/plain
  config.headers['content-type'] = config.headers['content-type'] || 'text/plain'
}
