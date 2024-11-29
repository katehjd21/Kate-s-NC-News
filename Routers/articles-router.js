const articlesRouter = require("express").Router();
const {
  getArticleById,
  getArticles,
  updateVoteByArticleId,
  getCommentsByArticleId,
  addCommentForArticle,
  addArticle,
} = require("../controllers/nc-news-controllers");

articlesRouter.route("/").get(getArticles).post(addArticle);

articlesRouter
  .route("/:article_id")
  .get(getArticleById)
  .patch(updateVoteByArticleId);

articlesRouter
  .route("/:article_id/comments")
  .get(getCommentsByArticleId)
  .post(addCommentForArticle);

module.exports = articlesRouter;
