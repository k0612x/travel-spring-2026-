import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 关键：去掉.tsx后缀
import './index.css';

// 确保HTML加载完成后再渲染React，避免root元素找不到
window.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  // 空值判断，彻底避免null报错
  if (!rootElement) {
    console.error('根元素root未找到，请检查index.html');
    return;
  }
  // 渲染App组件
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
