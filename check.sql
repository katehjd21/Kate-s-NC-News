\c nc_news_test
SELECT articles.author, articles.title, articles.article_id, articles.topic, articles.created_at, articles.votes, articles.article_img_url, COUNT(comments.comment_id)::INT AS comment_count 
  FROM articles LEFT JOIN comments ON comments.article_id = articles.article_id WHERE articles.article_id = 2 GROUP BY articles.article_id;