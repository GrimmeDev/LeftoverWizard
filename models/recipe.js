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
    Recipe.associate = function (models) {
        Recipe.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Recipe;
}