# 豆瓣读书前端 
[![Build Status](https://travis-ci.org/jiakeqi/douban.svg?branch=douban)](https://travis-ci.org/jiakeqi/douban)

> vue.js 2.0, vuex, vue-router, vue-server-renderer,  express, cheerio, superagent, redis

## live demo 
http://book.jk77.me

## 1. Build

``` bash

# 启动 redis

# 安装依赖
npm install

# 启动在开发环境
npm run dev

# 初始化数据 / 爬虫启动
curl http://host:port/api/spider // 更替换成真实地址和端口号

# 启动在生产环境
npm run build

```

## 2. 注意

1. 请确认 `redis` 是 `start` 状态
2. 在浏览器中访问 http://127.0.0.1:4000/api/spider 启动爬虫
3. 目前完成的界面: 首页, 读书首页, 标签页, 列表页, 详情页

   http://127.0.0.1:4000/

   http://127.0.0.1:4000/book

   http://127.0.0.1:4000/tags
    
   http://127.0.0.1:4000/tag:name
   
   http://127.0.0.1:4000/subject:id
4. 增加了搜索功能，优化了排版， 但是豆瓣没有评论接口，所以只能等日后写爬虫解决


### 3. Vue.js1.0 更新到 Vue.js2.0 记录
1. 在2.0中 `Vue.set(store.item, item)` 不会触发更新dom, `store.item = item` 才可以
2. 由于 `server side render` 的原因, 不能使用 `vue-resource` 了, 改用 `superagent` 发请求了
3. `store.item` 为{}时, 在页面中引用 会直接error, 需要指定详细数据类型
6. v-html 替换了 {{{}}}
4. `webpack`出现了 mdzz 的错误 `Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.`
  解决办法为:

``` bash
$ npm uninstall webpack --save-dev

followed by

$ npm install webpack@2.1.0-beta.22 --save-dev

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
```

上面的 bug 已经被 尤大 fixed

### 4. 更新记录
2016 11 19 根据 i5ting 前辈的建议, 更改了目录结构
2016 12 01 fix babel error

### 5. 目录结构
<pre>
.
├── README.md 
├── build
├── index.html
├── server.js
├── frontend
│   ├── App.vue
│   ├── app.js
│   ├── assets
│   ├── client-entry.js
│   ├── components
│   ├── router
│   ├── server-entry.js
│   ├── store
│   └── views
├── backend
│   ├── spiders
│   └── routers
├── node_modules
├── package.json
├── public
└── test



