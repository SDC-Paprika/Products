const db = require('../../db');

module.exports = {
  get(page = 1, count = 5) {
    const offset = count * (page - 1);
    const values = [count, offset];
    const text = 'SELECT * from products LIMIT $1 OFFSET $2';

    return db
      .query({ text, values })
      .then((result) => result.rows)
      .catch(console.error);
  },
};
