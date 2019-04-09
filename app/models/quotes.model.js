const mongoose = require("mongoose");

const QuoteDetailsSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    // default: Date.now,
    required: false
  },
  updatedAt: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("quotesDetails", QuoteDetailsSchema);
