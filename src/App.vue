<template lang="jade">
  #app
    index-header
    index-reg-new(:app='app')
    index-sns(:sns='sns')
    index-book(:book='book')
    index-footer
</template>

<script>
import indexHeader from './components/index/index-header'
import indexRegNew from './components/index/index-reg-new'
import indexSns from './components/index/index-sns'
import indexBook from './components/index/index-book'
import indexFooter from './components/index/index-footer'

export default {
  ready () {
    this.$http.get('douban/index').then((response) => {
      // console.log(response.data)
      this.$set('app', response.data.app)
      this.$set('sns', response.data.sns)
      this.$set('book', response.data.book)
    }, (response) => {

    })
  },

  data () {
    return {
      app: '',
      sns: '',
      book: ''
    }
  },

  components: {
    indexHeader,
    indexRegNew,
    indexSns,
    indexBook,
    indexFooter
  }
}
</script>

<style lang='scss'>
@import "./assets/main.scss";

body {
  padding-top: 30px;
}
</style>
