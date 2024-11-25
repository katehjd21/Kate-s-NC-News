const express = require("express");
const app = express();
const { getApi, getTopics } = require("./controllers/nc-news-controllers");
const {
  psqlErrorHandler,
  customErrorHandler,
  serverErrorHandler,
} = require("./error- handlers");

app.get("/api", getApi);

app.get("/api/topics", getTopics);

app.all("*", (req, res) => {
  res.status(404).send({ msg: "404: Not found" });
});

app.use(psqlErrorHandler);
app.use(customErrorHandler);
app.use(serverErrorHandler);

module.exports = app;
