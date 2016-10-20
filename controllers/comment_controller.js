const Comments = require('../models/comment_model');

// /api/comments
// GET all comments
exports.getComments = (req, res) => {
    Comments.find((err, comments) => {
        if (err) return res.send(err);

        res.json(comments);
    });
};

// /api/add_comment
// POST add comment
exports.postComment = (req, res) => {

    const comment = new Comments();

    comment.author = req.body.author;
    comment.text = req.body.text;

    comment.save((err, data) => {
        if (err) res.send(err);

        res.json({message: "Comment posted: " + data}); 
    });
};
