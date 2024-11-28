const topicsRouter = require("express").Router();
const { getTopics } = require("../controllers/nc-news-controllers");

topicsRouter.get("/", getTopics);

module.exports = topicsRouter;
