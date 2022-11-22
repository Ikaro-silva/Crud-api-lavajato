const app = require ("./src/app");
const index =require('./src/routes/index')
const PORT = process.env.PORT||8080;
app.listen(PORT,()=>{
    console.log(`servidor conectado na porta ${PORT}`)
})
// difinir rota 
app.use(index)
const db = require("./src/models")
db.mongoose
    .connect(db.url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log('Conectado com banco de dados!! ')
    })
    .catch((erro)=>{
        console.log('Erro na canexão'+erro);
        process.exit();
    })