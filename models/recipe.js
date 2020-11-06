// Sequelize layout of what data gets stored when a User saves a recipe

module.exports = function (sequelize, DataTypes) {
    var Recipe = sequelize.define("Recipe", {
        // name
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // link
        link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // json
        recipe: {
            type: DataTypes.JSON,
            allowNull: false
        }
    });
    // Associates the recipe to a specific user
    Recipe.associate = function (models) {
        Recipe.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Recipe;
}