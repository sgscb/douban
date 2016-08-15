<template>
  <div id="app">
    <index-header></index-header>
    <index-reg-new></index-reg-new>
    <index-sns></index-sns>
  </div>
</template>

<script>
import indexHeader from './components/index/index-header'
import indexRegNew from './components/index/index-reg-new'
import indexSns from './components/index/index-sns'

export default {
  components: {
    indexHeader,
    indexRegNew,
    indexSns
  }
}
</script>

<style lang='scss'>
@import "./assets/main.scss";

body {
  padding-top: 30px;
}
</style>
