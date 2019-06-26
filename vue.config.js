const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  chainWebpack: config => {
    /* 添加分析工具*/
    if (process.env.NODE_ENV === "production") {
      if (process.env.npm_config_report) {
        config
          .plugin("webpack-bundle-analyzer")
          .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin)
          .end();
        config.plugins.delete("prefetch");
      }
    }
  },
  // css: {
  //   // 是否使用css分离插件 ExtractTextPlugin
  //   extract: false,
  //   // 开启 CSS source maps?
  //   sourceMap: false,
  //   // css预设器配置项
  //   loaderOptions: {},
  //   // 启用 CSS modules for all css / pre-processor files.
  //   modules: false
  // },
  productionSourceMap: false,
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === "production") {
  //     // 为生产环境修改配置...
  //     config.mode = "production";
  //     return {
  //       plugins: [
  //         new CompressionPlugin({
  //           test: /\.js$|\.html$|\.css/, //匹配文件名
  //           threshold: 10240, //对超过10k的数据进行压缩
  //           deleteOriginalAssets: false //是否删除原文件
  //         })
  //       ]
  //     };
  //   }
  // }
};
// const path = require('path');
// const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

// module.exports = {
//   configureWebpack: (config)=>{
//     config.plugins.push(new SkeletonWebpackPlugin({
//       webpackConfig: {
//         entry: {
//           app: path.join(__dirname, './src/skeleton.js'),
//         },
//       },
//       minimize: true,
//       quiet: true,
//     }))
//   },
//   // css相关配置
//   css: {
//     // 是否使用css分离插件 ExtractTextPlugin
//     extract: true,
//     // 开启 CSS source maps?
//     sourceMap: false,
//     // 启用 CSS modules for all css / pre-processor files.
//     modules: false
//   },
// };
