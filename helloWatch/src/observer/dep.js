let uid = 0

export default function Dep () {
  this.id = uid++
  this.subs = []
}

// type: watcher
Dep.target = null 

Dep.prototype.addSub = function (sub) {
  this.subs.push(sub)
}

Dep.prototype.depend = function () {
  Dep.target.addDep(this)
}

Dep.prototype.notify = function () {
  this.subs.forEach(sub => sub.update())
}
