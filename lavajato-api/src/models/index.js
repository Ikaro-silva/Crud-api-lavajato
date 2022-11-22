const dbConfig =require ('../config/db.config')

const mongoose = require ( 'mongoose')
mongoose.Promise=global.Promise;


const db = {}
db.mongoose=mongoose;
db.url=dbConfig.url;
db.tabelas_De_Carros= require('./car.model')(mongoose)

module.exports=db