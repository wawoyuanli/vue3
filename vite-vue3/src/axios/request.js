import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  withCredentials: true,
  timeout: 15000,
});
service.defaults.headers.post['Content-Type'] = 'application/json'
service.interceptors.request.use(function (config) {
  if (config.url.includes('init')) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  return Promise.resolve(response.data)
}, function (error) {
  return Promise.reject(error);
});
export default service