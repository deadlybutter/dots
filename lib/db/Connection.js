const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  nodes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Node',
    required: true,
    index: true,
  },
  strong: {
    type: Boolean,
    required: true,
  },
  dates: {
    type: [Date],
    index: true,
  },
  description: String,
  sources: [String],
}, {
  timestamps: true,
});

const Connection = mongoose.model('Connection', schema);

module.exports = Connection;
