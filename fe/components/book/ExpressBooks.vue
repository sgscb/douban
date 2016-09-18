<template lang="jade">
.books-express.section
  .hd
    span 新书速递
    a(href='https://book.douban.com/latest?icn=index-latestbook-all') 更多»
    .slide-controls
      ol.slide-dots
        li(v-for='$index in bookdata')
          a(@click='carousel($index + 1)', class='dot $index')
      .slide-btns
        a(class='prev', @click='prev()') ‹
        a(class='next', @click='next()') ›
  .bd.row-5
    ul.carousel(v-for='(book, $index) in bookdata', track-by="$index")
      book-row-5(:page='page', :bookdata='book')
</template>

<script>
import BookView from './BookView.vue'
export default {

  name: 'express-books',

  components: {
    'book-row-5': BookView
  },

  props: ['bookdata'],
  `1`1` 
  data () {
    return {
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
      // console.log(index)
      this.$set('page', index)
      var el = document.querySelector('.books-express .bd')
      if (index === 5) {
        this.$set('page', 1)
        setTimeout(() => {
          el.style.transition = 'none'
          el.style.left = -605 + 'px'
        }, 1000)
      } else if (index === 0) {
        this.$set('page', 4)
        setTimeout(() => {
          el.style.transition = 'none'
          el.style.left = -605 * 4 + 'px'
        }, 1000)
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

<style lang="stylus" scoped>

@import "../../assets/book.styl"

.books-express
  overflow hidden

.slide-controls
  float right

.slide-controls .slide-dots li
  display inline

.slide-controls .slide-dots a
  width 5px
  height 5px
  display inline-block
  zoom 1
  margin-left 8px
  border-radius 5px
  background #dfdfdf

.slide-controls .slide-dots li:first-child a
  background #9b9a8f

.slide-controls .slide-dots
  float left
  position relative
  margin-top -1px

.slide-controls .slide-btns
  float right

.slide-controls .slide-btns a
  display inline-block
  width 18px
  height 18px
  text-align center
  line-height 16px
  border-radius 8px
  font 100 16px Arial
  color white
  background-color #9b9a8f

.books-express .bd
  width (6 * bd_width = 605px)
  position relative
  left -bd_width
</style>