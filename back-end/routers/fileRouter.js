const express = require('express')
const FileModel = require('../db/models/fileModel')
const multer = require('multer')
const router = express.Router()

const upload = multer({
  dest: './uploads/',
  limits: {
    // 上传大小限制，最大 1MB
    fileSize: 1024 * 1024 * 1,
  },
  // 文件类型限制
  fileFilter: (req, file, callback) => {
    const mimetypes = ['image/png', 'image/jpg', 'image/jpeg']
    const allowed = mimetypes.some((type) => type === file.mimetype)

    if (allowed) {
      callback(null, true)
    } else {
      callback(new Error('不支持上传此类型的文件。'), false)
    }
  },
})

/**
 * @api {post} /files 文件上传
 * @apiGroup 文件
 *
 * @apiParam {File} file 文件，目前只支持png与jpeg的图片。
 *
 * @apiSuccess {String} originalname 源文件名
 * @apiSuccess {String} mimetype 文件类型
 * @apiSuccess {String} filename 文件名
 * @apiSuccess {Number} size 文件大小（字节单位）
 * @apiSuccess {String} url 访问地址
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 201 Created
 *   {
 *     "_id": "5e9c2652066bbb2e697761d2",
 *     "originalname": "592bf164N7a4187c3.jpg",
 *     "mimetype": "image/jpeg",
 *     "filename": "a0808bc7b17b51fc01da707ae5060b90",
 *     "size": 21356,
 *     "url": "/files/serve/5e9c2652066bbb2e697761d2",
 *     "__v": 0
 *   }
 */

router.post('/', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ msg: '请上传文件' })
  }

  const file = await FileModel.create(req.file)
  res.status(201).send(file)
})

router.get('/serve/:id', async (req, res) => {
  // 获取Id
  const { id } = req.params
  const file = await FileModel.findById(id)
  res.sendFile(file.filename, {
    root: 'uploads',
    headers: {
      'Content-type': file.mimetype,
    },
  })
})

module.exports = router
