const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/lvmx-book'

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('数据库连接成功')
  })
  .catch((error) => {
    console.log('数据库连接失败')
    console.log(error)
  })

module.exports = mongoose
