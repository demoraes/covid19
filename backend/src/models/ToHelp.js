const mongoose = require('mongoose');

const ToHelpSchema = new mongoose.Schema({
  presentation: String,
  assignedTo: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  help: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Help',
    required: true,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ToHelp', ToHelpSchema);