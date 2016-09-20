<template lang="jade">
.weekly-top.section
  .hd
    span 畅销图书榜
  .bd.size12
    ul.nav-vendor
      li(
      v-for='(vendor, $index) in vendors'
      @click='chaneIndex($index)'
      v-bind:class='{active: activeIndex == $index}')
        img(v-bind='{src: activeIndex == $index ? vendor.hoverPic : vendor.pic}')
        span {{vendor.name}}
    ul.list-ranking(
    v-for='(books, $index) in bookdata'
    v-show='$index==activeIndex')
      li(v-for='(book, $index) in books')
        span.index {{$index}}.
        .info
          a.name.line1(:href='book.link', target='_blank') {{book.title}}
          p.author.line1 {{book.author}}
        a.buy-btn(:href='book.link', target='_blank')  去购买
</template>

<script>
export default {

  name: 'weekly-top',

  props: ['bookdata'],

  data () {
    return {
      activeIndex: 0,
      vendors:[{
        name: '京东',
        pic: 'https://img3.doubanio.com/f/book/1a000e2b266b7d0e7c6c729591cab99692c04153/pics/book/partner/jd_chart.png',
        hoverPic: 'https://img3.doubanio.com/f/book/7fd9bf017a2b6c0349981f25700e2b71c12df7d0/pics/book/partner/jd_chart_hover.png'
      },
      {
        name: '亚马逊',
        pic: 'https://img3.doubanio.com/f/book/a89c8398b6cf28ef20edfe1b069ee72917e2dd54/pics/book/partner/amazon_chart.png',
        hoverPic: 'https://img3.doubanio.com/f/book/d6c95e1ad2d0963f912a64fcb51cfa85137462c6/pics/book/partner/amazon_chart_hover.png'
      },
      {
        name: '当当',
        pic: 'https://img3.doubanio.com/f/book/31b437b71ced2d15e1e110d6be26b070da8c0d4a/pics/book/partner/dangdang_chart.png',
        hoverPic: 'https://img3.doubanio.com/f/book/7d8c0787ecede53ce754df32380011a66b610496/pics/book/partner/dangdang_chart_hover.png'
      }]
    }
  },
  methods: {
    chaneIndex: function (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="stylus" scoped>

@import "../../assets/book.styl"

.weekly-top .nav-vendor
  margin-bottom 15px
  li
    color #ccc5bf
    margin-right 10px
    display inline-block
    padding 5px
    border-radius 2px
    cursor pointer
    img
      width 18px
      float left
    span
      line-height 18px

.weekly-top .nav-vendor .active, .weekly-top .nav-vendor li:hover
  color #fff
  background #9b7c5e

.weekly-top .list-ranking li
  display block
  border-bottom 1px dashed #ddd
  padding 6px 0px
  vertical-align:middle;
  line-height 18px
  .index
    float left
  .info
    display inline-block
    margin-left 5px
    width calc(100% - 80px)
    .name
      display inline-block
      width 100%
  .buy-btn
    float right
    color gray
    margin-right 5px
    padding 3px 4px
    transform: translate3d(0, calc(50% - 4px), 0)

.weekly-top .list-ranking li:hover
  background-color #EAEAE7
  .buy-btn
    border 1px solid #D7C891
    color #D7C891

a:hover
  background-color inherit
  color inherit
</style>