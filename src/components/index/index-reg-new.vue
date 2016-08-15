<template lang="jade">
  .index-reg-new
    .wapper.index-w
      .app
        .summary
          p.app-title 豆瓣
            span.version 4.0
          p.app-slogan 我们的精神角落
          a.download-app 下载豆瓣App
          img(src='https://img3.doubanio.com/f/sns/0c708de69ce692883c1310053c5748c538938cb0/pics/sns/anony_home/icon_qrcode_green.png').download-qr
          .download
            img(src='https://img3.doubanio.com/f/sns/1cad523e614ec4ecb6bf91b054436bb79098a958/pics/sns/anony_home/doubanapp_qrcode.png').download-qr-h
            label iOS/Android扫码直接下载
      .login.index-side-w
        form
          input(class='inp-email inp', type='text', placeholder='邮箱/手机号')
          input(class='inp-pass inp', type='text', placeholder='密码')
          button(class='btn-login btn') 登陆豆瓣
          button(class='btn-logup btn') 注册账号
          .action
            input(id='box-remb', type='checkbox', value='remb')
            label(class='remb-label', for='box-remb') 记住我
            ul.other-login
              li
                a(class='weibo', title='微博登陆', target='_blank')
              li
                a(class='wechat', title='微信登陆', target='_blank')
</template>

<script>
export default {
  name: 'indexRegNew',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.index-reg-new {
  background-image: url('https://img3.doubanio.com/f/sns/463f29e6c00cdc1d15226bdcd3c86908526b9380/pics/sns/anony_home/doubanapp4_bg.png');
  height: 180px;
  width: 100%;
  background-position: top right;
  background-repeat: no-repeat;
  background-color: #f1faf1;
  margin-bottom: 30px;

  .wapper {
    height: 100%;
    position: relative;
    margin: 0 auto;

    .app {
      height: inherit;
      width: 630px;
      position:  absolute;
      background: url('https://img3.doubanio.com/f/sns/71a3e6872fb1f82eee7c462ef18c44d419dd7c99/pics/sns/anony_home/doubanapp4.png');

      .summary {
        float: right;
        width: 200px;
        height: 100%;

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
          font-size: 12px;
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
      }
      .download {
        background-color:pink;
        position: relative;
        left: 115px;
        top: 25px;
        display: block;
        width: 200px;
        height: 230px;
        z-index: 2;
        border: 1px solid black;
        img {
          margin: 20px;
          width: 160px;
          height: 160px;
        }
        label {
          position: relative;
          left: 20px;
          top: -5px;
          width: 160px;
          font-size:13.5px;
          text-align:center;
        }
      }
    }


    .login {
      height: calc(100% - 60px);
      position: relative;
      top: 30px;
      float: right;

      .inp {
        width: calc(100% - 25px);
        height: 28px;
        padding: 0 10px;
        position: relative;
        margin-bottom: 4px;
      }

      .btn {
        position: relative;
        width: calc(50% - 4px);
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

          li {
            position: relative;
            float: right;
            top: -5px;
          }
          li a {
            display: inline-block;
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
          .wechat {
            background: url(https://img3.doubanio.com/f/sns/4f36445742b91d6a68fcc644827a00bcd536a4bb/pics/sns/anony_home/login/wechat.png)  no-repeat 100% 100%;
          }

          .weibo {
            background: url('https://img3.doubanio.com/f/sns/875cb9fc6e5463efbfcdaaecb05c103a2864a68d/pics/sns/anony_home/login/weibo.png')  no-repeat 100% 100%;
          }
        }
      }
    }
  }
}
</style>