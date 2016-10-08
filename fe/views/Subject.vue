<template lang="jade">
#subject
  vheader
  vnav
  article.wapper
    .content
      h1 {{item.title}}
      vinfo()
      .related-info
        .contentDesc
          vmore(title='内容简介')
          span {{item.summary}}
        .authorDesc
          vmore(title='作者简介')
          span {{item.author_intro}}
        .dict
          vmore(title='目录')
          span 第一章
            br
            | 第二章
            br
            | 第三章
            br
            | 第四章
            br
            | 第五章
            br
            | 后 记
        .user-tag
          vmore(title='豆瓣成员常用的标签(*)个')
          a(v-for='tag in item.tags') {{tag.name}}
        .subject-show
          vmore(title='丛书信息')
          span
            a 张悦然作品集(共6册)
            | , 这套丛书还有 《樱桃之远》,《葵花走失在1890》,《水仙已乘鲤鱼去》,《十爱》,《誓鸟》。
        .same-like-ebook
          vmore(title='喜欢读 \'\'\ 茧 \'\'\ 的人也喜欢的电子书')
          span 支持 Web、iPhone、iPad、Android 阅读器
          ul
            li(v-for='n in 5')
              .cover
                a.cover(href='')
                  img(src='https://img3.doubanio.com/lpic/s28897671.jpg' alt='')
              a.title 密林中
              span.price 19.00元
        .same-like
          vmore(title='喜欢读 \'\'\ 茧 \'\'\ 的人也喜欢')
          span 支持 Web、iPhone、iPad、Android 阅读器
          ul
            li(v-for='n in 10')
              .cover
                a.cover(href='')
                  img(src='https://img3.doubanio.com/lpic/s28897671.jpg' alt='')
              a.title 密林中
              span.price 19.00元
        vsortcmment
        vcomment
    .side 
  vfooter
</template>

<script>
import Vheader from '../components/pub/Vheader.vue'
import Vfooter from '../components/pub/Vfooter.vue'
import Vnav from '../components/pub/Vnav.vue'
import Info from '../components/subject/Info.vue'
import SortComment from '../components/subject/SortComment.vue'
import Comment from '../components/subject/Comment.vue'
import More from '../components/index/IndexMore.vue'
function fetchItem (store, _this) {
  if (_this.history !== undefined) {
    return store.dispatch('FETCH_ITEM_DATA', _this.history.current.params.id)
  }
}

export default {
  computed: {
    item () {
      return this.$store.state.item
    }
  },
  
  preFetch: fetchItem,

  beforeMount () {
    fetchItem(this.$store, this)
  },
  name: 'book-subject',

  components: {
    'vheader': Vheader,
    'vnav': Vnav,
    'vfooter': Vfooter,
    'vinfo': Info,
    'vmore': More,
    'vcomment': Comment,
    'vsortcmment': SortComment
  },

  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
#subject
  article
    margin-top 20px
    .content
      width 607px
      margin-right 30px
      float left
      h1
        font-size 25px
        line-height 60px
      .related-info
        .user-tag
          a
            font-size 12px
            padding 5px 10px
            display inline-block
            background #f5f5f5
            margin-right 15px
          a:hover
            background #EAEAEA
            color inherit
        .same-like, .same-like-ebook
          ul
            li
              display inline-block
              margin 15px 33px 15px 0
              font-size 12px
              width 85px
              text-align center
              line-height 18px
              .cover
                float left
              .title
                 display inline-block
              .price
                float left
                width 100%
                clear both
              img
                width 100%
    .side
      width 235px
      float right
    span
      font-size 12px
      line-height 18px
</style>