<template lang="jade">
.ebook-area.section
  .hd
    span 电子图书
    a(href='https://book.douban.com/latest?icn=index-latestbook-all') 查看全部»
  .bd.row-5
    ul
      book-row-5
</template>

<script>
import BookRow5 from './BookRow5'
export default {

  name: 'ebooks',

  components: {
    'book-row-5': BookRow5
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/book.scss";
</style>