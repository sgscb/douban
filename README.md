# frontend_douban

> A Vue.js project to learn douban


## Clone

```
git clone https://github.com/jk77me/frontend-douban.git --depth 1
```




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


