var csstree = require('css-tree');

// parse CSS to AST
var ast = csstree.parse(`.example { world: "!" } .el-button:focus,
.el-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}`);

// traverse AST and modify it
csstree.walk(ast, function(node) {
    if (node.type === 'ClassSelector') {
        node.name = `${node.name}[data-ui=ibu]`;
    }
    if(node.type==='Hash'){
        node.value='@@primary'
    }
    if(node.type=='Function'&&node.name==='rgba'){
        // node.children.value='@@primary'
        node.type='Hash'
        node.value='@@border1'
    }
});

// generate CSS from AST
console.log(csstree.generate(ast));
// .hello{world:"!"}