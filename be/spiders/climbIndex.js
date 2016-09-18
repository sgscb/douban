let moment = require('moment')
let redis = require('redis')
let tools = require('../tools/imgTools')
let client = redis.createClient()

// 爬取首页数据
module.exports = function (superagent, cheerio, socket) {
  let url = 'http://www.douban.com'
  let _log = console.log
  console.log = function (data) {
    _log(data)
    socket.emit('news', data)
    _log.call(console, arguments)
  }
  socket.emit('system', '正在前往' + url + '...');

  superagent
  .get(url)
  .set({
    Referer: url,
    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:39.0) Gecko/20100101 Firefox/39.0'
  })
  .end(function (err, res) {
    if (err) {
      console.log('出现错误:' + url + '' + err)
      return
    }
    console.log('正在解析' + url);

    let $ = cheerio.load(res.text)
    tools($, superagent) // handle img

    let app_title = $('#anony-reg-new .app-title span').parent().text().trim()
    let app_version = $('#anony-reg-new .app-title span').text().trim()
    let app_slogan = $('#anony-reg-new .app-slogan span').text().trim()
    let lnk_app = $('#anony-reg-new .lnk-app').attr().href
    let expand_qr = $('#anony-reg-new #expand-qr img').attr().src
    let app_qr_expand = $('#anony-reg-new .app-qr-expand img').attr().src
    console.log(app_title);
    console.log(app_version);
    console.log(app_slogan);
    console.log(lnk_app);
    console.log(expand_qr);
    console.log(app_qr_expand);

    let yike_link = $('#anony-sns .side div').first().find('a').attr().href
    let yike_pic = $('#anony-sns .side div').first().find('a img').attr().src
    // console.log(yike_link);
    // console.log(yike_pic);

    let albums = []
    $('#anony-sns .albums ul li').each(function(index, el) {
      let title = $(el).find('a').text().trim()
      let link = $(el).find('a').attr().href
      let num = $(el).find('.num').text().trim()
      let pic = $(el).find('.pic a img').attr().src
      console.log(title);
      console.log(link);
      console.log(num);
      console.log(pic);
      albums.push({
        title: title,
        link: link,
        num: num,
        pic: pic
      })
    });

    let notes = []
    $('#anony-sns .main .mod .notes ul li').each(function(index, el) {
      let title, link, author, desc
      if (index === 0) {
        title = $(el).find('.title a').text().trim()
        link = $(el).find('.title a').attr().href
        author = $(el).find('.author').text().trim()
        desc = $(el).find('p').text().trim()
      } else {
        title = $(el).find('a').text().trim()
        link = $(el).find('a').attr().href
        author = 0;
        desc = 0;
      }
      console.log(title);
      console.log(link);
      console.log(author);
      console.log(desc);
      notes.push({
        title: title,
        link: link,
        author: author,
        desc: desc
      })
    });

    let onlines = []
    $('#anony-sns .side .online ul li').each(function(index, el) {
      if (index === 3) {
        return false;
      }
      let title = $(el).find('.title a').text().trim()
      let link = $(el).find('.title a').attr().href
      let time = $(el).find('.desc').text().trim().substring(0, $(el).find('.desc').text().trim().indexOf('日', 11) + 1)
      let desc = $(el).find('.desc span').text().trim()
      console.log(title);
      console.log(link);
      console.log(time);
      console.log(desc);
      onlines.push({
        title: title,
        link: link,
        time: time,
        desc: desc
      })
    });

    let book_side_links = []
    $('#anony-book .sidenav .side-links ul li').each(function(index, el) {
      let title = $(el).find('a').text().trim()
      let link = $(el).find('a').attr().href
      console.log(title);
      console.log(link);
      book_side_links.push({
        title: title,
        link: link
      });
    });

    let books = []
    $('#anony-book .main .mod').each(function(index, el) {
      let mod = []
      $(el).find('ul li').each(function(index, el) {
        let title = $(el).find('.title a').text().trim()
        let link = $(el).find('.pic a').attr().href
        let reader = $(el).find('.bn-link').attr().href
        let author = $(el).find('.author').text().trim()
        let price = $(el).find('.price').text().trim() | ''
        let pic = $(el).find('.pic a img').attr().src
        console.log(title);
        console.log(link);
        console.log(reader);
        console.log(author);
        console.log(price);
        console.log(pic);
        mod.push({
          title: title,
          link: link,
          reader: reader,
          author: author,
          price: price,
          pic: pic
        })
      })
      books.push(mod)
    })

    let book_tags = []
    $('#anony-book .side .book-cate-mod .cate').each(function(index, el) {
      let tags = []
      $(el).find('ul li').each(function(index, el) {
        let title = ''
        let link = ''
        if (index === 0) {
          title = $(el).text().trim()
        } else {
          title = $(el).find('a').text().trim()
          link = $(el).find('a').attr().href.trim()
        }
        console.log(title);
        console.log(link);
        tags.push({
          title: title,
          link: link
        })
      })
      book_tags.push(tags)
    })

    console.log = _log
    let obj = {
      'app': {
        'title': app_title.substring(0,2),
        'version': app_version,
        'slogan': app_slogan,
        'lnk_app': lnk_app,
        'expand_qr': expand_qr,
        'qr_expand': app_qr_expand,
      },
      'sns': {
        'yike': {
        'link': yike_link,
        'pic': yike_pic,
        },
        'albums': albums,
        'notes': notes,
        'onlines': onlines,
      },
      'book': {
        'book_side_links': book_side_links,
        'books': books,
        'book_tags': book_tags
      }
    }
    client.set('/api/douban/index', JSON.stringify(obj), function (err, data) {
      socket.emit('system', moment().format('YYYY-MM-DD h:mm:ss A'));
      if (err) {
        socket.emit('system', 'Redis Error!')
        return
      }
      socket.emit('system', 'Success!')
    })
    
  })
}