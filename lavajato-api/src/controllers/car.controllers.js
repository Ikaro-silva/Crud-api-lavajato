
const { response } = require('express');
const db =require('../models')
const Car_db = db.tabelas_De_Carros;



//Metodo responsavel por criar 'car' 
exports.createCar=async(req,res)=>{
    const car = new Car_db(req.body)

    try{
        
        await car.save();
        console.log(car)
        res.send(car)
    }catch(err){
        res.status(500).send(err)
    }
}

//Metodo responsavel por listar todos 'car'
exports.listAllCars= async(req,res)=>{
    const cars= await Car_db.find({});
    try{
        res.send(cars)
    }catch(err){
        res.status(500).send(err)
    }
};

//Metodo responsavel por editar car
exports.updadeCar= async(req,res)=>{
    try{
        const id = req.params.id;
        const car=await Car_db.findByIdAndUpdate(id, req.body)
        await car.save();
        res.send(car)
    }catch(err){
        res.status(500).send(err)
    }
}

//Metodo responsavel por deletar 'car'
exports.deleteCarById=async(req,res)=>{
    try{
        const car=await Car_db.findByIdAndDelete(req.params.id)
        res.status(200).send()
    }catch(err){
        res.status(500).send(err)
    }
}

exports.selctById= async(req,res)=>{
    try{
        const car =await Car_db.findById(req.params.id)
        res.send(car)
    }
    catch(err){
        res.status(500).send(err)
    }
}

