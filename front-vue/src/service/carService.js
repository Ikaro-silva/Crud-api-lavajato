
import Api from './api'
export default{
    /**
     * Metodo responsavel por cria novo car 
     * (POST):localhost:8080/api/cars
     */
    async createcar(car){
        try{
            
            const response = await Api().post('/cars',car)
            return response.data
            
        }catch(erro){
            return console.log(erro)
        }
    },
    /**
     * Metodo responsavel por listar todos  car 
     * (GET):localhost:8080/api/cars
     */
    async listcarAll(){
        try{
            const response= await Api().get('/cars')
            return response
        }
        catch(err){ 
            return console.log(err)
        }
    },
    /**
     * Metodo responsavel por listar todos  car 
     * (GET):localhost:8080/api/cars
     */
    async updadecars(car){
        try{
            console.log("aq"+car)
            const id = car._id
            const response=await Api().put(`/cars/${id}`,car)
            return response.data
        }
        catch(err){
            return console.log(err)
        }
    },
    /**
     * Metodo responsavel por listar todos  car 
     * (DELETE):localhost:8080/api/cars/:id
     */
    async deleteCar(id) {
        try{
            
            const response = await Api().delete(`/cars/${id}`)
            return response
        }catch(error){
            return console.log("é aq"+error)
        }
    },

    async selectcar(id){
        try{
            const response = await Api().get(`/cars/${id}`)
            return response.data
        }
        catch(error){
            return console.log(error)
        }
    }

}