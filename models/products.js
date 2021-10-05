const { DataTypes, Model } = require('sequelize');
const  sequelize  = require('./index');


const Products =sequelize. define("products",{
 
  name: {
    type: DataTypes.STRING(100),
  },
  price: {
    type: DataTypes.INTEGER
  },

});

// Products.sync({ alter: true })
module.exports = Products