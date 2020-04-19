const express = require('express')
const jsonwebtoken = require('jsonwebtoken')
const router = express.Router()
const UserModel = require('../db/models/userModel')

/**
 * @api {post} /auth/register 注册
 * @apiGroup 用户
 *
 * @apiParam (Body 参数) {String} username 用户名
 * @apiParam (Body 参数) {String} password 密码
 *
 * @apiSuccess (Success 201) {String} _id 用户id
 * @apiSuccess (Success 201) {String} username 用户名
 * @apiSuccess (Success 201) {String} avatar 用户图像
 *
 * @apiSuccessExample (Success 201) Response:
 *  HTTP/1.1 201 Created
    {
      "avatar": "http://localhost:9090/assets/img/avatar.png",
      "_id": "5e9c5614156feb3886e82061",
      "username": "李四",
      "createdAt": "2020-04-19T13:45:56.468Z",
      "updatedAt": "2020-04-19T13:45:56.468Z",
      "__v": 0
    }
 */
router.post('/auth/register', async (req, res) => {
  const user = await UserModel.create({
    username: req.body.username,
    password: req.body.password,
  })
  const { password, role, ...result } = user.toJSON()
  res.status(201).send(result)
})

/**
 * @api {post} /auth/login 登录
 * @apiGroup 用户
 *
 * @apiParam (Body 参数) {String} username 用户名
 * @apiParam (Body 参数) {String} password 密码
 *
 * @apiSuccess (Success 200) {String} token token
 *
 * @apiSuccessExample (Success 200) Response:
 *  HTTP/1.1 200 OK
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTljNTYxNDE1NmZlYjM4ODZlODIwNjEiLCJ1c2VybmFtZSI6IuadjuWbmyIsImlhdCI6MTU4NzMwNDQ4MywiZXhwIjoxNTg3MzExNjgzfQ.ofhvmyoCT93_D3h2bxX4-9FxGFQ-dKU2pV_RgebANBU"
    }
 */
router.post('/auth/login', async (req, res) => {
  const { username, password } = req.body

  let user = await UserModel.findOne({ username })

  if (user.comparePassword(password)) {
    const token = jsonwebtoken.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role,
      },
      `${process.env.SECRET}`,
      {
        expiresIn: '2h',
      }
    )
    res.status(200).send({ token })
  } else {
    // 不通过，用户名或密码不正确
    throw new Error('用户名或密码不正确')
  }
})

module.exports = router
