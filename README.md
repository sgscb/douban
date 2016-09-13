# 模仿豆瓣前端

> Use Vue.js 2.0, 

> vue.js(2.0 rc-5), vuex, vue-router, vue-server-renderer,  express, cheerio, superagent, mongoose(3.0+), redis

## 记录
1. 在2.0中 `Vue.set(store.item, item)` 不会触发更新dom, `store.item = item` 才可以
2. 由于 `server side render` 的原因, 不能使用 `vue-resource` 了, 改用 `superagent` 发请求了
3. `store.item` 为{}时, 在页面中引用 会直接error, mock数据, 请求成功再更新 

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
├── config
├── index.html
├── node_modules
├── package.json                                   // 依赖项
├── src
│   ├── App.vue                                    // App
│   ├── assets                                     // 资源文件
│   │   ├── Book.vue                               // 豆瓣读书首页(页面)
│   │   ├── IndexVisitor.vue                       // 未登录首页(页面)
│   │   ├── book                                   // 豆瓣读书首页组件
│   │   │   ├── BookRec.vue
│   │   │   ├── BookRow5.vue
│   │   │   ├── Ebooks.vue
│   │   │   ├── ExpressBooks.vue
│   │   │   ├── HotTags.vue
│   │   │   ├── MarketBooks.vue
│   │   │   ├── PopularAuthors.vue
│   │   │   ├── PopularBooks.vue
│   │   │   └── WeeklyTop.vue
│   │   ├── index                                  // 首页组件(未登录)
│   │   │   ├── IndexBook.vue
│   │   │   ├── IndexFooter.vue
│   │   │   ├── IndexHeader.vue
│   │   │   ├── IndexMore.vue
│   │   │   ├── IndexRegNew.vue
│   │   │   ├── IndexSideNav.vue
│   │   │   └── IndexSns.vue
│   │   └── pub                                   // 公用组件
│   │       ├── Vfooter.vue
│   │       ├── Vheader.vue
│   │       └── Vnav.vue
│   └── main.js                                   // 入口
├── static                                        // 静态文件
└── test                                          // 测试


