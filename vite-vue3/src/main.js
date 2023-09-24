import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/router'//路由
import {Button,Swipe,SwipeItem} from 'vant' //按需引入
import 'vant/lib/index.css' //vant样式
let app = createApp(App)
app.use(router)
app.use(Button)
app.use(Swipe)
app.use(SwipeItem)
app.mount('#app')
console.log(import.meta.env,'环境变量')
