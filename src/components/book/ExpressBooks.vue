<template lang="jade">
.books-express
  .hd
    span 新书速递
    a(href='https://book.douban.com/latest?icn=index-latestbook-all') 更多»
    .slide-controls
      ol.slide-dots
        li(v-for='1 in 4')
          a(@click='carousel($index + 1)', class='dot{{$index}}')
      .slide-btns
        a(class='prev', @click='prev()') ‹
        a(class='next', @click='next()') ›
</template>

<script>
export default {

  name: 'expressbooks',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>