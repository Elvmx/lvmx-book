const express = require('express')
const router = express.Router()
const BookModel = require('../db/models/bookModel')
const auth = require('../middlewares/auth')

/**
 * @api {post} /books 新增图书
 * @apiGroup 图书
 *
 * @apiParam (Body 参数) {String} name 书名
 * @apiParam (Body 参数) {String} info 简介
 * @apiParam (Body 参数) {Number} price 价格
 * @apiParam (Body 参数) {String} imgUrl 图片地址（通过 文件上传接口获取）
 *
 * @apiSuccess (Success 201) {String} name 书名
 * @apiSuccess (Success 201) {String} info 简介
 * @apiSuccess (Success 201) {Number} price 价格
 * @apiSuccess (Success 201) {Boolean} isHot 是否热门
 * @apiSuccess (Success 201) {String} imgUrl 图片地址
 *
 * @apiSuccessExample (Success 201) Response:
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
router.post('/', auth('admin'), async (req, res) => {
  const book = await BookModel.create(req.body)
  res.status(201).send(book)
})

/**
 * @api {get} /books 查询图书
 * @apiGroup 图书
 *
 * @apiParam (Query 参数) {Boolean} [hot] 查询热门图书
 *
 * @apiSuccess (Success 200) {Object[]} books
 * @apiSuccess (Success 200) {String} books.name 书名
 * @apiSuccess (Success 200) {String} books.info 简介
 * @apiSuccess (Success 200) {Number} books.price 价格
 * @apiSuccess (Success 200) {Boolean} books.isHot 是否热门
 * @apiSuccess (Success 200) {String} books.imgUrl
 *
 * @apiSuccessExample (Success 200) Response:
 *  HTTP/1.1 200 OK
    [
      {
        "isHot": false,
        "_id": "5e9c470c083fd314e1437dfd",
        "name": "零基础学Java",
        "info": "学起来",
        "price": 80,
        "imgUrl": "http://localhost:9090/files/serve/5e9c46f9083fd314e1437dfc",
        "createdAt": "2020-04-19T12:41:48.481Z",
        "updatedAt": "2020-04-19T12:41:48.481Z",
        "__v": 0
      },
      ...
    ]
 */
router.get('/', async (req, res) => {
  let books = []
  if (req.query.isHot) {
    books = await BookModel.find({ isHot: true }).sort({ updatedAt: -1 })
    return res.status(200).send(books)
  }
  books = await BookModel.find().sort({ updatedAt: -1 })
  res.status(200).send(books)
})

/**
 * @api {get} /books/:id 图书详情
 * @apiGroup 图书
 *
 * @apiParam (Param 参数) {String} id 图书Id
 *
 * @apiSuccess (Success 200) {String} books.name 书名
 * @apiSuccess (Success 200) {String} books.info 简介
 * @apiSuccess (Success 200) {Number} books.price 价格
 * @apiSuccess (Success 200) {Boolean} books.isHot 是否热门
 * @apiSuccess (Success 200) {String} books.imgUrl 图片地址
 *
 * @apiSuccessExample (Success 200) Response:
 *  HTTP/1.1 200 OK
    {
      "isHot": false,
      "_id": "5e9c470c083fd314e1437dfd",
      "name": "零基础学Java",
      "info": "学起来",
      "price": 80,
      "imgUrl": "http://localhost:9090/files/serve/5e9c46f9083fd314e1437dfc",
      "createdAt": "2020-04-19T12:41:48.481Z",
      "updatedAt": "2020-04-19T12:41:48.481Z",
      "__v": 0
    }
 */
router.get('/:id', async (req, res) => {
  const id = req.params.id
  const book = await BookModel.findById(id)
  res.status(200).send(book)
})

module.exports = router
