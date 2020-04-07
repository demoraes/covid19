const mongoose = require('mongoose');

const HelpSchema = new mongoose.Schema({
  thumbnail: String,
  title:String,
  city: String,
  description: String,
  contribution: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

HelpSchema.virtual('thumbnail_url').get(function () {
  return `http://localhost:3333/files/${this.thumbnail}`;
})

module.exports = mongoose.model('Help', HelpSchema);