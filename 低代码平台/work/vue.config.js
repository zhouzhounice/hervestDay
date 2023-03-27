const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',

  //lintOnSave:false,  //取消eslint 提醒
})
