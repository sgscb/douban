<template >
<div id="index-sns">
  <div class="wapper"><a href="#" class="homepage-top"></a>
    <index-more title="热点内容" link="https://www.baidu.com/"></index-more>
    <div class="side index-side-w">
      <div class="yike">
        <a target="_blank" :target="sns.yike.link">
          <img style="width:265px" :src="sns.yike.pic"/>
        </a>
      </div>
      <index-more title="线上活动" link="https://www.baidu.com/"></index-more>
      <div class="online">
        <ul>
          <li v-for="online in sns.onlines" class="size12">
            <a :href="sns.link" class="title a-link" target='_blank'>{{online.title}}</a>
            <p class="time">{{online.time}}</p>
            <p class="num">{{online.desc}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="albums">
        <ul>
          <li v-for="album in sns.albums" class="size12">
            <div class="pic cover">
              <a :href="album.link" target="_blank">
                <img :src="album.pic" :alt="album.title"/>
              </a>
            </div>
            <a class="a-link">{{album.title}}</a>
            <span class="num">{{album.num}}</span>
          </li>
        </ul>
      </div>
      <div class="notes">
        <ul>
          <li v-for="note in sns.notes" class="size12"><a :href="note.link" class="a-link">{{note.title}}</a>
            <p v-if="note.author" class="author">{{note.author}}</p>
            <p v-if="note.author" class="desc">{{note.desc}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import IndexMore from './IndexMore.vue'
export default {

  name: 'index-sns',

  components: {
    'index-more': IndexMore
  },

  props: ['sns']
}
</script>

<style lang='css' scoped>
#index-sns {
  color: #999;
}

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
  min-height: 400px;
  margin-top: 10px;
}

.albums {
  float: left;
  width: 370px;
  font-size: 0;
  letter-spacing: -0.31em;

}

.albums ul {
  margin: 0 10px 0 0px;
}

.albums ul li {
  display: inline-block;
  zoom: 1;
  letter-spacing: normal;
  word-spacing: normal;
  width: 170px;
  vertical-align: top;
  margin-right: 10px;
  margin-bottom: 10px;
}
          
.pic {
  img {
    width: 170px;
  }
  .num {
    position: relative;
    left: 5px;
  }
}

.notes ul {
  overflow: hidden;
}

.notes .desc {
  color: gray;
}

.notes li {
  line-height: 20px;
  margin-bottom: 10px;
}

.side {
  position: relative;
  float: right;
  width: 265px;
  margin-left: 30px;
  height: 200px;
}
    
.side ul {
  position: relative;
}

.side li {
  line-height: 20px;
  margin-bottom: 10px;
}
</style>