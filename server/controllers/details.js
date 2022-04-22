const { details } = require('../models');

module.exports = {
  get(req, res) {
    const { productId } = req.params;

    details
      .get(productId)
      .then((details) => res.status(200).send(details))
      .catch((err) => {
        console.error(err.stack);
        res.sendStatus(500);
      });
  },
};
