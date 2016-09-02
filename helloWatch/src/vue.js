import Vue from './instance/vue'

const v = new Vue({
  data: {
    a: 1
  }
})

v.$watch('a', () => {
  console.log('我看到你们了')
})

setTimeout( () => {
  v.a = 45
},1000) 

setTimeout( () => {
  v.b = {}
},1000)