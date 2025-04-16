import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  // 配置别名
  resolve: {
    alias: {
      '@': resolve('src'),
    },
    // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
})
