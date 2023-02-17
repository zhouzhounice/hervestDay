
// 让 babel 解析到 Node 和 TypeScript 环境下。
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
}
