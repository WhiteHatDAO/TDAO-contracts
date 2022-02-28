const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// import Article from "../models/article-model";

const Author = new Schema(
  {
    username: { type: String, required: true },
    walletId: { type: String, required: true },
    //articles: { type: Array, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("authors", Author);
