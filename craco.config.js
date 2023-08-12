const path = require('path')
const CracoLessPlugin = require('craco-less');
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const resolve = pathname => path.resolve(__dirname, pathname)
// const env = process.env.REACT_APP_ENV;
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@": resolve("src")
    },
    // plugins: [
    //   new BundleAnalyzerPlugin({
    //     analyzerMode: env !== 'development' ? 'server' : 'disabled',
    //     analyzerHost: '127.0.0.1',
    //     analyzerPort: 8888,
    //     openAnalyzer: true,
    //     reportFilename: resolve("analyzer/index.html"),
    //   }),
    // ],
    // configure: (webpackConfig, { env: webpackEnv, paths }) => {
    //   webpackConfig.externals = {
    //     'ckeditor5-custom-build': 'ClassicEditor',
    //   };
    //   webpackConfig.optimization.splitChunks = {
    //     ...webpackConfig.optimization.splitChunks,
    //     cacheGroups: {
    //       base: {
    //         // 基本框架
    //         chunks: 'all',
    //         test: /(react|react-dom|react-dom-router)/,
    //         name: 'base',
    //         priority: 100,
    //       },
    //       commons: {
    //         chunks: 'all',
    //         // 将两个以上的chunk所共享的模块打包至commons组。
    //         minChunks: 2,
    //         name: 'commons',
    //         priority: 80,
    //       },
    //     },
    //   };
    //   return webpackConfig;
    // },
  },
  // babel: {
  //   plugins: [
  //     [// antd 的按需加载用和自动引入样式文件
  //       'import',
  //       {
  //         libraryName: 'antd',
  //         libraryDirectory: 'es',
  //         style: true,
  //       },
  //     ]
  //   ],
  // }
}