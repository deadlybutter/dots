const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    index: true,
    type: String,
  },
  photo: {
    type: String,
  },
  description: String,
  sources: [String],
  x: {
    type: Number,
    default: 0,
  },
  y: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
  },
}, {
  timestamps: true,
});

const Node = mongoose.model('Node', schema);

module.exports = Node;
