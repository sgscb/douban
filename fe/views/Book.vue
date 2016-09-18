
<template lang="jade">
#book
  vheader
  vnav
  .wapper
    #book_home_top_banner.no-bg  <!-- 广告位1 -->
      a(href='https://market.douban.com/book/zaofangzi/?platform=web&channel=dale_book_home_top_super_banner')
        img(src='../assets/book-top.jpg')
    .content <!-- 广告位2 -->
      .bubble
        .small-bubble
        p.title.size14 {{bubbleData.title}}
        br
        p.sub-title.size12 {{bubbleData.subTitle}}
        br
        p.desc.size12 {{bubbleData.desc}}
      #book_home_middle_banner.section.no-bg <!-- 广告位2 -->
        a(href='https://market.douban.com/book/zaofangzi/?platform=web&channel=dale_book_home_top_super_banner')
          img(src='../assets/book-middle.jpg')
      express-books(:bookdata='bookdata.booksExpress') <!-- 组件 -->
      popular-books(:bookdata='bookdata.popularBooks')
      market-books(:bookdata='bookdata.marketBooks')
      ebooks(:bookdata='bookdata.ebooks')
      popular-authors(:authordata='bookdata.popularAuthors')
      #book_home_bottom_banner.section.no-bg <!-- 广告位4 -->
        a(href='https://market.douban.com/book/zaofangzi/?platform=web&channel=dale_book_home_top_super_banner')
          img(src='../assets/book-bottom.jpg')
    .book-side
      #home-top-right <!-- 广告位5 -->
        a
          img(src='../assets/book-top-right.jpg')
      hot-tags(:tagdata='bookdata.hotTags') <!-- 侧边栏组件-->
      weekly-top(:bookdata='bookdata.weeklyTop')
      book-rec(:bookdata='bookdata.bookRec')
      .apply-links.section.size14
        ul
          li
            a 编辑申请
          li
            a 出版社申请
      .contact.size12
        .hd
            span 关注我们
        .bd
          ul
            li
              .cover
                a
                  img(src='https://img3.doubanio.com/f/book/dd2126e4349422cac36369e3ee8e098bf12f3e5e/pics/book/home_site.jpg')
              a 豆瓣小站
      
  vfooter
</template>

<script>
import Vheader from '../components/pub/Vheader.vue'
import Vfooter from '../components/pub/Vfooter.vue'
import Vnav from '../components/pub/Vnav.vue'
import ExpressBooks from '../components/book/ExpressBooks.vue'
import Ebooks from '../components/book/Ebooks.vue'
import MarketBooks from '../components/book/MarketBooks.vue'
import PopularBooks from '../components/book/PopularBooks.vue'
import PopularAuthors from '../components/book/PopularAuthors.vue'
import HotTags from '../components/book/HotTags.vue'
import WeeklyTop from '../components/book/WeeklyTop.vue'
import BookRec from '../components/book/BookRec.vue'

function fetchItem (store) {
  return store.dispatch('FETCH_ITEMS', '/book')
}

export default {
  computed: {
    bookdata () {
      
      return this.$store.state.book
    }
  },
  
  preFetch: fetchItem,

  beforeMount () {
    fetchItem(this.$store)
  },

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

  ready () {
    // this.$http.get('douban/book/index').then((response) => {
    //   if (response.status > 400) {
    //     console.log('error')
    //     return
    //   }
    //   // console.log(response.data.booksExpress)
    //   let temp = response.data.booksExpress
    //   temp.push(temp[0])
    //   temp.unshift(temp[temp.length - 1])
    //   response.data.booksExpress = temp
    //   this.$set('bookdata', response.data)
    // }, () => {
    // })
  },

  data () {
    return {
      bubbleData: {}
    }
  },

  events: {
    bubbleShow: function (x, y, book) {
      this.$set('bubbleData', {
        title: book.title,
        subTitle: book.author + '/' + book.year + '/' + book.publisher,
        desc: book.abstract
      })
      var bubble = document.querySelector('.wapper .content .bubble')
      // console.log(bubble)
      bubble.style.display = 'block'
      bubble.style.marginTop = y + 'px'
      bubble.style.marginLeft = x + 'px'
    },

    bubbleHidden: function () {
      var bubble = document.querySelector('.wapper .content .bubble')
      bubble.style.display = 'none'
    }
  }
}
</script>

<style lang="stylus" scoped>

#book_home_top_banner 
  position relative
  margin 20px 0px

.content 
  float left
  width 590px
  padding-right 40px
  margin-top 30px

.book-side 
  float right
  width 310px

.apply-links li 
  display inline-block
  margin-right 30px

.contact li 
  display inline-block
  margin-right 30px

.bubble 
  width 300px
  min-height200px
  background-color green
  position absolute
  padding 20px
  line-height 20px
  border 1px solid black
  border-radius 4px
  background-color #F5FFF7
  z-index 10
  display none

.small-bubble 
  content ""
  display block /* reduce the damage in FF3.0 */
  position absolute
  border-top 10px solid transparent
  border-right 10px solid black
  border-bottom 10px solid transparent
  left -10px
  top 110px

.small-bubblebefore
  content ""
  display block /* reduce the damage in FF3.0 */
  position absolute
  border-top 9px solid transparent
  border-right 9px solid #ffffff
  border-bottom 9px solid transparent
  top -9px
  margin-left 1px

</style>