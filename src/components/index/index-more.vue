<template lang="jade">
  .index-more
    h2 热点内容 
      span.point &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
      span.wapper (&nbsp;
        a {{ size }}
      span.wapper &nbsp;)
</template>

<script>
export default {

  name: 'indexMore',
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