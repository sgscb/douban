<template lang="jade">
#index-sidenav
  .mod
    a.section-title.size25.a-link 读书
    .side-links
      ul.size14(v-for='item in side_links')
        li
          a.a-link(:href='item.link') {{item.title}}
  .apps-list
    ul.size12
      li
        .app-icon
          a
        a.app-name.a-link 豆瓣阅读
</template>

// titleColor需要提取 app-list需要提取
<script>
export default {

  name: 'index-sidenav',

  props: ['side_links'],

  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
#index-sidenav {
  width: 100px;
  float: left;
  margin-right: 20px;
}

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
}

.side-links ul {
  position: relative;
  top: 12px;
}

.side-links ul li {
  margin-top: 5px;
  height: 20px;
}

.apps-list li {
  margin-top: 15px;
}

.app-name {
  position: relative;
  top: 2px;
}

.app-icon {
  width: 100%; 
}

.app-icon a {
  background: url('https://img3.doubanio.com/f/sns/02f0736c7010c4bdccebbd6d6b140ccb1506cf6b/pics/sns/app/app_icons_50_10.jpg');
  background-position: 0 0;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  -webkit-box-shadow: 1px 1px 2px #999;
  -moz-box-shadow: 1px 1px 2px #999;
  box-shadow: 1px 1px 2px #999;
}
</style>