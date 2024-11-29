const db = require("../db/connection");

exports.fetchCommentsByArticleId = (article_id) => {
  const queryString = `SELECT * FROM comments WHERE article_id = $1 ORDER BY created_at DESC;`;

  const queryValue = [article_id];

  return db.query(queryString, queryValue).then(({ rows }) => {
    return rows;
  });
};

exports.postCommentForArticle = (username, body, article_id) => {
  if (!username || !body) {
    return Promise.reject({
      status: 400,
      msg: `400: Bad request`,
    });
  }
  const queryString = `INSERT INTO comments(author, body, article_id) VALUES ($1, $2, $3) RETURNING *;`;

  const queryValue = [username, body, article_id];

  return db.query(queryString, queryValue).then(({ rows }) => {
    return rows[0];
  });
};

exports.removeCommentByCommentId = (comment_id) => {
  const queryString = `DELETE FROM comments WHERE comment_id = $1 RETURNING *;`;

  const queryValue = [comment_id];

  return db.query(queryString, queryValue).then(({ rowCount }) => {
    if (rowCount === 0) {
      return Promise.reject({ status: 404, msg: "404: Not found" });
    }
  });
};

exports.updateVoteByCommentId = (inc_votes, comment_id) => {
  const queryString = `UPDATE comments SET votes = votes + $1 WHERE comment_id = $2 RETURNING *;`;

  const queryValues = [inc_votes, comment_id];

  return db.query(queryString, queryValues).then(({ rows }) => {
    if (rows.length === 0) {
      return Promise.reject({ status: 404, msg: "404: Not found" });
    }
    return rows[0];
  });
};
