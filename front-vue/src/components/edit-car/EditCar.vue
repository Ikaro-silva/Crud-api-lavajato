<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Editar Clientes</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="updateCar">
                    <!-- INICIO DO BLOCO -->
                    <div class="form-group">
                        <label class="font-wight-bold">Nome</label>
                        <input 
                            type="text"
                            name="nome"
                            id="nome"
                            class="form-control"
                            v-model="car.nome"  
                        >
                    </div>
                    <div class="form-group">
                        <label class="font-wight-bold">Email</label>
                        <input 
                            type="text"
                            name="Email"
                            id="Email"
                            class="form-control"
                            v-model="car.email"   
                        >
                    </div>
                    <div class="form-group">
                        <label class="font-wight-bold">Carro</label>
                        <input 
                            type="text"
                            name="carro"
                            id="carro"
                            class="form-control"
                            v-model="car.carro"   
                        >
                    </div>
                    <div class="form-group">
                        <label class="font-wight-bold">Placa</label>
                        <input 
                            type="text"
                            name="placa"
                            id="placa"
                            class="form-control"
                            v-model="car.placa"   
                        >
                    </div>
                    <div class="form-group">
                        <label class="font-wight-bold">RG</label>
                        <input 
                            type="number"
                            name="rg"
                            id="rg"
                            class="form-control" 
                            v-model="car.rg"  
                        >
                    </div>
                    <div class="form-group">
                        <label class="font-wight-bold">Serviço</label>
                        <input 
                            type="text"
                            name="serviço"
                            id="serviço"
                            class="form-control" 
                            v-model="car.serviço" 
                        >
                    </div>
                    <div class="form-group">
                        <label class="form-check-label">Status</label>
                        <input 
                            type="checkbox"
                            name="status"
                            id="status"
                            class="form-check-input"
                            v-model="car.Checklist"  
                            value="CheckList feita"
                        >
                    </div>
                    <div class="d-grid gap-2 col-3 mx-auto" style="padding:20px">
                            <button @click="updateCar" class="btn btn-primary" >
                                
                                Update
                            </button>
                        </div>
                </form>

            </div>

        </div>

    </div>
</template>
<script>
    
    import carService from "../../service/carService"
    export default{
        
        name:'editCar',
        data(){
            return{
                car:[]
            }
        },
        mounted() {
            this.getCar()
        },
        methods:{
           async getCar(){
            const {id}=this.$route.params;
            const response=await carService.selectcar(id)
            this.car={...response}
            
           },
           async updateCar(){
            
            await carService.updadecars(this.car)
            
            this.$swal({
            title: 'Cliente Editado',
            icon: 'success',
            showConfirmButton: true,
            allowOutsideClick: false,
            allowEnterKey: true,
            allowEscapeKey: false,
            }).then((data) => {
               this.$router.push({name: 'list'})
                })
           }
        }
    }
</script>