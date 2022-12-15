// 配置axios
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8080/',
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
