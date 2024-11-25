//postgres errors
exports.psqlErrorHandler = () => {};

//custom errors
exports.customErrorHandler = () => {};

//server errors
exports.serverErrorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: "Internal server error" });
};
