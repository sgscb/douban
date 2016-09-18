let moment = require('moment')
let redis = require('redis')
let tools = require('../tools/imgTools')
let client = redis.createClient()

// 爬取首页数据
module.exports = function (superagent, cheerio, socket) {
  let url = 'http://book.douban.com/'
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

    let booksExpress = []
    $('#wrapper #content .article .books-express .bd .carousel .slide-list ul').each(function(index, parentEl) {
      let items = []
      $(parentEl).find('li').each(function(index, el) {

        let link = $(el).find('.cover a').attr().href
        let pic = $(el).find('.cover a img').attr().src
        let title = $(el).find('.info .title a').text().trim()
        let author = $(el).find('.info .author').first().text().trim()
        let year = $(el).find('.info .more-meta .year').text().trim()
        let publisher = $(el).find('.info .more-meta .publisher').text().trim()
        let abstract = $(el).find('.info .more-meta .abstract').text().trim()
        console.log('---------------')
        console.log(link)
        console.log(pic)
        console.log(title)
        console.log(author)
        console.log(year)
        console.log(publisher)
        console.log(abstract)
        items.push({
          link: link,
          pic: pic,
          title: title,
          author: author,
          year: year,
          publisher: publisher,
          abstract: abstract
        })
      });
      booksExpress.push(items)
    })

    let popularBooks = []
    $('#wrapper #content .article .popular-books .bd ul li').each(function(index, el) {
      let link = $(el).find('.cover a').attr().href
      let pic = $(el).find('.cover a img').attr().src
      let title = $(el).find('.info .title a').text().trim()
      let score = $(el).find('.info .entry-star-small .average-rating').text().trim()
      let author = $(el).find('.info .author').text().trim()
      let type = $(el).find('.info .book-list-classification').text().trim()
      let reviews = $(el).find('.info .reviews').text().trim()
      let commenter = $(el).find('.info .reviews a').text().trim()
      reviews = reviews.replace('(' + commenter + ')', '')
      console.log('---------------')
      console.log(link)
      console.log(pic)
      console.log(title)
      console.log(author)
      console.log(type)
      console.log(reviews)
      console.log(commenter)
      popularBooks.push({
        link: link,
        pic: pic,
        title: title,
        author: author,
        type: type,
        reviews: reviews,
        commenter: commenter
      })
    })

    let marketBooksBdEl = $('#wrapper #content .article .market-books .bd')
    var marketBooksStyle = $(marketBooksBdEl).find('.top .cover a .pic').attr().style
    let marketBooksPic = marketBooksStyle.substring(marketBooksStyle.indexOf('url(') + 4, marketBooksStyle.indexOf(')'))
    let marketBooksTop = {
      link: $(marketBooksBdEl).find('.top .cover a').attr().href,
      pic: marketBooksPic,
      title: $(marketBooksBdEl).find('.top #market_books_header_info .title').text(),
      price: $(marketBooksBdEl).find('.top #market_books_header_info .title .price').text(),
      desc: $(marketBooksBdEl).find('.top #market_books_header_info .desc').text()
    }
    

    console.log(marketBooksPic);
    console.log('2333333');
    console.log(marketBooksTop)

    let marketBooksItems = []
    $(marketBooksBdEl).find('ul li').each(function(index, el) {
      let link = $(el).find('.cover a').attr().href
      let pic = $(el).find('.cover a img').attr().src
      let title = $(el).find('.info .title a').text().trim()
      let price = $(el).find('.info .price').text().trim()
      console.log('---------------')
      console.log(link)
      console.log(pic)
      console.log(title)
      console.log(price)
      marketBooksItems.push({
        link: link,
        pic: pic,
        title: title,
        price: price
      })
    })
    let marketBooks = {
      top: marketBooksTop,
      items: marketBooksItems
    }

    let ebooks = []
    $('#wrapper #content .article .ebook-area .bd .sub-section .sub-bd ul li').each(function(index, el) {
      let link = $(el).find('.cover a').attr().href
      let pic = $(el).find('.cover a img').attr().src
      let title = $(el).find('.info .title a').text().trim()
      let price = $(el).find('.info .more-meta .price').text().trim()
      let author = $(el).find('.info .more-meta .author').first().text().trim()
      let year = $(el).find('.info .more-meta .year').text().trim()
      let publisher = $(el).find('.info .more-meta .publisher').text().trim()
      let abstract = $(el).find('.info .more-meta .abstract').text().trim()
      console.log('---------------')
      console.log(link)
      console.log(pic)
      console.log(title)
      console.log(price)
      console.log(author)
      console.log(year)
      console.log(publisher)
      console.log(abstract)
      let item = {
        link: link,
        pic: pic,
        title: title,
        price: price,
        author: author,
        year: year,
        publisher: publisher,
        abstract: abstract
      }
      ebooks.push(item)
    })

    let popularAuthors = []
    $('#wrapper #content .article .popular-authors .bd ul li').each(function(index, el) {
      let name = $(el).find('.userface').attr().alt
      let pic = $(el).find('.userface').attr().src
      let link = $(el).find('.w210 p').first().find('a').attr().href
      let to = $(el).find('.entry-star-small .fleft').text().trim()
      let info = $(el).find('.w210 p')['2'].children[1].children[0].data
      let num = $(el).find('.color-gray span').first().text().trim()
      let time = $(el).find('.color-gray span').last().text().trim()
      console.log('---------------')
      console.log(link)
      console.log(pic)
      console.log(name)
      console.log(info)
      console.log(to)
      console.log(num)
      console.log(time)
      popularAuthors.push({
        link: link,
        pic: pic,
        name: name,
        to: to,
        info: info,
        num: num,
        time: time
      })
    })

    let hotTags = []
    $('#wrapper #content .aside .hot-tags-col5').children('li').each(function(index, parentEl) {
      let items = []
      $(parentEl).find('ul li').each(function(index, el) {
        let title, link = ''
        if (index === 0) {
          title = el.children[0].data.trim()
          link = null
        } else {
          title = $(el).find('a').text()
          link = 'https://book.douban.com' + $(el).find('a').attr().href
        }
        console.log(title)
        console.log(link)
        items.push({
          title: title,
          link: link
        })
      })
      hotTags.push(items)
    })

    let weeklyTop = []
     $('#wrapper #content .aside .weekly-top .bd .list').each(function(index, parentEl) {
       let items = []
       $(parentEl).find('.item').each(function(index, el) {
         let title = $(el).find('.book-info a').text()
         let link = $(el).find('.book-info a').attr().href
         let author = $(el).find('.book-info .author').text()
         let buy = $(el).children('a')['0'].attribs
         console.log(title)
         console.log(link)
         console.log(author)
         console.log(buy)
         items.push({
          title: title,
          link: link,
          author: author,
          buy: buy
         })
       })
       weeklyTop.push(items)
     })

     let bookRec = []
     $('#wrapper #content .block5 #book_rec dl').each(function(index, el) {
       let link = $(el).find('dd a').attr().href
       let pic = $(el).find('dt a img').attr().src
       let title = $(el).find('dd a').text().trim()
       console.log(title)
       console.log(link)
       console.log(pic)
       bookRec.push({
         title: title,
         link: link,
         pic: pic
       })
     })
    
    let obj = {
      booksExpress: booksExpress,
      marketBooks: marketBooks,
      ebooks: ebooks,
      popularBooks: popularBooks,
      popularAuthors: popularAuthors,
      weeklyTop: weeklyTop,
      hotTags: hotTags,
      bookRec: bookRec
    }
    client.set('/api/douban/book', JSON.stringify(obj), function (err, data) {
      socket.emit('system', moment().format('YYYY-MM-DD h:mm:ss A'));
      if (err) {
        socket.emit('system', 'Redis Error!')
        return
      }
      socket.emit('system', 'Success!')
    })
    
  })
}