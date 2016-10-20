const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const CommentSchema = new Schema({
    date: {type: Date, default: Date.now},
    author: String,
    text: String
});

module.exports = mongoose.model('Comment', CommentSchema);
