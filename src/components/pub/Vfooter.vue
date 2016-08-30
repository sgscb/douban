<template lang="jade">
#vfooter.wapper.size12
  span.icp © 2005－2016 douban.com, all rights reserved 北京豆网科技有限公司
  span.about
    a 关于豆瓣 
    · 
    a 在豆瓣工作
    · 
    a 联系我们
    · 
    a 免责声明
    · 
    a 帮助中心
    · 
    a 移动应用
    · 
    a 豆瓣广告
</template>

<script>
export default {

  name: 'vfooter',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
#vfooter {
  clear: both;
  display: block;
  color: #999;
  padding: 12px 0;
  position: relative;
  top: 40px;
  overflow: hidden;
  zoom: 1;
  border-top: 1px dashed #ddd;
}

.icp { 
  float: left; 
}

.about { 
  float: right;
}

a {
  display: inline-block;
}

</style>