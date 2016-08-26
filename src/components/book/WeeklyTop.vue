<template lang="jade">
.weekly-top.section
  .hd
    span 热门标签
  .bd.size12
    ul.nav-vendor
      li(@click='vendor(0)', class='li-on')
        img(src='../../assets/vendor-jd.png')
        span 京东
      li(@click='vendor(1)')
        img(src='../../assets/vendor-amazon.png')
        span 亚马逊
      li(@click='vendor(2)')
        img(src='../../assets/vendor-dangdang.png')
        span 当当
    ul.list-ranking
      li(v-for='0 in 5')
        span.index {{$index}}.
        .info
          a.name 永远讲不完的故事（新译本
          p.author (德)米切尔·恩德
        a.buy-btn 去购买
</template>

<script>
export default {

  name: 'weekly-top',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

@import "../../assets/book.scss";

.weekly-top .nav-vendor {
  margin-bottom: 15px;
}

.weekly-top .nav-vendor li img {
  width: 18px;
  float: left;
}

.weekly-top .nav-vendor li span {
  line-height: 18px;
}

.weekly-top .nav-vendor li {
  color: #ccc5bf;
  margin-right: 10px;
  display: inline-block;
  padding: 5px;
  border-radius: 2px;
  cursor: pointer;
}

.weekly-top .nav-vendor .li-on, .weekly-top .nav-vendor li:hover {
  color: #fff;
  background: #9b7c5e;
}

.weekly-top .list-ranking li {
  display: block;
  line-height: 20px;
  border-bottom: 1px dashed #ddd;
  padding: 6px 0px;
}

.weekly-top .list-ranking li .index {
  float: left;
}

.weekly-top .list-ranking li .info {
  display: inline-block;
  margin-left: 5px;
}

.weekly-top .list-ranking li .buy-btn {
  float: right;
  color: gray;
  margin-top: 7px;
  margin-right: 5px;
  padding: 3px 4px;
}

.weekly-top .list-ranking li:hover {
  background-color: #EAEAE7;
  .buy-btn {
    border: 1px solid #D7C891;
    color: #D7C891;
  }
}
</style>