import axios from 'axios'

const service = axios.create({
  baseURL: '/nin/mosai/', // 请求地址
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
    console.log(response, 'response')
    if (response.data.err_code !== 1) {
      return Promise.reject(response.data)
    }
    return response
  }
)
export default service
