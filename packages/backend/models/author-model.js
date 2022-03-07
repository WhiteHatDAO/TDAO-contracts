const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// import Article from "../models/article-model";
const File = new Schema({
  filename: { type: String, required: true },
  data: { type: String, required: true }
})

const Author = new Schema(
  {
    username: { type: String, required: true },
    bio: { type: String, required: true },
    authorImage: { type: File, required: false },
    coverImage: { type: File, required: false },
    walletId: { type: String, required: false },
    aboutme: { type: String, required: true },
    twitter: { type: String, required: false },
    linkedin: { type: String, required: false }
    //articles: { type: Array, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("authors", Author);
