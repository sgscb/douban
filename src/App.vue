<template>
  <div id="app">
    <index-header></index-header>
    <index-reg-new></index-reg-new>
    <index-sns></index-sns>
    <index-book></index-book>
  </div>
</template>

<script>
import indexHeader from './components/index/index-header'
import indexRegNew from './components/index/index-reg-new'
import indexSns from './components/index/index-sns'
import indexBook from './components/index/index-book'

export default {
  components: {
    indexHeader,
    indexRegNew,
    indexSns,
    indexBook
  }
}
</script>

<style lang='scss'>
@import "./assets/main.scss";

body {
  padding-top: 30px;
}
</style>
