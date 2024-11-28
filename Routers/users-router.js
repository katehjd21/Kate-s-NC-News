const usersRouter = require("express").Router();
const { getUsers } = require("../controllers/nc-news-controllers");

usersRouter.get("/", getUsers);

module.exports = usersRouter;
