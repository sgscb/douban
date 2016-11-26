

module.exports.host = function () {
  const isProd = process.env.NODE_ENV === 'production'
  const port = process.env.PORT || '4000'
  const devHost = 'http://127.0.0.1:' + port
  const prodHost = 'http://jk77.me:' + port
  const host = isProd ? prodHost : devHost
  return host
}