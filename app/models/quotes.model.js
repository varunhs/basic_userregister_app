const mongoose = require("mongoose");

const QuoteDetailsSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    // default: Date.now,
    required: false
  },
  updatedAt: {
    type: Date,
    required: false
  }
});

module.exports = mongoose.model("quotesDetails", QuoteDetailsSchema);
