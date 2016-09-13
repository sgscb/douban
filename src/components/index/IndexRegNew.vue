<template >
  <div id="index-reg-new">
    <div class="wapper">
      <div class="app">
        <div class="summary">
          <p class="app-title">{{item.title}}<span class="version">{{item.version}} </span></p>
          <p class="app-slogan">{{item.slogan}}</p><a :href="item.lnk_app" class="download-app size12">下载豆瓣App</a><img :src="item.expand_qr" @mouseover="mouseover()" class="download-qr"/>
          <div @mouseout="mouseout()" @mouseover="mouseover()" class="download"><img :src="item.qr_expand" class="download-qr-h"/>
            <label>iOS/Android扫码直接下载</label>
          </div> 
        </div>
      </div>
      <div class="login index-side-w">
        <form>
          <input type="text" placeholder="邮箱/手机号" class="inp-email inp"/>
          <input type="text" placeholder="密码" class="inp-pass inp"/>
          <button class="btn-login btn">登陆豆瓣</button>
          <button class="btn-logup btn">注册账号</button>
          <div class="action">
            <input id="box-remb" type="checkbox" value="remb"/>
            <label for="box-remb" class="remb-label">记住我</label>
            <ul class="other-login">
              <li><a title="微博登陆" target="_blank" class="weibo"></a></li>
              <li><a title="微信登陆" target="_blank" class="wechat"></a></li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index-reg-new',
  props: ['item'],
  methods: {
    mouseover: function () {
      document.querySelector('.download').style.display = 'block'
    },
    mouseout: function () {
      document.querySelector('.download').style.display = 'none'
    }
  }
}
</script>

<style lang="css" scoped>
#index-reg-new {
  background-image: url('https://img3.doubanio.com/f/sns/463f29e6c00cdc1d15226bdcd3c86908526b9380/pics/sns/anony_home/doubanapp4_bg.png');
  height: 180px;
  width: 100%;
  background-position: top right;
  background-repeat: no-repeat;
  background-color: #f1faf1;
  margin-bottom: 30px;
}

.wapper .app {
  height: inherit;
  width: 630px;
  position:  absolute;
  background: url('https://img3.doubanio.com/f/sns/71a3e6872fb1f82eee7c462ef18c44d419dd7c99/pics/sns/anony_home/doubanapp4.png');
}

.summary {
  float: right;
  width: 200px;
  height: 100%;
}

.app-title {
  position: relative;
  font-size: 25px;
  top: 35px;
  font-weight: bold;
  line-height: 24px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
}

.version {
  position: relative;
  left: 10px;
  font-weight: 100;
}

.app-slogan {
  position: relative;
  top: 43px;
  letter-spacing: 12px;
  font-size: 10px;
}

.download-app {
  display: inline-block;
  height: 30px;
  width: 110px;
  background-color: #00B51D;
  color: #FFF;
  line-height: 30px;
  text-align: center;
  border-radius: 2px;
  position: relative;
  top: 55px;
  clear: both;
}

.download-qr {
  width: 28px;
  height: 28px;
  clear: both;
  position: relative;
  top: 66px;
  left: 5px;
  border: 1px solid #00B51D;
}

.download {
  background-color:white;
  position: relative;
  left: 115px;
  top: 25px;
  display: none;
  width: 200px;
  height: 230px;
  z-index: 2;
  border: 1px solid black;
}

.download img {
  margin: 20px;
  width: 160px;
  height: 160px;
}

.download label {
  position: relative;
  left: 20px;
  top: -5px;
  width: 160px;
  font-size:13.5px;
  text-align:center;
}

.login {
  height: calc(100% - 60px);
  position: relative;
  top: 30px;
  float: right;
}

.inp {
  width: calc(100% - 21px);
  height: 28px;
  padding: 0 7px;
  position: relative;
  margin-bottom: 4px;
}

.btn {
  position: relative;
  width: calc(50% - 6px);
  height: 30px;
  background-color: rgba(1,1,1,0);
  border: none;
}

.btn-login {
  background-color: #30A080;
  color: white;
  margin-right: 5px;
}
      
.btn-logup {
  border: 1px solid #30A080;
  color: #30A080;
}

.action {
  position: relative;
  top: 10px;
}

#box-remb {
  display: inline-block;
}

.remb-label {
  position: relative;
  font-size: 10px;
}

.other-login {
  float: right;
  height: 20px;
}

.other-login  li {
  position: relative;
  float: right;
  top: -5px;
}

.other-login  li a {
  display: inline-block;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.other-login  .wechat {
  background: url(https://img3.doubanio.com/f/sns/4f36445742b91d6a68fcc644827a00bcd536a4bb/pics/sns/anony_home/login/wechat.png)  no-repeat 100% 100%;
}

.other-login  .weibo {
  background: url('https://img3.doubanio.com/f/sns/875cb9fc6e5463efbfcdaaecb05c103a2864a68d/pics/sns/anony_home/login/weibo.png')  no-repeat 100% 100%;
}
</style>