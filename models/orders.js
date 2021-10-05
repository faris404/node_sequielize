const { DataTypes, Model } = require('sequelize');
const  sequelize  = require('./index');
const Users = require('./users')
const Products = require('./products')

const Orders = sequelize.define('orders', {
   order_date: {
      type: DataTypes.DATE,
   },
  
   
}, { timestamps: false });

Users.belongsToMany(Products,{foreignKey:'user_id',through:Orders,onDelete:'CASCADE',onUpdate:'CASCADE'})
Products.belongsToMany(Users,{foreignKey:'product_id',through:Orders,onDelete:'CASCADE',onUpdate:'CASCADE'})

// Orders.sync({ alter: true })
module.exports = Orders


// user_id: {
//    type: DataTypes.INTEGER,
//    references: {
//       model: Users,
//       key: 'id',
//    }
// },
// product_id: {
//    type: DataTypes.INTEGER,
//    references: {
//       model: Products,
//       key: 'id',
//    }
// }