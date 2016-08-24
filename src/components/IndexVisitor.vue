<template lang="jade">
  #index-visitor
    index-header
    index-reg-new(:app='app')
    index-sns(:sns='sns')
    index-book(:book='book')
    index-footer
</template>

<script>
import IndexHeader from './index/IndexHeader'
import IndexFooter from './index/IndexFooter'
import IndexRegNew from './index/IndexRegNew'
import IndexSns from './index/IndexSns'
import IndexBook from './index/IndexBook'

export default {
  ready () {
    this.$http.get('douban/index').then((response) => {
      // console.log(response.data)
      this.$set('app', response.data.app)
      this.$set('sns', response.data.sns)
      this.$set('book', response.data.book)
    }, (response) => {

    })
  },

  data () {
    return {
      app: '',
      sns: '',
      book: ''
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

<style lang='scss'>

</style>
