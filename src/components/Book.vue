
<template lang="jade">
#book
  vheader
  vnav
  .wapper
    #book_home_banner
      a(href='https://market.douban.com/book/zaofangzi/?platform=web&channel=dale_book_home_top_super_banner')
        img(src='../assets/book-top.jpg')
    .content
      .books-express.section
        .hd
          span 新书速递
          a.size12.a-link(href='https://book.douban.com/latest?icn=index-latestbook-all') 更多»
          .slide-controls
            ol.slide-dots
              li(v-for='1 in 4')
                a(@click='carousel($index + 1)', class='dot{{$index}}')
            .slide-btns
              a(class='prev', @click='prev()') ‹
              a(class='next', @click='next()') ›
        .bd
          ul.carousel(v-for='item in items', track-by="$index")
            li(v-for='0 in 10')
              .cover
                a
                  img(src='https://img3.doubanio.com/lpic/s28922981.jpg')
              .intervenor-info
                img(src='https://img3.doubanio.com/f/book/ef040178fab1770d60e3f2f12ba4c7aa70714396/pics/book/partner/jd_recommend.png')
                span.size13 推荐
              a.title.size13.a-link 平原上的摩西
              p.author.size12 双雪涛
      .books-popular.section
          .hd
            span 最受关注图书榜
            a.size12.a-link(href='https://book.douban.com/latest?icn=index-latestbook-all') 虚构类»
            a.size12.a-link(href='https://book.douban.com/latest?icn=index-latestbook-all') 非虚构类»
          .bd
            ul.size12
              li(v-for='0 in 6')
                .cover
                  a
                    img(src='https://img1.doubanio.com/spic/s28673707.jpg')
                a.title.size15.a-link 死神的福利
                p.star
                  span.img
                  span.score 8.0
                p.author 作者：[日]伊坂幸太郎
                p.type 日本文学 / 日系推理 / 小说
                p.reviews 准备一百个雨伞，给下雨天没带伞的陌生人一人送一把，这个爱心举动保证百分之百感动死神。(
                  a.comment.a-link 轮询评论
                  )
      .market-books.section
        .hd
          span 豆瓣纸书
          a.size12.a-link(href='https://book.douban.com/latest?icn=index-latestbook-all') 查看全部»
      .ebook-area.section
        .hd
          span 电子图书
          a.size12.a-link(href='https://book.douban.com/latest?icn=index-latestbook-all') 查看全部»
      .popular-authors.section
        .hd
          span 书评人
          a.size12.a-link(href='https://book.douban.com/latest?icn=index-latestbook-all') 进入书评专区»
    .book-side
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
      page: 1
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
    }
  }
}
</script>

<style lang="scss" scoped>
#book_home_banner {
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
.books-express .bd ul {
  width: $bd_width;
  display: inline-block;
}

.books-express .bd ul li {
  display: inline-block;
      overflow: hidden;
    margin: 0 15px 15px 0;
}

.books-express .bd ul li .cover img {
  width: 106px;
  height: 158px;
}

.books-express .bd ul li .intervenor-info {
  background: #f7f3db;
  position: relative;
  bottom: 10px;
  height: 20px;
}

.books-express .bd ul li .intervenor-info img {
  width: 16px;
  height: 16px;
  position: relative;
  top: 2px;
}

.books-express .bd ul li .intervenor-info span {
  color: gray;
  position: relative;
  left: 10px;
}

.books-express .bd ul li .title {
  position: relative;
  bottom: 7px;
}

.book-side {
  background-color: lightgray;
  float: right;
  width: 310px;
  height: 1000px;
}

.books-popular ul li {
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

.books-popular ul li .author {
 
}

.books-popular ul li .type {
  
}

.books-popular ul li .reviews {
  color: #666;
  clear: both;
  padding-top: 15px;
  word-wrap: word-break;
  line-height: 20px;
}

</style>