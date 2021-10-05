const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('mysql://muhsin2311:2311@127.0.0.1:3306/inversion')
// const sequelize = new Sequelize(process.env.DB_URL)
const sequelize = new Sequelize('mysql://faris404:12345678@127.0.0.1:3306/sequelize_test') 


const test = async ()=>{
   try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}

// test()
 module.exports = sequelize