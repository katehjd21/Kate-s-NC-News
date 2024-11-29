const usersRouter = require("express").Router();
const { getUsers, getUsername } = require("../controllers/nc-news-controllers");

usersRouter.get("/", getUsers);

usersRouter.get("/:username", getUsername);

module.exports = usersRouter;
