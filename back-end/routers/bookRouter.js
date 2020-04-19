const express = require('express')
const router = express.Router()
const BookModel = require('../db/models/bookModel')

/**
 * @api {post} /books 新增图书
 * @apiGroup 图书
 *
 * @apiParam {String} name 书名
 * @apiParam {String} info 简介
 * @apiParam {Number} price 价格
 * @apiParam {String} imgUrl 图片地址（通过 文件上传接口获取）
 *
 * @apiSuccess {String} name 书名
 * @apiSuccess {String} info 简介
 * @apiSuccess {Number} price 价格
 * @apiSuccess {Boolean} isHot 是否热门
 * @apiSuccess {String} imgUrl 图片地址（通过 文件上传接口获取）
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 201 Created
    {
      "isHot": false,
      "_id": "5e9c43c9f9412b0e7d5f196b",
      "name": "JavaScript 忍者秘籍",
      "info": "JavaScript 忍者秘籍（第二版）",
      "price": 10,
      "imgUrl": "http://localhost:9090/files/serve/5e9c43b6f9412b0e7d5f196a",
      "createdAt": "2020-04-19T12:27:53.175Z",
      "updatedAt": "2020-04-19T12:27:53.175Z",
      "__v": 0
    }
 */
router.post('/', async (req, res) => {
  const book = await BookModel.create(req.body)
  res.status(201).send(book)
})

module.exports = router
