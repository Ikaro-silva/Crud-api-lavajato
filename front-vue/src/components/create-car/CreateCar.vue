<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Cadastro de Carros</h3>
            </div>
            <div class="card-body">
                <Form @submit.prevt="createCar">
                    <!-- INICIO CLIENTE  -->
                    <div class="form-grupo">
                        <label for="" class="font-weigt-bold">Cliente</label>
                        <Field
                        type="text"
                        class="form-control"
                        name="nome"
                        id="nome"
                        placeholder="Digite o nome do cliente"
                        v-model="nome"
                        :rules="isRequired"
                        />
                        <ErrorMessage name="nome" class="form-control is-invalid text-danger"/>
                    </div>
                    <!-- FIM CLIENTE -->
                    <!-- INICIO EMAIL -->
                    <div class="form-grupo">
                        <label for="" class="font-weigt-bold">Email</label>
                        <Field
                        type="text"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Digite o email do cliente"
                        v-model="email"
                        :rules="isRequired"
                        />
                        <ErrorMessage name="email" class="form-control is-invalid text-danger" />
                    </div>
                    <!-- FIM EMAIL -->
                    <!-- INIIO DO CARRO -->
                    <div class="form-grupo">
                        <label for="" class="font-weigt-bold">Modelo do carro</label>
                        <Field
                            type="text"
                            class="form-control"
                            name="carro"
                            id="carro"
                            placeholder="Digite o modelo do carro"
                            v-model="carro"
                            :rules="isRequired"
                        />
                        <ErrorMessage name="carro" class="form-control is-invalid text-danger"/>
                    </div>
                    <!-- FIM CARRO -->
                    <!--INICIO PLACA-->
                    <div class="form-grup">
                        <label for="" class="font-weigt-bold">Placa do carro</label>
                        <Field
                            class="form-control"
                            name="placa"
                            id="placa"
                            type="text"
                            placeholder="Digite o placa do cliente"
                            v-model="placa"
                            :rules="isRequired"
                            />
                            <ErrorMessage name="placa" class="form-control is-invalid text-danger" />
                    </div>
                    <!-- FIM PLACA -->
                    <!-- INICIO RG -->
                    <div class="form-grup">
                        <label for="" class="font-weigt-bold">RG Cliente</label>
                        <Field
                            class="form-control"
                            name="rg"
                            id="rg"
                            type="number"
                            placeholder="Digite o rg do cliente"
                            v-model="rg"
                            :rules="isRequired"
                            />
                            <ErrorMessage name="rg" class="form-control is-invalid text-danger" />
                    </div>
                    <!-- FIM RG -->
                    <!-- INICO SERVIÇO -->
                    <div class="form-grup">
                        <label for="" class="font-weigt-bold">Serviços</label>
                        <Field
                            class="form-control"
                            name="serviço"
                            id="serviço"
                            type="text"
                            placeholder="Digite o serviço"
                            v-model="serviço"
                            :rules="isRequired"
                            />
                            <ErrorMessage name="serviço" class="form-control is-invalid text-danger" />
                    </div>
                    <!-- FIM SERVIÇO -->
                    <!-- INICO CHECKLIST -->
                    <div class="form-grup" style="margin-top:20px">
                        <label class="form-check-label" style="margin-right:10px" for="flexCheckDefault">CheckList do carro</label>
                        <Field
                            class="form-check-input"
                            name="status"
                            id="status"
                            type="checkbox"
                            value="CheckList feita"
                            v-model="status"
                            />
                    </div>
                    <!-- FIM CHECKLIST -->
                    <!-- FIM DO FORMULARIO DE CARROS -->
                    <div class="d-grid gap-2 col-6 mx-auto" style="padding:20px">
                        <button class="btn btn-primary"  >+Carro</button>
                    </div>
                </Form>

            </div>

        </div>

    </div>
</template>
<script>
    import router from '../../router/index'
    import{Form,Field,ErrorMessage} from 'vee-validate'
    import serviceCar from '../../service/carService'
    export default{
        name:'createCar',
        components:{Form,Field,ErrorMessage},
        data(){
            return{
            
                nome:null,
                email:null,
                carro:null,
                placa:null,
                rg:null,
                serviço:null,
                status:null
            
            }
        },
        methods:{
            async createCar(){
                const car={
                    nome:this.nome,
                    email:this.email,
                    carro:this.carro,
                    placa:this.placa,
                    rg:this.rg,
                    serviço:this.serviço,
                    status:this.status
                }
                try{
                    await serviceCar.createcar(car)
                    this.$swal({
                     title: 'Employee added successfully!',
                     icon: 'success',
                     showConfirmButton: true,
                     allowOutsideClick: false,
                     allowEnterKey: true,
                     allowEscapeKey: false,
                     }).then((data) => {
                        router.push({path:'/listCars'})
                     });
                    
                }catch(erro){
                    console.log(erro)
                }
                
            },

            isRequired(value) {
                if (value && value.trim()) {
                    return true;
                }
                return 'This is required';
            }
        }
    }
</script>