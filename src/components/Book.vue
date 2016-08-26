
<template lang="jade">
#book
  vheader
  vnav
  .wapper
    #book_home_top_banner.cover
      a(href='https://market.douban.com/book/zaofangzi/?platform=web&channel=dale_book_home_top_super_banner')
        img(src='../assets/book-top.jpg')
    .content
      .books-express
        .hd
          span 新书速递
          a(href='https://book.douban.com/latest?icn=index-latestbook-all') 更多»
          .slide-controls
            ol.slide-dots
              li(v-for='1 in 4')
                a(@click='carousel($index + 1)', class='dot{{$index}}')
            .slide-btns
              a(class='prev', @click='prev()') ‹
              a(class='next', @click='next()') ›
        .bd.row-5
          ul.carousel(v-for='item in items', track-by="$index")
            li(v-for='0 in 10')
              .cover
                a
                  img(src='https://img3.doubanio.com/lpic/s28922981.jpg')
              .intervenor-info
                img(src='https://img3.doubanio.com/f/book/ef040178fab1770d60e3f2f12ba4c7aa70714396/pics/book/partner/jd_recommend.png')
                span.size13 推荐
              a.title.size13 平原上的摩西
              p.author.size12 双雪涛
      #book_home_middle_banner.section.cover
        a(href='https://market.douban.com/book/zaofangzi/?platform=web&channel=dale_book_home_top_super_banner')
          img(src='../assets/book-middle.jpg')
      .books-popular
          .hd
            span 最受关注图书榜
            a(href='https://book.douban.com/latest?icn=index-latestbook-all') 虚构类»
            a(href='https://book.douban.com/latest?icn=index-latestbook-all') 非虚构类»
          .bd.row-2
            ul.size12
              li(v-for='0 in 6')
                .cover
                  a
                    img(src='https://img1.doubanio.com/spic/s28673707.jpg')
                a.title.size15 死神的福利
                p.star
                  span.img
                  span.score 8.0
                p.author 作者：[日]伊坂幸太郎
                p.type 日本文学 / 日系推理 / 小说
                p.reviews 准备一百个雨伞，给下雨天没带伞的陌生人一人送一把，这个爱心举动保证百分之百感动死神。(
                  a.comment 轮询评论
                  )
      #book_home_bottom_banner.section.cover
        a(href='https://market.douban.com/book/zaofangzi/?platform=web&channel=dale_book_home_top_super_banner')
          img(src='../assets/book-bottom.jpg')
      .market-books.section
        .hd
          span 豆瓣纸书
          a(href='https://book.douban.com/latest?icn=index-latestbook-all') 查看全部»
        .bd.row-5
          .top
            .cover
              a
                img(src='https://img3.doubanio.com/f/market/9a5b334ac1a12beb2f3b1c56b78e0c17fd962752/pics/newbook/pidl_data/taleonroad.png')
            .info
              p.title 传奇在路上
                span.price $42.8
              p.desc 张佳玮的第一本旅行游记，讲述发生在路上的那些传奇。从文艺青年的巴黎，到莫奈笔下变幻的诺曼底云层，从瑞士的干酪锅，到全世界游子心目中的最好吃名单，为你一一道来。
          ul
            li(v-for='0 in 5')
              .cover
                a
                  img(src='https://img3.doubanio.com/lpic/s28922981.jpg')
              br
              a.title.size13 平原上的摩西
              p.author.size12 $12.8
      .ebook-area.section
        .hd
          span 电子图书
          a(href='https://book.douban.com/latest?icn=index-latestbook-all') 查看全部»
        .bd.row-5
          ul
            li(v-for='0 in 10')
              .cover
                a
                  img(src='https://img3.doubanio.com/lpic/s28922981.jpg')
              br
              a.title.size13 平原上的摩西
              p.author.size12 $12.8
      .popular-authors.section
        .hd
          span 书评人
          a(href='https://book.douban.com/latest?icn=index-latestbook-all') 进入书评专区»
        .bd.row-2
          ul
            li(v-for=' 1 in 4')
              .cover
                a
                  img(src='https://img3.doubanio.com/icon/u53672944-12.jpg')
              .info.size12
                p
                  a 喵了个咪
                p 评论
                p
                  a 我家没有龙——关于一部糟糕的先锋小说集的阅读报告
                p 3有用     2016-08-25

    .book-side
      #home-top-right
        a
          img(src='https://img3.doubanio.com/view/dale-online/dale_ad/public/6a2b542ac353b7b.jpg')
      .hot-tags.section
        .hd
          span 热门标签
          a(href='https://book.douban.com/latest?icn=index-latestbook-all') 所有热门标签»
        .bd
          ul
            li(v-for='0 in 4')
              ul.section
                li(v-for='0 in 10')
                  a {{$index}}{{$index}}{{$index}}
      .weekly-top.section
        .hd
          span 热门标签
        .bd.size12
          ul.nav-vendor
            li(@click='vendor(0)', class='li-on')
              img(src='../assets/vendor-jd.png')
              span 京东
            li(@click='vendor(1)')
              img(src='../assets/vendor-amazon.png')
              span 亚马逊
            li(@click='vendor(2)')
              img(src='../assets/vendor-dangdang.png')
              span 当当
          ul.list-ranking
            li(v-for='0 in 5')
              span.index {{$index}}.
              .info
                a.name 永远讲不完的故事（新译本
                p.author (德)米切尔·恩德
              a.buy-btn 去购买
      .book_rec.section
        .hd
          span 豆瓣猜你可能感兴趣的图书
          a(href='https://book.douban.com/latest?icn=index-latestbook-all') 更多»
        .bd.size12
          dl
            dt.cover
              a
                img(src='https://img1.doubanio.com/spic/s28673707.jpg')
            dd
              a.title 我擦豆瓣猜你可能感兴趣的图书豆瓣猜你可能感兴趣的图书
          .clear
          dl(v-for=' 0 in 6')
            dt.cover
              a()
                img(src='https://img1.doubanio.com/spic/s28673707.jpg', alt='2')
            dd
              a.title 我擦
      .apply-links.section.size14
        ul
          li
            a > 编辑申请
          li
            a > 出版社申请
      .contact.size12
        .hd
            span 关注我们
        .bd
          ul
            li(v-for='0 in 3')
              .cover
                a
                  img(src='https://img3.doubanio.com/f/book/dd2126e4349422cac36369e3ee8e098bf12f3e5e/pics/book/home_site.jpg')
              a 豆瓣小站
  vfooter
</template>

<script>
import Vheader from './pub/Vheader'
import Vfooter from './pub/Vfooter'
import Vnav from './pub/Vnav'
export default {

  name: 'book',

  components: {
    'vheader': Vheader,
    'vnav': Vnav,
    'vfooter': Vfooter
  },

  data () {
    return {
      items: [4, 1, 2, 3, 4, 1],
      page: 1,
      lastVendor: 0
    }
  },

  methods: {
    prev: function () {
      this.$set('page', this.page - 1)
      this.carousel(this.page)
    },

    next: function () {
      this.$set('page', this.page + 1)
      this.carousel(this.page)
    },

    // 无限滚动 利用数据给head和tail添加相同数据 到边界后定时无动画说偷偷刷新
    carousel: function (index) {
      console.log(index)
      var el = document.querySelector('.books-express .bd')
      if (index === 5) {
        this.$set('page', 1)
        setTimeout(() => {
          el.style.transition = 'none'
          el.style.left = -605 + 'px'
        }, 600)
      } else if (index === 0) {
        this.$set('page', 4)
        setTimeout(() => {
          el.style.transition = 'none'
          el.style.left = -605 * 4 + 'px'
        }, 600)
      }

      el.style.transition = 'all 0.7s ease-in 0s'
      el.style.left = index * -605 + 'px'

      var dots = document.querySelectorAll('.slide-dots li a')
      index = index >= 5 ? 1 : index
      index = index <= 0 ? 4 : index
      for (let i = 0; i < dots.length; i++) {
        let dot = dots[i]
        dot.style.background = '#dfdfdf'
        if (i === index - 1) {
          dot.style.background = '#9b9a8f'
        }
      }
    },

    vendor: function (index) {
      console.log(index)
      let els = document.querySelectorAll('.nav-vendor li')
      els[this.lastVendor].className = null
      els[index].className = 'li-on'
      this.$set('lastVendor', index)
    }
  }
}
</script>

<style lang="scss" scoped>
#book_home_top_banner {
  position: relative;
  margin: 20px 0px;
}

.content {
  float: left;
  width: 590px;
  padding-right: 40px;
  margin-top: 30px;
}

.hd {
  border-bottom: 1px solid #ddd;
  margin-bottom: 16px;
  padding-bottom: 6px;
  font-size: 18px;
}

.hd a {
  position: relative;
  margin-left: 15px;
  font-size: 12px;
}

.hd a:hover {
  background-color: white;
}

.slide-controls {
  float: right;
}

.slide-controls .slide-dots li {
  display: inline;
}

.slide-controls .slide-dots a {
  width: 5px;
  height: 5px;
  display: inline-block;
  zoom: 1;
  margin-left: 8px;
  border-radius: 5px;
  background: #dfdfdf;
}

.slide-controls .slide-dots li:first-child a {
  background: #9b9a8f;
}

.slide-controls .slide-dots {
  float: left;
  position: relative;
  margin-top: -1px;
}

.slide-controls .slide-btns {
  float: right;
}

.slide-controls .slide-btns a {
  display: inline-block;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 16px;
  border-radius: 8px;
  font: 100 16px Arial;
  color: white;
  background-color: #9b9a8f;
}

.books-express {
  overflow: hidden;
  position: relative;
}

$bd_width: 605px;

.books-express .bd {
  width: $bd_width * 6;
  position: relative;
  left: -$bd_width;
}

.row-5 ul {
  width: $bd_width;
  display: inline-block;
}

.row-5 ul li {
  display: inline-block;
  overflow: hidden;
  margin: 0 15px 15px 0;
}

.row-5 ul li .cover img {
  width: 106px;
  height: 158px;
}

.row-5 ul li .intervenor-info {
  background: #f7f3db;
  position: relative;
  bottom: 10px;
  height: 20px;
}

.row-5 ul li .intervenor-info img {
  width: 16px;
  height: 16px;
  position: relative;
  top: 2px;
}

.row-5 ul li .intervenor-info span {
  color: gray;
  position: relative;
  left: 10px;
}

.row-5 ul li .title {
  position: relative;
  bottom: 7px;
}

.book-side {
  float: right;
  width: 310px;
}

.row-2 ul li {
  width: 275px;
  display: inline-block;
  margin-bottom: 30px;
  margin-right: 20px;
}

.books-popular ul li .cover {
  margin-right: 18px;
  float: left;
}

.books-popular ul li .title {
  display: inline-block;
  margin-top: 5px;
}

.books-popular ul li p {
  position: relative;
  margin-top: 7px;
}

.books-popular ul li .star .score {
  color: #e09015;
  font-size: 10px;
}

.books-popular ul li .star .img {
  width: 55px;
  height: 11px;
  display: inline-block;
  margin: 0 3px 0 0;
  background: url(https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png) no-repeat;
}

.books-popular ul li .reviews {
  color: #666;
  clear: both;
  padding-top: 15px;
  word-wrap: word-break;
  line-height: 20px;
}

.market-books {
}

.market-books .bd .top .cover {
  float: left;
  position: relative;
  margin-bottom: 50px;
  margin-right: 20px;
}

.market-books .bd .top .cover img {
  width: 130px;
  height: 172px;
}

.market-books .bd .top .title {
  position: relative;
  font-size: 23px;
  line-height: 32px;
  padding-top: 20px;
}

.market-books .bd .top .title .price {
  font-size: 17px;
  color: #E76648;
  margin-left: 17px;
}

.market-books .bd .top .desc {
  color: #9B9B9B;
  font-size: 14px;
  line-height: 20px;
}

.popular-authors .bd ul li .cover {
  float: left;
  margin-right: 20px;
}

.popular-authors .bd ul li .info {
  float: left;
  line-height: 20px;
  width: 200px;
}

.book-side .hot-tags  {
  margin-top: 30px;
}

.book-side .hot-tags .bd .section {
  margin-bottom: 15px;
}

.book-side .hot-tags .bd .section li {
  display: inline-block;
}

.book-side .hot-tags .bd .section li {
  padding: 2px 11px 0;
  margin: 0 3px 5px 0;
  line-height: 20px;
  font-size: 13px;
  background-color: #f5f5f5;
}

.book-side .hot-tags .bd .section li:first-child a {
  color: black;
  cursor: text;
}

.book-side .hot-tags .bd .section li:first-child {
  display: block;
  background-color: white;
}

.book-side .hot-tags .bd .section li:first-child:hover {
  background-color: white;
}

.book-side .hot-tags .bd .section li:hover {
  background-color: #E4E4E4;
}

.book-side .hot-tags .bd .section li:last-child a {
  color: gray;
  padding-right: 10px;
}

.book-side .weekly-top .nav-vendor {
  margin-bottom: 15px;
}

.book-side .weekly-top .nav-vendor li img {
  width: 18px;
  float: left;
}

.book-side .weekly-top .nav-vendor li span {
  line-height: 18px;
}

.book-side .weekly-top .nav-vendor li {
  color: #ccc5bf;
  margin-right: 10px;
  display: inline-block;
  padding: 5px;
  border-radius: 2px;
  cursor: pointer;
}

.book-side .weekly-top .nav-vendor .li-on, .book-side .weekly-top .nav-vendor li:hover {
  color: #fff;
  background: #9b7c5e;
}

.book-side .weekly-top .list-ranking li {
  display: block;
  line-height: 20px;
  border-bottom: 1px dashed #ddd;
  padding: 6px 0px;
}

.book-side .weekly-top .list-ranking li .index {
  float: left;
}

.book-side .weekly-top .list-ranking li .info {
  display: inline-block;
  margin-left: 5px;
}

.book-side .weekly-top .list-ranking li .buy-btn {
  float: right;
  color: gray;
  margin-top: 7px;
  margin-right: 5px;
  padding: 3px 4px;
}

.book-side .weekly-top .list-ranking li:hover {
  background-color: #EAEAE7;
  .buy-btn {
    border: 1px solid #D7C891;
    color: #D7C891;
  }
}

.book_rec .bd dl {
  // display: inline-block;
  float:left;
  margin-right: 30px;
  margin-bottom: 10px;
  width: calc(33.3% - 30px);

}

.book_rec .bd  .title {
  word-wrap: break-word;
}

.book_rec .bd .clear {
  width: 100%;
  display: block;
  clear: both;
}


.apply-links li {
  display: inline-block;
  margin-right: 30px;
}

.contact li {
  display: inline-block;
  margin-right: 30px;
}

</style>