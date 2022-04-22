const db = require('../../db');

module.exports = {
  get(productId) {
    const queryString = `SELECT
      p.id, p.name, p.slogan, p.description, p.category, p.default_price,
      (
        SELECT json_agg(f)
        FROM (SELECT feature, value FROM features WHERE product_id = $1)
        AS f
      ) AS features
      FROM products p
      WHERE id = $1`;

    return db
      .query(queryString, [productId])
      .then((result) => result.rows)
      .catch(console.error);
  },
};
