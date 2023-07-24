class OrderService {
    constructor(db) {
        this.client = db.sequelize;
        this.Order = db.Order;
    }

    async getActiveCount() {
        return await this.Order.count({
            where: {
                Active: true
            }
        })
    }

    async getCount() {
        return await this.Order.count()
    }

}
module.exports = OrderService;