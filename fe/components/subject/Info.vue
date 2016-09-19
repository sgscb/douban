<template lang="jade">
.info.size12
  .cover
    a
      img(src='https://img3.doubanio.com/lpic/s28897671.jpg' alt='')
  .more
    span
      span 作者：
      a(href='http://1.com/') 233
    br
    span 出版社: 人民文学出版社
    br
    span 出版年: 2016-8-1
    br
    span 页数: 424
    br
    span 定价: 43.00元
    br
    span 装帧: 平装
    br
    span
      span 丛书:
      a(href='http://1.com/') 张悦然作品集
    br
    span ISBN: 9787020118021
  .interest
    .rating_logo 豆瓣评分
    .rating_self
      strong 8.0
      .rating_right
        .star
        a.num(href='http://1.com/') 233人评价
    .clearfix
    span.starstop 5星
    .power(style='width:52px')
    span.rating_per 33%
    .clearfix
    span.starstop 4星
    .power(style='width:70px')
    span.rating_per 33%
    .clearfix
    span.starstop 3星
    .power(style='width:60px')
    span.rating_per 33%
    .clearfix
    span.starstop 2星
    .power(style='width:10px')
    span.rating_per 33%
    .clearfix
    span.starstop 1星
    .power(style='width:10px')
    span.rating_per 33%
  .clearfix
  .interest_sect_level
    a.colbutt 想读
    a.colbutt 在读
    a.colbutt 读过
    span 评价:
    .rating.no-bg
      a.star(v-for='n in 5' href='https://accounts.douban.com/register?reason=rate')
        img(v-bind:id='n' v-bind:src='hoverImg'  @mouseover='mouseover($event.target)' @mouseout='mouseout($event.target)')
    span(v-show='levelName') {{levelName}}
  .clearfix
  .gtleft
    ul
      li(v-for='n in 3')
        img(src='https://img3.doubanio.com/f/shire/5bbf02b7b5ec12b23e214a580b6f9e481108488c/pics/add-review.gif')
        a(href='33') 写笔记
  a.rec 推荐
</template>

<script>
export default {

  name: 'info',

  data () {
    return {
      hoverImg: 'https://img3.doubanio.com/f/shire/2520c01967207a1735171056ec588c8c1257e5f8/pics/rating_icons/star_hollow_hover.png',
      onMouseOver: 'https://img3.doubanio.com/f/shire/5a2327c04c0c231bced131ddf3f4467eb80c1c86/pics/rating_icons/star_onmouseover.png',
      level: 0
    }
  },

  computed: {
    levelName () {
      const temp = ['', '很差', '较差', '还行', '推荐', '力荐']
      return temp[this.level]
    }
  },

  methods: {
    mouseout: function (el) {
      let els = document.querySelectorAll('.info .interest_sect_level .rating a img')
      for (var i = 0; i < el.id; i++) {
        els[i].src = this.hoverImg
      }
      this.level = 0
    },
    mouseover: function (el) {
      let els = document.querySelectorAll('.info .interest_sect_level .rating a img')
      for (var i = 0; i < el.id; i++) {
        els[i].src = this.onMouseOver
      }
      this.level = el.id
    }
  }
}
</script>

<style lang="stylus" scoped>
.info
  .cover
    float left
    margin-right 10px
    text-align center
    a
      img
        width 107px
  .more
    float left
    span
      line-height 18px
  .interest
    float right
    min-width 180px
    padding-left 15px
    border-left 1px solid lightgray
    color gray
    .rating_self
      margin 10px 0px
      strong
        float left
        font-size 25px
        color black
      .rating_right
        float left
        margin-left 15px
        margin-bottom 10px
        .star
          width 75px
          height 15px
          background-image url('https://img3.doubanio.com/f/shire/680a4bc4c384199245b080c7104da5be8ed717d3/pics/rating_icons/ic_rating_m.png')
          background-position 0 -30px
        .num
          line-height 20px
    .starstop
      float left
    .power
      height 10px
      float left
      margin 1px 4px
      background #ffd596 none repeat scroll 0 0
  .interest_sect_level
    margin 20px 0px
    .colbutt
      float left
      padding 3px 10px
      color black
      background rgb(251, 230, 215)
      border 1px solid lightgray
      margin-right 10px
    .colbutt:hover
      background rgb(251, 230, 215)
      color black
    span
      float left
    .rating
      float left
      .star img
        width 16px
        height 16px
  .gtleft
    margin-top 20px
    ul
      li
        display inline-block
        margin-right 20px
  .rec
    float right
    padding 3px 5px
    border 1px solid #e3f1ed
    background-color #f2f8f2
    color #4f946e
</style>