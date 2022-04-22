const { products } = require('../models');

module.exports = {
  get(req, res) {
    const { query } = req;

    const page = query.page || 1;
    const count = query.count || 5;

    products
      .get(page, count)
      .then((products) => res.status(200).send(products))
      .catch((err) => {
        console.error(err.stack);
        res.sendStatus(500);
      });
  },
};
