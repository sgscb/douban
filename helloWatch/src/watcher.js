import Dep from './observer/dep'

let uid = 0

export default function Watcher (vm, expOrFn, cb) {
  this.cb = cb
  this.vm = vm
  this.id = uid++
  this.expOrFn = expOrFn
  this.value = this.get()
}

Watcher.prototype.update = function () {
  const value = this.get()
  if (value != this.value) {
    this.value = value
    this.cb.call(this.vm)
  }
}

Watcher.prototype.addDep = function (dep) {
  dep.addSub(this)
}

Watcher.prototype.get = function () {
  Dep.target = this
  const value = this.vm._data[this.expOrFn]
  // after get value, set null
  Dep.target = null
  // console.log(this.vm._data)
  return value
}