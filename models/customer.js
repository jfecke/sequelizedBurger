// Export the book model for other files to use
module.exports = function(sequelize, DataTypes) {
                    var Customer = sequelize.define("Customer", {
                        id: {
                            type: DataTypes.INTEGER,
                            autoIncrement: true,
                            primaryKey: true
                            },
                            customer_name: DataTypes.STRING,
                            });
                        return Customer;
                    };