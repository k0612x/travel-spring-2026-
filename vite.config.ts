import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // 打包输出目录，和Vercel默认匹配
    sourcemap: false, // 关闭源码映射，加快打包速度
  },
  esbuild: {
    // 忽略类型检查错误，避免打包被卡住
    tsconfigRaw: '{"compilerOptions": {"ignoreDeprecations": "5.0"}}'
  }
});
