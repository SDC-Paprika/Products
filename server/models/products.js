const db = require('../../db');

module.exports = {
  get(page = 1, count = 5) {
    const offset = count * (page - 1);

    return db
      .query('SELECT * from products LIMIT $1 OFFSET $2', [count, offset])
      .then((result) => result.rows)
      .catch(console.error);
  },
};
