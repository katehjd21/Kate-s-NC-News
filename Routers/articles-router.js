const articlesRouter = require("express").Router();
const {
  getArticleById,
  getArticles,
  updateVoteByArticleId,
  getCommentsByArticleId,
  addCommentForArticle,
} = require("../controllers/nc-news-controllers");

articlesRouter.get("/", getArticles);

articlesRouter
  .route("/:article_id")
  .get(getArticleById)
  .patch(updateVoteByArticleId);

articlesRouter
  .route("/:article_id/comments")
  .get(getCommentsByArticleId)
  .post(addCommentForArticle);

// articlesRouter.get("/:article_id", getArticleById);

// articlesRouter.patch("/:article_id", updateVoteByArticleId);

// articlesRouter.get("/:article_id/comments", getCommentsByArticleId);

// articlesRouter.post("/:article_id/comments", addCommentForArticle);

module.exports = articlesRouter;
