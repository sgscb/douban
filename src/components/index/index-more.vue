<template lang="jade">
  .index-more
    h2 {{title}}
      span.point &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
      span.wapper (&nbsp;
        a(target='_blank', href='{{link}}') 更多
      span.wapper &nbsp;)
</template>

<script>
export default {

  name: 'indexMore',
  props: ['title', 'link'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.index-more {
  width: 200px;
  height: 50px;
  position: relative;
  display: block;
  top: 10px;
  h2 {
    color: #072;
    font-size: 15px;

    .point {
      letter-spacing: -5px;
      position: relative;
      right: 5px;
    }

    .wapper {
      font-size: 12px;
      color: black;

      a {
        color: #669;
      }
    }
  }
}


</style>