var socket = io.connect('http://127.0.0.1:3000')
var num = 0

// 新消息
socket.on('news', function (data) {
  num++
  $('#log').append('<li>' + '<span class=\'num\'>' + num + '</span>' + '<p class=\'news messages\'>' + '正在获取:  ' + data + '</p>' + '</li>')
})

// 系统消息
socket.on('system', function (data) {
  num++
  $('#log').append('<li>' + '<span class=\'num\'>' + num + '</span>' + '<p class=\'system messages\'>' + data + '</p>' + '</li>')
})

// 爬取豆瓣首页
$('#climb-index').click( function ( event ) {
  socket.emit('climb', 'index')
});

// 爬取豆瓣读书首页
$('#climb-book').click( function ( event ) {
  socket.emit('climb', 'book/index')
});