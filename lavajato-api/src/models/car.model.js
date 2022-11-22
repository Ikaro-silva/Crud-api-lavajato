module.exports= mongoose=>{
    try{
        const Car_db= mongoose.model(
            "tabelas_De_Carros",
            mongoose.Schema(
                {
                    nome:String,
                    email:String,
                    carro:String,
                    placa:String,
                    rg:Number,
                    serviço:String,
                    status:String
    
                },
                {timesTamps:true}
            )
        )
        console.log('tabela criada')
        return Car_db
    }
    catch(erro){
        return console.log(erro)

    }
    
    
}