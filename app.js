// 引入express
const express = require('express')

// 引入路径-返回path的目录名字
const path = require('path')

// 调用 express 框架
const app = express()

// 监听3000端口，相当于拥有服务器
app.listen(3000)

// 配置xtpl模板引擎-要求模板是以 xtpl 后缀名的
app.set('view engine', 'xtpl')

// 配置模板目录
app.set('views', path.join(__dirname, 'views'))

// 配置静态资源目录
app.use(express.static(path.join(__dirname, 'public')))

// 服务器定义相关路由来等待浏览器的请求
app.get('/', (req, res) => {
    // res.send('Hello Word!')
    res.render('index')
})