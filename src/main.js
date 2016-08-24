import App from './App'

var VueRouter = require('vue-router')
var VueResource = require('vue-resource')
var Vue = require('vue')
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true
Vue.http.options.root = 'http://127.0.0.1:3000'

var router = new VueRouter({hashbang: false, history: true})

router.map({
  '/': {
    component: (resolve) => {
      require(['./components/IndexVisitor'], resolve)
    }
  },
  '/book': {
    component: (resolve) => {
      require(['./components/Book'], resolve)
    }
  }
})

router.redirect({
  '*': '/'
})
router.start(App, '#app')
