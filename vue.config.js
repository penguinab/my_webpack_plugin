const { resolve } = require("path");
module.exports = {
  chainWebpack(config) {
    // config.module.rule('vue').use('vue').loader('vue-loader').options({ presets: ['@babel/preset-env'] });
    // config.module
    //   .rule("vue")
    //   .use("vue")
    //   .loader("vue-loader")
    //   .tap((options) => {
    //     return {
    //       ...options,
    //       postLoaders: {
    //         js: resolve(__dirname, "./loader/t_loader.js"),
    //         // html: resolve(__dirname, "./loader/t_loader.js")
    //       },
    //       excludedPreLoaders: /(eslint-loader)/
    //     };
    //   });
    // return config;
    config.plugin("penguin").use(resolve(__dirname, "./loader/t_plugin.js"));
  },
};
