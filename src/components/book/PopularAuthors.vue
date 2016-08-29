<template lang="jade">
.popular-authors.section
  .hd
    span 书评人
    a(href='https://book.douban.com/latest?icn=index-latestbook-all') 进入书评专区»
  .bd.row-2
    ul
      li(v-for='item in items')
        .cover
          a(:href='item.link', target='_blank')
            img(:src='item.pic', alt='item.name')
        .info.size12
          p
            a {{item.name}}
          p {{item.to}}
          p
            a {{item.info}}
          p {{item.num}} {{item.time}}
</template>

<script>
export default {

  name: 'popularauthors',

  props: ['items'],

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

@import "../../assets/book.scss";

.popular-authors .bd ul li .cover {
  float: left;
  margin-right: 20px;
}

.popular-authors .bd ul li .info {
  float: left;
  line-height: 20px;
  width: 200px;
}

</style>