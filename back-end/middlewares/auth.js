const jsonwebtoken = require('jsonwebtoken')

module.exports = (role) => {
  return (req, res, next) => {
    let token = req.get('Authorization')

    if (!token) {
      return res.status(401).send('请携带token')
    }
    token = token.replace(/^Bearer /, '')

    jsonwebtoken.verify(token, `${process.env.SECRET}`, (err, data) => {
      console.log(data)
      if (err || (role && !data.role.includes(role))) {
        return res.status(401).send(`身份验证失败`)
      }

      req.auth = data
      next()
    })
  }
}
