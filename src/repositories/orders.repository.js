const { orders, carts } = require("../models");


const createOrder = async (data) => {
  const order = await orders.create(data);
  return order;
};

const updateTotal = async (cart_id, order_id) => {
  const cart = await carts.findByPk(cart_id);
  const order = await orders.findByPk(order_id);
  order.total_price = cart.total_price;
  await order.save();
  return order;
};



module.exports = { createOrder, updateTotal };