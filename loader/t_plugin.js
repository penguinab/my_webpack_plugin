
const ID = "penguin_plugin";
const NS_CSS = "penguin_loader_css";
const NS_JS = "penguin_loader_js";
const NS_HTML = "penguin_loader_html";
const path = require('path')
class TPlugin {
  constructor(options) {
    this.options = options;
  }
  hasLoader(loaders,name=NS_CSS){
    let Reg = new RegExp(name)
    let booleanResult=loaders.some(loader=>{
      return Reg.test(loader.loader)
    })
    return booleanResult
  }
  apply(compiler) {
    // this.comply.compilation.hook
    compiler.hooks.thisCompilation.tap(ID, (compilation) => {
      compilation.hooks.normalModuleLoader.tap(
        ID,
        (_, moduleContext) => {
          // &type=template &type=script
          // /\.vue\?vue&type=style/.test(moduleContext.userRequest)
          this.dealCss(moduleContext)
          this.dealJs(moduleContext)
          this.dealHtml(moduleContext)
        }
      );
    });
  }
  dealCss(moduleContext){
    if ( /\.vue\?vue&type=style/.test(moduleContext.userRequest)&&/components/.test(moduleContext.context)) {
      // ssr项目同构会有2次compiler，如果module中存在loader则不继续添加
      if (this.hasLoader(moduleContext.loaders, NS_CSS)) {
        return;
      }
      let loaderIndex = null;
      // 项目用了less，找到less-loader的位置
      moduleContext.loaders.forEach((loader, index) => {
        if (/css-loader/.test(loader.loader)) {
          loaderIndex = index;
        }
      });
      loaderIndex&&moduleContext.loaders.splice(loaderIndex, 0, {
        loader: path.resolve(__dirname, `${NS_CSS}.js`),
        options: this.options,
      });
      
    }
  }
  dealJs(moduleContext){
    if ( /\.vue\?vue&type=script/.test(moduleContext.userRequest)&&/components/.test(moduleContext.context)) {
      // ssr项目同构会有2次compiler，如果module中存在loader则不继续添加
      if (this.hasLoader(moduleContext.loaders, NS_JS)) {
        return;
      }
      let loaderIndex = null;
      // 项目用了less，找到less-loader的位置
      moduleContext.loaders.forEach((loader, index) => {
        if (/babel-loader/.test(loader.loader)) { //"C:\\Users\\penguin\\Desktop\\pen-css\\node_modules\\vue-loader\\lib\\index.js"
        // if (/vue-loader/.test(loader.loader)) {
          loaderIndex = index;
        }
      });
      loaderIndex&&moduleContext.loaders.splice(loaderIndex, 0, {
        loader: path.resolve(__dirname, `${NS_JS}.js`),
        options: this.options,
      });
    }
  }
  dealHtml(moduleContext){
    if ( /\.vue\?vue&type=template/.test(moduleContext.userRequest)&&/components/.test(moduleContext.context)) {
      // ssr项目同构会有2次compiler，如果module中存在loader则不继续添加
      if (this.hasLoader(moduleContext.loaders, NS_HTML)) {
        return;
      }
      let loaderIndex = null;
      // 项目用了less，找到less-loader的位置
      moduleContext.loaders.forEach((loader, index) => {
        // 获取非转换后的 原本的template标签内的内容
        if (/vue-loader/.test(loader.loader)) {
          loaderIndex = index;
        }
        // // 获取template render后的
        // if (/templateLoader/.test(loader.loader)) {
        //   loaderIndex = index;
        // }
      });
      loaderIndex&&moduleContext.loaders.splice(loaderIndex, 0, {
        loader: path.resolve(__dirname, `${NS_HTML}.js`),
        options: this.options,
      });
     
    }
  }
}

TPlugin.ID = ID;
module.exports = TPlugin;
