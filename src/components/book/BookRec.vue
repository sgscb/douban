<template lang="jade">
.book_rec.section
  .hd
    span 豆瓣猜你可能感兴趣的图书
    a(href='https://book.douban.com/latest?icn=index-latestbook-all') 更多»
  .bd.size12
    dl
      dt.cover
        a
          img(src='https://img1.doubanio.com/spic/s28673707.jpg')
      dd
        a.title 我擦豆瓣猜你可能感兴趣的图书豆瓣猜你可能感兴趣的图书
    .clear
    dl(v-for=' 0 in 6')
      dt.cover
        a()
          img(src='https://img1.doubanio.com/spic/s28673707.jpg', alt='2')
      dd
        a.title 我擦
</template>

<script>
export default {

  name: 'book-rec',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

@import "../../assets/book.scss";

.book_rec .bd  .title {
  word-wrap: break-word;
}

.book_rec .bd .clear {
  width: 100%;
  display: block;
  clear: both;
}

.book_rec .bd dl {
  // display: inline-block;
  float:left;
  margin-right: 30px;
  margin-bottom: 10px;
  width: calc(33.3% - 30px);

}

</style>