const endpointsJson = require("../endpoints.json");
const { findTopics } = require("../models/topics.models");
const {
  retrieveArticleById,
  findArticles,
  patchVoteByArticleId,
} = require("../models/articles.models");
const {
  fetchCommentsByArticleId,
  checkArticleIdExists,
  postCommentForArticle,
} = require("../models/comments.models");

exports.getApi = (req, res) => {
  res.status(200).send({ endpoints: endpointsJson });
};

exports.getTopics = (req, res, next) => {
  findTopics()
    .then((topics) => {
      res.status(200).send({ topics });
    })
    .catch(next);
};

exports.getArticleById = (req, res, next) => {
  const { article_id } = req.params;
  retrieveArticleById(article_id)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch(next);
};

exports.getArticles = (req, res, next) => {
  findArticles()
    .then((articles) => {
      res.status(200).send({ articles });
    })
    .catch(next);
};

exports.getCommentsByArticleId = (req, res, next) => {
  const { article_id } = req.params;
  const promises = [fetchCommentsByArticleId(article_id)];

  if (article_id) {
    promises.push(checkArticleIdExists(article_id));
  }

  Promise.all(promises)
    .then(([comments]) => {
      res.status(200).send({ comments });
    })
    .catch(next);
};

exports.addCommentForArticle = (req, res, next) => {
  const { article_id } = req.params;
  const comment = req.body;
  postCommentForArticle(article_id, comment)
    .then((comment) => {
      res.status(201).send({ comment });
    })
    .catch(next);
};

exports.updateVoteByArticleId = (req, res, next) => {
  const { inc_votes } = req.body;
  const { article_id } = req.params;
  patchVoteByArticleId(inc_votes, article_id)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch(next);
};
