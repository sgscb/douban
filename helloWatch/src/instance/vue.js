import Watcher from '../watcher'
import {observe} from '../observer'

export default function Vue(options) {
  this.$options = options
  this._initState()
}

Vue.prototype._initState = function () {
  let data = this._data = this.$options.data
  Object.keys(data).forEach(key => this._proxy(key))
  observe(data, this)
}

Vue.prototype.$watch = function (expOrFn, fn, options) {
  new Watcher(this, expOrFn, fn)
}

Vue.prototype._proxy = function (key) {
  var self = this
  Object.defineProperty(self, key, {
    enumerable: true,
    configurable: true,
    get: function proxyGetter () {
      return self._data[key]
    },
    set: function proxySetter (val) {
      console.log(val);
      self._data[key] = val
    }
  })
}