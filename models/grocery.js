module.exports = (sequelize, DataTypes) => {
    const groceries = sequelize.define('groceries', {
      name: DataTypes.STRING,
      inFridge: DataTypes.BOOLEAN,
    });
  
    
    return groceries;
  };