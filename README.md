<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="http://kamilmysliwiec.com/public/nest-logo.png#1" alt="Nest Logo" /></a>
</p>

# Nestjs Demo

基于[nestjs](https://github.com/nestjs/nest)框架的Demo，使用ES6、ES7语法，基于ts编译

Nest是构建高效，可扩展的Node.js服务器端应用程序的框架。它使用现代JavaScript，使用 TypeScript（保留与纯JavaScript的兼容性），并结合OOP（面向对象编程），FP（功能编程）和FRP（功能反应编程）的元素。

在引擎盖下，Nest使用Express，可以方便地使用各种可用的第三方插件。

## 一、依赖包 Install

建议使用yarn安装：

1. 如果本机没有安装过yarn，请先执行`npm install -g yarn`
2. 使用nrm管理npm源。使用nrm ls 查看各种源，使用nrm use taobao 使用淘宝镜像

Node 依赖包安装：
``` shell
> yarn install
```

## 二、启动服务

### 1. debug开发模式（使用nodemon）
``` shell
> npm run debug
```

### 2. 生成tsc
``` shell
> npm run prestart:prod
```

## 三、Demo 内容

1. config： 基于 node-config
2. database:  基于 sequelize
3. enum:  枚举常量
4. logger:  日志模块
5. middleware:  中间件
6. exception:  异常
7. filter:  异常过滤
...

## 四、Demo 请求
1. POST http://localhost:4000/api/demo/create
2. GET http://localhost:4000/api/demo/findAll
3. GET http://localhost:4000/api/demo/:index
4. GET http://localhost:4000/api/demo/noFound
5. GET http://localhost:4000/api/demo/exception


# 顺便附上大佬的一篇博文
  > [nestjs 介绍（二）](https://yangjdb.github.io/blog/2018/01/08/nest-1/)


**相信在node高速发展，框架群雄逐鹿的年代里，nestjs一定会大放光彩。**