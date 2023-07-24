class OrderService {
    constructor(db) {
        this.client = db.sequelize;
        this.Order = db.Order;
    }

    async getOrders() {
        return await this.Order.findAll({
            where: {
                Active: true
            }
        })
    }

    async serve(id) {
        return await this.Order.update(
            { Active: false }, 
            { where: { id: id } }
        )
    }

}
module.exports = OrderService;