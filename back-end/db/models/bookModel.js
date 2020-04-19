const mongoose = require('../connect')

const bookSchema = new mongoose.Schema({
  // 书名
  name: { type: String, required: true, unique: true },
  // 简介
  info: { type: String, required: true },
  // 价格
  price: { type: Number, required: true },
  // 图片
  imgUrl: { type: String },
})

const BookModel = mongoose.model('book', bookSchema)

module.exports = BookModel
