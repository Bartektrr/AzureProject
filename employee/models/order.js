module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define('Order', {
        FirstName: Sequelize.DataTypes.STRING,
        LastName: Sequelize.DataTypes.STRING,
        Dish: Sequelize.DataTypes.STRING,
        Active: Sequelize.DataTypes.BOOLEAN
    },{
        timestamps: false
    });
	return Order
}