
<template lang="jade">
#book
  vheader
  vnav
  .wapper
    #book_home_banner
      a(href='https://market.douban.com/book/zaofangzi/?platform=web&channel=dale_book_home_top_super_banner')
        img(src='../assets/book-top.jpg')
    .content
      .books-express
        .hd
          span 新书速递
          a.size12.a-link(href='https://book.douban.com/latest?icn=index-latestbook-all') 更多»
          .slide-controls
            ol.slide-dots
              li(v-for='0 in 4')
                a(@click='carousel($index)')
            .slide-btns
              a(class='prev', @click='prev()') ‹
              a(class='next', @click='next()') ›
        .bd
          ul.carousel(v-for='item in items')
            li(v-for='subitem in item')
              a {{subitem * 10}}
    .book-side

</template>

<script>
import Vheader from './pub/Vheader'
import Vnav from './pub/Vnav'
export default {

  name: 'book',

  components: {
    'vheader': Vheader,
    'vnav': Vnav
  },

  data () {
    return {
      items: [1, 2, 3, 4],
      page: 0
    }
  },

  methods: {
    prev: function () {
      this.$set('page', this.page <= 0 ? 0 : this.page--)
      this.carousel(this.page)
    },

    next: function () {
      this.$set('page', this.page >= 4 ? 4 : this.page++)
      this.carousel(this.page)
    },

    carousel: (index) => {
      console.log(index)
      // document.querySelector('.books-express .bd').style.left = index * -605 + 'px'
      let obj = -605 * index
      let el = document.querySelector('.books-express .bd')
      var current = 0
      var temp = -605 * index / 121
      if (index === 0) {
        temp = 5
        current = -605
      }
      let timer = setInterval(() => {
        if (Math.ceil(current) === obj) {
          clearInterval(timer)
          return
        }
        current += temp
        el.style.left = current + 'px'
      }, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
#book_home_banner {
  position: relative;
  margin: 20px 0px;
}

.content {
  float: left;
  width: 590px;
  padding-right: 40px;
  margin-top: 30px;
}

.hd {
  border-bottom: 1px solid #ddd;
  margin-bottom: 16px;
  padding-bottom: 6px;
  font-size: 18px;
}

.hd a {
  position: relative;
  margin-left: 15px;
}

.slide-controls {
  float: right;
}

.slide-controls .slide-dots li {
  display: inline;
}

.slide-controls .slide-dots a {
  width: 5px;
  height: 5px;
  display: inline-block;
  zoom: 1;
  margin-left: 8px;
  border-radius: 5px;
  background: #dfdfdf;
}

.slide-controls .slide-dots .active {
  background-color: #9b9a8f;
}

.slide-controls .slide-dots {
  float: left;
  position: relative;
  margin-top: -1px;
}

.slide-controls .slide-btns {
  float: right;
}

.slide-controls .slide-btns a {
  display: inline-block;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 16px;
  border-radius: 8px;
  font: 100 16px Arial;
  color: white;
  background-color: #9b9a8f;
}

.books-express {
  overflow: hidden;
}

$bd_width: 605px;

.books-express .bd {
  width: $bd_width * 4;
  position: relative;
}
.bd ul {
  width: $bd_width;
  display: inline-block;
}

.book-side {
  background-color: lightgray;
  float: right;
  width: 310px;
  height: 1000px;
}

.animated.v-enter {
    animation: fadein .5s;
}

.animated.v-leave {
    animation: fadeout .5s;
}

@keyframes fadein {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes fadeout {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(0);
    }
}
</style>