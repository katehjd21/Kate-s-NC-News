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

exports.postCommentForArticle = (article_id, comment) => {
  const queryString = `INSERT INTO comments(author, body, article_id) VALUES ($1, $2, $3) RETURNING *;`;

  const queryValue = [comment.username, comment.body, article_id];

  return db.query(queryString, queryValue).then(({ rows }) => {
    return rows[0];
  });
};
