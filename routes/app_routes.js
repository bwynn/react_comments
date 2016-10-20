const path = require('path');

module.exports = (app) => {

    // comments controller
    const commentCtrl = require('../controllers/comment_controller');

    // back end routes

    // get comments
    app.get("/api/comments", commentCtrl.getComments);

    // post comments
    app.post("/api/comments", commentCtrl.postComment);

    // front end routes
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};
