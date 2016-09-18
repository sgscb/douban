const { io } = require('../../server.js');
const express = require('express')
const superagent = require('superagent')
const cheerio = require('cheerio')
const moment = require('moment')
const redis = require('redis')
const client = redis.createClient()
const climbIndex = require('../spiders/climbIndex')
const climbBook = require('../spiders/climbBook')
const router = express.Router()

router.get('/api/spider', (req, res) => {
  climbIndex(superagent, cheerio, io)
  climbBook(superagent, cheerio, io)
  res.send('已经开始爬取')
})

// 豆瓣首页
router.get('/api/douban/index', (req, res) => {
  client.get('/api/douban/index', (err, data) => {
    if (err) {
      res.send(err)
      return
    }
    !data && climbIndex(superagent, cheerio, io)
    res.send(JSON.parse(data))
  })
})

// 豆瓣读书
router.get('/api/douban/book', (req, res) => {
  client.get('/api/douban/book', (err, data) => {
    if (err) {
      res.send(err)
      return
    }
    !data && climbBook(superagent, cheerio, io)
    res.send(JSON.parse(data))
  })
})

// websockets连接建立
io.sockets.on('connect', (socket) => {
  socket.emit('system', 'Connect Success At  ' + moment().format('YYYY-MM-DD h:mm:ss A'))
  socket.on('system', (data) => {
    console.log(data)
  })

  // 处理爬取请求
  socket.on('climb', (data) => {
    switch (data) {
      case 'index': {
        climbIndex(superagent, cheerio, socket)
        break
      }
      case 'book/index': {
        climbBook(superagent, cheerio, socket)
        break
      }
    }
  })
})

module.exports = router