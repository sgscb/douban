<template lang="jade">
.popular-authors.section
  .hd
    span 书评人
    a(href='https://book.douban.com/latest?icn=index-latestbook-all') 进入书评专区»
  .bd.row-2
    ul
      li(v-for=' 1 in 4')
        .cover
          a
            img(src='https://img3.doubanio.com/icon/u53672944-12.jpg')
        .info.size12
          p
            a 喵了个咪
          p 评论
          p
            a 我家没有龙——关于一部糟糕的先锋小说集的阅读报告
          p 3有用     2016-08-25
</template>

<script>
export default {

  name: 'popularauthors',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

@import "../../assets/book.scss";

.popular-authors .bd ul li .cover {
  float: left;
  margin-right: 20px;
}

.popular-authors .bd ul li .info {
  float: left;
  line-height: 20px;
  width: 200px;
}

</style>