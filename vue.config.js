// 查看包体积大小，更方便后期优化
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const isProduction = process.env.NODE_ENV === 'production'
const path = require('path');
const resolve = (dir) => {
  return path.join(__dirname, dir);
}

const target = 'http://192.168.123.182:3000'

module.exports = {
  productionSourceMap: false,
  publicPath: './',
  outputDir: 'dist',
  chainWebpack: (config) => {
    // 自行习惯配置
    config.resolve.alias.set('@', resolve('src'));
  },
  devServer: {
    port: 8099,
    proxy: {
      '/api': {
        target: target,
        changeOrigin: true,
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
      }
    }
  },
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      sass: {
        // 这里的选项会传递给 postcss-loader
      }
    }
  },
  configureWebpack: (config) => {
    if (isProduction) {
      return {
        plugins: [
          new BundleAnalyzerPlugin()
        ]
      }
    }
  }
};

