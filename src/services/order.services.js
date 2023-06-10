const { createOrder } = require("../repositories/orders.repository");
const { createProductInOrder, getOneProductInOrder, updateQuantity, updateTotal } = require("../repositories/productsInOrder.repository");

class OrderServices {
    static async createNewOrder(order) {
        try {
            const newOrder = await createOrder(order);
            await updateTotal(order.cart_id, newOrder.id);
            return newOrder;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = OrderServices;