const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Article = new Schema({
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  arweaveHash: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  isFeatured: { type: Boolean, required: true },
});
