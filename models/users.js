const { DataTypes, Model } = require('sequelize');
const  sequelize  = require('./index');

const Users=sequelize. define("users",{
 
  username: {
    type: DataTypes.STRING(100),
  },
  password: {
    type: DataTypes.STRING
  },
  token:{
     type:DataTypes.STRING
  }

});

// User.sync({ alter: true })
module.exports = Users