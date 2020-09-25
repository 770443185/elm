const path = require("path");
module.exports = {
  configureWebpack: {
  //   rules: [
  //     {
  //       test: /\.sass$/,
  //       loaders: ["style", "css", "sass"],
  //     },
  //   ],
  //   //     pluginOptions: {
  //   //       "style-resources-loader": {
  //   //         preProcessor: "scss",
  //   //         patterns: [
  //   //           //加上自己的文件路径，不能使用别名
  //   //           path.resolve(__dirname, "src/styles/_variables.scss"),
  //   //         ],
  //   //       },
  //   //     },
  //   //   },
  //   //   pluginOptions: {
  //   //     "style-resources-loader": {
  //   //       preProcessor: "sass",
  //   //       patterns: [
  //   //         path.resolve(__dirname, "./src/styles/*.scss"), //你的.scss文件所在目录
  //   //       ],
  //   //     },
    // alias:[
    //   {
    //     '@' : path.resolve(__dirname,'src'),
    //   }
    // ]
  },
  devServer: {
    proxy: {
      "/api": {
        target: "https://elm.cangdu.org",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};
