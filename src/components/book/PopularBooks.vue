<template lang="jade">
.popular-books
  .hd
    span 最受关注图书榜
    a(href='https://book.douban.com/latest?icn=index-latestbook-all') 虚构类»
    a(href='https://book.douban.com/latest?icn=index-latestbook-all') 非虚构类»
  .bd.row-2
    ul.size12
      li(v-for='book in bookdata')
        .cover
          a(:href='book.link', target='_blank')
            img(:src='book.pic', :alt='book.title')
        a.title.size15(:href='book.link', target='_blank') {{book.title}}
        p.star
          span.img
          span.score {{book.score}}
        p.author {{book.author}}
        p.type {{book.type}}
        p.reviews {{book.reviews}} (
          a.comment(:href='book.link', target='_blank') {{book.commenter}}
          )
</template>

<script>
export default {

  name: 'polularbooks',

  props: ['bookdata'],

  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

@import "../../assets/book.scss";

.popular-books ul li .cover {
  margin-right: 18px;
  float: left;
}

.popular-books ul li .title {
  display: inline-block;
  margin-top: 5px;
}

.popular-books ul li p {
  position: relative;
  margin-top: 7px;
}

.popular-books ul li .star .score {
  color: #e09015;
  font-size: 10px;
}

.popular-books ul li .star .img {
  width: 55px;
  height: 11px;
  display: inline-block;
  margin: 0 3px 0 0;
  background: url(https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png) no-repeat;
}

.popular-books ul li .reviews {
  color: #666;
  clear: both;
  padding-top: 15px;
  word-wrap: word-break;
  line-height: 20px;
}
</style>