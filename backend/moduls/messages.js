const mongoose = require('mongoose');
const MessageSchema = mongoose.Schema({
  name: {
    type: String
  },
  from: {
    type: String
  },
  to: {
    type: String
  },
  messages: {
    type: Array
  }
})

module.exports = mongoose.model('messages', MessageSchema);
