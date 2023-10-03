import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from '@/router/router'//路由
import Vant from 'vant' //按需引入
import 'vant/lib/index.css' //vant样式
let app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(Vant)
app.mount('#app')
console.log(import.meta.env, '环境变量')
