const { related } = require('../models');

module.exports = {
  get(req, res) {
    const { productId } = req.params;

    related
      .get(productId)
      .then((results) => res.status(200).send(results))
      .catch((err) => {
        console.error(err.stack);
        res.sendStatus(500);
      });
  },
};
