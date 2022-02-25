const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Author = new Schema(
  {
    username: { type: String, required: true },
    walletId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("authors", Author);
