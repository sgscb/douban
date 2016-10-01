<template lang="jade">
#tags
  vheader
  vnav
  vfooter
</template>

<script>
import Vheader from '../components/pub/Vheader.vue'
import Vfooter from '../components/pub/Vfooter.vue'
import Vnav from '../components/pub/Vnav.vue'

function fetchItem (store) {
  return store.dispatch('FETCH_ITEMS', '/book')
}

export default {

  name: 'tag',

  components: {
    'vheader': Vheader,
    'vnav': Vnav,
    'vfooter': Vfooter,
  },

  computed: {
    bookdata () {
      return this.$store.state.book
    }
  },
  
  preFetch: fetchItem,

  beforeMount () {
    fetchItem(this.$store)
  },
}
</script>

<style lang="stylus" scoped>
</style>