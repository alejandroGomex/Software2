const express= require('express');
const superheroV2Router = express.Router();
const superhero_v2Schema = require('../models/superhero_v2.model');
const SuperheroService = require('../services/superhero_v2.service')
const service= new SuperheroService();

superheroV2Router.post('/superhero',async(req,res)=>{
  const superheroV2 = superhero_v2Schema(req.body);
  await service
  .createSuperhero(superheroV2)
  .then((data)=>res.status(201).json(data))
  .catch((err)=>res.status(404).json({message:err}));
});
superheroV2Router.get('/superhero',async(req,res)=>{
  await service
  .listSuperheroes()
  .then((data)=>res.status(200).json(data))
  .catch((err)=>res.status(404).json({message:err}));

});
superheroV2Router.get('/:superheroId',async(req,res)=>{
  const {superheroId}= req.params;
  await service
  .showSuperhero(superheroId)
  .then((data)=>res.status(302).json(data))
  .catch((err)=>res.status(404).json({message:err}));
});
superheroV2Router.put('/:superheroId',async(req,res)=>{

  const {superheroId}=req.params;
  const {superhero,realname,superpower}= req.body;
  await service
  .editSuperhero(superheroId,superhero,realname,superpower)
  .then((data)=>res.status(200).json(data))
  .catch((err)=>res.status(304).json({message:err}));

});
superheroV2Router.delete('/:superheroId',async(req,res)=>{
  const {superheroId}= req.params;
  await service
  .removeSuperhero(superheroId)
  .then((data)=>res.status(201).json(data))
  .catch((err)=>res.status(404).json({message:err}));
});

module.exports= superheroV2Router;
