import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import IndexVisitor from '../views/IndexVisitor.vue'
import Book from '../views/Book.vue'
import BookSubject from '../views/BookSubject.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }), // '/item/:id(\\d+)'
  routes: [
    { path: '/', component: IndexVisitor },
    { path: '/book', component: Book },
    { path: '/subject/:id(\\d+)', component: BookSubject},
    { path: '*', redirect: '/' }
  ]
})
