const mongoose = require('mongoose');

const chatHistorySchema = new mongoose.Schema(
  {
    userId: { type: Number, required: true },
    question: { type: String, required: true },
    answer: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('ChatHistory', chatHistorySchema);
