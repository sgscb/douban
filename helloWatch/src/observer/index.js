import Dep from './dep'

export function Observer (value) {

  this.dep = new Dep()
  this.value = value
  // if isArray do some....
  this.walk(value)
}

Observer.prototype.walk = function (obj) {
  Object.keys(obj).forEach(key => this.convert(key, obj[key]))
}

Observer.prototype.convert = function (key, val) {
  defineReactive(this.value, key, val)
}

export function defineReactive (obj, key, val) {
  var dep = new Dep()

  var property = Object.getOwnPropertyDescriptor(obj, key)
  // 是否允许修改
  if (property && property.configurable === false) {
    return
  }

  // 获取预先定义好的 get set 函数 (作者真机智)
  var getter = property && property.get
  var setter = property && property.set

  var childOb =  observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: () => {
      var value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
        }
        // if isArray do some....
      }
      return value
    },
    set: (newVal) => {
      var value = getter ? getter.call(obj) : val
      if (value === newVal) {
        return
      }
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      childOb =  observe(newVal)
      dep.notify()
    }
  })
}

// 进行观察
export function observe (val) {

  if (!val || typeof val !== 'object') {
    return
  }
  // console.log(val);
  return  new Observer(val)
}