<template>
<div class="weekly-top section">
  <div class="hd"><span>热门标签</span></div>
  <div class="bd size12">
    <ul class="nav-vendor">
      <li @click="vendor(0)" class="li-on"><img src="../../assets/vendor-jd.png"/><span>京东</span></li>
      <li @click="vendor(1)"><img src="../../assets/vendor-amazon.png"/><span>亚马逊</span></li>
      <li @click="vendor(2)"><img src="../../assets/vendor-dangdang.png"/><span>当当</span></li>
    </ul>
    <ul v-for="(books, $index) in bookdata" v-show="!$index" class="list-ranking">
      <li v-for="(book, $index) in books">
      <span class="index">{{$index}}.</span>
        <div class="info"><a :href="book.link" target="_blank" class="name">{{book.title}}</a>
          <p class="author">{{book.author}}</p>
        </div><a :href="book.link" target="_blank" class="buy-btn"> 去购买</a>
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
      var uls = document.querySelectorAll('.weekly-top .bd .list-ranking')
      for (var i = 0; i < uls.length; i++) {
        var el = uls[i]
        if (i === index) {
          console.log(el)
          el.style.display = 'block'
        } else {
          el.style.display = 'none'
        }
      }
      this.$set('lastVendor', index)
    }
  }
}
</script>

<style lang="stylus" scoped>

@import "../../assets/book.styl"

.weekly-top .nav-vendor
  margin-bottom 15px

.weekly-top .nav-vendor li img
  width 18px
  float left

.weekly-top .nav-vendor li span
  line-height 18px

.weekly-top .nav-vendor li
  color #ccc5bf
  margin-right 10px
  display inline-block
  padding 5px
  border-radius 2px
  cursor pointer

.weekly-top .nav-vendor .li-on, .weekly-top .nav-vendor li:hover
  color #fff
  background #9b7c5e

.weekly-top .list-ranking li
  display block
  line-height 20px
  border-bottom 1px dashed #ddd
  padding 6px 0px

.weekly-top .list-ranking li .index
  float left

.weekly-top .list-ranking li .info
  display inline-block
  margin-left 5px
  width calc(100% - 80px)

.weekly-top .list-ranking li .info .name
  display inline-block
  width 100%

.weekly-top .list-ranking li .buy-btn
  float right
  color gray
  margin-top 7px
  margin-right 5px
  padding 3px 4px

.weekly-top .list-ranking li:hover
  background-color #EAEAE7
  .buy-btn
    border 1px solid #D7C891
    color #D7C891


a:hover
  background-color inherit
  color inherit
</style>