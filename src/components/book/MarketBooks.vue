<template lang="jade">
.market-books.section
  .hd
    span 豆瓣纸书
    a(href='https://book.douban.com/latest?icn=index-latestbook-all') 查看全部»
  .bd.row-5
    .top
      .cover
        a(:href='bookdata.top.link', target='_blank')
          img(:src='bookdata.top.pic', :alt='bookdata.top.title')
      .info
        p.title {{bookdata.top.title}}
          span.price {{bookdata.top.price}}
        p.desc {{bookdata.top.desc}}
    ul
      book-row-5(:bookdata='bookdata.items')
</template>

<script>
import BookRow5 from './BookRow5'
export default {

  name: 'market-books',

  components: {
    'book-row-5': BookRow5
  },

  props: ['bookdata'],

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

@import "../../assets/book.scss";

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
</style>