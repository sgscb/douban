<template lang="jade">
  li(v-for='0 in 10')
    .cover(@mouseover='mouseover($event.target, $index)', @mouseout='mouseout($event.target, $index)')
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
  },

  props: ['page'],

  methods: {
    mouseover: function (el) {
      if (el.tagName === 'IMG') {
        el = el.parentNode.parentNode // 传递给父元素
      }
      var parentEl = el.parentNode.parentNode.parentNode.parentNode
      var left = el.offsetLeft // 第一个需要减去偏移
      var top = el.offsetTop + parentEl.offsetTop - 120
      if (this.page !== undefined) { // 如果为定义 说明是单页
        left -= 507 * this.page - 20 + (this.page - 1) * 99
      } else {
        left += 100 // 增加偏移
        top -= parentEl.offsetTop + 50
      }
      this.$dispatch('bubbleShow', left, top) // 传递给父组件
    },
    mouseout: function (el) {
      this.$dispatch('bubbleHidden')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/book.scss";

</style>