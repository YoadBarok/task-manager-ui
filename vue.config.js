const { DefinePlugin } = require('webpack');
const { VuetifyPlugin } = require('webpack-plugin-vuetify')


module.exports = {
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      new DefinePlugin({
        'process.env.VUETIFY_USE_TREE_SHAKE': true
      })
    ]
  },

  pluginOptions: {
    plugins: [new VuetifyPlugin()],
    vuetify: {
    }
  }
};