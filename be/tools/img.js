var os = require('os')
var IPv4 = ''
var fs= require('fs')
var dir = './public/images/'

// 获取ip
var ifaces = os.networkInterfaces()

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname + ':' + alias, iface.address)
      IPv4 = iface.address
    } else {
      // this interface has only one ipv4 adress
      console.log(ifname, iface.address)
      IPv4 = iface.address
    }
    ++alias
  })
})



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
      $(el).attr('src', 'http://' + IPv4 + ':8080' + '/images/' + newUrl)
      superagent(url).pipe(fs.createWriteStream(dir + newUrl))
    })
}