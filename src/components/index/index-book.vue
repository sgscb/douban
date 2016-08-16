<template lang="jade">
#index-book
  .section
    index-sidenav
    .side
    .main
      .mod
        index-more(title='新书速递', link='')
        ul
          li
            img.pic(src='https://img1.doubanio.com/mpic/s28855479.jpg')
            a.title.size14 八万四千问
            label.author.size12 宗萨蒋扬33322323333钦哲仁...
            a.bn-link.size14 免费试读
          li
            img(src='https://img1.doubanio.com/mpic/s28855479.jpg')
            a 八万四千问
            label 宗萨蒋扬钦哲仁...
            a 免费试读
          li
            img(src='https://img1.doubanio.com/mpic/s28855479.jpg')
            a 八万四千问
            label 宗萨
            a 免费试读
          li
            img(src='https://img1.doubanio.com/mpic/s28855479.jpg')
            a 八万四千问
            label 宗萨蒋
            a 免费试读
      .mod
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

    }
  }
}
</script>

<style lang="scss" scoped>
#index-book {
  background: #f7f7f7;
  padding: 40px 0 20px;
  height: 200px;
  .main {
     display: inline-block;
      width: calc(950px - 400px);
    .mod {
      width: 100%;
      ul li {
        display: inline-block;
        position: relative;
        margin-left: 10px;
        width: calc((100% - 40px) / 4);
        overflow: hidden;
        a {
          display: block;
        }

        .pic {
          position: relative;
          margin-top: -15px;
          margin-bottom: 15px;
        }
        
        .title {
          width: 100px;
          height: 10px;
          word-break: none;
          row:1;
          overflow: hidden;
        }

        .author {
          position: relative;
          top: 5px;
        }

        .bn-link {
          background-color: #999a95;
          color: white;
          position: relative;
          display: inline-block;
          padding: 5px 10px;
          border-radius: 2px;
          text-align: center;
          margin-top: 10px;
        }
      }
    }
  }

  .side {
    width: 265px;
    margin-left: 30px;
    float: right;
    background-color: pink;
    height: 200px;
  }
}
</style>