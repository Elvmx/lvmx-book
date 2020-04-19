const mongoose = require('../connect')
const bcryptjs = require('bcryptjs')

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: Array,
      default: () => {
        return ['user']
      },
    },
    avatar: {
      type: String,
      default: `${process.env.BASEURL}/assets/img/avatar.png`,
    },
  },
  {
    timestamps: true,
  }
)

userSchema.pre('save', function (next) {
  this.password = bcryptjs.hashSync(this.password, 10)
  next()
})

userSchema.methods.comparePassword = function (password) {
  return bcryptjs.compareSync(password, this.password)
}

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel
