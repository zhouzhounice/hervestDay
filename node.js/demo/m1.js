// console.log(module)
// 用commonjs导出
var val = 'this is commonjs';
var str = 'str'

// 错误的导出方式 - 不应该给exports对象重新赋值 改变了原本的应用值
// module.exports = val;

// 1.正确的导出方式 1
// module.exports.val = val
// module.exports.str = str

// 2.正确的导出方式 2
exports.val = val
exports.str = str