const postcss = require("postcss");
module.exports = function (source) {
  let cssAst = postcss.parse(source);
  console.log(cssAst);
  return source;
};
