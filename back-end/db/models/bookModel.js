const mongoose = require('../connect')

const bookSchema = new mongoose.Schema(
  {
    // 书名
    name: { type: String, required: true, unique: true },
    // 简介
    info: { type: String, required: true },
    // 价格
    price: { type: Number, required: true },
    // 是否热门书籍
    isHot: { type: Boolean, default: false },
    // 图片
    imgUrl: { type: String, required: true },
  },
  { timestamps: true }
)

const BookModel = mongoose.model('book', bookSchema)

module.exports = BookModel
