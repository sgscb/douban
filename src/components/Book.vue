
<template lang="jade">
#book
  vheader
  vnav
  .wapper
    #book_home_top_banner.no-bg  <!-- 广告位1 -->
      a(href='https://market.douban.com/book/zaofangzi/?platform=web&channel=dale_book_home_top_super_banner')
        img(src='../assets/book-top.jpg')
    .content <!-- 广告位2 -->
      #book_home_middle_banner.section.no-bg <!-- 广告位2 -->
        a(href='https://market.douban.com/book/zaofangzi/?platform=web&channel=dale_book_home_top_super_banner')
          img(src='../assets/book-middle.jpg')
      express-books <!-- 组件 -->
      popular-books
      ebooks
      market-books
      popular-authors
      #book_home_bottom_banner.section.no-bg <!-- 广告位4 -->
        a(href='https://market.douban.com/book/zaofangzi/?platform=web&channel=dale_book_home_top_super_banner')
          img(src='../assets/book-bottom.jpg')
    .book-side
      #home-top-right <!-- 广告位5 -->
        a
          img(src='https://img3.doubanio.com/view/dale-online/dale_ad/public/6a2b542ac353b7b.jpg')
      hot-tags <!-- 侧边栏组件-->
      weekly-top
      book-rec
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
import ExpressBooks from './book/ExpressBooks'
import Ebooks from './book/Ebooks'
import MarketBooks from './book/MarketBooks'
import PopularBooks from './book/PopularBooks'
import PopularAuthors from './book/PopularAuthors'
import HotTags from './book/HotTags'
import WeeklyTop from './book/WeeklyTop'
import BookRec from './book/BookRec'
export default {

  name: 'book',

  components: {
    'vheader': Vheader,
    'vnav': Vnav,
    'vfooter': Vfooter,
    'express-books': ExpressBooks,
    'ebooks': Ebooks,
    'market-books': MarketBooks,
    'popular-books': PopularBooks,
    'popular-authors': PopularAuthors,
    'hot-tags': HotTags,
    'weekly-top': WeeklyTop,
    'book-rec': BookRec
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

.book-side {
  float: right;
  width: 310px;
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