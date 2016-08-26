<template lang="jade">
  li(v-for='0 in 10')
    .cover
      a
        img(src='https://img3.doubanio.com/lpic/s28922981.jpg')
    .intervenor-info
      img(src='https://img3.doubanio.com/f/book/ef040178fab1770d60e3f2f12ba4c7aa70714396/pics/book/partner/jd_recommend.png')
      span.size13 推荐
    a.title.size13 平原上的摩西
    p.author.size12 双雪涛
</template>

<script>
export default {

  name: 'bookrow5',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/book.scss";
</style>