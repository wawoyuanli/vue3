import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath,URL} from 'node:url'
console.log(import.meta,'env')
export default defineConfig({
  plugins: [
    vue(),
    // Components({
    // resolvers:[VantResolver]
    // })
  ],
  resolve:{
    alias:{
      '@':fileURLToPath(new URL('./src',import.meta.url)),
      '@/views':fileURLToPath(new URL('./src/views',import.meta.url))
    }
  },
  build:{
    cssCodeSplit:true, //如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
    sourcemap:false,//构建后是否生成 source map 文件。如果为 true，将会创建一个独立的 source map 文件
    target:'modules',//设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值——'modules'  还可设置为 'es2015' 'es2016'等
    chunkSizeWarningLimit:500, //单位kb  打包后文件大小警告的限制 (文件大于此此值会出现警告)
    minify:'terser',
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境去除console
        drop_debugger: true, // 生产环境去除debugger
      },
    },
  
  },
  server:{
    port:'8089',
    host:'localhost',
    // proxy:{
    //   '/api':{
    //     target:'https://tpwxtest.life.cntaiping.com',//将所有以/api开头的请求都转发到http://localhost:3000这个地址上
    //     changeOrigin:true,
    //     rewrite:path =>path.replace(/^\/api/,'')
    //   }
    // },
    proxy:{
      '/api':{
        target:'https://tpwxtest.life.cntaiping.com',//将所有以/api开头的请求都转发到http://localhost:3000这个地址上
        changeOrigin:true,
        rewrite:path =>path.replace(/^\/api/,'')
      }
    }
  }
})
