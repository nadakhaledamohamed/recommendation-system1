// const { defineConfig } = require('@vue/cli-service')
var HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = defineConfig({
//   transpileDependencies: true,
  
// })


// vue.config.js
module.exports = {
  devServer: {
    historyApiFallback: true
  },
  configureWebpack: {
    // plugins: [
    //   new HtmlWebpackPlugin({
    //       template: './src/index.html'
    //   })
    // ],
    externals: {
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
  }
  // configureWebpack: { externals: ['vue', 'axios'] }
  // configureWebpack: {
  //   mode: 'development',
  //   resolve: {
  //       extensions: ['.js', '.vue']
  //   },
    // externals: {
    //     // global app config object
    //     config: JSON.stringify({
    //         apiUrl: 'http://localhost:4000'
    //     })
    // }
  // }
}