const commentsRouter = require("express").Router();
const {
  deleteCommentByCommentId,
  updateCommentById,
} = require("../controllers/nc-news-controllers");

commentsRouter
  .route("/:comment_id")
  .patch(updateCommentById)
  .delete(deleteCommentByCommentId);

module.exports = commentsRouter;
