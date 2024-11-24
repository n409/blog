let mongoose = require("mongoose");
const { type } = require("os");
const { title } = require("process");
let Schema = mongoose.Schema;

let postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
});

let postModel = mongoose.model("postModel", postSchema);

module.exports = postModel;