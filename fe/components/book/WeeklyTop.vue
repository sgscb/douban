<template>
<div class="weekly-top section">
  <div class="hd"><span>畅销图书榜</span></div>
  <div class="bd size12">
    <ul class="nav-vendor">
      <li @click="vendor(0)" class="li-on"><img src="../../assets/vendor-jd.png"/><span>京东</span></li>
      <li @click="vendor(1)"><img src="../../assets/vendor-amazon.png"/><span>亚马逊</span></li>
      <li @click="vendor(2)"><img src="../../assets/vendor-dangdang.png"/><span>当当</span></li>
    </ul>
    <ul v-for="(books, $index) in bookdata" v-show="!$index" class="list-ranking">
      <li v-for="(book, $index) in books">
      <span class="index">{{$index}}.</span>
        <div class="info">
          <a :href="book.link" target="_blank" class="name line1">{{book.title}}</a>
          <p class="author line1">{{book.author}}</p>
        </div>
         <a :href="book.link" target="_blank" class="buy-btn"> 去购买</a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {

  name: 'weekly-top',

  props: ['bookdata'],

  data () {
    return {
      lastVendor: 0
    }
  },

  methods: {
    vendor: function (index) {
      console.log(index)
      let els = document.querySelectorAll('.nav-vendor li')
      els[this.lastVendor].className = null
      els[index].className = 'li-on'
      let uls = document.querySelectorAll('.weekly-top .bd .list-ranking')
      for (let i = 0; i < uls.length; i++) {
        let el = uls[i]
        if (i === index) {
          el.style.display = 'block'
        } else {
          el.style.display = 'none'
        }
      }
      this.lastVendor = index
    }
  }
}
</script>

<style lang="stylus" scoped>

@import "../../assets/book.styl"

.weekly-top .nav-vendor
  margin-bottom 15px
  li
    color #ccc5bf
    margin-right 10px
    display inline-block
    padding 5px
    border-radius 2px
    cursor pointer
    img
      width 18px
      float left
    span
      line-height 18px

.weekly-top .nav-vendor .li-on, .weekly-top .nav-vendor li:hover
  color #fff
  background #9b7c5e

.weekly-top .list-ranking li
  display block
  border-bottom 1px dashed #ddd
  padding 6px 0px
  vertical-align:middle;
  line-height 18px
  .index
    float left
  .info
    display inline-block
    margin-left 5px
    width calc(100% - 80px)
    .name
      display inline-block
      width 100%
  .buy-btn
    float right
    color gray
    margin-right 5px
    padding 3px 4px
    transform: translate3d(0, calc(50% - 4px), 0)

.weekly-top .list-ranking li:hover
  background-color #EAEAE7
  .buy-btn
    border 1px solid #D7C891
    color #D7C891

a:hover
  background-color inherit
  color inherit
</style>