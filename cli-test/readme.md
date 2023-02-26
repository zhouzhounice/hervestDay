## 脚手架开发重难点

- 分包：将复杂的系统拆分成若干个模块

- 命令注册

- 参数解析

  `vue index [options] <params>`

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

- 初始化npm `npm index -y`

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

## 实现命令行UI显示

### 命令行渲染标准

- ANSI escape code

### 脚手架常用UI库

- chalk：颜色渲染
- ora：loading状态

## 实现命令行交互效果

核心实现目标：

- 键盘输入监听
- 命令行窗口尺寸计算
- 清屏
- 光标移动
- 输入流静默
- 输入输出流
- 事件库
- ansi escaped code

#### inquirer库使用

#### readline库使用

## 多package项目管理

使用lerna

## 脚手架开发流程

#### 脚手架初始化

1. 使用lerna创建package
2. 

#### 脚手架 命令注册和执行

#### 脚手架自动化测试



