<template lang="jade">
.comment
  vmore(title='短评' link='' subTitle='全部193条')
  .list.size12
    .type
      span(v-on:click="changeType(item)"
       v-for="item in types"
       v-bind:class="{active: activeType == item}") {{item}}
</template>

<script>
import More from '../index/IndexMore.vue'
export default {

  name: 'comment',

  components: {
    'vmore': More
  },

  data () {
    return {
      types: ['热门', '最新', '好友'],
      activeType: ''
    }
  },
  methods: {
    changeType: function(item) {
      this.activeType = item
    }
  }
}
</script>

<style lang="stylus" scoped>
span
  margin-right 5px
  color #37a
  cursor pointer
.active
  color gray
  background inherit
</style>