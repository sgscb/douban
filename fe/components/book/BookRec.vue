<template lang="jade">
.book_rec.section
  .hd
    span 豆瓣猜你可能感兴趣的图书
    a(href='https://book.douban.com/latest?icn=index-latestbook-all') 更多»
  .bd.size12
    ul
      li(v-for=' book in bookdata')
        .cover
          a(:href='book.link', target='_blank')
            img(:src='book.pic', :alt='book.title')
        a.title(:href='book.link', target='_blank') {{book.title}}
</template>

<script>
export default {

  name: 'book-rec',

  props: ['bookdata'],

  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>

@import "../../assets/book.styl"

.book_rec .bd  .title
  word-wrap break-word

.book_rec .bd .clear
  width 100%
  display block
  clear both

img
  width 80px
  height 100px

.book_rec .bd ul li
  // display inline-block
  float:left
  margin-right 30px
  margin-bottom 10px
  width calc(33.3% - 30px)
  overflow hidden

</style>