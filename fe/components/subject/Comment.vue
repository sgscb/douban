<template lang="jade">
.sort-comment.size12
  vmore(title='书评' link='' subTitle='全部193条')
  .types
    span.box(v-on:click="changeIndex($index)"
         v-for="(type, $index) in types"
         v-bind:class="{active: activeIndex == $index}")
      span.type {{type}}
  .comments
    ul(v-for='(n,$index) in 2' v-show='$index == activeIndex')
      li
        a.cover
          img(src='https://img3.doubanio.com/icon/u2237660-5.jpg') 
        .info
          .top
            span.title 青春伤逝背后的那些残酷真相
            img.down(src='https://img3.doubanio.com/f/shire/a1fdee122b95748d81cee426d717c05b5174fe96/pics/blank.gif')
          a.title 糟糕
          span.desc (人类救星孙美好)
</template>

<script>
import More from '../index/IndexMore.vue'
export default {

  name: 'sort-comment',

  components: {
    'vmore': More
  },

  data () {
    return {
      types: ['热门评论', '最新评论'],
      activeIndex: 0
    }
  },
  methods: {
    changeIndex: function (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.types
  .box
    padding-bottom 10px
    margin-right 10px
    .type
      color gray
      cursor pointer
    .type:hover
      color white
      background gray
  .active
    border-bottom 2px solid #037a
    .type
      color #037a
    .type:hover
      color #037a
      background inherit
.comments
  margin-top 10px
  border-top 1px solid lightgray
  ul
    li
      margin-top 20px
      .cover
        float left
        width 40px
</style>