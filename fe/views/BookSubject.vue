<template lang="jade">
.book-subject
  vheader
  vnav
  article.wapper
    .content
      h1 机器学习
      info
    .side 1
  vfooter
</template>

<script>
import Vheader from '../components/pub/Vheader.vue'
import Vfooter from '../components/pub/Vfooter.vue'
import Vnav from '../components/pub/Vnav.vue'
import Info from '../components/subject/Info.vue'
export default {

  name: 'book-subject',

  components: {
    'vheader': Vheader,
    'vnav': Vnav,
    'vfooter': Vfooter,
    'info': Info
  },

  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
article
  margin-top 20px
  .content
    width 607px
    margin-right 30px
    float left
    h1
      font-size 25px
      line-height 60px
  .side
    width 235px
    float right
</style>