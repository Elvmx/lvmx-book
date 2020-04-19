const mongoose = require('../connect')

const fileSchema = new mongoose.Schema({
  // 源文件名
  originalname: { type: String, required: true },
  // 文件名
  filename: { type: String, required: true },
  // 文件类型
  mimetype: { type: String, required: true },
  // 文件大小
  size: { type: Number, required: true },
  // 访问地址
  url: { type: String },
})

fileSchema.pre('save', function (next) {
  this.url = `${process.env.BASEURL}/files/serve/${this._id}`
  next()
})

const FileModel = mongoose.model('file', fileSchema)

module.exports = FileModel
