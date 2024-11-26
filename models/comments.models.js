const db = require("../db/connection");

exports.fetchCommentsByArticleId = (article_id) => {
  const queryString = `SELECT * FROM comments WHERE article_id = $1 ORDER BY created_at DESC;`;

  const queryValue = [article_id];

  return db.query(queryString, queryValue).then(({ rows }) => {
    return rows;
  });
};

exports.checkArticleIdExists = (article_id) => {
  return db
    .query(`SELECT * FROM articles WHERE article_id = $1`, [article_id])
    .then(({ rows }) => {
      if (!rows.length) {
        return Promise.reject({ status: 404, msg: "404: Not found" });
      }
    });
};
