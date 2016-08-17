<template lang="jade">
#index-sns
  .section
    a(href='#').homepage-top
    index-more(title='热点内容', link='https://www.baidu.com/')
    .side.index-side-w
      .yike
        a(target='_blank', target='#')
          img(style='width:265px', src="https://img3.doubanio.com/img/files/file-1431585796.jpg")
      index-more(title='线上活动', link='https://www.baidu.com/')
      .online
        ul
          li.size12(v-for='online in onlines')
            a.title {{online.title}}
            p.time {{online.time}}
            p.num {{online.num}}
    .main
      .albums
        ul
          li(v-for='album in albums').size12
            .pic
              a(href='https://www.baidu.com/')
                img(src='../../assets/index-sns-album.jpg', alt='')
              a.a-link {{album.title}}
              span.num {{album.num}}
      .notes
         ul
          li.size12(v-for='note in notes')
            a.a-link(target='_blank', href='http://www.zhihu.com/') {{note.title}}
            p.author {{note.author}}
            p.discribe {{note.discribe}}
</template>

<script>
import indexMore from './index-more'
export default {

  name: 'index-sns',
  components: {
    'index-more': indexMore
  },
  data () {
    return {
      albums: [{
        img: 'https://img1.doubanio.com/view/photo/albumcover/public/p2246016158.jpg',
        link: 'http://baidu.com/',
        title: '我的日记1',
        num: '33张照片'
      },
       {img: '../../assets/index-homepage-top.png',
        link: '',
        title: '我的日记2',
        num: '33张照片'
      },
       {img: '../../assets/index-sns-album.jpg',
        link: '',
        title: '我的日记3',
        num: '33张照片'
      },
       {img: '../../assets/index-sns-album.jpg',
        link: '',
        title: '我的日记4',
        num: '33张照片'
      }],
      notes: [{
        title: '二狗蛋款金额为if及诶哦我我给哦额外我机构为公IE文件给我饿哦一个吻',
        link: '',
        author: '二狗的日记',
        discribe: '卧槽金额金额金额金额金额金额金额金额金额二姐姐'
      },
      {
        title: '二狗蛋款金额为if及诶哦我我给哦额外我机构为公IE文件给我饿哦一个吻',
        link: '',
        author: null,
        discribe: null
      },
      {
        title: '二狗蛋款金额为if及诶哦我我给哦额外我机构为公IE文件给我饿哦一个吻',
        link: '',
        author: '',
        discribe: ''
      },
      {
        title: '二狗蛋款金额为if及诶哦我我给哦额外我机构为公IE文件给我饿哦一个吻',
        link: '',
        author: '',
        discribe: ''
      },
      {
        title: '二狗蛋款金额为if及诶哦我我给哦额外我机构为公IE文件给我饿哦一个吻',
        link: '',
        author: '',
        discribe: ''
      },
      {
        title: '二狗蛋款金额为if及诶哦我我给哦额外我机构为公IE文件给我饿哦一个吻',
        link: '',
        author: '',
        discribe: ''
      },
      {
        title: '二狗蛋款金额为if及诶哦',
        link: '',
        author: '',
        discribe: ''
      }],
      onlines: [{
        title: '宅的装甲：晒出你最爱的T恤1',
        link: '',
        time: '时间：6月29日 - 9月1日',
        num: '297人参加'
      },
      {
        title: '宅的装甲：晒出你最爱的T恤2',
        link: '',
        time: '时间：6月29日 - 9月1日',
        num: '297人参加'
      },
      {
        title: '宅的装甲：晒出你最爱的T恤3',
        link: '',
        time: '时间：6月29日 - 9月1日',
        num: '297人参加'
      }]
    }
  }
}
</script>

<style lang='scss' scoped>
#index-sns {
  color: #999;

  .homepage-top {
    display: block;
    background-image: url('../../assets/index-homepage-top.png');
    height: 90px;
    width: 100%;
  }

  .main {
    display: block;
    position: relative;
    top: -10px;
    width: calc(100% - 270px);

    .albums {
      float: left;
      width: 350px;
      margin-right: 30px;
      font-size: 0;
      letter-spacing: -0.31em;

      ul {
        margin: -10px 0 0 -10px;
        li {
        display: inline-block;
        zoom: 1;
        letter-spacing: normal;
        word-spacing: normal;
        width: 170px;
        vertical-align: top;
        margin: 10px 0 0 10px;
          .pic {
            img {
              width: 170px;
            }
            .num {
              position: relative;
              left: 5px;
            }
          }
        }
      }
    }

    .notes {
      ul {
        overflow: hidden;
        li {
          line-height: 18px;
          margin-bottom: 10px;
          .discribe {
            color: gray;
          }
        }
      }
    }
  }

  .side {
    position: relative;
    float: right;
    width: 265px;
    margin-left: 30px;
    top: -35px;
    height: 200px;
    ul {
      position: relative;
      top: -15px;
      li {
        line-height: 18px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>