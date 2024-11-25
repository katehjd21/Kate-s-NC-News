const express = require("express");
const app = express();
const { getApi } = require("./controllers/nc-news-controllers");

app.get("/api", getApi);

module.exports = app;
