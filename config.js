

module.exports.host = function () {
  const isProd = process.env.NODE_ENV === 'production'
  const port = process.env.PORT || '8080'
  const devHost = 'http://127.0.0.1:' + port
  const prodHost = 'http://jk77.me:' + port
  const host = isProd ? config.prodHost : config.devHost
  return host
}