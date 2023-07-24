class OrderService {
    constructor(db) {
        this.client = db.sequelize;
        this.Order = db.Order;
    }

    async create(firstName, lastName, dishName) {
        return this.Order.create(
            {
                FirstName: firstName,
                LastName: lastName,
                Dish: dishName,
                Active: true
            }
        ).catch(function (err) {
            console.log(err);
        }) 
    }
}
module.exports = OrderService;