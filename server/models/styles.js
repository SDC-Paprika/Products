const db = require('../../db');

module.exports = {
  get(productId) {
    const values = [productId];
    const text = `
      SELECT
        products.id AS product_id,
        (
          SELECT json_agg(style_agg)
          FROM (
            SELECT
              styles.id AS style_id,
              styles.name,
              styles.original_price,
              styles.sale_price,
              styles.default AS "default?",
              (
                SELECT json_agg(photo_agg)
                FROM (
                  SELECT thumbnail_url, url from photos WHERE photos.style_id = styles.id
                ) AS photo_agg
              ) AS photos, (
                SELECT json_object_agg(
                  skus.id,
                  json_build_object('quantity', skus.quantity, 'size', skus.size)
                ) AS skus
                FROM skus
                WHERE skus.style_id = styles.id
              ) AS skus
            FROM styles
            WHERE product_id = $1
          ) AS style_agg
        ) AS results
      FROM products
      WHERE id = $1`;

    return db
      .query({ text, values })
      .then((result) => result.rows)
      .catch(console.error);
  },
};
