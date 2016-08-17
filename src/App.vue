<template lang="jade">
  #app
    index-header
    index-reg-new
    index-sns
    index-book
    index-footer
</template>

<script>
import indexHeader from './components/index/index-header'
import indexRegNew from './components/index/index-reg-new'
import indexSns from './components/index/index-sns'
import indexBook from './components/index/index-book'
import indexFooter from './components/index/index-footer'

export default {
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
