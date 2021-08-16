const postcss = require("postcss");
const path = require("path");
const fs = require("fs-extra");
// const loaderUtils = require("loader-utils");
function resolve(pathStr) {
  return path.resolve(__dirname, pathStr);
}
const elementColorMapFunc = require(resolve("./util/color.js")).default;
let elmentColorMap = elementColorMapFunc();
module.exports = function (source) {
  // const options = loaderUtils.getOptions(this);
  let componentName =this.resourcePath.match(/components\\(.*)\.vue/)[1]
  let resultPath =path.resolve(__dirname,'../src/components/',`${componentName}.js`)
  let cssAst = postcss.parse(source);
  // 循环处理
  // eslint-disable-next-line no-unused-vars
  cssAst.walkRules(function (rule, index) {
    let namesArr = [];
    rule.selectors.forEach((selector) => {
      namesArr.push(`div[data-ui="IBU"] ${selector}`);
    });
    namesArr.length && (rule.selectors = namesArr.concat());
    //   编辑属性键值
    rule.walkDecls((decl) => {
      // let { parent: rule, value, prop } = decl;
      // let nodes = rule.nodes;
      Object.entries(elmentColorMap).forEach((item) => {
        let [key, valueObj] = item;
        valueObj.value === decl.value && (decl.value = key);
      });
    });
  });
  let resultStr =`let resultStr=\`${cssAst.toResult().toString().trim()}\``
  if (fs.existsSync(resultPath)) {
    fs.removeSync(resultPath);
  }
  fs.writeFileSync(resultPath, resultStr);
  return source;
};
