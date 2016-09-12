import LRU from 'lru-cache'
import Vue from 'vue'

const inBrowser = typeof window !== 'undefined'

// When using bundleRenderer, the server-side application code runs in a new
// context for each request. To allow caching across multiple requests, we need
// to attach the cache to the process which is shared across all requests.
const cache = inBrowser
  ? null
  : (process.__API_CACHE__ || (process.__API_CACHE__ = createCache()))

function createCache () {
  return LRU({
    max: 1000,
    maxAge: 1000 * 60 * 15 // 15 min cache
  })
}

function fetch (url) {
  if (cache && cache.has(url)) {
    return Promise.resolve(cache.get(url))
  } else {
   Vue.http
   .get('api/douban/index')
   .then((response) => {
      console.log(response.data)
      cache && cache.set(response.data, val)
      return response.data
    }, 
    (response) => {
    })
  }
}

export function fetchIndexData (url) {
  this.$http.get(url).then((response) => {
    console.log(response.data)
  }, (response) => {
  })
}