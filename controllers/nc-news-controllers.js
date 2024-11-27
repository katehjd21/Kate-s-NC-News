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
  removeCommentByCommentId,
} = require("../models/comments.models");

const { findUsers } = require("../models/users.models");

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
  const { sort_by, order } = req.query;
  findArticles(sort_by, order)
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
  const { username, body } = req.body;
  const { article_id } = req.params;

  postCommentForArticle(username, body, article_id)
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

exports.deleteCommentByCommentId = (req, res, next) => {
  const { comment_id } = req.params;
  removeCommentByCommentId(comment_id)
    .then(() => {
      res.status(204).send();
    })
    .catch(next);
};

exports.getUsers = (req, res, next) => {
  findUsers()
    .then((users) => {
      res.status(200).send({ users });
    })
    .catch(next);
};
