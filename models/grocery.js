module.exports = (sequelize, DataTypes) => {
    const Ingredients = sequelize.define('Ingredients', {
      name: DataTypes.STRING,
      inFridge: DataTypes.BOOLEAN,
    });
  
    
    return Ingredients;
  };