const router = require('express').Router();
const controller = require('./controllers');

router.get('/', controller.products.get);

router.get('/:productId', controller.details.get);

router.get('/:productId/styles', controller.styles.get);

router.get('/:productId/related', controller.related.get);

module.exports = router;
