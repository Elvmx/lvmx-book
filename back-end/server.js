// 引入 express
const express = require('express')
// 引入 dotenv
const dotenv = require('dotenv')
// 引入 express-async-errors
require('express-async-errors')
// 配置 dotenv。会自动查找 package.json 同级的 .env 文件
dotenv.config()

// 引入 路由
const fileRouter = require('./routers/fileRouter')
const bookRouter = require('./routers/bookRouter')

// 生成 express 实例
const app = express()

// 静态资源托管处理
app.use(express.static('./public'))

// req.body 处理
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/files', fileRouter)
app.use('/books', bookRouter)

// 统一错误处理
app.use((err, req, res, next) => {
  console.log(err.message)
  // 响应给前端
  res.status(500).send({
    msg: err.message,
  })
})

// 监听端口，启动服务
const server = app.listen(9090, () => {
  console.log('服务启动成功')
})
