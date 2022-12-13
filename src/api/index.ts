// 配置axios
import axios from 'axios'

const http = axios.create({
  baseURL:
    'https://www.fastmock.site/mock/b7c562a03fcc1946be0bd09b2b30214f/api',
})

// 请求拦截器
http.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 响应拦截器
http.interceptors.response.use(res => {
  return res.data
})

export default http
