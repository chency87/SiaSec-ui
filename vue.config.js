/* eslint-disable indent */
// const path = require('path');

module.exports = {
  publicPath: './', // 基本路径
  outputDir: 'dist', // 输出文件目录
  lintOnSave: true, // eslint-loader 是否在保存的时候检查
  devServer: {
    port: 8083, // 端口
    https: false, // 启用https
    // overlay: {
    //   warnings: true,
    //   errors: true,
    // }, // 错误、警告在页面弹出
    proxy: {
      '/bbbb': {
        target: 'http://localhost:8082',
        changeOrigin: true, // 允许websockets跨域
        // ws: true,
        pathRewrite: {
          '^/bbbb': '',
        },
      },
    }, // 代理转发配置，用于调试环境
  },
  // 第三方插件配置
  // pluginOptions: {},
};
