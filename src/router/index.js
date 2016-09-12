import Vue from 'vue'
import Router from 'vue-router'

const inBrowser = typeof window !== 'undefined'
if (inBrowser) {
  Vue.use(require('vue-resource'))
}
Vue.use(Router)


import IndexVisitor from '../views/IndexVisitor.vue'
import Book from '../views/Book.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }), // '/item/:id(\\d+)'
  routes: [
    { path: '/', component: IndexVisitor },
    { path: '/book', component: Book },
    { path: '*', redirect: '/' }
  ]
})
