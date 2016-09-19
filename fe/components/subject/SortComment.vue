<template lang="jade">
.sort-comment
  vmore(title='书评' link='' subTitle='全部193条')

</template>

<script>
import More from '../index/IndexMore.vue'
export default {

  name: 'sort-comment',

  components: {
    'vmore': More
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
</style>