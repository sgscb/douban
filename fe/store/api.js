import LRU from 'lru-cache'
import Vue from 'vue'
const superagent = require('superagent')
const host = 'http://127.0.0.1:8080/api/douban'
// const inBrowser = typeof window !== 'undefined'
// When using bundleRenderer, the server-side application code runs in a new
// context for each request. To allow caching across multiple requests, we need
// to attach the cache to the process which is shared across all requests.
// const cache = inBrowser
//   ? null
//   : (process.__API_CACHE__ || (process.__API_CACHE__ = createCache()))

// function createCache () {
//   return LRU({
//     max: 1000,
//     maxAge: 1000 * 60 * 15 // 15 min cache
//   })
// }

function fetch (url) {
  return new Promise((resolve, reject) => {
    superagent
   .get(host + url)
   .end((err,response) => {
      if (err) {
        console.log('error!' + url);
        return
      }
      console.log('success!' + url);
      resolve(JSON.parse(response.text))
    })
 })
}

export function fetchItem (url) {
  return fetch(url)
}



