const express = require('express')
const Users = require('./models/users')
const Products = require('./models/products')
const Orders = require('./models/orders')


const app = express()
const port = 3000

app.get('/', async (req, res) => {
   let ordersList = await Orders.findAll({
      include: [
          {
            model: Products,
         },
      ]
   })
   console.log(ordersList)
   res.json(ordersList)
})

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})
