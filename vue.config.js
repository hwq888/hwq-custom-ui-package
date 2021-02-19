module.exports = {
  publicPath: './', // build打包配置相对路径
  // outputDir: 'dist', // 打包文件夹
  // assetsDir: './static', // 打包静态文件路径
  // productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: { // 配置代理
      '/sso-service': {
        // target: 'http://10.10.20.204:9999', // 卢晓文
        target: 'http://sso.gz-hzed.com', // 测试环境
        changeOrigin: true, // 是否改变域名
        ws: true,
        pathRewrite: {
          '/sso-service': '/sso-service'
        }
      }
    }
  },
  configureWebpack: {
    output: {
      libraryExport: 'default' // 配置-默认导出
    }
  },
  css: {
    extract: false // 强制内联
  }
}
