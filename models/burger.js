// Export the book model for other files to use
module.exports = function(sequelize, DataTypes) {
                    var Burger = sequelize.define("Burger", {
                        id: {
                            type: DataTypes.INTEGER,
                            autoIncrement: true,
                            primaryKey: true
                            },
                            burger_name: DataTypes.STRING,
                            devoured: DataTypes.BOOLEAN,
                            customer_id: DataTypes.INTEGER
                        });
                        return Burger;
                    };