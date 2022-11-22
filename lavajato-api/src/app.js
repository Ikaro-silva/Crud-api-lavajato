const express= require ('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const index= require('./routes/index')
const carRouter= require('./routes/car.routes')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(index)
app.use('/api/',carRouter)




module.exports=app