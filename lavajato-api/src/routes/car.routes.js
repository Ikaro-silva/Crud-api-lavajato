const router = require ('express-promise-router')()
const carControllers = require('../controllers/car.controllers')

//==> Definer rotas Car

//=> rota responsavel por criar uma novo 'car'(POST) localhost:8080/api/cars
router.post('/cars', carControllers.createCar);

//=> rota responsavlvel por listar'car' (GET) localhost:8080/api/cars
router.get('/cars',carControllers.listAllCars);

//=> rota responsavel por editar 'car' (PUT) localhost:8080/api/cars/:id
router.put('/cars/:id', carControllers.updadeCar);

//=> rota responsavel por deletar 'car' (DELETE) localhost:8080/api/cars/:id
router.delete('/cars/:id',carControllers.deleteCarById)

//=> rota responsavel por selecionar um 'car' por ID (GET) localhost:8080/api/cars/:id
router.get('/cars/:id',carControllers.selctById)

module.exports= router


