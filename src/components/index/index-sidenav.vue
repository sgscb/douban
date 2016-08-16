<template lang="jade">
#index-sidenav
  .mod
    a.section-title.size25.a-link 读书
    .side-links
      ul.size14
        li
          a.a-link 分类1
        li
          a.a-link 分类2
        li
          a.a-link 分类3
  .apps-list
    ul.size12
      li
        .app-icon
          a
        a.app-name.a-link 豆瓣阅读
      li
        .app-icon
          a
        a.app-name.a-link 豆瓣阅读
</template>

// titleColor需要提取 app-list需要提取
<script>
export default {

  name: 'index-sidenav',

  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
#index-sidenav {
  width: 100px;
  float: left;
  a {
    color: #614e3c;
    position: relative;
    display: inline-block;
  }

  a:hover {
    color: white;
  }

  .side-links {
    margin-bottom: 40px;
    ul {
      position: relative;
      top: 12px;
      li {
        margin-top: 5px;
        height: 20px;
      }
    }
  }

  .apps-list {
    ul {
      li {
        margin-top: 15px;
        .app-icon {
          width: 100%;
          a {
            background: url('https://img3.doubanio.com/f/sns/02f0736c7010c4bdccebbd6d6b140ccb1506cf6b/pics/sns/app/app_icons_50_10.jpg');
            background-position: 0 0;
            width: 50px;
            height: 50px;
            border-radius: 10px;
            -webkit-box-shadow: 1px 1px 2px #999;
            -moz-box-shadow: 1px 1px 2px #999;
            box-shadow: 1px 1px 2px #999;
          }
        }

        .app-name {
          position: relative;
          top: 2px;
        }
      }
    }
  }
}
</style>