# Nestjs Demo

基于[nestjs](https://github.com/nestjs/nest)框架，使用ES6、ES7语法，基于ts编译

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