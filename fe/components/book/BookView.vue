<template lang="jade">
  .bookview
    li(v-for='book in bookdata')
      .cover(@mouseover='mouseover($event.target, book)', @mouseout='mouseout($event.target)')
        a(:href='book.link', target='_blank')
          img(:src='book.pic', :alt='book.title')
      .intervenor-info(v-if='index')
        img(src='https://img3.doubanio.com/f/book/ef040178fab1770d60e3f2f12ba4c7aa70714396/pics/book/partner/jd_recommend.png')
        span.size13 推荐
      a.title.size13 {{book.title}}
      p.author.size12 {{book.price || book.author}} 
</template>

<script>
export default {

  name: 'bookview',

  data () {
    return {
    }
  },

  props: ['index', 'bookdata'],

  methods: {
    mouseover: function (el, book) {
      console.log(book)
      if (el.tagName === 'IMG') {
        el = el.parentNode.parentNode // 传递给父元素
      }
      var parentEl = el.parentNode.parentNode.parentNode.parentNode
      var left = el.offsetLeft // 第一个需要减去偏移
      var top = el.offsetTop + parentEl.offsetTop - 150
      if (this.index !== undefined) { // 如果为定义 说明是单页
        left -= 507 * this.index - 20 + (this.index - 1) * 99
      } else {
        left += 120 // 增加偏移
       
      }
      // console.log(book)
      if (book.abstract === undefined) {
        return
      }
      this.$store.dispatch('MODIFY_BOOK_BUBBLE',{
        left: left,
        top: top,
        data: book
      })
    },
    mouseout: function (el) {
      this.$store.dispatch('MODIFY_BOOK_BUBBLE',{
        left: 0,
        top: 0,
        data: {}
      })
    }
  }
}
</script>

<style lang="stylus">
@import "../../assets/book.styl"

</style>