const { Router } = require('express');
const { createOrder, createProductInOrder } = require('../controllers/orders.controller');
const auth = require('../middlewares/auth.middleware');

const router = Router();

router.post('/orders', auth, createOrder);
router.post('/order/:id/product', createProductInOrder);

module.exports = router;