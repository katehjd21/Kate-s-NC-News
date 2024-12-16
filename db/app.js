const express = require("express");
const app = express();
const cors = require("cors");
const {
  psqlErrorHandler,
  customErrorHandler,
  serverErrorHandler,
  notFoundErrorHandler,
} = require("../Errors/error- handlers");

app.use(cors());

app.use(express.json());

const apiRouter = require("../Routers/api-router");

app.use("/api", apiRouter);

app.all("*", notFoundErrorHandler);
app.use(psqlErrorHandler);
app.use(customErrorHandler);
app.use(serverErrorHandler);

module.exports = app;
