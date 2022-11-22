<template>
    <div>
        <h3 class="text-center">Lista de Carros</h3>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th class="text-center">Nomes</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Carros</th>
                    <th class="text-center">Placa</th>
                    <th class="text-center">RG</th>
                    <th class="text-center">Serviço</th>
                    <th class="text-center">Status</th>
                    <th class="text-center">Ação</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="car in cars" :key="car._id">
                    <td class="text-center">{{car.nome}}</td>
                    <td class="text-center">{{car.email}}</td>
                    <td class="text-center">{{car.carro}}</td>
                    <td class="text-center">{{car.placa}}</td>
                    <td class="text-center">{{car.rg}}</td>
                    <td class="text-center">{{car.serviço}}</td>
                    <td class="text-center">{{car.status}}</td>
                    <td class="text-center">
                        <button @click="editCar(car._id)"
                            class="btn btn-primary" style="margin-bottom: 5px;"> Editar
                        </button>
                    
                        <button class="btn btn-danger" @click="carremuv(car._id)">
                             Delete
                        </button>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
    

</template>
<script>
import router from '../../router/index'
import serviceCar from '../../service/carService'
    export default{
        name:'listCar',
        data(){
            return{
                cars:[]
            }
        },
        methods:{
            async carremuv(id){
                await serviceCar.deleteCar(id)
                this.$swal({
                    title: 'Voce quer deletar esse cliente ?',
                    
                    icon: 'warning',
                    showConfirmButton: true,
                    allowOutsideClick: false,
                    allowEnterKey: true,
                    allowEscapeKey: false,
                    showCancelButton:true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor:"#d33",
                    confirmButtonText:'Sim,delete!'
                    }).then(async (result) => {
                            if (result.value) {
                                await serviceCar.deleteCar(id);
                                this.$swal('Deletado', 'Cliente Excluido', 'success');
                                this.listCar();
                            } else {
                                this.$swal('Cancelado', 'Cliente Não Excluido', 'info');
                            }
                        });
            },
            async listCar(){
                const response = await serviceCar.listcarAll()
                this.cars=response.data
                
            },
            editCar(idi){
                router.push({name:'edit',params:{id:idi}})
                
            }
        },
        mounted(){
            this.listCar()
        }
    }
</script>