// 引入express
const express = require('express')

// 调用 express 框架
const app = express()

// 监听3000端口，相当于拥有服务器
app.listen(3000)

// 服务器定义相关路由来等待浏览器的请求
app.get('/', (req, res) => {
    res.send('Hello Word!')
})