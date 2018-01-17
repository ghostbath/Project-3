const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dreamSchema = new Schema({
  dream: { type: String, required: true },
  user: { type: String, required: true },
  dreamType: String,
  date: { type: Date, default: Date.now }
});

const Dream = mongoose.model("Dream", dreamSchema);

module.exports = Dream;
