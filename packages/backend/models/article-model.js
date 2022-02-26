const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Article = new Schema(
    {
        title: { type: String, required: true },
        shortDescription: { type: String, required: true },
        body: { type: String, required: true },
    }
);

