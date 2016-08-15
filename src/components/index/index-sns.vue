<template lang="jade">
  .index-sns.index-w
    a(href='#').homepage-top
    .main
      <index-more></index-more>
    .side.index-side-w
</template>

<script>
import indexMore from './index-more'
export default {

  name: '',
  components: {
    'index-more': indexMore
  },
  props: {
    size: '23333'
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.index-sns {
  height: 700px;
  margin: 0 auto;
  .homepage-top {
    display: block;
    background-image: url('../../assets/index-homepage-top.png');
    height: 90px;
    width: 100%;
  }
  .main {
    display: block;
    height: 500px;
    width: calc(100% - 270px);
  }
  .side {
    display: block;
    height: 500px;
  }
}
</style>