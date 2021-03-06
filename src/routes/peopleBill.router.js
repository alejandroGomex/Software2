const express = require ('express')
const router_person= express.Router();
const personBillSchema= require('../models/personBillModel')
/* http://localhost:5000/api/v1/people/person */
router_person.post('/person',(req,res)=>{
  const person=personBillSchema(req.body)
  person.save()
  .then((data)=>res.json(data))
  .catch((error)=>res.json({message:error}));
});

/* http://localhost:5000/api/v1/people  */
router_person.get('/',(req,res)=>{

  personBillSchema
  .findById()
  .then((data)=>res.json(data))
  .catch((error)=>res.json({message:error}));
});

/*  http://localhost:5000/api/v1/people/person/personId*/
router_person.get('/:personId',(req,res)=>{
const {personId}=req.params;
personBillSchema
  .findById(personId)
  .then((data)=>res.json(data))
  .catch((error)=>res.json({message:error}));
});
/*http://localhost:5000/api/v1/people/person/personId  */
router_person.put('/personId',(req,res)=>{

  const {personId}=req.params;
  const {name,lastname,dni,address={city,code_zip,geo}}=req.body;
  personBillSchema
   .updateOne({_id:personId},{$set:{name,lastname,dni,address}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));


});
/*  http://localhost:5000/api/v1/people/person/personId*/
router_person.delete('/personId',(req,res)=>{

  const {personId}=req.params;
  const {name,lastname,dni,address={city,code_zip,geo}}=req.body;
  personBillSchema
  .deleteOne({_id:personId},{$set:{name,lastname,dni,address}})
  .then((data)=>res.json(data))
  .catch((error)=>res.json({message:error}));

});
module.exports = router_person