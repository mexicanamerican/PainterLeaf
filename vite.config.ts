import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 修改编译目标后记得同步修改 check.ts 中的版本号
    target: ['chrome108', 'edge108', 'firefox101', 'safari15.4'],
    rollupOptions: {
      output: {
        manualChunks: {
          antd: ['antd', '@ant-design/icons'],
        },
      },
    },
  },
})
