const endpointsJson = require("../endpoints.json");
const { findTopics } = require("../models/topics.models");
const {
  retrieveArticleById,
  findArticles,
} = require("../models/articles.models");

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
      console.log(articles);
      res.status(200).send({ articles });
    })
    .catch(next);
};
