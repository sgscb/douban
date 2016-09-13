<template>
<div class="index-more">
  <h2 class="size15">{{title}}<span class="point">&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·</span><span class="wapper size12">(&nbsp;<a target="_blank" :href="link">更多</a></span><span class="wapper size12">&nbsp;)</span></h2>
</div>
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

<style lang="css" scoped>
.index-more {
  width: 100%;
  height: 50px;
  position: relative;
  display: block;
  top: 10px;
}

h2 {
  color: #072;
}

.point {
  letter-spacing: -5px;
  position: relative;
  margin: 0 5px;
}
    
.wapper {
  color: black;
}

a {
  color: #669;
}
</style>