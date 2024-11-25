const db = require("../db/connection");

exports.retrieveArticleById = (articleId) => {
  const queryString = `SELECT * FROM articles WHERE article_id = $1;`;

  const queryValue = [articleId];

  return db.query(queryString, queryValue).then(({ rows }) => {
    if (rows.length === 0) {
      return Promise.reject({
        status: 404,
        msg: "404: Not found",
      });
    }
    return rows[0];
  });
};
