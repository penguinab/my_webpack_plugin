const postcss = require("postcss");
const path = require("path");
const fs = require("fs-extra");
function resolve(pathStr) {
    return path.resolve(__dirname, pathStr);
  }
const elementColorMapFunc = require(resolve("./color.js")).default;
let elmentColorMap = elementColorMapFunc();


// 解析
let resultPath = resolve("../../src/components/PenBtn2.js");
let fileStr = fs.readFileSync(resolve("../../src/components/PenBtn.css"));
let css = postcss.parse(fileStr);

// 循环处理
css.walkRules(function(rule) {
  let namesArr = [];
  rule.selectors.forEach((selector) => {
    namesArr.push(`div[data-ui="IBU"] ${selector}`);
  });
  namesArr.length && (rule.selectors = namesArr.concat());
  //   编辑属性键值
  rule.walkDecls((decl) => {
    // let { parent: rule, value, prop } = decl;
    // let nodes = rule.nodes;
    Object.entries(elmentColorMap).forEach(item=>{
      let [key,valueObj] = item
      valueObj.value===decl.value&&(decl.value=key)
    })
  });
});
let resultStr =`let resultStr=\`${css.toResult().toString()}\``
if (fs.existsSync(resultPath)) {
  fs.removeSync(resultPath);
}
fs.writeFileSync(resultPath, resultStr);