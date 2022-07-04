import axios from 'axios'
axios.defaults.timeout = 10000

axios.defaults.withCredentials = true// 允许跨域设置，不然可能因为拿不到cookie而报错

axios.defaults.baseURL = 'http://localhost:3000/'   /*这里的地址就是刚刚启起来的服务器地址  */

// 封装get请求
export const get = (url, params) => {
  if (!params) params = {}
  return axios.get(url, { params })
    .then(res => res.data)
    .catch(error => { console.error(error); })
}

// 封装post请求
export const post = (url, data, headers, params) => {
  if (!params) params = {}
  return axios.post(
    url, data, { headers, params }
  ).then(res => res.data)
    .catch(error => { console.error(error); })
}