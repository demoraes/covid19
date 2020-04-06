const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  thumbnail: String,
  password: {
    type: String,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.virtual('thumbnail_url').get(function () {
  return `http://localhost:3333/files/${this.thumbnail}`;
})

module.exports = mongoose.model('User', UserSchema);