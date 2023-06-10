const { products_in_orders, carts } = require('../models');


const createProductInOrder = async (data) => {
    const productInOrder = await products_in_orders.create(data);
    return productInOrder;
    }

const getOneProductInOrder = async (product_id) => {
    const productInOrder = await products_in_orders.findOne({ where: { product_id } });
    return productInOrder;
    }

const updateQuantity = async (product_id) => {
    const productInOrder = await products_in_orders.increment('quantity', { by: 1, where: { product_id } });
    return productInOrder;
    }

//aactualizar el total_price de la orden con el total_price del modelo del carrito
const updateTotal = async (cart_id, order_id) => {
    const cart = await carts.findByPk(cart_id);
    const order = await orders.findByPk(order_id);
    order.total_price = cart.total_price;
    await order.save();
    return order;
    }


module.exports = { 
    createProductInOrder,
    getOneProductInOrder,
    updateQuantity,
    updateTotal
};