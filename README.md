# 模仿豆瓣前端
[![Build Status](https://travis-ci.org/jiakeqi/frontend-douban.svg?branch=douban)](https://travis-ci.org/jiakeqi/douban)
> Use Vue.js 2.0, 

> vue.js(2.0 rc-5), vuex, vue-router, vue-server-renderer,  express, cheerio, superagent, mongoose(3.0+), redis

## 注意

1. 请确认 `redis` 是 `start` 状态
2. 在浏览器中访问 http://127.0.0.1:8080/api/spider 启动爬虫

## 记录
1. 在2.0中 `Vue.set(store.item, item)` 不会触发更新dom, `store.item = item` 才可以
2. 由于 `server side render` 的原因, 不能使用 `vue-resource` 了, 改用 `superagent` 发请求了
3. `store.item` 为{}时, 在页面中引用 会直接error, mock数据, 请求成功再更新 
4. `webpack`出现了 mdzz 的错误 `Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.`
  解决办法为:

``` bash
npm uninstall webpack --save-dev

followed by

npm install webpack@2.1.0-beta.22 --save-dev

Then you should be able to gulp again. Fixed the issue for me.
```

然后 `npm run dev` 即可, 蜜汁玄学
参考: https://github.com/angular/angular-cli/issues/2234

````html
<div>
  <span v-for="n in 10">{{ n }}</span> // 需要指定n
</div>
<div>
  <span v-for="(item, $index) in items">{{ $index }}</span> // 需要显示声明$index
</div>
````

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 目录结构
<pre>
.
├── README.md 
├── build
├── index.html
├── server.js
├── fe
│   ├── App.vue
│   ├── app.js
│   ├── assets
│   ├── client-entry.js
│   ├── components
│   ├── router
│   ├── server-entry.js
│   ├── store
│   └── views
├── be
│   ├── models
│   ├── spiders
│   ├── tools
│   └── routers
├── node_modules
├── package.json
├── public
└── test



