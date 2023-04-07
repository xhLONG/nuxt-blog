const ip = require('ip')
const express = require('express')
const app = express()
const { createProxyMiddleware } = require('http-proxy-middleware')
const { port = 3001 } = require('yargs').argv
const compression = require('compression')

// 使用静态服务器运行打包出来的产物

app.use(express.static(`generateDist`))
app.use(
  createProxyMiddleware('/v2', {
    target: 'https://test-admin.wapcar.my', // 测试
    changeOrigin: true,
    ws: true,
    withCredentials: true
  })
)

app.use(compression())
app.listen(port, function() {
  console.log(`Example app listening on:
>>>> localhost:${port}
>>>> 127.0.0.1:${port}
>>>> ${ip.address()}:${port}`)
})
