<template lang="jade">
#index-book
  .section
    index-sidenav
    .side
      index-more(title='热门标签', link='')
      ul.book-cates
        li.size12.book-cates-item(v-for='bookCate in bookCates')
          ul.cate
            li.cate-item(v-for='cate in bookCate', track-by="$index")
              a.a-link {{cate}}
    .main
      .mod
        index-more(title='新书速递', link='')
        ul
          li
            img.pic(src='https://img1.doubanio.com/mpic/s28855479.jpg')
            a.title.size14 八万四千问
            p.author.size12 宗萨蒋扬33322323333钦哲仁...
            a.bn-link.size12 免费试读
          li
            img.pic(src='https://img1.doubanio.com/mpic/s28855479.jpg')
            a.title.size14 八万四千问
            p.author.size12 宗萨蒋扬33322323333钦哲仁...
            a.bn-link.size12 免费试读
          li
            img.pic(src='https://img1.doubanio.com/mpic/s28855479.jpg')
            a.title.size14 八万四千问
            p.author.size12 宗萨蒋扬33322323333钦哲仁...
            a.bn-link.size12 免费试读
          li
            img.pic(src='https://img1.doubanio.com/mpic/s28855479.jpg')
            a.title.size14 八万四千问
            p.author.size12 宗萨..
            a.bn-link.size12 免费试读
      .mod
        index-more(title='新书速递', link='')
        ul
          li
            img.pic(src='https://img1.doubanio.com/mpic/s28855479.jpg')
            a.title.size14 八万四千问
            p.author.size12 宗萨蒋扬33322323333钦哲仁...
            a.bn-link.size12 免费试读
          li
            img.pic(src='https://img1.doubanio.com/mpic/s28855479.jpg')
            a.title.size14 八万四千问
            p.author.size12 宗萨蒋扬33322323333钦哲仁...
            a.bn-link.size12 免费试读
          li
            img.pic(src='https://img1.doubanio.com/mpic/s28855479.jpg')
            a.title.size14 八万四千问
            p.author.size12 宗萨蒋扬33322323333钦哲仁...
            a.bn-link.size12 免费试读
          li
            img.pic(src='https://img1.doubanio.com/mpic/s28855479.jpg')
            a.title.size14 八万四千问
            p.author.size12 宗萨..
            a.bn-link.size12 免费试读
</template>

<script>
import indexSidenav from './index-sidenav'
import indexMore from './index-more'

export default {

  name: 'index-book',
  components: {
    indexSidenav,
    indexMore
  },
  data () {
    return {
      bookCates: [
        ['[加额鹅鹅鹅]', '加额鹅鹅鹅', '加额鹅鹅鹅', '加额鹅鹅鹅3', '2加额鹅鹅鹅', '加额鹅鹅鹅3'],
        ['[1112]', '1113', '1112', '1113', '1112', '1113', '加额鹅鹅鹅', '加额鹅鹅鹅', '加额鹅鹅鹅', '加额鹅鹅鹅3', '2加额鹅鹅鹅', '加额鹅鹅鹅3']
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#index-book {
  background: #f7f7f7;
  padding: 40px 0 20px;
  .main {
     display: inline-block;
     width: calc(950px - 425px);
    .mod {
      width: 100%;
      display: inline-block;
      ul {
        position: relative;
        top: -10px;
      }
      ul li {
        position: relative;
        float:left;
        margin-left: 10px;
        width: calc((100% - 40px) / 4);
        text-align: center;
        a {
          display: block;
        }

        .pic {
          position: relative;
          margin-bottom: 15px;
          width: 100px;
          height: 148px;
          border-width: 0;
          vertical-align: middle;
        }
        
        .title {
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          display: inline-block;
        }

        .author {
          position: relative;
          top: 8px;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }

        .bn-link {
          background-color: #999a95;
          color: white;
          position: relative;
          display: inline-block;
          padding: 5px 10px;
          border-radius: 2px;
          margin-top: 10px;
        }
      }
    }
  }

  .side {
    width: 265px;
    margin-left: 30px;
    float: right;
    height: 200px;
    .book-cates {
      .book-cates-item {
        .cate {
          margin: -1px 0 10px 0;
          padding-bottom: 8px;
          border-bottom: 1px solid #eaeaea;

            li:first-child {
              a {
                color: lightgray;
                cursor: auto;
              }
              a:hover {
                background-color:inherit;
                color: lightgray;
              }
            }
          .cate-item {
            display: inline-block;
            position: relative;
            margin-right: 10px;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>