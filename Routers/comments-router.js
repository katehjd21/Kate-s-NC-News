const commentsRouter = require("express").Router();
const {
  deleteCommentByCommentId,
} = require("../controllers/nc-news-controllers");

commentsRouter.delete("/:comment_id", deleteCommentByCommentId);

module.exports = commentsRouter;
