const endpointsJson = require("../endpoints.json");
const { findTopics } = require("../models/topics.models");

exports.getApi = (req, res) => {
  res.status(200).send({ endpoints: endpointsJson });
};

exports.getTopics = (req, res, next) => {
  findTopics().then((topics) => {
    res.status(200).send({ topics });
  });
};
