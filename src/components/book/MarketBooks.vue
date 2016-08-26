<template lang="jade">
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
    .row-5
      ul
        book-row-5
</template>

<script>
import BookRow5 from './BookRow5'
export default {

  name: 'market-books',

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