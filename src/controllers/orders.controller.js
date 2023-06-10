const OrderServices = require("../services/order.services");

const createOrder = async (req, res, next) => {
    try {
        const order = await OrderServices.createNewOrder(req.body);
        res.status(201).send();
    } catch (error) {
        next(error);
    }
}

const createProductInOrder = async (req, res, next) => {
    try {
        const order = req.body;
        const {id: order_id} = req.params;
        await OrderServices.createProductInOrder({...order, order_id});
        res.status(201).send();
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createOrder,
    createProductInOrder
};