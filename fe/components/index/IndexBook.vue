<template>
<div id="index-book">
  <div class="wapper">
    <index-sidenav :side_links="book.book_side_links"></index-sidenav>
    <div class="side">
      <index-more title="热门标签" link=""></index-more>
      <ul class="book-cates">
        <li v-for="tags in book.book_tags" class="size12 book-cates-item">
          <ul class="cate">
            <li v-for="tag in tags" track-by="$index" class="cate-item"><a :href="tag.link" class="a-link">{{tag.title}}</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="main">
      <div v-for="items in book.books" class="mod">
        <index-more title="新书速递" link=""></index-more>
        <ul>
          <li v-for="item in items" track-by="$index"><img :src="item.pic" class="pic"/><a :href="item.link" class="title size14">{{item.title}}</a>
            <p class="author size12">{{item.author}}</p><a :href="item.reader" class="bn-link size12">免费试读</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import IndexSideNav from './IndexSideNav.vue'
import IndexMore from './IndexMore.vue'

export default {

  name: 'index-book',

  components: {
    IndexSideNav,
    IndexMore
  },

  props: ['book']

}
</script>

<style lang="stylus" scoped>
#index-book
  background #f7f7f7
  padding 40px 0 20px

.main
  display inline-block
  width calc(950px - 425px)

.main .mod
  width 100%
  display inline-block

.mod ul
  position relative
  top -10px

.main .mod ul li
  position relative
  float:left
  margin-left 10px
  width calc((100% - 40px) / 4)
  text-align center

.pic
  position relative
  margin-bottom 15px
  width 100px
  height 148px
  border-width 0
  vertical-align middle
        
.title
  text-overflow -o-ellipsis-lastline
  overflow hidden
  text-overflow ellipsis
  display -webkit-box
  -webkit-line-clamp 1
  -webkit-box-orient vertical
  display inline-block

.author
  position relative
  top 8px
  text-overflow -o-ellipsis-lastline
  overflow hidden
  text-overflow ellipsis
  display -webkit-box
  -webkit-line-clamp 1
  -webkit-box-orient vertical

.bn-link
  background-color #999a95
  color white
  position relative
  display inline-block
  padding 5px 10px
  border-radius 2px
  margin-top 10px
  
.side
  width 265px
  margin-left 30px
  float right
  height 200px

.side .cate
  margin -1px 0 10px 0
  padding-bottom 8px
  border-bottom 1px solid #eaeaea

.side .cate li:first-child
  a
    color lightgray
    cursor auto


  a:hover
    background-color:inherit
    color lightgray


.side .cate-item
  display inline-block
  position relative
  margin-right 10px
  line-height 20px
</style>