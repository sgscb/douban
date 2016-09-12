<template lang="jade">
  #index-visitor
    index-header
    index-reg-new
    index-sns
    index-book
    index-footer
</template>

<script>
import IndexHeader from '../components/index/IndexHeader.vue'
import IndexFooter from '../components/index/IndexFooter.vue'
import IndexRegNew from '../components/index/IndexRegNew.vue'
import IndexSns from '../components/index/IndexSns.vue'
import IndexBook from '../components/index/IndexBook.vue'

export default {
  data () {
    return {
      app: {},
      sns: {},
      book: {}
    }
  },

  components: {
    IndexHeader,
    IndexRegNew,
    IndexSns,
    IndexBook,
    IndexFooter
  }
}
</script>

<style lang='stylus'>

</style>
