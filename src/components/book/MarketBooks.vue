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
    ul
      li(v-for='0 in 5')
        .cover
          a
            img(src='https://img3.doubanio.com/lpic/s28922981.jpg')
        br
        a.title.size13 平原上的摩西
        p.author.size12 $12.8
</template>

<script>
export default {

  name: 'marketbooks',

  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
</style>