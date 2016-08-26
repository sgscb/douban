<template lang="jade">
.popular-books
  .hd
    span 最受关注图书榜
    a(href='https://book.douban.com/latest?icn=index-latestbook-all') 虚构类»
    a(href='https://book.douban.com/latest?icn=index-latestbook-all') 非虚构类»
  .bd.row-2
    ul.size12
      li(v-for='0 in 6')
        .cover
          a
            img(src='https://img1.doubanio.com/spic/s28673707.jpg')
        a.title.size15 死神的福利
        p.star
          span.img
          span.score 8.0
        p.author 作者：[日]伊坂幸太郎
        p.type 日本文学 / 日系推理 / 小说
        p.reviews 准备一百个雨伞，给下雨天没带伞的陌生人一人送一把，这个爱心举动保证百分之百感动死神。(
          a.comment 轮询评论
          )
</template>

<script>
export default {

  name: 'polularbooks',

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