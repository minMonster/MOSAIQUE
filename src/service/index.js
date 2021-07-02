import axios from 'axios'

const service = axios.create({
  baseURL: , // 请求地址
  timeout: 40000, // request timeout
  withCredentials: true
})

// request interceptor 拦截器
service.interceptors.request.use(config => {
  config.headers['Accept'] = 'application/vnd.sd.v2+json'
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    return response
  }
)
export default service
