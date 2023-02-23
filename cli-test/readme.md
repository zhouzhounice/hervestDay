## 脚手架开发重难点

- 分包：将复杂的系统拆分成若干个模块

- 命令注册

- 参数解析

  `vue command [options] <params>`

- options全称:--help --version

- options简写:-V -h

- 带参数的options: --path /xx/xx/..

- 帮助文档

  - global help
    - Usage
    - Options
    - Commands

- 命令行交互
- 日志打印
- 命令行文字变色
- 网络通信:HTTP/WebSocker
- 文件处理

## 脚手架开发流程

- 初始化npm `npm init -y`

- 创建脚手架入口文件，在文件最上方添加 `#!/usr/bin/env node`

- 配置package.json，添加bin属性

  ```json
  {
      "bin":"bin/index.js"
  }
  ```

- 编写脚手架代码

- 将脚手架发布的npm包

  **注：**npm publish时报403错误原因，重名了