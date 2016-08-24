<template lang="jade">
  #index-header.wapper
    img.logo(src='https://img3.doubanio.com/f/sns/19886d443852bee48de2ed91f4a3bdfdaf8c809c/pics/nav/logo_db.png')
    .anony-srh
      form(action='', method='get')
        input(class='inp', type='text', placeholder='书籍、电影、音乐、小组、小站、成员', name='p')
        input(class='bn', type='submit', value='')
    .anony-nav-links
      ul
        li(v-for='item in navLinks')
          a(class='{{item.class}} nav-link', target='_blank', href='{{item.link}}')
</template>

<script>
export default {

  name: 'index-header',

  data () {
    return {
      navLinks: [
        {
          link: 'https://book.douban.com',
          class: 'lnk-book'
        },
        {
          link: 'https://movie.douban.com',
          class: 'lnk-movie'
        },
        {
          link: 'https://music.douban.com',
          class: 'lnk-music'
        },
        {
          link: 'https://group.douban.com',
          class: 'lnk-group'
        },
        {
          link: 'https://events.douban.com',
          class: 'lnk-events'
        },
        {
          link: 'https://fm.douban.com',
          class: 'lnk-fm'
        },
        {
          link: 'https://dognxi.douban.com',
          class: 'lnk-dongxi'
        },
        {
          link: 'https://market.douban.com',
          class: 'lnk-market'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#index-header {
	margin: 0px auto 7px;
  height: 50px;
  margin-top: 30px;
}

.logo {
  float: left;
}

.anony-srh {
  width: 270px;
  height: 30px;
  margin-left: 30px;
  float: left;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  zoom: 1;
  border: 1px solid #c3c3c3;
}

.bn {
  background: url(https://img3.doubanio.com/f/sns/f71f15922ebd7c0ff0ea0e7a25577529efd8981a/pics/icon/bn_srh_1.png) 50% 50% no-repeat;
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

input {
  width: 240px;
  height: 20px;
  font-size: 13px;
  padding: 5px;
  border: none;
}

.anony-nav-links {
  float: left;
  margin-top: 6px;
  margin-left: 10px;
}

.anony-nav-links ul li {
  position: relative;
  float: left;
  margin: 0 0 0 20px;
}

.anony-nav-links ul li a {
  background: url('https://img3.doubanio.com/f/sns/a98a716a173efb01ba787c966b4ba337b7cf9f55/pics/sns/anony_home/anony_nav_logo@2x.png') no-repeat 100% 100%;
  width: 40px;
  height: 20px;
  zoom: 1;
  overflow: hidden;
  line-height: 20em;
  display: inline-block;
}

.anony-nav-links .lnk-book {
  background-position: 0px 0px;
}

.anony-nav-links .lnk-movie {
  background-position: -60px 0px;
}

.anony-nav-links .lnk-music {
  background-position: -120px 0px;
}

.anony-nav-links .lnk-group {
  background-position: -180px 0px;
}

.anony-nav-links .lnk-fm {
  background-position: -240px 0px;
}

.anony-nav-links .lnk-events {
  background-position: -300px 0px;
}

.anony-nav-links .lnk-dongxi {
  background-position: -360px 0px;
}

.anony-nav-links .lnk-market {
  background-position: -420px 0px;
}
</style>