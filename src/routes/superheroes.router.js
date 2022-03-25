const express = require('express');
const superhero_routes= express.Router();
const superheroSchema= require('../models/superheroModel')
/* http://localhost:5000/api/v1/superheroes/superhero */

superhero_routes.post('/superhero',(req,res)=>{
  const hero=superheroSchema(req.body)
  person.save()
  .then((data)=>res.json(data))
  .catch((error)=>res.json({message:error}));
});
/* http://localhost:5000/api/v1/superheroes */

superhero_routes.get('/',(req,res)=>{

  superheroSchema
  .findById()
  .then((data)=>res.json(data))
  .catch((error)=>res.json({message:error}));

});
/* http://localhost:5000/api/v1/superheroes/superhero/superheroId */

superhero_routes.get('/:superheroId',(req,res)=>{

    const {superheroId}=req.params;
    superheroSchema
    .findById(personId)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));});
/* http://localhost:5000/api/v1/superheroes/superhero/superheroId */

superhero_routes.put('/:superheroId',(req,res)=>{

  const {superheroId}=req.params;
  const {superhero,real_name,feature={universe,super_powers,geo},superhero_sidekick={sidekick,side_powers}}=req.body;
  personBillSchema
   .updateOne({_id:personId},{$set:{superhero,real_name,dni,feature,superhero_sidekick}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});
/* http://localhost:5000/api/v1/superheroes/superhero/superheroId */

superhero_routes.delete('/:superheroId', (req, res) => {
  const {superheroId} = req.params
  superheroSchema
  .remove({_id: superheroId})
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}))

})

module.exports= superhero_routes;