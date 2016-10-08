const fs = require('fs')
const superagent = require('superagent')
const {host} = require('../../config.js')
const dir = './public/imgs/'

// 把豆瓣的图片保存到本地
module.exports = function ($) {
  $('img').each(function(index, el) {
      let url = $(el).attr().src
      if (url.indexOf('blank.gif') != -1 && $(el).attr()['data-origin']) {
         url = $(el).attr()['data-origin']
      } 
      let newUrl = url.substring(8, url.length).replace(/\//g,'')
      if (newUrl.indexOf('?v=') != -1) {
        newUrl = newUrl.substring(0, newUrl.indexOf('?v='))
      }
      $(el).attr('src', host() + '/imgs/' + newUrl)
      superagent(url).pipe(fs.createWriteStream(dir + newUrl))
    })
}