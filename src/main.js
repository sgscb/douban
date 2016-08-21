import App from './App'
import Book from './components/book/book'
var Vue = require('vue')
var VueRouter = require('vue-router')
var VueResource = require('vue-resource')
Vue.use(VueResource)
Vue.use(VueRouter)

var router = new VueRouter({hashbang: false, history: true})
Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true
Vue.http.options.root = 'http://127.0.0.1:3000'

router.map({
  '/': {
    component: App
  },
  '/book': {
    component: Book
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/'
})
router.start(App, '#app')
