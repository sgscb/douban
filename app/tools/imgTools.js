var os = require('os')
var IPv4 = ''
var fs= require('fs')
var dir = './public/images/';

// 获取ip
for(var i=0;i<os.networkInterfaces().en0.length;i++){
    if(os.networkInterfaces().en0[i].family=='IPv4'){
        IPv4=os.networkInterfaces().en0[i].address;
    }
}

// 把豆瓣的图片保存到本地
module.exports = function ($, superagent) {
  $('img').each(function(index, el) {
      var url = $(el).attr().src
      if (url.indexOf('blank.gif') != -1 && $(el).attr()['data-origin']) {
         url = $(el).attr()['data-origin']
      } 
      var newUrl = url.substring(8, url.length).replace(/\//g,'')
      if (newUrl.indexOf('?v=') != -1) {
        newUrl = newUrl.substring(0, newUrl.indexOf('?v='))
      }
      $(el).attr('src', 'http://' + IPv4 + ':3000' + '/images/' + newUrl)
      superagent(url).pipe(fs.createWriteStream(dir + newUrl))
    })
}