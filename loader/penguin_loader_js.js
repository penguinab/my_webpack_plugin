// const loaderUtils = require("loader-utils");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
// const t = require('@babel/types');
// function delayNode(_path){
//   if (
//     _path.node.key &&
//     _path.node.key.name&&
//     _path.node.key.name ==='render'
//   ) {
//     console.log(_path);
//     console.log(1111);
//   }
// }
module.exports = function (source) {
  // const options = loaderUtils.getOptions();
  const ast = parser.parse(source, { sourceType: "module", plugins: ["jsx"] });
  console.log(111, ast, source);
  traverse(ast, {
    // ObjectProperty(_path) {
    //   delayNode(_path)
    // },
    // ObjectMethod(_path){
    //   delayNode(_path)
    // },
    ReturnStatement(_path){
      if (
        _path.parentPath.container.key&&
        _path.parentPath.container.key.name==='render'&&
        (_path.parentPath.container.type==='ObjectMethod'||_path.parentPath.container.type==='ObjectProperty')
      ) {
        console.log(_path.findParent(path=>path.isJSXElement()));
        console.log(_path.node);
        console.log(_path.node);
      }
    }
    // enter(path) {
    //   if (path.isIdentifier({ name: "n" })) {
    //     path.node.name = "x";
    //   }
    // },
    // ReturnStatement(obj){
    //   console.log(obj);
    // }
  });
  return source;
};
