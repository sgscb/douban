import App from './App'

var Vue = require('vue')
var VueRouter = require('vue-router')
var VueResource = require('vue-resource')
Vue.use(VueResource)
Vue.use(VueRouter)

var router = new VueRouter({hashbang: false, history: true})
Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true

router.map({
  '/': {
    component: App
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/'
})
router.start(App, '#app')
