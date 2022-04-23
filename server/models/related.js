const db = require('../../db');

module.exports = {
  get(productId) {
    const values = [productId];
    const text = `
      SELECT related_product_id
      FROM related
      WHERE current_product_id = $1`;

    return db
      .query({ text, values, rowMode: 'array' })
      .then(({ rows }) => {
        return rows.flat();
      })
      .catch(console.error);
  },
};
