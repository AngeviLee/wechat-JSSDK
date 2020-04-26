// 引入express
const express = require('express')

// 引入路径-返回path的目录名字
const path = require('path')

// 引入 jssdk 辅助工具
const { Wechat } = require('wechat-jssdk')
const wx = new Wechat({
    appId: "wx2938c8d29780dc1d",  // 开发阶段我们使用的是测试账户下的appId
    appSecret: "317c95e2233628579b1b71d9d1444fb7"  // 开发阶段我们使用的是测试账户下的appsecret
})

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

    // 通过此方法可以获取 config 接口注入权限验证配置的参数
    // 此处的 Your url 指的是使用 JS-SDK 那个页面的地址
    wx.jssdk.getSignature('http://localhost:3000/').then(signatureData => {
        console.log(signatureData)
        // 将生成的参数传入模板
        res.render('index', signatureData)
    })

})