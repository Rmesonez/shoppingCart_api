const { Router } = require('express');
const { createCart, createProductInCart } = require('../controllers/carts.controller');

const router = Router();

router.post('/cart', createCart);
router.post('/cart/:id/product', createProductInCart);

module.exports = router;
